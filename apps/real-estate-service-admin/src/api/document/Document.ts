import { Property } from "../property/Property";

export type Document = {
  createdAt: Date;
  id: string;
  path: string | null;
  property?: Property | null;
  title: string | null;
  updatedAt: Date;
  uploadedAt: Date | null;
};
