import type { Todo } from './TodoType'
import './todoItem.css'
type Props = {
  todo: Todo
  onUpdate: (id: string, text: string) => void
  onMove: (id: string, direction: 'left' | 'right') => void
  onDelete: (id: string) => void
}
const TodoItem = ({ todo, onUpdate, onMove, onDelete }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onUpdate(todo.id, e.target.value)
  }

  return (
    <div className="todo-item">
      <div className="x-button-area">
        <button className="x-button" onClick={() => onDelete(todo.id)}>
          ❌
        </button>
      </div>
      <textarea className="todo-textarea" value={todo.text} onChange={handleChange} />
      <div className="move-button">
        <button
          className="l-button"
          onClick={() => onMove(todo.id, 'left')}
          disabled={todo.status === 'TODO'}
        >
          ←
        </button>
        <button
          className="r-button"
          onClick={() => onMove(todo.id, 'right')}
          disabled={todo.status === 'DONE'}
        >
          →
        </button>
      </div>
    </div>
  )
}
export default TodoItem
