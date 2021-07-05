import NavbarComponent from "../Nabar";
import Head from "next/head";
import LeftSidebar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import lstyles from '../../styles/Home.module.scss';

const DefaultLayouts = ({ children }) => {
  return (
    <>
      <Head />
      <NavbarComponent />
      <main className={lstyles.main_body}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12"><LeftSidebar /></div>
            <div className="col-lg-6 col-md-6 col-sm-12">{children}</div>
            <div className="col-lg-3 col-md-3 col-sm-12"><RightSidebar /></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DefaultLayouts;
