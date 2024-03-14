// Function to generate README content
const generateREADME = (data) => {
    return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
    
  This application is covered under the ${data.license} license.
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For questions, you can reach me via:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  `;
  };
  
  module.exports = generateREADME;
  