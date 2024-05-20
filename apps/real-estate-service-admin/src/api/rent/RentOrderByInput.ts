import { SortOrder } from "../../util/SortOrder";

export type RentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  propertyId?: SortOrder;
  status?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
