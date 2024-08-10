


const reducer = (action, state) => {

    switch(action){
        case action.type === "increment":
            return(state = count++);
        case action.type === "decrement":
            return(state = count--);
        case action.type === "reset":
            return(state = 0);        
        default:
            return(state);        
    }
    
}

export default reducer;


