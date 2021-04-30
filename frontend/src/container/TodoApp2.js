import {addTodo, setTodos} from '../redux/todo'
import { connect } from 'react-redux'
import TodoApp2 from '../components/TodoApp2'
import axios from 'axios';

const mapStateToProps = (state) => {
    return {
        todos : state.todo.items
    };
};

const mapActionsToProps = (dispatch) => ({
    addTodo: (text) => dispatch(addTodo(text)), 
    setTodos: (items) => dispatch(setTodos(items)),
    fetchTodos: async() => {
        const res = await axios.get("/api/todos/")
        dispatch(setTodos(res.data))
    },
    postTodos: async(item) => {
        if (item.id) await axios.put(`/api/todos/${item.id}/`, item)
        else await axios.post("/api/todos/", item) 
        const res = await axios.get("/api/todos/")
        dispatch(setTodos(res.data))
    },
    deleteTodos: async(item) => {
        await axios.delete(`/api/todos/${item.id}/`)
        const res = await axios.get("/api/todos/")
        dispatch(setTodos(res.data))
    }
});

export default connect(mapStateToProps, mapActionsToProps)(TodoApp2);

