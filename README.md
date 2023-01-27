# Process

**The [process template](https://github.com/product-os/process-template) allows you to create new processes and treat them as products.**

## Highlights

- **Modularity**: Build clear interfaces for your process so other people can use them in their processes or products, or benefit from existing processes (from other repos) for your own process or product
- **Automation**: Take advantage of the CI tools and automations. Convert complex processes into simple transformers.
- **Version control**: Use version control to track and communicate changes to the team
- **Reviewing**: Get reviews from other team members
- **Testing**: Make sure the process is working as expected before implementation
- **Readability**: Auto generate a landr page so navigation through a process is easy an intuitive


## Setup and configuration

Each GitHub repo under Balena has a `.github/workflows/flowzone.yml` file in the top level directory. This tells the various CI (Continuous Integration) tools how to build and test the source code in the repository.

For process repos, we should always have the following contents in the `flowzone.yml` file

```yaml
name: Flowzone

on:
  pull_request:
    types: [opened, synchronize, closed]
    branches: [main, master]
  # allow external contributions to use secrets within trusted code
  pull_request_target:
    types: [opened, synchronize, closed]
    branches: [main, master]

jobs:
  flowzone:
    name: Flowzone
    uses: product-os/flowzone/.github/workflows/flowzone.yml@master
    secrets: inherit
	cloudflare_website: # to be filled in
```

The `cloudflare_website` input field is to be filled in after asking ops to create a website for you.

## Documentation

See the [site](https://processes.pages.dev) for more info

## Getting Help

If you're having any problem, please [raise an issue](https://https://github.com/product-os/process/issues/new) on GitHub and we will be happy to help.
