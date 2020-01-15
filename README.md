Data Structures and Algorithms
---
`datasets` is a library which provides easy programmatic access to common data structures and algorithms in Javascript/Typescript.

### Overview

#### Implemented Data Structures

<a href="packages/stack">Stack</a> :  linear data structure which follows a particular order, LIFO ( Last In First Out )

<a href="packages/queue">Queue</a> :  linear data structure which follows a particular order, FIFO ( First In First Out )

<a href="packages/linkedlist">Linked-List</a> :  linear data structure in which the elements are linked using pointers.

The project is built with monorepo architecture using <a href="https://github.com/lerna/lerna"> *lerna* </a>.



### Dev Installation

- clone the repository using <br/> `git clone git@github.com:priyankag048/datasets.git`

- install node modules using <br/> `lerna bootstrap` <br/>
*This will make sure modules for all sub-repos are installed*

- build the packages using <br/> `lerna run build` <br/>
*This command will build the code in all sub-repos*


### Test the application

The project is using <a href="https://jestjs.io/"> *Jest* </a> testing framework for unit test case coverage.

- test the packages using <br/> `lerna run test` <br/>
*This command will test the code in all sub-repos and will generate a coverage report for each syb-repos*


