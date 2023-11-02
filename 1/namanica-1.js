let x=10;
if (x<0) console.log(0);
else{
    let sum=0;
    for (i=0; i<x; i++)
    {
        if (i%3==0 || i%5==0) sum=sum+i;
    } console.log(sum);
}
