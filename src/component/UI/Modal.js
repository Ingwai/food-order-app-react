import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

// żeby stworzyć modal musimy też w pliku index.html nad rootem dodać np. <div id="overlays"></div>

const Backdrop = props => {
	return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = props => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById('overlays');
const Modal = props => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
		</Fragment>
	);
};

export default Modal;
