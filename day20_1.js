function result()
{
    let i, j;
    let ans = 0
    for(i=1; i<=4; i++)
    {
        for(j=1; j<=3; j++)
        {
            ans = i*j;
        }
        console.log(ans);
    }
   
}
// i = 1
//    j = 1
//       ans  = 1 * 1 (ans = 1)
//    j = 2
//       ans  = 1 * 2 (ans = 2)
//    j = 3
//       ans  = 1 * 3 (ans = 3)

// i = 2
//     j = 1
//          ans  = 2 * 1 (ans = 2)
//     j = 2
//          ans  = 2 * 2 (ans = 4)
//     j = 3
//          ans  = 2 * 3 (ans = 6)      

//  i = 3
//     j = 1
//         ans  = 3 * 1 (ans = 3)
//     j = 2
//         ans  = 3 * 2 (ans = 6)
//     j = 3
//         ans  = 3 * 3 (ans = 9)
      
// i = 4
//     j = 1
//         ans  = 4 * 1 (ans = 4)
//     j = 2
//         ans  = 4 * 2 (ans = 8)
//     j = 3
//         ans  = 4 * 3 (ans = 12)         

