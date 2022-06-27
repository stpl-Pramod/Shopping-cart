
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
                 <button type="button" class="btn btn-sm shadow-none btn-light" onclick="decreaseQty(${a.id}))"><i class="fa-solid fa-minus"></i></button>
                 <input type="text" class="form-control form-control-sm d-inline text-center" id="quantity${a.id}" value=0 style="width:50px;" maxlength="2" max="10">
                 <button type="button" class="btn btn-sm shadow-none btn-light" onclick="increaseQty()"><i class="fa-solid fa-plus"></i></button>
               </div>
             </div>
           </div>
     </div>`
    }
    document.getElementById("ecard").innerHTML = tab;
}

function decreaseQty(){
  var quantity = parseInt(document.getElementById("quantity").value, 10);
  if(quantity > 0){
    quantity--;
    document.getElementById("quantity").value = quantity;
    document.getElementById("cartTotal").innerHTML = quantity;
    console.log(quantity);
  }
}

function increaseQty(){
  var quantity = parseInt(document.getElementById("quantity").value, 10);
  if(quantity < 10){
    quantity++;
    document.getElementById("quantity").value = quantity;
    document.getElementById("cartTotal").innerHTML = quantity;
    console.log(quantity);
  }
}

var clicks = 1;
function clickCounter(){
  
   localStorage.setItem("clicks", JSON.stringify(clicks));
  document.getElementById("countView").innerHTML = localStorage.getItem("clicks");
 clicks+=1;
}
// function clickCounter(){
//   if(localStorage.clickCount){
//     localStorage.clickCount = Number(localStorage.clickCount)+1;
//   }else{
//     localStorage.clickCount = 1;
//   }
//   document.getElementById("countView").innerHTML = localStorage.clickCount;
// }
