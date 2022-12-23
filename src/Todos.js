import { useDispatch, useSelector } from "react-redux";

function Todos() {
    const dispatch = useDispatch()

    const todos = useSelector(state => state)

    const handleDelete = () =>{
        dispatch({
            type: 'delete',
            payload: index
        })
    }
    return (
        <ul className="list-group">
            {todos.map((item, index) => {
                return(
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                        <div>
                            <input type='checkbox' checked={item.done}/>
                        </div>
                        <div>
                            {item.text}
                        </div>
                        <div>
                            <button className="btn btn-outline-danger" 
                            onClick={() => handleDelete(index)}
                            >
                                X
                            </button>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
  }
  
  export default Todos;
