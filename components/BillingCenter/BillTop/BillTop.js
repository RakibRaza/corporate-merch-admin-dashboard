import { FaSearch } from "react-icons/fa";

const BillTop = () => {
  return (
    <div className="section__header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section__top">
              <div className="section__top__left">
                <h2 className="title">Billing center</h2>
              </div>
              <div className="section__top__right">
                <div className="section__top__right__item">
                  <form className="bg-item" action="" method="post">
                    <input type="search" placeholder="Search Product..." />
                    <span className="btn-search-overlay">
                      <FaSearch />
                    </span>
                  </form>
                </div>
                <div className="section__top__right__item">
                  <form className="bg-item" action="" method="post">
                    <label htmlFor="short">Short By:</label>
                    <select name="short" id="short">
                      <option value="status">Status</option>
                      <option value="quantity">Quantity</option>
                      <option value="postage">Postage</option>
                    </select>
                  </form>
                </div>
                <div className="section__top__right__item">
                  <button className="btn btn-white border-theme">
                    <img src="../images/icons/button/file_download.svg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillTop;
