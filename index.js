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

// currently available vegetables

var cauliflower = new Foodtype("fruit", "cauliflower", 0, 1.00, true);
var broccoli = new Foodtype("fruit", "broccoli", 0, 0.80, true);
var turnip  = new Foodtype("fruit", "turnip", 0, 0.95, true);

// function to capture value of <select> option and display available foods

function show_selected_category() {

    var selected_category = document.getElementById("food_categories").value;

    var available_fruits = document.getElementById("available_fruits");
    var available_vegetables = document.getElementById("available_vegetables");

    switch(selected_category) {

        case "fruits":
            available_fruits.style.display = "inline-block";
            available_vegetables.style.display = "none";
            break;

        case "vegetables":
            available_vegetables.style.display = "inline-block";
            available_fruits.style.display = "none";
            break;
    }
        
}

// code for total bill at bottom of basket

function total_bill_amount() {

    var total_amount = banana.total_price() + orange.total_price() + apple.total_price() + cauliflower.total_price() +
                       broccoli.total_price() + turnip.total_price();
    var total_amount_formatted = total_amount.toFixed(2);
    var total_bill = " " + "£" + total_amount_formatted;

    document.getElementById("total_bill").innerHTML = total_bill;

}

// code for fruit objects

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

        banana_quantity_display()
        total_bill_amount();

    }

    banana.add_to_basket = false;

}

function quantity_plus_one_banana() {

    if(banana.quantity >= 1) {

        banana.quantity += 1;
        var total_price = banana.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("banana_li").innerHTML = banana.name + " " + banana.quantity + " " + "£" + total_price_formatted;

        banana_quantity_display()
        total_bill_amount();

    }

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
    document.getElementById("banana_li").innerHTML = banana.name + " " + banana.quantity + " " + "£" + total_price_formatted;

    banana_quantity_display()
    total_bill_amount();

}

function remove_bananas_from_basket() {

    banana.quantity = 0;
    var li = document.getElementById("banana_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);

    banana.add_to_basket = true;

    banana_quantity_display()
    total_bill_amount();

}

function banana_quantity_display() {

    var display_box = document.getElementById("banana_quantity_display");
    display_box.innerHTML = banana.quantity; 

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

        orange_quantity_display();
        total_bill_amount();

    }

    orange.add_to_basket = false;

}

function quantity_plus_one_orange() {

    if(orange.quantity >= 1) {

        orange.quantity += 1;
        var total_price = orange.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("orange_li").innerHTML = orange.name + " " + orange.quantity + " " + "£" + total_price_formatted;

        orange_quantity_display();
        total_bill_amount();

    }

}

function quantity_minus_one_orange() {

    if(orange.quantity >= 1) {
        orange.quantity -= 1;
    }
    if(orange.quantity === 0) {
        remove_oranges_from_basket();
    }
    var total_price = orange.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("orange_li").innerHTML = orange.name + " " + orange.quantity + " " + "£" + total_price_formatted;

    orange_quantity_display();
    total_bill_amount();

}

function remove_oranges_from_basket() {

    orange.quantity = 0;
    var li = document.getElementById("orange_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);

    orange.add_to_basket = true;

    orange_quantity_display();
    total_bill_amount();

}

function orange_quantity_display() {

    var display_box = document.getElementById("orange_quantity_display");
    display_box.innerHTML = orange.quantity; 

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

        apple_quantity_display();
        total_bill_amount();

    }

    apple.add_to_basket = false;

}

function quantity_plus_one_apple() {

    if(apple.quantity >= 1) {

        apple.quantity += 1;
        var total_price = apple.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("apple_li").innerHTML = apple.name + " " + apple.quantity + " " + "£" + total_price_formatted;

        apple_quantity_display();
        total_bill_amount();

    }

}

function quantity_minus_one_apple() {

    if(apple.quantity >= 1) {
        apple.quantity -= 1;
    }
    if(apple.quantity === 0) {
        remove_apples_from_basket();
    }
    var total_price = apple.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("apple_li").innerHTML = apple.name + " " + apple.quantity + " " + "£" + total_price_formatted;

    apple_quantity_display();
    total_bill_amount();

}

