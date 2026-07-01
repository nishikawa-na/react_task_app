## 説明
このリポジトリはTypeScript、Reactキャッチアップを行ったもの。

## 技術スタック
React 19<br>
React Router 7<br>
TypeScript<br>
CSS Modules<br>
Vite<br>
Docker<br>

## その他
Feature-Based（フィーチャーベース）のディレクトリ設計

### メモ
src/main.tsx  ← ★ここがエントリーポイント(最初の入り口)<br>
   ↓ (ここから App.tsx を呼び出す)<br>
src/App.tsx<br>
   ↓ (Appの中で他のコンポーネントを呼び出す)<br>
src/components/TaskList.tsx など...　<br>

.tsx は TypeScript + JSX を組み合わせたファイル形式です。<br>