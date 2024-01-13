
const initialState={
    problem:null,
    loading:false,
    err:null
}

export const  problemReducer=(state=initialState,action)=>{
     switch(action.type){
     case "PROBLEMREQUEST":
        return{...state,loading:true}

        case "PROBLEMREQUESTSUCCESS":
            return{...state,
                problem:action.payload,loading:false
            }
        case "PROBLEMREQUESTREJECT":

        return{
            ...state,loading:false,err:action.payload
        }

        default:
            return state
     }
     
}