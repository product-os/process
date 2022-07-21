const core = require("@actions/core");
const style = require("ansi-styles");
const github = require('@actions/github');

const yellow = (v) => `${style.yellow.open}${v}${style.yellow.close}`;
const green = (v) => `${style.green.open}${v}${style.green.close}`;

async function run(){
    core.info(green("Process Processor"));    

    const octokit = github.getOctokit(process.env.GITHUB_TOKEN)

    const repoName = JSON.stringify(github.context.payload.repository.name);
    const orgName = JSON.stringify(github.context.payload.repository.organization);
    const authorName = JSON.stringify(github.context.payload.pusher.name);
    
    core.info(yellow(["Org name  ", orgName].join("")))
    core.info(yellow(["Repo name ", repoName].join("")))
    core.info(yellow(["Author    ", authorName].join("")))

    core.info(github.context.payload)
}

run();
