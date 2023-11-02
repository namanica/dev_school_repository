function descendingOrder(arg)
{
    let argArray = arg.toString();
    let argArrayDigits = [];
    for (let i =0; i < argArray.length; i++)
    {
        argArrayDigits.push(parseInt(argArray[i]));
    }
    argArrayDigits.sort(function (a,b) {return b - a;});
    let result = 0;
    for (let i = 0; i < argArrayDigits.length; i++)
    {
        result = result * 10 + argArrayDigits[i];
    } return result;

} console.log(descendingOrder(43536789));

