
// Menu hamburguesa


document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

document.getElementById('pagar').addEventListener('click', function() {
  window.location.href = '../Pasareladepago/pasarela.html';
});




// Definición inicial de la lista de productos.
const product = [
  // Productos regulares
  { id: 3, image: '../imagenes/producto4.png', title: 'Ropa gótica', price: 230000, category: 'Productos' },
  { id: 4, image: '../imagenes/producto3.png', title: 'Ropa gótica', price: 230000, category: 'Productos' },
  { id: 5, image: '../imagenes//producto5.png', title: 'Ropa gótica', price: 230000, category: 'Productos' },
  { id: 0, image: '../imagenes//producto1.png', title: 'Ropa gótica', price: 120000, category: 'Productos' },
  { id: 1, image: '../imagenes//producto2.png', title: 'Ropa gótica', price: 60000, category: 'Productos' },
  { id: 2, image: '../imagenes//producto3.png', title: 'Ropa gótica', price: 230000, category: 'Productos' },
            
  // Productos en promoción
  { id: 6, image: '../imagenes//promocion1.png', title: 'Ropa gótica en promoción', price: 80, category: 'Promociones' },
  { id: 7, image: '../imagenes//Promocion2.png', title: 'Ropa gótica en promoción', price: 50, category: 'Promociones' },
  { id: 8, image: '../imagenes//promocion3.png', title: 'Ropa gótica en promoción', price: 80, category: 'Promociones' },
  { id: 9, image: '../imagenes//promocion4.png', title: 'Ropa gótica en promoción', price: 50, category: 'Promociones' },

  // Novedades
  { id: 10, image: '../imagenes//novedades1.png', title: 'Ropa gótica nueva', price: 50, category: 'Novedades' },
  { id: 11, image: '../imagenes//novedades2.png', title: 'Ropa gótica nueva', price: 50, category: 'Novedades' }
];

const loginButton = document.getElementById("loginButton");
const loginModal = document.getElementById("loginModal");


// Extracción única de categorías de productos.
const categories = ['Productos', 'Promociones', 'Novedades']; // Orden definido



// Carrito de compras.
let cart = [];


// Agregar un producto al carrito.
function addtocart(productId) {
  const productToAdd = product.find(item => item.id === productId);
  if (productToAdd) {
    cart.push(productToAdd);
    displaycart();
  }
}

// Eliminar un producto del carrito.
function delElement(index) {
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1);
    displaycart();
  }
}
// Mostrar el carrito de compras.
function displaycart() {
  document.getElementById("count").textContent = cart.length;
  let total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) {
    document.getElementById('cartItem').textContent = "Tu carrito está vacío";
    document.getElementById("total").textContent = "$ 0.00";
  } else {
    document.getElementById("cartItem").innerHTML = cart.map((item, index) => `
        <div class='cart-item'>
            <div class='row-img'>
                <img class='rowimg' src=${item.image}>
            </div>
            <p style='font-size:12px;'>${item.title}</p>
            <h2 style='font-size: 15px;'>$ ${item.price.toLocaleString('es-ES')}</h2> <!-- Formatear precio -->
            <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
        </div>
    `).join('');
    document.getElementById("total").textContent = `$ ${total.toLocaleString('es-ES')}`; // Formatear total
  }
}


// Renderizado de categorías y productos en el HTML.
window.onload = function() {
  document.getElementById('root').innerHTML = categories.map(category => {
    // Usar el nombre de la categoría como ID, reemplazando espacios con guiones si es necesario
    const categoryId = category.replace(/\s+/g, '-').toLowerCase();
    const productsInCategory = product.filter(item => item.category === category);
    return `<div id='${categoryId}' class='category' style='display: flex; flex-direction: row; justify-content: space-around; flex-wrap: wrap;'>
              <h2 style='width: 100%; text-align: center;'>${category}</h2>
              ${productsInCategory.map(item => `
                  <div class='box'>
                      <div class='img-box'>
                          <img class='images' src=${item.image}></img>
                      </div>
                      <div class='bottom'>
                          <p>${item.title}</p>
                          <h2> ${item.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</h2> <!-- Formatear precio -->
                          <button onclick='addtocart(${item.id})'>Agregar al carrito</button>
                      </div>
                  </div>
              `).join('')}
            </div>`;
  }).join('');
};




// Cuando se hace clic en el botón de inicio de sesión, muestra el modal de inicio de sesión
loginButton.addEventListener("click", function() {
  loginModal.style.display = "block";
});

// Cuando se hace clic en el botón de cerrar del modal, cierra el modal
const closeButtons = document.getElementsByClassName("close");
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function() {
    loginModal.style.display = "none";
  });
}

// Cuando el usuario hace clic fuera del modal, cierra el modal
window.addEventListener("click", function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
});


function abrirMenuAccesibilidad() {
  var menuAccesibilidad = document.querySelector(".menu-accesibilidad");
  if (menuAccesibilidad.style.display === "none") {
      menuAccesibilidad.style.display = "block";
  } else {
      menuAccesibilidad.style.display = "none";
  }
}

