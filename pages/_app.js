import DefaultLayouts from '../Components/Layouts/DefaultLayouts';
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  return(
    <DefaultLayouts>
      <Component {...pageProps} />
    </DefaultLayouts>
  ) 
}

export default MyApp
