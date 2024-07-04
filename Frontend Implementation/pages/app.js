import '../styles/globals.css'
import { Provider } from 'react-redux';
import { store } from '../store';
import NavBar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NavBar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
