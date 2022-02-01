
import Link from 'next/link';
import { FaArrowAltCircleUp, FaEye } from "react-icons/fa";

const Upload = () => {
  return (
    <div className="section__header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section__header__content">
              <div className="section__header__content__left">
                <div className="content__left__item">
                  <div className="product-img">
                    <img src="../../images/icons/add_photo_alternate.svg" />
                  </div>
                  <div className="product-name">
                    <nav aria-label="breadcrumb">
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link href="/admin/products">
                            <a>Product</a>
                          </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                          Upload Product
                        </li>
                      </ul>
                    </nav>
                    <h2>Product name</h2>
                  </div>
                </div>
              </div>
              <div className="section__header__content__right">
                <div className="content__right__item mr-0">
                  <a href="#" className="btn btn-theme">
                    <FaArrowAltCircleUp />
                    <span>Upload Product</span>
                  </a>
                </div>
                <div className="content__right__item">
                  <a href="#" className="btn btn-preview">
                    <FaEye />
                    <span>Preview</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload;
