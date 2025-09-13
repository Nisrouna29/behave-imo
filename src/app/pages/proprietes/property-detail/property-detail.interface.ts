export interface PropertyDetail {
  id: number;
  title: string;
  address: string;
  price: string;
  status: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  landArea?: number;
  yearBuilt?: number;
  floor?: string;
  heating?: string;
  garage?: string;
  pool?: boolean;
  energyClass?: string;
  description: string;
  features: string[];
  images: string[];
  agent: {
    name: string;
    title: string;
    avatar: string;
  };
  location: {
    transport: string[];
    schools: string[];
    shops: string[];
  };
}
