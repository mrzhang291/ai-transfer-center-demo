# AI Transfer Center Demo

A local, read-only demo for generating store-to-store replenishment and transfer recommendations.

## Run locally

```powershell
python -m http.server 4173
```

Open `http://127.0.0.1:4173/` in a browser.

## Included scope

- Store and SKU operating snapshot used by the demo
- Transfer allocation, source safety-stock protection, route consolidation, and approval workflow
- A static browser application with no backend writeback
- A focused arrival-risk regression test

`fr-demo-data.js` is a local demo snapshot. It does not contain database credentials and the browser application does not connect to a database.

## Validate

```powershell
node --check app.js
node arrival-risk.test.js
```

## Rebuild the demo snapshot

`build-fr-demo-data.js` reads its database connection settings only from environment variables. It is not needed to run the demo.
