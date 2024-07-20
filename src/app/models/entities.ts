type FrameworkUsage = {
  framework: string;
  usage: number;
  color: string;
};

type CountryData = {
  country: string;
  data: FrameworkUsage[];
};

export type CountriesData = CountryData[];

export interface PaginationResult {
  items: Array<any>;
  totalItems: number;
  currentPage: number;
  totalPages: number;
}
