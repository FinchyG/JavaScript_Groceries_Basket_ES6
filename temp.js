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