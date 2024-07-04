"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Badge } from "../ui/badge";
import React, { useCallback } from "react";

const CurrentSearchProps = React.memo(() => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const search = searchParams.get("search");
  const page = searchParams.get("page");

  const removeSearchParams = useCallback(
    (param: string) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete(param);
      router.replace(`?${newSearchParams.toString()}`);
    },
    [router, searchParams]
  );

  return (
    <div className="flex gap-2">
      {type && (
        <Badge
          className="cursor-pointer"
          variant="default"
          onClick={() => removeSearchParams("type")}
        >
          {`Type: ${type}`}
        </Badge>
      )}
      {search && (
        <Badge
          className="cursor-pointer"
          variant="secondary"
          onClick={() => removeSearchParams("search")}
        >
          {`Search: ${search}`}
        </Badge>
      )}
      {page && (
        <Badge
          className="cursor-pointer"
          variant="outline"
          onClick={() => removeSearchParams("page")}
        >
          {`Page: ${page}`}
        </Badge>
      )}
    </div>
  );
});

export default CurrentSearchProps;
