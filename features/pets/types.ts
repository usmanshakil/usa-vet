export interface Pet {
    id: number;
    name: string;
    ownerId: number;
    ownerName: string;
    species: string;
    breed: string;
    gender: "Male" | "Female";
    age: string;
    weight: string;
    status: "Active" | "Inactive";
}