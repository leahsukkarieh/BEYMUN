import { Table } from "@/types/table";

const CriteriaTable = ({ criteriaTableData}: { criteriaTableData: Table[] }) => {
  return (
    <>
      <section id="criteria-table" className="py-7 md:py-9 lg:py-19">
        <div className="container flex flex-col items-center">
            <table className="w-3/4 mt-4 mb-4 text-center">
                <thead>
                    <tr style={{ backgroundColor: '#B83227', color: '#FFFFFF' }}>
                        <th className="px-6 py-3 border-b border-gray-200 font-semibold uppercase text-sm">Criteria</th>
                        <th className="px-6 py-3 border-b border-gray-200 font-semibold uppercase text-sm">Description</th>
                        <th className="px-6 py-3 border-b border-gray-200 font-semibold uppercase text-sm">Evaluation Scale (1-10)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {criteriaTableData.map((item, index) => (
                        <tr key={item.id} style={{ backgroundColor: index % 2 === 0 ? 'rgba(255, 205, 210, 0.5)' : '#FFFFFF' }}>
                            <td className="px-6 py-4">{item.criteria}</td>
                            <td className="px-6 py-4">{item.description}</td>
                            <td className="px-6 py-4">{item.scale}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </section>
    </>
  );
};

export default CriteriaTable;