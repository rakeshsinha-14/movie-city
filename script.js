console.log("test")

const movieinput = document.getElementById("input");
const btn = document.getElementById("search-button")
const result = document.getElementById("result-page")

// const yourkey = "6b658a2c"

async function getmovies(){
    let movie = movieinput.value;
    const link = `https://www.omdbapi.com/?t=${movie}&apikey=6b658a2c&`
    // console.log(`https://www.omdbapi.com/?t=dunkirk&apikey=6b658a2c&`)
    await fetch(link)
        .then((Response) => Response.json())
            .then((data) => {
                console.log(data);
                console.log(data.Title)
                console.log(data.Year)
                console.log(data.Runtime)
                console.log(data.Actors)
                console.log(data.Director)
                console.log(data.Genre)
                console.log(data.Plot)
                console.log(data.Poster)
                console.log(data.imdbRating)

                result.innerHTML = `
                <div class="poster">
                <img src="${data.Poster}">
                </div>
                <div class="movie-info">
                <h1 class="title">${data.Title}</h1><span>${data.Year}</span>,
                <span>${data.Runtime}</span>
                <p class="details">Director : ${data.Director}</p>
                <p class="details">Actors : ${data.Actors}</p>
                <p class="details">Plot : ${data.Plot}</p>
                <p class="details">Genre : ${data.Genre}</p>
                <p class="details">IMDB rating : ${data.imdbRating}</p>
                </div>

                `
    })
}

btn.onclick = getmovies;
