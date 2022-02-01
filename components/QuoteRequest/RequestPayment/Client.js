import { FaEdit, FaSearch } from "react-icons/fa";

const Client = () => {
  return (
    <div className="col-lg-4">
      <div className="content__sidebar">
        <div className="content__sidebar__item content__search">
          <h2>Assign Client</h2>
          <form className="bg-item" action="" method="post">
            <input type="search" name="search" id="search" placeholder="Search Product..." />
            <span className="btn-search-overlay">
              <FaSearch />
            </span>
          </form>
        </div>
        <div className="content__sidebar__item content__card">
          <div className="client__name">
            <label>Client Name</label>
            <select>
              <option value="maria">Maria Roselia</option>
              <option value="roger">Roger Carroll</option>
              <option value="guadalipe">Guadalupe Santiago</option>
            </select>
          </div>
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
    </div>
  )
}

export default Client;
