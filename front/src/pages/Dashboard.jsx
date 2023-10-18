import TableDashboardAtom from '../components/atoms/TableDashboardAtom';

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap md:block md:absolute md:top-[80px] md:left-64 md:right-0 w-auto p-2">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <TableDashboardAtom />
        </div>
        {/* <div className="w-full xl:w-4/12 px-4">
          <CardBarChart /> 
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic /> 
        </div> */}
      </div> 
    </>
  );
}