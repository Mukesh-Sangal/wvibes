import React, { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HireProps {
  title: string;
  link: string;
  list: Array<{ [key: string]: any }>;
  value: string;
}

const Hire: FC<HireProps> = (props) => {
  return (
    <div className="bg-sky-600 py-8">
      <div className="container">
        <div className="flex flex-wrap justify-between items-start">
          <div className="basis-[25%]">
            <h2 className="font-bold text-5xl leading-[1.2] text-white">
              {props.title}
            </h2>
            <p>
              <Link href="">
                <Button
                  variant="outline"
                  className="bg-[transparent] text-white my-10"
                >
                  {props.link}
                </Button>
              </Link>
            </p>
          </div>
          <div className="basis-[70%] flex flex-wrap justify-between items-center">
            {props?.list.map((el, index) => (
              <div
                className="text-3xl font-[500] my-5 basis-[45%] w-[250px] text-white"
                key={index}
              >
                {el[props.value]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
