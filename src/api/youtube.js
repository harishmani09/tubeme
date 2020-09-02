import axios from 'axios';



const KEY = 'AIzaSyAJyZ9y9rFu_9xyTkTsxse5bv_RUCqwadw';



export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key:KEY

    }

});