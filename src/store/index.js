import {createStore} from 'redux';



const iniState = {value: 0 , showCounter: false};

const counterReducer = (state = iniState, action) => {

if(action.type === "increase"){
    return{...state,value: state.value + action.payload};
};

if(action.type === "decrease"){
    return{...state,value: state.value - action.payload};
}

if (action.type === 'toggleCounter'){
   return {...state, showCounter: !state.showCounter};
}



    return state
};


// app init -> run store->action(non)->counter reducer->0
// user click increase -> action(increase)->counter reducer ->1
const store = createStore(counterReducer);
export default store;
