const { DataTypes } = require('sequelize')
const database = require('../db')



const Tarea = database.define("Tarea", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreTarea: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = Tarea;


