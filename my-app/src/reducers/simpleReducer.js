import {ADD_VALUE, SUBTRACT_VALUE} from '../actions/types';

const initialState = {
	num : 1
}
export default function(state = initialState, action){
 switch (action.type) {
  case ADD_VALUE:
   const incremented = state.num;
   console.log(`New value ${incremented + action.payload}`);
   return incremented + action.payload;

   case SUBTRACT_VALUE:
   return state.num - action.payload;

   case 'undefined':
   return 0;

  default:
   return state.num;
 }
}