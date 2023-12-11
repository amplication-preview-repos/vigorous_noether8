import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  baths?: DecimalNullableFilter;
  bedrooms?: IntNullableFilter;
  beds?: IntNullableFilter;
  guestLimit?: IntNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringFilter;
  nightlyPrice?: FloatNullableFilter;
  rentPrice?: FloatNullableFilter;
  sellPrice?: FloatNullableFilter;
};
