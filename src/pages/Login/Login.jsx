import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PASSWORD_MIN_LENGTH, EMAIL_REGEX } from '../../utils/constants';
import stockContext from '../../context/stockContext';
import Alert from '../../components/Alert/Alert';

export default function Login() {
  const {
    userInfo,
    setUserInfo,
    setUserEmail,
    setErrorMessage,
    errorMessage,
  } = useContext(stockContext);

  const history = useHistory();

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [btnColor, setBtnColor] = useState('bg-my-custom-orange-ligher');

  const isEmailCorrect = EMAIL_REGEX.test(userInfo.email);
  const checkPassword = userInfo.password.length >= PASSWORD_MIN_LENGTH;

  useEffect(() => {
    // localStorage.setItem('userInfo', JSON.stringify(userInfo));
    if (isEmailCorrect && checkPassword) {
      setIsBtnDisabled(false);
      setBtnColor('bg-my-custom-orgen-darker');
    } else {
      setIsBtnDisabled(true);
      setBtnColor('bg-my-custom-orange-ligher');
    }
  }, [setIsBtnDisabled, userInfo.email, userInfo.password]);

  const saveLoginDateAndAuthentication = () => {
    setUserInfo((prevState) => ({
      ...prevState,
      lastAcess: new Date(),
    }));
    localStorage.setItem('isUserLoggedIn', true);
  };

  const validateFormFields = () => {
    if (!isEmailCorrect) {
      setErrorMessage('O campo email não está no formato adequado');
      return false;
    }
    if (!checkPassword) {
      setErrorMessage('A senha precisa ter no mínimo 6 caracteres');
      return false;
    }
    saveLoginDateAndAuthentication();

    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    setUserEmail(userInfo.email);
    setErrorMessage('');
    return 'tudo ok';
  };

  const isAnyFormInputEmpty = () => {
    if (!userInfo.email) {
      setErrorMessage('Preencha o campo de email.');
      return false;
    }
    if (!userInfo.password) {
      setErrorMessage('Preencha o campo de senha.');
      return false;
    }
    return 'tudo ok';
  };

  const goToStocksQuotes = () => {
    if (isAnyFormInputEmpty() === 'tudo ok'
    && validateFormFields() === 'tudo ok') {
      history.push('/acoes');
    }
  };

  const validateForm = (e) => {
    if (e.key === 'Enter') {
      goToStocksQuotes();
    }
  };

  return (
    <div className="flex h-screen min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="m-auto p-8 rounded bg-custom-white max-w-md w-full space-y-8">
        {
            errorMessage && (
              <Alert message={ errorMessage } />
            )
          }
        <div>
          <h2 className="bg-mt-6 text-center text-3xl font-light text-my-custom-blue">Acesse sua conta</h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                onChange={ ({ target: { value } }) => setUserInfo((prevState) => ({
                  ...prevState,
                  email: value,
                  lastAcess: new Date(),
                })) }
                onKeyUp={ (e) => validateForm(e) }
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Senha (no mínimo 6 caracteres)"
                onKeyUp={ (e) => validateForm(e) }
                onChange={ ({ target: { value } }) => setUserInfo((prevState) => ({
                  ...prevState,
                  password: value,
                  lastAcess: new Date(),
                })) }
              />
            </div>
          </div>
          <div>
            <button
              className={ `group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${btnColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500` }
              disabled={ isBtnDisabled }
              type="button"
              onClick={ goToStocksQuotes }
            >
              Avançar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
