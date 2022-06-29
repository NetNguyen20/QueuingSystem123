const initialState = {
    list: ['Listening to music'],
    selectedId:null
}

interface AddHobbyAction {
    type: "ADD_HOBBY",
    payload:string
}


type Action = AddHobbyAction 

const userReducer = (state = initialState, action: Action) => {
    switch (action.type){
        case "ADD_HOBBY":{
            const newList = [...state.list];
            newList.push(action.payload);

            return {
                ...state,
                list: newList
            }
        }
        default:
            return state;
    }
}

export default userReducer;