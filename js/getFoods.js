async function getAllFood(){
    const foods = document.querySelector(".foods");
    const data = await getData(urlFoods);
    data.forEach((element,index) => {
        foods.innerHTML += `
            <div class="col">
                  <div class="card">
                    <div
                      class="card-top d-flex justify-content-between align-items-center mt-3 px-3"
                    >
                      <h4 class="bg-danger stt">${index + 1}</h4>
                      <h6>${element.nameFood}</h6>
                      <i
                        class="fa-solid fa-pen-to-square fs-4"
                        style="color: #dc3445"
                      ></i>
                    </div>
                    <img
                      src="${element.image}"
                      class="card-img-top w-50 mx-auto img-food"
                      alt="..."
                    />
                    <div class="card-body text-center mt-3">
                      <h5>${element.price}$</h5>
                      <p
                        class="card-bottom d-flex justify-content-center align-items-center"
                      >
                      <span class="decrease"><i class="fa-solid fa-minus"></i></span>
                      <span class="quantity mx-2">0</span>
                      <span class="increase"><i class="fa-solid fa-plus"></i></span>
                      </p>
                    </div>
                  </div>
                </div>
        `
    });
}
getAllFood()