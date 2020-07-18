<template>
  <div>
    {{ data }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Component',
  computed: {
    ...mapGetters([
      'data',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
