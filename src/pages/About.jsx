import StarRating from "../components/StarRating";
import { useTitle } from "../hook/useTitle";

const About = () => {
  useTitle("My Store | About us");
  return (
    <div className="flex flex-col w-[80vw] m-auto mt-14 md:mt-25">
      <div className="fle-col xl:gap-0 xl:flex p-5 xl:p-0 justify-center items-center bg-slate-400">
        <div className="xl:px-22 xl:w-1/2 text-center xl:text-left mb-3">
          <h2 className="text-xl font-medium">Welcome to our store</h2>
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae facere quae aperiam debitis ipsam perspiciatis sunt
            reiciendis nobis vero unde?
          </p>
        </div>
        <div className="xl:w-1/2 h-full">
          <img
            src="https://t4.ftcdn.net/jpg/06/03/96/65/360_F_603966594_borJ2q9v4z1mruByf20Yo3bf4AmkqmxN.jpg"
            alt="about us"
            className="w-full h-125 object-cover rounded-xl xl:rounded-none"
          />
        </div>
      </div>
      <div className="grid grid-rows-3 xl:grid-cols-3">
        <div className=" bg-sky-200 py-23">
          <p className="text-5xl text-center xl:text-left xl:text-9xl uppercase font-bold text-sky-300">
            About us
          </p>
        </div>
        <div className="bg-slate-200">
          <p className="text-[15px] p-11 text-center xl:text-left xl:text-[10px] xl:p-23">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            ullam. Cupiditate unde illo explicabo sapiente assumenda dignissimos
            aliquam accusamus autem id voluptatum molestias, maiores porro,
            optio vel deserunt cumque veritatis non impedit ex. Itaque placeat
            quasi recusandae incidunt! Suscipit reprehenderit neque hic a fuga
            eos pariatur odio quae quam, unde reiciendis corporis totam fugiat
            quaerat accusamus labore, quos blanditiis et. Accusamus, expedita,
            soluta, maxime ab maiores consectetur debitis eos esse veritatis
            perferendis dolorum quod corporis quo tenetur iure nesciunt.
            Repellendus delectus esse quaerat voluptate. Commodi unde, modi sit
            illo, perferendis tempore pariatur corporis inventore dolorem harum,
            fugit dolore totam. Odio.
          </p>
        </div>
        <div className="bg-sky-300 flex justify-center items-center overflow-hidden h-full">
          <p className="text-5xl text-center xl:text-left xl:text-9xl uppercase font-bold text-sky-200">
            About us
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
