fetch('https://striveschool-api.herokuapp.com/books')
.then((res) => {
    if (res.ok) {
        return res.json()
    }else {
        return new Error("error")
    }
})
.then((data) => {
    console.log(data);

    let bookList = document.querySelector('.row')

    data.forEach((books) => {
        let col = document.createElement('div');
        col.classList.add('col-4');
        bookList.appendChild(col);

        let card = document.createElement('div');
        card.classList.add('card')
        col.appendChild(card);

        let image = document.createElement('img');
        image.classList.add('img-fluid')
        card.appendChild(image);
        image.src = books.img;

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body')
        card.appendChild(cardBody);

        let title = document.createElement('h5');
        title.classList.add('card-title');
        title.innerText = books.title;
        cardBody.appendChild(title);

        let price = document.createElement('p');
        price.classList.add('card-text');
        price.innerText = books.price;
        cardBody.appendChild(price);
    });
})
.catch((err) => {
    console.log(err);
})