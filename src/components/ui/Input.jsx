const Input = ({
  placeholder = '',
  value,
  onChange,
  icon          = null,
  rightElement  = null,
  className     = '',
  ...rest
}) => (
  <div className="relative w-full">
    {/* Left icon */}
    {icon && (
      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
        {icon}
      </span>
    )}

    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={[
        'w-full bg-slate-800/70 border border-slate-700/70 rounded-xl',
        'px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500',
        'focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20',
        'transition-all duration-200',
        icon          ? 'pl-9'  : '',
        rightElement  ? 'pr-10' : '',
        className,
      ].join(' ')}
      {...rest}
    />

    {/* Right element (e.g. clear button) */}
    {rightElement && (
      <span className="absolute right-3 top-1/2 -translate-y-1/2">
        {rightElement}
      </span>
    )}
  </div>
);

export default Input;
