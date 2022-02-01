import { FaPlus, FaTimes } from "react-icons/fa";

const OtherInformation = () => {
  return (
    <div className="col-lg-4">
      <div className="sidebar__widget">
        <div className="sidebar__widget__item">
          <div className="widget__top">
            <h2 className="widget__title">Other Infromation</h2>
          </div>
          <div className="widget__body">
            <div className="widget__info">
              <label>Brand</label>
              <select>
                <option value="">Select Brand</option>
                <option value="a">A</option>
                <option value="b">B</option>
              </select>
            </div>
            <div className="widget__info">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label>Category</label>
                <a href="#" className="text-theme">
                  <span>+ Add Category</span>
                </a>
              </div>
              <select>
                <option value="">Choose Category</option>
                <option value="men">Men</option>
                <option value="woment">Women</option>
              </select>
            </div>
            <div className="widget__info">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label>Collection</label>
                <a href="#" className="text-theme">
                  <span>+ Add Into Collection</span>
                </a>
              </div>
              <select>
                <option value="">Choose Collection</option>
                <option value="roger">Roger Carroll</option>
                <option value="guadalipe">Guadalupe Santiago</option>
              </select>
              <span>
                Note : Add this product to a collection so it’s easy to find in your store.
              </span>
            </div>
            <hr />
            <div className="widget__info">
              <label>Tags</label>
              <ul className="widget__tags__list">
                <li>
                  <div className="tag-item">
                    <span>T-Shirt </span>
                    <a href="#"> <FaTimes /> </a>
                  </div>
                </li>
                <li>
                  <div className="tag-item">
                    <span>Swag </span>
                    <a href="#">
                      <FaTimes />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="tag-item">
                    <span>Black </span>
                    <a href="#"> <FaTimes /> </a>
                  </div>
                </li>
                <li>
                  <div className="tag-item">
                    <span>Email </span>
                    <a href="#"> <FaTimes /> </a>
                  </div>
                </li>
                <li>
                  <div className="tag-item">
                    <span>Compaign </span>
                    <a href="#"> <FaTimes /> </a>
                  </div>
                </li>
                <li>
                  <a href="#" className="text-theme">
                    <span>+ Add More</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherInformation;
