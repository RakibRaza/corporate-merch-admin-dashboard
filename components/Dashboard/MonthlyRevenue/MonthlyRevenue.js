import RevenueChart from "./RevenueChart";

const MonthlyRevenue = () => {
  return (
    <div className="col-lg-8 col-md-6">
      <div className="bg-content revenue-chart">
        <div className="revenue-chart__top">
          <h2>Monthly Revevue</h2>
          <div className="revenue-chart__content">
            <div className="revenue-chart__left">
              <h2>$156,098</h2>
            </div>
            <div className="revenue-chart__right">
              <div className="percent-text">
                <img src="/images/icons/ic_up.svg" alt="" />
                <p>2.9%</p>
              </div>
              <p>in selected period</p>
            </div>
          </div>
        </div>
        <RevenueChart />
      </div>
    </div>
  )
}

export default MonthlyRevenue;
