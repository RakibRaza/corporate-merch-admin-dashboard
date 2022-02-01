import { MdRefresh } from "react-icons/md";
import { FaEllipsisV } from "react-icons/fa";
import StatusChart from "./StatusChart";

const ShipmentStatus = () => {
  return (
    <div className="col-md-4">
      <div className="shipment__status bg-content">
        <div className="shipment__top">
          <h2>Shipment Status</h2>
          <div className="shipment__top__action">
            <a href="#"> <MdRefresh /> </a>
            <a href="#"> <FaEllipsisV /> </a>
          </div>
        </div>
        <StatusChart />
      </div>
    </div>
  )
}

export default ShipmentStatus;
