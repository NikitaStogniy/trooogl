import axios from "axios";
import { DataResponse } from "@/lib/types";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const type = searchParams.get("type");

  if (!type) {
    return new Response("Type is required", { status: 400 });
  }

  if (!id) {
    return new Response("Id is required", { status: 400 });
  }

  try {
    const url = `${process.env.NEXT_PUBLIC_SWAPI_BASE_URL}${type}/${id}`;
    console.log(url);
    const response = await axios.get(url);
    const data: DataResponse = response.data;
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data from SWAPI", { status: 500 });
  }
}
