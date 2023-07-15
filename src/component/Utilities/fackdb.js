//Use local storage to manage card data

const addToDb = (id) => {
    let shoppingCard = getShoppingCart();
    // get the shopping Card
    const quantity = shoppingCard[id];
    if (!quantity) {
      shoppingCard[id] = 1;
    } else {
      const newQuentity = quantity + 1;
      shoppingCard[id] = newQuentity;
    }
    localStorage.setItem("shopping-card", JSON.stringify(shoppingCard));
  };
  const removeToDb = (id) => {
    const shoppingCard = getShoppingCart();
  
    if (id in shoppingCard) {
      delete shoppingCard[id];
      localStorage.setItem("shopping-card", JSON.stringify(shoppingCard));
    }
  };
  const getShoppingCart = () => {
    let shoppingCard = {};
    const storedCard = localStorage.getItem("shopping-card");
    if (storedCard) {
      shoppingCard = JSON.parse(storedCard);
    }
    return shoppingCard;
  };
  const deletShoppingCart = () => {
    localStorage.removeItem("shopping-card");
  };
  export { addToDb, removeToDb, getShoppingCart, deletShoppingCart };
  