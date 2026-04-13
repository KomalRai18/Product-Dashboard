import { FiAlertCircle, FiRefreshCw, FiWifi } from 'react-icons/fi';
import Button from '../ui/Button';

const ErrorState = ({
  message = 'Something went wrong while loading products.',
  onRetry,
}) => (
  <div className="flex flex-col items-center justify-center py-24 gap-5 text-center">
    {/* Icon ring */}
    <div className="relative">
      <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
        <FiAlertCircle className="w-9 h-9 text-red-400" />
      </div>
      <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
        <FiWifi className="w-3.5 h-3.5 text-slate-500" />
      </div>
    </div>

    {/* Copy */}
    <div className="space-y-1.5">
      <h3 className="text-lg font-semibold text-slate-100">Failed to load products</h3>
      <p className="text-slate-500 text-sm max-w-xs">{message}</p>
    </div>

    {/* Retry */}
    {onRetry && (
      <Button onClick={onRetry} variant="secondary">
        <FiRefreshCw className="w-4 h-4" />
        Try Again
      </Button>
    )}
  </div>
);

export default ErrorState;
