import { collection, doc, updateDoc,deleteDoc, addDoc } from "firebase/firestore";
import { db } from "./config";

async function addBook(book){
 
 const bookRef = await addDoc(collection(db,"books"), {
    name: book.name,
    price: book.price,
    author: book.author,
    image: book.imageUri,
    category: book.category,
  });
  const bookid= bookRef.id;
  await updateDoc(bookRef,{
    id: bookid
  })
}
async function delet_BooK(book){
    await deleteDoc(doc(db,"books",book.id));
}
async function addToFav(book,uid){
    const favRef= await addDoc(collection(db,"favorites"),{
        date: Date.now().toString(),
        book:book,
        uid:uid,
    });
}
export {addBook,delet_BooK,addToFav};