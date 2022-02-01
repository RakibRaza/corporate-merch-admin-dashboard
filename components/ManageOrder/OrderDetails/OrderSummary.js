
const OrderSummary = () => {
  return (
    <div className="sidebar__widget__item mt-5">
      <div className="widget__top">
        <h2 className="widget__title">
          Order Summary
          <span>(3)</span>
        </h2>
      </div>
      <div className="widget__body">
        <div className="widget__order">
          <div className="order-img">
            <img src="../../images/product/4.png" alt="" />
          </div>
          <div className="order-info">
            <div className="order-info-top">
              <h2 className="order-title">Swag T-shirt Vol 3 ...</h2>
              <p>VK-X-100A; Metallic Silver</p>
            </div>
            <div className="order-info-price">
              <p>
                <span className="order-quantity">x100</span>
                <span className="order-price">$15,302.00</span>
              </p>
            </div>
          </div>
        </div>
        <div className="widget__order">
          <div className="order-img">
            <img src="../../images/product/cap.png" alt="" />
          </div>
          <div className="order-info">
            <div className="order-info-top">
              <h2 className="order-title">Swag Hat</h2>
              <p>VK-X-100A; Metallic Silver</p>
            </div>
            <div className="order-info-price">
              <p>
                <span className="order-quantity">x50</span>
                <span className="order-price">$15,302.00</span>
              </p>
            </div>
          </div>
        </div>
        <div className="widget__calculation">
          <ul className="order__calculation__list">
            <li>
              <div className="cal-item">
                <h3>Subtotal</h3>
                <p>$15,302.00</p>
              </div>
            </li>
            <li>
              <div className="cal-item">
                <h3>Shipping fee</h3>
                <p>$52.00</p>
              </div>
            </li>
            <li>
              <div className="cal-item">
                <h3>Tax</h3>
                <p>$15.00</p>
              </div>
            </li>
            <li>
              <div className="cal-item">
                <h3>Total</h3>
                <p>$15,302.00</p>
              </div>
            </li>
            <li>
              <div className="cal-item">
                <p>Amount to be paid</p>
                <p>$15,417.00</p>
              </div>
            </li>
          </ul>
        </div>
        <a href="#" className="btn btn-theme w-100">
          <span>Send Payment Request</span>
        </a>
      </div>
    </div>
  )
}

export default OrderSummary;
