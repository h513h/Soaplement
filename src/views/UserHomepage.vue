<template>
    <Navbar></Navbar>
    <div id="carousel" ref="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" @click.prevent="turnToProductsPage">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner mx-vh-70">
            <div class="carousel-item active mx-vh-70" data-bs-interval="2000">
                <img src="https://images.unsplash.com/photo-1578499177313-0416e8f509e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" class="img-fluid" alt="picture">
                <div class="carousel-caption">
                    <h2 class="font-monospace">Soaplement</h2>
                </div>
            </div>
            <div class="carousel-item mx-vh-70" data-bs-interval="2000">
                <img src="https://images.unsplash.com/photo-1557176286-97a841415173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" class="img-fluid" alt="picture">
                <div class="carousel-caption">
                    <h2 class="font-monospace">Soaplement</h2>
                </div>
            </div>
            <div class="carousel-item mx-vh-70" data-bs-interval="2000">
                <img src="https://images.unsplash.com/photo-1569715442753-2eef87d75db3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" class="img-fluid" alt="picture">
                <div class="carousel-caption">
                    <h2 class="font-monospace">Soaplement</h2>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="container overflow-auto py-5">
        <h3 class="text-center font-monospace my-3 fs-1">Latest</h3>
        <div class="row flex-nowrap">
            <div class="col-5 col-md-4" v-for="item in newProducts" :key="item.id">
                <div class="card border-0" @click.stop.prevent="goToProduct(item.id)">
                    <div class="card-img-hover card-img-top position-relative">
                        <img :src="item.mainImageUrl" class="img-fluid rounded-0" alt="product">
                    </div>
                    <div class="card-body p-4">
                        <h4 class="card-title">{{item.title}}</h4>
                        <p class="card-text">{{item.characteristic}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid py-5 p-0">
        <div class="row align-items-start">
            <div class="col-md-6 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative bg-size-hover-180 ingredient-mint" style="background-image: url('https://images.unsplash.com/photo-1622576454275-729fbf6aa6eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop')"></div>
            <div class="col-6 col-md-3 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative bg-size-hover-180 ingredient-lavender"  style="background-image: url('https://images.unsplash.com/photo-1445510491599-c391e8046a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop')"></div>
            <div class="col-6 col-md-3 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative bg-size-hover-180 ingredient-milk"  style="background-image: url('https://images.unsplash.com/photo-1446126102442-f6b2b73257fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop')"></div>
        </div>
        <div class="row">
            <div class="col-4 col-md-3 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative bg-size-hover-180 ingredient-flower"  style="background-image: url('https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop')"></div>
            <div class="col-4 col-md-3 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative bg-size-hover-180 ingredient-flower"  style="background-image: url('https://images.unsplash.com/photo-1507646871303-331b8f659227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop')"></div>
            <div class="col-4 col-md-2 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative bg-size-hover-180 ingredient-flower"  style="background-image: url('https://images.unsplash.com/photo-1546842931-886c185b4c8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop')"></div>
            <div class="col-md-4 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative bg-size-hover-180 ingredient-herb"  style="background-image: url('https://images.unsplash.com/photo-1532092367580-3bd5bc78dd9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop')"></div>
        </div>
    </div>
    <div class="container mb-5">
        <div class="row justify-content-center align-items-stretch">
            <div class="col-10 col-md-5 me-3">
                <div class="row">
                    <img src="https://images.unsplash.com/photo-1618481212093-a0286ef0cc95" alt="review" class="img-fluid">
                    <div class="text-center mt-3">
                        <i class="fa-solid fa-quote-left fs-3"></i>
                        <p>I love the Oatmeal & Honey bar which works great for me since I am allergic to many other soaps and scents! The shipping is very quick, too.<br> - Kay W.</p>
                    </div>
                </div>
            </div>
            <div class="col-10 col-md-5">
                <div class="row flex-column flex-md-column-reverse">
                    <div>
                        <img src="https://images.unsplash.com/photo-1595090475026-274ec9ef1753" alt="review" class="img-fluid">
                    </div>
                    <div class="text-center mt-3">
                        <i class="fa-solid fa-quote-left fs-3"></i>
                        <p>I love the Oatmeal & Honey bar which works great for me since I am allergic to many other soaps and scents! The shipping is very quick, too.<br> - Kay W.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid p-5 bg-primary" style="background: url('https://images.unsplash.com/photo-1442458017215-285b83f65851') no-repeat center center fixed; background-size: cover;">
        <div class="row justify-content-center">
            <div class="col-10 col-md-5" v-if="!showCoupon">
                <h4 class="mb-3 text-light">Subscribe Us to get the latest news!</h4>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" name="subscribe" placeholder="Please input your e-mail" aria-label="subscribe" aria-describedby="subscribe_btn">
                    <button class="btn btn-primary" type="submit" id="subscribe_btn" @click="submitSubscribe">Subscribe</button>
                </div>
            </div>
            <div class="col-10 col-md-8 bg-warning" v-else>
                <h4 class="text-center text-light">Thank you for subscription! Here is a special coupon for you.</h4>
                <h4 class="text-center">Use <span class="fw-bold fst-italic font-monospace fs-3">10OFF</span>   to get 10% discount!</h4>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
<script>
import NavbarAndFooter from '@/mixins/NavbarAndFooterMixin.vue'
import Carousel from 'bootstrap/js/dist/carousel'
import GetProducts from '@/mixins/GetProductsMixins.vue'

export default {
  mixins: [NavbarAndFooter, GetProducts],
  data () {
    return {
      carousel: {},
      showCoupon: false
    }
  },
  methods: {
    turnToProductsPage () {
      this.$router.push('/products')
    },
    submitSubscribe () {
      this.showCoupon = true
      console.log(this.showCoupon)
      setTimeout(() => {
        this.showCoupon = false
      }, (1000 * 60 * 5))
    }
  },
  mounted () {
    this.carousel = new Carousel(this.$refs.carousel)
  }
}
</script>
