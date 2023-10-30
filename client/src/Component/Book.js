
import axios from 'axios'
import Button from "react-bootstrap/esm/Button";
import {useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
const serverUrls='https://user-book-management.onrender.com'

function Book({id,title,author,body,coverImg}) {
 
  const navigate=useNavigate()
  const location=useLocation()
 

 

  
async function deleteBook()
{    
  try {
    
    const res=await axios.get(serverUrls+'/book/delete/'+id,{
      headers: {
        'token': localStorage.getItem('token'),
      },
    })
    
    return navigate('/home')
   
   
    
  } catch (error) {
    console.log(error)
  }
  
}

  function readBook()
{
  return navigate('/view/'+id)
 
}
 
function editBook()
{
  return navigate('/updatebook/'+id)
 
}

  function ButtonHandle()
	{
		
		return <>  <Button variant="primary" className='ms-1' onClick={readBook}>Read</Button><Button variant="danger" className='ms-1'onClick={deleteBook}>Delete</Button>{' '}<Button variant="success" onClick={editBook}>Edit</Button>{' '}</>
		
	}
 
  return (

    <>


          <div className="card mb-5 shadow-sm">
            <img src={coverImg} className="img-fluid" />

            <div className="card-body">
              <div className="card-title">
                <div className="title front-style "> {title} </div>
               <div>
               Author: {author} 
               </div>
              </div>
              
              <div className="card-text">
              
              
              <ButtonHandle />
                  

                  
                 
                </div>
             
              
            </div>
          </div>
       
    </>
   
  );
}

export default Book;