import { Link } from "react-router-dom"

export default function HomePage(){
  return(
    <div>
      <h1>タスク管理アプリ</h1>
      <p>
        ReactxVitexReact Routerで作るタスク管理アプリです。
      </p>
      <Link to="/tasks">
        タスク一覧へ
      </Link>
    </div>
  )
}
/* Linkコンポーネントは、React Routerのリンクコンポーネントで、toプロパティにリンク先のURLを指定します。*/