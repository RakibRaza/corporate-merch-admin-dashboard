import { useState } from "react";
import Header from "../Header/Header";
import AdminSidebar from "../Sidebar/Sidebar";

const AdminLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const handleClick = () => {
    setShowSidebar(!showSidebar)
  }
  const removeSidebar = () => {
    setShowSidebar(false)
  }
  return (
    <>
      <Header handleClick={handleClick} />
      <AdminSidebar removeSidebar={removeSidebar} showSidebar={showSidebar} />
      {children}
    </>
  )
}

export default AdminLayout;
