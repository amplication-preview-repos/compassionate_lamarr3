import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { RentWhereUniqueInput } from "../rent/RentWhereUniqueInput";
import { RentListRelationFilter } from "../rent/RentListRelationFilter";

export type TenantWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  property?: PropertyWhereUniqueInput;
  rent?: RentWhereUniqueInput;
  rents?: RentListRelationFilter;
};
