#!/usr/bin/env node

const axios = require('axios');
//const chalk = require('chalk');

const Chalk = import("chalk").then(m=>m.default);
const url = "https://api.ipify.org?format=json";

async function main(){
    const chalk = (await Chalk)
    axios({
        method: 'get',
        url: url,
        headers: { 'Accept': 'application/json' }, // this api needs this header set for the request
      }).then(res => {
        const ip = res.data.ip
        log = chalk.green(`${ip}`)
        for (let i = 0; i < 1; i++) { 
          console.log(log)
        }
      }).catch(err => {
        const log = chalk.red(err) // we set the color red here for errors.
        console.log(log)
      })
}

main()
