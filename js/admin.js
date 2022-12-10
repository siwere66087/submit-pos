

let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : 

[
    {
        
        id:1,
        pname:"cat shoe",
        pdescription:"cat sneaker",
        pPrice:"R2110",
        pImage:"https://i.postimg.cc/GhVsXqp5/cat1.jpg",
        count:1
    },

    {
        id:2,
        pname:"cat sneaker",
        pdescription:"jogging sneaker",
        pPrice:"R1710",
        pImage:"https://i.postimg.cc/PJL1qcx1/cat2.webp",
        count:1
    
    
    
     },

      {
        id:3,
        pname:"sneaker",
        pdescription:"formal shoe",
        pPrice:"R1110",
        pImage:"https://i.postimg.cc/D0bbhXjg/cat3.jpg",
        count:1
    
    
    
    },
     {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        pdescription:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        count:1
    
    
    },
];




async function diplayprod(){
    products.forEach((products)=> {
        document.querySelector(".container").innerHTML +=
            `<div class="container ">
          <div class="card" style="width: 18rem;">
        <img src="${products.pImage}" class="card-img-top img-thumbnail" style="height: 25rem; width:18rem;" >
        <div class="card-body">
        <h5 class="card-title">${products.pName}</h5>
     <p class="card-text">${products.pPrice}</p>
    <a href="#" class="btn btn-dark">Add to checkout</a>
  </div>
        </div>
      </div>`;
    })
}
diplayprod();



































var selectedRow = null

function onFormSubmit(e) {
	e.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["productId"] = document.getElementById("productId").value;
    formData["product"] = document.getElementById("product").value;
    formData["quantity"] = document.getElementById("quantity").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("prodList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.productId;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.product;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.quantity;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.perPrice;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("product").value = selectedRow.cells[1].innerHTML;
    document.getElementById("quantity").value = selectedRow.cells[2].innerHTML;
    document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productId;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.quantity;
    selectedRow.cells[3].innerHTML = formData.perPrice;
}

//Delete the data
function onDelete(td) {
    if (confirm('you are about to delete this product!! do you want to continue?')) {
        row = td.parentElement.parentElement;
        document.getElementById('prodList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("productId").value = '';
    document.getElementById("product").value = '';
    document.getElementById("quantity").value = '';
    document.getElementById("perPrice").value = '';
    selectedRow = null;
}




async function diplayprod(){
    products.forEach((products)=> {
        document.querySelector(".container").innerHTML +=
            `<div class="container ">
          <div class="card" style="width: 18rem;">
        <img src="${products.pImage}" class="card-img-top img-thumbnail" style="height: 25rem; width:18rem;" >
        <div class="card-body">
        <h5 class="card-title">${products.pName}</h5>
     <p class="card-text">${products.pPrice}</p>
    <a href="#" class="btn btn-dark">Add to checkout</a>
  </div>
        </div>
      </div>`;
    })
}
diplayprod();



