import  {BrowserRouter} from 'react-router-dom'
import App from './App'
import { IdProvider } from './context/idcontext'

export function Root() {
  return (
    <BrowserRouter>
        <IdProvider > <App/> </IdProvider>
    </BrowserRouter>
  )
}
