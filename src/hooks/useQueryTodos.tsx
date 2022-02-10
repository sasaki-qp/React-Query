import { QueryClient, useQuery, useQueryClient } from "react-query";
import { httpClient } from "../helper/httpClient";
import { TodoType } from "../types/todo";

const getTodos = async() : Promise<TodoType[]> => {
    const { data } = await httpClient.get<TodoType[]>(`todos/`);
    console.log("fetch data useQuery === ", data)
    return data;
}

export const useQueryTodos = () => {
    return useQuery<TodoType[], Error>({
        queryKey: "todos",
        queryFn: getTodos,
        cacheTime: 600000,
        staleTime: 600000,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
    })
}

export const useRefetchTodos = () => {
    const queryClient: QueryClient = useQueryClient();
    const refetch = async() => {
        await queryClient.refetchQueries("todos")
    }
    return { refetch }
}