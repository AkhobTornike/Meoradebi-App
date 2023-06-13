import React from 'react'
import Header from '../Header/Header'

import { Link } from 'react-router-dom';
import { useState } from 'react';

const BuyCart = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvc, setCVC] = useState('');

    const handleCardNumberChange = (e) => {
        const input = e.target.value;
        const numericInput = input.replace(/\D/g, ''); 
        const truncatedInput = numericInput.slice(0, 16); 
        setCardNumber(truncatedInput);
        if (input.length == 16) {
            return true
        } else {
            return false
        }
    };


    const handleExpirationDateChange = (e) => {
        const input = e.target.value;
        const newinput = input
        .replace(/\D/g, '') 
        .slice(0, 4) 
        .replace(/(\d{2})(\d{2})/, '$1/$2'); 
        setExpirationDate(newinput);
    };



    const handleCVCChange = (e) => {
        const input = e.target.value;
        const numericInput = input.replace(/\D/g, ''); // Remove non-numeric characters
        const truncatedInput = numericInput.slice(0, 3); // Limit to 3 characters
        setCVC(truncatedInput);
      };

    
      const formatCVC = () => {
        const hiddenCVC = cvc.replace(/\d/g, '*');
        if (cvc.length === 3) {
          return hiddenCVC;
        }
        return cvc;
      };

      const isFormValid = cardNumber && expirationDate && cvc;

      const handleSubmit = () => {
        if (!cardNumber && !expirationDate && !cvc) {
          alert('Please fill all the fields.');
          setCardNumber('');
          setExpirationDate('');
          setCVC('');
        }
      };

      

  return (
    <>
        <Header/>
        <input 
            type="text" 
            className='cardNumber' 
            placeholder='1122 3344 5566 7788'
            name='cardNumber'
            value={cardNumber}
            onChange={(e) => handleCardNumberChange(e)}
            maxLength={16}
            required
        />
        <input 
            type="text" 
            className='expirationDate' 
            placeholder='DD/MM'
            name='expirationDate'
            value={expirationDate}
            onChange={handleExpirationDateChange}
            maxLength={5}
            required
        />
        <input 
            type="text" 
            className='cvc' 
            placeholder='***'
            name='cvc'
            value={formatCVC()}
            onChange={handleCVCChange}
            maxLength={3}
            required
        />
      {isFormValid ? (
        <Link to="/Browse" className="BackMain">
          <button type="submit">Submit</button>
        </Link>
      ) : (
        <button onClick={handleSubmit} type="button">
            Submit
        </button>
      )} 
        </>
  )
}

export default BuyCart