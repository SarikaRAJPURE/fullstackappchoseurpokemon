
//Morning Exercise - full stack application
const express = require('express')

const app = express()
//1. Create an express server that serves your index.html from the ‘public’ folder.
app.use(express.static('public'));
//2. HTML file should include an H1 title and a button “get pokemon”.


app.get("/get_pokemon_data", (req, res) => {
    const pokemon = [
        {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur", age: 3},
        {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur", age: 4},
        {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur", age: 5},
        {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander", age: 2},
        {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard", age: 7},
        {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle", age: 8},
        {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle", age: 6}
    ];
    res.send(pokemon);
})

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})