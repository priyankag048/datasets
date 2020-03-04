class BinarySearch {

  private search(...args: [number[],number, number, number]): number{
    const[array, start, end, value] = args;
    if(end >= start){
      const mid = Math.floor((start+end)/2);
      if(array[mid] === value) {
        return mid;
      }else if(value < array[mid]) {
        return this.search(array, start, mid-1, value);
      } else {
        return this.search(array, mid+1, end, value);
      }
    }
    return -1;
  }

  searchSortedLinearArray(arr:number[], value: number):number{
    return this.search(arr, 0, arr.length -1, value);
  }
    
  searchSortedMatrix(mat:number[][], value: number):{
    row:number;
    column: number;
  } | number {
    const numberOfColumns = mat[0].length;
    const newArray = mat.flat(2);
    const index = this.search(newArray, 0, newArray.length-1, value);
    if(index === -1) {
      return -1;
    }
    return {
      row: Math.floor(index/numberOfColumns),
      column: index%numberOfColumns
    }
  }

  searchRowAndColumnSortedMatrix(mat:number[][], value:number):{
    row:number;
    column: number;
  } | number {
      let i =0;
      let n = mat[0].length;
      let j = n-1;
      while( i < n && j >= 0 ){
        if(mat[i][j] === value) {
          return {
            row: i,
            column: j
          }
        } else if(value < mat[i][j]) {
          j--;
        } else {
          i++
        }
      }
      return -1;
  }

}

export { BinarySearch }
