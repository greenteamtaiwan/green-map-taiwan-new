<template>
  <div>
    <mq-layout mq="lg">
      <IndexPage/>
    </mq-layout>
    <mq-layout mq="md">
      <MapPage/>
    </mq-layout>
  </div>
</template>

<style>

</style>

<script>
import MapPage from '~/components/MapPage.vue';
import IndexPage from '~/components/IndexPage.vue';

export default {
  components: {
    IndexPage,
    MapPage
  }
}
</script>
