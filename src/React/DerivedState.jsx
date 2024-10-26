import React, { useState, useEffect } from "react";

function DerivedState({ price, discount }) {
  // Derived state, calculated from props
  const [finalPrice, setFinalPrice] = useState(
    () => price - (price * discount) / 100
  );

  useEffect(() => {
    // When the props change, recalculate the derived state
    setFinalPrice(price - (price * discount) / 100);
  }, [price, discount]); // Recalculate only when 'price' or 'discount' changes

  const handleUserInput = (e) => {
    setFinalPrice(Number(e.target.value)); // Allow user to update the price
  };

  return (
    <div>
      <p>Final Price: {finalPrice}</p>
      <input type="number" value={finalPrice} onChange={handleUserInput} />
    </div>
  );
}
export default DerivedState;
