const Tarea = require('../models/Tarea')

const  tareasDestroy = async (id, nombreTarea)=>{
    return Tarea.destroy({ where: { id: Number(id) } });
}

module.exports = tareasDestroy;