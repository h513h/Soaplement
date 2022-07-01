<script>
export default {
  data () {
    return {
      isLoading: true,
      isCartEmpty: true,
      carts: {},
      sum: '',
      discountSum: '',
      renewItem: {},
      couponMessage: ''
    }
  },
  methods: {
    getCarts () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          this.carts = res.data.data.carts
          if (this.carts.length > 0) {
            this.isCartEmpty = false
            this.getTotal()
          } else {
            this.isCartEmpty = true
          }
        })
    },
    deleteItem (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item}`
      this.$http.delete(api)
        .then(res => {
          this.getCarts()
        })
    },
    getTotal () {
      const total = this.carts.reduce((pre, cur) => {
        return pre + cur.total
      }, 0)
      this.sum = total
      const totalAfterDiscount = this.carts.reduce((pre, cur) => {
        return pre + cur.final_total
      }, 0)
      this.discountSum = totalAfterDiscount
    },
    renewQty (addItem, num, id, productId) {
      if (addItem) {
        num += 1
      } else {
        num -= 1
      }
      this.renewItem = {
        product_id: productId,
        qty: parseInt(num)
      }
      const renewItem = this.renewItem
      if (renewItem.qty === 0) {
        this.deleteItem(id)
      } else {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
        this.$http.put(api, { data: renewItem })
          .then(res => {
            this.getCarts()
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    useCoupon (couponCode) {
      const code = {
        code: couponCode
      }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      this.$http.post(api, { data: code })
        .then(res => {
          if (res.data.success) {
            this.couponMessage = 'Applied successfully!'
          } else {
            this.couponMessage = 'Sorry, this code is invalid...'
          }
          this.getCarts()
        })
        .catch(err => {
          console.log(err)
        })
    },
    goToReceipt () {
      this.$router.push('/receipt')
    }
  },
  created () {
    this.getCarts()
    this.emitter.on('renewCart', this.getCarts)
  }
}
</script>
