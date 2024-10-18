const { Sequelize } = require('sequelize');

//Hola desde GIT
const { DB_URL } = process.env;

console.log(typeof(DB_URL));


const database = new Sequelize(DB_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Puedes cambiar a true si tienes un certificado válido.
      }
    }
  });
// console.log({ DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE })
module.exports = database;


// const database = new Sequelize({
//     host: DB_HOST,
//     username: DB_USER,
//     password: DB_PASSWORD,
//     port: DB_PORT,
//     database: DB_DATABASE,
//     dialect: "postgres",
    
// })