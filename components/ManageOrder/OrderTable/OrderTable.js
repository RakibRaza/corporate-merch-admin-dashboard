import { FaEdit, FaTrashAlt } from "react-icons/fa";

const OrderTable = () => {
  return (
    <section className="manage-order__content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body manage-order__content__body">
                <div className="manage-order__content__table">
                  <table>
                    <thead>
                      <tr>
                        <th>#Order Id</th>
                        <th>Client Name</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="product-title">
                            #2410-21
                          </span>
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
                          <div className="product-title">
                            <img src="../images/table/3.png" />
                            <span>Swag T-Shirt Vol 3 (2021)</span>
                          </div>
                        </td>
                        <td>
                          <span className="quantity">5,951</span>
                        </td>
                        <td>
                          <span className="badge bg-purple">
                            In-production
                          </span>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#">
                              <FaEdit className="edit" />
                            </a>
                            <a href="#">
                              <FaTrashAlt className="trash" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="product-title">
                            #2410-21
                          </span>
                        </td>
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
                          <div className="product-title">
                            <img src="../images/table/3.png" />
                            <select name="multiple-item" id="multiple-item" >
                              <option value="">Multiple item</option>
                              <option value="1">T-shirt</option>
                              <option value="2">T-shirt</option>
                            </select>
                          </div>
                        </td>
                        <td>
                          <span className="quantity">500</span>
                        </td>
                        <td>
                          <span className="badge bg-yellow">
                            Awaiting Payment
                          </span>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#">
                              <FaEdit className="edit" />
                            </a>
                            <a href="#">
                              <FaTrashAlt className="trash" />
                            </a>
                          </div>
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

export default OrderTable;
