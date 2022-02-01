
const TopCard = () => {
  return (
    <div className="section__header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="status__card">
              <div className="status__card__title status__card__title--color1">
                <div className="status-title-icon">
                  <img src="/images/icons/status/1.svg" />
                </div>
                <h2 className="status-title">Total Clients</h2>
              </div>
              <div className="status__card__content">
                <h2 className="status-data">125</h2>
                <ul className="status-text">
                  <li>
                    <span className="status-icon-bg">
                      <img src="/images/icons/status-up.svg" />
                    </span>
                  </li>
                  <li>
                    <span>1.4%</span>
                  </li>
                  <li>
                    <span>+21 this week</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="status__card">
              <div className="status__card__title status__card__title--color2">
                <div className="status-title-icon">
                  <img src="/images/icons/status/2.svg" />
                </div>
                <h2 className="status-title">Total Products</h2>
              </div>
              <div className="status__card__content">
                <h2 className="status-data">1,215</h2>
                <ul className="status-text">
                  <li>
                    <span className="status-icon-bg">
                      <img src="/images/icons/status-up.svg" />
                    </span>
                  </li>
                  <li>
                    <span>1.4%</span>
                  </li>
                  <li>
                    <span>+21 this week</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="status__card">
              <div className="status__card__title status__card__title--color3">
                <div className="status-title-icon">
                  <img src="/images/icons/status/3.svg" />
                </div>
                <h2 className="status-title">Total Shipments</h2>
              </div>
              <div className="status__card__content">
                <h2 className="status-data">427</h2>
                <ul className="status-text">
                  <li>
                    <span className="status-icon-bg">
                      <img src="/images/icons/status-up.svg" />
                    </span>
                  </li>
                  <li>
                    <span>0.8%</span>
                  </li>
                  <li>
                    <span>+$1,367 this week</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="status__card">
              <div className="status__card__title status__card__title--color4">
                <div className="status-title-icon">
                  <img src="/images/icons/status/4.svg" />
                </div>
                <h2 className="status-title">Total Earning</h2>
              </div>
              <div className="status__card__content">
                <h2 className="status-data">$82.9K</h2>
                <ul className="status-text">
                  <li>
                    <span className="status-icon-bg">
                      <img src="/images/icons/status-up.svg" />
                    </span>
                  </li>
                  <li>
                    <span>31%</span>
                  </li>
                  <li>
                    <span>+$6.8K this week</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCard;
