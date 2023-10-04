"use client";
import React, { FC, useState, useEffect } from "react";
import getPageData from "@/utils/ApiMapWithType";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Banner from "./components/banner";
import ServicesSections from "./components/servicesSections";
import Process from "./components/process";
import Hire from "./components/hire";
import { Skeleton } from "@/components/ui/skeleton";
import TopFooter from "./components/topFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServicesPage: FC = () => {
  const [data, setData] = useState<any[]>([]);
  const backend_url = "http://free.lndo.site";
  useEffect(() => {
    const fetchData = async () => {
      const apiPageUrl = `${backend_url}/node_title/services`;
      const apis = await getPageData(apiPageUrl);
      setData(apis);
    };

    fetchData();
  }, []);
  return (
    <div>
      {JSON.stringify(data)}
      {data?.length ? (
        data.map((item, index) => {
          // Assuming each sub-array has only one object
          const dataToShow = item[0].type;
          switch (dataToShow) {
            case "Banner":
              return (
                <div key={index}>
                  <Banner
                    title={item[0].field_banner_title}
                    imgurl={`${backend_url}${item[0].field_banner_image}`}
                  />
                </div>
              );
            case "Box layout":
              return (
                <div key={index} className="container">
                  <h2 className="text-center mb-20 font-bold text-4xl">
                    {item[0].field_section_1_services}
                  </h2>
                  <div className="flex items-stretch flex-wrap">
                    {item.map((el: any, i: number) => (
                      <div key={i} className="basis-1/2">
                        <ServicesSections
                          title={el.field_heading}
                          desc={el.field_subheading}
                          bgColor={
                            i === 0 || i === 3 || i === 4 || i === 7 || i === 8
                              ? "bg-sky-600"
                              : "bg-white"
                          }
                          color={
                            i === 0 || i === 3 || i === 4 || i === 7 || i === 8
                              ? "text-white"
                              : "text-sky-600"
                          }
                          desColor={
                            i === 0 || i === 3 || i === 4 || i === 7 || i === 8
                              ? "text-white"
                              : "text-black"
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center py-20">
                    <Link href="">
                      <Button variant="outline" className="text-xl">
                        {item[0].field_section_link}
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            case "Title With Desc Main":
              return (
                <>
                  <Process
                    title={item[0].field_title}
                    desc={item[0].field_desc}
                    list={item[0].field_title_with_desc_heading.split(",")}
                  />
                </>
              );
            case "faq":
              return (
                <div className="container text-center py-20">
                  <h2 className="text-center mb-20 font-bold text-4xl">
                    {item[0].field_faq_title}
                  </h2>
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full max-w-sm mx-auto"
                  >
                    {item.map((el: any, i: number) => (
                      <AccordionItem value={`item-${i}`} key={`item-${i}`}>
                        <AccordionTrigger>{el.field_question}</AccordionTrigger>
                        <AccordionContent>{el.field_answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            case "Title Heading With Cta": {
              return (
                <>
                  <Hire
                    title={item[0].field_cta_section_heading}
                    link={item[0].field_cta_link}
                    list={item}
                    value="field_cta_subheading"
                  />
                </>
              );
            }
            case "Cta Heading Link Image": {
              return (
                <TopFooter
                  title={item[0].field_cta_head}
                  link={item[0].field_cta_image_link}
                  imgurl={`${backend_url}${item[0].field_cta_bg_image}`}
                />
              );
            }
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
    </div>
  );
};
export default ServicesPage;
