const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
const readLine = require("readline");

const URL =
  "https://www.amazon.com/Corsair-Wireless-Slipstream-Technology-Certified/dp/B082LVNJ4W/?_encoding=UTF8&_encoding=UTF8&ref_=dlx_gate_sd_dcl_tlt_f7672222_dt_pd_gw_unk&pd_rd_w=hTaLc&content-id=amzn1.sym.108e0d4d-c023-4aaa-8b8a-69f88c793aa4&pf_rd_p=108e0d4d-c023-4aaa-8b8a-69f88c793aa4&pf_rd_r=FWP8PRGGDGDK0FVF3PCG&pd_rd_wg=19Yk6&pd_rd_r=d3cde2a5-3ae9-4f6a-80e5-4c6fd0fe3170";

async function getData() {
  try {
    let { data } = await axios.get(URL);

    const $ = cheerio.load(data);

    const title = $("#title").text();
    const price = $(".a-offscreen").text();
    console.log(title, "and", price);

    // fs.writeFile("newFile.txt", data, (err) => {
    //   console.log(err);
    // });

    // fs.readFile("newFile.txt", "utf8", (err, data) => {
    //   if (err) console.log(err);
    //   if (data) console.log(data.slice(0, 100));
    // });

    // const rl = readLine.createInterface({
    //   input: process.stdin,
    //   output: process.stdout,
    // });

    // rl.question("What is your name", (name) => {
    //   console.log(`Hello ${name}`);
    //   rl.close();
    // });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
getData();
