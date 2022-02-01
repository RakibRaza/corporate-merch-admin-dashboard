import MonthlyRevenue from "../components/Dashboard/MonthlyRevenue/MonthlyRevenue";
import OrderStatistics from "../components/Dashboard/OrderStatistics/OrderStatistics";
import ProductAnalytics from "../components/Dashboard/ProductAnalytics/ProductAnalytics";
import ShipmentStatus from "../components/Dashboard/ShipmentStatus/ShipmentStatus";
import TopCard from "../components/Dashboard/TopCard/TopCard";

const Dashboard = () => {
  return (
    <div className="main-content">
      <TopCard />
      <section className="standard-section">
        <div className="container-fluid">
          <div className="row">
            <OrderStatistics />
            <ProductAnalytics />
          </div>
        </div>
      </section>
      <section className="standard-section">
        <div className="container-fluid">
          <div className="row">
            <MonthlyRevenue />
            <ShipmentStatus />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard;
