import { collection, doc, updateDoc,deleteDoc, addDoc, getDocs,getDoc } from "firebase/firestore";
import { db } from "./config";

async function addBook(book){
 const bookRef = await addDoc(collection(db,"books"), {
    name: book.name,
    price: `${book.price}$`,
    author: book.author,
    image: book.imageUri,
    category: book.category,
    des: book.description
  });
  const bookid= bookRef.id;
  await updateDoc(bookRef,{
    id: bookid
  })
}
async function delete_BooK(id){
    await deleteDoc(doc(db,"books",id));
}
async function addToFav(book,uid){
    const favRef= await addDoc(collection(db,"favorites"),{
        date: Date.now().toString(),
        book:book,
        uid:uid,
    });
}
async function getBooks(){
  const bookRef = collection(db,"books");
  const temp = await getDocs(bookRef);
  const books=temp.docs.map((doc)=>({...doc.data()}))
  return books;
}
async function getBook(id){
  const bookRef = doc(db,"books",id);
  const temp = await getDoc(bookRef);
  const book=temp.data();
  return book;
}
async function addCategory(category){
  const catRef = await addDoc(collection(db,"categories"),{
    name: category.name,
    icon: category.icon,
  });
  const catId=catRef.id;
  await updateDoc(catRef,{
    id: catId
  })
}
async function deleteCategory(category){
  await deleteDoc(doc(db,"categories",category.id));
}
async function getCategories(){
  const catRef = collection(db,"categories");
  const temp = await getDocs(catRef);
  const categories=temp.docs.map((doc)=>({...doc.data()}))
  return categories;
}
export {addBook,delete_BooK as delet_BooK,addToFav,getBooks,addCategory,deleteCategory,getCategories,getBook};