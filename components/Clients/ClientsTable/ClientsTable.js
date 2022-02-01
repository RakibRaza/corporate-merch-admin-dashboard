
const ClientsTable = () => {
  return (
    <section className="client__content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body client__content__body">
                <div className="client__content__table">
                  <table className="table-shape">
                    <thead>
                      <tr>
                        <th>Client Name</th>
                        <th>Location</th>
                        <th>Manager</th>
                        <th>Users</th>
                        <th>Billing</th>
                        <th>
                          <span className="three-dots">...</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="client-info">
                            <img src="../images/users/1.png" />
                            <div className="client-text">
                              <h2>Maria Roselia</h2>
                              <p>mairarose@vid.io</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="client-location">
                            <h2>Atlanta,</h2>
                            <p> <span className="flag-icon flag-icon-us"></span> United States </p>
                          </div>
                        </td>
                        <td>
                          <div className="client-manager">
                            <a href="#">Ek. Elliot</a>
                          </div>
                        </td>
                        <td>
                          <div className="client-user-contact">
                            <img src="../images/table/user-contact.svg" />
                            <p>4.1K contact</p>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-blue">
                            Add Billing
                          </span>
                        </td>
                        <td>
                          <a className="three-dots" href="#">...</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="client-info">
                            <img src="../images/users/2.png" />
                            <div className="client-text">
                              <h2>Guadalupe Santiago</h2>
                              <p>Gasfs@gmail.com</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="client-location">
                            <h2>LA,</h2>
                            <p><span className="flag-icon flag-icon-us"></span> United States</p>
                          </div>
                        </td>
                        <td>
                          <div className="client-manager">
                            <a href="#">Ek. Elliot</a>
                          </div>
                        </td>
                        <td>
                          <div className="client-user-contact">
                            <img src="../images/table/user-contact.svg" />
                            <p>628 contact</p>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-blue">
                            Add Billing
                          </span>
                        </td>
                        <td>
                          <a className="three-dots" href="#">...</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="client-info">
                            <img src="../images/users/3.png" />
                            <div className="client-text">
                              <h2>Roger Carroll</h2>
                              <p>rogercarrol@gmail.com</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="client-location">
                            <h2>New York,</h2>
                            <p> <span className="flag-icon flag-icon-us"></span>  United States </p>
                          </div>
                        </td>
                        <td>
                          <div className="client-manager">
                            <a href="#">Mable Newton</a>
                          </div>
                        </td>
                        <td>
                          <div className="client-user-contact">
                            <img src="../images/table/user-contact.svg" />
                            <p>502 contact</p>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-blue">
                            Add Billing
                          </span>
                        </td>
                        <td>
                          <a className="three-dots" href="#">...</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="client-info">
                            <img src="../images/users/3.png" />
                            <div className="client-text">
                              <h2>Roger Carroll</h2>
                              <p>rogercarrol@gmail.com</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="client-location">
                            <h2>New York,</h2>
                            <p> <span className="flag-icon flag-icon-us"></span> United States </p>
                          </div>
                        </td>
                        <td>
                          <div className="client-manager">
                            <a href="#">Mable Newton</a>
                          </div>
                        </td>
                        <td>
                          <div className="client-user-contact">
                            <img src="../images/table/user-contact.svg" />
                            <p>502 contact</p>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-blue">
                            Add Billing
                          </span>
                        </td>
                        <td>
                          <a className="three-dots" href="#">...</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsTable;
