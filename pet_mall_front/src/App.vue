<template>
  <div class="demo">
    <h4 class="qwe" v-text="msg" ref="title"></h4>
    <button @click="showDOM">点我输出上方dom</button>
    <School name="李四" :address="123"/>
    <School/>
    <Student/>
    <School/>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
  name: 'App',
  data(){
    return {
      msg: "欢迎学习vue"
    }
  },
  methods:{
    showDOM(){
      console.log(this.$refs.title)
    }
  },
  components:{School,Student}
}
</script>

<style lang="less">
  .demo{
    background-color: pink;
    .qwe{
      font-size: 40px;
    }
  }
</style>