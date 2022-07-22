import core from "@actions/core"
import style from "ansi-styles"
import github from '@actions/github'
// const io = require('@actions/io');
import exec from '@actions/exec';

const yellow = (v) => `${style.yellow.open}${v}${style.yellow.close}`;
const green = (v) => `${style.green.open}${v}${style.green.close}`;

import {unified} from 'unified'
import remarkParse from 'remark-parse'


async function run(){
    core.info(green("Process Processor"));    

    const octokit = github.getOctokit(process.env.GITHUB_TOKEN)

    const repoName = JSON.stringify(github.context.payload.repository.name);
    const orgName = JSON.stringify(github.context.payload.repository.organization);
    const authorName = JSON.stringify(github.context.payload.pusher.name);
    
    core.info(yellow(["Org name  ", orgName].join("")))
    core.info(yellow(["Repo name ", repoName].join("")))
    core.info(yellow(["Author    ", authorName].join("")))

    core.info(JSON.stringify(github.context.payload, null, 2))
    await exec.getExecOutput('ls -lah');
    let myResult = unified()
    .use(remarkParse)
    .parse('# Hi\n\n*Hello*, world!');

    core.info(JSON.stringify(myResult, null, "   "));
}

run();
