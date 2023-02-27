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
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <p>
          Die Nutzung unserer Website ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
          der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
          lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.
        </p>
        <p>
          Widerspruch Werbe-Mails <br />
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
          Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
          Werbung und Informationsmaterialien wird hiermit widersprochen. Die
          Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
          Falle der unverlangten Zusendung <br />
          von Werbeinformationen, etwa durch Spam-E-Mails, vor.
        </p>
        <p>
          Quelle:{" "}
          <a href="http://www.e-recht24.de" target="_blank">
            e-recht24.de
          </a>
        </p>
      </Layout>
    </div>
  );
}
