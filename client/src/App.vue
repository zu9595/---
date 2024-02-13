<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/HeaderTem.vue';
import Footer from './components/FooterTem.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>
