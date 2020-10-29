- clone the repository using <br/> `git clone git@github.com:priyankag048/datasets.git`
- install node modules using <br/> `lerna link convert && npm install` <br/>
*This will make sure modules for all sub-repos are installed*
- build the packages using <br/> `lerna run build` <br/>
*This command will build the code in all sub-repos*