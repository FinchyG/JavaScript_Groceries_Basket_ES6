// foodtype constructor const

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
var apple = new Foodtype("fruit", "apple", 0, 0.60, true);

// currently available vegetables

var cauliflower = new Foodtype("vegetable", "cauliflower", 0, 1.00, true);
var broccoli = new Foodtype("vegetable", "broccoli", 0, 0.80, true);
var turnip = new Foodtype("vegetable", "turnip", 0, 0.95, true);

// currently available breads

var baguette = new Foodtype("bread", "baguette", 0, 1.00, true);
var loaf = new Foodtype("bread", "loaf", 0, 1.30, true);
var roll = new Foodtype("bread", "roll", 0, 0.15, true);

// currently available meats

var beef = new Foodtype("meat", "beef", 0, 3.00, true);
var pork = new Foodtype("meat", "pork", 0, 2.00, true);
var chicken = new Foodtype("meat", "chicken", 0, 1.00, true);

// const to capture value of <select> option and display available foods

const show_selected_category = () => {

    var selected_category = document.getElementById("food_categories").value;

    var available_fruits = document.getElementById("available_fruits");
    var available_vegetables = document.getElementById("available_vegetables");
    var available_breads = document.getElementById("available_breads");

    switch(selected_category) {

        case "fruits":
            available_fruits.style.display = "inline-block";
            available_vegetables.style.display = "none";
            available_breads.style.display = "none";
            available_meats.style.display = "none";
            break;

        case "vegetables":
            available_vegetables.style.display = "inline-block";
            available_fruits.style.display = "none";
            available_breads.style.display = "none";
            available_meats.style.display = "none";
            break;

        case "breads":
            available_breads.style.display = "inline-block";
            available_fruits.style.display = "none";
            available_vegetables.style.display = "none";
            available_meats.style.display = "none";
            break;

        case "meats":
            available_meats.style.display = "inline-block";
            available_fruits.style.display = "none";
            available_vegetables.style.display = "none";
            available_breads.style.display = "none";
            break;

    }
        
}

// code for total bill at bottom of basket

const total_bill_amount = () => {

    var total_amount = banana.total_price() + orange.total_price() + apple.total_price() + cauliflower.total_price() +
                       broccoli.total_price() + turnip.total_price() + baguette.total_price() + loaf.total_price() + 
                       roll.total_price() + beef.total_price() + pork.total_price() + chicken.total_price();
    var total_amount_formatted = total_amount.toFixed(2);
    var total_bill = " " + "£" + total_amount_formatted;

    document.getElementById("total_bill").innerHTML = total_bill;

}

// code for fruit objects

// code for banana object

