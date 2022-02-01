import { FaPlus } from "react-icons/fa";

const Variants = () => {
  return (
    <>
      <h2 className="content-title">Varients</h2>
      <div className="product-information__table">
        <table>
          <tbody>
            <tr>
              <td>
                <div className="info__group">
                  <label>Product Name</label>
                  <div className="product-info">
                    <img src="../../images/product/5.png" alt="" />
                    <span>Swag T-shirt</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="info__group">
                  <label>Size</label>
                  <select>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="2XL">2XL</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="info__group">
                  <label>Gender</label>
                  <select>
                    <option value="male">M</option>
                    <option value="female">F</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="info__group">
                  <label>Color</label>
                  <select>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="info__group">
                  <label>Quantity</label>
                  <select>
                    <option value="50">50</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="info__group">
                  <label htmlFor="price1">Price</label>
                  <input type="text" className="price" id="price1" defaultValue="$2.67" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="info__group">
                  <label>Product Name</label>
                  <div className="product-info">
                    <img src="../../images/product/5.png" alt="" />
                    <span>Swag T-shirt</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="info__group">
                  <label>Size</label>
                  <select>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="2XL">2XL</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="info__group">
                  <label>Gender</label>
                  <select>
                    <option value="male">M</option>
                    <option value="female">F</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="info__group">
                  <label>Color</label>
                  <select>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="info__group">
                  <label>Quantity</label>
                  <select>
                    <option value="50">50</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="info__group">
                  <label htmlFor="price2">Price</label>
                  <input type="text" className="price" id="price2" defaultValue="$2.67" />
                </div>

              </td>
            </tr>
            <tr>
              <td>
                <div className="info__group">
                  <label>Product Name</label>
                  <div className="product-info">
                    <img src="../../images/product/5.png" alt="" />
                    <span>Swag T-shirt</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="info__group">
                  <label>Size</label>
                  <select>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="2XL">2XL</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="info__group">
                  <label>Gender</label>
                  <select>
                    <option value="male">M</option>
                    <option value="female">F</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="info__group">
                  <label>Color</label>
                  <select>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="info__group">
                  <label>Quantity</label>
                  <select>
                    <option value="50">50</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </td>
              <td>
                <div className="info__group">
                  <label htmlFor="price3">Price</label>
                  <input type="text" className="price" id="price3" defaultValue="$2.67" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn btn-dashed" type="submit">
        <FaPlus />
        <span> Add New Varient</span>
      </button>
    </>
  )
}

export default Variants;
