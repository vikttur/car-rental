import css from './Button.module.css';

const Button = ({ children, handleClick }) => {
  return (
    <Button type="button" className={css.btn} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default Button;
