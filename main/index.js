
const fs = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
  })

  readline.question(`What's the project title ?`, (project_title) => {
    if (project_title === '') return `You need to supply a project  title`;
    readline.question(`How do you get started with the app ?`, (start)=> {
      if (start === '') return `You need to supply how to start the project`;
      readline.question(`How do you deploy this app ?`, (deploy) => {
        if (deploy === '') return `you need to supply a deployment procedure`;
        readline.question(`What is the version of the app ?`,( version) => {
          if (version === '') return `you need to supply the version`;

          let reply = `\n ## ${project_title} \n ### Getting started \n ${start} \n\n ## Deployment \n ${deploy} \n\n ## Versioning \n ${version}`


          fs.writeFile('README.md', reply, err => {

            if (err) {
              console.error(err)
              process.exit(1);
            }
            console.log(`File has been generated in README.md`);
            process.exit(0);
          });

          readline.close()
        });

      });
    });
  });





