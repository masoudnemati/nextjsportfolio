import Layout from "../components/Layout";

const Error = ({ statusCode }) => (
  <Layout title="Error!">
    {statusCode
      ? `امکان بارگزاری وجود ندارد ${statusCode}`
      : `!صفحه مورد نظر پیدا نشد`}
  </Layout>
);

export default Error;
