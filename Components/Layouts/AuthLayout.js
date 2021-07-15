import NavbarComponent from "../Nabar";
import Head from "next/head";
import LeftSidebar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import Footer from '../Footer';
import lstyles from '../../styles/Home.module.scss';

const AuthLayout = ({ children }) => {
  return (
    <>
      <Head />
      <NavbarComponent />
      <main className={lstyles.main_body}>
        <div className="container">
          <div className="row">
            <div className="col">
            {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AuthLayout;
