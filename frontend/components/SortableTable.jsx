import useSortableTable from "@/hooks/useSortableTable";

const SortableTable = ({ data, columns, defaultSortKey }) => {
  const { sortedData, sortKey, sortByKey, sortDirection } = useSortableTable(data, defaultSortKey);

  return (
    <>
      <table className="w-full border-collapse table-fixed border">
        <thead>
          <tr className="bg-[#F9F9F9] border-t text-gray-800">
            {columns.map((col, i) => (
              <th key={i} onClick={() => sortByKey(col.accessor)} className={`text-left ${col.sortable ? "cursor-pointer" : ""} py-3 px-4 font-semibold text-xs`}>
                <div className="flex items-center">
                  {col.label}
                  {col.sortable && (
                    <div className="ml-1.5 text-[10px] leading-[0.6rem]">
                      <p className={`${(sortKey === col.accessor && sortDirection === "asc") ? "text-blue-400" : ""}`}>&#9650;</p>
                      <p className={`${(sortKey === col.accessor && sortDirection === "desc") ? "text-blue-400" : ""}`}>&#9660;</p>
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-gray-700 text-sm">
          {sortedData.map((row, i) => (
            <tr key={i} className="bg-white border-t">
              {columns.map((col, j) => (
                <td key={j} className="py-3 px-4">
                  {col.format ? col.format(row[col.accessor]) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SortableTable;