const add_bananas_to_basket = () => {

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

const quantity_plus_one_banana = () => {

    if(banana.quantity >= 1) {

        banana.quantity += 1;
        var total_price = banana.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("banana_li").innerHTML = banana.name + " " + banana.quantity + " " + "£" + total_price_formatted;

        banana_quantity_display()
        total_bill_amount();

    }

}

const quantity_minus_one_banana = () => {

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

const remove_bananas_from_basket = () => {

    banana.quantity = 0;
    var li = document.getElementById("banana_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);

    banana.add_to_basket = true;

    banana_quantity_display()
    total_bill_amount();

}

const banana_quantity_display = () => {

    var display_box = document.getElementById("banana_quantity_display");
    display_box.innerHTML = banana.quantity; 

}

// code for orange object

const add_oranges_to_basket = () => {

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

const quantity_plus_one_orange = () => {

    if(orange.quantity >= 1) {

        orange.quantity += 1;
        var total_price = orange.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("orange_li").innerHTML = orange.name + " " + orange.quantity + " " + "£" + total_price_formatted;

        orange_quantity_display();
        total_bill_amount();

    }

}

const quantity_minus_one_orange = () => {

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

const remove_oranges_from_basket = () => {

    orange.quantity = 0;
    var li = document.getElementById("orange_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);

    orange.add_to_basket = true;

    orange_quantity_display();
    total_bill_amount();

}

const orange_quantity_display = () => {

    var display_box = document.getElementById("orange_quantity_display");
    display_box.innerHTML = orange.quantity; 

}

// code for apple object

const add_apples_to_basket = () => {

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

const quantity_plus_one_apple = () => {

    if(apple.quantity >= 1) {

        apple.quantity += 1;
        var total_price = apple.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("apple_li").innerHTML = apple.name + " " + apple.quantity + " " + "£" + total_price_formatted;

        apple_quantity_display();
        total_bill_amount();

    }

}

const quantity_minus_one_apple = () => {

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

const remove_apples_from_basket = () => {

    apple.quantity = 0;
    var li = document.getElementById("apple_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);

    apple.add_to_basket = true;

    apple_quantity_display();
    total_bill_amount();

}

const apple_quantity_display = () => {

    var display_box = document.getElementById("apple_quantity_display");
    display_box.innerHTML = apple.quantity; 

}

// code for vegetable objects

// code for cauliflower object

const add_cauliflowers_to_basket = () => {

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

const quantity_plus_one_cauliflower = () => {

    if(cauliflower.quantity >= 1) {

        cauliflower.quantity += 1;
        var total_price = cauliflower.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("cauliflower_li").innerHTML = cauliflower.name + " " + cauliflower.quantity + " " + "£" + total_price_formatted;

        cauliflower_quantity_display()
        total_bill_amount();

    }

}

const quantity_minus_one_cauliflower = () => {

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

const remove_cauliflowers_from_basket = () => {

    cauliflower.quantity = 0;
    var li = document.getElementById("cauliflower_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);

    cauliflower.add_to_basket = true;

    cauliflower_quantity_display()
    total_bill_amount();

}

const cauliflower_quantity_display = () => {

    var display_box = document.getElementById("cauliflower_quantity_display");
    display_box.innerHTML = cauliflower.quantity; 

}

// code for broccoli object

const add_broccolis_to_basket = () => {

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

const quantity_plus_one_broccoli = () => {

    if(broccoli.quantity >= 1) {

        broccoli.quantity += 1;
        var total_price = broccoli.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("broccoli_li").innerHTML = broccoli.name + " " + broccoli.quantity + " " + "£" + total_price_formatted;

        broccoli_quantity_display();
        total_bill_amount();

    }

}

const quantity_minus_one_broccoli = () => {

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

const remove_broccolis_from_basket = () => {

    broccoli.quantity = 0;
    var li = document.getElementById("broccoli_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);

    broccoli.add_to_basket = true;

    broccoli_quantity_display();
    total_bill_amount();

}

const broccoli_quantity_display = () => {

    var display_box = document.getElementById("broccoli_quantity_display");
    display_box.innerHTML = broccoli.quantity; 

}

// code for turnip object

const add_turnips_to_basket = () => {

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

const quantity_plus_one_turnip = () => {

    if(turnip.quantity >= 1) {

        turnip.quantity += 1;
        var total_price = turnip.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("turnip_li").innerHTML = turnip.name + " " + turnip.quantity + " " + "£" + total_price_formatted;

        turnip_quantity_display();
        total_bill_amount();

    }

}

const quantity_minus_one_turnip = () => {

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

const remove_turnips_from_basket = () => {

    turnip.quantity = 0;
    var li = document.getElementById("turnip_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);

    turnip.add_to_basket = true;

    turnip_quantity_display();
    total_bill_amount();

}

const turnip_quantity_display = () => {

    var display_box = document.getElementById("turnip_quantity_display");
    display_box.innerHTML = turnip.quantity; 

}

// code for bread objects

// code for baguette object

const add_baguettes_to_basket = () => {

    if(baguette.add_to_basket === true) {
  
        baguette.quantity += 1;
  
        var li = document.createElement("li");
        li.setAttribute("id", "baguette_li");
        var ul = document.getElementById("basket");
  
        var total_price = baguette.total_price();
        var total_price_formatted = total_price.toFixed(2);
            
        li.appendChild(document.createTextNode(baguette.name + " " + baguette.quantity + " " + "£" + total_price_formatted));
        ul.appendChild(li);
  
        baguette_quantity_display()
        total_bill_amount();
  
    }
  
    baguette.add_to_basket = false;
  
}
  
  const quantity_plus_one_baguette = () => {
  
    if(baguette.quantity >= 1) {
  
        baguette.quantity += 1;
        var total_price = baguette.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("baguette_li").innerHTML = baguette.name + " " + baguette.quantity + " " + "£" + total_price_formatted;
  
        baguette_quantity_display()
        total_bill_amount();
  
    }
  
  }
  
  const quantity_minus_one_baguette = () => {
  
    if(baguette.quantity >= 1) {
        baguette.quantity -= 1;
    }
    if(baguette.quantity === 0) {
        remove_baguettes_from_basket();
    }
    var total_price = baguette.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("baguette_li").innerHTML = baguette.name + " " + baguette.quantity + " " + "£" + total_price_formatted;
  
    baguette_quantity_display()
    total_bill_amount();
  
  }
  
  const remove_baguettes_from_basket = () => {
  
    baguette.quantity = 0;
    var li = document.getElementById("baguette_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);
  
    baguette.add_to_basket = true;
  
    baguette_quantity_display()
    total_bill_amount();
  
  }
  
  const baguette_quantity_display = () => {
  
    var display_box = document.getElementById("baguette_quantity_display");
    display_box.innerHTML = baguette.quantity; 
  
  }
  
  // code for loaf object
  
  const add_loafs_to_basket = () => {
  
    if(loaf.add_to_basket === true) {
  
        loaf.quantity += 1;
  
        var li = document.createElement("li");
        li.setAttribute("id", "loaf_li");
        var ul = document.getElementById("basket");
  
        var total_price = loaf.total_price();
        var total_price_formatted = total_price.toFixed(2);
            
        li.appendChild(document.createTextNode(loaf.name + " " + loaf.quantity + " " + "£" + total_price_formatted));
        ul.appendChild(li);
  
        loaf_quantity_display();
        total_bill_amount();
  
    }
  
    loaf.add_to_basket = false;
  
  }
  
  const quantity_plus_one_loaf = () => {
  
    if(loaf.quantity >= 1) {
  
        loaf.quantity += 1;
        var total_price = loaf.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("loaf_li").innerHTML = loaf.name + " " + loaf.quantity + " " + "£" + total_price_formatted;
  
        loaf_quantity_display();
        total_bill_amount();
  
    }
  
  }
  
  const quantity_minus_one_loaf = () => {
  
    if(loaf.quantity >= 1) {
        loaf.quantity -= 1;
    }
    if(loaf.quantity === 0) {
        remove_loafs_from_basket();
    }
    var total_price = loaf.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("loaf_li").innerHTML = loaf.name + " " + loaf.quantity + " " + "£" + total_price_formatted;
  
    loaf_quantity_display();
    total_bill_amount();
  
  }
  
  const remove_loafs_from_basket = () => {
  
    loaf.quantity = 0;
    var li = document.getElementById("loaf_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);
  
    loaf.add_to_basket = true;
  
    loaf_quantity_display();
    total_bill_amount();
  
  }
  
  const loaf_quantity_display = () => {
  
    var display_box = document.getElementById("loaf_quantity_display");
    display_box.innerHTML = loaf.quantity; 
  
  }
  
  // code for roll object
  
  const add_rolls_to_basket = () => {
  
    if(roll.add_to_basket === true) {
  
        roll.quantity += 1;
  
        var li = document.createElement("li");
        li.setAttribute("id", "roll_li");
        var ul = document.getElementById("basket");
  
        var total_price = roll.total_price();
        var total_price_formatted = total_price.toFixed(2);
            
        li.appendChild(document.createTextNode(roll.name + " " + roll.quantity + " " + "£" + total_price_formatted));
        ul.appendChild(li);
  
        roll_quantity_display();
        total_bill_amount();
  
    }
  
    roll.add_to_basket = false;
  
  }
  
  const quantity_plus_one_roll = () => {
  
    if(roll.quantity >= 1) {
  
        roll.quantity += 1;
        var total_price = roll.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("roll_li").innerHTML = roll.name + " " + roll.quantity + " " + "£" + total_price_formatted;
  
        roll_quantity_display();
        total_bill_amount();
  
    }
  
  }
  
  const quantity_minus_one_roll = () => {
  
    if(roll.quantity >= 1) {
        roll.quantity -= 1;
    }
    if(roll.quantity === 0) {
        remove_rolls_from_basket();
    }
    var total_price = roll.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("roll_li").innerHTML = roll.name + " " + roll.quantity + " " + "£" + total_price_formatted;
  
    roll_quantity_display();
    total_bill_amount();
  
  }
  
  const remove_rolls_from_basket = () => {
  
    roll.quantity = 0;
    var li = document.getElementById("roll_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);
  
    roll.add_to_basket = true;
  
    roll_quantity_display();
    total_bill_amount();
  
  }
  
  const roll_quantity_display = () => {
  
    var display_box = document.getElementById("roll_quantity_display");
    display_box.innerHTML = roll.quantity; 
  
  }

  // code for meat objects

// code for beef object

const add_beefs_to_basket = () => {

    if(beef.add_to_basket === true) {
  
        beef.quantity += 1;
  
        var li = document.createElement("li");
        li.setAttribute("id", "beef_li");
        var ul = document.getElementById("basket");
  
        var total_price = beef.total_price();
        var total_price_formatted = total_price.toFixed(2);
            
        li.appendChild(document.createTextNode(beef.name + " " + beef.quantity + " " + "£" + total_price_formatted));
        ul.appendChild(li);
  
        beef_quantity_display()
        total_bill_amount();
  
    }
  
    beef.add_to_basket = false;
  
  }
  
  const quantity_plus_one_beef = () => {
  
    if(beef.quantity >= 1) {
  
        beef.quantity += 1;
        var total_price = beef.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("beef_li").innerHTML = beef.name + " " + beef.quantity + " " + "£" + total_price_formatted;
  
        beef_quantity_display()
        total_bill_amount();
  
    }
  
  }
  
  const quantity_minus_one_beef = () => {
  
    if(beef.quantity >= 1) {
        beef.quantity -= 1;
    }
    if(beef.quantity === 0) {
        remove_beefs_from_basket();
    }
    var total_price = beef.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("beef_li").innerHTML = beef.name + " " + beef.quantity + " " + "£" + total_price_formatted;
  
    beef_quantity_display()
    total_bill_amount();
  
  }
  
  const remove_beefs_from_basket = () => {
  
    beef.quantity = 0;
    var li = document.getElementById("beef_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);
  
    beef.add_to_basket = true;
  
    beef_quantity_display()
    total_bill_amount();
  
  }
  
  const beef_quantity_display = () => {
  
    var display_box = document.getElementById("beef_quantity_display");
    display_box.innerHTML = beef.quantity; 
  
  }
  
  // code for pork object
  
  const add_porks_to_basket = () => {
  
    if(pork.add_to_basket === true) {
  
        pork.quantity += 1;
  
        var li = document.createElement("li");
        li.setAttribute("id", "pork_li");
        var ul = document.getElementById("basket");
  
        var total_price = pork.total_price();
        var total_price_formatted = total_price.toFixed(2);
            
        li.appendChild(document.createTextNode(pork.name + " " + pork.quantity + " " + "£" + total_price_formatted));
        ul.appendChild(li);
  
        pork_quantity_display();
        total_bill_amount();
  
    }
  
    pork.add_to_basket = false;
  
  }
  
  const quantity_plus_one_pork = () => {
  
    if(pork.quantity >= 1) {
  
        pork.quantity += 1;
        var total_price = pork.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("pork_li").innerHTML = pork.name + " " + pork.quantity + " " + "£" + total_price_formatted;
  
        pork_quantity_display();
        total_bill_amount();
  
    }
  
  }
  
  const quantity_minus_one_pork = () => {
  
    if(pork.quantity >= 1) {
        pork.quantity -= 1;
    }
    if(pork.quantity === 0) {
        remove_porks_from_basket();
    }
    var total_price = pork.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("pork_li").innerHTML = pork.name + " " + pork.quantity + " " + "£" + total_price_formatted;
  
    pork_quantity_display();
    total_bill_amount();
  
  }
  
  const remove_porks_from_basket = () => {
  
    pork.quantity = 0;
    var li = document.getElementById("pork_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);
  
    pork.add_to_basket = true;
  
    pork_quantity_display();
    total_bill_amount();
  
  }
  
  const pork_quantity_display = () => {
  
    var display_box = document.getElementById("pork_quantity_display");
    display_box.innerHTML = pork.quantity; 
  
  }
  
  // code for chicken object
  
  const add_chickens_to_basket = () => {
  
    if(chicken.add_to_basket === true) {
  
        chicken.quantity += 1;
  
        var li = document.createElement("li");
        li.setAttribute("id", "chicken_li");
        var ul = document.getElementById("basket");
  
        var total_price = chicken.total_price();
        var total_price_formatted = total_price.toFixed(2);
            
        li.appendChild(document.createTextNode(chicken.name + " " + chicken.quantity + " " + "£" + total_price_formatted));
        ul.appendChild(li);
  
        chicken_quantity_display();
        total_bill_amount();
  
    }
  
    chicken.add_to_basket = false;
  
  }
  
  const quantity_plus_one_chicken = () => {
  
    if(chicken.quantity >= 1) {
  
        chicken.quantity += 1;
        var total_price = chicken.total_price();
        var total_price_formatted = total_price.toFixed(2);
        document.getElementById("chicken_li").innerHTML = chicken.name + " " + chicken.quantity + " " + "£" + total_price_formatted;
  
        chicken_quantity_display();
        total_bill_amount();
  
    }
  
  }
  
  const quantity_minus_one_chicken = () => {
  
    if(chicken.quantity >= 1) {
        chicken.quantity -= 1;
    }
    if(chicken.quantity === 0) {
        remove_chickens_from_basket();
    }
    var total_price = chicken.total_price();
    var total_price_formatted = total_price.toFixed(2);
    document.getElementById("chicken_li").innerHTML = chicken.name + " " + chicken.quantity + " " + "£" + total_price_formatted;
  
    chicken_quantity_display();
    total_bill_amount();
  
  }
  
  const remove_chickens_from_basket = () => {
  
    chicken.quantity = 0;
    var li = document.getElementById("chicken_li");
    var ul = document.getElementById("basket");
    ul.removeChild(li);
  
    chicken.add_to_basket = true;
  
    chicken_quantity_display();
    total_bill_amount();
  
  }
  
  const chicken_quantity_display = () => {
  
    var display_box = document.getElementById("chicken_quantity_display");
    display_box.innerHTML = chicken.quantity; 
  
  }