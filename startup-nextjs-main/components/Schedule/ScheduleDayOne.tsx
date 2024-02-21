import { schedule1Data } from "./schedule1Data";

const ScheduleDayOne= () => {
  return (
    <>
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 border-b border-gray-200 text-gray-500 font-semibold uppercase text-sm">Time</th>
          <th className="px-6 py-3 bg-gray-50 border-b border-gray-200 text-gray-500 font-semibold uppercase text-sm">Event</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {schedule1Data.map((scheduleItem) => (
          <tr className="text-center" key={scheduleItem.id}>
          <td className="px-6 py-4">{scheduleItem.time}</td>
          <td className="px-6 py-4">{scheduleItem.event}</td>
        </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default ScheduleDayOne;