import Link from 'next/link';

const DetailsTop = () => {
  return (
    <div className="section__header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section__header__content">
              <div className="section__header__content__left">
                <div className="content__left__item">
                  <div className="product-img">
                    <img src="../../images/product/4.png" alt="" />
                  </div>
                  <div className="product-name">
                    <nav aria-label="breadcrumb">
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link href="/admin/manage-order">
                            <a>Manage Orders</a>
                          </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                          Order Details
                        </li>
                      </ul>
                    </nav>
                    <h2>CM-1304</h2>
                  </div>
                </div>
              </div>
              <div className="section__header__content__right">
                <div className="content__right__item">
                  <span className="btn badge bg-yellow">Awaiting Payment</span>
                </div>
                <div className="content__right__item">
                  <ul className="content__pagination">
                    <li>
                      <a href="#" className="btn btn-link">
                        <img src="../../images/icons/button/left-arrow.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-link">
                        <img src="../../images/icons/button/right-arrow.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsTop;
