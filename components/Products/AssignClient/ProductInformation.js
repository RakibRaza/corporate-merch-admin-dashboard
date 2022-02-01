import { FaPlus } from "react-icons/fa";

const ProductInformation = () => {
  return (
    <>
      <div className="content__heading">
        <h2 className="content-title">Product Information</h2>
      </div>
      <div className="product-information__form">
        <div className="info__group">
          <label className="content-subtitle" htmlFor="product-name">Product Name</label>
          <input type="text" className="form-control" id="product-name" defaultValue="Swag T-Shirt Vol 3 (2021)" disabled />
        </div>
        <div className="info__group">
          <label className="content-subtitle">Color</label>
          <ul className="color__list">
            <li>
              <a href="#" className="btn btn-rounded">
                <FaPlus />
                <span>Add Color</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProductInformation;
