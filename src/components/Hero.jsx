import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-125 bg-amber-300 mt-3 flex justify-between items-center border relative">
      <div className="absolute top-1/2 left-1/2 -translate-1/2 md:translate-0 md:static md:h-full md:w-1/2 md:flex md:flex-col gap-4 justify-center items-center md:bg-slate-200 text-center">
        <p className="uppercase text-white text-2xl md:text-inherit">
          our bestsellers
        </p>
        <h1 className="text-4xl text-white md:text-inherit md:text-5xl">
          Latest Arrivals
        </h1>
        <Link to="/collection">
          <button className="uppercase cursor-pointer bg-slate-50 py-2 px-5 hover:bg-slate-700 hover:text-white">
            shop now
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2 h-full">
        <img
          src="https://mediaslide-europe.storage.googleapis.com/curvemodels/pictures/942/6335/large-1772472388-0591716601880c8649ea924b671c96f4.jpg"
          alt="model"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Hero;
