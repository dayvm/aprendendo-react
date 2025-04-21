import './global.css'
import { Post } from './Post'
import { Header } from './components/Header'

export function App() {

  return (
    <div>
      <Header/>
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
