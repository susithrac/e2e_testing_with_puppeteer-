import puppeteer from "puppeteer"

let browser: puppeteer.Browser | undefined
let page: puppeteer.Page | undefined

const sleep = async (ms: number) =>
	await new Promise((res) => setTimeout(res, ms))

beforeAll(async () => {
	browser = await puppeteer.launch({
		headless: false
	})
	page = await browser.newPage()

	await page.goto("https://google.com")
}, 30_000)

test("Increments the counter correctly", async () => {
	await sleep(1_000)
	if (!page) {
		throw new Error("Error while loading Puppeteer page")
	}
    const title = await page.title();
    console.log('My First e2e test=>'+title);
    expect(title).toEqual('Google');
}, 30_000)

afterAll(async () => await browser?.close?.())