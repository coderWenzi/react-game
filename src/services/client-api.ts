import axios from "axios";


export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"40ac030f379f4edfa5463b7409484105"
    },
})