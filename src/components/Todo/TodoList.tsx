import { VFC, memo } from 'react'
import { useQueryTodos, useRefetchTodos } from '../../hooks/useQueryTodos'
import { TodoMemo } from './Todo'

const TodoList: VFC = () => {
    const { status, data } = useQueryTodos()
    const { refetch } = useRefetchTodos();

    const handler = async(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.preventDefault()
        await refetch()
    }
    
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
            <div>
                <button
                    onClick={handler}
                >
                    refetch
                </button>
            </div>
        </div>
    )
}

export const TodoListMemo = memo(TodoList)
