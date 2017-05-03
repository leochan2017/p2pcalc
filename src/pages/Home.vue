<style>

</style>

<template>
    <div>
        <group title="请输入所需参数">
            <x-input title="投资金额(万元)" type="text" v-model="submit.money" text-align="right" placeholder="10" :is-type="isNumber"></x-input>
            <x-input title="投入时长" type="text" v-model="submit.dateLong" text-align="right" placeholder="30" :is-type="isNumber"></x-input>
            <popup-picker title="时长单位" :data="daySelectMenus" v-model="submit.dayType" value-text-align="right"></popup-picker>
            <x-input title="年化收益率(%)" type="text" v-model="submit.falseRate" text-align="right" placeholder="9" :is-type="isNumber"></x-input>
            <x-input title="损耗天数" type="text" v-model="submit.xxDay" text-align="right" :is-type="isNumber"></x-input>
            <x-input title="损耗费(元)" type="text" v-model="submit.xxMoney1" text-align="right" :is-type="isNumber"></x-input>
            <!-- <x-input title="损耗费(%)" type="text" v-model="submit.xxMoney2" text-align="right"></x-input> -->
        </group>
        <div v-show="submit.falseRate > 0">
            <divider>计算结果如下</divider>
            <group title="预期结果">
                <cell title="预期年化收益率" :value="submit.falseRate ? submit.falseRate + '%' : ''"></cell>
                <cell title="预期收益" :value="falseIncome ? falseIncome + '元' : ''"></cell>
            </group>
            <group title="真实结果" v-show="submit.xxDay > 0 || submit.xxMoney1 > 0">
                <cell v-show="submit.xxDay > 0" title="真实年化收益率" :value="trueRate ? trueRate + '%' : ''"></cell>
                <cell v-show="submit.xxMoney1 > 0" title="真实收益" :value="trueIncome ? trueIncome + '元' : ''"></cell>
            </group>
        </div>
    </div>
</template>
<script>
import {
    Group,
    Cell,
    XInput,
    PopupPicker,
    Divider,
    numberComma
} from 'vux';

export default {
    name: 'Home',
    components: {
        Group,
        Cell,
        XInput,
        PopupPicker,
        Divider,
        numberComma
    },
    data() {
        return {
            submit: {
                money: 0,
                dayType: ['天'],
                dateLong: 0,
                // 各种期
                xxDay: 0,
                // 各种费
                xxMoney1: 0, // 元
                xxMoney2: 0, // %
                // 预期利率
                falseRate: 0
            },
            daySelectMenus: [
                ['天', '月']
            ],
            isNumber(val) {
                return {
                    valid: !isNaN(parseInt(val)),
                    msg: 'Must be Number'
                }
            },
            // 预期收益
            falseIncome: 0,
            // 真实利率
            trueRate: 0,
            // 真实收益
            trueIncome: 0
        }
    },
    mounted() {
        this.submit.money = 1;
        this.submit.dateLong = 30;
        this.submit.falseRate = 10;
    },
    watch: {
        submit: {
            handler: function(val, oldVal) {
                // console.log(val, oldVal);
                this.calcFn();
            },
            deep: true
        }
    },
    methods: {
        calcFn() {
            let money = parseInt(this.submit.money) * 10000,
                dateLong = parseInt(this.submit.dateLong), // 投入市场，默认计算单位：天
                xxMoney1 = parseInt(this.submit.xxMoney1),
                xxDay = parseInt(this.submit.xxDay),
                minusDay = 0, // 各种要减的天
                minusMoney = 0; // 各种要减的钱

            if (this.submit.dayType[0] == '月') {
                dateLong = dateLong * 30;
            }

            if (xxMoney1 > 0) {
                minusMoney = xxMoney1;
            }

            if (xxDay > 0) {
                minusDay = xxDay;
            }

            // 预期收益
            this.falseIncome = money * parseInt(this.submit.falseRate) * 0.01 * (dateLong / 365);

            // 真实收益(预期收益减去损耗费用)
            this.trueIncome = this.falseIncome - minusMoney;

            // 真实利率
            this.trueRate = (this.trueIncome / ((dateLong + minusDay) / 365)) / money * 100;


            // 处理小数位
            this.falseIncome = numberComma(this.falseIncome.toFixed(2));
            this.trueIncome = numberComma(this.trueIncome.toFixed(2));
            this.trueRate = this.trueRate.toFixed(4);
        }
    }
}
</script>
