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
var orange = new Foodtype("fruit", "orange", 0, 0.45, true);
var apple  = new Foodtype("fruit", "apple", 0, 0.60, true);

// function to capture value of <select> option and display available foods

function show_selected_category() {

    var selected_category = document.getElementById("food_categories").value;

    var available_fruits = document.getElementById("available_fruits");

    if(selected_category === "fruits") {
        available_fruits.style.display = "inline-block";
    }
}

// code for total bill at bottom of basket

function total_bill_amount() {

    var total_amount = banana.total_price() + orange.total_price() + apple.total_price();
    var total_amount_formatted = total_amount.toFixed(2);
    var total_bill = " " + "£" + total_amount_formatted;

    document.getElementById("total_bill").textContent = total_bill;

}

// code for banana object

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
    if(banana.quantity === 0) {
        remove_bananas_from_basket();
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

    banana.add_to_basket = true;

    total_bill_amount();

}

// code for orange object

function add_oranges_to_basket() {

    if(orange.add_to_basket === true) {

        orange.quantity += 1;

        var li = document.createElement("li");
        li.setAttribute("id", "orange_li");
        var ul = document.getElementById("basket");

        var total_price = orange.total_price();
        var total_price_formatted = total_price.toFixed(2);
            
        li.appendChild(document.createTextNode(orange.name + " " + orange.quantity + " " + "£" + total_price_formatted));
        ul.appendChild(li);

        total_bill_amount();

    }

    orange.add_to_basket = false;

}

function quantity_plus_one_orange() {

    orange.quantity += 1;
    var total_price = orange.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("orange_li").textContent = orange.name + " " + orange.quantity + " " + "£" + total_price_formatted;

    total_bill_amount();

}

function quantity_minus_one_orange() {

    if(orange.quantity >= 1) {
        orange.quantity -= 1;
    }
    var total_price = orange.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("orange_li").textContent = orange.name + " " + orange.quantity + " " + "£" + total_price_formatted;

    total_bill_amount();

}

function remove_oranges_from_basket() {

    orange.quantity = 0;
    var li = document.getElementById("orange_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);

    orange.add_to_basket = true;

    total_bill_amount();

}

// code for apple object

function add_apples_to_basket() {

    if(apple.add_to_basket === true) {

        apple.quantity += 1;

        var li = document.createElement("li");
        li.setAttribute("id", "apple_li");
        var ul = document.getElementById("basket");

        var total_price = apple.total_price();
        var total_price_formatted = total_price.toFixed(2);
            
        li.appendChild(document.createTextNode(apple.name + " " + apple.quantity + " " + "£" + total_price_formatted));
        ul.appendChild(li);

        total_bill_amount();

    }

    apple.add_to_basket = false;

}

function quantity_plus_one_apple() {

    apple.quantity += 1;
    var total_price = apple.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("apple_li").textContent = apple.name + " " + apple.quantity + " " + "£" + total_price_formatted;

    total_bill_amount();

}

function quantity_minus_one_apple() {

    if(apple.quantity >= 1) {
        apple.quantity -= 1;
    }
    var total_price = apple.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("apple_li").textContent = apple.name + " " + apple.quantity + " " + "£" + total_price_formatted;

    total_bill_amount();

}

function remove_apples_from_basket() {

    apple.quantity = 0;
    var li = document.getElementById("apple_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);

    apple.add_to_basket = true;

    total_bill_amount();

}