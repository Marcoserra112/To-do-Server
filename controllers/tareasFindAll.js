const Tarea = require("../models/Tarea");

const tareasFindAll = async ()=>{
    const response = await Tarea.findAll();
    return response;
}


module.exports = tareasFindAll