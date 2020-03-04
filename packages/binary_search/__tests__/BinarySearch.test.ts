import {BinarySearch} from '../src/BinarySearch';
const binarySearch = new BinarySearch();

describe('Binary search for linear array', () => {
    it('should return -1, given the array = [1,4,7,12,15] and the value= 5', () => {
        const inputArray = [1,4,7,12,15];
        const value = 5;
        const result = binarySearch.searchSortedLinearArray(inputArray, value);
        expect(result).toEqual(-1);
    });

    it('should return 3, given the array = [1,4,7,12,15] and the value= 12', () => {
        const inputArray = [1,4,7,12,15];
        const value = 12;
        const result = binarySearch.searchSortedLinearArray(inputArray, value);
        expect(result).toEqual(3);
    });
});

describe('Binary search for 2D matrix', () => {
    it('should return -1, given the array = [[1,4,7],[12,15,17],[23,30,32]] and the value= 5', () => {
        const inputArray = [[1,4,7],[12,15,17],[23,30,32]];
        const value = 5;
        const result = binarySearch.searchSortedMatrix(inputArray, value);
        expect(result).toEqual(-1);
    });

    it('should return 3, given the array = [[1,4,7],[12,15,17],[23,30,32]] and the value= 12', () => {
        const inputArray = [[1,4,7],[12,15,17],[23,30,32]];
        const value = 12;
        const result = binarySearch.searchSortedMatrix(inputArray, value);
        expect(result).toEqual({row: 1, column: 0});
    });
});

describe('Binary search for 2D matrix with sorted row and column', () => {
    it('should return -1, given the array = [[1,4,7],[6,9,17],[14,20,30]] and the value= 5', () => {
        const inputArray = [[1,4,7],[6,9,17],[14,20,30]];
        const value = 5;
        const result = binarySearch.searchRowAndColumnSortedMatrix(inputArray, value);
        expect(result).toEqual(-1);
    });

    it('should return {row: 1, column: 1}, given the array = [[1,4,7],[6,9,17],[14,20,30]] and the value= 9', () => {
        const inputArray = [[1,4,7],[6,9,17],[14,20,30]];
        const value = 9;
        const result = binarySearch.searchRowAndColumnSortedMatrix(inputArray, value);
        expect(result).toEqual({row: 1, column: 1});
    });
});
