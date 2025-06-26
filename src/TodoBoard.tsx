import { useState } from 'react'
import TodoLane from './TodoLane'
import type { Todo, Status } from './TodoType'
import './TodoBoard.css'
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
        const current_index = status_order.indexOf(todo.status)
        const next_index =
          direction === 'left'
            ? Math.max(0, current_index - 1)
            : Math.min(status_order.length - 1, current_index + 1)
        const new_status: Todo['status'] = status_order[next_index]
        return { ...todo, status: new_status }
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
