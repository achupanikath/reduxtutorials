import {ADD_VALUE} from './types';

export default function simpleAction () {
	return ({
				type: ADD_VALUE,
				payload: 5
			});
}



