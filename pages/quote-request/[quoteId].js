import { useRouter } from "next/router";
import Loader from "../../components/Common/Loader/Loader";
import Client from "../../components/QuoteRequest/RequestPayment/Client";
import PaymentTop from "../../components/QuoteRequest/RequestPayment/PaymentTop";
import ProductInformation from "../../components/QuoteRequest/RequestPayment/ProductInformation";
import Variants from "../../components/QuoteRequest/RequestPayment/Variants";
import data from '../../public/data/clients';

const RequestPayment = ({ client }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (<Loader />);
  }
  return (
    <div className="main-content">
      <PaymentTop />
      <div className="product-information">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="product-information__content">
                <ProductInformation />
                <Variants />
              </div>
            </div>
            <Client />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestPayment;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { quoteId: "1" }
      },
      {
        params: { quoteId: "2" }
      },
      {
        params: { quoteId: "3" }
      }
    ],
    fallback: true
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  const client = data.find(item => item.id === parseFloat(params.quoteId));

  if (!client?.id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      client
    }
  }
}
