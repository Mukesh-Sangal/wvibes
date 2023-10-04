import React from "react";
import Image from "next/image";
import Link from "next/link";
import urlExtractor from "@/utils/urlExtractor";

interface DigitalGrowDiscoverData {
  field_home_service_title: string;
  field_service_logo: string;
  field_home_service_heading: string;
  field_home_services_subheading: string;
  field_home_service_link: string;
}

interface DigitalGrowDiscoverProps {
  data: DigitalGrowDiscoverData[];
}

const DigitalGrowDiscover: React.FC<DigitalGrowDiscoverProps> = ({ data }) => {
  return (
    <div
      className="bg-cover w-full bg-"
      style={{ backgroundImage: `url('/digital.png')` }}
    >
      <div className="container spacing">
        <h1 className="xl:text-5xl lg:text-3xl text-2xl font-bold text-white text-left">
          {data[0].field_home_service_title}
        </h1>
        <div className="items-container flex justify-between flex-wrap text-center items-center">
          {data.map((item, index) => (
            <div
              className="item rounded py-7 px-3 bg-white xl:w-[30%] lg:w-[46%] w-full lg:m-4 flex flex-col items-center h-full lg:min-h-[395px] mb-4"
              key={index}
            >
              <Image
                unoptimized
                src={`http://free.lndo.site:8000/${item.field_service_logo}`}
                width={100}
                height={100}
              />
              <h1 className="font-medium text-1-xl pt-6">
                {item.field_home_service_heading}
              </h1>
              <h2 className="font-medium text-1-xl pt-4">
                {item.field_home_services_subheading}
              </h2>
            </div>
          ))}
        </div>
        <div className="text-center w-full pt-12 font-bold text-white ">
          <Link
            href={urlExtractor(data[0].field_home_service_link)[1]}
            className="px-6 py-3 border-2 rounded inline-block xl:text-2xl lg:text-1-xl text-1xl"
          >
            {urlExtractor(data[0].field_home_service_link)[0]}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalGrowDiscover;