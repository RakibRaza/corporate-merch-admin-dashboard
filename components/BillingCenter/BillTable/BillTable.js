import { useRef } from "react";

const BillTable = () => {
  const inputRef = useRef(null);

  const handleCheck = () => {
    const checkBox = document.getElementsByClassName("table-check");
    const allCheckBox = [...checkBox];

    if (inputRef.current.checked) {
      allCheckBox.forEach(i => i.checked = true);
    } else {
      allCheckBox.forEach(i => i.checked = false);
    }
  }
  return (
    <section className="billing__content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body billing__content__body">
                <div className="billing__content__table">
                  <table className="table-shape">
                    <thead>
                      <tr>
                        <th>
                          <input onClick={handleCheck} ref={inputRef} type="checkbox" />
                        </th>
                        <th>Bill No</th>
                        <th>Client</th>
                        <th>Location</th>
                        <th>Total</th>
                        <th>Shipping Cost</th>
                        <th>Notecard Costs</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="checkbox" className="table-check" />
                        </td>
                        <td>
                          <span className="bill-no">219300100</span>
                        </td>
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
                            <p> <span className="flag-icon flag-icon-fr"></span> France </p>
                          </div>
                        </td>
                        <td>
                          <span className="total">
                            $15,302.00
                          </span>
                        </td>
                        <td>
                          <span className="shipping-cost">
                            $50
                          </span>
                        </td>
                        <td>
                          <span className="notecard-cost">
                            $150
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-yellow">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" className="table-check" />
                        </td>
                        <td>
                          <span className="bill-no">219300100</span>
                        </td>
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
                            <p> <span className="flag-icon flag-icon-us"></span> United States </p>
                          </div>
                        </td>
                        <td>
                          <span className="total">
                            $15,302.00
                          </span>
                        </td>
                        <td>
                          <span className="shipping-cost">
                            $50
                          </span>
                        </td>
                        <td>
                          <span className="notecard-cost">
                            $150
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-green">
                            Paid
                          </span>
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

export default BillTable;
