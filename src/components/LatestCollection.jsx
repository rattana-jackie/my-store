import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/ProductContext";
import StarRating from "./StarRating";

const LatestCollection = () => {
  const { data } = useGlobalContext();
  return (
    <div className="mt-25">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl uppercase">
          <span className="text-slate-400">Latest</span> Collection
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          iusto
        </p>
      </div>
      <section className="mt-25 grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {data.slice(0, 8).map(({ id, image, title, price, rating }) => (
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
  );
};

export default LatestCollection;
