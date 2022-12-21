const jokeEl = document.getElementById('joke')
const btn = document.getElementById('joke-btn');

btn.addEventListener('click', generateJoke)

generateJoke()

//using Async
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

 const res = await fetch('https://icanhazdadjoke.com', config)

 const data = await res.json()
 jokeEl.innerHTML = data.joke

}



//using .then() ---- do not uncomment this line

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }