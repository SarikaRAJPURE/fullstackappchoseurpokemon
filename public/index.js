
//3. When you click the button, Your index.js (sent with index.html) should 
//send a fetch request to route “/get_pokemon_data” 

//3.1. When you get the data, display JUST the names in in a list.
let btn = document.getElementById("getPokemon_btn");
btn.addEventListener('click', async () => {
    let response = await fetch("http://localhost:5000/get_pokemon_data")
    let finalData = await response.json()
    //console.log(finalData);
    let body = document.querySelector('body');
    for (let i = 0; i < finalData.length; i++) {
        const para = document.createElement("p");
        para.id = "my-paragraph" + (i + 1);
        //console.log(para.id);
        para.textContent = `${finalData[i].name}`
        body.appendChild(para);
        //console.log(`${para}`);
        let paraName = document.getElementById(para.id);
        //console.log(paraName);
        let pokemonName = document.getElementById(para.id);
        //console.log(`${pokemonName}`);
        pokemonName.addEventListener('click', () => {
            const pokemonImage = document.createElement("img");
            let pokemonImageSrc = finalData[i].img + ".jpg";
            pokemonImage.src = pokemonImageSrc;
            body.appendChild(pokemonImage);
            const pokemonAge = document.createElement("h1");
            //para.id = "ageofpokemon" + (i + 1);
            //console.log(para.id);
            //pokemonAge.textContent ="Hi";
            pokemonAge.textContent = `Age : ${finalData[i].age}`
            body.appendChild(pokemonAge);

            //console.log(pokemonImage);     
        });

    }
});

//3.2 *Optional* When a name is clicked, also display the image and age of the clicked pokemon
//***you will need to programmatically add.jpg to the end of the img strings

