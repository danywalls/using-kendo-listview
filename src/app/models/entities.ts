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
