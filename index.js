// foodtype constructor function

function Foodtype(type, name, quantity, price) {
    this.type     = type;
    this.name     = name;
    this.quantity = quantity;
    this.price    = price;
}

Foodtype.prototype.total_price = function() { return this.quantity * this.price};

// currently available fruits

var banana = new Foodtype("fruit", "banana", 1, 0.20);
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

function add_bananas_to_basket() {

    var li = document.createElement("li");
    li.setAttribute("id", "banana_li");
    var ul = document.getElementById("basket");

    var total_price = banana.total_price();
    var total_price_formatted = total_price.toFixed(2);
        
    li.appendChild(document.createTextNode(banana.name + " " + banana.quantity + " " + "£" + total_price_formatted));
    ul.appendChild(li);

}

function quantity_plus_one_banana() {
    banana.quantity += 1;
    var total_price = banana.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("banana_li").textContent = banana.name + " " + banana.quantity + " " + "£" + total_price_formatted;
}

function quantity_minus_one_banana() {
    banana.quantity -= 1;
    var total_price = banana.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("banana_li").textContent = banana.name + " " + banana.quantity + " " + "£" + total_price_formatted;
}

function remove_bananas_from_basket() {
    var li = document.getElementById("banana_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);
}