import { useRouter } from 'next/router';
import ClientInfo from '../../components/ManageOrder/OrderDetails/ClientInfo';
import DetailsTop from '../../components/ManageOrder/OrderDetails/DetailsTop';
import OrderSummary from '../../components/ManageOrder/OrderDetails/OrderSummary';
import ProductInformation from '../../components/ManageOrder/OrderDetails/ProductInformation';
import Variants from '../../components/ManageOrder/OrderDetails/Variants';
import data from '../../public/data/orders';

const OrderDetails = () => {

  const router = useRouter();
  if (router.isFallback) {
    return (<h1>Loading...</h1>);
  }
  return (
    <div className="main-content">
      <DetailsTop />
      <div className="product-information order-details">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="product-information__content">
                <ProductInformation />
                <Variants />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar__widget">
                <ClientInfo />
                <OrderSummary />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { orderId: "1" }
      },
      {
        params: { orderId: "2" }
      },
    ],
    fallback: true
  }
}

export async function getStaticProps({ params }) {

  const singleProduct = data.find(item => item.id === parseFloat(params.orderId));

  if (!singleProduct?.id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      singleProduct,
    },
  }
}
