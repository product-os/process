const core = require("@actions/core");

async function run(){
    core.setOutput("Hello world");
    console.log("Lorem ipsum");
}

run();
