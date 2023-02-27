import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";

export default function DataPrivacy() {
  return (
    <div>
      <Layout preview={false}>
        <Head>
          <title>{"Freundeskreis Peutinger Gymnasium | Datenschutz"}</title>
        </Head>
        <Container>DATENSCHUTZ</Container>
      </Layout>
    </div>
  );
}
