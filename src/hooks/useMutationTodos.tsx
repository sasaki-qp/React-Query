import axios from "axios"
import { QueryClient, useQueryClient, useMutation } from "react-query"
import { TodoType } from "../types/todo"

export const useMutateTodos = () => {
    const queryClient: QueryClient = useQueryClient();

    const checkTodoMutation = useMutation(
        (todo: TodoType) =>
            axios.put<TodoType>(`${process.env.REACT_APP_URL}todos/${todo.id}/`, todo),
        {
            onSuccess: (res, old) => {
                const preTodos = queryClient.getQueryData<TodoType[]>("todos")
                if(preTodos){
                    queryClient.setQueryData(
                        'todos',
                        preTodos.map((todo) => 
                            todo.id === old.id ? old : todo
                        )
                    )
                }
            },

            onError: (res, old) => {
                console.log("DEBUG Internal server error")
            }
        }
    )

    const deleteTodoMutation = useMutation(
        (id: number) => 
            axios.delete(`${process.env.REACT_APP_URL}todos/${id}/`),
        {
            onSuccess: (res, oldId) => {
                const preTodos = queryClient.getQueryData<TodoType[]>("todos")
                queryClient.setQueryData(
                    'todos',
                    preTodos?.filter((todo) => todo.id !== oldId,),
                );
            },
            
            onError: (res, old) => {
                console.log("DEBUG Internal server error")
            }
        }
    )

    return { checkTodoMutation, deleteTodoMutation, }
}