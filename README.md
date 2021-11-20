<div align="center">
  <h1>dbsl The Official dbsl.site API</h1>
    <p>
    <a href="https://www.npmjs.com/package/anime-api"><img src="https://img.shields.io/npm/v/dbsl?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/anime-api"><img src="https://img.shields.io/npm/dt/dbsl?maxAge=3600" alt="npm downloads" /></a>
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
const client = new Client();//Discord.js v12 or v13

new DBSL.AutoPoster({client : client , token : "dbslToken"}).start(() => {
  console.log("Servers Count Has Posted Success")///interval every 2 minutes
  });
let dbsl = new DBSL.Vote({url : "Domain Url", token : "dbslToken" , port : 8080}).start(() => {
  console.log("Vote Has Started Success");
});

dbsl.on("vote" , (vote) => {
  console.log(vote);// outbut : {id : "userId" , votes : AllVotesCounts}
});

```
