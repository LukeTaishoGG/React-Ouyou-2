## ToDoList　基本設計

静的
React + Typescriptの環境構築
ESLint + Prettier導入
・ToDo / in progress / DONE のレーン作成
各レーンにTODOが表示される
・Todo レーン TodoItem のコンポーネントがいる

動的
・＋ボタンでTodoを追加
・矢印ボタンでステータスを変更
・❌ボタンで削除
・テキスト編集ができる テキストボックスにする
・各レーンの件数を表示

## 詳細設計

コンポーネント階層
AppRouter
└── Layout
└── TodoBoard
├── TodoLane (status: "TODO", todos: Todo[])
│ └── TodoItem (todo: Todo)
├── TodoLane (status: "IN_PROGRESS", todos: Todo[])
│ └── TodoItem (todo: Todo)
└── TodoLane (status: "DONE", todos: Todo[])
└── TodoItem (todo: Todo)

Layout 全体のレイアウトを管理
TodoBord TodoLaneの状態を管理
TodoLane 各ステータスのTodoレーンを管理
TodoItem Todolist を定義