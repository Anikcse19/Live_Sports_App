/* eslint-disable react/prop-types */
import Header from "./Header";
import LowerNav from "./LowerNav";

const Layout = ({ children }) => {
  return (
    <div className="w-[500px] mx-auto">
      <Header />
      <div className="mt-16 mb-20 pb-5 bg-blue-50 min-h-screen">{children}</div>
      <LowerNav />
    </div>
  );
};

export default Layout;
