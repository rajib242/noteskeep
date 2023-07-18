import React,{useState} from 'react'

import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import CreateNote from "./CreateNote.jsx";
import Node from "./Node.jsx";

const App = () =>{

   const [addItem,setAddItem] = useState([]);

   const addNote = (note) =>{
      setAddItem((prevData)=>{
           return[...prevData,note];
      });
      console.log(note);
   };
/*
const onDelete = (id) => {
    setAddItem((oldData)=> {
      oldData.filter((currdata,indx) => {
            return indx !== id;
      });
    });
};
*/

 const onDelete = (id) => {
    setAddItem((oldData)=> 
      oldData.filter((currdata,indx)=>{
         return indx!== id;
      })
    );
};

  
	return(
           <>
             <Header/>
             <CreateNote
                passNote={addNote} />

              {addItem.map((val, index)=>{
               return(<Node 
                  key={index} 
                  id={index} 
                  title={val.title} 
                  content={val.content}
                  deleteItem={onDelete}
                  /> 
                  );
            })}

             <Footer/>

          </>
	);
};

export default App;