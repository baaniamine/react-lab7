function Button({ label, variant = 'primary', ...props }) {
  return (
    <button type="button" className={`button button--${variant}`} {...props}>
      {label}
    </button>
  );
}

export default Button;
