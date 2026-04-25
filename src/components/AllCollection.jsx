import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/ProductContext";
import StarRating from "./StarRating";
import { useTitle } from "../hook/useTitle";

const AllCollection = () => {
  const { filter, setFilter, data, sort, setSort, showSearch, setShowSearch } =
    useGlobalContext();
  useTitle(`My Store | All Collection`);

  return (
    <div className="flex flex-col justify-between mt-25">
      <div className="flex flex-col md:flex-row gap-3 items-center md:justify-between">
        <h3 className="uppercase text-3xl hidden md:block">filter</h3>
        <h1 className="uppercase text-3xl md:text-4xl xl:text-5xl">
          <span className="text-slate-400">All</span> Collection
        </h1>
        <div className="border outline-0 py-6 px-3 w-44">
          <select
            defaultValue="sort"
            name="sort"
            className="w-full border-0 outline-0"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="sort" disabled>
              sort items
            </option>
            <option value="latest">Latest</option>
            <option value="low to hight">low to hight</option>
            <option value="hight to low">hight to low</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-7 mt-25">
        <div className="border p-4 md:w-[50vw] xl:w-[20vw] h-40">
          <p className="uppercase font-bold">categories</p>
          <input
            type="radio"
            name="category"
            id="all"
            value="all"
            defaultChecked
            onClick={(e) => setFilter(e.target.defaultValue)}
          />
          <label className="ml-2" htmlFor="all">
            All
          </label>
          <br />
          <input
            type="radio"
            name="category"
            id="men"
            value="men's clothing"
            onClick={(e) => setFilter(e.target.defaultValue)}
          />
          <label className="ml-2" htmlFor="men">
            Men
          </label>
          <br />
          <input
            type="radio"
            name="category"
            id="women"
            value="women's clothing"
            onClick={(e) => setFilter(e.target.defaultValue)}
          />
          <label className="ml-2" htmlFor="women">
            Women
          </label>
          <br />
          <input
            type="radio"
            name="category"
            id="jewelery"
            value="jewelery"
            onClick={(e) => setFilter(e.target.defaultValue)}
          />
          <label className="ml-2" htmlFor="jewelery">
            Jewelery
          </label>
          <br />
          <input
            type="radio"
            name="category"
            id="electronics"
            value="electronics"
            onClick={(e) => setFilter(e.target.defaultValue)}
          />
          <label className="ml-2" htmlFor="electronics">
            Electronics
          </label>
        </div>

        <div className="">
          <section className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {data.map(({ id, title, price, image, rating }) => (
              <Link key={id} to={`/collection/${id}`}>
                <article className="border h-100 flex flex-col p-3 items-center justify-between text-center cursor-pointer hover:scale-[1.02] transition-all ease-in-out duration-150">
                  <div className="h-[80%]">
                    <img
                      src={image}
                      alt="prodoct-image"
                      className="h-full object-contain"
                    />
                  </div>

                  <h3>{title.substring(0, 20) + "..."}</h3>
                  <p className="text-red-600">${price}</p>
                  <StarRating star={rating.rate} />
                </article>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default AllCollection;
