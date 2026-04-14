const variantClasses = {
  primary:   'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20',
  secondary: 'bg-slate-700/80 hover:bg-slate-600 text-slate-200 border border-slate-600/60',
  ghost:     'bg-transparent hover:bg-slate-800 text-slate-400 hover:text-slate-200',
  danger:    'bg-red-600/90 hover:bg-red-500 text-white shadow-lg shadow-red-600/20',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs gap-1.5',
  md: 'px-4 py-2   text-sm gap-2',
  lg: 'px-6 py-3   text-base gap-2',
};

const Button = ({
  children,
  variant  = 'primary',
  size     = 'md',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ...rest
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={[
      'inline-flex items-center justify-center font-medium rounded-xl',
      'transition-all duration-200 active:scale-95',
      'disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100',
      variantClasses[variant] || variantClasses.primary,
      sizeClasses[size]       || sizeClasses.md,
      className,
    ].join(' ')}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
