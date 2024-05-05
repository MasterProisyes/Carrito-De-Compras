const productForm = document.getElementById('product-form');

productForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('product-name').value;
    const productPrice = parseFloat(document.getElementById('product-price').value);
    const product = { name: productName, price: productPrice };
    addProductToFirebase(product);
    productForm.reset();
});

function addProductToFirebase(product) {
    firebase.firestore().collection('products').add(product)
        .then(() => {
            console.log('Producto agregado a Firebase');
        })
        .catch((error) => {
            console.error('Error al agregar el producto:', error);
        });
}
