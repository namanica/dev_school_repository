class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        return Math.ceil(this.itemCount() / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.pageCount()) {
            return -1;
        }
        if (pageIndex === this.pageCount() - 1) {
            return this.itemCount() % this.itemsPerPage || this.itemsPerPage;
        }
        return this.itemsPerPage;
    }

    pageIndex(itemIndex) {
        if (itemIndex >= 0 && itemIndex < this.itemCount()) {
            return Math.floor(itemIndex / this.itemsPerPage);
        } else return -1;
    }
}
   let res = new PaginationHelper(['a', 'b','c'], 2);
    console.log(res.pageIndex(1));