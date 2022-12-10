

let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : 

[
    {
        
        id:1,
        pname:"cat shoe",
        pPrice:"R2110",
        pImage:"https://i.postimg.cc/GhVsXqp5/cat1.jpg",
        quantity:1
    },

    {
        id:2,
        pname:"cat sneaker",
        pPrice:"R1710",
        pImage:"https://i.postimg.cc/PJL1qcx1/cat2.webp",
        quantity:1
    
    
    
     },

      {
        id:3,
        pname:"sneaker",
        description:"formal shoe",
        pPrice:"R1110",
        pImage:"https://i.postimg.cc/D0bbhXjg/cat3.jpg",
        quantity:1
    
    
    
    },
     {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        quantity:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        quantity:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        quantity:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        quantity:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        quantity:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        quantity:1
    
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        quantity:1
    
    
    },
    {
        id:4,
        pname:"cat shoe",
        description:"casual shoe",
        pPrice:"R810",
        pImage:"https://i.postimg.cc/wBfVTD28/cat4.jpg",
        quantity:1
    
    
    },
];







async function tableDisplay() {
  products.forEach((products) => {
    document.querySelector("#tdata").innerHTML += `
          <tr>
            <th scope="row">${products.id}</th>
            <td>${products.pname}</td>
            <td>${products.description}</td>
            <td>${products.pPrice}</td>
          </tr>
        `;
  });
}
tableDisplay();















































let selectedRow = null

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
    formData["pname"] = document.getElementById("pname").value;
    formData["description"] = document.getElementById("description").value;
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
		cell2.innerHTML = data.pname;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.description;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.perPrice;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("pname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("description").value = selectedRow.cells[2].innerHTML;
    document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productId;
    selectedRow.cells[1].innerHTML = formData.pname;
    selectedRow.cells[2].innerHTML = formData.description;
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
    document.getElementById("pname").value = '';
    document.getElementById("description").value = '';
    document.getElementById("perPrice").value = '';
    selectedRow = null;
}







