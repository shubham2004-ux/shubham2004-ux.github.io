let movies = [{
        Moviename: 'Avenger',
        rating: 'IMD:7.9',
        poster: "https://m.media-amazon.com/images/I/91zzAMkVCUL._AC_UF1000,1000_QL80_.jpg",
        producer: "Donney Junior,Miss Careolin"
    },


    {
        Moviename: 'Lagan',
        rating: 'IMD:8.2',
        poster: "https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg",
        producer: "Amir Khan,Shri Devi"
    },

    {
        Moviename: "Jhon Wick",
        rating: 'IMD:6.4',
        poster: "https://www.tallengestore.com/cdn/shop/products/JohnWick-KeanuReeves-HollywoodEnglishActionMoviePoster-2_c927bf3a-7e64-4c67-b05f-960c2f2cd3d0.jpg?v=1649071611",
        producer: "Jhon William,Miss Careolin"
    },


    {
        Moviename: 'Black Panther',
        rating: "IMD:4.8",
        poster: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/99790a53131197.596c4c8d36869.jpg",
        producer: "Peater Parker,Anglina Jelous"
    },

    {
        Moviename: 'Leo',
        rating: 'IMD:10.4',
        poster: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/h/q/w/small-vijay-thalapathy-poster-300-gsm-12x18-unframed-rfcp-719-original-imagsgmkjrepjsfh.jpeg?q=20",
        producer: "Thalapathy Vijay,Reshma"
    },


    {
        Moviename: 'Avenger',
        rating: 'IMD:7.9',
        poster: "https://m.media-amazon.com/images/I/91zzAMkVCUL._AC_UF1000,1000_QL80_.jpg",
        producer: "Donney Junior,Miss Careolin"
    },


    {
        Moviename: 'Lagan',
        rating: 'IMD:8.2',
        poster: "https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg",
        producer: "Amir Khan,Shri Devi"
    },

    {
        Moviename: "Jhon Wick",
        rating: 'IMD:6.4',
        poster: "https://www.tallengestore.com/cdn/shop/products/JohnWick-KeanuReeves-HollywoodEnglishActionMoviePoster-2_c927bf3a-7e64-4c67-b05f-960c2f2cd3d0.jpg?v=1649071611",
        producer: "Jhon William,Miss Careolin"
    },


    {
        Moviename: 'Black Panther',
        rating: "IMD:4.8",
        poster: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/99790a53131197.596c4c8d36869.jpg",
        producer: "Peater Parker,Anglina Jelous"
    },

    {
        Moviename: 'Leo',
        rating: 'IMD:10.4',
        poster: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/h/q/w/small-vijay-thalapathy-poster-300-gsm-12x18-unframed-rfcp-719-original-imagsgmkjrepjsfh.jpeg?q=20",
        producer: "Thalapathy Vijay,Reshma"
    }


]

function displayMovies() {
    let htmlMovie = `
`
    for (let i = 0; i < movies.length; i++) {
        htmlMovie = htmlMovie + `<div class=" poster">
    <div class="overlay">
        <div class="all-content">
            <div class="video"></div>
            <div class="rating">
                <h1>Name:-${movies[i].Moviename}</h1>
                <h2>Rating:-&nbsp;${movies[i].rating}</h2>
                <p>Producer:-${movies[i].producer}</p>
            </div>

        </div>
    </div>
    <img class="poster-image" src="${movies[i].poster}" alt="">
</div>`

    }
    document.getElementById('main').innerHTML = htmlMovie
    console.log(htmlMovie)
}
displayMovies()