import { Provider } from 'react-redux'
import './index.css'
import appStore from './utils/appStore'
// import EmailList from './Componet/EmailList'
import EmailBody from './Componet/EmailBody'
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
