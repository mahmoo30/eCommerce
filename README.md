# E-commerce Back End ![badge](https://img.shields.io/badge/license-MIT-brightgreen)

## Description
The back end for an e-commerce site that takes a working Express.js API and configures it to use Sequelize to interact with a MySQL database.

## 🔍 Table of Contents
- [Description](#description)
- [Installation](#install)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribute)
- [Tests](#test)
- [Sources](#sources)
- [Questions](#questions)

## 💾 Installation
To install necessary dependencies (inquirer), run the following command:
- npm init -y
- npm i mysql2
- npm i sequelize
- npm i dotenv
- npm i express

## Usage
As a manager at an internet retail company, you can use this app as a back end for your e-commerce website that uses the latest technologies so that your company can compete with other e-commerce companies.

- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database

## License
![badge](https://img.shields.io/badge/license-MIT-brightgreen): This application is covered by the MIT license. 

## Contributing
If you want to contribute to this project, you should fork it and do a pull request.

## Tests
To run tests, make sure you are in the Develop folder and then run the following commands:
- mysql -u root -p (enter password when promted) OR mysql -u root (if no password)
- source db/schema.sql
- quit
- node seeds/index.js
- npm start

NOTE: You will need add a .env file to the root of the app with the following details:
- DB_NAME='ecommerce_db'
- DB_USER='root'
- DB_PW='xxx' (leave blank if you had initially set no password to mySQL)

## Sources
- https://github.com/coding-boot-camp/fantastic-umbrella (Starter Code)
- https://github.com/ThomasCalle/Thomas-Object-Relational-Mapping-ORM-E-Commerce-Back-End (Helper Code)

## ✋ Questions
If you have any questions about the repo, open an issue or contact me directly at wasif.96@gmail.com <br />
You can find more of my work on GitHub: [mahmoo30](https://github.com/mahmoo30)

#### This README was generated using a [README-generator](https://github.com/mahmoo30/readmegenerator) 🔥🔥🔥