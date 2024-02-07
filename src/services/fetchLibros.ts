import { IBookData } from "../interfaces/book.interface";
import axios from "axios";

export async function fetchData() {
  try {
    const response = await axios.get(
      `https://www.anapioficeandfire.com/api/books?page=1&pageSize=12`
    );
    const datos: IBookData[] = response.data;
    return datos;
  } catch (error) {
    const errorMessage =
      (error as Error).message || "Failed to Fetch Weather data";
    throw new Error(errorMessage);
  }
}
