//1. Declares a const for guide's name and current year
const shopName = "Akisha's BloomCraft";
const currentYear = 2026;

// 2. Declares a let for a running count starting at 0
let runningCount = 0;
runningCount = 3;

// 3. Uses document.getElementById(...).textContent to write shop name
const titleElement = document.getElementById("shop-title");
if (titleElement) {
    titleElement.textContent = shopName;
    }

// 4. Writes a dynamic copyright line into footer
const footerElement = document.getElementById("dynamic-footer");
if (footerElement) {
    footerElement.textContent = `© ${currentYear} ${shopName} by Akisha Belamide`;
    }

// 5. Logs at least three labelled values to the console using console.log()
console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Total Places Reviewed:", runningCount);

// 6. stock status 

const stockCount = 8;
const stockElement = document.getElementById("stock-status");

let stockMessage = "";

if (stockCount > 10) {
    stockMessage = "In stock";
} else if (stockCount >= 1 && stockCount <= 10) {
    stockMessage = "Only a few left";
} else {
    stockMessage = "Sold out";
}

if (stockElement) {
    stockElement.textContent = stockMessage;
}

// 7. free check delivery 

const orderTotal = 600;
const isMember = true;

const deliveryFee = (orderTotal >= 500 && isMember === true) ? 0 : 150;

const finalTotal = orderTotal + deliveryFee;

const deliveryElement = document.getElementById("delivery-result");

if (deliveryElement) {
    deliveryElement.textContent =
        `Order Total: ₱${orderTotal} | Delivery Fee: ₱${deliveryFee} | Final Total: ₱${finalTotal}`;
}

// 8. shop open or close

const isShopOpen = true;

const shopStatus = isShopOpen ? "Open today" : "Closed today";

const shopStatusElement = document.getElementById("shop-status");

if (shopStatusElement) {
    shopStatusElement.textContent = shopStatus;
}
