import styles from '../../styles/Todos.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Todos = ({todos, setTodos}) => {

    console.log(todos)



    function handleActions(action, todo){
        if (action === 'check'){
            console.log('check is toggled')
            const inputCheck = document.getElementById('inputCheck')
            // console.log(inputCheck.checked)
            
            if (inputCheck.checked === true){
                setTodos(
                    todos.map((todoItem)=>todoItem.name === todo.name? {...todoItem, 'status':'completed'}:todoItem)
                )
            }
    
            else{
                setTodos(
                    todos.map((todoItem)=>todoItem.name === todo.name? {...todoItem, 'status':'open'}:todoItem)
                )
            }
        }

        else if (action === 'pin'){
            setTodos(
                todos.map((todoItem)=>todoItem.name === todo.name? {...todoItem, 'pinned':!todo.pinned}:todoItem)
            )
        }

        else if (action === 'delete'){
            setTodos(
                todos.map((todoItem)=>todoItem.name === todo.name? {...todoItem, 'status':'deleted'}:todoItem)
            )
        }

        else if (action === 'undelete'){
            setTodos(
                todos.map((todoItem)=>todoItem.name === todo.name? {...todoItem, 'status':'open'}:todoItem)
            )      
        }

    }



    return (
        <div className={styles.Todos}>
            <div className={styles.Labels}>
            
                <a href="#allContainer">
                    <p className='labelitem'>
                        <span className={styles.text}>All</span>
                        <span className={styles.textCount}>{todos.length}</span>
                    </p>
                </a>

                <a href="#openContainer">
                    <p className='labelitem'>
                        <span className={styles.text}>Open</span>
                        {/* <span className={styles.textCount}>0</span> */}
                    </p>
                </a>

                <a href="#completedContainer">
                    <p className='labelitem'>
                        <span className={styles.text}>Completed</span>
                        {/* <span className={styles.textCount}>0</span> */}
                    </p>
                </a>

                <a href="#deletedContainer">
                    <p className='labelitem'>
                        <span className={styles.text}>Deleted</span>
                        {/* <span className={styles.textCount}>0</span> */}
                    </p>
                </a>

    
            </div>

            <div className={styles.TasksContainerList}>
                <div className={styles.categoryContainer} id='allContainer'>

                    {todos.map((task)=>(

                        <div className={task.status === 'deleted'? styles.todoItemDone:styles.todoItem}>
                            <div className={styles.top}>
                                <p className={styles.todoInformation}>
                                    <span className={styles.todoTitle}>{task.name}</span>
                                    <span className={styles.todoDescription}>{task.description}</span>
                                </p>

                                <input type="checkbox" id='inputCheck' className={styles.todoCheck} onClick={()=>handleActions('check',task)} />
                            </div>

                            <hr />

                            <div className={styles.bottom}>
                                <p className={styles.todoMeta}>
                                    <span className={styles.todoDay}>{task.time.split(' ')[0]}</span>
                                    <span className={styles.todoTime}>{task.time.split(' ')[1]}</span>
                                </p>

                                <div className={styles.todoControls}>
                                    <button className={styles.control} title='pin task' onClick={()=>handleActions('pin',task)}>
                                        📌
                                        {/* <FontAwesomeIcon icon={faThumbTack}/> */}
                                    </button>
                                    <button className={styles.control} title='delete task' onClick={()=>handleActions('delete', task)}>
                                        
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </button>
                                </div>

                            </div>

                        </div>





                    ))}


                </div>
                <div className={styles.categoryContainer} id='openContainer'>
                    {todos.map((task)=>(
                        // console.log(task.name, task.status)
                        task.status === 'open'?
                            <div className={styles.todoItem}>
                                <div>
                                    <p className={styles.todoInformation}>
                                        <span className={styles.todoTitle}>{task.name}</span>
                                        <span className={styles.todoDescription}>{task.description}</span>
                                    </p>


                                </div>

                                <hr />

                                <div className={styles.bottom}>
                                    <p className={styles.todoMeta}>
                                        <span className={styles.todoDay}>{task.time.split(' ')[0]}</span>
                                        <span className={styles.todoTime}>{task.time.split(' ')[1]}</span>
                                    </p>



                                </div>

                            </div>
                    :''
                        
                    ))}

                </div>
                <div className={styles.categoryContainer} id='completedContainer'>
                {todos.map((task)=>(
                        // console.log(task.name, task.status)
                        task.status === 'completed'?
                        <div className={styles.todoItem}>
                            <div>
                                <p className={styles.todoInformation}>
                                    <span className={styles.todoTitle}>{task.name}</span>
                                    <span className={styles.todoDescription}>{task.description}</span>
                                </p>


                            </div>

                            <hr />

                            <div className={styles.bottom}>
                                <p className={styles.todoMeta}>
                                    <span className={styles.todoDay}>{task.time.split(' ')[0]}</span>
                                    <span className={styles.todoTime}>{task.time.split(' ')[1]}</span>
                                </p>


                            </div>

                        </div>
                    :''
                        
                    ))}
                </div>
                <div className={styles.categoryContainer} id='deletedContainer'>
                {todos.map((task)=>(
                        // console.log(task.name, task.status)
                        task.status === 'deleted'?
                        <div className={styles.todoItem}>
                            <div>
                                <p className={styles.todoInformation}>
                                    <span className={styles.todoTitle}>{task.name}</span>
                                    <span className={styles.todoDescription}>{task.description}</span>
                                </p>


                            </div>

                            <hr />

                            <div className={styles.bottom}>
                                <p className={styles.todoMeta}>
                                    <span className={styles.todoDay}>{task.time.split(' ')[0]}</span>
                                    <span className={styles.todoTime}>{task.time.split(' ')[1]}</span>
                                </p>

                                <button style={{
                                    // 'border':'unset',
                                    'backgroundColor':'unset',
                                    'border':'1px solid white',
                                    'color':'white'
                                }} onClick={()=>handleActions('undelete', task)}>undelete</button>

                            </div>

                        </div>
                    :''
                        
                    ))}
                </div>
            </div>

        </div>
    )
}



export default Todos;