import { createRoot } from 'react-dom/client'
createRoot(document.getElementById('root')).render(<h1>Hello, React!</h1>)
createRoot(document.getElementById('root')).render(<p>Hello, React!</p>)
const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <th>John</th>
    </tr>
    <tr>
      <th>Doe</th>
    </tr>
  </table>
);
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  myelement
)
createRoot(document.getElementById('anna')).render(
  <p> Welcome</p>
)
