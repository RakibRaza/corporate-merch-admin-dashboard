import { FaEdit, FaForward, FaPlusCircle, FaTrashAlt } from "react-icons/fa";

const ProductTable = () => {
  return (
    <section className="product__content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body product__content__body">
                <div className="product__content__table">
                  <table className="table-shape">
                    <thead>
                      <tr>
                        <th>Product SKU</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Assigned Client</th>
                        <th>Quantity</th>
                        <th>Product Details</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="product-sku">
                            CM101
                          </span>
                        </td>
                        <td>
                          <div className="product-title">
                            <img src="../images/table/1.png" />
                            <span>Swag T-Shirt 2021</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-blue">
                            Swag T-shirt
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
                          <span className="quantity">
                            5,951
                          </span>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaPlusCircle className="plus" /> </a>
                            <a href="#"> <FaForward className="forward" /> </a>
                          </div>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaEdit className="edit" /> </a>
                            <a href="#"> <FaTrashAlt className="trash" /> </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="product-sku">
                            CM102
                          </span>
                        </td>
                        <td>
                          <div className="product-title">
                            <img src="../images/table/2.png" />
                            <span>Swag T-Shirt 2021</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-blue">
                            Swag T-shirt
                          </span>
                        </td>
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
                          <span className="quantity">
                            150
                          </span>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaPlusCircle className="plus" /> </a>
                            <a href="#"> <FaForward className="forward" /> </a>
                          </div>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaEdit className="edit" /> </a>
                            <a href="#"> <FaTrashAlt className="trash" /> </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="product-sku">
                            CM103
                          </span>
                        </td>
                        <td>
                          <div className="product-title">
                            <img src="../images/table/3.png" />
                            <span>Swag T-Shirt 2021</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-blue">
                            Swag T-shirt
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
                          <span className="quantity">
                            2,000
                          </span>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaPlusCircle className="plus" /> </a>
                            <a href="#"> <FaForward className="forward" /> </a>
                          </div>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaEdit className="edit" /> </a>
                            <a href="#"> <FaTrashAlt className="trash" /> </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="product-sku">
                            CM104
                          </span>
                        </td>
                        <td>
                          <div className="product-title">
                            <img src="../images/table/2.png" />
                            <span>Swag T-Shirt 2021</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-blue">
                            Swag T-shirt
                          </span>
                        </td>
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
                          <span className="quantity">
                            150
                          </span>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaPlusCircle className="plus" /> </a>
                            <a href="#"> <FaForward className="forward" /> </a>
                          </div>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaEdit className="edit" /> </a>
                            <a href="#"> <FaTrashAlt className="trash" /> </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="product-sku">
                            CM105
                          </span>
                        </td>
                        <td>
                          <div className="product-title">
                            <img src="../images/table/3.png" />
                            <span>Swag T-Shirt 2021</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-blue">
                            Swag T-shirt
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
                          <span className="quantity">
                            2,000
                          </span>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaPlusCircle className="plus" /> </a>
                            <a href="#"> <FaForward className="forward" /> </a>
                          </div>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaEdit className="edit" /> </a>
                            <a href="#"> <FaTrashAlt className="trash" /> </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="product-sku">
                            CM104
                          </span>
                        </td>
                        <td>
                          <div className="product-title">
                            <img src="../images/table/2.png" />
                            <span>Swag T-Shirt 2021</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-blue">
                            Swag T-shirt
                          </span>
                        </td>
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
                          <span className="quantity">
                            150
                          </span>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaPlusCircle className="plus" /> </a>
                            <a href="#"> <FaForward className="forward" /> </a>
                          </div>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaEdit className="edit" /> </a>
                            <a href="#"> <FaTrashAlt className="trash" /> </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="product-sku">
                            CM105
                          </span>
                        </td>
                        <td>
                          <div className="product-title">
                            <img src="../images/table/3.png" />
                            <span>Swag T-Shirt 2021</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-blue">
                            Swag T-shirt
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
                          <span className="quantity">
                            2,000
                          </span>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaPlusCircle className="plus" /> </a>
                            <a href="#"> <FaForward className="forward" /> </a>
                          </div>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaEdit className="edit" /> </a>
                            <a href="#"> <FaTrashAlt className="trash" /> </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="product-sku">
                            CM106
                          </span>
                        </td>
                        <td>
                          <div className="product-title">
                            <img src="../images/table/2.png" />
                            <span>Swag T-Shirt 2021</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-blue">
                            Swag T-shirt
                          </span>
                        </td>
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
                          <span className="quantity">
                            150
                          </span>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaPlusCircle className="plus" /> </a>
                            <a href="#"> <FaForward className="forward" /> </a>
                          </div>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaEdit className="edit" /> </a>
                            <a href="#"> <FaTrashAlt className="trash" /> </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="product-sku">
                            CM106
                          </span>
                        </td>
                        <td>
                          <div className="product-title">
                            <img src="../images/table/3.png" />
                            <span>Swag T-Shirt 2021</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-blue">
                            Swag T-shirt
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
                          <span className="quantity">
                            2,000
                          </span>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaPlusCircle className="plus" /> </a>
                            <a href="#"> <FaForward className="forward" /> </a>
                          </div>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaEdit className="edit" /> </a>
                            <a href="#"> <FaTrashAlt className="trash" /> </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="product-sku">
                            CM106
                          </span>
                        </td>
                        <td>
                          <div className="product-title">
                            <img src="../images/table/2.png" />
                            <span>Swag T-Shirt 2021</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-blue">
                            Swag T-shirt
                          </span>
                        </td>
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
                          <span className="quantity">
                            150
                          </span>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaPlusCircle className="plus" /> </a>
                            <a href="#"> <FaForward className="forward" /> </a>
                          </div>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaEdit className="edit" /> </a>
                            <a href="#"> <FaTrashAlt className="trash" /> </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="product-sku">
                            CM106
                          </span>
                        </td>
                        <td>
                          <div className="product-title">
                            <img src="../images/table/3.png" />
                            <span>Swag T-Shirt 2021</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-blue">
                            Swag T-shirt
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
                          <span className="quantity">
                            5,951
                          </span>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaPlusCircle className="plus" /> </a>
                            <a href="#"> <FaForward className="forward" /> </a>
                          </div>
                        </td>
                        <td>
                          <div className="action-group">
                            <a href="#"> <FaEdit className="edit" /> </a>
                            <a href="#"> <FaTrashAlt className="trash" /> </a>
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

export default ProductTable;
