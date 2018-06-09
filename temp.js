// code for bread objects

// code for baguette object

function add_baguettes_to_basket() {

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

function quantity_plus_one_baguette() {

  if(baguette.quantity >= 1) {

      baguette.quantity += 1;
      var total_price = baguette.total_price();
      var total_price_formatted = total_price.toFixed(2);
      document.getElementById("baguette_li").innerHTML = baguette.name + " " + baguette.quantity + " " + "£" + total_price_formatted;

      baguette_quantity_display()
      total_bill_amount();

  }

}

function quantity_minus_one_baguette() {

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

function remove_baguettes_from_basket() {

  baguette.quantity = 0;
  var li = document.getElementById("baguette_li");
  var ul = document.getElementById("basket");
  ul.removeChild(li);

  baguette.add_to_basket = true;

  baguette_quantity_display()
  total_bill_amount();

}

function baguette_quantity_display() {

  var display_box = document.getElementById("baguette_quantity_display");
  display_box.innerHTML = baguette.quantity; 

}

// code for loaf object

function add_loafs_to_basket() {

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

function quantity_plus_one_loaf() {

  if(loaf.quantity >= 1) {

      loaf.quantity += 1;
      var total_price = loaf.total_price();
      var total_price_formatted = total_price.toFixed(2);
      document.getElementById("loaf_li").innerHTML = loaf.name + " " + loaf.quantity + " " + "£" + total_price_formatted;

      loaf_quantity_display();
      total_bill_amount();

  }

}

function quantity_minus_one_loaf() {

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

function remove_loafs_from_basket() {

  loaf.quantity = 0;
  var li = document.getElementById("loaf_li");
  var ul = document.getElementById("basket");
  ul.removeChild(li);

  loaf.add_to_basket = true;

  loaf_quantity_display();
  total_bill_amount();

}

function loaf_quantity_display() {

  var display_box = document.getElementById("loaf_quantity_display");
  display_box.innerHTML = loaf.quantity; 

}

// code for roll object

function add_rolls_to_basket() {

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

function quantity_plus_one_roll() {

  if(roll.quantity >= 1) {

      roll.quantity += 1;
      var total_price = roll.total_price();
      var total_price_formatted = total_price.toFixed(2);
      document.getElementById("roll_li").innerHTML = roll.name + " " + roll.quantity + " " + "£" + total_price_formatted;

      roll_quantity_display();
      total_bill_amount();

  }

}

function quantity_minus_one_roll() {

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

function remove_rolls_from_basket() {

  roll.quantity = 0;
  var li = document.getElementById("roll_li");
  var ul = document.getElementById("basket");
  ul.removeChild(li);

  roll.add_to_basket = true;

  roll_quantity_display();
  total_bill_amount();

}

function roll_quantity_display() {

  var display_box = document.getElementById("roll_quantity_display");
  display_box.innerHTML = roll.quantity; 

}
