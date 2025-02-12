const imageOrder = [
  { Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmY7YfPZ6E7TUU6AxjURhLEq6E7FcUz-f0DGeKeE8kL3S15NsR" },
  { Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmY7YfPZ6E7TUU6AxjURhLEq6E7FcUz-f0DGeKeE8kL3S15NsR" },
  { Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmY7YfPZ6E7TUU6AxjURhLEq6E7FcUz-f0DGeKeE8kL3S15NsR" },
  { Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmY7YfPZ6E7TUU6AxjURhLEq6E7FcUz-f0DGeKeE8kL3S15NsR" },
];
const imageBooking = [
    { Image: "https://www.namphongfood.com/assets/img/suasana.png"},
    { Image: "https://www.namphongfood.com/assets/img/suasana.png"},
    { Image: "https://www.namphongfood.com/assets/img/suasana.png"},
    { Image: "https://www.namphongfood.com/assets/img/suasana.png"},
    { Image: "https://www.namphongfood.com/assets/img/suasana.png"},
    { Image: "https://www.namphongfood.com/assets/img/suasana.png"},
    { Image: "https://www.namphongfood.com/assets/img/suasana.png"},
    { Image: "https://www.namphongfood.com/assets/img/suasana.png"}

]

function loadTableOrder() {
  let box = document.querySelector(".order");
  imageOrder.forEach((e, index) => {
    box.innerHTML += `
                        <div class="col">
                            <div class="box position-relative mt-3">
                                <div class="card " >
                                    <img src="${e.Image}" class="card-img-top" alt="...">
                                    <div class="card-body d-flex justify-content-around">
                                        <button type="button" class="btn btn-primary" style="background-color: #278753; border:none"> <i class="fa-solid fa-circle-plus me-1"></i>ADD</button>
                                        <button type="button" class="btn btn-warning text-white" style="background-color: #DC3445;border:none"> <i class="fa-solid fa-cart-plus me-1 "></i>CART</button>
                                    </div>
                                </div>
                                <div class="number position-absolute rounded-circle">
                                    ${index + 1}
                                </div>
                            </div>
                        </div>
        
        `;
  });
}
loadTableOrder()


function loadTableBooking() {
    let box = document.querySelector(".booking");
    imageBooking.forEach((e, index) => {
      box.innerHTML += `
                          <div class="col">
                              <div class="box position-relative mt-3">
                                  <div class="card " >
                                      <img src="${e.Image}" class="card-img-top" alt="...">
                                      <div class="card-body d-flex justify-content-around">
                                          <button type="button" class="btn btn-primary" style="background-color: #F8C10B;border: none"> <i class="fa-regular fa-calendar-plus me-3"></i>BOOKING</button>
                                      </div>
                                  </div>
                                  <div class="number position-absolute rounded-circle">
                                      ${index + 5}
                                  </div>
                              </div>
                          </div>
          
          `;
    });
  }
loadTableBooking()