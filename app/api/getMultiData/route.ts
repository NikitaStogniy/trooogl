import axios from "axios";
import { MultiResponse } from "@/lib/types";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search");
  const page = searchParams.get("page");
  const type = searchParams.get("type");

  if (!type) {
    return new Response("Type is required", { status: 400 });
  }

  const pageParam = page ? `?page=${page}` : "";
  const searchParam = search ? `?search=${search}` : "";

  try {
    const url = `${process.env.NEXT_PUBLIC_SWAPI_BASE_URL}${type}${
      searchParam ? searchParam : pageParam
    }`;

    const response = await axios.get(url);
    const data: MultiResponse = response.data;
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data from SWAPI", { status: 500 });
  }
}
