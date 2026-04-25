import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProductDetail from "../hook/useProductDetail";
import StarRating from "./StarRating";
import { useTitle } from "../hook/useTitle";

const ProductDetail = () => {
  const { product } = useProductDetail();
  const [cartVal, setCartVal] = useState(0);
  useTitle(`My Store | ${product.title}`);

  return (
    <div className="md:w-[80vw] m-auto">
      <div className="bg-slate-100 p-3 flex flex-wrap">
        <Link to="/">
          Home<i className="fas fa-chevron-right"></i>
        </Link>
        <Link to="/collection">
          Collections<i className="fas fa-chevron-right"></i>
        </Link>
        <p>{product.title}</p>
      </div>
      <div className="px-10 lg:px-0 py-10 grid grid-cols-1 xl:grid-cols-2 gap-7">
        <article>
          <img
            src={product.image}
            alt="product images"
            className="w-full h-125 object-contain border rounded-md p-3"
          />
        </article>
        <article className="flex flex-col gap-4">
          <Link to="/collection">
            <button className="category">{product.category}</button>
          </Link>

          <h3 className="font-bold text-3xl">{product.title}</h3>
          <div className="flex gap-3">
            <StarRating star={product.rating?.rate} />
            <span>({product.rating?.count})</span>
          </div>

          <p className="text-red-700 font-bold text-2xl">{`$${product.price}`}</p>
          <div className="flex w-48 border justify-evenly font-bold">
            <button
              className="cursor-pointer"
              onClick={() => (cartVal > 0 ? setCartVal(cartVal - 1) : null)}
            >
              <i className="fas fa-minus"></i>
            </button>
            <p className="p-3">{cartVal}</p>
            <button
              className="cursor-pointer"
              onClick={() => setCartVal(cartVal + 1)}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <button className="w-48 p-3 bg-black text-xl text-white cursor-pointer">
            Add to Cart
          </button>
          <button className="w-48 p-3 bg-orange-600 text-xl text-white cursor-pointer">
            Pay Now
          </button>
          <hr />
          <p>{product.description}</p>
        </article>
      </div>
      <div className="h-135 w-full"></div>
    </div>
  );
};

export default ProductDetail;
