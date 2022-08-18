import Link from 'next/link'
import { useEffect, useState } from "react";
const axios = require('axios').default;
//import {PrismaClient} from "@prisma/client";
//const prisma = newPrismaClient();

// Components
import Price from "../components/prices"

function Home({price_data}) {

  return (
    <div  className="main-container">

    <div className="sidebar">
      <div className="drip-guy"></div>
    </div>
      <section className="box-row">
        <h1 className="glow-title main">Drip Syndicate Dashboard</h1>
      </section>
      {/* Header is in _app.js*/}

      {/* Section 1 - Prices */}
      <section  className="box-column price-dashboard">
        <div  className="header-h1">
          <h1 className="glow-header">Token Prices</h1>
        </div>
        <div  className="grid-panel-neo">
          {price_data.map(token_info => (<Price token_info={token_info} key={token_info.id}/>))}
        </div>
      </section>
      {/* Section 2 -  DAO Member Breakdown */}
      <section  className="box-column price-dashboard">
        <div  className="header-h1">
          <h1 className="glow-header">R34P DAO Stats</h1>
        </div>
        {/* <div  className="grid-panel-neo">
          {price_data.map(token_info => (<Price token_info={token_info['name']="BR3AP"} key={token_info.id}/>))}
        </div> */}
      
      </section>
      {/* Section 3 -  BR34P Token, Reqs with Citadel */}
      <section  className="">
      </section>
      {/* Section 4 -  DRIP with wallets, max payout, and tax rate */}
      <section  className="">
      </section>
      {/* Section 5 -  DRIP holders with info */}
      <section  className="">
      </section>
      {/* Section 6 -  Breakdown of NDV with indicators */}
      <section  className="">
      </section>
      {/* Section 7 -  Show Deadwallets w/t Health */}
      <section  className="">
      </section>
      {/* Section 8 -  Reward Wallet Payouts */}
      <section  className="">
      </section>
      {/* Section 9 - TBD (MAXIMUM Runway Time)*/}
      <section  className="">
      </section>
      {/* Section 10 -  DCA Goal Calculator */}
      <section  className="">
      </section>
      <footer className="">
      </footer>

    </div>
  )
}
export default Home

// getStaticProps makes this call ON BUILD, which means that the prices will stay static regardless of how many requests made.
// In the future, this will be changed by a script which will make requests every 4-6 hours and upload them to a db, from which
// this application will pull from on each (or for each) request.
export async function getStaticProps() {

  // Prop Array
  let price_data = []

  // DRIP, PIGS, DOGS, REV, GRIM, BR3AP 8606
  const keys = ['11093', '17966', '17965', '17172', '11363', '8606']

  // id=KEY,KEY,KEY,KEY | This could probably be concated automatically in a for loop, but that would be slower
  let cmc_url = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=17965,17966,11093,11363,17172,8606'

  // Request will fail if you do not include the dev_key
  const dev_key = '4221ec1d-66ae-4784-884c-456563308e82'

  // Headers passed in the GET request
  let headers = {'Accepts': 'application/ecmascript', 'X-CMC_PRO_API_KEY': dev_key, 'Accept-Encoding':'deflate, gzip'}

  const res = await fetch(cmc_url, { headers });
  const data = await res.json()

  for(let x = 0; x < keys.length; x++){
    let token_info = {}

    token_info['id'] = x
    token_info['name'] = data.data[keys[x]].symbol

    // Round the Numbers
    token_info['price'] = data.data[keys[x]].quote['USD'].price.toFixed(2)

    token_info['price_change'] = data.data[keys[x]].quote['USD'].percent_change_24h.toFixed(2);

    console.log(token_info)

    // Push token_info object into Prop Array
    price_data.push(token_info)
  }

  return {
    props: { price_data },
  }
}
