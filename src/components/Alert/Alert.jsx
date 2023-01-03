import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import stockContext from '../../context/stockContext';
import closeIcon from '../../images/orange-close-icon.png';

export default function Alert({ message }) {
  const {
    setErrorMessage,
  } = useContext(stockContext);

  const closeError = () => {
    setErrorMessage('');
  };

  return (
    <div className="w-full bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
      <div className="flex justify-between">
        <p className="font-bold">Aviso</p>
        <button className="w-5" onClick={ closeError } type="button">
          <img src={ closeIcon } alt="close-error-msg" />
        </button>
      </div>
      <p>{ message }</p>
    </div>
  );
}
Alert.propTypes = {
  message: PropTypes.string.isRequired,
};
