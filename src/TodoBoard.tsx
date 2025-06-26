import { useState } from 'react'
import TodoLane from './TodoLane'
import type { Todo, Status } from './TodoType'
import './todoBoard.css'
const TodoBoard = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const addTodolist = () => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: 'やること1',
      status: 'TODO',
    }
    setTodos([newTodo, ...todos])
  }
  const updateTodo = (id: string, text: string) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, text } : todo)))
  }
  const moveTodo = (id: string, direction: 'left' | 'right'): void => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id !== id) return todo
        const status_order: Status[] = ['TODO', 'IN_PROGRESS', 'DONE']
        const currentIndex = status_order.indexOf(todo.status)
        const nextIndex =
          direction === 'left'
            ? Math.max(0, currentIndex - 1)
            : Math.min(status_order.length - 1, currentIndex + 1)
        const newStatus = status_order[nextIndex]
        return { ...todo, status: newStatus }
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
