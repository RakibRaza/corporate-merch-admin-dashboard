import StatusChart from './StatusChart';

const ShipmentStatus = () => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="chart">
        <div className="content__top">
          <div className="content__left">
            <h2 className="content-title">Shipment Status</h2>
          </div>
        </div>
        <StatusChart />
      </div>
    </div>
  )
}

export default ShipmentStatus;
