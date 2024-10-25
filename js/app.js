function Summary( accounting, rental) {
    //this.quantity = quantity;
    //this.orders = orders;
    //this.package = package;
    this.accounting = accounting;
    this.rental = rental;
}

const my_total = new Summary();

const el_select__input = document.querySelector('.select__input');
const select__dropdown = document.querySelector('.calc__select')
el_select__input.addEventListener('click', function() {
    select__dropdown.classList.toggle("open");
    const el_value = document.querySelectorAll('.select__dropdown li');

    el_value.forEach( function(el) {
        el.addEventListener('click', function() {
            const value = el.getAttribute('data-value');
            el_select__input.innerHTML = value;
            if (el_select__input === "basic") {
                Summary.prototype.package = 0;
            } else if (el_select__input === "Professional") {
                Summary.prototype.package = 25;
            } else if (el_select__input === "Premium") {
                Summary.prototype.package = 60;
            }

            select__dropdown.classList.remove("open");
        })
    })
 
})

const el_products = document.querySelector('#products');
el_products.addEventListener('input', handProducts);

const el_orders = document.querySelector('#orders');
el_orders.addEventListener('input', handleOrders);





Summary.prototype.sum = function() {
    const el_summary__total = document.querySelector('.summary__total');
    const el_total__price = document.querySelector('.total__price');


    el_total__price.innerHTML = '$'+ this.quantity * 0.5;
    el_summary__total.classList.add("open")
    return this.quantity * 0.5
}



function handProducts() {
    const el_form__input = document.querySelector("#products").value;
    const element = document.querySelector('[data-id="products"]');

    Summary.prototype.quantity = el_form__input;

    element.children[1].innerHTML = `${my_total.quantity} *  $0.5`;
    element.lastElementChild.innerHTML = '$'+ my_total.sum();

    if (my_total.quantity > 0) {
        element.classList.add("open");
    } else {
        element.classList.remove("open");
    }
    
}

function handleOrders() {
    const el_form__input = document.querySelector('#orders').value;
    const display = document.querySelector('[data-id="orders"]');

    Summary.prototype.orders = el_form__input;

    display.children[1].innerHTML = `${my_total.orders} *  $0.25`;
    display.lastElementChild.innerHTML = "";

    if (my_total.orders > 0) {
        display.classList.add("open");
    } else {
        display.classList.remove("open");
    }


}







