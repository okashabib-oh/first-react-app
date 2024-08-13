import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MediaControlCard from './components/MusicCard.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
        <MediaControlCard/>
    </StrictMode>,
)
