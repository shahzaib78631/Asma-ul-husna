import { useState, useEffect } from "react";

const useSearch = (items: Array<any>) => {
  const [text, setText] = useState("");
  const [filteredResults, setFilteredResults] = useState<any[]>([...items]);

  const onChangeText = (value: string) => {
    setText(value);

    const filteredData = items.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(value.toLowerCase());
    });

    setFilteredResults(filteredData);
  };

  return {
    text,
    onChangeText,
    filteredResults,
  };
};

export default useSearch;
