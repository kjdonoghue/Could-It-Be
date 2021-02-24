const initalState = {
   step: 0,
   purpose: 0,

}

const reducer = (state = initalState, action) => {
    if (action.type == "ON_INCREMENT_STEPS") {
        return {...state,
            step: state.step + 1       
        }

    } else if(action.type == "ON_DECREMENT_STEPS") {
        return {...state,
            step: state.step - 1       
        }

    } else if(action.type == "ON_UPDATE_PURPOSE") {
        return{...state,
            purpose: action.payload
        }
    }
    
    
    
    else {
        return state
    }

        
}

export default reducer