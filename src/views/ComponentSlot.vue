<template>
  <div>
    <LgSlot1>{{url}}</LgSlot1>
    <lg-slot2></lg-slot2>
    <lg-slot2>save</lg-slot2>
    <LgSlot3>
      <template slot="header">
        <h1>{{containerData.header}}</h1>
      </template>
      <p>{{containerData.content}}</p>
      <p slot="footer">{{containerData.footer}}</p>
    </LgSlot3>
    <LgSlot4>
      <template slot-scope="slotProps">
        <div>{{slotProps.slotScopeData.msg1}}</div>
      </template>
    </LgSlot4>
    <LgSlot5 :todos="todos">
      <template slot-scope="slotProps">
        <div v-if="slotProps.todo.isCompleted">√</div>
        <div>{{slotProps.todo.text}}</div>
      </template>
    </LgSlot5>
    <LgSlot5 :todos="todos">
      <template slot="todo" slot-scope="slotProps">
        <div v-if="slotProps.todo.isCompleted">√</div>
        <div>{{slotProps.todo.text}}</div>
      </template>
    </LgSlot5>
    <LgSlot5 :todos="todos">
      <template slot-scope="{ todo }">
        <div v-if="todo.isCompleted">√</div>
        <div>{{todo.text}}</div>
      </template>
    </LgSlot5>
    <LgSlot5 :todos="todos">
      <template slot-scope="{ todo: mytodo }">
        <div v-if="mytodo.isCompleted">√</div>
        <div>{{mytodo.text}}</div>
      </template>
    </LgSlot5>
  </div>
</template>

<script>
  import LgSlot1 from '@/components/LgSlot1.vue'
  import LgSlot2 from '@/components/LgSlot2.vue'
  import LgSlot3 from '@/components/LgSlot3.vue'
  import LgSlot4 from '@/components/LgSlot4.vue'
  import LgSlot5 from '@/components/LgSlot5.vue'
  export default {
    name: 'ComponentSlot',
    data() {
      return {
        url: '父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。',
        containerData: {
          header: 'headerData',
          content: '这里是一个未命名插槽，也就是默认插槽，捕获所有未被匹配的内容',
          footer: 'footerData'
        },
        todos: [
          { id: 0, text: '吃饭', isCompleted: false },
          { id: 1, text: '睡觉', isCompleted: true },
          { id: 2, text: '打豆豆', isCompleted: false }
        ]
      }
    },
    methods: {
      name() {
      }
    },
    components: {
      LgSlot1,
      LgSlot2,
      LgSlot3,
      LgSlot4,
      LgSlot5
    }
  }
</script>

<style scoped>

</style>
