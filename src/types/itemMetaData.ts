import { Author } from "./author";

export interface ItemMetaData {
  img: string;
  url: string;
  title: string;
  shortTitle: string;
  authors: Author[];
}
