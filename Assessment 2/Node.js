const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// Initializing the client and database
const { MongoClient, ObjectId } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');

// Variables
const dbName = 'CCLore';
const entriesCol = 'Entries';
const personasCol = 'Personas';
const factionsCol = 'Factions';

// Function that starts the server and obtains the database information
async function startServer() {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);

    // Getting Entries from Database
    app.get("/entries", async (req, res) => {
        res.json(await db.collection(entriesCol).find().toArray());
    });

    // Getting Entry by ID
    app.get("/entries/:id", async (req, res) => {
        res.json(await db.collection(entriesCol).findOne({_id: new ObjectId(req.params.id) }));
    });

    // Getting Personas from Database
    app.get("/personas", async (req, res) => {
        res.json(await db.collection(personasCol).find().toArray());
    });

    // Getting Persona by ID
    app.get("/personas/:id", async (req, res) => {
        res.json(await db.collection(personasCol).findOne({_id: new ObjectId(req.params.id) }));
    });

    // Getting Factions from Database
    app.get("/factions", async (req, res) => {
        res.json(await db.collection(factionsCol).find().toArray());
    });

    // Getting Faction by ID
    app.get("/factions/:id", async (req, res) => {
        res.json(await db.collection(factionsCol).findOne({_id: new ObjectId(req.params.id) }));
    });


    // Log server run
    app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
}

startServer();
