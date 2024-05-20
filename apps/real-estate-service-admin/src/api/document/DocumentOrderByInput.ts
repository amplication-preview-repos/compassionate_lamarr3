import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  path?: SortOrder;
  propertyId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  uploadedAt?: SortOrder;
};
