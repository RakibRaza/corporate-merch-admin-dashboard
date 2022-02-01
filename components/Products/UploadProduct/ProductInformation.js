import { FaPlus, FaTrashAlt } from "react-icons/fa";
import Editor from "./Editor";

const ProductInformation = () => {

  return (
    <div className="col-lg-8">
      <div className="product-information__content">
        <div className="content__heading">
          <h2 className="content-title">Product Information</h2>
        </div>

        <div className="product-information__form">
          <form>
            <div className="product-information__form__top">
              <div className="info__group">
                <label className="content-subtitle" htmlFor="product-name">Product Name</label>
                <input type="text" className="form-control" id="product-name" placeholder="Shirt, t-shirts, etc." />
              </div>
              <div className="info__group">
                <label className="content-subtitle" >Price</label>
                <select>
                  <option value="">T-Shirt Pricing 03</option>
                  <option value="">T-Shirt Pricing 02</option>
                  <option value="">T-Shirt Pricing 01</option>
                </select>
              </div>
            </div>
            <div className="product-information__form__top">
              <div className="info__group">
                <label className="content-subtitle" htmlFor="product-sku">SKU</label>
                <input type="text" className="form-control" id="product-sku" placeholder="Eg. 12345abcd" />
              </div>
              <div className="info__group">
                <label className="content-subtitle">Decoration Method</label>
                <select>
                  <option value="">Choose Method</option>
                  <option value="">T-Shirt Pricing 03</option>
                  <option value="">T-Shirt Pricing 02</option>
                  <option value="">T-Shirt Pricing 01</option>
                </select>
              </div>
            </div>
            <div className="info__group">
              <label className="content-subtitle">Color</label>
              <ul className="color__list">
                <li>
                  <span className="color-item bg-yellow"></span>
                </li>
                <li>
                  <span className="color-item bg-blue"></span>
                </li>
                <li>
                  <span className="color-item bg-green"></span>
                </li>
                <li>
                  <span className="color-item bg-java"></span>
                </li>
                <li>
                  <a href="#" className="text-theme"> <span> + Add More</span> </a>
                </li>
              </ul>
            </div>
            <div className="info__group">
              <h2 className="content-title mb-8">Description</h2>
              <Editor />
            </div>
          </form>
        </div>
        <div className="product-information__form">
          <form>
            <div className="info__group">
              <label className="content-subtitle">Images</label>
              <div className="product__images">
                <div className="product__images__item">
                  <div className="item-img">
                    <img src="../../images/product/product-img.png" />
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="product__images__item">
                  <div className="upload__image">
                    <label htmlFor="upload-img1">
                      <img src="../../images/icons/upload-img.svg" />
                      <span> Upload image..</span>
                    </label>
                    <input type="file" id="upload-img1" />
                  </div>
                </div>
                <div className="product__images__item">
                  <div className="upload__image">
                    <label htmlFor="upload-img2">
                      <img src="../../images/icons/upload-img.svg" />
                      <span> Upload image..</span>
                    </label>
                    <input type="file" id="upload-img2" />
                  </div>
                </div>
                <div className="product__images__item">
                  <div className="upload__image">
                    <label htmlFor="upload-img3">
                      <img src="../../images/icons/upload-img.svg" />
                      <span> Upload image..</span>
                    </label>
                    <input type="file" id="upload-img3" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="content-title">Varients</h2>
          <a href="#" className="btn btn-trash">
            <FaTrashAlt />
          </a>
        </div>
        <div className="product-information__table">
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="info__group">
                    <label>Product Name</label>
                    <div className="product-info">
                      <img src="../../images/product/Img-placeholder.svg" />
                      <span>Product</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="info__group">
                    <label>Size</label>
                    <select>
                      <option value="">-</option>
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
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" placeholder="00" id="quantity" />
                  </div>
                </td>
                <td>
                  <div className="info__group">
                    <button type="submit">
                      <FaPlus />
                      <span>ADD</span>
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="info__group">
                    <label>Product Name</label>
                    <div className="product-info">
                      <img src="../../images/product/Img-placeholder.svg" />
                      <span>Product</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="info__group">
                    <label>Size</label>
                    <select>
                      <option value="">-</option>
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
                    <label htmlFor="quantity2">Quantity</label>
                    <input type="number" placeholder="0" id="quantity2" />
                  </div>

                </td>
                <td>
                  <div className="info__group">
                    <button type="submit">
                      <FaPlus />
                      <span>ADD</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>

                  <div className="info__group">
                    <label>Product Name</label>
                    <div className="product-info">
                      <img src="../../images/product/Img-placeholder.svg" />
                      <span>Product</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="info__group">
                    <label>Size</label>
                    <select>
                      <option value="">-</option>
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
                    <label htmlFor="quantity3">Quantity</label>
                    <input type="number" placeholder="54" id="quantify3" />
                  </div>

                </td>
                <td>
                  <div className="info__group">
                    <button type="submit">
                      <FaPlus />
                      <span> ADD</span>
                    </button>
                  </div>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="btn btn-dashed" type="submit">
          <FaPlus />
          <span>Add New Varient</span>
        </button>
        <div className="product-save">
          <h2 className="content-subtitle">Saved on system 5 mins ago</h2>
          <div className="buttons__group">
            <a href="#" className="btn btn-trash">
              <FaTrashAlt />
            </a>
            <a href="#" className="btn btn-theme">
              <FaPlus />
              <span>Save Products</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInformation;
