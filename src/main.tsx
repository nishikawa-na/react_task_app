import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById("root")
createRoot(rootElement!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

/* createRoot は、React 18から使えるようになったAPIです。取得したDOM要素を「Reactが管理する描画エリア」として登録します。
  .render() に渡した内容が、実際に画面に描画されます。ここは3層の**ネスト構造(入れ子)**になっています。
  <BrouserRouter></BrouserROuter>にて囲むことで、ルーティングが出来る
  <App />→実際のアプリの中身
*/