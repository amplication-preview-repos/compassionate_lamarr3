import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DocumentWhereInput = {
  id?: StringFilter;
  path?: StringNullableFilter;
  property?: PropertyWhereUniqueInput;
  title?: StringNullableFilter;
  uploadedAt?: DateTimeNullableFilter;
};
