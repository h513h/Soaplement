<template>
    <div class="container">
        <div class="row vh-100 justify-content-center align-items-center">
            <div class="col col-lg-5">
                <h1 class="mb-5 font-monospace">Sign In</h1>
                <form class="d-flex flex-column justify-content-end">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="user.username">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="user.password">
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="signIn">Sign In</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(api, this.user)
        .then(res => {
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
            this.$router.push('/dashboard/manageproducts')
          }
        })
    }
  }
}
</script>
