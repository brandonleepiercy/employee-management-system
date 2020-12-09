//Dependencies
const inquirer = require('inquirer');
const mysql = require('mysql');
const figlet = require('figlet');

//SQL Connection variable
const connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"sqlROOTpW##",
    database:"ems_db"
});

//Using the declared variable to establish a connection to the mySQL server
connection.connect((err) => {
    if (err) {
        console.error("error connecting: "+err.stack);
        return;
    }
    console.log("connected as ID: "+connection.threadId);

    //Building the splash text
    figlet('Employee Management System', (err,result) => {
        console.log(err || result);
        console.log("----------------------------------------------\n");
        console.log("Built by Brandon Lee Piercy, 2020");
        console.log("github.com/brandonleepiercy");
        console.log("----------------------------------------------\n");
        appStart();
    });
});

//Initial inquirer tree
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
    inquirer
        .prompt([
            {
                type:"list",
                name:"choice",
                message:"Would you like to add a new department, role or employee?",
                choices:["Department", "Role", "Employee", "Go Back", "Exit"]
            }
        ]).then(answers => {
                switch(answers.choice) {
                    case "Department":
                        addDeparment();
                    break;
                    case "Role":
                        addRole();
                    break;
                    case "Employee":
                        addEmployee();
                    break;
                    case "Go Back":
                        console.log("Going back");
                        appStart();
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
        });
};

function view() {
    inquirer
        .prompt([
            {
                type:"list",
                name:"choice",
                message:"Would you like to view a department, role or employee?",
                choices:["Department", "Role", "Employee", "Go Back", "Exit"]
            }
        ]).then(answers => {
                switch(answers.choice) {
                    case "Department":
                        viewDeparment();
                    break;
                    case "Role":
                        viewRole();
                    break;
                    case "Employee":
                        viewEmployee();
                    break;
                    case "Go Back":
                        console.log("Going back");
                        appStart();
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
        });
};

function update() {
    inquirer
        .prompt([
            {
                type:"list",
                name:"choice",
                message:"Would you like to update a department, role or employee?",
                choices:["Department", "Role", "Employee", "Go Back", "Exit"]
            }
        ]).then(answers => {
                switch(answers.choice) {
                    case "Department":
                        updateDeparment();
                    break;
                    case "Role":
                        updateRole();
                    break;
                    case "Employee":
                        updateEmployee();
                    break;
                    case "Go Back":
                        console.log("Going back");
                        appStart();
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
        });
};