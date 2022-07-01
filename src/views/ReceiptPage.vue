<template>
    <Navbar></Navbar>
    <div class="vh-30 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt="products list" class="img-fluid">
    </div>
    <div class="container mt-3 mb-5 font-monospace">
        <h2 class="mb-3">Receipt information</h2>
        <div class="row mb-3 justify-content-evenly text-center text-success">
          <div class="col-3">
            <div class="fs-4">●</div>
          </div>
          <div class="col-3">
            <div class="fs-4">●</div>
          </div>
          <div class="col-3">
            <div class="fs-4">◯</div>
          </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <Form @submit="onSubmit">
                    <div class="row">
                        <div class="col-6 mb-3">
                            <label for="firstName" class="form-label">First Name</label>
                            <Field type="text" class="form-control" name="firstName" required id="firstName" aria-describedby="firstName" v-model="receipt.user.firstName" :rules="validateRequired"/>
                            <ErrorMessage name="firstName" class="text-danger" />
                        </div>
                        <div class="col-6 mb-3">
                            <label for="lastName" class="form-label">Last Name</label>
                            <Field type="text" class="form-control" id="lastName" required name="lastName" aria-describedby="lastName" v-model="receipt.user.lastName" :rules="validateRequired"/>
                            <ErrorMessage name="lastName" class="text-danger" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 mb-3">
                            <label for="email" class="form-label">E-mail</label>
                            <Field type="email" name="email" class="form-control" required id="email" v-model="receipt.user.email" :rules="validateEmail"/>
                            <ErrorMessage name="email" class="text-danger" />
                        </div>
                        <div class="col-6 mb-3">
                            <label for="tel" class="form-label">Contact number</label>
                            <Field type="text" class="form-control" required name="tel" id="tel" v-model="receipt.user.tel" :rules="validateNum"/>
                            <ErrorMessage name="tel" class="text-danger" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <Field type="text" class="form-control" name="address" id="address" aria-describedby="address" v-model="receipt.user.address" :rules="validateRequired"/>
                        <ErrorMessage name="address" class="text-danger" />
                    </div>
                    <div class="mb-3">
                        <label for="note" class="form-label">Note</label>
                        <textarea type="text" class="form-control" id="note" aria-describedby="note" rows="3" v-model="receipt.message"></textarea>
                    </div>
                    <div class="d-flex justify-content-between">
                      <button class="btn btn-link text-secondary p-0 rounded-1" @click.prevent="backToLastPage">Shopping more</button>
                      <button class="btn btn-success rounded-1" type="submit">Go to Next</button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import NavbarAndFooter from '@/mixins/NavbarAndFooterMixin.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'

export default {
  mixins: [NavbarAndFooter],
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data () {
    return {
      receipt: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    onSubmit (values) {
      this.readyOrder()
    },
    validateRequired (value) {
      if (!value) {
        return 'This field is required'
      }
      return true
    },
    validateEmail (value) {
      if (!value) {
        return 'This field is required'
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      if (!regex.test(value)) {
        return 'This field must be a valid email'
      }
      return true
    },
    validateNum (value) {
      if (!value) {
        return 'This field is required'
      }
      const regex = /[0-9]{10}/
      if (!regex.test(value)) {
        return 'This field must be a valid tel number'
      }
      return true
    },
    readyOrder () {
      this.receipt.user.name = this.receipt.user.firstName + this.receipt.user.lastName
      const user = this.receipt
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      this.$http.post(api, { data: user })
        .then(res => {
          const orderId = res.data.orderId
          this.$router.push(`/confirmation/${orderId}`)
        })
        .catch(err => {
          console.log(err)
        })
    },
    backToLastPage () {
      this.$router.go(-1)
    }
  }
}
</script>
