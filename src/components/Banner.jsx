import styles from '../styles/Banner.module.css'



const Banner = ({image, isShowAddTodo, setShowAddTodo}) => {

    const IMAGE_URL = 'https://i1.sndcdn.com/artworks-IKIVoW9aw5BJuGgl-EGnarw-t500x500.jpg'

    const dateToday = new Date()

    return (
        <div className={styles.Banner} style={{backgroundImage: `url(${IMAGE_URL})`}}>

            <div className={styles.details}>

                <header>
                    <h2>Today's Task</h2>
                    <p>{dateToday.toDateString()}</p>
                </header>
                
                <button className={styles.newTaskBtn} onClick={()=>setShowAddTodo(!isShowAddTodo)}>
                    <p>
                        + New Task
                    </p>
                </button>
            </div>

        </div>
    )

}


export default Banner;