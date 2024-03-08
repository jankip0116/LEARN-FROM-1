function result()
{
    let i, j;
    let ans = 0
    for(i=1; i<=4; i++)
    {
        for(j=1; j<=3; j++)
        {
            ans = ans + i
        }
    }
    console.log(ans);
}

// i = 1
//    j=1
//        ans = 0 + 1 (ans = 1)
//    j=2
//        ans = 1 + 1 (ans = 2)
//    j=3
//        ans = 2 + 1 (ans = 3)
//    j terminate

// i = 2 
//    j= 1 
//        ans = 3 + 2 (ans = 5)   
//    j=2
//        ans = 5 + 2 (ans = 7)
//    j=3
//        ans = 7 + 2 (ans = 9)
//    j terminate

// i = 3 
//    j= 1 
//        ans = 9 + 3 (ans = 12)   
//    j=2
//        ans = 12 + 3 (ans = 15)
//    j=3
//        ans = 15 + 3 (ans = 18)
//    j terminate
   
// i = 4 
//    j= 1 
//        ans = 18 + 4 (ans = 22)   
//    j=2
//        ans = 22 + 4 (ans = 26)
//    j=3
//        ans = 26 + 4 (ans = 30)
//    j terminate   
//    i terminate
//     ans = 29







