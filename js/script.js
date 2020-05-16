// capturamos el formulario
const navItems = document.querySelector('.mynavbar-item');

/*
// capturar los elementos del formulario en un array
//const formInputs = Array.from(form.elements);

// ================== Recorre los campos del formulario y valida cada uno ==================
 formInputs.forEach(oneInput => {
     
     oneInput.addEventListener('blur', function () {

            this.classList.add('form-error');
           
         }
     )

 }); //Cierre del forEach
 */


navItems.addEventListener('hover', function () {
    navItems.classList.add('prueba1')
    
})



