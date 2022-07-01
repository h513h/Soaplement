<template>
    <div class="col-6 col-md-4" v-for="item in products" :key="item.id">
        <div class="card rounded-0 mb-3" @click.prevent="goToProduct(item.id)" role="button">
            <div class="card-img-hover card-img-top position-relative"  @click.stop.prevent="goToProduct(item.id)">
            <img :src="item.mainImageUrl" class="img-fluid rounded-0" alt="product picture">
            </div>
            <div class="card-body pb-0">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.characteristic}}</p>
            <p class="text-decoration-line-through">{{ item.origin_price }}</p>
            <p class="text-danger">${{ item.price }}</p>
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
  mixins: [GetProducts, AddItemToCart]
}
</script>
