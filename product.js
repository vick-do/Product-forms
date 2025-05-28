const productForm = document.getElementById("productForm");
const productNameInput = document.getElementById("ProductName");
const descriptionInput = document.getElementById("description");
const priceInput = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const productDisplay = document.getElementById("productDisplay");
const messageDiv = document.getElementById("message");

// const productData = [
//   {
//     imageUrl:
//       "https://www.electromart.com.gh/product/philips-steam-iron-gc1742-46-red-2000w/#&gid=1&pid=1",
//     name: "Iron",
//     description: "Quality product for smooth clothes.",
// price: 50,
//     brand: "SHEIN",
//   },
//   {
//     name: "Fridge",
//     description: "Quality product for keeping food fresh.",
//     imageUrl:
//       "https://www.caple.co.uk/online-shop/appliances/refrigeration/integrated-refrigeration/rir125/",
//     price: 70,
//     brand: "SHEIN",
//   },
//   {
//     name: "Rice Cooker",
//     description: "Quality product for perfectly cooked rice.",
//     imageUrl: "https://m.media-amazon.com/images/I/71ZvJjxR+xL._AC_SL1500_.jpg",
//     price: 40,
//     brand: "Mr Price",
//   },
//   {
//     name: "Knife Set",
//     description: "Quality product for all your cutting needs.",
//     imageUrl:
//       "https://www.greenpan.us/products/titanium-cutlery-ultimate-16-piece-knife-block-set-1",
//     price: 20,
//     brand: "SHEIN",
//   },
// ];

// function showMessage(msg, type) {
//   messageDiv.textContent = msg;
//   messageDiv.style.display = "block";

//   if (type === "error") {
//     messageDiv.style.backgroundColor = "#f8d7da";
//     messageDiv.style.color = "#721c24";
//     messageDiv.style.border = "1px solid #f5c6cb";
//   } else if (type === "success") {
//     messageDiv.style.backgroundColor = "#d4edda";
//     messageDiv.style.color = "#155724";
//     messageDiv.style.border = "1px solid #c3e6cb";
//   }

//   setTimeout(() => {
//     messageDiv.style.display = "none";
//   }, 3000);
// }

function displayProducts() {
  productDisplay.innerHTML = "";

  if (productData.length === 0) {
    productDisplay.innerHTML = "<p>No products to display</p>";
    return;
  }

  productData.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-item"); // Give it the 'product-item' style

    // Add the image
    const productImage = document.createElement("img");
    productImage.src = product.imageUrl;
    productImage.alt = product.name;
    productCard.appendChild(productImage);

    // Add a box for details (name, description, price, brand)
    const productDetails = document.createElement("div");
    productDetails.classList.add("product-item-details");

    const productName = document.createElement("h4");
    productName.textContent = product.name;
    productDetails.appendChild(productName);

    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;
    productDetails.appendChild(productDescription);

    const productPrice = document.createElement("p");
    productPrice.textContent = `Price: $${product.price.toFixed(2)}`; // Show price with 2 decimal places
    productDetails.appendChild(productPrice);

    const productBrand = document.createElement("p");
    productBrand.textContent = `Brand: ${product.brand}`;
    productDetails.appendChild(productBrand);

    productCard.appendChild(productDetails); // Put all details into the card

    productDisplay.appendChild(productCard); // Put the whole card into the right section
  });
}

// --- Step 4: Listen for the "Submit" button click! ---
// This is like setting up a sensor that waits for the "Submit" button to be pressed.
productForm.addEventListener("submit", function (event) {
  event.preventDefault(); // STOP! Don't send the form to another page! We want to handle it here.

  // --- Step 5: Check if everything is filled in (Validation) ---
  // Is the name box empty? OR is the description box empty? etc.
  if (
    productNameInput.value.trim() === "" ||
    descriptionInput.value.trim() === "" ||
    priceInput.value.trim() === "" ||
    quantityInput.value.trim() === ""
  ) {
    showMessage("Please fill in all fields!", "error"); 
    return; 
  }

  const newProduct = {
    name: productNameInput.value.trim(),
    description: descriptionInput.value.trim(),
    imageUrl: "https://via.placeholder.com/150", // You'd need a way to get a URL here
    price: parseFloat(priceInput.value),
    brand: "Custom",
  };
  productData.push(newProduct); // Add the new product to our list

  // --- Step 7: Clear the form ---
  productForm.reset(); // This is a special command to make all form inputs empty again

  // --- Step 8: Show success message ---
  showMessage("Product added successfully!", "success");

  // --- Step 9: Update the right side with products ---
  displayProducts(); // Show all the products on the right again (including any new ones if you changed Step 6)
});

// --- Step 10: Show products when the page first loads ---
// This is like telling the LEGO creation to do something right when it's built.
displayProducts(); // Call this function once when the page loads so products are there from the start
