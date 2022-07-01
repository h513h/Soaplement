<template>
    <Navbar></Navbar>
    <div v-if="this.$route.path === '/products'">
      <div class="vh-30 overflow-hidden position-relative">
        <img src="https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c" alt="products list" class="img-fluid">
        <h2 class="position-absolute top-50 start-50 translate-middle font-monospace text-white">Products</h2>
      </div>
      <div class="container my-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
              <router-link class="breadcrumb-item" to="/homepage">Home</router-link>
              <router-link class="breadcrumb-item active" to="/products" aria-current="page">Products</router-link>
          </ol>
        </nav>
        <div class="row justify-content-end">
          <div class="col-md-10">
            <div class="row align-items-stretch">
              <Card/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
    <Footer></Footer>
</template>

<script>
import NavbarAndFooter from '@/mixins/NavbarAndFooterMixin.vue'
import Card from '@/components/ItemCard.vue'

export default {
  mixins: [NavbarAndFooter],
  components: { Card }
}
</script>
