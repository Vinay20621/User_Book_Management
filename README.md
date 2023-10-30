<h1>User Book Management System 📚</h1><br>


Objective: Develop a RESTful API using Node.js for managing books.<br>
Features:<br>
CRUD operations: Users should be able to:<br>
<ul>
 <li>Add a new book (title, author, summary)</li>
 <li>View a list of all books</li>
 <li>Update a book's details</li>
 <li>Delete a book</li>
 
</ul>


<h1>Frontend Setup🍧</h1><br>
Get into the client directory cd client<br>

Run npm i to install dependencies<br>

Run npm  start to start the application<br>
 <h1>Backend Setup🍧</h1><br>
Get into the backend directory cd backend<br>

Run npm i to install dependencies<br>

Create a .env file and create variables MONGO_URL,KEY<br>

Run npm run start to start the backend server<br>

<h2> Technologies 🛠<h2>

<ul>
  <li>
    ReactJS[Hooks]
  </li>
    <li>
   NodeJs
  </li>
    <li>
   ExpressJs
  </li>
    <li>
    MongoDB
  </li>
</ul>

<h2>API endpoints and their usage</h2>
<ul>
  <li>router.post('/signin',signUp): store deatil of user </li>
  <li><router.post('/login',login): check user exist or not /li>
  <li>router.post('/add',addPage): add new book inside the database</li>   
  <li> router.get('/allbook',allBook) : give all book details</li>
  <li>router.get('/mybook/:id',myBook): give book which id same as _id</li>
  <li>router.post('/updatebook/:id',updateBook):update book which id same as _id</li>
  <li>router.get('/delete/:id',deleteBook) : delet book which id same as _id</li>
  
  
</ul>


