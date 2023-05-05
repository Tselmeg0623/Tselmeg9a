const products = [
    {
      name: "CandyOne",
      price: 1000,
      description: "Skittles",
      image:
        "https://cdn.shopaccino.com/gtgroceries/products/skittles-fruits-funsize-18g-943061_m.jpg?v=439",
    },
    {
      name: "CandyTwo",
      price: 1200,
      description: "Twix",
      type: "gummy",
      image:
        "https://m.media-amazon.com/images/I/41J9v6n0NpL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFOURANDHALF%2CBottomLeft%2C360%2C-6_SR600%2C315_ZA70%2C445%2C290%2C400%2C400%2CAmazonEmberBold%2C12%2C4%2C0%2C0%2C5_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    },
    {
      name: "CandyThree",
      price: 2300,
      description: "Snickers",
      type: "chocolate",
      image:
        "https://cdn.shopify.com/s/files/1/2479/4642/products/1033903-527Wx527H.jpg?v=1616588523",
    },
    {
      name: "CandyFour",
      price: 550,
      description: "Kit Kat",
      type: "gummy",
      image:
        "https://www.bigbasket.com/media/uploads/p/m/20005896_10-nestle-kitkat-crispy-wafer-bar.jpg",
    },
    {
      name: "CandyFive",
      price: 3200,
      description: "MilkyWay",
      type: "chocolate",
      image:
        "https://media.istockphoto.com/id/538511623/photo/milky-way-chocolate-bar-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=z6HZRF10E0bWbyj2ZUkSzBIRfrI-vlUVi-n6nD6AgzM=",
    },
  ];
  
  function PrintProducts() {
    const productsContainer = document.getElementById("products");
    let newDiv = "";
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
  
  
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img class='productImage' src="${product.image}"
        <h3 class="title">${product.name}</h3>
        <p>${product.description}</p>
        <p id="price">${product.price}</p>
        <button onclick="AddItem('${product.name}')">add</button>
        <button onclick="MinusItem('${product.name}')">minus</button>
      `;
  
      newDiv += div.outerHTML;
    }
  
    productsContainer.innerHTML = newDiv;
  }
  
  window.onload = PrintProducts;
  
  const userbasket = [];
  
  function AddItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity += 1;
    } else {
      userbasket.push({ name: itemName, quantity: 1 });
    }
  
    Basket();
  }
  
  function MinusItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity -= 1;
  
      if (userbasket[itemIndex].quantity === 0) {
        userbasket.splice(itemIndex, 1);
      }
    }
  
    Basket();
  }
  
  function Purchase() {
    let total = 0;
    for (let i = 0; i < userbasket.length; i++) {
      const { name, quantity } = userbasket[i];
      const product = products.find((p) => p.name === name);
      if (product) {
        total += product.price * quantity;
      }
    }
  
    document.getElementById("total").innerHTML = total;
    Clear();
  }
  
  function Clear() {
    userbasket = [];
  }
  
  function Basket() {
    const basketDiv = document.getElementById("basket");
    const basketHtml = userbasket
      .map(
        ({ name, quantity }) => `
      <h1>${name} - ${quantity}</h1>
    `
      )
      .join("");
    basketDiv.innerHTML = basketHtml;
  }