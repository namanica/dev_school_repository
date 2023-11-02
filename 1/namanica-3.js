function FindX (m)
{
    let n = 0;
    let volume = 0;

    while (volume < m)
    {
        n++
        volume += n**3;
    }
        if (volume == m)
        {
            return n;
        }
        else
        {
            return -1;
        }



}
console.log(FindX(36));