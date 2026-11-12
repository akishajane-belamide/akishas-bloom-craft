// 1. Declares a const for shop name and current year
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

// 4. Writes a dynamic copyright line into footer (Fixed guideline to shopName)
const footerElement = document.getElementById("dynamic-footer");
if (footerElement) {
  footerElement.textContent = `© ${currentYear} ${shopName} by Akisha Belamide`;
}

// 5. Logs at least three labelled values to the console using console.log()
console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Total Places Reviewed:", runningCount);

// 6. Stock status
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

// 7. Free check delivery
const orderTotal = 600;
const isMember = true;

const deliveryFee = (orderTotal >= 500 && isMember === true) ? 0 : 150;

const finalTotal = orderTotal + deliveryFee;

const deliveryElement = document.getElementById("delivery-result");

if (deliveryElement) {
  deliveryElement.textContent = 
    `Order Total: P${orderTotal} | Delivery Fee: P${deliveryFee} | Final Total: P${finalTotal}`;
}

// 8. Shop open or close
const isShopOpen = true;

const shopStatus = isShopOpen ? "Open today" : "Closed today";

const shopStatusElement = document.getElementById("shop-status");

if (shopStatusElement) {
  shopStatusElement.textContent = shopStatus;
}
