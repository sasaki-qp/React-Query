import { VFC } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout } from './components/Layout';
import { TodoListMemo } from './components/Todo/TodoList';
import { ReactQueryDevtools } from 'react-query/devtools'
import { Test } from './components/Test';

const defualtQueryClient: QueryClient = new QueryClient({
  defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        cacheTime: 30000,
      }
  }
})

const App: VFC = () => {
  return (
    <QueryClientProvider client={defualtQueryClient}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <TodoListMemo />
            </Route>
            <Route exact path="/test">
              <Test />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App;
