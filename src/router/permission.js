import router from './index'
import {getCookie} from '@/utils/setcookie'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to,from,next)=>{
    if(to.matched.some(res=>res.meta.isLogin)){//判断是否需要登录
        let tokens = getCookie('token');
        if (getCookie('token')||tokens) {
            NProgress.start();
            next();
        }else{
            next({
                path:"/login"
            });
        }

    }else{
        next()
    }
});
router.afterEach(transition => {
    NProgress.done();
});

export default router;