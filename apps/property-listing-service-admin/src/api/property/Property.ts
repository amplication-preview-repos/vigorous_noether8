import { Decimal } from "decimal.js";

export type Property = {
  baths: Decimal | null;
  bedrooms: number | null;
  beds: number | null;
  createdAt: Date;
  guestLimit: number | null;
  id: string;
  location: string | null;
  name: string;
  nightlyPrice: number | null;
  rentPrice: number | null;
  sellPrice: number | null;
  updatedAt: Date;
};
