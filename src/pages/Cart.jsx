import React from "react";
import { useGlobalContext } from "../context/ProductContext";

const Cart = () => {
  const { cartNum, setCartNum, cartData, setCartData } = useGlobalContext();
  let total = cartData.reduce((sum, item) => sum + item.price * item.qty, 0);
  total = Number(Number(total.toFixed(2)));
  return (
    <div className="w-[80%] md:w-[80vw] m-auto flex flex-col items-center mt-11 gap-5">
      <h1 className="text-3xl font-bold">Cart</h1>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quanity</th>
          </tr>
          {cartData.map((i) => (
            <tr key={i.id} className="">
              <td className="w-20 h-24">
                <img
                  src={i.image}
                  alt="product-image"
                  className="w-full h-full"
                />
              </td>
              <td>
                <h3>{i.title}</h3>
              </td>
              <td>
                <p>${i.price}</p>
              </td>
              <td>
                <p>{i.qty}</p>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={4}>
              Total Price :
              <span className="text-red-600 font-bold"> ${total}</span>
            </td>
          </tr>
        </tbody>
      </table>
      {total > 0 ? (
        <button className="w-48 p-3 bg-orange-600 text-xl text-white cursor-pointer">
          Pay Now
        </button>
      ) : null}
      <div className="w-full bg-amber-200 flex justify-between"></div>
    </div>
  );
};

export default Cart;
