export const mixin = {
    methods: {
        showname(){
            alert(this.name)
        },
    },
    mounted(){
        console.log("nihao")
    },
}
export const mixin2 = {
    data(){
        return {
            address: 10000,
        }
    }
}
