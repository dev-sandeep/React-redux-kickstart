import Axios from 'axios'

function UrlCall() {

    const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US';
    let url = BASE_URL;

    function getCall(url) {
        return new Promise((resolve, reject) => {
            Axios.get(url).then((promise) => {
                resolve(promise.data);
            });
        })
    };

    /* the first call which the system would do */
    function defaultCall() {
        return new Promise((resolve, reject) => {
            getCall(url).then((data) => {
                if (data && data.results) {
                    resolve(data.results);
                }
            });
        })
    }

    return {
        defaultCall,
        // getCustomCall
    }
}

export default UrlCall;