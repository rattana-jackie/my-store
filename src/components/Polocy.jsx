import { useState } from "react";

const Polocy = () => {
  const [val, setVal] = useState("");

  return (
    <div className="flex flex-col items-center text-slate-700 mt-25">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-between text-center mb-25 w-full">
        <div>
          <h2 className="text-5xl">
            <i className="fa-solid fa-arrows-rotate"></i>
          </h2>
          <h3 className="font-bold mt-4">Easy Exchange Policy</h3>
          <p className="text-slate-400">We Offer hassle free exchange policy</p>
        </div>
        <div>
          <h2 className="text-5xl">
            <i className="fa-regular fa-circle-check"></i>
          </h2>
          <h3 className="font-bold mt-4">7Days Return Policy</h3>
          <p className="text-slate-400">We provide 24/7 customer support</p>
        </div>
        <div>
          <h2 className="text-5xl">
            <i className="fa-solid fa-headset"></i>
          </h2>
          <h3 className="font-bold mt-4">Best customer support</h3>
          <p className="text-slate-400">We Offer hassle free exchange policy</p>
        </div>
      </div>
      <div className="w-full text-center text-slate-700 flex flex-col gap-5 items-center">
        <h2 className="text-4xl font-bold">Subscribe now & get 20% off</h2>
        <p className="text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          architecto.
        </p>
        <div className="w-full xl:w-1/2 h-14 flex-col md:flex-row">
          <input
            type="email"
            className="w-full md:w-[80%] h-full border p-3 text-xl outline-0"
            placeholder="Enter email..."
            onChange={(e) => setVal(e.target.value)}
            value={val}
          />
          <button
            className="bg-black cursor-pointer text-white p-3 h-full"
            onClick={() => setVal("")}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Polocy;
