let realPrice = document.getElementById("t_price")
let saveOnMrp = document.getElementById("s_price")
let totalPrice = document.getElementById("sub_price")
let shipCharges = document.getElementById("shipping_price")
let orderTotal = document.getElementById("o_total_price")
let totalSaved = document.getElementById("save_price")
let itemCount = document.getElementById("itemCount")



function fatchData() {
    let data = JSON.parse(localStorage.getItem('order'));
    console.log('data:', data)
    
    data.forEach(function (el) {
        realPrice.innerHTML = `₹${el.realPrice}`;
        saveOnMrp.innerHTML = `-₹${el.saveOnMrp}`;
        totalPrice.innerHTML = `₹${el.totalPrice}`;
        shipCharges.innerHTML = `₹${el.shipCharges}`;
        orderTotal.innerHTML = `₹${el.orderTotal}`;
        totalSaved.innerHTML = `₹${el.totalSaved}`;
        itemCount.innerHTML = `Show Items in Order (${el.productCount})`
    })
}
fatchData()

 function redirectToPayment() {
    window.location.href = "../payment/payment.html";
}
  
function gotoHome() {
    window.location.href = "../index.html"
}
