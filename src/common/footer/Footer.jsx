import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="app-footer text-center absolute left-0 right-0 bottom-0 w-full">
      <hr className="separater" />
      <div className="flex justify-center items-center py-2">
        <p className="app-footer-text">
          ReactPlay - The MIT License (MIT) Copyright &copy;
          {new Date().getFullYear()} . Powered by{' '}
          <Link className="text-link-default" to="/tech-stacks">
            Top Notch Tech Stacks
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
