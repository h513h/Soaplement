<template>
    <Navbar></Navbar>
    <div class="vh-30 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c" alt="products list" class="img-fluid">
    </div>
    <div class="container my-5 h-100 mi-vh-40">
        <div class="row justify-content-center">
            <div class="col-md-6 text-center">
                <h2>Hi, We are preparing...</h2>
                <button type="button" class="btn btn-link text-center" @click.prevent="turnToProductsPage">Go to shopping</button>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import NavbarAndFooter from '@/mixins/NavbarAndFooterMixin.vue'

export default {
  mixins: [NavbarAndFooter],
  methods: {
    turnToProductsPage () {
      this.$router.push('/products')
    }
  }
}
</script>
