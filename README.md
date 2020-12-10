
# Employee Management System
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description

The Employee Management System app is a Command Line Interface application running on Javascript utilizing a MySQL server. The app utilizes a series of inquirer prompts to help the user navigate through the CLI in order to add, view, or update departments, roles, or employess. The inquirer prompts are connected to MySQL tables through connection queries which select, update and insert into the corresponding database. A schema file is provided within this repository which will automatically set up the corresponding SQL database. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

First step is to set up the MySQL server, using the schema.sql file provided within the repository.
Copy and paste the contents of the schema.sql file into an instance of MySQL Workbench and create the database on your machine.
Note: port, host, user, and password settings may all have to be adjusted

After creating the MySQL database, use terminal to navigate into the repo directory. Type "npm install" into CMD to install the neccesary node packages for this repository.

Once the node modules are installed and the SQL settings are configured, the user can type "node app.js" into the terminal to launch the program.

## Usage

Updating and maintaining a MySQL database which is structured to store data about employees, roles and departments within an organization. The program keeps track of IDs, salaries, names and more.

Future releases will add the ability to delete items from database, dynamically total the salary expense per department, or for the whole organization.

## Credits

Brandon Lee Piercy

## License

MIT

## Tests

none yet

## Questions

You can contact me at b.piercy567@gmail.com in case you have any questions or concerns about this repository.
You may also reach me or browse my other repositories at my [Github Profile](https://github.com/brandonleepiercy)
