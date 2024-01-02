const LoadProductDetails=()=>{
    params=new URLSearchParams(window.location.search).get('product_id')
    fetch(`https://fakestoreapi.com/products/${params}`)
            .then(res=>res.json())
            .then(json=>DisplayDetails(json))
}

const DisplayDetails=(data)=>{
    console.log(data);
    const container=document.getElementById('pro_details')
    container.innerHTML=`
    <div class="s_product_image"><img src="${data.image}" alt="" ></div>
    <div class="product_content">
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <p>Price: $${data.price}</p>
    <p>Rating: ${data.rating.rate}</p>
    <p>Category: ${data.category}</p>
    <button class="buy_button">Buy Now</button>
    </div>
    
    
    `
}

LoadProductDetails()
DisplayDetails()