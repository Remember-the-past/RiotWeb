import { createApp } from 'vue'
import 'bulma'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {fas, faUserSecret} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret , fas)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
