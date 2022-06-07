function EvenOddSum(arr, n)
{
    let even = 0;
    let odd = 0;
    for (let i = 0; i < n; i++)
    {
     
        // Loop to find even, odd sum
        if (i % 2 == 0)
            even += arr[i];
        else
            odd += arr[i];
    }
 
    document.write("Even index positions sum " + even);
    document.write("<br>" + "Odd index positions sum " + odd);
}