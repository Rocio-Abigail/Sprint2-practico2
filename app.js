const mongoose = require('mongoose');

// Conexión a la base de datos
mongoose.connect('mongodb+srv://Grupo-13:grupo13@cursadanodejs.ls9ii.mongodb.net/Node-js')
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(error => console.error('Error al conectar a MongoDB:', error));

    // Definir el esquema y modelo
    const superheroSchema = new mongoose.Schema({
        nombreSuperHeroe: { type: String, required: true },
        nombreReal: { type: String, required: true },
        edad: { type: Number, min: 0 },
        planetaOrigen: { type: String, default: 'Desconocido' },
        debilidad: String,
        poderes: [String],
        aliados: [String],
        enemigos: [String],
        createdAt: { type: Date, default: Date.now },
        creador: String
    }, { collection: 'Grupo-13' });
    
    const SuperHero = mongoose.model('SuperHero', superheroSchema);

//Método para insertar un superhéroe
async function insertSuperHero() {
    const hero = new SuperHero({
        nombreSuperHeroe: 'Spiderman',
        nombreReal: 'Peter Parker',
        edad: 25,
        planetaOrigen: 'Tierra',
        debilidad: 'Radioactiva',
        poderes: ['Trepar paredes', 'Sentido arácnido', 'Super fuerza', 'Agilidad'],
        aliados: ['Ironman'],
        enemigos: ['Duende Verde'],
        creador: 'Rocio'
    });
    await hero.save();
    console.log('Superhéroe insertado:', hero);
}

//Método para insertar Multiples Superhéroes
async function insertMultipleSuperHeroes() {
    const heroes = [
      
        {
            nombreSuperHeroe: 'Ironman',
            nombreReal: 'Toni Stark',
            edad: 45,
            planetaOrigen: 'Tierra',
            debilidad: 'dependiente de la tecnología',
            poderes: ['Armadura blindada','Volar','Láseres'],
            aliados: ['Spiderman','Thor'],
            enemigos: ['Mandarin'],
            creador: 'Rocio'
        },
        {
            nombreSuperHeroe: 'Thor',
            nombreReal: 'Thor Odinson',
            edad: 1000,
            planetaOrigen: 'Asgard',
            debilidad: 'Destruir su martillo',
            poderes: ['Controlar el trueno', 'Fuerza sobrehumana', 'Inmortal'],
            aliados: ['Loki'],
            enemigos: ['Hela'],
            creador: 'Rocio'
        },
        {
            nombreSuperHeroe: 'Batman',
            nombreReal: 'Bruce Wayne',
            edad: 35,
            planetaOrigen: 'Tierra',
            debilidad: 'Sin poderes sobrehumanos',
            poderes: ['Inteligencia', 'Artes marciales', 'Tecnología avanzada', 'Sigilo'],
            aliados: ['Robin', 'Alfred', 'Wonder Woman'],
            enemigos: ['Joker', 'Pingüino', 'Enigma'],
            creador: 'Rocio'
        },
        {
            nombreSuperHeroe: 'Superman',
            nombreReal: 'Clark Kent',
            edad: 30,
            planetaOrigen: 'Krypton',
            debilidad: 'Kryptonita',
            poderes: ['Vuelo', 'Super fuerza', 'Visión láser', 'Invulnerabilidad'],
            aliados: ['Lois Lane', 'Batman', 'Wonder Woman'],
            enemigos: ['Lex Luthor', 'Doomsday'],
            creador: 'Rocio'
        },
        {
            nombreSuperHeroe: 'Quik shadow',
            nombreReal: 'Dante Adams',
            edad: 29,
            planetaOrigen: 'Tierra',
            debilidad:'Exposición prolongada a la luz intensa',
            poderes: ['Manipulación de sombras','Invisibilidad en la oscuridad'],
            aliados: ['Black Widow'],
            enemigos: ['Nightmare'],
            creador: 'Rocio'
        }
    ];

    await SuperHero.insertMany(heroes);
    console.log('Superhéroes insertados:', heroes);
}


// Método para actualizar un superhéroe
async function updateSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.updateOne(
        { nombreSuperHeroe: nombreSuperHeroe },
        { $set: { edad: 26 } }
    );
    console.log('Resultado de la actualización:', result);
}

// Método para buscar superhéroes por planeta de origen
async function findSuperHeroes() {
    const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
    console.log('Superhéroes encontrados:', heroes);
}

// Método para eliminar un superhéroe
async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
    console.log('Superhéroe eliminado:', result);
}

// Método para eliminar todos los superheroes
async function deleteAllSuperHeroes() {
    const result = await SuperHero.deleteMany({});
    console.log(`Todos los superhéroes han sido eliminados:`, result);
}

// Ejecutar funciones de prueba
(async () => {
    //await insertSuperHero();
    //await insertMultipleSuperHeroes();
    //await updateSuperHero('Spiderman');
    await findSuperHeroes();
    //await deleteSuperHero('Spiderman');
    //await deleteAllSuperHeroes();
})();
