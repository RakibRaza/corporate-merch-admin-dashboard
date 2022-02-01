import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from 'react';
import { FaCaretDown, FaCircle, FaTimes } from 'react-icons/fa';

const AdminSidebar = ({ showSidebar, removeSidebar }) => {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const router = useRouter();

  const handleClick = () => {
    setShowSubMenu(false);
    removeSidebar();
  }
  const handleSubMenu = (e) => {
    e.preventDefault();
    setShowSubMenu(!showSubMenu);
  }
  return (
    <div className={`sidebar__area ${showSidebar ? "show-sidebar" : ""}`}>
      <Link href="/">
        <a className="sidebar__brand">
          <img src="/images/logo/logo.png" alt="Logo" />
        </a>
      </Link>
      <button onClick={removeSidebar} className="sidebar__close">
        <FaTimes />
      </button>

      <ul className="sidebar__menu">
        <li onClick={handleClick} >
          <Link href="/">
            <a className={router.pathname == "/" ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/Category.svg" />
              </span>
              <span className="menu-title">Dashboard</span>
            </a>
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link href="/clients">
            <a className={router.pathname == "/clients" ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/Profile.svg" />
              </span>
              <span className="menu-title">Clients</span>
            </a>
          </Link>
        </li>
        <li className={`dropdown ${showSubMenu ? "has-clicked" : ""}`}>
          <a href="#" onClick={handleSubMenu} className="sub-menu-toggle">
            <span className="menu-icon">
              <img src="/images/icons/sidebar-menu/bookmark.svg" />
            </span>
            <span className="menu-title">Products</span>
            <span className="menu-arrow">
              <FaCaretDown className="toggle-icon" />
            </span>
          </a>
          {showSubMenu && (
            <ul className="sub-menu">
              <li onClick={removeSidebar}>
                <Link href="/products">
                  <a className={router.pathname == "/products" ? "active" : ""}> <FaCircle /> All Products </a>
                </Link>
              </li>
              <li onClick={removeSidebar}>
                <Link href="/products/upload-product">
                  <a className={router.pathname == "/products/upload-product" ? "active" : ""}> <FaCircle /> Upload Product </a>
                </Link>
              </li>
              <li onClick={removeSidebar}>
                <Link href="/products/pricing-matrix">
                  <a className={router.pathname == "/products/pricing-matrix" ? "active" : ""}> <FaCircle />  Pricing Matrix </a>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li onClick={handleClick}>
          <Link href="/shipments">
            <a className={router.pathname == "/shipments" ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/airplane-square.svg" />
              </span>
              <span className="menu-title">Shipments</span>
            </a>
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link href="/quote-request">
            <a className={router.pathname.startsWith("/quote-request") ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/dollar-circle.svg" />
              </span>
              <span className="menu-title"> Quote Request</span>
            </a>
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link href="/manage-order">
            <a className={router.pathname.startsWith("/manage-order") ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/note-2.svg" />
              </span>
              <span className="menu-title">Manage Order</span>
            </a>
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link href="/analytics">
            <a className={router.pathname == "/analytics" ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/status-up.svg" />
              </span>
              <span className="menu-title">Analytics</span>
            </a>
          </Link>
        </li>
        <li onClick={handleClick} >
          <Link href="/billing-center">
            <a className={router.pathname == "/billing-center" ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/receipt-text.svg" />
              </span>
              <span className="menu-title">Billing Center</span>
            </a>
          </Link>
        </li>
        <li onClick={handleClick} >
          <Link href="/settings">
            <a className={router.pathname == "/settings" ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/Setting.svg" />
              </span>
              <span className="menu-title"> Settings</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default AdminSidebar;
