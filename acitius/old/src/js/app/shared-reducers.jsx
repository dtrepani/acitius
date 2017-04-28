import { createReducer } from 'js/helpers';
import { TOGGLE_NAV } from 'data/action-types';

export function toggleNav(state = { isClosed: false }, action) {
	if(action.type === TOGGLE_NAV) {
		return Object.assign({}, state, { isClosed: !state.isClosed });
	}

	return state;

	// return {
	// 	...state,
	// 	isClosed: !state.isClosed
	// };
}

// export const toggleNav = createReducer(toggleNav, {
// 	TOGGLE_NAV: toggleNavAction
// });
