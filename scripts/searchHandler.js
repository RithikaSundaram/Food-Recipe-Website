// searchHandler.js

// Define the dishesData array

/*const dishesData = [
    { title: "Dish 1", category: "Breakfast", content: "Description of Dish 1" },
    { title: "Dish 2", category: "Breakfast", content: "Description of Dish 2" },
    { title:"Dish 3", category: "Breakfast", content: "Description of dish 3" },
    { title: "Dish 4", category: "Breakfast", content: "Description of Dish 4" },
    { title:"Dish 5", category:"Breakfast", content: "Description of dish 5" },

    { title: "Dish 1", category: "Lunch", content: "Description of Dish 1" },
    { title :"Dish 2",category:"Lunch",content:"Description of dish 2"},
    { title: "Dish 3", category: "Lunch", content: "Description of Dish 3" },
    { title :"Dish 4",category:"Lunch",content:"Description of dish 4"},
    { title: "Dish 5", category: "Lunch", content: "Description of Dish 5" },

    { title :"Dish 1",category:"Dinner",content:"Description of dish 1"},
    { title: "Dish 2", category: "Dinner", content: "Description of Dish 2" },
    { title :"Dish 3",category:"Dinner",content:"Description of dish 3"},
    { title: "Dish 4", category: "Dinner", content: "Description of Dish 4" },
    { title :"Dish 5",category:"Dinner",content:"Description of dish 5"},

    { title :"Dish 1",category:"Juices",content:"Description of dish 1"},
    { title: "Dish 2", category: "Juices", content: "Description of Dish 2" },
    { title :"Dish 3",category:"Juices",content:"Description of dish 3"},
    { title: "Dish 4", category: "Juices", content: "Description of Dish 4" },
    { title :"Dish 5",category:"Juices",content:"Description of dish 5"},

    { title :"Dish 1",category:"Desserts",content:"Description of dish 1"},
    { title: "Dish 2", category: "Desserts", content: "Description of Dish 2" },
    { title :"Dish 3",category:"Desserts",content:"Description of dish 3"},
    { title: "Dish 4", category: "Desserts", content: "Description of Dish 4" },
    { title :"Dish 5",category:"Desserts",content:"Description of dish 5"},



];*/

function filterCategories() {
    // Get the search input value
    var searchInput = document.getElementById("home-dish-search-bar").value.toLowerCase();

    // Loop through each category container
    var categories = ["breakfast", "lunch", "dinner", "juices", "desserts","pastries","chinese","italian"];
    categories.forEach(function(category) {
        var container = document.getElementById(category + "Container");
        var categoryContent = container.textContent.toLowerCase(); // Get content text of the container
        
        // Check if the content text of the category container contains the search input
        if (categoryContent.includes(searchInput)) {
            container.style.display = "block"; // Show the category
        } else {
            container.style.display = "none";  // Hide the category
        }
    });
}

// Add an event listener to the search button
document.getElementById("searchButton").addEventListener("click", filterCategories);