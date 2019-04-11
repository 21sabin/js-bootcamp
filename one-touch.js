let payment = 
 [
    {
      "QuoteLoanPaymentId": "20374",
      "QuoteLoanId": "2118",
      "DownPayment": 1000,
      "TermMonths": 7,
      "InterestRate": 0.11,
      "Payment": -530.1428,
      "IsSelected": false,
      "AdjustedCapCost": -3711
    },
    {
      "QuoteLoanPaymentId": "20377",
      "QuoteLoanId": "2118",
      "DownPayment": 1000,
      "TermMonths": 8,
      "InterestRate": 0.13,
      "Payment": -463.875,
      "IsSelected": false,
      "AdjustedCapCost": -3711
    },
    {
      "QuoteLoanPaymentId": "20380",
      "QuoteLoanId": "2118",
      "DownPayment": 1000,
      "TermMonths": 9,
      "InterestRate": 0.17,
      "Payment": -412.3333,
      "IsSelected": false,
      "AdjustedCapCost": -3711
    },
    {
      "QuoteLoanPaymentId": "20375",
      "QuoteLoanId": "2118",
      "DownPayment": 1500,
      "TermMonths": 7,
      "InterestRate": 0.11,
      "Payment": -601.5714,
      "IsSelected": false,
      "AdjustedCapCost": -4211
    },
    {
      "QuoteLoanPaymentId": "20378",
      "QuoteLoanId": "2118",
      "DownPayment": 1500,
      "TermMonths": 8,
      "InterestRate": 0.13,
      "Payment": -526.375,
      "IsSelected": false,
      "AdjustedCapCost": -4211
    },
    {
      "QuoteLoanPaymentId": "20381",
      "QuoteLoanId": "2118",
      "DownPayment": 1500,
      "TermMonths": 9,
      "InterestRate": 0.17,
      "Payment": -467.8888,
      "IsSelected": false,
      "AdjustedCapCost": -4211
    },
    {
      "QuoteLoanPaymentId": "20376",
      "QuoteLoanId": "2118",
      "DownPayment": 2000,
      "TermMonths": 7,
      "InterestRate": 0.11,
      "Payment": -673,
      "IsSelected": false,
      "AdjustedCapCost": -4711
    },
    {
      "QuoteLoanPaymentId": "20379",
      "QuoteLoanId": "2118",
      "DownPayment": 2000,
      "TermMonths": 8,
      "InterestRate": 0.13,
      "Payment": -588.875,
      "IsSelected": false,
      "AdjustedCapCost": -4711
    },
    {
      "QuoteLoanPaymentId": "20382",
      "QuoteLoanId": "2118",
      "DownPayment": 2000,
      "TermMonths": 9,
      "InterestRate": 0.17,
      "Payment": -523.4444,
      "IsSelected": false,
      "AdjustedCapCost": -4711
    }
  ];



//   const result = Array.from(new Set(payment.map(p=>p.DownPayment))).map(x=>{
//       console.log(x,"x")
//       return {
//           DownPayment:x,
//           AdjustedCapCost:payment.find(y=>y.DownPayment==x).AdjustedCapCost
//       }
//   })
const result = [ {
    "QuoteLoanPaymentId": "20382",
    "QuoteLoanId": "2118",
    "DownPayment": 2000,
    "TermMonths": 9,
    "InterestRate": 0.17,
    "Payment": -523.4444,
    "IsSelected": false,
    "AdjustedCapCost": -4711
  }];
console.log(result.find(y=>y.DownPayment == 3000 ))

const a = Object.entries({name:'sd',"age":33});
console.log(a,"99")
// const result1 = payment.map(x=>{
//     let obj = result.find(y=>{
//         if(y.DownPayment == x.DownPayment ){
//             return {}
//         }
//     });
//     console.log(obj,"obj");
//     if( obj ){
//        return false;
//     }else{
//         result.push(obj)
//     }
// })

  