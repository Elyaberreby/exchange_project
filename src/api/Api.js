import axios from "axios";


const URI = "http://apilayer.net/api/live?access_key=3c81786f9b3d2e267f40d08af97b97f2"

export const getCoinListApi = async (cb,dafault)=>{
    const res = await axios.get(URI)
    if(dafault){
        //TODO fix total amount 
        cb(Object.keys(res.data.quotes).filter(([k,v])=>dafault.includes(k.substr(3))))
    }else{
        cb(res.data.quotes)

    }
}