# testproject1

Wegwerf-Testprojekt von **More BrAIns** (BI Samurai GmbH). Es dient als
Referenz dafür, wie sich statische Kundenseiten ohne Azure ausliefern lassen.

**Live:** https://pascalkteam.github.io/testproject1/

## Wie das Deployment funktioniert

`next build` erzeugt dank `output: "export"` einen rein statischen Ordner
`out/`. Der Workflow `.github/workflows/deploy.yml` baut diesen bei jedem Push
auf `main` und lädt ihn per `actions/deploy-pages` zu GitHub Pages hoch — ohne
`gh-pages`-Branch und ohne langlebiges Secret (OIDC über `id-token: write`).

Drei Einstellungen sind nicht optional, wenn die Seite unter
`https://<user>.github.io/<repo>/` liegt:

| Einstellung | Warum |
| --- | --- |
| `basePath: "/testproject1"` | Ein Projekt-Pages-Site liegt nicht auf der Domain-Wurzel; ohne das zeigen alle internen Links ins Leere. |
| `assetPrefix: "/testproject1/"` | Gleiches Problem für die `/_next/`-Chunks. |
| `trailingSlash: true` | Jede Route wird als `index.html` abgelegt, damit Deep Links einen Reload überstehen. |

Dazu kommt `touch out/.nojekyll` im Workflow: ohne diese Datei schickt Pages die
Ausgabe durch Jekyll, das jeden Ordner mit führendem Unterstrich verwirft — also
genau `_next/`.

## Einmalige Repo-Einstellungen

- Das Repository muss **public** sein (GitHub Pages ist auf dem Free-Plan nur
  für öffentliche Repos verfügbar).
- Settings → Pages → Source auf **GitHub Actions** stellen, falls der Schritt
  `configure-pages` fehlschlägt.

## Grenzen

Kein Server: kein Login, keine Datenbank, keine API Routes, keine Server
Actions. Die Dateien liegen auf GitHub-Infrastruktur, nicht in der Schweiz.
Sobald ein Projekt serverseitige Logik oder Schweizer Datenhaltung braucht,
gehört es auf einen App Service.

## Lokal

```bash
npm install
npm run dev     # http://localhost:3000/testproject1
npm run build   # erzeugt out/
```
