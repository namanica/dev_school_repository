function intIsPrime(x)
{  let numberOfDividers = 0;
    if (x>0)
    {
        for (y = 1; y <= x; y++)
        {
            if ( x % y == 0)
            {
                numberOfDividers ++
            }
        }
        if (numberOfDividers != 2)
    {
        return false;
    }
        else
        {
            return true;
        }
    }
    else
    {
        return false;
    }

}
console.log(intIsPrime(11));