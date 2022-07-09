<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点我输出上方dom</button>
    <School name="李四" :address="123"/>
    <School/>
    <School/>
    <School/>
  </div>
</template>

<script>
import School from './components/School.vue'
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
  components:{School}
}
</script>

<style>

</style>