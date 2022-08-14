import { NavLink } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import './NotFoundPage.scss';

// eslint-disable-next-line arrow-body-style
const NotFoundPage = () => {
  // const { t } = useTranslation();

  return (
    <div className="NotFoundPage">
      <div className="number">404</div>
      <div className="text">
        <span>Ooops...</span>
        <br />
        page not found
        <p>
          Let&apos;s go <NavLink to="/">Home</NavLink> and try from there
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
