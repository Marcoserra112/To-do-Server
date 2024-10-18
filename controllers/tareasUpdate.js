const Tarea = require('../models/Tarea')

const tareasUpdate = async (nombreTarea , id ) => {
    await Tarea.update(
        { nombreTarea },
        {where: { id }}
    )

    /*
        UPDATE INTO Tareas
        SET nombreTarea = nombreTarea
        WHERE id = id;
    */
}

module.exports = tareasUpdate;