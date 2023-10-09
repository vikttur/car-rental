import css from './Button.module.css';

// const Button = ({ children, handleClick }) => {
const Button = ({ children }) => {
  return (
    // <Button type="button" className={css.btn} onClick={handleClick}>
    <Button type="button" className={css.btn}>
      {children}
    </Button>
  );
};

export default Button;
