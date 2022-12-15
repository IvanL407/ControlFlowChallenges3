const array = [0, null, undefined, '', NaN, 10, 5, 11];
console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for (let i = 0; i < array.length; i++)
    {
        if (!!array[i])
        {
            count++;
        }
    }
    return count;
}