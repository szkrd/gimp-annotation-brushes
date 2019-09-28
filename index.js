const puppeteer = require('puppeteer')
const express = require('express')
const config = require('./config.json')
const app = express()
const serverOnly = Array.from(process.argv).includes('--server-only')
const port = parseInt(process.env.PORT, 10) || config.port || 3000
let server = null

app.get('/', (req, res) => {
  let { text, color, shadow } = req.query
  text = text || 'X'
  color = color || 'black'
  shadow = shadow || 'transparent'
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <style type="text/css">
    html, body { margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; font-size: 65px; color: ${color}; }
    div { width: 64px; height: 64px; border-right: 1px solid black; border-bottom: 1px solid black; text-align: center; display: flex; align-items: center; justify-content: center; }
    div span { display: block; height: 55px; line-height: 60px; text-shadow: 0 0 1px ${shadow},0 0 1px ${shadow}; }
  </style>
</head>
<body><div><span>${text}</span></div></body>
</html>`)
})

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

;(async () => {
  server = app.listen(port, () => console.log(`Listening for self on port ${port}!`))
  if (serverOnly) {
    return
  }
  await sleep(2000)
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  console.log('Making screenshots.')
  for (let i = 0; i < config.queue.length; i++) {
    const { text, color, name, shadow } = config.queue[i]
    const target = `output/${name}.png`.replace(/%C/g, color)
    await page.goto(`http://localhost:${port}?text=${text}&color=${color}&shadow=${shadow}`)
    await page.screenshot({
      path: target,
      omitBackground: true,
      clip: { x: 0, y: 0, width: 64, height: 64 }
    })
    console.log(target)
  }
  await browser.close()
  server.close()
  console.log('Done.')
})()
