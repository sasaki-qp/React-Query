import { ReactNode, VFC } from 'react'

type Props = {
    children: ReactNode,
}

export const Layout: VFC<Props> = ({ children }) => {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 font-mono">
            <main className="flex flex-1 flex-col justify-center items-center w-screen">
                {children}
            </main>
        </div>
    )
}
