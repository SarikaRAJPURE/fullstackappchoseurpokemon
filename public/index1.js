//3. When you click the button, Your index.js (sent with index.html) should 
//send a fetch request to route “/get_pokemon_data” 

//3.1. When you get the data, display JUST the names in in a list.
let btn = document.getElementById("getPokemon_btn");
btn.addEventListener('click', async () => {
    let response = await fetch("http://localhost:5000/get_pokemon_data")
    let finalData = await response.json()
    console.log(finalData);
    let body = document.querySelector('body');
    for (let i = 0; i < finalData.length; i++) {
        const para = document.createElement("p");
        para.id = "my-paragraph" + (i + 1);
        para.textContent = `${finalData[i].name}`
        body.appendChild(para)
    }
});


