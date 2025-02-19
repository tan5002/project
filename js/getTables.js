async function getAllTables() {
    const tables = document.querySelector(".tables");
    const data = await getData(urlTable);
    data.forEach(element => {
       const img = element.status ? "https://static.vecteezy.com/system/resources/thumbnails/007/628/359/small_2x/dinner-isolated-icon-which-can-easily-modify-or-edit-vector.jpg" : "https://www.namphongfood.com/assets/img/suasana.png";
       const btn = element.status ? ` <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookin" style="background-color: green;border: none"> <i class="fa-solid fa-circle-plus me-2"></i>ADD</button>  
                      <button  type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#cart" style="border: none"> <i class="fa-solid fa-cart-plus me-2"></i>CART</button>`
        : `<button onclick=getById(${element.id}) type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookin" style="background-color: #F8C10B;border: none"> <i class="fa-regular fa-calendar-plus me-3"></i>BOOKING</button>` ;
        tables.innerHTML += `   <div class="col">
                  <div class="card position-relative">
                    <h3 class="position-absolute bg-danger stt">${element.id}</h3>
                    <img
                      src="${img}"
                      class="card-img-top w-50 mx-auto img-bookin"
                      alt="..."
                    />
                    <div class="card-body d-flex justify-content-around">
                        ${btn}
                    </div>
                  </div>
                </div>`
    });
}
getAllTables();

let idTable;
function getById(id) {
 idTable = id;
}

const booking = document.getElementById("form-booking");

booking.addEventListener("submit", (e) => {
  
  e.preventDefault();

  const customerName = document.getElementById("customerName");
  const quantity = document.getElementById("quantity");

   const updateTable = {
     id : idTable,
     nameCustomer: customerName.value,
     quantity: quantity.value,
     status: true
   }

   edit(urlTable,updateTable);
})




 
