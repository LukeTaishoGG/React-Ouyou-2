import { useState } from 'react'
import TodoLane from './TodoLane'
import type { Todo } from './TodoType'
import './TodoBoard.css'
const TodoBoard = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const addTodolist = () => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: 'やること1',
      status: 'TODO',
    }
    setTodos([newTodo, ...todos]) //既存のTodoを残すために...でセットする
  }
  const updateTodo = (id: string, text: string) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, text } : todo)))
  }
  const moveTodo = (id: string, direction: 'left' | 'right') => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id !== id) return todo
        const statusOrader = ['TODO', 'IN_PROGRESS', 'DONE']
        const currentIndex = statusOrader.indexOf(todo.status)
        const newIndex =
          direction === 'left'
            ? Math.max(0, currentIndex - 1)
            : Math.min(statusOrader.length - 1, currentIndex + 1)
        return { ...todo, status: statusOrader[newIndex] as Todo['status'] }
      }),
    )
  }
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  return (
    <div className="todo-board">
      <div className="list">
        <TodoLane
          status="TODO"
          todos={todos}
          addTodo={addTodolist}
          onUpdate={updateTodo}
          onMove={moveTodo}
          onDelete={deleteTodo}
        />
      </div>
      <div className="list">
        <TodoLane
          status="IN_PROGRESS"
          todos={todos}
          onUpdate={updateTodo}
          onMove={moveTodo}
          onDelete={deleteTodo}
        />
      </div>
      <div className="list">
        <TodoLane
          status="DONE"
          todos={todos}
          onUpdate={updateTodo}
          onMove={moveTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  )
}

export default TodoBoard
