import { connect } from 'react-redux';
import ToggleNav from '../toggle-nav';
import { toggleNav } from 'js/app/shared-actions';

const mapDispatchToProps = dispatch => {
	return {
		onToggleClick: () => {
			dispatch(toggleNav());
		}
	};
};

export default connect(null, mapDispatchToProps)(ToggleNav);
