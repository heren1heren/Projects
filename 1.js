const myLibrary = [];
const popUp = document.getElementById('popUP');
const addButton = document.getElementById('');
const submitButton = document.getElementById('');
function Book(title,author,pages,readYet) {
     this.title = title;
     this.author = author;
     this.pages = pages;
     this.readYet = false;
}

function addBookToLibrary(book) {
    addButton.addeventlistener('click',() => {
        popUp.style.cssText = " display:block;"  //? should toggle class instead...
 
       })
    
    
     const title  =document.getElementById('').value;
     const author = document.getElementById('').value;
     const pages =  document.getElementById('').value;
     const readYet= document.getElementById('').checked;
      // after click submit button
    const book = new Book(title,
        author,
         pages,
        readYet);
    //in the end push each item to myLibrary
    myLibrary.push(book);
    title.value = '';
     author.value = '';
     pages.value = 0; 
     readYet.checked = false;    
     submitButton.addeventlistener('click', () =>{
        popUp.style.cssText = "display:none;"
     })
}
/** function for display book from myLibrary(check continuously)
 * 
 * 
 */
