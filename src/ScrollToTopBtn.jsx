import { useEffect, useState } from "react";

const ScrollToTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);
  const handleScroll = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const handleShowBtn = () => {
      window.scrollY > 100 ? setShowBtn(true) : setShowBtn(false);
    };

    window.addEventListener("scroll", handleShowBtn);

    return () => window.removeEventListener("scroll", handleShowBtn);
  }, []);

  return (
    <>
      {showBtn && (
        <button
          onClick={handleScroll}
          className="bg-green-700 w-12.5 h-12.5 rounded-full text-white text-center fixed bottom-10 right-10 active:scale-[1.04] ease-in duration-100"
        >
          <i className="fa-solid fa-angles-up"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTopBtn;
