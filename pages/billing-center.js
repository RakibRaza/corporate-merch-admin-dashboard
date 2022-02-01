import BillTable from "../components/BillingCenter/BillTable/BillTable";
import BillTop from "../components/BillingCenter/BillTop/BillTop";

const BillingCenter = () => {
  return (
    <div className="main-content">
      <BillTop />
      <BillTable />
    </div>
  )
}

export default BillingCenter;

