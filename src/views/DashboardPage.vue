<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-2 d-lg-inline-block">
                <div class="d-lg-none text-end">
                    <div class="dropdown">
                      <button class="btn btn-lg dropdown-toggle" type="button" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false"></button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                        <li class="nav-item mb-2">
                            <router-link class="dropdown-item" to="/dashboard/manageproducts"><i class="fa-brands fa-pagelines me-2"></i>Products</router-link>
                        </li>
                        <li class="nav-item mb-2">
                            <router-link class="dropdown-item" to="/dashboard/manageorders"><i class="fa-solid fa-sack-dollar me-2"></i>Order</router-link>
                        </li>
                        <li class="nav-item mb-2">
                            <router-link class="dropdown-item" to="/dashboard/managecoupons"><i class="fa-solid fa-piggy-bank me-2"></i>Coupons</router-link>
                        </li>
                        <li class="nav-item mb-2">
                            <a class="dropdown-item" @click.prevent="logout" role="button"><i class="fa-solid fa-door-open me-2"></i>Sign out</a>
                        </li>
                    </ul>
                  </div>
                </div>
                <div class="d-none d-lg-inline-block">
                  <img src="https://cdn-icons-png.flaticon.com/512/2750/2750801.png" alt="logo" class="img-fluid">
                  <ul class="nav flex-column">
                      <li class="nav-item mb-2">
                          <router-link class="nav-link text-dark" to="/dashboard/manageproducts"><i class="fa-brands fa-pagelines me-2"></i>Products</router-link>
                      </li>
                      <li class="nav-item mb-2">
                          <router-link class="nav-link text-dark" to="/dashboard/manageorders"><i class="fa-solid fa-sack-dollar me-2"></i>Order</router-link>
                      </li>
                      <li class="nav-item mb-2">
                          <router-link class="nav-link text-dark" to="/dashboard/managecoupons"><i class="fa-solid fa-piggy-bank me-2"></i>Coupons</router-link>
                      </li>
                      <li class="nav-item mb-2">
                          <a class="nav-link" @click.prevent="logout" role="button"><i class="fa-solid fa-door-open me-2"></i>Sign out</a>
                      </li>
                  </ul>
                </div>
            </div>
            <div class="col-lg-10">
              <div class="mt-3 position-relative"><ToastMessages/></div>
              <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue'
export default {
  components: { ToastMessages },
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api)
        .then(res => {
          if (res.data.success) {
            document.cookie = `hexToken=;expires= ${new Date(0).toGMTString()}`
            this.$router.push('/login')
          }
        })
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = `${token}`
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user)
      .then(res => {
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
