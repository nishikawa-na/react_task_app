## 説明
このリポジトリはTypeScript、Reactキャッチアップを行ったもの。

### 技術スタック
React 19
React Router 7
TypeScript
CSS Modules
Vite
Docker

### メモ
src/main.tsx  ← ★ここがエントリーポイント(最初の入り口)
   ↓ (ここから App.tsx を呼び出す)
src/App.tsx
   ↓ (Appの中で他のコンポーネントを呼び出す)
src/components/TaskList.tsx など...　