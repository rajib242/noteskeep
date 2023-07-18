import React,{useState} from 'react'

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) =>{

  const [note,setNote] = useState({
   title:"",
   content:"",
  });

  const InputEvent = (event) =>{  
  const value = event.target.value;
  const name= event.target.name;
   setNote((prevData) =>{
      return {
         ...prevData,
         [name] : value,
      };
   });
  };

  const addEvent = () =>{
     props.passNote(note);
     setNote({
      title:"",
      content:"",
    });
  };
 	return(
          <>
             <div className="main_note">
                  <form className="boxxing">
                         <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder=" Title" autoComplete="off" />    
                         <br/>
                          <textarea rows="" column="" name="content" value={note.content}  onChange={InputEvent} placeholder="   Write a notes... "></textarea>
                            <Button className="plus" onClick={addEvent}>
                                 <AddIcon />
                            </Button>
                  </form>

             </div>
          </>
	);
};

export default CreateNote;