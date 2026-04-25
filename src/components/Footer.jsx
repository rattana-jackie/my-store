const Footer = () => {
  const date = new Date();
  return (
    <div className="h-72 bg-black mt-25 text-white flex justify-center items-center p-10">
      <p className="text-xl md:text-2xl">
        Copyright{date.getFullYear()}@gmail.com-All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
