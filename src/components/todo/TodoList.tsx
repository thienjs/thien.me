import { todo } from "@prisma/client";
import * as React from "react";
import { useQuery } from "react-query";

const TodoList = () => {
    const { data: todos, isLoading } = useQuery<todo[]>("todos", async () => {
        const res = await fetch("/api/todos");
        return res.json();
    });

    if (isLoading) return <span>loading ...</span>;

    if (todos.length === 0) return <span>no todos</span>;

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <h2>{todo.title}</h2>
                    <span>{todo.body}</span>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;