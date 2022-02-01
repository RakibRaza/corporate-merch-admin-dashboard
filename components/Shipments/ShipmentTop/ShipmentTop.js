import { FaSearch } from "react-icons/fa";

const ShipmentTop = () => {
  return (
    <div className="section__header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section__top">
              <div className="section__top__left">
                <h2 className="title">
                  Shipments
                  <span>(1,245)</span>
                </h2>
              </div>
              <div className="section__top__right">
                <div className="section__top__right__item">
                  <form className="bg-item">
                    <input type="search" id="search" placeholder="Search Product..." />
                    <span className="btn-search-overlay">
                      <FaSearch />
                    </span>
                  </form>
                </div>
                <div className="section__top__right__item">
                  <form className="bg-item">
                    <label>Short By:</label>
                    <select>
                      <option value="status">Status</option>
                      <option value="quantity">Quantity</option>
                      <option value="postage">Postage</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShipmentTop;
