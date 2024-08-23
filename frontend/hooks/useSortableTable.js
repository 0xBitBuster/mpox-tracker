import { useEffect, useState } from "react";

export default function useSortableTable(data, defaultSortKey) {
  const [state, setState] = useState({
    sortedData: data,
    sortKey: defaultSortKey,
    sortDirection: "asc",
  });

  useEffect(() => {
    handleDataChange(data)
  }, [data])

  const handleDataChange = (data) => {
    const key = state.sortKey
    const direction = key === key && state.sortDirection === "asc" ? "desc" : "asc";

    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setState(prev => ({
      ...prev,
      sortedData: sorted,
    }));
  }

  const sortByKey = (key) => {
    const direction = key === state.sortKey && state.sortDirection === "asc" ? "desc" : "asc";

    const sorted = [...state.sortedData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setState({
      sortedData: sorted,
      sortKey: key,
      sortDirection: direction,
    });
  };

  return {
    ...state,
    sortByKey,
  };
}
