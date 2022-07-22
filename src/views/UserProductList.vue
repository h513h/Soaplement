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
          <div class="col-md-2">
            <ul class="list-group list-group-flush flex-row flex-md-column mb-3">
              <li class="list-group-item border-bottom py-2 me-2 font-monospace"  role="button" @click="searchCategory()" :class="{'active':!this.displayCategory}">ALL</li>
              <li class="list-group-item border-bottom py-2 me-2 font-monospace" role="button" v-for="(category, i) in categories" :key="i" :class="{'active':this.displayCategory === category}" @click="searchCategory(category)">{{category}}</li>
            </ul>
            <input type="text" placeholder="Search" class="form-control mb-4" aria-describedby="search" v-model="search">
          </div>
          <div class="col-md-10">
            <div class="row align-items-stretch">
              <Cards :search="search" :display-category="displayCategory"/>
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
import GetProducts from '@/mixins/GetProductsMixins.vue'
import AddItemToCart from '@/mixins/AddItemToCartMixins.vue'
import Cards from '@/components/ItemCard.vue'

export default {
  mixins: [NavbarAndFooter, GetProducts, AddItemToCart],
  components: { Cards },
  data () {
    return {
      search: '',
      displayCategory: ''
    }
  },
  methods: {
    searchCategory (category) {
      this.displayCategory = category
    }
  }
}
</script>
