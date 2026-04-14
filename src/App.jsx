import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ProductProvider } from './context/ProductContext';
import AppRoutes from './routes/AppRoutes';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <BrowserRouter>
          <AppRoutes />
          <Toaster 
            position="bottom-right"
            toastOptions={{
              duration: 3000,
            }}
          />
        </BrowserRouter>
      </ProductProvider>
    </QueryClientProvider>
  );
}