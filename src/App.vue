<template>
    <div id="app">
        <transition :name="'vux-pop-in'">
            <router-view class="leo-body"></router-view>
        </transition>
        <tabbar>
            <tabbar-item selected link="/Home">
                <img slot="icon" src="./assets/icon_nav_button.png">
                <span slot="label">计算器</span>
            </tabbar-item>
            <tabbar-item link="/About">
                <img slot="icon" src="./assets/icon_nav_article.png">
                <span slot="label">说明</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<script>
import {
    ViewBox,
    Tabbar,
    TabbarItem
} from 'vux';

export default {
    name: 'app',
    components: {
        ViewBox,
        Tabbar,
        TabbarItem
    }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*color: #2c3e50;*/
}

body {
    margin: 0;
    padding: 0;
}


/*解决底部导航条一堆操蛋问题 Start*/

.weui-tabbar__label {
    line-height: 0 !important;
}

.weui-tabbar {
    position: fixed !important;
}

.leo-body {
    padding-bottom: 50px;
}

a:link {
    text-decoration: none;
}


/*解决底部导航条一堆操蛋问题 End*/

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
}

.vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
</style>
