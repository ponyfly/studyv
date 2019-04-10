<template>
  <div class="form__wrapper">
    <div class="item__wrapper">
      <h2>单行输入</h2>
      <input type="text" v-model="msg" placeholder="edit me">
      <div>Message is : {{msg}}</div>
    </div>
    <div class="item__wrapper">
      <h2>复选框单个</h2>
      <input type="checkbox" value="play basketball" id="checked" v-model="isChecked">
      <label for="checked">play basketball</label>
      <div>is checked {{isChecked}}</div>
      <h2>复选框多个</h2>
      <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
      <label for="jack">jack</label>
      <input type="checkbox" id="tom" value="tom" v-model="checkedNames">
      <label for="tom">tom</label>
      <input type="checkbox" id="amy" value="amy" v-model="checkedNames">
      <label for="amy">amy</label>
      <div>checked name is : {{checkedNames}}</div>
    </div>
    <div class="item__wrapper">
      <h2>单选框</h2>
      <input type="radio" id="female" value="female" v-model="sex">
      <label for="female">男</label>
      <input type="radio" id="male" value="male" v-model="sex">
      <label for="male">女</label>
      <div>sex is {{sex}}</div>
    </div>
    <div class="item__wrapper">
      <div>单选</div>
      <select name="city" v-model="city">
        <option disabled value="">请选择</option>
        <option>北京</option>
        <option>广州</option>
        <option>上海</option>
      </select>
      <div>city is {{city}}</div>
      <div>多选</div>
      <select name="city" multiple v-model="cities">
        <option disabled value="">请选择</option>
        <option>北京</option>
        <option>广州</option>
        <option>上海</option>
      </select>
      <div>city is {{cities}}</div>
      <div>多选动态渲染</div>
      <select name="city" multiple v-model="checkedAs">
        <option disabled value="">请选择</option>
        <option v-for="(option, index) in checkOptions" :value="option.value" :key="index">{{option.text}}</option>
      </select>
      <div>city is {{checkedAs}}</div>
    </div>
    <div class="item__wrapper">
      <h2>值绑定</h2>
      <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
      <div>toggle 值为 {{toggle}}</div>
      <input type="radio" v-model="pick" :value="a">
      <div>pick 值为 {{pick}}, a 值为{{a}}</div>
      <select v-model="selected">
        <option :value="{number: 123}">123</option>
        <option :value="{number: 456}">456</option>
      </select>
      <div>selected 的值是 {{selected}}</div>
    </div>
    <div class="item__wrapper">
      <h2>修饰符</h2>
      lazy:<input type="text" v-model.lazy="msg2">
      <div>toggle 值为 {{msg2}}</div>
      number:<input type="number" v-model.number="age">
      <div>type of age is {{typeof age}}</div>
      trim:<input type="text" v-model.trim="msg3">
      <div>toggle 值为 {{msg3}}</div>
    </div>

    <base-radio></base-radio>
  </div>
</template>

<script>
export default {
  name: 'FormSu',
  data() {
    return {
      msg: '',
      checkedNames: [],
      isChecked: '',
      sex: '',
      city: '',
      cities: [],
      checkOptions: [
        { text: 'one', value: 'a' },
        { text: 'two', value: 'b' },
        { text: 'three', value: 'c' }
      ],
      checkedAs: [],
      toggle: 'no',
      pick: '',
      a: 'hello',
      selected: '',
      msg2: '',
      msg3: '',
      age: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/mixin.styl"
h2
  color #a6f
.item__wrapper
  padding 20px
  border(1px, #000)
  &+&
    margin-top 10px
input
  wh(100px, 30px)
  border(2px)
  br(4px)
</style>
