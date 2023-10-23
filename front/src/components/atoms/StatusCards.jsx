
const StatusCard = ({ title, statusCounts, statusOptions, statusColors }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold">{title}</h3>
        <ul>
          {Object.keys(statusCounts).map((key) => (
            <li key={key} className="flex items-center">
              <span
                className={`w-4 h-4 rounded-full mr-2`}
                style={{ backgroundColor: statusColors[key] }}
              ></span>
              {statusOptions[key]}: {statusCounts[key]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StatusCard;

