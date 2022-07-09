<template>
  <div class="school">
    <h2>学校名称{{name}}</h2>
    <h2>学校地址{{address+123}}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data(){
    return {
      // name: "shangguigu",
      // address: "cangping"
    }
  },
  // props:['name','address']
  // 接收对数值进行限制
  props:{
    name: {
      type: String,
      required:true,
      default:"123321"
    },
    address: {
      type:Number,
      default:99
    }
  },
}
</script>

<style>
  .school{
    background-color: gray;
  }
</style>