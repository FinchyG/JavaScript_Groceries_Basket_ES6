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