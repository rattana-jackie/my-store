import { useGlobalContext } from "../context/ProductContext";

const ForgetPassword = () => {
  const { showForget, setShowForget } = useGlobalContext();
  const handleClose = (e) => {
    e.target.classList.contains("forget-container")
      ? setShowForget(false)
      : null;
    //console.log(e);
  };
  return (
    <div
      className="forget-container fixed top-0 left-0 z-50 w-screen h-screen bg-[rgba(0,0,0,0.54)]"
      onClick={(e) => handleClose(e)}
    >
      <div className="mt-25 md:mt-52 bg-white w-[50vw] m-auto border flex flex-col p-4 gap-5">
        <h2 className="text-2xl">Provide this infomation</h2>
        <input
          type="email"
          placeholder="Your email address"
          autoFocus
          className="p-3 border rounded-sm outline-0"
        />
        <input
          type="password"
          placeholder="Your old password"
          className="p-3 border rounded-sm outline-0"
        />
        <input
          type="password"
          placeholder="Your new password"
          className="p-3 border rounded-sm outline-0"
        />
        <button className="bg-green-600 py-5 cursor-pointer text-white rounded-sm">
          Verify
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
