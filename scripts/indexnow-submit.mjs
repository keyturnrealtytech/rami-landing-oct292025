// Submit the site's canonical URLs to IndexNow (Bing, Yandex, et al.).
// Run after any content change: `node scripts/indexnow-submit.mjs`
// IndexNow is a shared protocol — one submission notifies all participating engines.

const HOST = "keyturnrealty.com"
const KEY = "d967638bd6850abe646d5cbed5989ba0"
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

// Every indexable URL on the site.
const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/va-loan-new-construction-san-antonio`,
  `https://${HOST}/first-time-home-buyer-san-antonio`,
]

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: URLS,
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
})

const body = await res.text()
console.log(`IndexNow status: ${res.status} ${res.statusText}`)
if (body) console.log(`Response body: ${body}`)
// 200 = accepted, 202 = accepted (pending validation). Anything else = inspect above.
process.exit(res.status === 200 || res.status === 202 ? 0 : 1)
