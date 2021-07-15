import { Navbar, FormControl, Form, Button, Nav } from "react-bootstrap";
import Link from 'next/link';
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
          <Link href="/posts/create"><a className="btn btn-primary">Create Post</a></Link>
          <Link href="/user/login"><a className="nav-link">Login</a></Link>
          <Link href="/user/register"><a className="nav-link">Register</a></Link>
          
        </Nav>
      </Navbar>
    </>
  );

  
};

export default NavbarComponent;
