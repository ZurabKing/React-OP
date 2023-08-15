import React from 'react';
import './Authorization.scss'
import authorizationImg from '../../assets/img/Programming-pana.png'
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import login from '../../assets/img/icons/at-sign.svg'
import password from '../../assets/img/icons/lock.svg'
import eye from '../../assets/img/icons/eye 2.svg'
import hideEye from '../../assets/img/icons/hideEye.svg'
import gosuslugi from '../../assets/img/госуслуги logo.png'
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import logoCB from '../../assets/img/icons/logo CB.svg'
import close from '../../assets/img/icons/close.svg'
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import { Auth } from '../../context/context';
import axios from 'axios';
import { apiUrl } from '../../api/ApiService';

const Authorization = () => {
  let [showPassword, setShowPassword] = React.useState(false)
  let {setIsAuth} = React.useContext(Auth)
  const [loginData, setLoginData] = React.useState({
    email: '',
    password: ''
  })
  
  let modal = React.useRef(null)
  
  function showModal(e) {
    e.preventDefault()
    modal.current.style.top = '40px'

    setTimeout(() => {
      document.querySelector('.authorization_img').style.visibility = 'hidden'
    }, 200);

  }
  
  function hideModal() {
    modal.current.style.top = '150%'
    document.querySelector('.authorization_img').style.visibility = 'visible'
  }

  function formSubmitHandler(e) {
    e.preventDefault()
  }

  function logIn() {
    let userData = {
      email: loginData.email,
      password: loginData.password
    }
    axios.post(`${apiUrl}/api/v1/auth/login`, userData)
      .then(d => {
        document.cookie = `token=${d.data.access_token}; max-age=3000000000`;
        setIsAuth(true)
      })
      .catch(error => {
        alert('Неверные данные')
      })
  }

  function showPasswordFunction() {
    setShowPassword(!showPassword)
  }
  
  return (
    <div className='authorization'>
      <img src={authorizationImg} className='authorization_img' alt="img" />
     
      <div className="authorization-block">
        <h2>Вход в Аккаунт</h2>
        <form onSubmit={e => formSubmitHandler(e)} className="authorization-form">
          
          <label htmlFor="login">
            <img className='icon login' src={login} alt="login" />
            <Input onChange={e => setLoginData({...loginData, email: e.target.value})} id='login' type='text' placeholder='email' />
          </label>
          
          <label htmlFor="password">
            <img className='icon password' src={password} alt="password" />
            <Input
              onChange={e => setLoginData({...loginData, password: e.target.value})}
              type={showPassword ? 'text' : 'password'}
              placeholder='password' />
            <img onClick={showPasswordFunction} className='icon eye' src={showPassword ? hideEye : eye} alt="eye" />
          </label>
          
          <div className="remember">
            <label htmlFor="checkbox">
              <input id='checkbox' type='checkbox'/>
              <span></span>
              Запомнить меня
            </label>
            <Link to="/forgot-password" className='forgot-password'>Забыли пароль?</Link>
          </div>
          <Button onClick={logIn} buttonColor='black'>Войти</Button>

          <a href='https://futurecode.p.rnds.pro/auth/authorize?client_id=SMg-polcb0Ic39oAHhs9xDCtYY1dhSHaZMkYLyIGtE0&response_type=code&scope=openid%20fullname%20birthdate%20gender%20mobile%20snils%20inn%20id_doc%20email&redirect_uri=https://crm.kod06.ru/auth/gosuslugi&provider=esia_oauth&state=1a73f168-4485-11ed-b878-0242ac120002' className="signIn_gosuslugi">



            <img src={gosuslugi} alt="ГосУслуги" />
          </a>
          {/* <Link to="/my-page" className='forgot-password_link restore-password' buttonColor='black'>Войти</Link> */}
        </form>

        <div className="privacy-policy">
          <p className='copyright'>© 2021-2023 ООО «AIS». Все права защищены.</p>
          <p className='site-rules'>
            <a onClick={e => showModal(e)} href="/">Правила сайта</a>
            <span> | </span>
            <a onClick={e => showModal(e)} href="/">Политика конфиденциальности</a>
          </p>
        </div>
      </div>

      <Modal modal={modal}>
        <div className="modal-body">
          <img src={logoCB} alt="logoCB" />
          <div onClick={hideModal} className="close">
            <img src={close} alt="close" />
          </div>

          <PrivacyPolicy />
        </div>
      </Modal>

    </div>
  );
};

export default Authorization;