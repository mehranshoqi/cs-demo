// types/index.ts

export interface Product {
  id: string;
  name: string;
  wear: string;
  wearValue: number;
  price: number;
  priceChange: string;
  priceChangeValue: number;
  image: string;
  type:
    | "Pistols"
    | "Mid-Tier"
    | "Rifles"
    | "Knives"
    | "Gloves"
    | "Cases"
    | string;
  skinType: string;
  discountPercentage?: number;
  color?: string;
  deliveryTime?: "0-10 min" | "0-30 min" | "0-12 hrs";
}
export interface FilterModel {
  weapon?: string;
  priceRange: {
    min: number | null;
    max: number | null;
  };
  relativeToMarketPrice: string[];
  floatValue: string[];
  delivery: string[];
  colors: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Chip {
  label: string;
  iconSrc: string;
}

export type FilterType = "All Skins" | Product["type"];

export enum ProfileMenu {
  profile,
  security,
  transactions,
  gameHistory,
  statistics,
  trades,
  verifyIdentity,
}

export interface ProfileMenuItem {
  title: string;
  iconSrc: string;
  item: ProfileMenu;
}

export enum TransactionsFilters {
  all,
  crypto,
  daily,
  fiat,
}
