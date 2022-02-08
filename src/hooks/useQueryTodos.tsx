import { useQuery } from "react-query";
import { httpClient } from "../helper/httpClient";
import { TodoType } from "../types/todo";

const getTodos = async() : Promise<TodoType[]> => {
    const { data } = await httpClient.get<TodoType[]>(`todos/`);
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