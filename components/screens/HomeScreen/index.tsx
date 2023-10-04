"use client";
import React, { FC, useState, useEffect } from "react";
import getPageData from "@/utils/ApiMapWithType";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import BannerLayout from "./banner";
import DrupalProjects from "./drupalproject";

const HomePage: FC = () => {
  const [data, setData] = useState<any[]>([]);
  const backend_url = "http://free.lndo.site";
  useEffect(() => {
    const fetchData = async () => {
      const apiPageUrl = `${backend_url}/node_title/home%20page`;
      const apis = await getPageData(apiPageUrl);
      setData(apis);
    };

    fetchData();
  }, []);
  return (
    <div>
      {data?.length ? (
        data.map((item, index) => {
          // Assuming each sub-array has only one object
          const dataToShow = item[0]?.type;
          switch (dataToShow) {
            case "Home Page Banner":
              return <BannerLayout data={item} />;
            case "Home Portfolio":
              return <DrupalProjects data={item} />;
            default:
              return null; // Render nothing for unknown data-to-show values
          }
        })
      ) : (
        <div className="flex items-center space-x-4 h-[70vh] ">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      )}
      {JSON.stringify(data)}
    </div>
  );
};

export default HomePage;
