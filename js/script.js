

function toggle_visibility(id) {
  let e = document.getElementById(id);
  if(e.style.display == 'block')
     e.style.display = 'none';
  else
     e.style.display = 'block';
}

function hide_visibility(id) {
  let e = document.getElementById(id);
     e.style.display = 'none';
}


/*
const product1 = document.getElementById('product1');
const productTable1 = document.getElementById('productTable1');
product1.addEventListener('click', function () {

  console.log(productTable1.style.display)

    if (productTable1.style.display === "none") {
        console.log('HOLA')
        productTable1.classList.add('product-table-on')
      } else {
        console.log('CHAU')
        productTable1.classList.remove('product-table-on')
      }


})

const product2 = document.getElementById('product2');
const productTable2 = document.getElementById('productTable2');
product2.addEventListener('click', function () {
    productTable2.classList.add('product-table-on')
})

const product3 = document.getElementById('product3');
const productTable3 = document.getElementById('productTable3');
product3.addEventListener('click', function () {
    productTable3.classList.add('product-table-on')
})

*/


