# Process

**The [process template](https://github.com/product-os/process-template) allows you to create new processes and treat them as products.**

## Highlights

- **Modularity**: Build clear interfaces for your process so other people can use them in their processes or products, or benefit from existing processes (from other repos) for your own process or product
- **Automation**: Take advantage of the CI tools and automations. Convert complex processes into simple transformers.
- **Version control**: Use version control to track and communicate changes to the team
- **Reviewing**: Get reviews from other team members
- **Testing**: Make sure the process is working as expected before implementation
- **Readability**: Auto generate a landr page so navigation through a process is easy an intuitive

## Process diagram

The file process-diagram.md contains the mermaid diagram auto-generated from meta.yml by using the `mermaid` command of our hack-week cli tool: https://github.com/balena-io-playground/contract-to-markdown.

## Setup and configuration

Each GitHub repo under Balena has a `repo.yml` file in the top level directory. This tells the various CI (Continuous Integration) tools how to build and test the source code in the repository.

For process repos, we should always have the following contents in the `repo.yml` file

```yaml
type: process
release: github

```

## Documentation

See the [docs](./docs) folder.

## Getting Help

If you're having any problem, please [raise an issue](https://https://github.com/product-os/process/issues/new) on GitHub and we will be happy to help.
