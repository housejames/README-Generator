const fs = require('fs');
const inquirer = require('inquirer');
const generateREADME = require('./generateREADME');

// Function to prompt user for information
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter your project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ]);
};

// Function to initialize application
const init = async () => {
  try {
    // Prompt user for information
    const answers = await promptUser();

    // Generate README content
    const readmeContent = generateREADME(answers);

     // Write README file
     const fileName = 'NEW_README.md'; // Change the filename as per your requirement
    fs.writeFileSync(fileName, readmeContent);

    console.log('README.md generated successfully!');
  } catch (error) {
    console.error('Error generating README:', error);
  }
};

// Run application
init();
