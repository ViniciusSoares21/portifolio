import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import style from './Contact.module.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert("Preencha todos os campos");
      return;
    }

    
    /* const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_***", "template_***p4a", templateParams, "dHvEqm1s-*****4q")
    .then((response) => {
      alert("EMAIL ENVIADO COM SUCESSO");
      setName('')
      setEmail('')
      setMessage('')

    }, (err) => {
      console.log("ERRO: ", err)
    }) */

  }

  return (
    <section>
      <NavBar />
      <div className={style.container}>
        <img 
          className={style.title}
          src="https://github.com/SatYu26/SatYu26/raw/master/Assets/Handshake.gif" alt="" />

        <form className={style.form} onSubmit={sendEmail}>
          <input 
            className={style.input}
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          
          <input 
            className={style.input}
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea 
            className={style.textarea}
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className={style.button} type="submit" value="Enviar" />
        </form>
        </div>
      <Footer />
    </section>
  )
}

export default Contact