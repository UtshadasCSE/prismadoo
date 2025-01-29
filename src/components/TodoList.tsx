"use client";
import { useState } from "react";
import { Todo } from "@prisma/client";
import { Card } from "./ui/card";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  return <div className="space-y-3">

    {
        todos.length===0?(
            <Card className="text-center py-10">
                <p className="text-muted-foreground">All for today!</p>
            </Card>
        )
    }
  </div>;
};

export default TodoList;
