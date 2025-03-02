import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  
  // Преобразуем значения в числа и добавляем защиту от undefined
  const subtotal = Number(getCartAmount()) || 0;
  const shippingFee = Number(delivery_fee) || 0;
  const total = subtotal + shippingFee;

  return (
    <div className="w-full p-4 border rounded-lg shadow-md bg-white">
      <div className="text-2xl">
        <Title text1="Cart" text2="TOTALS" />
      </div>

      <div className="flex flex-col gap-3 mt-4 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {subtotal.toFixed(2)}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {shippingFee.toFixed(2)}
          </p>
        </div>
        <hr />
        <div className="flex justify-between font-bold text-lg">
          <p>Total</p>
          <p>
            {currency} {total.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
