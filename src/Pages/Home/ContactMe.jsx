
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactMe() {
  const form = useRef();
  const [isSuccessToastVisible, setIsSuccessToastVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rc3oa6y', 'template_79x347g', form.current, 'sCdfoIIqcUwcoCtDr')
      .then((result) => {
        console.log(result.text);
        toast("Message envoyé");

        setIsSuccessToastVisible(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contactez-nous</h2>
        <p className="text-lg">
          Pour n'importe quel besoin, envoyez-nous un message
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail}className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Prénom</span>
            <input
              type="text"
              className="contact--input text-md"
              name="from_prenom"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Nom</span>
            <input
              type="text"
              className="contact--input text-md"
              name="from_nom"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="from_email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Téléphone</span>
            <input
              type="number"
              className="contact--input text-md"
              name="from_tele"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Service</span>
          <select id="choose-topic" className="contact--input text-md" name="service">
  <option  value="">Choisir un service</option>
  <option>Développement</option>
  <option>Cloud Computing</option>
  <option>Implémentation réseau</option>
</select>

        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            name="message"
            placeholder="Ecrivez votre message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">J'accepte tous les droits </span>
        </label>
        <div>
        <input type="submit" className="btn btn-primary contact--form--btn"  value="Envoyer" />
          </div>
      </form>
      {isSuccessToastVisible && (
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      )}
    </section>
  );
}
