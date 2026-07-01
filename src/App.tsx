import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;

/* <Routes>コンポーネントは、複数の<Route>をまとめるコンテナの役割を持ちます。
   <Route>コンポーネントは、URLパスに対して表示するコンポーネントを指定します。
   elementにてコンポネート名を指定 */
