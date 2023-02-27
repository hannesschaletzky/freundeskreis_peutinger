export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 p-8">
      <div className="flex justify-evenly">
        <div>
          <div>KONTAKT</div>
          <br />
          <p>
            An der Blauen Kappe 10
            <br />
            86152 Augsburg
            <br />
            Telefon: 0821 / 324-18475
            <br />
            Telefax: 0821 / 324-18485
            <br />
            Email:{" "}
            <a href="mailto:thomas-felsenstein@gmx.de">
              thomas-felsenstein@gmx.de
            </a>
          </p>
        </div>
        <div>
          <div>RECHTLICHES</div>
          <br />
          <a href="/datenschutz">{"> "} Datenschutz</a>
          <br />
          <a href="/impressum">{"> "} Impressum</a>
        </div>
      </div>
    </footer>
  );
}