function remove_apples_from_basket() {

    apple.quantity = 0;
    var li = document.getElementById("apple_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);

    apple.add_to_basket = true;

    apple_quantity_display();
    total_bill_amount();

}

function apple_quantity_display() {

    var display_box = document.getElementById("apple_quantity_display");
    display_box.innerHTML = apple.quantity; 

}

// code for fruit objects

// code for cauliflower object

function add_cauliflowers_to_basket() {

    if(cauliflower.add_to_basket === true) {

        cauliflower.quantity += 1;

        var li = document.createElement("li");
        li.setAttribute("id", "cauliflower_li");
        var ul = document.getElementById("basket");

        var total_price = cauliflower.total_price();
        var total_price_formatted = total_price.toFixed(2);
            
        li.appendChild(document.createTextNode(cauliflower.name + " " + cauliflower.quantity + " " + "£" + total_price_formatted));
        ul.appendChild(li);

        cauliflower_quantity_display()
        total_bill_amount();

    }

    cauliflower.add_to_basket = false;

}

function quantity_plus_one_cauliflower() {

    if(cauliflower.quantity >= 1) {

        cauliflower.quantity += 1;
        var total_price = cauliflower.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("cauliflower_li").innerHTML = cauliflower.name + " " + cauliflower.quantity + " " + "£" + total_price_formatted;

        cauliflower_quantity_display()
        total_bill_amount();

    }

}

function quantity_minus_one_cauliflower() {

    if(cauliflower.quantity >= 1) {
        cauliflower.quantity -= 1;
    }
    if(cauliflower.quantity === 0) {
        remove_cauliflowers_from_basket();
    }
    var total_price = cauliflower.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("cauliflower_li").innerHTML = cauliflower.name + " " + cauliflower.quantity + " " + "£" + total_price_formatted;

    cauliflower_quantity_display()
    total_bill_amount();

}

function remove_cauliflowers_from_basket() {

    cauliflower.quantity = 0;
    var li = document.getElementById("cauliflower_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);

    cauliflower.add_to_basket = true;

    cauliflower_quantity_display()
    total_bill_amount();

}

function cauliflower_quantity_display() {

    var display_box = document.getElementById("cauliflower_quantity_display");
    display_box.innerHTML = cauliflower.quantity; 

}

// code for broccoli object

function add_broccolis_to_basket() {

    if(broccoli.add_to_basket === true) {

        broccoli.quantity += 1;

        var li = document.createElement("li");
        li.setAttribute("id", "broccoli_li");
        var ul = document.getElementById("basket");

        var total_price = broccoli.total_price();
        var total_price_formatted = total_price.toFixed(2);
            
        li.appendChild(document.createTextNode(broccoli.name + " " + broccoli.quantity + " " + "£" + total_price_formatted));
        ul.appendChild(li);

        broccoli_quantity_display();
        total_bill_amount();

    }

    broccoli.add_to_basket = false;

}

function quantity_plus_one_broccoli() {

    if(broccoli.quantity >= 1) {

        broccoli.quantity += 1;
        var total_price = broccoli.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("broccoli_li").innerHTML = broccoli.name + " " + broccoli.quantity + " " + "£" + total_price_formatted;

        broccoli_quantity_display();
        total_bill_amount();

    }

}

function quantity_minus_one_broccoli() {

    if(broccoli.quantity >= 1) {
        broccoli.quantity -= 1;
    }
    if(broccoli.quantity === 0) {
        remove_broccolis_from_basket();
    }
    var total_price = broccoli.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("broccoli_li").innerHTML = broccoli.name + " " + broccoli.quantity + " " + "£" + total_price_formatted;

    broccoli_quantity_display();
    total_bill_amount();

}

function remove_broccolis_from_basket() {

    broccoli.quantity = 0;
    var li = document.getElementById("broccoli_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);

    broccoli.add_to_basket = true;

    broccoli_quantity_display();
    total_bill_amount();

}

function broccoli_quantity_display() {

    var display_box = document.getElementById("broccoli_quantity_display");
    display_box.innerHTML = broccoli.quantity; 

}

// code for turnip object

function add_turnips_to_basket() {

    if(turnip.add_to_basket === true) {

        turnip.quantity += 1;

        var li = document.createElement("li");
        li.setAttribute("id", "turnip_li");
        var ul = document.getElementById("basket");

        var total_price = turnip.total_price();
        var total_price_formatted = total_price.toFixed(2);
            
        li.appendChild(document.createTextNode(turnip.name + " " + turnip.quantity + " " + "£" + total_price_formatted));
        ul.appendChild(li);

        turnip_quantity_display();
        total_bill_amount();

    }

    turnip.add_to_basket = false;

}

function quantity_plus_one_turnip() {

    if(turnip.quantity >= 1) {

        turnip.quantity += 1;
        var total_price = turnip.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("turnip_li").innerHTML = turnip.name + " " + turnip.quantity + " " + "£" + total_price_formatted;

        turnip_quantity_display();
        total_bill_amount();

    }

}

function quantity_minus_one_turnip() {

    if(turnip.quantity >= 1) {
        turnip.quantity -= 1;
    }
    if(turnip.quantity === 0) {
        remove_turnips_from_basket();
    }
    var total_price = turnip.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("turnip_li").innerHTML = turnip.name + " " + turnip.quantity + " " + "£" + total_price_formatted;

    turnip_quantity_display();
    total_bill_amount();

}

function remove_turnips_from_basket() {

    turnip.quantity = 0;
    var li = document.getElementById("turnip_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);

    turnip.add_to_basket = true;

    turnip_quantity_display();
    total_bill_amount();

}

function turnip_quantity_display() {

    var display_box = document.getElementById("turnip_quantity_display");
    display_box.innerHTML = turnip.quantity; 

}