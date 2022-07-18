<template>
    <Navbar></Navbar>
    <div id="carousel" class="carousel slide" data-bs-ride="carousel" ref="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active max-vh-70">
                <img src="@/assets/images/banner1.png" class="d-block w-100" alt="banner">
            </div>
            <div class="carousel-item max-vh-70">
                <img src="@/assets/images/banner2.png" class="d-block w-100" alt="banner">
            </div>
            <div class="carousel-item max-vh-70">
                <img src="@/assets/images/banner3.png" class="d-block w-100" alt="banner">
            </div>
            <div class="carousel-item max-vh-70">
                <img src="@/assets/images/banner4.png" class="d-block w-100" alt="banner">
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
    <div class="py-5">
        <div class="container">
            <h3 class="font-monospace my-3 fs-1">Latest</h3>
            <hr class="mb-3">
        </div>
        <div class="container-fluid overflow-horizontal pt-3">
            <div class="row flex-nowrap ps-5">
                <div class="col-7 col-md-3" v-for="item in newProducts" :key="item.id">
                    <div class="card border-0" @click.stop.prevent="goToProduct(item.id)">
                        <div class="card-img-hover card-img-top pt-100" :style="backgroundImg(item.mainImageUrl)"></div>
                        <div class="card-body p-2">
                            <h4 class="card-title">{{item.title}}</h4>
                            <p class="card-text">{{item.characteristic}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <h3 class="font-monospace my-3 fs-1">Fresh & Natural ingredients</h3>
        <hr class="mb-3">
    </div>
    <div class="container-fluid overflow-hidden pt-3">
        <div class="row align-items-start">
            <div class="col-md-6 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative" :style="backgroundImg(content1)" style="hover{background-color: black}">
                <h3 class="content-text">Mint</h3>
            </div>
            <div class="col-6 col-md-3 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative" :style="backgroundImg(content2)">
                <h3 class="content-text">Lavenders</h3>
            </div>
            <div class="col-6 col-md-3 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative"  :style="backgroundImg(content3)">
                <h3 class="content-text">Milk</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-4 col-md-3 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative"  :style="backgroundImg(content4)">
                <h3 class="content-text">Flowers</h3>
            </div>
            <div class="col-4 col-md-3 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative"  :style="backgroundImg(content5)">
                <h3 class="content-text">Flowers</h3>
            </div>
            <div class="col-4 col-md-2 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative"  :style="backgroundImg(content6)">
                <h3 class="content-text">Flowers</h3>
            </div>
            <div class="col-md-4 overflow-hidden p-0 vh-30 text-center text-light font-monospace img-hover-effect fs-3 position-relative"  :style="backgroundImg(content7)">
                <h3 class="content-text">Herbs</h3>
            </div>
        </div>
    </div>
    <div class="container py-5">
        <h3 class="font-monospace my-3 fs-1">Feedback & Reviews</h3>
        <hr class="mb-3">
        <div class="row justify-content-center align-items-stretch pt-3">
            <div class="col-10 col-md-5 me-3">
                <div class="row">
                    <img src="https://images.unsplash.com/photo-1618481212093-a0286ef0cc95" alt="review" class="img-fluid">
                    <div class="text-center my-5">
                        <i class="fa-solid fa-quote-left fs-3"></i>
                        <p>I love the Oatmeal & Honey bar which works great for me since I am allergic to many other soaps and scents! The shipping is very quick, too.<br> - Anna.</p>
                    </div>
                </div>
            </div>
            <div class="col-10 col-md-5">
                <div class="row flex-column flex-md-column-reverse">
                    <div>
                        <img src="https://images.unsplash.com/photo-1595090475026-274ec9ef1753" alt="review" class="img-fluid">
                    </div>
                    <div class="text-center my-5">
                        <i class="fa-solid fa-quote-left fs-3"></i>
                        <p>Absolutely fantastic soap that all my family use. We all have sensitive skin, and these soaps are great and smell gorgeous. Love the idea of the box as it is zero waste. You get some really chunky bars and little bits of soap. The little bits of soap are really useful when travelling or cleaning. Thank you for despatching so quickly and in a really sturdy box, which I can keep all the soap bars/bits in until I need them. Will definitely be buy more from the shop!!<br> - Kay W.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-stretch pt-3">
            <div class="col-10 col-md-5 me-3">
                <div class="row">
                    <img src="https://images.unsplash.com/photo-1484980859177-5ac1249fda6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1529&q=80" alt="review" class="img-fluid">
                    <div class="text-center my-5">
                        <i class="fa-solid fa-quote-left fs-3"></i>
                        <p>I love the Oatmeal & Honey bar which works great for me since I am allergic to many other soaps and scents! The shipping is very quick, too.<br> - Anna.</p>
                    </div>
                </div>
            </div>
            <div class="col-10 col-md-5">
                <div class="row flex-column flex-md-column-reverse">
                    <div>
                        <img src="https://images.unsplash.com/photo-1543364195-077a16c30ff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZydWl0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="review" class="img-fluid">
                    </div>
                    <div class="text-center my-5">
                        <i class="fa-solid fa-quote-left fs-3"></i>
                        <p>Absolutely fantastic soap that all my family use. We all have sensitive skin, and these soaps are great and smell gorgeous. Love the idea of the box as it is zero waste. You get some really chunky bars and little bits of soap. The little bits of soap are really useful when travelling or cleaning. Thank you for despatching so quickly and in a really sturdy box, which I can keep all the soap bars/bits in until I need them. Will definitely be buy more from the shop!!<br> - Kay W.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid p-5 bg-primary" :style="backgroundImg(subscription)" style="background-attachment: fixed;">
        <div class="row justify-content-center py-5">
            <div class="col-10 col-md-5">
                <h4 class="mb-3 text-light font-monospace">Subscribe Us to get the latest news!</h4>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" name="subscribe" placeholder="Please input your e-mail" aria-label="subscribe" aria-describedby="subscribe_btn">
                    <button class="btn btn-primary" type="submit" id="subscribe_btn">Subscribe</button>
                </div>
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
      content1: require('@/assets/images/content1.png'),
      content2: require('@/assets/images/content2.png'),
      content3: require('@/assets/images/content3.png'),
      content4: require('@/assets/images/content4.png'),
      content5: require('@/assets/images/content5.png'),
      content6: require('@/assets/images/content6.png'),
      content7: require('@/assets/images/content7.png'),
      subscription: require('@/assets/images/subscription.png')
    }
  },
  methods: {
    turnToProductsPage () {
      this.$router.push('/products')
    },
    backgroundImg (url) {
      return {
        'background-image': 'url("' + url + '")',
        'background-position': 'center center',
        'background-size': 'cover'
      }
    }
  },
  mounted () {
    this.carousel = new Carousel(this.$refs.carousel)
  }
}
</script>
