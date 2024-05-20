import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RentListRelationFilter } from "../rent/RentListRelationFilter";
import { TenantListRelationFilter } from "../tenant/TenantListRelationFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  city?: StringNullableFilter;
  documents?: DocumentListRelationFilter;
  id?: StringFilter;
  rents?: RentListRelationFilter;
  state?: StringNullableFilter;
  tenants?: TenantListRelationFilter;
  zipCode?: StringNullableFilter;
};
