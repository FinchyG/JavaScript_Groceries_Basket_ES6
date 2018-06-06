// foodtype constructor function

function Foodtype(type, name, quantity, price) {
    this.type     = type;
    this.name     = name;
    this.quantity = quantity;
    this.price    = price;
}

// currently available fruits

var banana = new Foodtype("fruit", "banana", 1, "£0.20");
var apple  = new Foodtype("fruit", "apple", 1, "£0.60");
var orange = new Foodtype("fruit", "orange", 1, "£0.45");

// function to capture value of selected <select> option

function show_selected_category() {

    var selected_category = document.getElementById("food_categories").value;

    var available_fruits = document.getElementById("available_fruits");

    if(selected_category === "fruits") {
        available_fruits.style.display = "inline-block";
    }
}

function add_banana_to_basket() {

    var li = document.createElement("li");
    li.setAttribute("id", "banana_li");
    var ul = document.getElementById("basket");
    
    li.appendChild(document.createTextNode(banana.name + " " + banana.quantity + " " + banana.price));
    ul.appendChild(li);

}

function quantity_plus_one_banana() {
    banana.quantity += 1;
    document.getElementById("banana_li").textContent = banana.name + " " + banana.quantity + " " + banana.price;
}