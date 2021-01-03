require('dotenv').config(); // this is important!
module.exports =
{
    "development": {
        "username": process.env.SQL_USER,
        "password": process.env.SQL_PASSWORD,
        "database": process.env.SQL_DATABASE,
        "host": process.env.SQL_HOST,
        "port": process.env.SQL_PORT,
        "dialect": process.env.SQL_DIALECT
    },
    "test": {
        "username": process.env.SQL_USER,
        "password": process.env.SQL_PASSWORD,
        "database": process.env.SQL_DATABASE,
        "host": process.env.SQL_HOST,
        "dialect": process.env.SQL_DIALECT
    },
    "production": {
        "username": process.env.SQL_USER,
        "password": process.env.SQL_PASSWORD,
        "database": process.env.SQL_DATABASE,
        "host": process.env.SQL_HOST,
        "dialect": process.env.SQL_DIALECT
    }
}