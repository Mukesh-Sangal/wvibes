import React from "react";
import Image from "next/image";

interface LetsBuildData {
  field_lets_build_head: string;
  field_subhead: string;
}

interface LetsBuildProps {
  data: LetsBuildData[];
}

const LetsBuild: React.FC<LetsBuildProps> = ({ data }) => {
  return (
    <div
      className="relative w-full flex items-center justify-center bg-cover bg-no-repeat"
      // style={{ backgroundImage: `url('/letsbuild.png')` }}
    >
      <Image
        className="2xl:h-[60vh] xl:h-[65vh] h-[35vh] w-full object-cover flex items-center justify-center "
        src="/letsbuild.png"
        width="1920"
        height="1080"
        unoptimized
        alt="lets build"
      />
      <div className="image-bg back">
        <div className="container flex flex-wrap spacing gap-60 h-full">
          <div className="flex items-center justify-between">
            <div className="heading lg:w-[55%] w-full xl:w-1/3 2xl:w-[41%]">
              <header className="font-bold xl:text-4xl lg:w-auto w-[80%] md:text-2xl text-1xl text-white">
                {data[0].field_lets_build_head}
              </header>
            </div>
            <div className="titles grid grid-cols-2 content-between md:gap-y-8 md:gap-x-12 gap-y-8 gap-x-3 lg:w-auto w-[100%]">
              {data.map((item, index) => (
                <div
                  className="font-medium lg:text-2xl md:text-1xl text-lg items-start  text-white "
                  key={index}
                >
                  {item.field_subhead}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsBuild;