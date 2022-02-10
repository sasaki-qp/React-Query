import { VFC, memo} from 'react'
import { TodoType } from '../../types/todo'
import { BadgeCheckIcon, TagIcon, TrashIcon } from '@heroicons/react/solid'
import { useMutateTodos } from '../../hooks/useMutationTodos'
import { useHistory } from 'react-router'

type Props = {
    todo: TodoType
}

const Todo: VFC<Props> = ({ todo }) => {
    const { checkTodoMutation, deleteTodoMutation } = useMutateTodos();
    const history = useHistory()
    const handler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.preventDefault()
        history.push("/test")
    }
    return (
        <div>
            <li className="my-3">
                <span className="font-bold">
                    {todo.title}
                </span>
                <div className="flex float-right ml-20">
                    {todo.is_done 
                    ? <BadgeCheckIcon
                        className="h-5 w-5 mx-1 text-blue-500 cursor-pointer"
                        onClick={() => {
                            checkTodoMutation.mutate({...todo, is_done: !todo.is_done})
                        }}
                    />
                    : <TagIcon
                        className="h-5 w-5 mx-1 text-blue-500 cursor-pointer"
                        onClick={() => {
                            checkTodoMutation.mutate({...todo, is_done: !todo.is_done})
                        }}
                    />
                    }
                    <TrashIcon
                        className="h-5 w-5 mx-1 text-blue-500 cursor-pointer"
                        onClick={() => {
                            deleteTodoMutation.mutate(todo.id);
                        }}
                    />
                </div>
            </li>
            <button
                onClick={handler}
            >
                go to test page
            </button>
        </div>
    )
}

// Todo.length === 7 && データ更新時
// memo使用 → 更新されたデータのコンポーネントのみをレンダリングする
// memo不使用 → 更新に関係なく既存のデータ全てがレンダリングされる
export const TodoMemo = memo(Todo);
