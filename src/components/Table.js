import React from 'react';

const DynamicTable = ({ data }) => {
  // Extract common keys from all objects
  const commonKeys = Array.from(
    new Set(data.flatMap(item => Object.keys(item)))
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border bg-white">
        <thead>
          <tr>
            {/* Render header with common keys */}
            {commonKeys.map((key) => (
              <th key={key} className="border-b-2 p-2">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Render rows with values */}
          {data.map((item, index) => (
            <tr key={index}>
              {commonKeys.map((key) => (
                <td key={key} className="border px-4 py-2">
                  {/* Check if the value is an object, if not, display the value */}
                  {typeof item[key] === 'object' ? 'Object (Nested)' : item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
