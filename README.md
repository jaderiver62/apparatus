
# Apparatus
<a href='https://opensource.org/licenses/MIT'><img src='https://img.shields.io/badge/license-MIT-blueviolet' alt='license badge'></a>

---------------------------------------

## Description

This is a CMS-style tech blog application that allows users to signup for login credentials, read, write, edit and delete blog posts on a site.

---------------------------------------

## Project Link

[Apparatus](https://quiet-ocean-12254.herokuapp.com/) 




---------------------------------------

## Screenshots

![Project Image](./public/images/apparatus_screenshot_2.png)
![Project Image](./public/images/apparatus_screenshot_3.png)
![Project Image](./public/images/apparatus_screenshot_5.png)

---------------------------------------

## Installation

To use this application MySQL and Node.js must be installed first.

Clone the repo, and in the command line run 

>
> $ npm install
> 
Next use the dotenv package to secure your credentials - make a .env file in the root of your directory.  

Enter your database name (example: apparatus_db), your MySQL password and user.

To do this you can refer to the following template (Where the '*{your-database-name}/{your-user}/{your-password}*' is located  - you do need to enter your own personal values.)

> DB_NAME="{your-database-name}_db"
>
> DB_USER="{your-user}"
>
> DB_PW="{your-password}"


Finally, run npm start in the command line to generate the apparatus server.

---------------------------------------
## Testing

Provided within this repository are several tests (_tests_) in Jest for the helpers, to use them simply run npm install in the folder, then npm test.

The repo code also contains seed data for testing purposes.  To use the seeds, log into the MySQL cli:

> mysql> source db/schema.sql;
>
> mysql> quit
>

Then in the command line, run:

>
> $ npm run seeds
>

This will load the appartatus_db database with dummy users, comments and posts so you can view and test the functionality.

---------------------------------------

## Languages

                    
* JavaScript
   
* HTML
   
* CSS
   
* ES6
   
* Node
   

---------------------------------------

## Questions

For any input, concerns, bugs or questions please get in touch!  Simply reach out to [Nina Cummings](https://github.com/jaderiver62/apparatus) via GitHub or via e-mail: jaderiver64@gmail.com.

---------------------------------------

## Licence


#### This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
#### &copy; 2021 Nina Cummings

---------------------------------------
    