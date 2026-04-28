import { useRef } from "react";
import { useGlobalContext } from "../context/ProductContext";

const CreateAcc = () => {
  const { showCreate, setShowCreate } = useGlobalContext();
  const mail = useRef(null);
  const username = useRef(null);
  const pass = useRef(null);
  const handleClose = (e) => {
    e.target.classList.contains("create-container")
      ? setShowCreate(false)
      : null;
  };
  const handleCreate = () => {
    if (mail.current.value && username.current.value && pass.current.value) {
      mail.current.value = "";
      username.current.value = "";
      pass.current.value = "";
      mail.current.focus();
      setShowCreate(false);
    } else {
      alert("Provide information");
      mail.current.focus();
    }
  };
  return (
    <div
      className="create-container fixed top-0 left-0 z-50 w-screen h-screen bg-[rgba(0,0,0,0.54)]"
      onClick={(e) => handleClose(e)}
    >
      <div className="mt-25 md:mt-52 bg-white w-[90vw] md:w-[50vw] m-auto border flex flex-col p-4 gap-5">
        <h2 className="text-2xl">Provide this infomation</h2>
        <input
          type="email"
          placeholder="Your email address"
          autoFocus
          className="p-3 border rounded-sm outline-0"
          ref={mail}
        />
        <input
          type="text"
          placeholder="username"
          className="p-3 border rounded-sm outline-0"
          ref={username}
        />
        <input
          type="password"
          placeholder="Your password"
          className="p-3 border rounded-sm outline-0"
          ref={pass}
        />
        <button
          className="bg-green-600 py-5 cursor-pointer text-white rounded-sm"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateAcc;
