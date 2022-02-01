import { MdArrowForward, MdRefresh } from "react-icons/md";
import { FaEllipsisV, FaEnvelope } from "react-icons/fa";

const NewCustomers = () => {
  return (
    <div className="col-md-3">
      <div className="new-customers bg-content">
        <div className="new-customers__top">
          <h2>New Customers</h2>
          <div className="new-customers__top__action">
            <a href="#"> <MdRefresh /> </a>
            <a href="#"> <FaEllipsisV /> </a>
          </div>
        </div>
        <div className="new-customers__content">
          <ul className="new-customers__list">
            <li>
              <div className="new-cutomers__info">
                <div className="info-content">
                  <div className="info-img">
                    <img src="../images/users/3.png" />
                  </div>
                  <div className="info-text">
                    <h2>Aiden Murray</h2>
                    <p>Customer ID<span>#00224</span></p>
                  </div>
                </div>
                <div className="info-contact">
                  <FaEnvelope />
                </div>
              </div>
            </li>
            <li>
              <div className="new-cutomers__info">
                <div className="info-content">
                  <div className="info-img">
                    <img src="../images/users/3.png" />
                  </div>
                  <div className="info-text">
                    <h2>Manuel Morrison</h2>
                    <p>Customer ID<span>#00223</span></p>
                  </div>
                </div>
                <div className="info-contact">
                  <FaEnvelope />
                </div>
              </div>
            </li>
            <li>
              <div className="new-cutomers__info">
                <div className="info-content">
                  <div className="info-img">
                    <img src="../images/users/1.png" />
                  </div>
                  <div className="info-text">
                    <h2>Jennie fowler</h2>
                    <p>Customer ID<span>#00222</span></p>
                  </div>
                </div>
                <div className="info-contact">
                  <FaEnvelope />
                </div>
              </div>
            </li>
            <li>
              <div className="new-cutomers__info">
                <div className="info-content">
                  <div className="info-img">
                    <img src="../images/users/2.png" />
                  </div>
                  <div className="info-text">
                    <h2>Jared Hawkins</h2>
                    <p>Customer ID<span>#00220</span></p>
                  </div>
                </div>
                <div className="info-contact">
                  <FaEnvelope />
                </div>
              </div>
            </li>
            <li>
              <div className="new-cutomers__info">
                <div className="info-content">
                  <div className="info-img">
                    <img src="../images/users/2.png" />
                  </div>
                  <div className="info-text">
                    <h2>Rena Sanders</h2>
                    <p>Customer ID<span>#00220</span></p>
                  </div>
                </div>
                <div className="info-contact">
                  <FaEnvelope />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="new-customers__button">
          <a href="#" className="btn btn-no-outline"> View More Customers <MdArrowForward /> </a>
        </div>
      </div>
    </div>
  )
}

export default NewCustomers;
