fetch('https://striveschool-api.herokuapp.com/books')
.then((res) => {
    if (res.ok) {
        return res.json()
    }else {
        return new Error("error")
    }
})
.then((data) => {
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

        let btnBuy = document.createElement("input");
        btnBuy.type = "button";
        btnBuy.name = "add";
        btnBuy.value = "Buy";
        btnBuy.className = "btn btn-primary mx-3";
        cardBody.appendChild(btnBuy);

        let btnDiscard = document.createElement("input");
        btnDiscard.type = "button";
        btnDiscard.name = "add";
        btnDiscard.value = "Discard";
        btnDiscard.className = "btn btn-danger";
        cardBody.appendChild(btnDiscard);

        btnDiscard.addEventListener('click', discard);

        function discard() {
            col.remove();
        }

    });
})
.catch((err) => {
    console.log(err);
})