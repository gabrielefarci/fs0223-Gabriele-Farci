let addressBarContent = new URLSearchParams(window.location.search);
let productId = addressBarContent.get('productId');

if(productId) {
    document.getElementById('title').innerText = 'Edit Product';
    document.getElementById('save-button').innerText = 'Edit product';
    let resetButton = document.getElementById('reset-button');
    resetButton.classList.remove('d-none');
    resetButton.addEventListener('click', () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'gray',
            confirmButtonText: 'Yes, reset it!'
        }).then(result => {
            if(result.isConfirmed) {
                document.getElementById('name').value = ''
                document.getElementById('description').value = ''
                document.getElementById('brand').value = ''
                document.getElementById('image').value = ''
                document.getElementById('price').value = ''
            }
        })
        
    })
    let deleteButton = document.getElementById('delete-button');
    deleteButton.classList.remove('d-none');
    deleteButton.addEventListener('click', () => {
        fetch(endPoint + productId, {
            method: 'DELETE',
            headers: { 
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmI1NDg4Zjc0MDAwMTQyODc0NGIiLCJpYXQiOjE2ODM4ODA3ODgsImV4cCI6MTY4NTA5MDM4OH0.7FMBG5QAJ4Gdhm4_GSG-ssp2UN5F81M1KIsNFU0zer4',
                'Content-Type': 'application/json',
            }
        })
        .then(res => {
            if(res.ok) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: 'red',
                    cancelButtonColor: 'gray',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if(result.isConfirmed) {
                        location.assign('index.html')
                    }
                  })
            }else {
                throw new Error();
            }
        })
        .catch(err => {
            console.log(err);
        })
    })

    const endPoint = 'https://striveschool-api.herokuapp.com/api/product/';

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
            throw new Error();
        }
    })
    .then(product => {
        console.log(product);

        document.getElementById('name').value = product.name;
        document.getElementById('description').value = product.description;
        document.getElementById('brand').value = product.brand;
        document.getElementById('image').value = product.imageUrl;
        document.getElementById('price').value = product.price;
    }) 
    .catch(err => {
        console.log(err);
    })
}

let formReference = document.getElementById('form-product');
formReference.addEventListener('submit', function(e) {
    e.preventDefault()

    let nameInput = document.getElementById('name') ;
    let descriptionInput = document.getElementById('description');
    let brandInput = document.getElementById('brand');
    let imageUrlInput = document.getElementById('image');
    let priceInput = document.getElementById('price');

    let newProduct = {
        name: nameInput.value,
        description: descriptionInput.value,
        brand: brandInput.value,
        imageUrl: imageUrlInput.value,
        price: priceInput.value
    }
    console.log(newProduct);

    const endPoint = 'https://striveschool-api.herokuapp.com/api/product/';

    fetch(productId ? endPoint + productId : endPoint, {
        method: productId ? 'PUT' : 'POST',
        body: JSON.stringify(newProduct),
        headers: { 
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmI1NDg4Zjc0MDAwMTQyODc0NGIiLCJpYXQiOjE2ODM4ODA3ODgsImV4cCI6MTY4NTA5MDM4OH0.7FMBG5QAJ4Gdhm4_GSG-ssp2UN5F81M1KIsNFU0zer4',
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        if(res.ok) {  
            if(productId) {
                Swal.fire({
                    title: 'Do you want to save the changes?',
                    showCancelButton: true,
                    confirmButtonText: 'Save',
                }).then((result) => {
                    if (result.isConfirmed) {
                        location.assign('index.html');
                    }
                })
            }else {
               Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your product has been saved',
                    showConfirmButton: true,
                }).then(function() {
                    location.assign('index.html')
                })
            }
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
        }
    })
    .catch(err => {
        console.log(err);
    })
});