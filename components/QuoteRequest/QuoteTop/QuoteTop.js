import { FaSearch } from "react-icons/fa";

const QuoteTop = () => {
  return (
    <div className="section__header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section__top">
              <div className="section__top__left">
                <h2 className="title">
                  Quote Request
                  <span>(241)</span>
                </h2>
              </div>
              <div className="section__top__right">
                <div className="section__top__right__item">
                  <form className="bg-item">
                    <input type="search" name="search" id="search" placeholder="Search ..." />
                    <span className="btn-search-overlay">
                      <FaSearch />
                    </span>
                  </form>
                </div>
                <div className="section__top__right__item">
                  <form className="bg-item">
                    <label>Short By:</label>
                    <select>
                      <option value="color">Color</option>
                      <option value="type">Size</option>
                      <option value="quantity">Quantity</option>
                    </select>
                  </form>
                </div>
                <div className="section__top__right__item">
                  <button className="btn btn-add">
                    <img src="../images/icons/add-circle.svg" />
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

export default QuoteTop;
