# E-Commerce-Back-End

Building an E-Commerce site using Express.js API to use Sequelize to interact with a MySQL database

![MIT License](https://img.shields.io/badge/license-MIT-green)

# Description :

This application created using mysql,express js
This project is all about back end for an e-commerce site using Express.js, Sequelize to interact with a MySQL database.

## Deployed Application :

[E-Commerce Application Source code](https://github.com/SimonMSelvadurai/E-Commerce-Back-End)

# Table of Contents

- [Demo](#demo)
- [Technology](#technology)
- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Contribution](#contribution)
- [Questions](#questions)

# User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

###Acceptance Criteria
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

# Business Context

- For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important.

- Being able to take persistent notes allows users to have written information available when needed.

# Demo

![DEMO-Tests](./demo/Insomnia_Tests.gif)
![DEMO-Start Application](./demo/Start_Application.gif)

# Technology

**1. [Express.js](https://expressjs.com/)** :

- Web Applications : Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

- APIs : With a myriad of HTTP utility methods and middleware, creating a robust API is quick and easy.

- Performance : Express provides a thin layer of fundamental web application features, without obscuring Node.js features.

**2. [Sequelize](https://sequelize.org/master/index.html)** :

- Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.

# Usage

- Clone this repository to use this application on local machine.

- To install necessary dependencies, run the following command :

```
npm i
```

- The application will be invoked with the following command: This will start localhost server on PORT 3001.

```
node server.js
```

- Application can be verified using isomnia.

# Features

1. Used 'Express.js' to build server

2. Used mysql database for storing the data.

3. Used sequlize for ORM.

4. Application can use run using isomnia.

5. Application allows to create , read , update and delete records from the Tag,Product and Category table.

# License

This project is licensed under MIT license.

# Contribution

Pull requests are always welcome!

# Questions

Questions about this repository? Please contact me at [Simon.Selvadurai0607@gmail.com](mailto:Simon.Selvadurai0607@gmail.com). View more of my work in GitHub at [SimonMSelvadurai](https://github.com/SimonMSelvadurai)
