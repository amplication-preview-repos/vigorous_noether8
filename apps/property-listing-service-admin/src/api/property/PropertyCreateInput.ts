import { Decimal } from "decimal.js";

export type PropertyCreateInput = {
  baths?: Decimal | null;
  bedrooms?: number | null;
  beds?: number | null;
  guestLimit?: number | null;
  location?: string | null;
  name: string;
  nightlyPrice?: number | null;
  rentPrice?: number | null;
  sellPrice?: number | null;
};
