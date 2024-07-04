"use client";

const DynamicName = ({
  initialName,
  url,
}: {
  initialName: string;
  url: string;
}) => {
  const localDataName = localStorage.getItem("dataName");
  const localDataId = localStorage.getItem("dataId");

  const name =
    localDataId === url && localDataName ? localDataName : initialName;

  return <h1 className="text-2xl">{name}</h1>;
};

export default DynamicName;
