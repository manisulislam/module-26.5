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
               <a href="productDetails.html?product_id=${product.id}" target="_blank" ><button class="product_button">View Details</button></a>
            </div>
        `;

        container.appendChild(card);
    });
};

// category fetch
const categoryFetch = () => {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>DisplayCategory(json))
}

const DisplayCategory = (data) => {
    console.log(data);
    const container = document.getElementById('category_container');

    data.forEach(category => {
        const card = document.createElement('div');
        card.classList.add('category_product');

        card.innerHTML = `
            <button class="product_button" onClick=filterCategory('${category}')>${category}</button>
        `;

        container.appendChild(card);
    });

}


// filter category js part

const filterCategory = (category) => {
    console.log(category);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=>DisplayFilterCategory(json))
}

const DisplayFilterCategory=(data)=>{
    const container = document.getElementById('filter_product');
    container.innerHTML = '';

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
               <a href="productDetails.html?product_id=${product.id}" target="_blank" ><button class="product_button">View Details</button></a>
            </div>
        `;

        container.appendChild(card);
    });

}
categoryFetch()
LoadData()
DisplayData()
filterCategory()
