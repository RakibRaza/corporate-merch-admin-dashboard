import StatisticsChart from "./StatisticsChart";

const OrderStatistics = () => {
  return (
    <div className="col-md-6">
      <div className="bg-content">
        <div className="content__top">
          <div className="content__left">
            <h2 className="content-title">Order Statistics</h2>
          </div>
          <div className="content__ritht">
            <select name="month" id="month">
              <option value="this-month">This Month</option>
              <option value="previous-month">Previous Month</option>
              <option value="next-month">Next Month</option>
            </select>
          </div>
        </div>
        <StatisticsChart />
      </div>
    </div>
  )
}

export default OrderStatistics;
