const Tarea = require("../models/Tarea");

const tareasPost = (nombreTarea, id)=>{
    return Tarea.create({ id: id, nombreTarea: nombreTarea })
}

module.exports = tareasPost;