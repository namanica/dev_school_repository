function highAndLow(str)
{
    let min = str.charAt(0);
    let max = str.charAt(0);
    for (let i = 0; i < str.length; i++)
    {
        let currentElement = str.charAt(i);
        if (currentElement !== ' ' && currentElement > min && currentElement > max)
        {
            max = currentElement;
        }
        if (currentElement !== ' ' && currentElement < min)
        {
            min = currentElement;
        }
    }
    return max + ' ' + min;
}
console.log(highAndLow('5 2 3 4 1'));






