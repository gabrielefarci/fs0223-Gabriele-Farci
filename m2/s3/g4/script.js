const apiKey = 'cnpBfLXfLu117f6grzkyLdwTpCICS4KCr3UAunELdAwclwb74HOhJGl9';
const cityURL = 'https://api.pexels.com/v1/search?query=city';



fetch(cityURL, {
    headers: {
        authorization: 'apiKey'
    }
})
.then((res) => {
    if (res.ok) {
        return res.json()
    }else {
        throw new Error("error")
    }
})
.then((data) => {
    console.log(data);

    data.photos.forEach((city) => {
    let colTemplate = 
    `
    <div class ="col-12 col-md-4">
        <div class="card"">
            <img src="${city.src.medium}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    `
    let rowReference = document.getElementById('photo-container');
    rowReference.innerHTML += colTemplate;
    });
})
.catch((err) => {
    console.log(err);
})