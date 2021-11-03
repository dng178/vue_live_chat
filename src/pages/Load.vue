<template>
  <div id="loading">
    <img
      class="img"
      src="../assets/image/loading.gif"
      alt="loading..."
      width="200"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Loading",
   mounted(){
      // setTimeout( () => this.$router.push({ path: '/Main' , name: 'Main', params: { id: localStorage.getId ? localStorage.getId : 3 }}), 2000);
      setTimeout( () => this.$router.push({ path: '/Main' , name: 'Main', params: { id: localStorage.getId ? localStorage.getId : 3  }}), 2000);
      // console.log(this.friends.conversationId);
    },
    computed: {
        ...mapGetters([
            'user',
            'friends'
        ]),

    },
};
</script>

<style lang="scss" scoped>
@import '../assets/sass/loading.scss';
</style>