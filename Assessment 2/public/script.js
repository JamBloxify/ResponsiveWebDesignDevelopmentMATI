// -- ENTRIES --
// Display Entries in list
async function loadEntries() {
    const res = await fetch('entries');
    const data = await res.json();

    const list = document.getElementById("logList");
    list.innerHTML = ""; // clear old list

    data.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = entry.title;
        li.addEventListener("click", () => loadEntry(entry._id));
        list.appendChild(li);
    });
}

// Reference ChatGPT: "How can I connect my MongoDB format to my HTML?"
// Display content on the main frame
async function loadEntry(id) {
    const res = await fetch(`entries/${id}`);
    const entry = await res.json();

    document.getElementById('entryTitle').textContent = entry.title;
    document.getElementById('entryImage').src = entry.image;
    document.getElementById('dateCreated').textContent = entry.dateCreated;
    document.getElementById('summary').textContent = entry.summary;
    document.getElementById('history').textContent = entry.history;
    document.getElementById('description').textContent = entry.description;
    document.getElementById('aftermath').textContent = entry.aftermath;
    document.getElementById('relations').textContent = entry.relations;
    document.getElementById('logImage').src = entry.thumbnail;
}

// Nav Button Entries
document.getElementById('navEntries').addEventListener('click', () => {
    loadEntries();
});


// -- PERSONAS --
// Display Personas in list
async function loadPersonas() {
    const res = await fetch('personas');
    const data = await res.json();

    const list = document.getElementById("logList");
    list.innerHTML = "";

    data.forEach(persona => {
        const li = document.createElement("li");
        li.textContent = persona.title;
        li.addEventListener("click", () => loadPersona(persona._id));
        list.appendChild(li);
    });
}

// Display content on the main frame
async function loadPersona(id) {
    const res = await fetch(`personas/${id}`);
    const persona = await res.json();

    document.getElementById('entryTitle').textContent = persona.title;
    document.getElementById('entryImage').src = persona.image;
    document.getElementById('dateCreated').textContent = "";
    document.getElementById('summary').textContent = "";
    document.getElementById('history').textContent = "";
    document.getElementById('description').textContent = persona.description;
    document.getElementById('aftermath').textContent = "";
    document.getElementById('relations').textContent = persona.relations;
    document.getElementById('logImage').src = persona.thumbnail;
}

// Nav Button Personas
document.getElementById('navPersonas').addEventListener('click', () => {
    loadPersonas();
});


// -- FACTIONS --
// Display Factions in list
async function loadFactions() {
    const res = await fetch('factions');
    const data = await res.json();

    const list = document.getElementById("logList");
    list.innerHTML = "";

    data.forEach(faction => {
        const li = document.createElement("li");
        li.textContent = faction.title;
        li.addEventListener("click", () => loadFaction(faction._id));
        list.appendChild(li);
    });
}

// Display content on the main frame
async function loadFaction(id) {
    const res = await fetch(`factions/${id}`);
    const faction = await res.json();

    document.getElementById('entryTitle').textContent = faction.title;
    document.getElementById('entryImage').src = faction.image;
    document.getElementById('dateCreated').textContent = "";
    document.getElementById('summary').textContent = "";
    document.getElementById('history').textContent = faction.history;
    document.getElementById('description').textContent = faction.description;
    document.getElementById('aftermath').textContent = "";
    document.getElementById('relations').textContent = faction.relations;
    document.getElementById('logImage').src = faction.thumbnail;
}

// Nav Button Factions
document.getElementById('navFactions').addEventListener('click', () => {
    loadFactions();
});



// Load entries on page open
loadEntries();