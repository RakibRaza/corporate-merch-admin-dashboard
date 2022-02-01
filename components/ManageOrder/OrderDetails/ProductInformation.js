
const ProductInformation = () => {
  return (
    <>
      <div className="content__heading">
        <h2 className="content-title">Product Information</h2>
      </div>
      <div className="product-list">
        <div className="product-list-table">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Order Date</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="product-name">
                    <img src="../../images/product/4.png" alt="" />
                    <span>Swag T-Shirt Vol 3 (2021)</span>
                  </div>
                </td>
                <td>
                  <span className="order-date">
                    22 October 2021
                  </span>
                </td>
                <td>
                  <span className="quantity">
                    100
                  </span>
                </td>

              </tr>
              <tr>
                <td>
                  <div className="product-name">
                    <img src="../../images/product/2.png" alt="" />
                    <span>Swag T-shirt</span>
                  </div>
                </td>
                <td>
                  <span className="order-date">
                    22 October 2021
                  </span>
                </td>
                <td>
                  <span className="quantity">
                    50
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="product-name">
                    <img src="../../images/product/3.png" alt="" />
                    <span>Swag T-Shirt Vol 2 (2020)</span>
                  </div>
                </td>
                <td>
                  <span className="order-date">
                    22 October 2021
                  </span>
                </td>
                <td>
                  <span className="quantity">
                    100
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ProductInformation;
