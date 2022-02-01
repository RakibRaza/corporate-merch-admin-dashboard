
const ClientInfo = () => {
  return (
    <div className="sidebar__widget__item">
      <div className="widget__top">
        <h2 className="widget__title">Client Info</h2>
      </div>
      <div className="widget__body">
        <div className="widget__info">
          <label>Client Name</label>
          <div className="client-info-box">
            <img src="../../images/users/1.png" alt="" />
            <div className="client-text">
              <h2>Maria Roselia</h2>
            </div>
          </div>
        </div>
        <div className="widget__info">
          <label htmlFor="client-address">Address</label>
          <input type="text" id="client-address" defaultValue="150 Moore Avenue, Valley View, Texas" />
        </div>
      </div>
    </div>
  )
}

export default ClientInfo;
