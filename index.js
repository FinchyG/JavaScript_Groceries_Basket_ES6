// foodtype constructor function

function Foodtype(type, name, quantity, price, add_to_basket) {
    this.type          = type;
    this.name          = name;
    this.quantity      = quantity;
    this.price         = price;
    this.add_to_basket = add_to_basket;
}

Foodtype.prototype.total_price = function() { return this.quantity * this.price};

// currently available fruits

var banana = new Foodtype("fruit", "banana", 0, 0.20, true);
var apple  = new Foodtype("fruit", "apple", 0, "£0.60", true);
var orange = new Foodtype("fruit", "orange", 0, "£0.45", true);

// function to capture value of selected <select> option

function show_selected_category() {

    var selected_category = document.getElementById("food_categories").value;

    var available_fruits = document.getElementById("available_fruits");

    if(selected_category === "fruits") {
        available_fruits.style.display = "inline-block";
    }
}

function add_bananas_to_basket() {

    if(banana.add_to_basket === true) {

        banana.quantity += 1;

        var li = document.createElement("li");
        li.setAttribute("id", "banana_li");
        var ul = document.getElementById("basket");

        var total_price = banana.total_price();
        var total_price_formatted = total_price.toFixed(2);
            
        li.appendChild(document.createTextNode(banana.name + " " + banana.quantity + " " + "£" + total_price_formatted));
        ul.appendChild(li);

        total_bill_amount();

    }

    banana.add_to_basket = false;

}

function quantity_plus_one_banana() {

    banana.quantity += 1;
    var total_price = banana.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("banana_li").textContent = banana.name + " " + banana.quantity + " " + "£" + total_price_formatted;

    total_bill_amount();

}

function quantity_minus_one_banana() {

    if(banana.quantity >= 1) {
        banana.quantity -= 1;
    }
    var total_price = banana.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("banana_li").textContent = banana.name + " " + banana.quantity + " " + "£" + total_price_formatted;

    total_bill_amount();

}

function remove_bananas_from_basket() {

    banana.quantity = 0;
    var li = document.getElementById("banana_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);

    total_bill_amount();

}

// code for total bill at bottom of basket

function total_bill_amount() {

    var total_amount = banana.total_price();
    var total_amount_formatted = total_amount.toFixed(2);
    var total_bill = " " + "£" + total_amount_formatted;

    document.getElementById("total_bill").textContent = total_bill;

}