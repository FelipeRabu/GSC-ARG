
function button_click(idTable, idButton) {
  //Colorea el boton
  let element = document.getElementById(idButton);
  element.classList.toggle("product-button-color");

  //Mostrar o ocultar la tabla
  let element2 = document.getElementById(idTable);
  element2.classList.toggle("product-table-on");

  //Colorea el continer de la tablas
  let element3 = document.getElementById('product-table-container');
  let table1 = document.getElementById('productTable1');
  let table2 = document.getElementById('productTable2');
  let table3 = document.getElementById('productTable3');
  let table1Style = window.getComputedStyle(table1, null).getPropertyValue("display")
  let table2Style = window.getComputedStyle(table2, null).getPropertyValue("display")
  let table3Style = window.getComputedStyle(table3, null).getPropertyValue("display")
  if(table1Style == 'block' || table2Style == 'block' || table3Style == 'block') {
    element3.classList.add("product-table-container-color");
  }
  else {
    element3.classList.remove("product-table-container-color");
  }
}

function button_click_remove(idTable, idButton) {
  let element = document.getElementById(idButton);
  element.classList.remove("product-button-color");

  let element2 = document.getElementById(idTable);
  element2.classList.remove("product-table-on");

}



//=================================================================================



/*
function button_color(id) {
  let element = document.getElementById(id);
  element.classList.toggle("product-button-color");

  let element2 = document.getElementById('product-table-container');
  element2.classList.toggle("product-table-container-color");
}

function button_color_remove(id) {
  let element = document.getElementById(id);
  element.classList.remove("product-button-color");
}

function toggle_visibility(id) {
  let element = document.getElementById(id);
  if(element.style.display == 'block')
  element.style.display = 'none';
  else
  element.style.display = 'block';
}

function hide_visibility(id) {
  let element = document.getElementById(id);
  element.style.display = 'none';
}
*/


