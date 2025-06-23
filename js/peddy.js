// button API load
const loadButton = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
    const data = await res.json();
    displayLoadButton(data.categories);
}
//button display UI te dekhabo API theke
const displayLoadButton = (categories) => {
    console.log(categories)
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

loadButton();
