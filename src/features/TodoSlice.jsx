import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    todos: [
        { name: "Balancer le vélo", status: false, id: 1 },
        { name: "Pratiquer une activité", status: false, id: 2 },
        { name: "Remplir le frigo", status: true, id: 3 },
    ]
}

const TodoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setTodos: (state, action) => {
            return {
                ...state.todos,
                todos: action.payload
            }
        },

        addTodo: (state, action) => {
            const id = state.todos.length + 1;
            return {
                ...state.todos,
                todos: [
                    ...state.todos,
                    {
                        id,
                        name: action.payload.name,
                        status: false
                    }
                ]
            }
        },
        updateTodo: ({todos}, action) => {
            const index = todos.findIndex((todo) => todo.id === action.payload.id);
            todos[index].status = action.payload.status
        },
        removeTodo: (state, action) => {
            return {
                ...state.todos,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id)
                // todos: action.payload
            }
        }

    }
});

export const {addTodo, updateTodo, removeTodo, setTodos} = TodoSlice.actions;
export default TodoSlice.reducer;