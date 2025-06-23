// button API load
const loadButton = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
    const data = await res.json();
    displayLoadButton(data.categories);
}
//button display UI te dekhabo API theke
const displayLoadButton = (categories) => {
    // console.log(categories)
    const buttonContainer = document.getElementById("button-container");
    buttonContainer.innerHTML = "";
    categories.forEach(category => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div  class="flex items-center justify-center gap-3 border border-gray-200 rounded-lg px-12 py-3">
                <img class="w-10 h-10" src=${category.category_icon} />
                <p id="" class="font-bold">${category.category}</p>
            </div>
        `;
        buttonContainer.appendChild(div);
    })
}

//all pets data load in API
const loadAllPets = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/peddy/pets");
    const data = await res.json();
    displayLoadAllPets(data.pets)
}
//all pets display UI te dekhabo in API
const displayLoadAllPets = (pets) => {
    pets.forEach(pet => {
        console.log(pet);
        const cardContainer = document.getElementById("card-container");
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="shadow-sm rounded-lg px-5 py-5">
             <figure class="">
                <img class="rounded-lg md:h-50" src=${pet.image} alt="Shoes" />
            </figure>
            <div class="border-b py-5 space-y-2 text-sm">
                <div class="flex items-center gap-2">
                    <div class="hidden md:block">
                        <i class="fa-solid fa-table"></i>
                    </div>
                    <h1>Breed : ${pet.breed}</h1>
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
                    <button class="border px-4 rounded-lg py-2 another-background"><i class="fa-solid fa-thumbs-up text-blue-500"></i></button>
                    <button class="border px-4 rounded-lg py-2 another-background">Adopt</button>
                    <button class="border px-4 rounded-lg py-2 another-background">Details</button>
                </div>
        </div>
        `;
        cardContainer.appendChild(div);
    })
}


loadAllPets();
loadButton();
