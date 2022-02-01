
const TopCard = () => {
  return (
    <div className="section__header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="status__card">
              <div className="status__card__title status__card__title--purple">
                <div className="status-title-icon">
                  <img src="../images/icons/status/Graph.svg" />
                </div>
                <h2 className="status-title">Total order</h2>
                <div className="edit-icon">
                  <a href="#">
                    <img src="../images/icons/edit.svg" />
                  </a>
                </div>
              </div>
              <div className="status__card__content">
                <h2 className="status-data">320</h2>
                <ul className="status-text">
                  <li>
                    <span className="status-icon">
                      <img src="../images/icons/upward.svg" />
                    </span>
                  </li>
                  <li>
                    <span>13%</span>
                  </li>
                  <li>
                    <span>+6.5K This Month</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="status__card">
              <div className="status__card__title status__card__title--red">
                <div className="status-title-icon">
                  <img src="../images/icons/status/dollar-circle.svg" />
                </div>
                <h2 className="status-title">Total Sale</h2>
                <div className="edit-icon">
                  <a href="#">
                    <img src="../images/icons/edit.svg" />
                  </a>
                </div>
              </div>
              <div className="status__card__content">
                <h2 className="status-data">$12.5k</h2>
                <ul className="status-text">
                  <li>
                    <span className="status-icon">
                      <img src="../images/icons/upward.svg" />
                    </span>
                  </li>
                  <li>
                    <span>13%</span>
                  </li>
                  <li>
                    <span>+2.5 this Month</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="status__card">
              <div className="status__card__title status__card__title--green">
                <div className="status-title-icon">
                  <img src="../images/icons/status/wallet.svg" />
                </div>
                <h2 className="status-title">Total Profit</h2>
                <div className="edit-icon">
                  <a href="#">
                    <img src="../images/icons/edit.svg" />
                  </a>
                </div>
              </div>
              <div className="status__card__content">
                <h2 className="status-data">$4.8K</h2>
                <ul className="status-text">
                  <li>
                    <span className="status-icon">
                      <img src="../images/icons/upward.svg" />
                    </span>
                  </li>
                  <li>
                    <span>2.6%</span>
                  </li>
                  <li>
                    <span>+7K this Month</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="status__card">
              <div className="status__card__title status__card__title--yellow">
                <div className="status-title-icon">
                  <img src="../images/icons/status/undo.svg" />
                </div>
                <h2 className="status-title">Refunded</h2>
                <div className="edit-icon">
                  <a href="#">
                    <img src="../images/icons/edit.svg" />
                  </a>
                </div>
              </div>
              <div className="status__card__content">
                <h2 className="status-data">32</h2>
                <ul className="status-text">
                  <li>
                    <span className="status-icon">
                      <img src="../images/icons/downward.svg" />
                    </span>
                  </li>
                  <li>
                    <span>2.4%</span>
                  </li>
                  <li>
                    <span>+2K this Month</span>
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
