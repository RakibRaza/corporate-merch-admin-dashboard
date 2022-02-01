import RevenueChart from "./RevenueChart";

const RevenueOrders = () => {
  return (
    <div className="col-md-9">
      <div className="revenue-status bg-content">
        <div className="revenue-status__top">
          <h2 className="content-title">Revenue vs Orders</h2>
          <ul className="revenue-status__legend">
            <li>
              <div className="legend-title revenue">
                Revenue
              </div>
            </li>
            <li>
              <div className="legend-title orders">
                Orders
              </div>
            </li>
          </ul>
        </div>
        <RevenueChart />
      </div>
    </div>
  )
}

export default RevenueOrders;
