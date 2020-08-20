
const fs = require('fs');
const inquirer = require('inquirer');
const qwest = require('./query');




const questionAns = () => {
  return inquirer.prompt(qwest);
}


questionAns().then(answers => {


  let reply = `\n ## ${answers.PROJECT} \n ### Getting started: \n ${answers.START} \n\n ## Deployment: \n ${answers.DEPLOY} \n\n ## Versioning: \n ${answers.VERSIONING}`




  fs.writeFile('README.md', reply, err => {

    if (err) {
      console.error(err)
      process.exit(1);
    }
    console.log(`File has been generated in README.md`);
    process.exit(0);
  });


});


