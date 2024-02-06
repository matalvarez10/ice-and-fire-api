import { createContext} from "react"
import { IBookAddedData } from "../interfaces/bookAddedData.interface";
export const BookContext = createContext<IBookAddedData[]>([]);
