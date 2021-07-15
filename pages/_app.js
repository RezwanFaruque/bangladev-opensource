import DefaultLayouts from "../Components/Layouts/DefaultLayouts";
import AuthLayout from "../Components/Layouts/AuthLayout";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  console.log(router.pathname);
  if (router.pathname == "/user/login") {
    return (
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
    );
  } else if (router.pathname == "/user/register") {
    return (
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
    );
  } else {
    return (
      <DefaultLayouts>
        <Component {...pageProps} />
      </DefaultLayouts>
    );
  }
}

export default MyApp;
