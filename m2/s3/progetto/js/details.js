const endPoint = 'https://striveschool-api.herokuapp.com/api/product/';

const fillDetailsPage = function(productDetails) {
    let colContent = 
    `
    <img src="${productDetails.imageUrl}" id="productDetailsImage" alt="">
    <h5 class="mt-5">${productDetails.name}</h5>
    <h6>${productDetails.brand}</h6>
    <p>${productDetails.description}</p>
    <p>${productDetails.price}€</p>
    <a href="index.html" class="btn btn-primary">Go back</a>
    `
    let colToFill = document.querySelector('.col-12.col-md-8');
    colToFill.innerHTML = colContent;
}

const getSingleProduct = function() {
    let productId = new URLSearchParams(window.location.search).get('productId');
    fetch(endPoint + productId, {
        headers: { 
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmI1NDg4Zjc0MDAwMTQyODc0NGIiLCJpYXQiOjE2ODM4ODA3ODgsImV4cCI6MTY4NTA5MDM4OH0.7FMBG5QAJ4Gdhm4_GSG-ssp2UN5F81M1KIsNFU0zer4',
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        if(res.ok) {
            return res.json();
        }else {
            throw new Error('Error getting single product');
        }
    })
    .then(singleProduct => {
        console.log(singleProduct);

        fillDetailsPage(singleProduct);
    }) 
    .catch(err => {
        console.log(err);
    })
}

window.onload = function() {
    getSingleProduct();
}