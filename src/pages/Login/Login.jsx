import React, { useEffect, useState, useContext } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { PASSWORD_MIN_LENGTH, EMAIL_REGEX } from '../../utils/constants';
import stockContext from '../../context/stockContext';

export default function Login() {
  const { userInfo, setUserInfo, setIsUserLoggedIn } = useContext(stockContext);

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

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [userInfo, userInfo.lastAcess]);

  const goToStockListPage = () => {
    setUserInfo((prevState) => ({
      ...prevState,
      lastAcess: new Date(),
    }));

    setIsUserLoggedIn(true);

    history.push('/acoes');
  };

  const sendFormInfo = (e) => {
    if (e.key === 'Enter') {
      if (isEmailCorrect && checkPassword) {
        setUserInfo((prevState) => ({
          ...prevState,
          lastAcess: new Date(),
        }));
        history.push('/acoes');

        setIsUserLoggedIn(true);
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
            lastAcess: new Date(),
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
            lastAcess: new Date(),
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
