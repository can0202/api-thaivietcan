import './shared/styles/main.scss';
import { Nunito_Sans } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

const nunito_sans = Nunito_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'THAIVIETCAN.COM',
  description: 'This is blog of thaivietcan.com',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={nunito_sans.className}>
        <Header />
        <div className='container'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
