import UriCall from './../../ContextApi/UrlCall'
const {
    defaultCall
} = UriCall();

export const setText = text => (
    {
        type: 'SET_TEXT',
        text
    }
);

export const setData = (data, key) => (
    {
        type: 'SET_DATA',
        data,
        key
    }
);

export const setNews = newsData => (
    {
        type: 'SET_POST',
        news: newsData
    }
);

export const ConstantVar = {
    SET_TEXT: 'SET_TEXT',
    SET_POST: 'SET_POST'
}

export const fetchNews = (key) => {
    return dispatch => {
        defaultCall().then((data) => {
            dispatch(setData(data, key));
        });
    }
}