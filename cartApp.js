// Function to initialize the cart in localStorage if it doesn't exist
function initializeCart() {
    let cart = localStorage.getItem('cart');
    if (!cart) {
      // Initialize an empty cart if no cart exists in localStorage
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }
  
  // Function to add an item to the cart
  function addItem(item) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Function to remove an item from the cart by item id
  function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    // Filter out the item with the given id
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Function to display the cart contents (for debugging purposes)
  function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
  }
  
  // Event listener for the add item form submission
  document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let itemName = document.getElementById('itemName').value;
    let itemPrice = parseFloat(document.getElementById('itemPrice').value);
  
    // Generate a unique id for the item (timestamp in milliseconds)
    let itemId = Date.now();
  
    // Create item object
    let item = {
      id: itemId,
      name: itemName,
      price: itemPrice
    };
  
    // Add item to the cart and update localStorage
    addItem(item);
  
    // Clear form inputs
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
  
    alert('Item added to cart!');
  });
  
  // Event listener for the display cart button
  document.getElementById('displayCartButton').addEventListener('click', function() {
    displayCart();
  });
  
  // Initialize the cart when the script is first loaded
  initializeCart();
  