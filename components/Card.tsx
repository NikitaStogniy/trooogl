import { getPlaceholder } from "@/lib/get-placeholder";
import { CardProps, Type } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import DynamicName from "./DynamicName";
import React, { memo } from "react";

const getImage = (type: Type) => {
  return getPlaceholder(type);
};

const Card: React.FC<CardProps> = ({ type, name, url, id }) => {
  return (
    <Link
      href={`/${type}/${id}`}
      className="border border-white/10 rounded-lg h-[380px] w-[260px] p-[6px]"
    >
      <Image
        className="rounded-xl"
        src={getImage(type as Type)}
        alt="bg"
        width={260}
        height={300}
        objectFit="cover"
      />
      <DynamicName initialName={name} url={url} />
    </Link>
  );
};

export default memo(Card);
