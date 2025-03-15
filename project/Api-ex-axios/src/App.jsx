import { useState } from 'react'
import PostList from "./component/PostList";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Ứng dụng Axios API</h1>
      <PostList />
    </div>
  );
}

export default App
