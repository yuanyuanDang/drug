<template>
    <footer>
        <router-link v-for="tab in table" :to="tab.address" class="tab-bar">{{tab.a}}
            <i :class="tab.icon">{{tab.i}}</i>
            <p>{{tab.p}}</p>
        </router-link>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                table: [
                    {address: '/', icon: 'tab-icon-a', p: '首 页'},
                    {address: '/about', icon: 'tab-icon-b', p: '分 类'},
                    {address: '/shopping', icon: 'tab-icon-c', p: '购物车'},
                    {address: '/login', icon: 'tab-icon-d', p: '我 的'}
                ]
            }
        }
    }
</script>

<style lang="scss">
    html {
        font-size: 26.67vw;
        background: #f2f5f4;
    }
    footer {
        height: 0.5rem;
        width: 100%;
        background: red;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background:rgba(255,255,255,1);
        box-shadow:0 -0.02rem 0.04rem 0 rgba(51,51,51,0.11);
        font-size: 0.1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        z-index: 1000;
        a {
            color: #000000;
            display: block;
            /*width: 0.4rem;*/
            text-align: center;
            i {
                width:0.21rem;
                height:0.21rem;
                display: block;
                margin-left: 0.03rem;
            }
            .tab-icon-a {
                background: url("../assets/images/footer/shouye icon@2x.png")no-repeat center/100%;
            }
            .tab-icon-b {
                background: url("../assets/images/footer/分类logo@2x.png")no-repeat center/100%;
            }
            .tab-icon-c {
                background: url("../assets/images/footer/购物车logo@2x.png")no-repeat center/100%;
            }
            .tab-icon-d {
                background: url("../assets/images/footer/我的logo@2x.png")no-repeat center/100%;
            }

            p {
                padding-top: 0.06rem;
            }
        }
        .tab-bar.router-link-exact-active.router-link-active {
            color: #41BD96;
            i {
                width:0.21rem;
                height:0.21rem;
                display: block;
                /*margin-left: 0.05rem;*/
            }
            .tab-icon-a {
                background: url("../assets/images/footer/首页logo@2x.png")no-repeat center/100%;
            }
            .tab-icon-b {
                background: url("../assets/images/footer/分类logo@2y.png")no-repeat center/100%;
            }
            .tab-icon-c {
                background: url("../assets/images/footer/shopping_icon@2x.png")no-repeat center/100%;
            }
            .tab-icon-d {
                background: url("../assets/images/footer/my icon@2x.png")no-repeat center/100%;
            }
        }
    }

</style>