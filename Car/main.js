const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: 'a',
        date: 2020,
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: 'b',
        date: 2020,
        price: 1.00,
        count: 1
      },
      {
        id: 3,
        name: 'c',
        date: 2020,
        price: 5.00,
        count: 1
      },
      {
        id: 4,
        name: 'd',
        date: 2020,
        price: 41.00,
        count: 1
      },
    ]
  },
  methods: {
    incr(index) {
      this.books[index].count++;
    },
    decr(index) {
      book = this.books[index];
      if (book.count > 0) {
        book.count--;
      }
    },
    removeBtn(index) {
      this.books.splice(index, 1);
    },
    getFinalPrice(price) {
      return '￥' + price.toFixed(2);
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      //1. 普通for
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      //2. 增强for  in 获得索引   of 获得对象
      // for (let i in this.books) {
      //     totalPrice += this.books[i].price * this.books[i].count;
      // }
      // for (let book of this.books) {
      //   totalPrice += book.price * book.count;
      // }
      //3.reduce // 0 是对 preValue 做初始化
      // return this.books.reduce(function (preValue,book) {
      //     return preValue + book.price * book.count
      // },0);
      return this.books.reduce((preValue, book) => preValue + book.price * book.count, 0)
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  }
})