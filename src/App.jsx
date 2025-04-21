import './global.css'
import { Post } from './Post'

export function App() {

  return (
    <div>
      <Post 
      author="JK Rowling" 
      content="Harry Potter"
      />
      <Post author="Rainn Wilson" content="Soul Boom"/>
      <Post />
    </div>
    
  )
}

export default App
