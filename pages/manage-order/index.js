import OrderTable from "../../components/ManageOrder/OrderTable/OrderTable";
import OrderTop from "../../components/ManageOrder/OrderTop/OrderTop";

const ManageOrder = () => {
  return (
    <div className="main-content">
      <OrderTop />
      <OrderTable />
    </div>
  )
}

export default ManageOrder;
