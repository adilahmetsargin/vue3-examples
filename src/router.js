import { createRouter , createWebHistory} from 'vue-router'
import Persons from './pages/Persons'
import Calendar from './pages/Calendar'
import Home from './pages/Home'
import Markdown from './pages/Markdown'
import Slider from './pages/Slider'
import Calculator from './pages/Calculator'
import Chat from './pages/Chat'
import store from './store/index'
import Userlistfromapi from './pages/Userlistfromapi'
import Tensorflow from './pages/Tensorflow'





const routes = [
    {path:'/', component:Home},
    {path:'/persons', component:Persons},
    {path:'/calendar', component:Calendar},
    {path:'/markdown', component:Markdown},
    {path:'/slider', component:Slider},
    {path:'/calculator', component:Calculator, },
    {path:'/chat',
    meta:{middleware: 'auth'},
    component:Chat,},
    {path:'/userlistfromapi', component:Userlistfromapi },
    {path:'/tensorflow', component:Tensorflow, },



];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, _, next)=>{
    if (to.meta.middleware) {
       const middleware = require(`./middleware/${to.meta.middleware}`);
       if (middleware) {
           middleware.default(next, store);
       }else{
           next();
       }
    }else{
        next();
    }
});

export default router;