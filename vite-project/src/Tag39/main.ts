const dishName = document.querySelector<HTMLInputElement>("#dish-name");
const cuisine = document.querySelector<HTMLSelectElement>("#cuisine");
const price = document.querySelector<HTMLInputElement>("#price");
const image = document.querySelector<HTMLInputElement>("#image");
const addButton = document.querySelector<HTMLButtonElement>("#add-dish");

let dishCount = 0;
const maxDishes = 6;

const cuisineColors: { [key: string]: string } = {
  Italian: "bg-red-100",
  Japanese: "bg-pink-100",
  Mexican: "bg-green-100",
  Indian: "bg-yellow-100",
  French: "bg-blue-100",
  Chinese: "bg-orange-100",
  Thai: "bg-purple-100",
  American: "bg-gray-100",
};

addButton?.addEventListener("click", () => {
  if (dishCount >= maxDishes) {
    window.alert("Maximum dish limit reached.");
    return;
  }

  setTimeout(() => {
    const dish = document.createElement("div");
    dish.className = `${
      cuisineColors[cuisine?.value || ""] || "bg-gray-100"
    } rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out transform hover:scale-105`;

    const dishHeader = document.createElement("div");
    dishHeader.className = "flex justify-between items-center mb-2";

    const dishTitle = document.createElement("h3");
    dishTitle.className = "text-lg font-semibold";
    dishTitle.textContent = dishName?.value || "Unnamed Dish";

    const dishPrice = document.createElement("span");
    dishPrice.className = "text-indigo-600 font-bold";
    dishPrice.textContent = `$${price?.value || "0.00"}`;

    dishHeader.appendChild(dishTitle);
    dishHeader.appendChild(dishPrice);

    const dishImage = document.createElement("img");
    dishImage.className = "w-full h-40 object-cover rounded-md mb-2";
    dishImage.src = image?.value || "https://via.placeholder.com/300x200";
    dishImage.alt = dishName?.value || "Dish image";

    const dishCuisine = document.createElement("p");
    dishCuisine.className = "text-sm text-gray-600";
    dishCuisine.textContent = `Cuisine: ${cuisine?.value || "Unknown"}`;

    dish.appendChild(dishHeader);
    dish.appendChild(dishImage);
    dish.appendChild(dishCuisine);

    const dishesContainer = document.getElementById("dishes");
    if (dishesContainer) {
      dishesContainer.appendChild(dish);
      dishCount++;
    }

    if (dishName && cuisine && price && image) {
      dishName.value = "";
      cuisine.value = "Italian";
      price.value = "";
      image.value = "";
    }
  }, 200);
});
