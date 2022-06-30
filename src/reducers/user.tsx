const initialState = {
    list: ['Account User'],
    selectedId:null
}

interface AddUserAction {
    type: "ADD_USER",
    payload:string
}


type Action = AddUserAction 

const userReducer = (state = initialState, action: Action) => {
    switch (action.type){
        case "ADD_USER":{
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