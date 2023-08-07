import React, { useState } from 'react'
import "./style.css"
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import List from './List';

const Todo = () => {

    const [todo, setTodo] = useState("");
    // console.log(todo);
    
    const [add, setAdd] = useState([]);

    const [validation, setValidation] = useState("");


const setData=(e)=> {
    // console.log (e.target.value);
    setTodo(e.target.value)

}


const addIteams =() =>{

    if(todo == "")
    {
        setValidation("Enter Your Masssage ")
    }
    else
    {

        setAdd (()=>{
            return [...add,todo ]
        })
        setTodo("");
    }
}

const dltitems= (id) =>
{
    const dltdata = add.filter((e,index)=>
    {
        return index !== id
    });
    setAdd(dltdata)
}
    return (
        <>
            <div className="main-container">
                <div className="todo-box">
                    <img src="" alt="todoimg" />
                    <h2 className='heading'>Write Your Todo List Here</h2>
                    <h3 className='validation'>{validation}</h3>
                    
                    <div className="input-container">
                        <input type="text" name='todo'
                        onChange={setData}
                        value={todo}
                        placeholder='Enter Your Task' />
                        <Tooltip title="Add">
                            <Button className='addbtn' onClick={addIteams}> 
                                <AddIcon />
                            </Button>
                        </Tooltip>

                    </div>
                    <div className="store-container">
                        <ul>
                        {
                            add.map((e,index)=>{
                                return(
                                    <>
                                        <List id={index} text={e} dltitems={dltitems}/>
                                    </>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo