const BUILT_AT = new Date().toISOString().slice(0, 10);

export default function Home() {
  return (
    <main className="wrap">
      <span className="badge">More BrAIns · Referenzprojekt</span>

      <h1>Statisches Hosting ohne Azure</h1>
      <p className="lede">
        Diese Seite ist ein Next.js Static Export, der bei jedem Push auf{" "}
        <code>main</code> automatisch nach GitHub Pages ausgeliefert wird. Sie
        existiert, um genau einen Punkt zu beweisen: der Auslieferungsweg
        funktioniert.
      </p>

      <h2>Was hier nachgewiesen wird</h2>
      <div className="card">
        <ul className="checks">
          <li>
            <span className="tick">✓</span>
            <span>
              <code>output: &quot;export&quot;</code> erzeugt reines
              HTML/CSS/JS in <code>out/</code> — kein Node-Server nötig.
            </span>
          </li>
          <li>
            <span className="tick">✓</span>
            <span>
              <code>basePath</code> und <code>assetPrefix</code> setzen den
              Repo-Namen vor jeden absoluten Pfad, weil ein Projekt-Pages-Site
              unter <code>/testproject1/</code> liegt und nicht auf der Domain-Wurzel.
            </span>
          </li>
          <li>
            <span className="tick">✓</span>
            <span>
              <code>trailingSlash</code> legt jede Route als{" "}
              <code>index.html</code> ab — Deep Links überleben damit ein Reload.
            </span>
          </li>
          <li>
            <span className="tick">✓</span>
            <span>
              <code>.nojekyll</code> im Artefakt — ohne die Datei verwirft Pages
              den Ordner <code>_next/</code> und jedes Asset läuft ins 404.
            </span>
          </li>
          <li>
            <span className="tick">✓</span>
            <span>
              GitHub Actions baut und deployt über{" "}
              <code>actions/deploy-pages</code>, ohne Deploy-Branch und ohne
              langlebiges Secret.
            </span>
          </li>
        </ul>
      </div>

      <h2>Eckdaten</h2>
      <div className="card">
        <dl className="facts">
          <div>
            <dt>Repository</dt>
            <dd>PascalKTeam/testproject1</dd>
          </div>
          <div>
            <dt>Live-URL</dt>
            <dd>https://pascalkteam.github.io/testproject1/</dd>
          </div>
          <div>
            <dt>Framework</dt>
            <dd>Next.js 16 App Router · Static Export</dd>
          </div>
          <div>
            <dt>Build-Datum</dt>
            <dd>{BUILT_AT}</dd>
          </div>
        </dl>
      </div>

      <h2>Wo die Grenze liegt</h2>
      <div className="card">
        <p className="caveat">
          GitHub Pages hat keinen Server: kein Login, keine Datenbank, keine API
          Routes, keine Server Actions. Und die Dateien liegen auf
          GitHub-Infrastruktur, nicht in der Schweiz. Für Broschüren-Seiten ist
          das der günstigste Weg — sobald ein Kunde Schweizer Datenhaltung oder
          serverseitige Logik gekauft hat, gehört das Projekt auf einen App
          Service.
        </p>
      </div>

      <footer>
        More BrAIns — BI Samurai GmbH · Testprojekt, kein Kundenprodukt.
      </footer>
    </main>
  );
}
