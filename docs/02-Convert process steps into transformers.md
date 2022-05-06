# Convert process steps into transformers

### type


transformer

### description


The process should be expressed with simple transformations

### actor


Process owner

### access


 - GitHub account
 - access to 'https://github.com/product-os'

### input


 - Abstract idea for a process

### output


 - Process simplified yaml file

### instructions


1. Every step in a process has an input, which after a set of instructions (transformation) becomes an output. The output will become an input for the next step which is a new transformation.

2. The first step is to define what transformations are required, what are the inputs and outputs of each transformation

3. To define an input or an output you can use the 'input-output' element.

4. To define a transformer you can use the 'transformer' element

5. Instructions in a transformer are very important as they describe what exactly needs to be done during these transformation. These steps might be followed my a human being on a manual step or a machine (transformer) when a step is automated.

6. You need to write all these transformation into the 'meta.yml' file, here's a simple example of a transformer that gets the details of a team member and sends them an email with a google form:


