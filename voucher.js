//make an array to asign value

var voucherPrice = [];

//global to set total price to 0
var totalprice = 0;


var count = 0;

var item = [];


//function to add prices
function addVouchers(voucherid) {

    //get from DOM
    voucherid = document.getElementById(this.id).getAttribute("voucherid");
    totalprice = (voucherPrice[voucherid]) + totalprice;

    //prints the total to webpage
    document.getElementById("displayPrice").innerHTML = "£" + totalprice.toFixed(2) ;

    //prints item names to cart
    document.getElementById("displayOrder").innerHTML = "<li>" + item   + "</li>" + "<br>"  ;

}

//start on page load
window.onload = function () {

    document.getElementById("voucher10").addEventListener("click", addVouchers);
    document.getElementById("voucher20").addEventListener("click", addVouchers);
    document.getElementById("voucher50").addEventListener("click", addVouchers);


    //fill array
    totalprice = 0;
    voucherPrice[0] = 10.00;
    voucherPrice[1] = 20.00;
    voucherPrice[2] = 50.00;

};

//function to push names into array
function push10() {

    item.push("iTunes Voucher £10");

}

function push20() {

    item.push("iTunes Voucher £20");
}

function push50() {

    item.push("itunes Voucher £50");
}


document.getElementById("voucher10").addEventListener("click", push10);
document.getElementById("voucher20").addEventListener("click", push20);
document.getElementById("voucher50").addEventListener("click", push50);


//function to add basket clicks

function basket(){

    count += 1;

    document.getElementById("displayBasket").innerHTML = count;

}