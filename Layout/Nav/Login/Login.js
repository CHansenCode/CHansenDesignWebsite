import css from "./Login.module.scss";

export const Login = () => {
  return (
    <div className={css.wrapper}>
      <button onClick={(e) => e.preventDefault()}>
        <p>
          <span className={css.log}>Log</span>
          <span className={css.in}>In</span>
        </p>
      </button>
    </div>
  );
};

export default Login;
