import DynamicName from "@/components/DynamicName";
import EditData from "@/components/EditData";
import Header from "@/components/Header";
import { getPlaceholder } from "@/lib/get-placeholder";
import { DataResponse, Type } from "@/lib/types";

import axios from "axios";
import Image from "next/image";
import { cache } from "react";

const getItem = cache(async (id: string, type: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSingleData/?type=${type}&id=${id}`
    );
    console.log(response.data);
    return response.data as DataResponse;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
});

const renderData = (data: DataResponse, type: Type) => {
  const renderField = (key: string, value: any) => {
    if (Array.isArray(value)) {
      return (
        <div key={key} className="flex flex-col">
          <strong>{key}:</strong>
          <ul className="list-disc list-inside">
            {value.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    } else if (typeof value === "object" && value !== null) {
      return (
        <div key={key} className="flex flex-col">
          <strong>{key}:</strong>
          <div className="ml-4">
            {Object.entries(value).map(([subKey, subValue]) =>
              renderField(subKey, subValue)
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div key={key} className="flex">
          <strong>{key}:</strong> <span className="ml-2">{value}</span>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {Object.entries(data).map(([key, value]) => renderField(key, value))}
    </div>
  );
};

const DetailPage = async ({
  params,
}: {
  params: { type: string; id: string };
}) => {
  const { type, id } = params;

  const data = await getItem(id, type);

  if (!data) return <div className="text-red-500">Failed to fetch data</div>;
  const image = getPlaceholder(type as Type);
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen text-white bg-black">
        <div className="flex flex-col items-start md:flex-row max-w-[1200px] w-full gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              className="rounded-xl"
              src={image}
              alt={data.url}
              width={200}
              height={300}
            />
            <DynamicName
              initialName={"name" in data ? data.name : data.title}
              url={data.url}
            />
            <EditData
              data={"name" in data ? data.name : data.title}
              url={data.url}
            />
          </div>
          {renderData(data, type as Type)}
        </div>
      </div>
    </>
  );
};

export default DetailPage;
