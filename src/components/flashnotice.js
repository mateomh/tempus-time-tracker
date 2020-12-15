/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import { useEffect } from 'react';
import FlashStyles from '../assets/stylesheets/flashnotice.module.css';

const FlashNotice = props => {
  const { error } = props;

  useEffect(() => {
    if (error !== '') {
      const notice = document.getElementById('notice');
      notice.classList.remove(FlashStyles.Hide);
    }
  });
  if (error !== '') {
    setTimeout(() => {
      const notice = document.getElementById('notice');
      notice.classList.add(FlashStyles.Hide);
    }, 3000);
  }
  return (
    <div id="notice" className={`${FlashStyles.Notice} ${FlashStyles.Hide}`}>
      <p>{error}</p>
    </div>
  );
};

export default FlashNotice;
