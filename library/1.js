const backdrop = document.getElementById('backdrop')
const gridLibrary = document.getElementById('grid-library');
const myLibrary = [];
const popUp = document.getElementById('pop-up');
const addButton = document.getElementById('add-button');
const submitButton = document.getElementById('submit-button');
function Book(title,author,pages,readYet) {
     this.title = title;
     this.author = author;
     this.pages = pages;
     this.readYet = readYet;
}


function togglePopUp() {
  popUp.classList.toggle('display'); //? should toggle class instead
}
function addBookToLibrary() {  
  const title  =document.getElementById('title-input').value;
  const author = document.getElementById('author-input').value;
  const pages =  document.getElementById('pages-input').value;
  const readYet= document.getElementById('readYet-input').checked;
   const book = new Book(title,author,pages,readYet); 

   myLibrary.push(book);
}


addButton.addEventListener('click',() => {  
  togglePopUp();  
  backdrop.style.display = 'block';
});
submitButton.addEventListener('click', (event) =>{ // after click not thing happen
 event.preventDefault();
   togglePopUp();
   backdrop.style.display = 'none';
   
  addBookToLibrary();
 createCard(myLibrary[myLibrary.length - 1]);
})



function createCard(book) { 
    const card = document.createElement('div');
    card.classList.add('card');
    const status =  book.readYet ? "Have already read" : "Haven't read"
    card.innerHTML = ` <header>Title</header>
    <main>
        <div>Name: ${book.title}  </div>
      <div>Author: ${book.author} </div>
      <div>Pages:  ${book.pages}</div>
    </main>
    
        <button class="status-button"> ${status}</button> 
        <button class="delete-button" > Delete</button> `;
      gridLibrary.appendChild(card);
}
const readButton = document.getElementsByClassNam ('status-button');
const deleteButton = document.getElementsByClassNa('delete-button')
// function for switch state and change color of button status
 function switchState() {

 }


//function to delete its card by set display:none;
function deleteCard() {
  
}