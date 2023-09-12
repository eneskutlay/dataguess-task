import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./queries/GET_COUNTRIES";

export type GroupField = "name" | "capital"; // Kullanılabilir alanları burada belirtin

interface Language {
  code: string;
  name: string;
}

interface CountryData {
  code: string;
  name: string;
  native: string;
  capital: string;
  emoji: string;
  currency: string;
  languages: Language[];
}

interface QueryResult {
  countries: CountryData[];
}

const useCustomData = () => {
  const [query, setQuery] = useState<string>("");
  const [groupField, setGroupField] = useState<GroupField>("name");
  const [filteredData, setFilteredData] = useState<CountryData[]>([]);

  const { loading, error, data } = useQuery<QueryResult>(GET_COUNTRIES);

  useEffect(() => {
    if (!loading && !error && data) {
      // İlk adım olarak veriyi filtreleyin
      const filteredData = data.countries.filter((item) =>
        item.name.includes(query)
      );

      // Ardından veriyi gruplayın
      const groupedData: Record<string, CountryData[]> = {};
      filteredData.forEach((item) => {
        const groupValue = item[groupField];
        if (!groupedData[groupValue]) {
          groupedData[groupValue] = [];
        }
        groupedData[groupValue].push(item);
      });

      // Dizilere dönüştürme işlemi
      const groupedDataArray: CountryData[] = [];
      for (const key in groupedData) {
        if (Object.hasOwnProperty.call(groupedData, key)) {
          groupedDataArray.push(...groupedData[key]);
        }
      }

      setFilteredData(groupedDataArray);
    }
  }, [data, query, groupField, loading, error]);

  return {
    query,
    setQuery,
    groupField,
    setGroupField,
    filteredData,
    loading,
    error,
  };
};

export default useCustomData;

