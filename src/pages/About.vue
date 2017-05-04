<template>
    <div>
        <group title="各种乱写的说明">
            <cell class="leo-cell" title="什么是损耗天数？" @click.native="help1 = true" is-link></cell>
            <cell class="leo-cell" title="什么是损耗金额？" @click.native="help2 = true" is-link></cell>
            <cell class="leo-cell" title="你的计算公式确定正确吗？" @click.native="help3 = true" is-link></cell>
            <cell class="leo-cell" title="你搞的这个计算器有什么卵用？" @click.native="help4 = true" is-link></cell>
            <cell class="leo-cell" title="一棵赛艇！怎么给你点赞？" @click.native="wePayShowFn" is-link>
                <badge v-show="!isLike" text="1"></badge>
            </cell>
        </group>
        <!-- 什么是损耗天数 -->
        <popup class="leo-popup" v-model="help1">
            <p>指一般的理财产品的认购期，清算期，提现到帐等等。</p>
            <p>这期间的本金是不计算收益的。</p>
            <p>如没有则不填写。</p>
        </popup>
        <!-- 什么是损耗金额 -->
        <popup class="leo-popup" v-model="help2">
            <p>指一些的理财产品的年费，充值费，手续费，提现费，投标利息管理费等等。</p>
            <p>如没有则不填写。</p>
        </popup>
        <!-- 你的计算公式正确吗？ -->
        <popup class="leo-popup" v-model="help3">
            <p>以下为计算器所用公式:</p>
            <p>预期年化收益率=(投资内收益/本金)/(投资天数/365)×100%</p>
            <p>预期收益=本金×年化收益率</p>
            <p>实际年化收益率=(投资内收益/本金)/((投资天数+损耗天数)/365)×100%</p>
            <p>实际收益=本金×实际年化收益率×(投资天数+损耗天数)/365</p>
            <p>非金融专业人士，如果觉得有更好的建议请联系我哦
                <wechat-emotion is-gif>坏笑</wechat-emotion>
            </p>
        </popup>
        <!-- 你搞的这个有什么卵用？ -->
        <popup class="leo-popup" v-model="help4" height="80%">
            <scroller height="100%" lock-x ref="scroller">
                <p>一般的理财产品大多都不像银行定期那样当天存款当天计息，到期就还本还息。一般的理财产品都有各种XX期，而这期间的本金是不计算收益的。</p>
                <p>假设你买了某某理财10万元，号称91天的年化收益率是3.1%。假设认购期5天，到期后提现又5天，那么你实际就被占用了10天的资金所以收益就是:772.88*365/(101*10万)=2.79%。绝对收益是772.88/10万=0.7728%。</p>
                <p>如果期限较长的理财产品这些认购期，清算期这样的时间也许可以忽略不计，但是对于7天或者一个月以内的短期理财产品来说，这个时间就有非常坑爹的影响了。比如银行的7天理财产品，号称年化收益率是1.7%，但至少要占用8天资金，1.7%*7/8=1.48%，已经跟银行的7天通知存款差不多了，而银行通知存款，无论是方便程度还是稳定可靠程度，都要远高于一般有风险的理财产品的。</p>
                <p>所以看年化收益率，绝对不是看他声称的数字，而要看实际的收入数字。这个时候，我感觉你可能需要用这个计算器来看出来真实的数值了
                    <wechat-emotion is-gif>勾引</wechat-emotion>。</p>
            </scroller>
        </popup>
        <x-dialog class="leo-paymoney-dialog" v-model="wePayShow" hide-on-blur>
            <div>
                <img src="../assets/pay_me_money.png" style="max-width:100%">
            </div>
            <div @click="wePayShow = false">
                <span class="vux-close"></span>
            </div>
        </x-dialog>
    </div>
</template>
<script>
import {
    Group,
    Cell,
    XDialog,
    Popup,
    Scroller,
    WechatEmotion,
    Badge
} from 'vux';

export default {
    name: 'About',
    components: {
        Group,
        Cell,
        XDialog,
        Popup,
        Scroller,
        WechatEmotion,
        Badge
    },
    data() {
        return {
            help1: false,
            help2: false,
            help3: false,
            help4: false,
            wePayShow: false,
            isLike: false
        }
    },
    methods: {
        wePayShowFn() {
            this.wePayShow = true;
            this.isLike = true;
        }
    }
}
</script>
