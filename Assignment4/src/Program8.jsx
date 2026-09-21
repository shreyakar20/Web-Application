import { useState } from "react";

function Product({ name, price, onAdd }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>

      <button onClick={() => onAdd({ name, price })}>
        Add to Cart
      </button>
    </div>
  );
}

function Cart({ cart, onRemove }) {
  return (
    <div>
      <h3>Shopping Cart</h3>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} - ₹{item.price}
              <button onClick={() => onRemove(index)}>
                Remove
              </button>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

function Program8() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(index) {
    setCart(cart.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Program 8 - Shopping Cart</h2>

      <Product
        name="Laptop"
        price={50000}
        onAdd={addToCart}
      />

      <Product
        name="Mouse"
        price={500}
        onAdd={addToCart}
      />

      <Product
        name="Keyboard"
        price={1000}
        onAdd={addToCart}
      />

      <hr />

      <Cart
        cart={cart}
        onRemove={removeFromCart}
      />
    </div>
  );
}

export default Program8;