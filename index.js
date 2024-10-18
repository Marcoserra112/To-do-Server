const express = require("express");
const server = express();
const cors = require('cors');
require("dotenv").config();

const tareasFindAll = require("./controllers/tareasFindAll");
const tareasPost = require("./controllers/tareasPost");
const tareasUpdate = require("./controllers/tareasUpdate");

const database = require("./db");
const tareasDestroy = require("./controllers/tareasDestroy");


server.use(cors())
server.use(express.json());

server.get("/api/tarea", async (req, res) => {
  try {
    const response = await tareasFindAll();
    res.status(200).send(response);
  } catch (err) {
    console.log("Ocurrio un error" + err);
    res.status(500).send("Internal Server Error");
  }
});

server.post("/api/tarea", async (req, res) => {
  try {
    const { nombreTarea, id } = req.body;
    const newTarea = await tareasPost( nombreTarea, id);
    res.status(201).json(newTarea);
  } catch (err) {
    console.log("Ocurrio un error" + err);
    res.status(500).send("Internal Server Error");
  }
});

server.delete("/api/tarea/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await tareasDestroy(id);
    res.sendStatus(200);
  } catch (err) {
    console.log("Ocurrio un error" + err);
    res.status(500).send("Internal Server Error");
  }
});

server.put("/api/tarea/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombreTarea } = req.body;

    await tareasUpdate( nombreTarea, id)

    res.status(200).send("Se Actualizo");
  } catch (err) {
    console.log("Ocurrio un error" + err);
    res.status(500).send("Internal Server Error");
  }
});

const start = () => {
  database.sync({ force: true });

  server.listen(3001, () => {
    console.log("Escuchando en el puerto 3001");
  });
};

start();
