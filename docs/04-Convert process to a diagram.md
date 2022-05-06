# Convert process to a diagram

## type


transformer

## description


Create a high level diagram of the process

## actor


GitHub CI

## input


 - Process simplified yaml file

## output


 - Process diagram image

## instructions


1. Using mermaid syntax, create a shape based on the element type: Skewed rectangle for an input-output, rectangle for a transformer

2. Use the 'handle' as text for the each element

3. Draw an arrow from every 'input-output' to every `transformer` that calls it as `input`

4. Draw an arrow from every 'transformer' to every `input-output` that call as `output`

![Image 1 appears here](../docs/images/img1.jpg)

5. When the diagram is finished export a PNG file

6. Save the PNG file to the repo's output folder, name it as 'process-diagram.png'
