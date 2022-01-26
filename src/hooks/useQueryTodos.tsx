import axios from "axios";
import { useQuery } from "react-query";
import { TodoType } from "../types/todo";

const getTodos = async() : Promise<TodoType[]> => {
    const { data } = await axios.get<TodoType[]>(`${process.env.REACT_APP_URL}todos/`);
    return data;
}

export const useQueryTodos = () => {
    return useQuery<TodoType[], Error>({
        queryKey: "todos",
        queryFn: getTodos,
        staleTime: 5000,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
    })
}