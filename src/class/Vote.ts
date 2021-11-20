import events from "events";
import { Url } from "url";
import express from "express";
let app = express();
class Vote  extends events{
  public url: Url;
  private port: number;
  private token : String;
    constructor(url: Url, port: number , token : String) {
        super();
        this.url = url;
        this.port = port;
        this.token = token;
    }
    public start(callback : CallableFunction = () => {}) {
        let self = this;
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }))
        app.post("/api/hook/vote" ,  async (req, res) => {
            let token = req.header('Authorization');
            if(!token && token != this.token) {
                res.status(401).send({message : "Unauthorized"});
                return;
            }
            self.emit("vote", req.body);
            res.status(200).send({message : "OK"});
        });
        app.listen(this.port , () => { 
            callback();
        })
        return this;
    }
}
module.exports = Vote;