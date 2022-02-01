import Client from "../../components/Products/AssignClient/Client";
import ClientTop from "../../components/Products/AssignClient/ClientTop";
import { useRouter } from 'next/router';
import ProductInformation from "../../components/Products/AssignClient/ProductInformation";
import Variants from "../../components/Products/AssignClient/Variants";
import Loader from '../../components/Common/Loader/Loader';
import data from '../../public/data/clients';

const AssignClient = ({ client }) => {

  const router = useRouter();
  if (router.isFallback) {
    return (<Loader />);
  }
  return (
    <div className="main-content">
      <ClientTop />
      <div className="product-information">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="product-information__content">
                <ProductInformation />
                <Variants />
              </div>
            </div>
            <div className="col-lg-4">
              <Client />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssignClient;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { clientId: "1" }
      },
      {
        params: { clientId: "2" }
      },
      {
        params: { clientId: "3" }
      }
    ],
    fallback: true
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  const client = data.find(item => item.id === parseFloat(params.clientId));

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
