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
        console.log(err || result+"\n");
        console.log("----------------------------------------------\n");
        console.log("Built by Brandon Lee Piercy, 2020\n");
        console.log("github.com/brandonleepiercy\n");
        console.log("Using Inquirer, MySQL, Figlet, Node Package Manager and JavaScript \n")
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

//Inquirer tree which narrows down what type of info the user wishes to add to the database
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

//Inquirer tree which narrows down what type of information the user wishes to view
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

//Inquirer tree which narrows down what type of information the user wishes to update
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

//ADD FUNCTIONS
//Add department
function addDeparment() {
    //Inquirer to get department details
    inquirer
        .prompt([
            {
                type:'input',
                name:'ndept',
                message:'Enter the name of the department:'
            },
            {
                type:'input',
                name:'deptid',
                message:'Enter an ID number for the new department:'
            }
        ]).then(answers => {
            //Generate department
            connection.query(
                `INSERT INTO department (id, name) VALUES (${answers.deptid}, '${answers.ndept}');`,
                function (err) {
                    if (err) throw err;
                    console.log(`Department ${answers.ndept} stored in the database successfully\n`);
                    console.log("---------------------------------------------\n");
                    appStart();
                }
            );
        });
};
//Add role
function addRole() {
    //Inquirer to get role details
    inquirer
        .prompt([
            {
                type:'input',
                name:'nrole',
                message:'Enter the title of the role:'
            },
            {
                type:'input',
                name:'roleid',
                message:'Enter an ID number for the new role:'
            },
            {
                type:'input',
                name:'rolesalary',
                message:'Enter the salary for the new role:'
            },
            {
                type:'input',
                name:'deptid',
                message:'Enter the department ID associated with the new role:'
            }
        ]).then(answers => {
            //Generate role
            connection.query(
                `INSERT INTO role (id, title, salary, department_id) VALUES (${answers.roleid}, '${answers.nrole}', ${answers.rolesalary}, ${answers.deptid});`,
                function (err) {
                    if (err) throw err;
                    console.log(`Role: ${answers.nrole}, salary: ${answers.rolesalary}, dept-id: ${answers.deptid} stored in the database successfully\n`);
                    console.log("---------------------------------------------\n");
                    appStart();
                }
            );
        });
};
//Add employee
function addEmployee() {
    //Inquirer to get employee details
    inquirer
    .prompt([
        {
            type:'input',
            name:'empid',
            message:'Enter the ID number of the employee:'
        },
        {
            type:'input',
            name:'firstname',
            message:'Enter the first name of the employee:'
        },
        {
            type:'input',
            name:'lastname',
            message:'Enter the last name of the employee:'
        },
        {
            type:'input',
            name:'roleid',
            message:'Enter the role ID of the employee'
        },
        {
            type:'input',
            name:'managerid',
            message:'Enter the manager ID of the manager for the new employee (enter 0 for no manager):'
        }
    ]).then(answers => {
        //Generate employee
        connection.query(
            `INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (${answers.empid}, '${answers.firstname}', '${answers.lastname}', ${answers.roleid}, ${answers.managerid});`,
            function (err) {
                if (err) throw err;
                console.log(`Employee ${answers.firstname} ${answers.lastname} stored in the database successfully\n`);
                console.log(`---------------------------------------------\n`);
                appStart();
            }
        );
    });
};

//VIEW FUNCTIONS
//View department
function viewDeparment() {
    //Connection query to pull department details
    connection.query(
        `SELECT * FROM department;`,
        function (err, results) {
            if (err) throw err;
            for (i=0; i<results.length; i++) {
                console.log(`ID: ${results[i].id} \n`);
                console.log(`Name: ${results[i].name} \n`);
                console.log(`---------------------------------------------\n`);
            }
            appStart();
        }
    )
};

//View role
function viewRole() {
    //Connection query to pull role details
    connection.query(
        `SELECT * FROM role;`,
        function (err, results) {
            if (err) throw err;
            for (i=0; i<results.length; i++) {
                console.log(`ID: ${results[i].id} \n`);
                console.log(`Title: ${results[i].title} \n`);
                console.log(`Salary: ${results[i].salary} \n`);
                console.log(`Department ID: ${results[i].department_id} \n`);
                console.log(`---------------------------------------------\n`);
            }
            appStart();
        }
    );
};

