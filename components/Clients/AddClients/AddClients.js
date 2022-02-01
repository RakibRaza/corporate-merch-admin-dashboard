
const AddClients = () => {
  return (
    <div className="section__header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section__top">
              <div className="section__top__left">
                <h2 className="title">
                  Clients
                  <span>(152)</span>
                </h2>
              </div>
              <div className="section__top__right">
                <div className="section__top__right__item">
                  <button className="btn btn-add">
                    <img src="../images/icons/add.svg" />
                    Add New Clients
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddClients;
