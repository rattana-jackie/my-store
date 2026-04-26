import { useRef, useState } from "react";
import { useTitle } from "../hook/useTitle";

const Contact = () => {
  useTitle("My Store | Contact us");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [mail, setMail] = useState("");
  const [desc, setDesc] = useState("");
  // const [alert,setAlert]
  const firstInput = useRef(null);
  const handlSubmit = () => {
    if (first && last && mail && desc) {
      setFirst("");
      setLast("");
      setMail("");
      setDesc("");
      firstInput.current.focus();
    } else {
      alert("Enter Infomation befor submit");
    }
  };
  return (
    <div className="w-[80vw] m-auto grid grid-rows-2 xl:grid-cols-2 mt-25 gap-7 xl:gap-7">
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="contact photo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" flex flex-col">
        <h1 className="text-2xl">Contact Us</h1>
        <form className="flex flex-col gap-5">
          <div>
            <p>
              Name<span className="text-red-600">*</span>
            </p>
            <div className="flex gap-4">
              <div className="w-full">
                <input
                  type="text"
                  name="first_name"
                  placeholder="first name"
                  className="border p-2 outline-0 rounded-sm w-full"
                  autoFocus
                  required
                  ref={firstInput}
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                />
                <br />
                <label htmlFor="first_name" className="text-slate-400">
                  First
                </label>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="last_name"
                  placeholder="last name"
                  className="border p-2 outline-0 rounded-sm w-full"
                  required
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                />
                <br />
                <label htmlFor="last_name" className="text-slate-400">
                  Last
                </label>
              </div>
            </div>
          </div>
          <div>
            <p>
              Email
              <span className="text-red-600">*</span>
            </p>
            <input
              type="email"
              name="mail"
              placeholder="email"
              className="border p-2 outline-0 rounded-sm w-full"
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div>
            <p>
              Leave us a few word<span className="text-red-600">*</span>
            </p>
            <textarea
              name="describe"
              className="border p-2 outline-0 rounded-sm w-full"
              required
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
        </form>
        <button
          type="submit"
          className=" w-32 cursor-pointer bg-orange-600 text-white py-3 rounded-md uppercase "
          onClick={handlSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
