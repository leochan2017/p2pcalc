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
    Tabbar,
    TabbarItem
} from 'vux';

export default {
    name: 'app',
    components: {
        Tabbar,
        TabbarItem
    }
}
</script>
<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
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
    width: 100%;
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


/*解决cell的高度太高了的问题 Start */

.leo-cell {
    line-height: 0;
}


/*解决cell的高度太高了的问题 End */


/*cell右侧提示文字的距离*/

.leo-tips-right {
    padding-left: 10px;
}


/*说明页弹出的样式*/

.leo-popup {
    p {
        padding: 3px 8px;
    }
}

@import '~vux/src/styles/close';

.leo-paymoney-dialog {
    .weui-dialog {
        border-radius: 8px;
        padding-bottom: 8px;
    }
    .vux-close {
        margin-top: 2px;
        margin-bottom: 2px;
    }
}
</style>
