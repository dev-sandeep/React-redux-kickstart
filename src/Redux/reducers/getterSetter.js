const initialState = {
    text: '',
    news: []
}

const getterSetter = (state = initialState, action) => {

    switch (action.type) {
        case "SET_TEXT":
            return {
                ...state, text: action.text
            }
            break;
        case "SET_POST":
            return {
                ...state, news: action.news
            }
            break;
        default:
            return state
    }
}



export default getterSetter;