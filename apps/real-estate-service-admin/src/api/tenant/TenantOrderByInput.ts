import { SortOrder } from "../../util/SortOrder";

export type TenantOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  propertyId?: SortOrder;
  rentId?: SortOrder;
  updatedAt?: SortOrder;
};
