import Axios from 'axios';

function limitString(string, limit) {
    return string.substring(string, limit);
}

export {
    limitString
}