"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import Card from "@/components/Card";
import { MultiResponse, Type } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import CurrentSearchProps from "./CurrentSearchProps";
import CardSkeleton from "../CardSkeleton";
import PaginationComp from "./Pagination";

const Content = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = (searchParams.get("type") as Type) || "people";
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const [data, setData] = useState<MultiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/api/getMultiData/?type=${type}&search=${search}&page=${page}`
      );
      setData(response.data);
      setTotalPages(Math.ceil(response.data.count / 10));
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }, [type, search, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePageChange = useCallback(
    (page: number) => {
      if (page > 0 && page <= totalPages) {
        router.push(`/?type=${type}&page=${page}`);
      }
    },
    [router, type, totalPages]
  );

  const skeletons = useMemo(
    () => (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {[...Array(20)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    ),
    []
  );

  if (loading) return skeletons;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <CurrentSearchProps />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data &&
          data.results.map((item) => (
            <Card
              key={item.url}
              url={item.url}
              name={item.type === "film" ? item.title : item.name}
              type={type}
              id={item.url.split("/").slice(-2, -1)[0]}
            />
          ))}
      </div>
      {search === "" ? (
        <PaginationComp
          totalPages={totalPages}
          currentPage={page}
          handlePageChange={handlePageChange}
        />
      ) : null}
    </div>
  );
};

export default Content;
