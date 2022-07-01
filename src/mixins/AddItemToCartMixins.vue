<script>
export default {
  data () {
    return {
      status: {
        loadingItem: ''
      }
    }
  },
  methods: {
    addCart (id) {
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1
      }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(api, { data: cart })
        .then(res => {
          this.status.loadingItem = ''
          this.emitter.emit('renewCart')
        })
    }
  }
}
</script>