//View employee
function viewEmployee() {
    //Connection query to pull employee details
    connection.query(
        `SELECT * FROM employee;`,
        function (err, results) {
            if (err) throw err;
            for (i=0; i<results.length; i++) {
                console.log(`ID: ${results[i].id} \n`);
                console.log(`Name: ${results[i].first_name} ${results[i].last_name} \n`);
                console.log(`Role ID: ${results[i].role_id} \n`);
                console.log(`Manager ID: ${results[i].manager_id} \n`);
                console.log(`---------------------------------------------\n`);
            }
            appStart();
        }
    );
};

//UPDATE FUNCTIONS
//Update department
function updateDeparment() {
    //Connection query to get the names of the current departments in order to dynamically generate the inquirer prompt
    connection.query(
        `SELECT name FROM department;`,
        function (err, results) {
            if (err) throw err;
            choiceArray = [];
            for (i=0; i<results.length; i++) {
                choiceArray.push(results[i].name);
            }
            //Inquirer to narrow down what value to replace in the table
            inquirer
                .prompt([
                    {
                        type:"list",
                        name:"choice",
                        message:"Which department would you like to update?",
                        choices:choiceArray
                    },
                    {
                        type:"list",
                        name:"coltochange",
                        message:"Would you like to edit the index or the name?",
                        choices:["id","name"]
                    },
                    {
                        type:"input",
                        name:"newval",
                        message:"What would you like to change it to?:"
                    }
                ]).then(answers => {
                    //Updating the selected value in the table
                    connection.query(
                        `UPDATE department SET ${answers.coltochange} = '${answers.newval}' WHERE name = '${answers.choice}'`,
                        function (err) {
                            if (err) throw err;
                            console.log(`Department ${answers.choice} updated successfully`);
                            appStart();
                        }
                    )
                })
        }
    )
};

//Update role
function updateRole() {
    connection.query(
        `SELECT title FROM role;`,
        function (err, results) {
            if (err) throw err;
            choiceArray = [];
            for (i=0; i<results.length; i++) {
                choiceArray.push(results[i].title);
            }
            inquirer
                .prompt([
                    {
                        type:"list",
                        name:"choice",
                        message:"Which role would you like to update?",
                        choices:choiceArray
                    },
                    {
                        type:"list",
                        name:"coltochange",
                        message:"What would you like to edit?",
                        choices:["id","title", "salary", "department_id"]
                    },
                    {
                        type:"input",
                        name:"newval",
                        message:"What would you like to change it to?:"
                    }
                ]).then(answers => {
                    connection.query(
                        `UPDATE role SET ${answers.coltochange} = '${answers.newval}' WHERE title = '${answers.choice}'`,
                        function (err) {
                            if (err) throw err;
                            console.log(`Role ${answers.choice} updated successfully`);
                            appStart();
                        }
                    )
                })
        }
    )
};

//Update employee
function updateEmployee() {
    connection.query(
        `SELECT id FROM employee;`,
        function (err, results) {
            if (err) throw err;
            choiceArray = [];
            for (i=0; i<results.length; i++) {
                choiceArray.push(results[i].id);
            }
            inquirer
                .prompt([
                    {
                        type:"list",
                        name:"choice",
                        message:"Which employee would you like to update? (This is a list of employee ID numbers)",
                        choices:choiceArray
                    },
                    {
                        type:"list",
                        name:"coltochange",
                        message:"What would you like to edit?",
                        choices:["id","first_name", "last_name", "role_id", "manager_id"]
                    },
                    {
                        type:"input",
                        name:"newval",
                        message:"What would you like to change it to?:"
                    }
                ]).then(answers => {
                    connection.query(
                        `UPDATE employee SET ${answers.coltochange} = '${answers.newval}' WHERE id = '${answers.choice}'`,
                        function (err) {
                            if (err) throw err;
                            console.log(`Employee ID: ${answers.choice} updated successfully`);
                            appStart();
                        }
                    )
                })
        }
    )
};