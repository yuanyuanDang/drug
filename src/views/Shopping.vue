<template>
    <div class="shopping" id="shopping">
        <header>
            <div class="heads">
                <div class="empty"></div>
                <div class="text-a">购物车（<span>4 </span>)</div>
                <div class="text-b">管理</div>
            </div>
        </header>

        <div class="desc">
            <i></i>
            <p>怡康到家网上药店</p>
        </div>

        <div class="cart" v-for="(desc,index) in description"  :key="index">
         <div class="desc-item">
                <i v-bind:class="{'active':desc.checked}" @click="selectedProduct(desc)"></i>
                <img :src="desc.images"/>
                <div class="drug-description">
                    <div class="drug-name">{{desc.adverse}}</div>
                    <div class="drug-desc">{{desc.reaction}}<b></b></div>
                    <div class="drug-charge">{{ desc.bureau | formatMoney }}</div>
                </div>
                <div class="num-choice">
                    <div class="minus">
                        <a href="javascript:void (0)" @click="changeMoney(desc,-1)">-</a>
                    </div>
                    <div class="number">
                        <input type="text" value="0" disabled v-model="desc.number"/>
                    </div>
                    <div class="plus">
                        <a href="javascript:void (0)" v-on:click="changeMoney(desc,1)">+</a>
                    </div>
                </div>
            </div>
            <div class="settle">
                <i v-bind:class="{'active':flag}" @click="checkAll"></i>
                <div class="accounts">结算</div>
                <div class="cost">
                    <div class="cost-up">合计：
                        <span>{{totalMoney.toFixed(2)}}元</span>
                    </div>
                    <div class="cost-down">不含运费</div>
                </div>
            </div>
        </div>

        <div class="cut-help">
            <span></span>
            可能帮到你
            <span></span>
        </div>
        <div class="product">
            <div class="product-item">
                <img src="../assets/images/shopping-1/shopping_img1@2x.png">
            </div>
            <div class="product-item">
                <img src="../assets/images/shopping-1/shopping_img1@2x.png">
            </div>
        </div>
        <Footer></Footer>
    </div>

</template>

