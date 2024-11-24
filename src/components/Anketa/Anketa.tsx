'use client';
import React, { FormEvent, useState, useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import NameField from './NameField';
import EmailField from './EmailField';
import PhoneField from './PhoneField';
import MessageField from './MessageField';
import { sendFeedback } from '../../app/data/sendFeedback';

export default function Anketa() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [message, setMessage] = useState('');
   const [consent, setConsent] = useState(false);
   const [error, setError] = useState('');
   const [labelText, setLabelText] = useState(
      'Согласие на обработку персональных данных',
   );

   const updateLabelText = () => {
      if (window.innerWidth < 600) {
         setLabelText(
            'Нажимая “Отправить”, Вы даете согласие на обработку персональных данных',
         );
      } else {
         setLabelText('Согласие на обработку персональных данных');
      }
   };

   useEffect(() => {
      updateLabelText();
      window.addEventListener('resize', updateLabelText);

      return () => {
         window.removeEventListener('resize', updateLabelText);
      };
   }, []);

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();

      if (!consent) {
         setError('Необходимо согласие на обработку персональных данных');
         return;
      }

      const feedback: Feedback = {
         phone: phone,
         email: email,
         message: message,
      };

      try {
         const response = await sendFeedback(feedback);
         if (response.ok) {
            alert('Форма успешно отправлена');
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setConsent(false);
            setError('');
         } else {
            console.error('Ошибка при отправке формы');
            setError('Произошла ошибка при отправке формы');
         }
      } catch (error) {
         console.error('Ошибка:', error);
         setError('Произошла ошибка при отправке формы');
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className="flex gap-10 mt-10 flex-col sm:flex-row">
            <NameField value={name} onChange={setName} />
            <EmailField value={email} onChange={setEmail} />
            <PhoneField value={phone} onChange={setPhone} />
         </div>
         <MessageField value={message} onChange={setMessage} />
         <div className="checkbox-data">
            <FormControlLabel
               control={
                  <Checkbox
                     sx={{
                        color: 'white',
                        '&.Mui-checked': { color: 'white' },
                     }}
                     checked={consent}
                     onChange={(e) => setConsent(e.target.checked)}
                     className="checkbox"
                  />
               }
               label={
                  <span className="personal-data lg:text-l text-sm">
                     {labelText}
                  </span>
               }
            />
         </div>
         {error && <p style={{ color: 'red' }}>{error}</p>}
         <div>
            <button
               type="submit"
               className="submit-button rounded-3xl"
            >
               Обсудить проект
            </button>
         </div>
      </form>
   );
}
