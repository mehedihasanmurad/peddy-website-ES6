// button API load
const loadButton = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
    const data = await res.json();
    displayLoadButton(data.categories);
}
//button display UI te dekhabo API theke
const displayLoadButton = (categories) => {
    const buttonContainer = document.getElementById("button-container");
    buttonContainer.innerHTML = "";
    categories.forEach(category => {
        // console.log(category.category)
        const div = document.createElement("div");
        div.innerHTML = `
                <button id="btn-${category.category}" onclick="loadSinglePet('${category.category}')" class="flex items-center justify-center gap-3 border border-gray-200 rounded-lg px-12 py-3 btn-category">
                <img class="w-10 h-10" src=${category.category_icon}/> 
                <p class="font-bold">${category.category}</p>
                </button>
        `;
        buttonContainer.appendChild(div);
    })
}



// all pets API load theke load hobe and price gulo sort korbe
const loadAllPets = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/peddy/pets")
    const data = await res.json();
    const shortPrice = data.pets.sort((a, b) => a.price - b.price);
    displayLoadAllPets(shortPrice);
}
//all pets display UI te dekhabo in API
const displayLoadAllPets = (pets) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    if (pets.length === 0) {
        cardContainer.classList.remove("grid")
        cardContainer.innerHTML = `
            <div class="flex flex-col items-center space-y-5 py-7">
                <img src="assets/error.webp" alt="">
                <h1 class="text-3xl font-bold">No Information Available</h1>
                <p class="text-center w-5/6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.</p>
            </div>
        `;
    }
    else {
        cardContainer.classList.add("grid");
    }
    
    pets.forEach(pet => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="shadow-sm rounded-lg px-5 py-5">
             <figure class="">
                <img class="rounded-lg md:h-50" src=${pet.image}/>
            </figure>
            <div class="border-b py-5 space-y-2 text-sm">
                <div>
                    <h1 class="text-2xl font-bold">${pet.pet_name}</h1>
                </div>
                <div class="flex items-center gap-2">
                    <div class="hidden md:block">
                        <i class="fa-solid fa-table"></i>
                    </div>
                    <div>
                        <h1 class="text-sm">Breed : ${pet.breed}</h1>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <div class="hidden md:block">
                        <i class="fa-solid fa-cake-candles"></i>
                    </div>
                    <h1>Birth : ${pet.date_of_birth}</h1>
                </div>
                <div class="flex items-center gap-2">
                    <div class="hidden md:block">
                        <i class="fa-solid fa-venus"></i>
                    </div>
                    <h1>Gender : ${pet.gender}</h1>
                </div>
                <div class="flex items-center gap-2">
                    <div class="hidden md:block">
                        <i class="fa-solid fa-dollar-sign"></i>
                    </div>
                    <h1>Price : ${pet.price} $</h1>
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-3 md:justify-between mt-4">
                    <button onclick="likeBtn('${pet.image}')" class="border px-4 rounded-lg py-2 another-background"><i class="fa-solid fa-thumbs-up text-blue-500"></i></button>
                    <button class="border px-4 rounded-lg py-2 another-background">Adopt</button>
                    <button onclick="detailsShow('${pet.petId}')" class="border px-4 rounded-lg py-2 another-background">Details</button>
                </div>
        </div>
        `;
        cardContainer.appendChild(div);
    })
}

//paser image dekhanor jonno
const likeBtn = (imageUrl) => {
    const cardImage = document.getElementById("card-image");
    const img = document.createElement("img");
    img.src = imageUrl;
    cardImage.appendChild(img);
}

//single pet name load in API
const loadSinglePet = async (name) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${name}`);
    const data = await res.json();
    {   
        // remove color 
        removeActiveClass();
        //active color
        const activeButton = document.getElementById(`btn-${name}`)
        activeButton.classList.add("active");
        displayLoadAllPets(data.data);
    }
}

//details button click and single id load in API
const detailsShow = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    const data = await res.json();
    displayDetailShow(data.petData);
}

const displayDetailShow = (singlePetId) => {
    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML = `
        <button id="btn-click" class="btn" onclick="customModal.showModal()">open modal</button>
            <dialog id="customModal" class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                <div class="shadow-sm rounded-lg px-5 py-5">
                    <figure class="">
                        <img class="rounded-lg w-full" src=${singlePetId.image}/>
                    </figure>
                    <div class="mt-4">
                        <h1 class="text-2xl font-bold">${singlePetId.pet_name}</h1>
                    </div>
                    <div class="border-b py-5 space-y-2 text-sm grid grid-cols-1 md:grid-cols-2">
                        <div class="flex items-center gap-2">
                            <div class="hidden md:block">
                                <i class="fa-solid fa-table"></i>
                            </div>
                            <div>
                                <h1>Breed : ${singlePetId.breed}</h1>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="hidden md:block">
                                <i class="fa-solid fa-cake-candles"></i>
                            </div>
                            <h1>Birth : ${singlePetId.date_of_birth}</h1>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="hidden md:block">
                                <i class="fa-solid fa-venus"></i>
                            </div>
                            <h1>Gender : ${singlePetId.gender}</h1>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="hidden md:block">
                                <i class="fa-solid fa-dollar-sign"></i>
                            </div>
                            <h1>Price : ${singlePetId.price} $</h1>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="hidden md:block">
                                <i class="fa-solid fa-venus"></i>
                            </div>
                            <h1>Vaccinated status : ${singlePetId.vaccinated_status}</h1>
                        </div>
                    </div>
                    <div>
                        <h1 class="mt-3 font-bold text-lg">Details Information</h1>
                        <div>
                            <p id="pet-description">${singlePetId.pet_details.slice(0, 100)}</p>
                            <button id="see-more-btn" class="font-extrabold">See More</button>
                        </div>
                    </div>
                    <div class="modal-action border py-2 flex justify-center rounded-lg details">
                        <form method="dialog">
                            <button class="text-[#0E7A81] font-bold">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
    `;
    // way-1
    // document.getElementById("customModal").showModal();
    document.getElementById("btn-click").click();
    // See More button ar kaj
    document.getElementById("see-more-btn").addEventListener("click", () => {
        const description = document.getElementById("pet-description");
        description.innerText = singlePetId.pet_details;
        document.getElementById("see-more-btn").style.display = "none";
    });
}

//remove active color
const removeActiveClass = () => {
    const removeActiveClass = document.getElementsByClassName("btn-category");
    for (const removeButtonActive of removeActiveClass) {
        removeButtonActive.classList.remove("active");
    }
}

// load spinner
const spinnerContainer = document.getElementById("spinner-container");
setTimeout(() => {
    spinnerContainer.style.display = "block";
    setTimeout(() => {
        spinnerContainer.style.display = "none";
    }, 2000);
});


loadAllPets();
loadButton();
