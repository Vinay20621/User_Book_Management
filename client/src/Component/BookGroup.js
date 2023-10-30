import Book from './Book'
import { useEffect, useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const serverUrls='https://user-book-management.onrender.com'

function BookGroup({user})
{
  const [allBook,setAllBook]=useState([])
  const navigate=useNavigate()
  async function getBook()
  {
    try {
       const response=await axios.get(serverUrls+'/book/allbook',{
        headers: {
          'token': localStorage.getItem('token'),
        },
      });
       
        if(response.data.status==="error")
        {
          return navigate('/')
        }
         setAllBook(response.data.data)
      
    

      
    } catch (error) {
      console.log(error)
    }
  }
  
   useEffect(()=>
   {
    getBook();
   },[allBook])
    
    return(
        <>
          <div className=" container-fluid bg-light ">
    <div className="container">
      <div className="text-center pt-3">
        <h1>Avilable Books</h1>
        <hr />
      </div>


      <div className="row">
        {
            allBook.map((post)=>
            {
                return(
                <div className="col-lg-4 col-md-6 col-sm-12" key={post._id}>
                 
                <Book user={user}  key={post.id}
                id={post._id}
                title={post.title}
                author={post.author}                
                coverImg={post.coverImg}/>
                </div>
                )
            })
        }
     </div>
     </div>
     </div>

        </>
    )
}
export default  BookGroup;
