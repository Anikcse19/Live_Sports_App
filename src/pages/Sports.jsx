import { IoFootballOutline, IoMicOutline, IoTennisball } from "react-icons/io5";
import Layout from "../components/Layout/Layout";
import { IoSearch } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { HiMiniArrowsUpDown, HiMiniTrophy } from "react-icons/hi2";
import { BiSolidCricketBall } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMiniChevronDoubleUp } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";
import { CiStar } from "react-icons/ci";
import { HiOutlineChevronRight } from "react-icons/hi2";

import { useState } from "react";

const Sports = () => {
  const [currentNav, setcurrentNav] = useState("Cricket");
  const [openSorting, setOpenSorting] = useState({
    state: false,
    value: ["by Competition", "by Time", "by Matched"],
  });
  const [openMatchDetails, setOpenMatchDetails] = useState(false);
  return (
    <Layout>
      {/* floating text */}
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
      {/* two navs */}
      <div className="flex flex-col">
        {/* 1st one */}
        <div className="w-full  bg-black text-gray-400 text-lg font-bold flex items-center justify-between">
          <div className="flex items-center  gap-2  bg-slate-800 py-2 px-3">
            <div className="bg-yellow-400 w-8 h-3 rounded-2xl mt-1"></div>
            <p>Parlay</p>
          </div>
          <div className="text-white border-b-4 border-white">In Play</div>
          <div className="">Today</div>
          <div className="">Tomorrow</div>
          <div className="">
            <IoIosStarOutline className="text-2xl" />
          </div>
          <div className="">
            <IoSearch className="text-2xl" />
          </div>
        </div>
        {/* 2nd one */}
        <div className="w-full h-12 bg-[#333333] flex items-center px-3">
          <div className="flex items-center gap-x-3">
            {navs.map((nav) => (
              <div
                onClick={() => {
                  setcurrentNav(nav.title);
                }}
                className={`flex items-center gap-1 px-2 py-1.5 rounded-full cursor-pointer ${
                  currentNav === nav.title
                    ? "text-black font-bold bg-yellow-400"
                    : "text-white font-bold"
                }`}
                key={nav.id}
              >
                <nav.icon className="text-2xl" />
                <p>{nav?.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* sorted */}
      <div className="m-3 flex ">
        <div
          className={`bg-white w-[140px] px-5 py-1 rounded-md text-sm relative flex flex-col gap-y-1 ${
            openSorting.state ? "h-fit" : "h-8"
          } overflow-hidden content-center`}
        >
          <HiMiniArrowsUpDown className="absolute top-2  left-1 z-40" />
          {openSorting?.value.map((v) => (
            <p
              onClick={() => {
                const newArr = [v, openSorting.value.filter((f) => f !== v)];
                setOpenSorting({
                  state: false,
                  value: newArr,
                });
              }}
              className="cursor-pointer"
              key={v}
            >
              {v}
            </p>
          ))}
          <FaCaretDown
            onClick={() =>
              setOpenSorting({
                state: !openSorting.state,
                value: ["by Competition", "by Time", "by Matched"],
              })
            }
            className={`absolute top-2  right-1 z-40 cursor-pointer ${
              openSorting.state && "rotate-180"
            }`}
          />
        </div>
      </div>
      {/* games */}
      <div className="flex flex-col gap-4 px-4 bg-[#DAE5EA] mt-3 py-3 min-h-screen">
        {/* cricket */}
        <div className="">
          {/* heading */}
          <div className="flex items-center justify-between my-5">
            <div className="px-3 font-bold text-xl border-l-4 border-black rounded">
              Cricket
            </div>
            <div className="bg-white px-3 py-0.5 text-sm text-gray-500 flex items-center gap-x-2 rounded-md">
              <p>All</p>
              <HiMiniChevronDoubleUp />
            </div>
          </div>
          {/* body */}
          <div className="flex flex-col gap-y-4">
            {/* match 1 */}
            <div
              className={`${
                openMatchDetails ? "h-fit" : "h-12"
              }  transition-all bg-white  rounded-2xl   duration-300 ease-in overflow-hidden`}
            >
              {/* series type */}
              <div
                onClick={() => setOpenMatchDetails((prev) => !prev)}
                className="bg-black text-yellow-400 p-3 rounded-tl-2xl cursor-pointer font-bold text-base flex items-center justify-between"
              >
                <div className="flex items-center gap-x-2">
                  <p className="bg-yellow-300 text-black px-4  text-center rounded-2xl">
                    1
                  </p>
                  <p>South Africa T20 Challenge</p>
                </div>
                <div>
                  <HiChevronDown className="text-2xl" />
                </div>
              </div>
              {/* match title */}
              <div className="py-2 px-3 flex items-center text-lg justify-between">
                <div className="flex items-center gap-x-2">
                  <CiStar />
                  <p>Lion-Titans</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <HiOutlineChevronRight />
                </div>
              </div>
              <div className="p-3 flex flex-col gap-y-0.5">
                <div className="bg-yellow-400 py-1 px-3 rounded-tl-xl rounded-tr-xl flex items-center justify-between">
                  <div className="flex items-center gap-x-3 w-[70%]  border-r-2 border-black">
                    <p>Match Odds</p>
                    <p className="text-xs">Mathced 2113131</p>
                  </div>
                  <div className="w-[15%] text-center">Back</div>
                  <div className="w-[15%] text-center">Lay</div>
                </div>
                <div className="bg-gray-200  px-3  flex items-center justify-between gap-x-1">
                  <div className="flex items-center gap-x-3 w-[70%]">
                    <p className="text-xl font-bold text-slate-800">Lions</p>
                  </div>
                  <div className="w-[15%] text-center bg-blue-300 rounded-md py-0.5 flex flex-col items-center">
                    <p className="text-xl font-bold">1.27</p>
                    <p className="text-xs">121</p>
                  </div>
                  <div className="w-[15%] text-center bg-red-300 rounded-md py-0.5 flex flex-col items-center">
                    <p className="text-xl font-bold">1.27</p>
                    <p className="text-xs">121</p>
                  </div>
                </div>
                <div className="bg-gray-200  px-3  flex items-center justify-between gap-x-1">
                  <div className="flex items-center gap-x-3 w-[70%]">
                    <p className="text-xl font-bold text-slate-800">Titans</p>
                  </div>
                  <div className="w-[15%] text-center bg-blue-300 rounded-md py-0.5 flex flex-col items-center">
                    <p className="text-xl font-bold">1.27</p>
                    <p className="text-xs">121</p>
                  </div>
                  <div className="w-[15%] text-center bg-red-300 rounded-md py-0.5 flex flex-col items-center">
                    <p className="text-xl font-bold">1.27</p>
                    <p className="text-xs">121</p>
                  </div>
                </div>
              </div>
            </div>
            {/* match 2 */}
            <div
              className={`${
                openMatchDetails ? "h-fit" : "h-12"
              }  transition-all bg-white  rounded-2xl   duration-300 ease-in overflow-hidden`}
            >
              {/* series type */}
              <div
                onClick={() => setOpenMatchDetails((prev) => !prev)}
                className="bg-black text-yellow-400 p-3 rounded-tl-2xl cursor-pointer font-bold text-base flex items-center justify-between"
              >
                <div className="flex items-center gap-x-2">
                  <p className="bg-yellow-300 text-black px-4  text-center rounded-2xl">
                    1
                  </p>
                  <p>South Africa T20 Challenge</p>
                </div>
                <div>
                  <HiChevronDown className="text-2xl" />
                </div>
              </div>
              {/* match title */}
              <div className="py-2 px-3 flex items-center text-lg justify-between">
                <div className="flex items-center gap-x-2">
                  <CiStar />
                  <p>Lion-Titans</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <HiOutlineChevronRight />
                </div>
              </div>
              <div className="p-3 flex flex-col gap-y-0.5">
                <div className="bg-yellow-400 py-1 px-3 rounded-tl-xl rounded-tr-xl flex items-center justify-between">
                  <div className="flex items-center gap-x-3 w-[70%]  border-r-2 border-black">
                    <p>Match Odds</p>
                    <p className="text-xs">Mathced 2113131</p>
                  </div>
                  <div className="w-[15%] text-center">Back</div>
                  <div className="w-[15%] text-center">Lay</div>
                </div>
                <div className="bg-gray-200  px-3  flex items-center justify-between gap-x-1">
                  <div className="flex items-center gap-x-3 w-[70%]">
                    <p className="text-xl font-bold text-slate-800">Lions</p>
                  </div>
                  <div className="w-[15%] text-center bg-blue-300 rounded-md py-0.5 flex flex-col items-center">
                    <p className="text-xl font-bold">1.27</p>
                    <p className="text-xs">121</p>
                  </div>
                  <div className="w-[15%] text-center bg-red-300 rounded-md py-0.5 flex flex-col items-center">
                    <p className="text-xl font-bold">1.27</p>
                    <p className="text-xs">121</p>
                  </div>
                </div>
                <div className="bg-gray-200  px-3  flex items-center justify-between gap-x-1">
                  <div className="flex items-center gap-x-3 w-[70%]">
                    <p className="text-xl font-bold text-slate-800">Titans</p>
                  </div>
                  <div className="w-[15%] text-center bg-blue-300 rounded-md py-0.5 flex flex-col items-center">
                    <p className="text-xl font-bold">1.27</p>
                    <p className="text-xs">121</p>
                  </div>
                  <div className="w-[15%] text-center bg-red-300 rounded-md py-0.5 flex flex-col items-center">
                    <p className="text-xl font-bold">1.27</p>
                    <p className="text-xs">121</p>
                  </div>
                </div>
              </div>
            </div>
            {/* match 3 */}
            <div
              className={`${
                openMatchDetails ? "h-fit" : "h-12"
              }  transition-all bg-white  rounded-2xl   duration-300 ease-in overflow-hidden`}
            >
              {/* series type */}
              <div
                onClick={() => setOpenMatchDetails((prev) => !prev)}
                className="bg-black text-yellow-400 p-3 rounded-tl-2xl cursor-pointer font-bold text-base flex items-center justify-between"
              >
                <div className="flex items-center gap-x-2">
                  <p className="bg-yellow-300 text-black px-4  text-center rounded-2xl">
                    1
                  </p>
                  <p>South Africa T20 Challenge</p>
                </div>
                <div>
                  <HiChevronDown className="text-2xl" />
                </div>
              </div>
              {/* match title */}
              <div className="py-2 px-3 flex items-center text-lg justify-between">
                <div className="flex items-center gap-x-2">
                  <CiStar />
                  <p>Lion-Titans</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <HiOutlineChevronRight />
                </div>
              </div>
              <div className="p-3 flex flex-col gap-y-0.5">
                <div className="bg-yellow-400 py-1 px-3 rounded-tl-xl rounded-tr-xl flex items-center justify-between">
                  <div className="flex items-center gap-x-3 w-[70%]  border-r-2 border-black">
                    <p>Match Odds</p>
                    <p className="text-xs">Mathced 2113131</p>
                  </div>
                  <div className="w-[15%] text-center">Back</div>
                  <div className="w-[15%] text-center">Lay</div>
                </div>
                <div className="bg-gray-200  px-3  flex items-center justify-between gap-x-1">
                  <div className="flex items-center gap-x-3 w-[70%]">
                    <p className="text-xl font-bold text-slate-800">Lions</p>
                  </div>
                  <div className="w-[15%] text-center bg-blue-300 rounded-md py-0.5 flex flex-col items-center">
                    <p className="text-xl font-bold">1.27</p>
                    <p className="text-xs">121</p>
                  </div>
                  <div className="w-[15%] text-center bg-red-300 rounded-md py-0.5 flex flex-col items-center">
                    <p className="text-xl font-bold">1.27</p>
                    <p className="text-xs">121</p>
                  </div>
                </div>
                <div className="bg-gray-200  px-3  flex items-center justify-between gap-x-1">
                  <div className="flex items-center gap-x-3 w-[70%]">
                    <p className="text-xl font-bold text-slate-800">Titans</p>
                  </div>
                  <div className="w-[15%] text-center bg-blue-300 rounded-md py-0.5 flex flex-col items-center">
                    <p className="text-xl font-bold">1.27</p>
                    <p className="text-xs">121</p>
                  </div>
                  <div className="w-[15%] text-center bg-red-300 rounded-md py-0.5 flex flex-col items-center">
                    <p className="text-xl font-bold">1.27</p>
                    <p className="text-xs">121</p>
                  </div>
                </div>
              </div>
            </div>
            {/* match 4 */}
            <div
              className={`${
                openMatchDetails ? "h-fit" : "h-12"
              }  transition-all bg-white  rounded-2xl   duration-300 ease-in overflow-hidden`}
            >
              {/* series type */}
              <div
                onClick={() => setOpenMatchDetails((prev) => !prev)}
                className="bg-black text-yellow-400 p-3 rounded-tl-2xl cursor-pointer font-bold text-base flex items-center justify-between"
              >
                <div className="flex items-center gap-x-2">
                  <p className="bg-yellow-300 text-black px-4  text-center rounded-2xl">
                    1
                  </p>
                  <p>South Africa T20 Challenge</p>
                </div>
                <div>
                  <HiChevronDown className="text-2xl" />
                </div>
              </div>
              {/* match title */}
              <div className="py-2 px-3 flex items-center text-lg justify-between">
                <div className="flex items-center gap-x-2">
                  <CiStar />
                  <p>Lion-Titans</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <HiOutlineChevronRight />
                </div>
              </div>
              <div className="p-3 flex flex-col gap-y-0.5">
                <div className="bg-yellow-400 py-1 px-3 rounded-tl-xl rounded-tr-xl flex items-center justify-between">
                  <div className="flex items-center gap-x-3 w-[70%]  border-r-2 border-black">
                    <p>Match Odds</p>
                    <p className="text-xs">Mathced 2113131</p>
                  </div>
                  <div className="w-[15%] text-center">Back</div>
                  <div className="w-[15%] text-center">Lay</div>
                </div>
                <div className="bg-gray-200  px-3  flex items-center justify-between gap-x-1">
                  <div className="flex items-center gap-x-3 w-[70%]">
                    <p className="text-xl font-bold text-slate-800">Lions</p>
                  </div>
                  <div className="w-[15%] text-center bg-blue-300 rounded-md py-0.5 flex flex-col items-center">
                    <p className="text-xl font-bold">1.27</p>
                    <p className="text-xs">121</p>
                  </div>
                  <div className="w-[15%] text-center bg-red-300 rounded-md py-0.5 flex flex-col items-center">
                    <p className="text-xl font-bold">1.27</p>
                    <p className="text-xs">121</p>
                  </div>
                </div>
                <div className="bg-gray-200  px-3  flex items-center justify-between gap-x-1">
                  <div className="flex items-center gap-x-3 w-[70%]">
                    <p className="text-xl font-bold text-slate-800">Titans</p>
                  </div>
                  <div className="w-[15%] text-center bg-blue-300 rounded-md py-0.5 flex flex-col items-center">
                    <p className="text-xl font-bold">1.27</p>
                    <p className="text-xs">121</p>
                  </div>
                  <div className="w-[15%] text-center bg-red-300 rounded-md py-0.5 flex flex-col items-center">
                    <p className="text-xl font-bold">1.27</p>
                    <p className="text-xs">121</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sports;

const navs = [
  { id: 0, title: "ALL", icon: HiMiniTrophy },
  {
    id: 1,
    title: "Cricket",
    icon: BiSolidCricketBall,
  },
  {
    id: 2,
    title: "Football",
    icon: IoFootballOutline,
  },
  {
    id: 3,
    title: "Tennis",
    icon: IoTennisball,
  },
];
