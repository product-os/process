# Process

**The [process template](https://github.com/product-os/process-template) allows you to create new processes and treat them as products.**

## Highlights

- **Version control**: Use version control to track and communicate changes to the team
- **Reviewing**: Get reviews from other team members
- **Testing**: Make sure the process is working as expected before implementation
- **Modularity**: Build clear interfaces for your process so other people can use it in their processes or products, or use already existing process to enable your process
- **Automation**: Take advange of the CI tools and automations. Convert complex processes into simple transformers.

## Setup and configuration

Each GitHub repo under Balena has a `repo.yml` file in the top level directory. This tells the various CI (Continuous Integration) tools how to build and test the source code in the repository.

For process repos, we should always have the following contents in the `repo.yml` file

```yaml
type: TBC
release: github

```


## Documentation

TBC

## Getting Help

If you're having any problem, please [raise an issue](https://https://github.com/product-os/process/issues/new) on GitHub and we will be happy to help.
