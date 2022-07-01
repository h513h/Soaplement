<template>
    <footer class="p-sm-5 py-5 bg-primary">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-3 mb-3">
                    <h3 class="font-monospace text-center">Soaplement</h3>
                    <p class="ps-3">Exclusive brand-new and long-lost favourite cosmetics that you can't get anywhere else
                        <a @click.prevent="goToLogin" class="btn btn-link">Login</a>
                    </p>
                </div>
                <div class="col-md-3 text-center mb-3">
                    <h3 class="font-monospace">Contact Us</h3>
                    <p>serve@soaplement.com</p>
                </div>
                <div class="col-md-3 text-center">
                    <h3 class="font-monospace">Follower Us</h3>
                    <div class="d-flex justify-content-center">
                        <p class="fs-5 me-3 d-inline-block hover-text-white" role="button"><i class="fa-brands fa-facebook"></i></p>
                        <p class="fs-5 me-3 hover-text-white" role="button"><i class="fa-brands fa-instagram-square"></i></p>
                        <p class="fs-5 hover-text-white" role="button"><i class="fa-brands fa-twitter-square"></i></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  methods: {
    goToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>
