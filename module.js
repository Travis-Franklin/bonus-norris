
function getJoke(){
    const jokeURL = 'https://api.chucknorris.io/jokes/random?category=dev';
    return axios.get(jokeURL)
    .then(response => {
        return response.data.value;
    })
}

module.exports = {
    getJoke,
};