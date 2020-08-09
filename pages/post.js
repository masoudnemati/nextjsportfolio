import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: "80vw" }}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, odio
      quos voluptas dolorem nesciunt accusantium placeat, tempore velit expedita
      tenetur aliquam, culpa nisi architecto aperiam ipsum iure natus eius et?
    </p>
  </Layout>
);

export default withRouter(Post);
