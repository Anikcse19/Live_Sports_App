import { FaPlusCircle } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

const Header = () => {
  return (
    <div className="fixed  top-0 z-[1000] w-full h-16 bg-yellow-400 flex items-center">
      <div className="w-full  px-2 flex items-center justify-between">
        {/* logo */}
        <div>
          <img
            className="w-[100px] object-cover"
            src="/images/velki-logo.webp"
            alt=""
          />
        </div>
        {/*sign up and login */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-[#8b6b05] text-white px-3 py-1 rounded-md text-lg  font-bold">
            <FaPlusCircle />
            <p>Sign Up</p>
          </div>
          <div className="flex items-center gap-1 bg-[#e20000] text-white px-3 py-1 rounded-md text-lg font-bold">
            <IoMdLogIn />
            <div>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
