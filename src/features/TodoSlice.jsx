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
        addTodo: (state, action) => {
            const id = state.todos.at(-1).id + 1;
            return {
                ...state,
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
        updateTodo: (state, action) => {
            return {
                ...state,
                todos: state.todos.map((todo) => 
                todo.id !== action.payload.id)
            }
        },
        removeTodo: (state, action) => {
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id)
            }
        }

    }
});

export const {addTodo, updateTodo, removeTodo} = TodoSlice.actions;
export default TodoSlice.reducer;