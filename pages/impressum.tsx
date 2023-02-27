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
        <div>
          <h3>Impressum</h3>
          <br />
          <p>
            <strong>Freundeskreis Peutinger-Gymnasium</strong>
          </p>
          <p>
            An der Blauen Kappe 10
            <br />
            86152 Augsburg
          </p>
          <br />
          <p>
            <strong>Telefon:</strong>
            <br />
            +49 (0)821 / 32 41 84 78
            <br />
            <strong>Telefax:</strong>
            <br />
            +49 (0)821 / 32 41 84 85
          </p>
          <br />
          <p>
            <strong>
              Gemeinschaftlich vertretungsbefugt:
              <br />
              1. Vorsitzender: Thomas Felsenstein
            </strong>
            <br />
            Springergässchen 12
            <br />
            86150 Augsburg
          </p>
          <p>
            <strong>Telefon:</strong>
            <br />
            +49 (0)8 21/59 98 811
            <br />
            <strong>E-Mail</strong>:<br />
            <a href="mailto:thomas-felsenstein@gmx.de">thomas.felsenstein@f</a>
            <a href="mailto:thomas.felsenstein@freundeskreis-peutinger.de">
              reundeskreis-peutinger.de
            </a>
          </p>
          <br />
          <p>
            <strong>
              2. Vorsitzende: Ursula
              <br />
              Hellmann
            </strong>
            <br />
            An der Blauen Kappe 16
            <br />
            86152
            <br />
            Augsburg
          </p>
          <p>
            <strong>Telefon:</strong>
            <br />
            +49 (0)8 21 / 36 65 3<br />
            <strong>E-Mail</strong>:<br />
            <a href="mailto:hellmann.ulli@t-online.de">u</a>
            <a href="mailto:ulli.hellmann@freundeskreis-peutinger.de">
              lli.hellmann@freundeskreis-peutinger.de
            </a>
          </p>
          <p>
            <strong>Streitschlichtung</strong>
            <br />
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbr/aucherschlichtungsstelle
            teilzunehmen.
          </p>
          <p>
            <strong>Haftung für Inhalte</strong>
            <br />
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
            <br />
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
          <p>
            <strong>Haftung für Links</strong>
            <br />
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
            <br />
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
          <p>
            <strong>Urheberrecht</strong>
            <br />
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbr/eitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebr/auch gestattet.
            <br />
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
          <p>
            Quelle:{" "}
            <a href="http://www.e-recht24.de" target="_blank">
              e-Recht24.de
            </a>
          </p>
          <br />
          <p>
            <strong>
              Das Impressum gilt für:{" "}
              <a href="http://www.freundeskreis-peutinger.de">
                www.freundeskreis-peutinger.de
              </a>
              <br />
              Email:{" "}
            </strong>
            <a href="mailto:post@freundeskreis-peutinger.de">
              post@freundeskreis-peutinger.de
            </a>
          </p>
          <br />
          <p>
            <strong>Registergericht</strong>: Amtsgericht Augsburg
            <br />
            <strong>Registernummer</strong>: VR 567
          </p>
        </div>
      </Layout>
    </div>
  );
}
