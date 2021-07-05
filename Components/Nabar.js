import { Navbar, FormControl, Form, Button, Nav } from "react-bootstrap";
import navbarstyle from '../styles/Navbar.module.scss';

const NavbarComponent = () => {

    const searchBlog = (event)=>{
        event.preventDefault();
        console.log(event);
    }
  return (
    <>
      <Navbar className={navbarstyle.navcolor} expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">BanglaDev</Navbar.Brand>
        <Form onSubmit={searchBlog} inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
           <button type="submit" className="btn btn-primary">Search</button>
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Login</Nav.Link>
          <Nav.Link href="#features">Register</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );

  
};

export default NavbarComponent;
