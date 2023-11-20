import { ItemMetaData } from "./itemMetaData";

export interface Recommendation {
  itemId: {
    objectId: number;
  };
  itemMetadata: ItemMetaData;
}
