import api from "./api";

export interface MarketItem {
  assetid: string;
  price: number;
  market_hash_name: string;
  classid: string;
  instanceid: string;
  icon_url: string;
  custom_image_url: string;
  min_price: number;
  max_price: number;
}

interface MarketApiResponse {
  data: MarketItem[];
  dataItems: number;
  filtered: number;
  total: number;
}

interface MarketQueryFilters {
  id?: number;
  name?: string;
  like?: boolean;
  class?: number;
  instance?: number;
  min_price?: number | null;
  max_price?: number | null;
}

interface MarketQueryPagination {
  limit: number | 10;
  offset: number | 0;
}

interface MarketQuerySorting {
  sort_by?: string;
  sort?: -1 | 1;
}

export interface GetMarketItemsParams
  extends MarketQueryFilters,
    MarketQueryPagination,
    MarketQuerySorting {}

const MarketService = {
  getItems: (params?: GetMarketItemsParams) => {
    const queryParams: Record<string, string | number | boolean | null | undefined> = {};

    if (params) {
      if (params.id !== undefined) queryParams.id = params.id;
      if (params.name) queryParams.name = params.name;

      if (params.like !== undefined) queryParams.like = params.like ? 1 : 0;
      if (params.class !== undefined) queryParams.class = params.class;
      if (params.instance !== undefined) queryParams.instance = params.instance;
      if (params.min_price !== undefined)
        queryParams.min_price = params.min_price;
      if (params.max_price !== undefined)
        queryParams.max_price = params.max_price;

      if (params.limit !== undefined) queryParams.limit = params.limit;
      if (params.offset !== undefined) queryParams.offset = params.offset;

      if (params.sort_by) queryParams.sort_by = params.sort_by;

      if (params.sort !== undefined) {
        queryParams.sort = params.sort;
      }
    }

    return api.get<MarketApiResponse>("/api/market", {
      params: queryParams,
    });
  },
};

export default MarketService;
