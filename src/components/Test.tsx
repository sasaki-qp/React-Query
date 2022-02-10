import React, { VFC } from 'react'
import { QueryCache } from 'react-query'
import { useHistory } from 'react-router'

export const Test: VFC = () => {
    const history = useHistory()
    const queryCache: QueryCache = new QueryCache();

    const handler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault()
        //const cache = queryCache.find("todos")
        queryCache.clear();
        history.push("/")
    }

    const simplePageTransitionHanlder = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault()
        history.push("/")
    }

    return (
        <div>
            <div>
                <button
                    onClick={simplePageTransitionHanlder}
                >
                    go to main page
                </button>
            </div>
            <div>
                <button
                    onClick={handler}
                >
                    go to main page with clear cache
                </button>
            </div>
        </div>
    )
}
