
const TopProducts = () => {
  return (
    <div className="col-md-8">
      <div className="top-product__item bg-content">
        <div className="top-product__title">
          <h2 className="content-title">Top Product</h2>
          <a href="#" className="text-link">View all</a>
        </div>
        <div className="top-product__table">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Change</th>
                <th>Price</th>
                <th>Sold</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="product-title">
                    <img src="../images/product/1.png" />
                    <span>Amazon Echo plus (3nd Gen) - Premium...</span>
                  </div>
                </td>
                <td>
                  <span className="change">
                    <img src="../images/icons/upward.svg" />
                    5.7%
                  </span>
                </td>
                <td>
                  <span className="price">$49</span>
                </td>
                <td>
                  <span className="sold">5,951</span>
                </td>
                <td>
                  <span className="sales">$15,302.00</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="product-title">
                    <img src="../images/product/3.png" />
                    <span>Aedle VK-X - Premium Customisable Wir…</span>
                  </div>
                </td>
                <td>
                  <span className="change"> <img src="../images/icons/downward.svg" /> 11% </span>
                </td>
                <td>
                  <span className="price">$49</span>
                </td>
                <td>
                  <span className="sold">6,643</span>
                </td>
                <td>
                  <span className="sales">$10,331.70</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="product-title">
                    <img src="../images/product/1.png" />
                    <span>Nikon D750 FX-format </span>
                  </div>
                </td>
                <td>
                  <span className="change"> <img src="../images/icons/upward.svg" /> 1.7% </span>
                </td>
                <td>
                  <span className="price">$49</span>
                </td>
                <td>
                  <span className="sold">4,609</span>
                </td>
                <td>
                  <span className="sales">$7,715.89</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="product-title">
                    <img src="../images/product/4.png" />
                    <span>Minimalist wireless headphone</span>
                  </div>
                </td>
                <td>
                  <span className="change"> <img src="../images/icons/upward.svg" />  7.0% </span>
                </td>
                <td>
                  <span className="price">$49</span>
                </td>
                <td>
                  <span className="sold">5,002</span>
                </td>
                <td>
                  <span className="sales">$9,917.45</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="product-title">
                    <img src="../images/product/4.png" />
                    <span>Shinobi watch 2 - Cream white</span>
                  </div>
                </td>
                <td>
                  <span className="change"> <img src="../images/icons/downward.svg" />  17% </span>
                </td>
                <td>
                  <span className="price">$49</span>
                </td>
                <td>
                  <span className="sold">7,545</span>
                </td>
                <td>
                  <span className="sales">$8,466.02</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="product-title">
                    <img src="../images/product/4.png" />
                    <span>Polaroid Pronto 600</span>
                  </div>
                </td>
                <td>
                  <span className="change"> <img src="../images/icons/upward.svg" />  9.7% </span>
                </td>
                <td>
                  <span className="price">$49</span>
                </td>
                <td>
                  <span className="sold">4,714</span>
                </td>
                <td>
                  <span className="sales">$1,302.00</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TopProducts;
