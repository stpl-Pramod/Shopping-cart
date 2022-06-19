
const api_url = "https://dummyjson.com/products";
async function getApi(url){
    const response = await fetch(url);
    var data = await response.json();
    show(data);
} 

getApi(api_url);

function show(data){
    let tab = ``;
    for(let a of data.products){
         tab += `<div class="col-md-3">
         <div class="card productCard">
             <img src="${a.thumbnail}" class="card-img-top p-3" alt="productImg">
             <div class="card-body">
               <h5 class="card-title">${a.brand}</h5>
               <p class="card-text" title="${a.description}">${a.description}</p>
               <div class="text-end">
                 <button type="button" class="btn btn-sm shadow-none btn-light"><i class="fa-solid fa-minus"></i></button>
                 <input type="text" class="form-control form-control-sm d-inline" id="quantity" value=0 style="width:50px;">
                 <button type="button" class="btn btn-sm shadow-none btn-light" onclick="increaseQty()"><i class="fa-solid fa-plus"></i></button>
               </div>
             </div>
           </div>
     </div>`
    }
    document.getElementById("ecard").innerHTML = tab;
}
const quantity = document.getElementById("quantity");

function increaseQty(){
if(this.quantity>=0 && this.quantity <10){
    let q = 0;
    q = q+this.quantity;
    document.getElementById("quantity").value = q;
    console.log(+q);
}
}