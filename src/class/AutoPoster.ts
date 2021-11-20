
class AutoPost {
    private token : string;
    public id : String;
    private client : any;
    constructor(settings : any) {
    if(!settings.token) throw new Error("[DBSL API] : Token is Unavailable ");
     this.token = settings.token;
     if(!settings.client) throw new Error("[DBSL API] : Client is Unavailable ");
     this.client = settings.client;
     if(!settings.client.user.id) throw new Error("[DBSL API] : ID is Unavailable ");
     this.id = settings.client.user.id;
    }
     async start(callback : CallableFunction) {
        let self = this;
        setInterval(async function(){
           callback();
           await self._post();
        }, 60000 * 2);
    }
     async _post() {
        try{
        const fetch = require('node-fetch');
        const url = `https://dbsl.site/api/bots/stats`;
        const headers = {
            "Authorization": `${this.token}`,
            "Content-Type": "application/json",
            "serverCount" : this.client.guilds.cache.size,
        };
         await fetch(url, {
            method: "POST",
            headers: headers,
        });
        return true;
    }catch(e){
       console.log(e);
    }  
}
}
module.exports = AutoPost;