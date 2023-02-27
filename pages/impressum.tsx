import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";

export default function Legal() {
  return (
    <div>
      <Layout preview={false}>
        <Head>
          <title>{"Freundeskreis Peutinger Gymnasium | Impressum"}</title>
        </Head>
        <Container>IMPRESSUM</Container>
      </Layout>
    </div>
  );
}
