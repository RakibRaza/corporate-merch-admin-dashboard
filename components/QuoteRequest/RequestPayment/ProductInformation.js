
const ProductInformation = () => {
  return (
    <>
      <div className="content__heading">
        <h2 className="content-title">Product Information</h2>
      </div>
      <div className="product-information__form">
        <form action="" method="post">
          <div className="product-information__form__top">
            <div className="info__group">
              <label className="content-subtitle" htmlFor="product-name">Product Name</label>
              <input type="text" className="form-control" id="product-name" defaultValue="Swag T-Shirt Vol 3 (2021)" />
            </div>
            <div className="info__group">
              <label className="content-subtitle">Price</label>
              <select>
                <option value="">T-Shirt Pricing 03</option>
                <option value="">T-Shirt Pricing 02</option>
                <option value="">T-Shirt Pricing 01</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default ProductInformation;
