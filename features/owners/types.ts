export interface Owner {
  id: number;
  name: string;
  email: string;
  phone: string;
  petCount: number;
  status: "Active" | "Inactive";
}