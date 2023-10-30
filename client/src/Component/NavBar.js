import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import myIcon from '../Component/img/myIcon.png'

import {useNavigate,useLocation} from 'react-router-dom'

function NavBarHome({active}) {
	const location=useLocation()	
	
	
	
    const navigate=useNavigate()
    
 
	function addBook()
	{
		return navigate('/addbook')
		
	}
   
    function home()
	{
		return navigate('/home')
		
	}
    function logOut()
	{
        localStorage. removeItem('token')
       
		return navigate('/')
	}
	
	
 
	function NavBar()
	{
		
		return  <> <Nav.Link onClick={home} className={`${active=="home" && 'active'}`} >Home</Nav.Link><Nav.Link onClick={logOut}>Logout</Nav.Link> <Nav.Link className={`${active=="addbook" && 'active'}`} onClick={addBook}>Add Book</Nav.Link></>
		
	}
	
  return (
	<>
   <Navbar  expand={'lg'} bg="dark" data-bs-theme="dark">
	<Container fluid>
	<Navbar.Brand > <img src={myIcon} alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
      <span className='text-white ms-2 heading'>User Book Management System</span>   </Navbar.Brand>
	  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md `} />
	  <Navbar.Offcanvas
		id={`offcanvasNavbar-expand-md`}
		aria-labelledby={`offcanvasNavbarLabel-expand-md`}
		placement="end"
	  >
		<Offcanvas.Header closeButton>
		  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} >
		User Book Management System
		  </Offcanvas.Title>
		</Offcanvas.Header>
		<Offcanvas.Body>
		<Nav className="justify-content-end flex-grow-1 pe-3">
			<NavBar />
			</Nav>
		 
		</Offcanvas.Body>
	  </Navbar.Offcanvas>
	</Container>
  </Navbar>
  </>
  );
}

export default NavBarHome;
