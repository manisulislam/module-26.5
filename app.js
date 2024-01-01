const LoadData=()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>DisplayData(json))

}
const DisplayData = (data) => {
    console.log(data);
    const container = document.getElementById('products_container');

    data.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${product.image}" alt="" class="product_image">
            <div class="card_content">
                <h2>${product.title.slice(0,10)}...</h2>
                <p>${product.description.slice(0,50)}...</p>
                <p>Price: $${product.price}</p>
                <div class="rating">
                    <p>Rating: ${product.rating.rate}</p>
                    <p>Count: ${product.rating.count}</p>
                </div>
               <button class="product_button">View Details</button>
            </div>
        `;

        container.appendChild(card);
    });
};


LoadData()
DisplayData()