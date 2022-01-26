import { VFC, memo } from 'react'
import { idText } from 'typescript'
import { useQueryTodos } from '../../hooks/useQueryTodos'
import { TodoMemo } from './Todo'

const TodoList: VFC = () => {
    console.log("DEBUG rendered todo list component")
    const { status, data } = useQueryTodos()
    
    if(status === "loading") return <div>Loading ...</div>
    if(status === "error") return <div>Error ...</div>
    
    return (
        <div>
            <ul>
                {data?.map((todo) => (
                    <li key={todo.id}>
                        <TodoMemo todo={todo} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const TodoListMemo = memo(TodoList)
