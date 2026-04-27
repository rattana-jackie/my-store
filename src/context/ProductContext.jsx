import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const ProductContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("");
  const [showSearch, setShowSearch] = useState("hidden");
  const [search, setSearch] = useState("");
  const [showForget, setShowForget] = useState(false);

  const value = {
    data,
    filter,
    setFilter,
    sort,
    setSort,
    showSearch,
    setShowSearch,
    search,
    setSearch,
    isLoading,
    setIsLoading,
    showForget,
    setShowForget,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios("https://fakestoreapi.com/products");

        if (sort === "latest") {
          setData(data);
        }
        if (sort === "low to hight") {
          const filterProduct = data
            .sort((a, b) => a.price - b.price)
            .filter((i) => {
              return i;
            });
          setData(filterProduct);
        }
        if (sort === "hight to low") {
          const filterProduct = data
            .sort((a, b) => b.price - a.price)
            .filter((i) => {
              return i;
            });
          setData(filterProduct);
        }
        if (filter === "all") {
          setData(data);
        }
        if (filter && filter != "all") {
          const filterProduct = data.filter((i) => {
            return i.category === filter;
          });

          setData(filterProduct);
        }
        if (search) {
          const filterProduct = data.filter((i) => {
            return (
              i.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) ||
              i.category
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            );
          });
          setData(filterProduct);
        }

        // console.log(data);
      } catch (err) {
        setError(err.status);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filter, sort, search]);

  // use param product detail

  if (error)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-2xl md:text-6xl text-red-700 font-extrabold">
          {error}
        </h1>
      </div>
    );
  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <button className="bg-orange-600 p-6 text-white">
          <i className="fa-solid fa-spinner text-2xl md:text-6xl animate-spin"></i>
          <span className="ml-3 text-2xl md:text-6xl">Loading...</span>
        </button>
      </div>
    );
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default ProductContext;
