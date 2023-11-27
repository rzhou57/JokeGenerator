console.log("Welcome to the Lobster Club Improv Comedy Show!")

document.addEventListener('click', event => {
  if (event.target.id === "button") {
    getJoke();
  }
})

async function getJoke() {
    const options = { 
        method: 'GET', // specify this is a GET request, not a PUT or POST
        headers: {
          "Accept" : "application/json" // request the response in JSON format
        }
      }

      // the final fetch request
    try {
      const response = await fetch('https://icanhazdadjoke.com/', options)
      const responseAsJson = await response.json()
      console.log(response.json())
      document.getElementById("joke").innerHTML = responseAsJson.joke;
    }
    catch (error) {
        console.err(error)
    }

}