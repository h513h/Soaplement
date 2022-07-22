<script>
export default {
  data () {
    return {
      products: [],
      categories: [],
      newProducts: {},
      product: {}
    }
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api)
        .then(res => {
          this.products = res.data.products.reverse()
          this.newProducts = this.products.slice(0, 5)
          const temCategory = this.products.map((index) => {
            return index.category
          })
          this.categories = Array.from(new Set(temCategory)).sort()
        })
        .catch(err => {
          console.log(err)
        })
    },
    goToProduct (id) {
      this.$router.push(`/products/detail/${id}`)
      this.getProduct(id)
    },
    getProduct (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(api)
        .then(res => {
          this.product = res.data.product
        })
    }
  },
  mounted () {
    this.getProducts()
  },
  created () {
    this.getProducts()
  }
}
</script>
