let butt = document.getElementById("butt");
butt.addEventListener("click", () => {
    getJoke();
})
const getJoke = async() => {
    try {
        let response = await fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`);
        let data = await response.json();
        //console.log(data)
        document.getElementById("text").innerHTML = "";
        let div = document.createElement("div");
        div.innerHTML = `${data.joke}`
        document.getElementById("text").append(div);
    } catch (error) {
        console.error("Error fetching joke:", error);
    }
}