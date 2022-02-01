
const ProductAnalytics = () => {
  return (
    <div className="col-md-6">
      <div className="product-analytic bg-content">
        <div className="content__top">
          <div className="content__left">
            <h2 className="content-title">Product Analytics</h2>
          </div>
          <div className="content__ritht">
            <select name="month" id="month">
              <option value="this-month">This Month</option>
              <option value="previous-month">Previous Month</option>
              <option value="next-month">Next Month</option>
            </select>
          </div>
        </div>
        <div className="product-analytic__table">
          <table>
            <thead>
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Sold</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="product-title tshirt">
                    Swag T-shirt 2021
                  </span>
                </td>
                <td>
                  <span className="price">$375</span>
                </td>
                <td>
                  <span className="sold">9,221</span>
                </td>
                <td>
                  <span className="total">$3,900</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="product-title hat">
                    Swag Hat
                  </span>
                </td>
                <td>
                  <span className="price">$375</span>
                </td>
                <td>
                  <span className="sold">9,221</span>
                </td>
                <td>
                  <span className="total">$3,900</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="product-title bag">
                    Bag
                  </span>
                </td>
                <td>
                  <span className="price">$375</span>
                </td>
                <td>
                  <span className="sold">9,221</span>
                </td>
                <td>
                  <span className="total">$3,900</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="product-title hoodie">
                    Hoodie
                  </span>
                </td>
                <td>
                  <span className="price">$375</span>
                </td>
                <td>
                  <span className="sold">9,221</span>
                </td>
                <td>
                  <span className="total">$3,900</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="product-title resource">
                    Human Resources
                  </span>
                </td>
                <td>
                  <span className="price">$375</span>
                </td>
                <td>
                  <span className="sold">9,221</span>
                </td>
                <td>
                  <span className="total">$3,900</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProductAnalytics;
