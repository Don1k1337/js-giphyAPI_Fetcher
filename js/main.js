const giphyApiSearchQuery = document.getElementById('search-input')
const searchBar = document.getElementById( 'search-bar');
const resGifs = document.getElementById('images');

searchBar.addEventListener('submit', function (e) {
        e.preventDefault();
        const userQuery = giphyApiSearchQuery.value
        giphyApiFetcher(userQuery);
    })

const giphyApiFetcher = (userQuery) => {
    const giphyApiKey = 'Pt8zm9hcY7B1ouRWr8DVyRPlaOHP4bPe';
    const giphyApiPath = `https://api.giphy.com/v1/gifs/search?q=${userQuery}&rating=g&api_key=${giphyApiKey}`
    fetch(giphyApiPath)
        .then((response) => {
            return response.json();
        }).then((jsonData) => {
        let resHTML = ''
        jsonData.data.forEach((el) => {
            const imgTitle = el.title;
            const imgUrl = el.images.fixed_width.url;
            const imgWidth = el.images.fixed_width.width;
            const imgHeight = el.images.fixed_height.height;
            resHTML += `<img src="${imgUrl}"
                    class="gif-images" 
                    width="${imgWidth}" height="${imgHeight}"
                    alt="${imgTitle}">`
        })
        resGifs.innerHTML = resHTML
    }).catch((error) => {
        console.log(error.message)
    })
}
