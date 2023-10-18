import { Inter } from 'next/font/google';
import './globals.css';
import { OrderProvider } from '@/context/orderContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Food Order',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <OrderProvider>
          <div id='modal'></div>
          {children}
        </OrderProvider>
      </body>
    </html>
  );
}
