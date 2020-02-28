import UriCall from './../../ContextApi/UrlCall'
const {
    defaultCall
} = UriCall();

export const setText = text => ({
    type: 'SET_TEXT',
    text
});

export const setNews = newsData => ({
    type: 'SET_POST',
    news: newsData
});

export const ConstantVar = {
    SET_TEXT: 'SET_TEXT',
    SET_POST: 'SET_POST'
}

export const fetchNews = () => {
    console.log('fetching news ...');
    return (dispatch) => {
        return defaultCall().then((data) => {
            dispatch(setNews(data));
        });
    }
}