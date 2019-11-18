/*2.  PaginationHelper
For this exercise you will be strengthening your page-fu mastery.
 You will complete the PaginationHelper class,
  which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer 
indicating how many items will be allowed per each page. 
The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1
*/

class PaginationHelper {
    constructor (arr = [], num = 0 ) {
      this.arr = arr;
      this.num = num;

    }

    pageCount(){ return  Math.ceil(this.arr.length / this.num);}
    
    itemCount(){return this.arr.length;}
    
    pageItemCount(ind = 0){
      let pages = Math.ceil(this.arr.length / this.num) - 1;
      let res = -1;
      
      if (pages > ind) res = this.num;
      if (pages == ind) res = this.arr.length % this.num;
     return res;
    }
    pageIndex(ind = 0){
      return (ind <= this.arr.length && ind >= 0) ? Math.floor(ind / this.num): -1;
    }


}

let helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log( helper.pageCount());
console.log( helper.itemCount());
console.log( helper.pageItemCount(0));
console.log( helper.pageItemCount(1));
console.log( helper.pageItemCount(2));

console.log(helper.pageIndex(5));
console.log(helper.pageIndex(2));
console.log(helper.pageIndex(20));
console.log(helper.pageIndex(-10));