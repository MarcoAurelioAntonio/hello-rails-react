import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  message,
  messageStatus,
  getMessage,
} from '../redux/greeting.js';

const Greeting = () => {
  const randomMessage = useSelector(message);
  const status = useSelector(messageStatus);
  const dispatch = useDispatch();

  const handleRandomMessage = () => {
    dispatch(getMessage());
  };

  useEffect(() => {
    setTimeout(() => {
      if (randomMessage.length === 0) dispatch(getMessage());
    }, 2000);
  }, [dispatch]);

  return (
    <>
      {status === 'loading' ? (
        <h1>Loading...</h1> 
      ) : (
        <div className="container">
          <h1>{randomMessage}</h1>
          <button onClick={handleRandomMessage}>
            Next Greeting
          </button>
        </div>
      )}
    </>
  );  
};

export default Greeting;