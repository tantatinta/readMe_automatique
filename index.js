var generateMarkdown = require("./utils/generateMarkdown");
var api = require("./utils/api");
var inquirer = require("inquirer");
var fs = require("fs");

const questions = [
	
	{
		type: "input",
		message: "What is your GitHub user name?",
		name: "username"
	},
	{
		type: "input",
		message: "What is the title of your repository?",
		name: "title"
	},
	{
		type: "input",
		message: "Add a description",
		name: "description"
	},
	{
		type: "input",
		message: "What command do you need to run to start your application?",
		name: "installation",
		default: "npm i"
	},
	{
		type: "input",
		message: "Describe the usage of your application",
		name: "usage"
	},
	{
		type: "list",
		message: "Add a license for your application",
		name: "license",
		choices: [
			"Apache License v2.0",
			"MIT",
			"GNU"
			
		],
		default: "Apache License v2.0"
	},
	{
		type: "input",
		message: "What do users need to contribute to this project?",
		name: "contributions"
	},
	{
		type: "input",
		message: "What command should be run to test?",
		name: "testing"
	}
];

function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, function(error){
		if (error) {
		console.log(error);
		}
	})
}

function init() {
	inquirer.prompt(questions).then(function (answers) {
		api.getUser(answers.username).then(function (response) {
			writeToFile("leeme.md", generateMarkdown({...answers, ...response.data}))

		}).catch(function(error) {
			console.log(error);
		})
	});

}

init();
