import {createApp} from 'vue'
import {createPinia} from 'pinia'


import App from './App.vue'
import './styles/main.css'
import {router} from "@/app/router";



const app = createApp(App)

app.use(createPinia())
app.use(router)

export {app}
