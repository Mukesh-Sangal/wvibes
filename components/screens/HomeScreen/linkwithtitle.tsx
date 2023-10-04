import React from "react";
import urlExtractor from "@/utils/urlExtractor";
import Link from "next/link";

interface LinkWithTitleData {
  field_help_agencies_title: string;
  field_agencies_link: string;
}

interface LinkWithTitleProps {
  data: LinkWithTitleData[];
}

const LinkWithTitle: React.FC<LinkWithTitleProps> = ({ data }) => {
  return (
    <div className=" bg-[#dc248b]">
      <div className="flex container spacing">
        <div className="w-[52%]">
          <h1 className="font-bold 2xl:text-4xl xl:text-3xl text-1-xl  text-white items-baseline">
            {data[0].field_help_agencies_title}
          </h1>
        </div>
        <div className="w-[40%] text-end mt-16">
          <Link
            href={urlExtractor(data[0].field_agencies_link)[1]}
            className="py-3 px-3 font-medium xl:text-1-xl lg:text-1xl text-lg  border-2 rounded text-white"
          >
            {urlExtractor(data[0].field_agencies_link)[0]}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LinkWithTitle;
