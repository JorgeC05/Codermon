/**
 * Por ahora este archivo contiene la información necesaria para tener a los
 * pokemon que usaré pero no se tiene implementado el llamado de estos
 * en la lógica, lo que buscaba en este ejercicio era poder modularizar
 * la información para tener orden
 */

export const pokemons = [
    {
    id: 1,
    nombre: "bulbasaur",
    habilidades: [ 
        {
            tipo: "ataque",
            poder: 49,
            nombre: "solar-beam"
        },
        {
            tipo: "ataque",
            poder: 49,
            nombre: "tacleada"
            },
        {
            tipo: "ataque",
            poder: 59,
            nombre: "special-atk"
        }, 
        {
            tipo: "defensa",
            poder: 24,
            nombre: "chlorophyll"
        }
    ],
    imagen: {
            frontal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            espalda: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            presentacion:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    },
    nivel: 1,
    vida: 100,
    descanso: 1,
    alimentacion: 1,
    bienestar: 1
    },
    {
        id: 2,
        nombre: "charmander",
        habilidades: [ 
            {
                tipo: "ataque",
                poder: 52,
                nombre: "fire-punch"
            },
            {
                tipo: "ataque",
                poder: 52,
                nombre: "scratch"
                },
            {
                tipo: "ataque",
                poder: 62,
                nombre: "special-atk"
            }, 
            {
                tipo: "defensa",
                poder: 26,
                nombre: "solar-power"
            }
        ],
        imagen: {
                frontal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                espalda: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
                presentacion:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
        },
        nivel: 1,
        vida: 100,
        descanso: 1,
        alimentacion: 1,
        bienestar: 1
    },
    {
        id: 3,
        nombre: "squirtle",
        habilidades: [ 
            {
                tipo: "ataque",
                poder: 48,
                nombre: "water-gun"
            },
            {
                tipo: "ataque",
                poder: 48,
                nombre: "ice-punch"
                },
            {
                tipo: "ataque",
                poder: 58,
                nombre: "special-atk"
            }, 
            {
                tipo: "defensa",
                poder: 24,
                nombre: "rain-dishr"
            }
        ],
        imagen: {
                frontal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
                espalda: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
                presentacion:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
        },
        nivel: 1,
        vida: 100,
        descanso: 1,
        alimentacion: 1,
        bienestar: 1
    }
];

