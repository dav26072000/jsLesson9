// Write Pagination object that will get an array and pageSize, then willreturn the following.
// prevPage
// nextPage
// firstPage
// lastPage
// goToPage
// getPageItems

let Pagination = {
  pageItem: [],
  page: 0,
  init: function (arr, count) {
    let loopArr = Math.ceil(arr.length / count);
    for (let i = 0; i < loopArr; i++) {
      this.pageItem[i] = [];
      for (let j = count * i; j < count * i + count; j++) {
        if (arr[j] === undefined) {
          continue;
        }
        this.pageItem[i].push(arr[j]);
      }
    }
    this.page = 0;
    return "created successfully";
  },
  prevPage: function () {
    if (this.page === 0) {
      this.page = this.pageItem.length - 1;
    } else {
      this.page -= 1;
    }
    return this.page;
  },
  nextPage: function () {
    if (this.page === this.pageItem.length - 1) {
      this.page = 0;
    } else {
      this.page += 1;
    }
    return this.page;
  },
  firstPage: function () {
    this.page = 0;
  },
  lastPage: function () {
    this.page = this.pageItem.length - 1;
  },
  goToPage: function (p) {
    if (this.pageItem.length - 1 > p >= 0) {
      this.page = p;
      return "teleported";
    } else {
      return "not some page";
    }
  },
  getPageItems: function () {
    return this.pageItem[this.page];
  },
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

// console.log(Pagination.init(alphabetArray, 4));
// console.log(Pagination.getPageItems());
// console.log(Pagination.prevPage());
// console.log(Pagination.getPageItems());
// console.log(Pagination.nextPage());
// console.log(Pagination.getPageItems());
// console.log(Pagination.nextPage());
// console.log(Pagination.nextPage());
// console.log(Pagination.getPageItems());
// console.log(Pagination.goToPage(4));
// console.log(Pagination.getPageItems());
