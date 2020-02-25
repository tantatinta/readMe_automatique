
function generateMarkdown(data) {
  console.log("INSIDE GENERATE MARKDOWN:", data);
  return `
# ${data.title}
![licensebadge](https://img.shields.io/badge/license-${encodeURI(data.license)}-blue)

## Description

${data.description}


## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Test)
* [Questions?](#Questions?)



## Installation
Run:
\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}


## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contributions}


## Tests
To test this app, run:
\`\`\`
${data.testing}
\`\`\`

## Questions?
Please contact:

GitHub user ${data.username}

${data.email}

![alttext](${data.avatar_url})



`;
}

module.exports = generateMarkdown;
