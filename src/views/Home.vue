<template>
  <div>{{ data }}</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['data']),
  },
};
</script>
