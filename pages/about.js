import Layout from "../components/Layout";
import { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/masoudnemati");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();
    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;
    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="About">
        <h3>{user.name}</h3>
        <p>{user.bio}</p>
        <img src={user.avatar_url} alt="atyal" />
      </Layout>
    );
  }
}
