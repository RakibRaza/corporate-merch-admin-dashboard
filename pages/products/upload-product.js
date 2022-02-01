import Upload from "../../components/Products/UploadProduct/Upload";
import OtherInformation from "../../components/Products/UploadProduct/OtherInformation";
import ProductInformation from "../../components/Products/UploadProduct/ProductInformation";

const UploadProduct = () => {
  return (
    <div className="main-content">
      <Upload />
      <div className="product-information">
        <div className="container-fluid">
          <div className="row">
            <ProductInformation />
            <OtherInformation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadProduct;
