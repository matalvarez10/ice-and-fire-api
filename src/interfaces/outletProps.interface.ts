import { IBookAddedData } from "./bookAddedData.interface";

export interface IOutletProps{
    addFavorite:  (isbn:String) => void;
    addBook: (newBook: IBookAddedData) => void;
    isLoading: boolean;
    hasError: boolean;
  };