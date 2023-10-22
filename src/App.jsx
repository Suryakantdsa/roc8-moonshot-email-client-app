import { Provider } from 'react-redux'
import EmailBody from './Componet/EmailBody'
import './index.css'
import appStore from './utils/appStore'
function App() {

  return (
    <Provider store={appStore}>

    <div className='w-screen font-sans text-[#636363]'>
      <EmailBody/>
    </div>
    </Provider>
    
  )
}

export default App
