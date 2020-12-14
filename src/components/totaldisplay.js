/* eslint-disable arrow-body-style */
import { useStore } from 'react-redux';
import DisplayStyles from '../assets/totaldisplay.module.css';

const TotalDisplay = () => {
  const store = useStore();
  const { sessionUser } = store.getState();

  return (
    <div className={DisplayStyles.Display}>
      <p className={DisplayStyles.Text}>
        {sessionUser.name}
        &rsquo;s&nbsp;
        total time for All categories
      </p>
      <p className={DisplayStyles.Number}>1169 hours</p>
    </div>
  );
};

export default TotalDisplay;
