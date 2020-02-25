# Live demo

You can check for live demo [Here](https://it-shop.herokuapp.com/).

# About the program

A plateform where you can sell and buy it devices. Built with Reals/React.

## Screenshots
![Home page](https://raw.githubusercontent.com/abdellani/it-shop/development/docs/screenshots/screenshot1.png)
![Product details page](https://raw.githubusercontent.com/abdellani/it-shop/development/docs/screenshots/screenshot2.png)
![My products page](https://raw.githubusercontent.com/abdellani/it-shop/development/docs/screenshots/screenshot3.png)
![Statistics page](https://raw.githubusercontent.com/abdellani/it-shop/development/docs/screenshots/screenshot4.png)

# Installation

This project is based on ruby on rails framework. RSpe have been used to implement the different unit and integration tests. To install this project, you'll need to have a running Postgres server in you local computer or network. After cloning the project, you have to run `bundle install` followed by `rails db:migrate`

# Configuration

You'll need to create a `.env` file that will define the following variables.

```yml
DB_HOST="127.0.0.1"
DB_USERNAME="postgres"
DB_PASSWORD="mysecretpassword"
JWT_PASSWORD="mySuperSecretPassword" # A password for coding JWT tokens
IPSTACK_KEY="YOUR_KEY" # You can get your own key from https://ipstack.com/ 
```

# Run the code

To run the application in you development environment, you need to run `rails s`.
To deploy it in heroku, you need first to run `git push heroku master` followed by `heroku run rails db:migrate`

# Get Update

To get the latest updates, you run `git pull origin master`

# Authors

- Mohamed Abdellani -- [User Github link](https://github.com/abdellani)

# Run Tests

The tests are not implement yet.