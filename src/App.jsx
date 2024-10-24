import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import FloatingNav from "./components/ui/FloatingNav";
import HomeBanner from "./components/ui/HomeBanner";
import { IoMicOutline } from "react-icons/io5";

function App() {
  return (
    <div>
      <Header />
      <div className="mt-16">
        <HomeBanner />
      </div>
      <div className="flex items-center bg-white gap-3">
        <div className="px-3 border-r border-slate-700">
          <IoMicOutline className="text-xl" />
        </div>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="scrolling-text inline-block font-bold text-sm  py-0.5">
            {/* Your continuously scrolling text */}
            Bangladesh v South Africa46 Over Run SA 155-400/155-300
            RATE-BETS-WILL-BE-VOIDED-DUE-TO-WRONG-RATE (09:34:48 TO 09:35:06IST)
          </div>
        </div>
      </div>
      <FloatingNav />
      <Footer />
    </div>
  );
}

export default App;