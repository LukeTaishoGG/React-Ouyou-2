export type Todo = {
  id: string
  text: string
  status: Status
}

export type Status = 'TODO' | 'IN_PROGRESS' | 'DONE'
