<template>
    <div class="col-6 col-md-4" v-for="(item, i) in displayItems" :key="item.id">
        <div class="card rounded-0 border-0 mb-4" @click.prevent="goToProduct(item.id)" role="button">
            <div class="card-img-hover card-img-top position-relative pt-100" :style="backgroundImg(item.mainImageUrl)"  @click.stop.prevent="goToProduct(item.id)">
                <div class="fs-6 position-absolute bg-warning top-0 px-2 py-1 flag text-white" v-if="i<5">NEW</div>
                <div class="fs-3 position-absolute end-0 me-2 wish" role="button" @click.stop.prevent="updateWishlist(item)" :class="{'text-danger':wishlistItemID.includes(item.id)}">♥</div>
            </div>
            <div class="card-body pb-0">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.characteristic}}</p>
            <p><span :class="{ 'text-decoration-line-through' : item.origin_price !== item.price}">{{ item.origin_price }}</span><span class="text-danger"  v-if="item.origin_price !== item.price">${{ item.price }}</span><span class="text-center text-white bg-danger float-end py-1 px-2"  v-if="item.origin_price !== item.price">SALE</span></p>
            </div>
            <div class="d-grid">
                <button type="button" class="btn btn-light rounded-0" @click.stop.prevent="addCart(item.id)" :class="{'disabled' : this.status.loadingItem === item.id}">
                <div class="spinner-border spinner-border-sm" role="status" v-if="this.status.loadingItem === item.id">
                    <span class="visually-hidden">Loading...</span>
                </div>
                Add to Cart
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import GetProducts from '@/mixins/GetProductsMixins.vue'
import AddItemToCart from '@/mixins/AddItemToCartMixins.vue'

export default {
  mixins: [GetProducts, AddItemToCart],
  props: ['search', 'display-category'],
  data () {
    return {
      wishlist: [],
      wishlistItemID: []
    }
  },
  computed: {
    displayItems () {
      return this.products.filter(item => {
        if (this.displayCategory) {
          return item.category.match(this.displayCategory)
        } else {
          return item.title.match((new RegExp(this.search, 'ig'))) || item.category.match((new RegExp(this.search, 'ig')))
        }
      })
    }
  },
  methods: {
    backgroundImg (url) {
      return {
        'background-image': 'url("' + url + '")',
        'background-position': 'center center',
        'background-size': 'cover'
      }
    },
    updateWishlist (item) {
      const isWished = this.wishlistItemID.indexOf(item.id)
      if (isWished < 0) {
        this.wishlist.push(item)
      } else {
        this.wishlist.splice(isWished, 1)
      }
      this.wishlistItemID = this.wishlist.map((index) => {
        return index.id
      })
    }
  }
}
</script>
