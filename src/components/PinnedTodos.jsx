import styles from '../styles/PinnedTodos.module.css'



const PinnedTodos = ({todos}) =>{

    

    return (
        <div className={styles.PinnedTodos}>
            <h3><span>💼</span> <span className={styles.ComponentName}>Pinned Task</span> 
                {/* <span className="pinnedCount"></span> */}
                {/* will exclude the pinned count for the mean time */}
            </h3>

            <div className={styles.PinnedList}>
                {
                    todos? todos.map((todoItem)=>(
                        todoItem.pinned? 


                            <p className={styles.PinnedItem}>
                                <span className={styles.PinnedName}>📑 {todoItem.name}</span>
                                <span className={styles.PinnedDesc}>{todoItem.description}</span>
                                <span className={styles.PinnedTime}>🕐 {todoItem.time}</span>
                            </p>
                        
                        :''
                    ))
                    
                    
                    :''
                }
            </div>

        </div>
    )
}

export default PinnedTodos;