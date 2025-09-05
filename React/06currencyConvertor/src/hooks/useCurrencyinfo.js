// // import {useEffect, useState} from "react"

// // function useCurrencyInfo(currency){
// //     const [data,setData]=useState({})
// //     useEffect(()=>{
// //         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
// //         .then((res)=>res.json())
// //         .then((res)=>setData(res[currency]))
// //         console.log(data)
// //     },[currency])
// //     console.log(data)
// //     return data
// // }

// // export default useCurrencyInfo;

// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Failed to fetch currency data');
//         }
//         return res.json();
//       })
//       .then((res) => setData(res[currency]))
//       .catch((error) => console.error("API Fetch Error:", error));
//   }, [currency]); // The dependency array should only contain 'currency'

//   return data;
// }

// export default useCurrencyInfo;

import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;