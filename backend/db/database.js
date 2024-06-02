import mysql from 'mysql';
import env from 'dotenv';
import fs from 'fs';
env.config();

export const pool = mysql.createPool({
    connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
 
  
});

function createDB(dbName){
    pool.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, (error, results, files) => {
        if(error){
            console.error("Error while creating database "+ error);
        }
        else{
            console.log("Database created successfully or already exists  "+dbName);
        }
    });

};

const dbName = 'my_clinic';
createDB(dbName);

export const poolWithDB = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database: dbName
})