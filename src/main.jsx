import ReactDOM from 'react-dom/client'
import './index.css'
import axios from 'axios'
import App from './App'

const baseUrl = '/api/notes'

const promise2 = axios.get(baseUrl)
console.log(promise2)

const promise = axios.get(baseUrl)

promise.then(response => {
  console.log(response)
})

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)