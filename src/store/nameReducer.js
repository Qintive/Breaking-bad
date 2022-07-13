const SET_DATA = 'SET_DATA';

const initialState = {
    data: [],
    name: null,
    char_id: null,
    birthday: null,
    nickname: null,

    
}

const nameReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_DATA:

            return {
                ...state,
                data: action.data,
                name: action.name,
                birthday: action.birthday,
                nickname: action.nickname,
                status: action.status,
                portrayed: action.portrayed,
                char_id: action. char_id
                

            }

        default:
            return { ...state }
    }
}

export const setData = (data) => ({ type: SET_DATA, data: data })


export default nameReducer;