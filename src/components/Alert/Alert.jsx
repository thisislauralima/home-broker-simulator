import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import stockContext from '../../context/stockContext';
import './alert.css';

export default function Alert({ message }) {
  const {
    setErrorMessage,
  } = useContext(stockContext);

  const closeAlert = () => {
    setErrorMessage('');
  };

  return (
    <div id="alert-container">
      <div id="all-error-messages">
        <div>
          <span>Erro</span>
          <div>
            <span>Verifique: </span>
            <span id="error-message">{ message }</span>
          </div>
        </div>
        <button onClick={ closeAlert } id="alert-btn" type="button">X</button>
      </div>
    </div>
  );
}
Alert.propTypes = {
  message: PropTypes.string.isRequired,
};
