import type { Todo, Status } from './TodoType'
import TodoItem from './TodoItem'
import './TodoLane.css'
type Props = {
  status: Status
  todos: Todo[]
  addTodo?: () => void //?があるのは渡す場合も渡さない場合もある。ない場合必ず渡さないとTSが怒る
  onUpdate: (id: string, text: string) => void
  onMove: (id: string, direction: 'left' | 'right') => void
  onDelete: (id: string) => void
}
const TodoLane = ({ status, todos, addTodo, onUpdate, onMove, onDelete }: Props) => {
  const filtered = todos.filter((todo) => todo.status === status)
  return (
    <div className="todo-lane">
      <div className={`lane-${status.toLowerCase()}`}>
        <p className="status-name">
          {status}（{filtered.length}件）
        </p>
        <div className="lists-box">
          <div className="scroll-box">
            {filtered.map((todo) => (
              <div className="todo-lists">
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onUpdate={onUpdate}
                  onMove={onMove}
                  onDelete={onDelete}
                />
              </div>
            ))}
          </div>
        </div>
        {status === 'TODO' && addTodo && (
          <button className="add-button" onClick={addTodo}>
            +
          </button>
        )}
      </div>
    </div>
  )
}
export default TodoLane
