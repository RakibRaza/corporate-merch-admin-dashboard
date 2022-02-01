import NewCustomers from "../components/Analytics/NewCustomers/NewCustomers";
import RevenueOrders from "../components/Analytics/RevenueOrders/RevenueOrders";
import ShipmentStatus from "../components/Analytics/ShipmentStatus/ShipmentStatus";
import TopCard from "../components/Analytics/TopCard/TopCard";
import TopProducts from "../components/Analytics/TopProducts/TopProducts";

const Analytics = () => {
  return (
    <div className="main-content">
      <TopCard />
      <section className="mt-5">
        <div className="container-fluid">
          <div className="row">
            <RevenueOrders />
            <NewCustomers />
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container-fluid">
          <div className="row">
            <TopProducts />
            <ShipmentStatus />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Analytics;

