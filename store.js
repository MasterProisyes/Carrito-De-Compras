import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';

const db = getFirestore(firebase.app());
const productListElement = document.getElementById('product-list');

async function renderProductList() {
    const productsRef = collection(db, 'products');
    const querySnapshot = await getDocs(productsRef);
    productListElement.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const product = doc.data();
        const item = document.createElement('div');
        item.classList.add('col-md-4', 'mb-3');
        item.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart('${doc.id}')">Agregar al carrito</button>
                </div>
            </div>
        `;
        productListElement.appendChild(item);
    });
}

renderProductList();

