import React from 'react';
import { connect } from 'react-redux';
import Nav from '../components/index';

const mapStateToProps = (state = { isClosed: false }) => {
	return { isClosed: state.isClosed };
};

const NavContainer = connect(mapStateToProps)(Nav);
