const myLibrary = [book1  = {
  title : 'hello',
  author : 'hi',
  pages : 99,
  readYet : true,

}, book2 = {
  title : 'hobby',
  author: 'lary',
  pages: 100,
  readYet: false,

}, book3 = {
  title: 'atomic habit',
  author: 'goodGuy',
  pages: 347,
  readYet: true,

}];
const popUp = document.getElementById('pop-up');
const addButton = document.getElementById('');
const submitButton = document.getElementById('');
function Book(title,author,pages,readYet) {
     this.title = title;
     this.author = author;
     this.pages = pages;
     this.readYet = readYet;
}
function resetValue() {
  title.value = ''; //? should write a separated function
  author.value = '';
  pages.value = 0; 
  readYet.checked = false;    
  submitButton.addeventlistener('click', () =>{
     popUp.style.cssText = "display:none;"
  })

}
function displayPopUp() {
  popUp.classList.toggle('display') //? should toggle class instead
}
displayPopUp();
function addBookToLibrary(book) {
    addButton.addeventlistener('click',() => {  //? should write a separated function
 
       })
    
    
     const title  =document.getElementById('').value;
     const author = document.getElementById('').value;
     const pages =  document.getElementById('').value;
     const readYet= document.getElementById('').checked;
      // after click submit button
    const book = new Book(title,author,pages,readYet);
  
      myLibrary.push(book);

    //reset values.
    resetValue();
}


/** function for display book from myLibrary after click summit button or page load
 * 
 * 
 */
const gridLibrary = document.getElementById('grid-library');

function createCard(book) { //loop through every card in library with the corresponding book
    const card = document.createElement('div');
    card.classList.add('card');
    const status = () => this.readYet ? "have already read" : "haven't read"
    card.innerHTML = ` <header>Title</header>
    <main>
        <div>Name:${this.title}  </div>
      <div>Author:${this.author} </div>
      <div>Pages: ${this.pages}</div>
    </main>
    
        <button> ${status}</button> 
        <button> Delete</button> `;
        // if this.readYet is true display already read . else display haven't read


}
