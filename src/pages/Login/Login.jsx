import React, { useEffect, useState, useContext } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { PASSWORD_MIN_LENGTH, EMAIL_REGEX } from '../../utils/constants';
import stockContext from '../../context/stockContext';

export default function Login() {
  const { userInfo, setUserInfo } = useContext(stockContext);
  const history = useHistory();
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [isAlertDisplayed, setIsAlertDisplayed] = useState(false);

  const isEmailCorrect = EMAIL_REGEX.test(userInfo.email);
  const checkPassword = userInfo.password.length >= PASSWORD_MIN_LENGTH;

  useEffect(() => {
    if (isEmailCorrect && checkPassword) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [setIsBtnDisabled, userInfo.email, userInfo.password]);

  const goToStockListPage = () => {
    setUserInfo((prevState) => ({
      ...prevState,
      lastAcess: new Date(),
    }));

    history.push('/acoes');
  };

  const sendFormInfo = (e) => {
    if (e.key === 'Enter') {
      if (isEmailCorrect && checkPassword) {
        history.push('/acoes');
      } else {
        setIsAlertDisplayed(true);
      }
    }
  };

  return (
    <form>
      {
          isAlertDisplayed
        && (
        <Alert severity="error">
          <AlertTitle>Erro</AlertTitle>
          Verifique:
          {' '}
          <strong>Email ou senha incorretos</strong>
        </Alert>
        )
      }
      <label htmlFor="emailInput">
        Email
        <input
          onChange={ ({ target: { value } }) => setUserInfo((prevState) => ({
            ...prevState,
            email: value,
          })) }
          onKeyUp={ (e) => sendFormInfo(e) }
          type="text"
          placeholder="E-mail"
        />
      </label>
      <label htmlFor="passwordInput">
        Senha (no mínimo 6 caracteres)
        <input
          type="password"
          placeholder="Senha"
          onKeyUp={ (e) => sendFormInfo(e) }
          onChange={ ({ target: { value } }) => setUserInfo((prevState) => ({
            ...prevState,
            password: value,
          })) }
        />
      </label>
      <button
        disabled={ isBtnDisabled }
        type="button"
        onClick={ goToStockListPage }
      >
        Acessar

      </button>
    </form>
  );
}
