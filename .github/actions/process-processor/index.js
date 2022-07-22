import core from "@actions/core"
import style from "ansi-styles"
import github from '@actions/github'
// const io = require('@actions/io');
import exec from '@actions/exec';
import {unified} from 'unified'
import remarkParse from 'remark-parse'

const yellow = (v) => `${style.yellow.open}${v}${style.yellow.close}`;
const green = (v) => `${style.green.open}${v}${style.green.close}`;


async function parseDocs(filePath) {
    const fileContents = fs.readFileSync(filePath).toString()

    let myResult = unified()
	.use(remarkParse)
	.parse(fileContents);
    
    // console.log(JSON.stringify(myResult, null, 2))
    
    for (let i=0; i< myResult.children.length; i++){
	
	switch (myResult.children[i].type){
	case 'heading':
	    console.log(myResult.children[i].children[0].value)
	    break;
	case 'paragraph':
	    // dont print the paragraph
	    break;
	case 'list':
	    for (let j=0; j<myResult.children[i].children.length; j++){
		console.log("  - ", myResult.children[i].children[j].children[0].children[0].value)
	    }
	    break;
	    
	}
    }

}

async function run(){
    core.info(green("Process Processor"));    

    const octokit = github.getOctokit(process.env.GITHUB_TOKEN)

    const repoName = JSON.stringify(github.context.payload.repository.name);
    const orgName = JSON.stringify(github.context.payload.repository.organization);
    const authorName = JSON.stringify(github.context.payload.pusher.name);
    
    core.info(yellow(["Org name  ", orgName].join("")))
    core.info(yellow(["Repo name ", repoName].join("")))
    core.info(yellow(["Author    ", authorName].join("")))

    // core.info(JSON.stringify(github.context.payload, null, 2))
    let lsOutput = await exec.getExecOutput('ls -lah docs/*.md');
    core.info(lsOutput.stdout);
}

run();
