import AddClients from "../components/Clients/AddClients/AddClients";
import ClientsTable from "../components/Clients/ClientsTable/ClientsTable";

const Clients = () => {
  return (
    <div className="main-content">
      <AddClients />
      <ClientsTable />
    </div>
  )
}

export default Clients;

