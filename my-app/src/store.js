
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
	
	
const initialState = {};
const middleware = [thunk];
const store = createStore(
	rootReducer,
	initialState, 
	applyMiddleware(...middleware)
	);

console.log("Store test", store.getState());

export default store;

/*
compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)*/