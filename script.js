let cart = [];
let total = 0;

document.querySelectorAll(".menu-item button").forEach((button) => {
    button.addEventListener("click", (event) => {
        const menuItem = event.target.parentElement;
        const itemName = menuItem.querySelector("h3").textContent;
        const itemPrice = (Math.random() * 10 + 5).toFixed(2);
        total += parseFloat(itemPrice);

        cart.push({ name: itemName, price: itemPrice });
        updateCart();
    });
});

function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";
    cart.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.textContent = `${item.name}: $${item.price}`;
        cartItemsContainer.appendChild(itemDiv);
    });
    document.getElementById("total-price").textContent = total.toFixed(2);
    document.getElementById("cart-count").textContent = cart.length;
}

document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    const paymentInfo = prompt(`Your total is $${total.toFixed(2)}. Please enter your payment information:`);

    if (paymentInfo) {
        alert("Payment successful! Thank you for your order!");
        cart = [];
        total = 0;
        updateCart();
    }
});

document.getElementById("reserveForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    alert(`Reservation made for ${date} at ${time}`);
});
