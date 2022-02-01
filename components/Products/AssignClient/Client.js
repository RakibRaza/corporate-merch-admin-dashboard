import { FaEdit } from "react-icons/fa";

const Client = () => {
  return (
    <div className="content__sidebar">
      <div className="content__sidebar__item content__search">
        <h2>Team</h2>
        <form className="bg-item">
          <select>
            <option value="team-ny-hr">Team NY-HR</option>
            <option value="team-ny-hr">Team NY-HR</option>
            <option value="team-ny-hr">Team NY-HR</option>
          </select>
        </form>
      </div>
      <div className="content__sidebar__item content__card">
        <h2 className="content-title mb-34">Assign Client</h2>
        <div className="client__name">
          <label>Select Client</label>
          <select>
            <option value="maria">Maria Roselia</option>
            <option value="roger">Roger Carroll</option>
            <option value="guadalipe">Guadalupe Santiago</option>
          </select>
        </div>
        <ul className="client-info-list">
          <li>
            <span className="list-text">Order ID</span>
            <span className="list-title">#27839-00</span>
          </li>
          <li>
            <span className="list-text">Location</span>
            <span className="list-title">
              Atlanta <span className="flag-icon flag-icon-us"></span> United States
            </span>
          </li>
          <li>
            <span className="list-text">Date</span>
            <span className="list-title">12 Feb 2021</span>
          </li>
          <li>
            <span className="list-text">Billing</span>
            <span className="list-title">
              <img src="../../images/table/two-circle.svg" alt="" />
              *****819
            </span>
          </li>
          <li>
            <span className="list-text">Payment Status</span>
            <span className="badge bg-green">Paid</span>
          </li>
          <li>
            <span className="list-text">Total</span>
            <span className="list-title">$15,302.00</span>
          </li>
        </ul>
        <div className="buttons__group">
          <a href="#" className="btn btn-outline">
            <FaEdit />
            <span>Edit Client Info</span>
          </a>
          <a href="#" className="btn btn-theme">
            <span>Assign Product</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Client;
