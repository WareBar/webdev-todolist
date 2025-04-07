import { useState } from 'react';
import styles from '../../styles/NewTodo.module.css'

const NewTodo = ({todos, setTodos, isShowAddTodo, setShowAddTodo}) => {

    const toDate = new Date()

    const DAYS = {
        1:'Monday',
        2:'Tuesday',
        3:'Wednesday',
        4:'Thursday',
        5:'Friday',
        6:'Saturday',
        7:'Sunday'
    }



    const [inputValues, setInputValues] = useState(
        {
            'name':'',
            'description':'',
            'time':`${DAYS[toDate.getDay()]} ${toDate.getHours()}:${toDate.getMinutes()}`,
            'status':'open',
            'pinned':false
        }
    )


    function handleNameInput(e){
        
        setInputValues({
            ...inputValues,
            'name':e.target.value
        })
    }

    function handleDescriptionInput(e){
        setInputValues({
            ...inputValues,
            'description':e.target.value
        })
    }

    function handleCheck(){
        const pinInput = document.getElementById('pinInput')

        console.log(pinInput.checked)
        setInputValues({
            ...inputValues,
            'pinned':pinInput.checked
        })
    }

    function addTaskIntoTodos(){
                

        if (inputValues.name.length > 8 && inputValues.description.length > 10){
            setTodos([inputValues, ...todos])
            console.log('a new todo is added')
            setShowAddTodo(!isShowAddTodo)


        }
        else{
            alert('VALUE TOO SHORT, BE MORE DETAILED')
        }

    }


    return (
        <div className={styles.newTodo}>
            <div className={styles.banner}>
                <img src="https://64.media.tumblr.com/8e6039bc776bc1253e8308b175216473/tumblr_omsfmkglvK1vu02u2o1_500.gif" alt="" />
            </div>
            <h3>ADD NEW TASK</h3>

            {/* <form> */}
                <label htmlFor="titleInput">
                    <input type="text" id="titleInput" placeholder="Title - atleast 8 characters long" onChange={(e)=>handleNameInput(e)} />
                </label>

                <label htmlFor="descInput">
                    <textarea id="descInput" cols="30" rows="10" placeholder="Description - atleast 10 characters" onChange={(e)=>handleDescriptionInput(e)}></textarea>
                </label>

                <label htmlFor="pinInput" className={styles.hahaha}>
                    <input type="checkbox" id="pinInput" onClick={()=>handleCheck()} /> <p>Pin task</p>
                </label>

                <div className={styles.inputBtns}>
                    <button type='submit' onClick={()=>addTaskIntoTodos()}>+ Add Task</button>
                    <button onClick={()=>setShowAddTodo(!isShowAddTodo)}>Cancel</button>
                </div>

            {/* </form> */}


        </div>
    )
}

export default NewTodo;