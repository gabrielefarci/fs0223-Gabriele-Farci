const endPoint = 'https://striveschool-api.herokuapp.com/api/product/';

const productCards = function() {
fetch(endPoint, {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmI1NDg4Zjc0MDAwMTQyODc0NGIiLCJpYXQiOjE2ODM4ODA3ODgsImV4cCI6MTY4NTA5MDM4OH0.7FMBG5QAJ4Gdhm4_GSG-ssp2UN5F81M1KIsNFU0zer4'
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

    

    data.forEach((products) => {
    let colTemplate = 
    `
    <div class ="col-12 col-md-3 py-3">
        <div class="card border rounded h-100">
            <img src="${products.imageUrl}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${products.name}</h5>
                <h6 class="card-subtitle">${products.brand}</h6>
                <p class="card-text">${products.description}</p>
                <p class="card-text">${products.price}€</p>
                <div class="d-flex justify-content-between">
                    <a href="details.html?productId=${products._id}" class="btn btn-primary">Discover more</a>
                    <a href="back-office.html?productId=${products._id}" class="btn btn-secondary">Edit</a>
                </div>
            </div>
        </div>
    </div>
    `
    let rowReference = document.getElementById('main-row');
    rowReference.innerHTML += colTemplate;
    });
    let buttonModify = document.getElementsByClassName('btn-secondary');
    buttonModify.add
})
.catch((err) => {
    console.log(err);
})
}

window.onload = function() {
    let spinner = document.querySelector('.spinner-border');

    setTimeout(() => {
        spinner.style.opacity = '0';
        productCards();
    }, 3000)
    
}