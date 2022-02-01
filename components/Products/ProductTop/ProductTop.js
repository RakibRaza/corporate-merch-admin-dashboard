import { FaSearch } from "react-icons/fa";

const ProductTop = () => {
  return (
    <div className="section__header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section__top">
              <div className="section__top__left">
                <h2 className="title">
                  Products
                  <span>(2,724)</span>
                </h2>
              </div>
              <div className="section__top__right">
                <div className="section__top__right__item">
                  <div className="bg-item">
                    <input className="top-search" type="search" placeholder="Search Product, Client..." />
                    <span className="btn-search-overlay">
                      <FaSearch />
                    </span>
                  </div>
                </div>
                <div className="section__top__right__item">
                  <form className="bg-item">
                    <label htmlFor="short">Short By:</label>
                    <select name="short" id="short">
                      <option value="type">Type</option>
                      <option value="status">Status</option>
                      <option value="quantity">Quantity</option>
                      <option value="postage">Postage</option>
                    </select>
                  </form>
                </div>
                <div className="section__top__right__item">
                  <button className="btn btn-add">
                    <img src="../images/icons/add.svg" />
                    Upload Product
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

export default ProductTop;
