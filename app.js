const inquirer = require('inquirer');
const mysql = require('mysql');
const figlet = require('figlet');

const connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"sqlROOTpW##",
    database:"ems_db"
});

connection.connect((err) => {
    if (err) {
        console.error("error connecting: "+err.stack);
        return;
    }

    console.log("connected as ID: "+connection.threadId);
    figlet('Employee Management System', (err,result) => {
        console.log(err || result);
        console.log("----------------------------------------------\n");
        console.log("Built by Brandon Lee Piercy, 2020");
        console.log("github.com/brandonleepiercy");
        console.log("----------------------------------------------\n");
        appStart();
    });
});

function appStart() {

    inquirer
        .prompt([
            {
                type:"list",
                name:"choice",
                message:"What would you like to do?",
                choices:["Add a department, role or employee", "View a department, role or employee", "Update an existing department, role or employee", "Exit"]
            }
        ]).then(answers => {
            switch(answers.choice) {
                case "Add a department, role or employee":
                    add();
                break;
                case "View a department, role or employee":
                    view();
                break;
                case "Update an existing department, role or employee":
                    update();
                break;
                case "Exit":
                    console.log("Exiting program, goodbye.");
                    connection.end();
                break;
                default:
                    console.log("Switch case error, exiting program");
                    connection.end();
            }
        }).catch(err => {
            if (error.isTtyError) {
                console.log("Prompt cannot be rendered in the current environment");
            } else {
                console.log("Something else went wrong");
            }
        })
};

function add() {

};

function view() {

};

function update() {

};