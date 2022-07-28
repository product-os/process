import core from "@actions/core"
import style from "ansi-styles"
import github from '@actions/github'
// const io = require('@actions/io');
import exec from '@actions/exec';
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import fs from 'fs'
import path from 'path'
import * as yaml from 'js-yaml'

const yellow = (v) => `${style.yellow.open}${v}${style.yellow.close}`;
const green = (v) => `${style.green.open}${v}${style.green.close}`;


async function generateMermaid(file){
    var ioindex = 0;
    var ioarray = [];
    var tindex = 0;
    var tarray = [];
    let mermaid = '```mermaid\n';
    const elements = yaml.loadAll(fs.readFileSync(file, 'utf8'));
    //    console.log('graph');
    mermaid = mermaid.concat('graph\n');
    for (const element of elements) {
        if (element.type === 'transformer') {
            tarray[tindex++] = element.handle;
        }
        else if (element.type === 'input-output') {

            // console.log("IO" + ioindex.toString() + "[<b>" + element.handle + "</b>]");
            mermaid = mermaid.concat("IO" + ioindex.toString() + "[/<b>" + element.handle + "</b>");

            for (let req in element.required) {
                // console.log("<br/>-", element.required[req]);
                mermaid = mermaid.concat("<br/>-", element.required[req]);
            }
            for (let opt in element.optional) {
                // console.log("<br/>- optional ", element.optional[opt]);
                mermaid = mermaid.concat("<br/>- optional ", element.optional[opt]);
            }
            ioarray[ioindex++] = element.handle;
            mermaid = mermaid.concat('/]\n');
        }
    }
    for (const element of elements) {
        if (element.type === 'transformer') {
            // The next 2 lines mean that we can only use one input or output for each transformer
            // if there are more than 1 mentioned, they will be ignored
            var inputindex = ioarray.indexOf(element.input[0]);
            var outputindex = ioarray.indexOf(element.output[0]);
            var tindex = tarray.indexOf(element.handle);
            // console.log('IO' + inputindex + ' --> T' + tindex + '{' + element.handle + '} --> IO' + outputindex);
            mermaid = mermaid.concat('IO' + inputindex + ' --> T' + tindex + '[' + element.handle + '] --> IO' + outputindex)
            mermaid = mermaid.concat('\n');
        }
    }
    mermaid = mermaid.concat('\n```\n')
    // fs.writeFileSync('process-diagram.md', mermaid, { encoding: 'utf8' })
    console.log(mermaid);
}


async function parseDocs(filePath) {
    const fileContents = fs.readFileSync(filePath).toString()
    // fs.appendFileSync(filePath.split('.')[0]+'.yml', 'data to append');

    let myResult = unified()
	.use(remarkParse)
	.parse(fileContents);
    let myYAML = '';
    // console.log(JSON.stringify(myResult, null, 2))
    
    for (let i=0; i< myResult.children.length; i++){
	
	switch (myResult.children[i].type){
	case 'heading':
	    // console.log(myResult.children[i].children[0].value)
	    fs.appendFileSync(filePath.split('.')[0]+'.yml',myResult.children[i].children[0].value+'\n');
	    break;
	case 'paragraph':
	    // dont print the paragraph
	    break;
	case 'list':
	    for (let j=0; j<myResult.children[i].children.length; j++){
		// console.log("  - ", myResult.children[i].children[j].children[0].children[0].value)
		fs.appendFileSync(filePath.split('.')[0]+'.yml', "  - "+myResult.children[i].children[j].children[0].children[0].value+'\n');
	    }
	    break;
	    
	}
	
    }
    // print the contents of the yaml file
    const yamlContents = fs.readFileSync(filePath.split('.')[0]+'.yml').toString()
    core.info(yamlContents);
    generateMermaid(filePath.split('.')[0]+'.yml')
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

    // Look for files only in the docs folder
    fs.readdir('docs/', (err, files) => {
	if (err)
	    core.setFailed("No docs folder found?",err);
	else {
	    console.log("\Filenames with the .md extension:");
	    files.forEach(file => {
		if (path.extname(file) == ".md"){
		    core.info(green(file));
		    parseDocs('docs/'+file)
		}
	    })
	}
    })
}


run();
