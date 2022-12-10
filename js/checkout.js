function product(id, name, img, price) {
	this.id = id;
  this.name = name;
  this.img = img;
  this.price = price;
}

const products = [
  new product('pid1', 'Product 1', 'https://www.webdesignerdepot.com/cdn-origin/uploads/2008/11/sample-graphic.gif', 100),
  new product('pid2', 'Product 2', 'https://www.webdesignerdepot.com/cdn-origin/uploads/2008/11/sample-graphic.gif', 100),
  new product('pid3', 'Product 3', 'https://www.webdesignerdepot.com/cdn-origin/uploads/2008/11/sample-graphic.gif', 100)
];

const container = $('.products');

products.forEach((i) => {
	container.append(`
  <div class="card">
  	<img src="${i.img}" class="card-img-top" />
    <div class="card-body">
    	<div class="card-title">${i.name}</div>
    	<p class="card-text">$${i.price}</p>
      <footer><button class="btn btn-primary addtocart" data-id="${i.id}">Buy Now</button></footer>
    </div>
  </div>
  `);
});

function saveToCart(event) {
	event.preventDefault();
	const target = event.target;
  const productId = target.dataset.id;
  const product = products.find((i) => i.id === productId);
  console.debug(product);
  
  if (product) {
  	// Save it to the localStorage cart
  } else {
  	// The product wasn't found... maybe someone tampered with the HTML?
  }
}

$('.addtocart').on('click', saveToCart);


















