import { useState } from 'react';
import './App.css';
import Banner from './components/Banner'
import Todos from './components/Todo/Todos'
import NewTodo from './components/Todo/NewTodo';
import PinnedTodos from './components/PinnedTodos';


function App() {

  const [todos, setTodos] = useState([])

  // a state variable that decide if the add task pop up will show
  // const [addTask, setAddTask] = useState(false)
  const [isShowAddTodo, setShowAddTodo] = useState(false)


  const IMAGE_URL = 'https://64.media.tumblr.com/b5a89bf33a85f113df933cb19d2db52d/cd265649d5c353e8-9f/s540x810/1afc6127676226fe0cac5b183afdbb706de75d63.gif'
  

  // adding a dummy value



  
  return (
    <div className="App">
      <div className='container'>


        <div className='Top'>

              {isShowAddTodo? <NewTodo todos={todos} setTodos={setTodos} isShowAddTodo={isShowAddTodo} setShowAddTodo={setShowAddTodo}/>:''}


            {/* banner */}
            <Banner image={IMAGE_URL} isShowAddTodo={isShowAddTodo} setShowAddTodo={setShowAddTodo}/>
            {/* todos */}
            <Todos todos={todos} setTodos={setTodos}/>
        </div>

      {/* pinned task */}
        <PinnedTodos todos={todos}/>
      </div>


    </div>
  );
}

export default App;
// todoitem structure
/*


{
  'name':'',
  'description':'',
  'time':'',
  'status':'' -------> open, completed, deleted
  'pinned':'' --- true or false
}



*/