<script>

    import picture5 from "../assets/images/shopping/shopping_img3@2x.png"
    import picture4 from "../assets/images/shopping/shopping_img2@2x.png"
    import Footer from "../components/Footer";
    export default {

        name: "Shopping",
        components: {Footer},
        data(){
            return{
                description:[
                    {images:picture4,adverse:'阿莫西林胶囊',reaction:'规格：0.25g*50粒',bureau:19.8,number:'2'},
                    {images:picture5,adverse:'江中健胃消食片',reaction:'规格：0.25g*50粒',bureau:9.8,number:'2'},
                    {images:picture4,adverse:'阿莫西林胶囊',reaction:'规格：0.25g*50粒',bureau:19.8,number:'2'},
                    {images:picture5,adverse:'江中健胃消食片',reaction:'规格：0.25g*50粒',bureau:9.8,number:'2'}
                ],
                flag:false,
                totalMoney:0
            }
        },
        filters: {
            formatMoney: function (value) {
                return '¥' + value.toFixed(2)
            }
        },
        methods:{
            changeMoney:function (product,way) {
                if (way>0){
                    product.number++;
                }
                else {
                    product.number--;
                    if (product.number<1){
                        product.number=1
                    }
                }
                this.totalMoneyPrice()
            },
            selectedProduct:function (desc) {
                if (typeof desc.checked==='undefined'){
                    this.$set(desc,"checked",true)
                }
                else {
                    desc.checked = !desc.checked
                }
                this.totalMoneyPrice()
            },
            checkAll:function () {
                this.flag = !this.flag
                const self = this
                if (self.flag){
                    self.description.forEach(function (desc,index) {
                        if (typeof desc.checked==='undefined'){
                            self.$set(desc,"checked",self.flag)
                        } else {
                            desc.checked = true
                        }
                    })
                }
                else {
                    self.description.forEach(function (desc,index) {
                        desc.checked = !desc.checked
                    })
                }
                this.totalMoneyPrice()
            },
            totalMoneyPrice:function () {
                const self = this
                self.totalMoney=0
                self.description.forEach(function (desc,index) {
                    if (desc.checked){
                        self.totalMoney += desc.number*desc.bureau
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    html {
        font-size: 26.67vw;
        background: #f2f5f4;
    }
    header {
        height: 0.5rem;
        width: 100%;
        background: rgba(65, 189, 150, 1);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        .heads {
            height: 100%;
            margin: 0 0.12rem;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            div {
                font-size: 0.18rem;
                color:rgba(255,255,255,1);
            }
            .text-b,
            .empty {
                width: 0.4rem;
            }
        }
    }
    .desc {
        height: 0.44rem;
        padding: 0 0.16rem;
        line-height: 0.44rem;
        position: relative;
        margin-top: 0.5rem;
        i {
            width: 0.15rem;
            height: 0.15rem;
            background: url("../assets/images/others/圆圈.svg")no-repeat center/cover;
            display: block;
            position: absolute;
            left: 0.16rem;
            top: 0.16rem;
        }
        .active {
            background: url("../assets/images/others/全选.svg")no-repeat center/cover;
        }
        p {
            height: 0.44rem;
            font-size: 0.15rem;
            line-height: 0.44rem;
            text-align: left;
            margin-left: 0.17rem;
        }
    }
    .desc-item {
        height: 1.1rem;
        margin: 0 0.1rem 0.1rem;
        position: relative;
        background:rgba(255,255,255,1);
        box-shadow:0 0.03rem 0.03rem 0 rgba(224,222,220,0.4);
        border-radius:10px;
        /*margin-bottom: 0.1rem;*/
        i {
            width: 0.15rem;
            height: 0.15rem;
            background: url("../assets/images/others/圆圈.svg")no-repeat center/cover;
            display: block;
            position: absolute;
            left: 0.16rem;
            top: 0.5rem;
        }
        .active {
            background: url("../assets/images/others/全选.svg")no-repeat center/cover;
        }

        img {
            width: 0.7rem;
            margin: 0.35rem 0.45rem;
        }
        .drug-description {
            width: 1.45rem;
            position: absolute;
            top: 0.19rem;
            bottom: 0.19rem;
            right: 0.8rem;
            .drug-name {
                height:0.15rem;
                font-size:0.14rem;
                color:rgba(51,51,51,1);
            }
            .drug-desc {
                width:1.2rem;
                height:0.18rem;
                background:rgba(242,242,242,1);
                font-size: 0.1rem;
                color:rgba(153,153,153,1);
                margin-top: 0.14rem;
                padding-left: 0.1rem;
                position: relative;
                b {
                    width: 0.12rem;
                    height: 0.06rem;
                    display: block;
                    background: url("../assets/images/others/更多.svg")no-repeat center/100%;
                    position: absolute;
                    top: 0.06rem;
                    right: 0.05rem;
                }
            }
            .drug-charge {
                height:0.3rem;
                font-size:0.17rem;
                color:rgba(255,0,0,1);
                line-height:0.3rem;
            }
        }
        .num-choice {
            height: 0.15rem;
            width: 0.6rem;
            position: absolute;
            right: 0.1rem;
            bottom: 0.15rem;
            font-size: 0.12rem;
            color: #333333;
            display: flex;
            justify-content: space-between;
            border: 0.005rem solid rgba(153,153,153,1);
            .minus {
                width: 0.15rem;
                height: 0.15rem;
                border-right: 0.005rem solid rgba(153,153,153,1);
                line-height: 0.15rem;
                text-align: center;
                a {
                    color: #333;
                }
            }
            .number {
                width: 0.3rem;
                height: 0.15rem;
                border-right: 0.005rem solid rgba(153,153,153,1);
                line-height: 0.15rem;
                text-align: center;
                input {
                    border: none;
                    background: transparent;
                    width: 100%;
                    text-align: center;
                }
            }
            .plus {
                width: 0.15rem;
                height: 0.15rem;
                /*border: 0.01rem solid rgba(153,153,153,1);*/
                line-height: 0.15rem;
                text-align: center;
                a {
                    color: #333;
                }
            }
        }
    }
    .settle {
        height:0.44rem;
        background:rgba(255,255,255,1);
        border:0.005rem solid rgba(191,191,191,1);
        padding: 0 0.16rem;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0.5rem;
        i {
            width: 0.15rem;
            height: 0.15rem;
            background: url("../assets/images/others/圆圈.svg")no-repeat center/cover;
            display: block;
            margin: 0.15rem 0;
            float: left;
        }
        .active {
            background: url("../assets/images/others/全选.svg")no-repeat center/cover;
        }
        .accounts {
            float: right;
            width:0.7rem;
            height:0.3rem;
            background:rgba(65,189,150,1);
            border-radius:0.15rem;
            color: #ffffff;
            line-height: 0.3rem;
            text-align: center;
            font-size: 0.15rem;
            margin-top: 0.07rem;
        }
        .cost {
            float: right;
            height: 0.15rem;
            font-size: 0.1rem;
            margin: 0.05rem 0.1rem;
            color: #586D5F;
            line-height: 0.15rem;
            span {
                font-size: 0.15rem;
                color: #FF0000;
            }
        }
    }
    .cut-help {
        width: 1.85rem;
        margin: 0.4rem auto 0.2rem;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color:rgba(102,102,102,1);
        font-size: 0.13rem;
        span {
            width:0.5rem;
            height:0.001rem;
            background:rgba(153,153,153,1);
        }
    }
    .product {
        padding: 0 0.16rem 1.5rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;

        .product-item {
            width:48%;
            height:1.7rem;
            background:rgba(255,255,255,1);
            box-shadow:0 0.03rem 0.03rem 0 rgba(224,222,220,0.4);
            border-radius:0.1rem;
            img {
                width:1.5rem;
                height:1.35rem;
            }
        }
    }

</style>