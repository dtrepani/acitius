function toggleNav(state = {}, action) {
	switch(action.type) {
	case 'TOGGLE_NAV':
		return Object.assign({}, state, { isClosed: !state.isClosed });
	default:
		return state;
	}
}

export default toggleNav;
