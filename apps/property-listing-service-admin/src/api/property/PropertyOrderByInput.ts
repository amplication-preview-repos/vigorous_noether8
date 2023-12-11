import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  baths?: SortOrder;
  bedrooms?: SortOrder;
  beds?: SortOrder;
  createdAt?: SortOrder;
  guestLimit?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  nightlyPrice?: SortOrder;
  rentPrice?: SortOrder;
  sellPrice?: SortOrder;
  updatedAt?: SortOrder;
};
