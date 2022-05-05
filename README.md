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

## To be moved to yaml

```yaml
handle: Abstract idea for a process
type: input-output
description: A well defined idea for how a process should be handled
required:
  - Process steps
  - Process inputs and outputs
optionals:
images:
---
handle: Convert process steps into transformers
type: transformer
description: The process should be expressed with simple transformations
actor: Process owner
access:
  - GitHub account
  - access to 'https://github.com/product-os'
input:
  - Abstract idea for a process
output:
  - Process simplified yaml file
instructions:
images:
---
handle: Process simplified yaml file
type: input-output
description: A yaml file that contains the process transformations
required:
  - inputs
  - transformations
  - outputs
optionals:
images:
---
handle: Convert process to a diagram
type: transformer
description: Create a high level diagram of the process
actor: GitHub CI
access:
input:
  - Process simplified yaml file
output:
  - Process diagram image
instructions: "1. Using mermaid syntax, create a shape based on the element type: Skewed rectangle for an input-output, rectangle for a transformer
2. Use the 'handle' as text for the each element
3. Draw an arrow from every 'input-output' to every `transformer` that calls it as `input`
4. Draw an arrow from every 'transformer' to every `input-output` that call as `output`
5. When the diagram is finished export a PNG file
6. Save the PNG file to the repo's output folder, name it as 'process-diagram.png'"
images:
---
handle: Process diagram image
type: input-output
description: An image of the process flow chart
required:
  - PNG
optionals:
images:
---
handle: Convert simplified yaml to a markdown
type: transformer
description: Convert the yaml file into a landr readable markdown file
actor: GitHub CI
access:
input:
  - Process simplified yaml file
output:
  - Process markdown file
instructions: "1. Copy the yaml file
2. Replace 'handle:' with '#'
3. ..."
images:
---
handle: Process markdown file
type: input-output
description: An image of the process flow chart
required:
  - PNG
optionals:
images:
---
handle: Convert simplified yaml to transformer compliant yaml
type: transformer
description: Convert the yaml file into a yaml code that transformers understand
actor: GitHub CI
access:
input:
  - Process simplified yaml file
output:
  - Jellyfish instance
instructions: "..."
images:
---
handle: Jellyfish instance
type: input-output
description:
required:
  -
optionals:
images:

```
