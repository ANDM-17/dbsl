<div align="center">
  <h1>dbsl The Official dbsl.site API</h1>
    <p>
    <a href="https://www.npmjs.com/package/dbsl"><img src="https://img.shields.io/npm/v/dbsl?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/dbsl"><img src="https://img.shields.io/npm/dt/dbsl?maxAge=3600" alt="npm downloads" /></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/dbsl"><img src="https://nodei.co/npm/dbsl.png?downloads=true&stars=true" alt="npm banner"></a>
  </p>
</div>

## Installation
<h2> npm : </h2>

```sh
npm install dbsl
```
 <h2> yarn : </h2>

```sh
yarn add dbsl
```

## Pages Setup :

```js
const DBSL = require("dbsl");
const client = new Client(); // - - discord.js v12 or v13 - -

new DBSL.AutoPoster({client : client , token : "dbslToken"}).start(() => {
  console.log("[DBSL] Successfully"); // - - Automatically checkes every (2) minute - -
  });
let dbsl = new DBSL.Vote({url: "Domain Url", token: "dbslToken", port: 8080}).start(() => {
  console.log("[DBSL] Successfully started votes");
});

dbsl.on("vote" , (vote) => {
  console.log(vote); /* OUTPUT: 
    {
      id: "123456789012345678", <-- USER ID
      votes : AllVotesCounts
    }
*/
});

```
