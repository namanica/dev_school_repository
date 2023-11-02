function totalIslandPerimeter(arr){
    if (arr.length === 0 || !arr){
        return 'Total island perimeter is equal to: 0';
    }
    let rows = arr.length;
    let columns = arr[0].length;
    let totalPerimeter = 0;
    for (let i = 0; i < rows; i++){
        for (let k = 0; k < columns; k++){
            if (arr[i][k] === 'X'){
                let perimeter = 4;
                if (i > 0 && arr[i-1][k] === 'X'){
                    perimeter -= 1;
                }
                if (i < rows - 1 && arr[i+1][k] === 'X'){
                    perimeter -= 1;
                }
                if (k > 0 && arr[i][k-1] === 'X'){
                    perimeter -= 1;
                }
                if (k < columns - 1 && arr[i][k+1] === 'X'){
                    perimeter -= 1;
                }
                totalPerimeter += perimeter;
            }
        }
    }return `Total island perimeter is equal to: ${totalPerimeter}`;
}
console.log(totalIslandPerimeter(
    [
        'XOOO',
        'XOXO',
        'XOXO',
        'OOXX',
        'OOOO'
    ]));