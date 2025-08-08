import React from "react";
import BgImg2 from "../assets/bg-slate.png";
import bottle from '../assets/black.png'
const Hero = () => {
  const BgImg = {
    backgroundImage: `url(${BgImg2})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div style={BgImg}>
      <div className="h-screen flex justify-center items-center py-16">
        {/* navbar */}
        <div className="absolute top-0 left-0 w-full px-8 py-10 flex justify-between items-center z-50">
          <h1 className="text-2xl font-semibold uppercase text-white">
            <span className="text-[#f19509]">Coders </span>Coffee.
          </h1>
          <i className="ri-menu-fill text-white text-3xl cursor-pointer"></i>
        </div>

        <div className="w-full h-screen grid grid-cols-3 items-center px-10 gap-10">
          {/* Left */}
          <div className="flex flex-col relative gap-28 px-0 ">
            <h1 className="text-[#f1dabf] ml-18 mt-32 text-7xl font-bold  leading-tight">
              Blvck <br /> Tumbler
            </h1>

            <div className="relative flex items-start">
              {/* Left Box */}
              <div className="bg-[#212730]  w-[250px] h-[200px] px-4 py-4 -ml-7 z-0"></div>

              {/* Right Content (overflowing visually) */}
              <div className="absolute px-10  overflow-visible left-[10px] py-6 pl-6">
                <h2 className="text-[#f1dabf] text-xl font-medium">
                  Black Lifestyle Lovers,
                </h2>
                <p className="text-[#5E5C5B] text max-w-md mt-2 leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur, cumque eos neque dolorem architecto deserunt quis voluptatibus in quisquam quia ducimus
                </p>
              </div>
            </div>

          </div>

          {/* Center */}
          <div className="flex justify-center">
            <div className="w-[400px] h-[400px] mb-48 ml-10 z-10">
              <img src={bottle} alt="" className="drop-shadow-[40px_20px_25px_#0f1115]" />
            </div>
          </div>

          {/* Right */}
          <div className=" flex flex-col items-end -mt-[30vw] mr-44 gap-4">
            <div className="">
              <h3 className="absolute font-sans -top-10 left-[45%] text-[190px] font-extrabold  text-[#1A1F25]  leading-none z-1 ">
                Blvck <br /> Tumbler
              </h3>
            </div>
            <div className="relative flex items-start -mr-52 mt-[880px]">
              {/* Left Box */}
              <div className="bg-[#212730] w-[250px] h-[220px] px-4 py-4 z-0"></div>

              {/* Right Content */}
              <div className="absolute top-6  -left-48 z-0">
                <h2 className="text-[#f1dabf] text-xl font-medium">
                  Black Lifestyle Lovers,
                </h2>
                <p className="text-[#5E5C5B] mt-2 leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur,
                  cumque eos neque dolorem architecto deserunt quis voluptatibus in quisquam quia ducimus
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
