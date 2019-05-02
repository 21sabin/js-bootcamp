let payments =[
    {
    "QuoteLeasePaymentId": "6716",
    "QuoteLeaseId": "1741",
    "DownPayment": "1000.00",
    "TermMonths": 36,
    "InterestRate": 5.9,
    "RF": "1.000",
    "Payment": "1351.31",
    "IsSelected": false,
    "AdjustedCapCost": "29814.00",
    "AmountFinanced": null
    },
    {
    "QuoteLeasePaymentId": "6717",
    "QuoteLeaseId": "1741",
    "DownPayment": "1000.00",
    "TermMonths": 48,
    "InterestRate": 6.9,
    "RF": "1.000",
    "Payment": "1059.57",
    "IsSelected": false,
    "AdjustedCapCost": "29814.00",
    "AmountFinanced": null
    },
    {
    "QuoteLeasePaymentId": "6718",
    "QuoteLeaseId": "1741",
    "DownPayment": "1000.00",
    "TermMonths": 60,
    "InterestRate": 7.9,
    "RF": "1.000",
    "Payment": "891.98",
    "IsSelected": false,
    "AdjustedCapCost": "29814.00",
    "AmountFinanced": null
    },
    {
    "QuoteLeasePaymentId": "6719",
    "QuoteLeaseId": "1741",
    "DownPayment": "3000.00",
    "TermMonths": 36,
    "InterestRate": 5.9,
    "RF": "1.000",
    "Payment": "1290.84",
    "IsSelected": false,
    "AdjustedCapCost": "27814.00",
    "AmountFinanced": null
    },
    {
    "QuoteLeasePaymentId": "6720",
    "QuoteLeaseId": "1741",
    "DownPayment": "3000.00",
    "TermMonths": 48,
    "InterestRate": 6.9,
    "RF": "1.000",
    "Payment": "1012.16",
    "IsSelected": false,
    "AdjustedCapCost": "27814.00",
    "AmountFinanced": null
    },
    {
    "QuoteLeasePaymentId": "6721",
    "QuoteLeaseId": "1741",
    "DownPayment": "3000.00",
    "TermMonths": 60,
    "InterestRate": 7.9,
    "RF": "1.000",
    "Payment": "852.06",
    "IsSelected": false,
    "AdjustedCapCost": "27814.00",
    "AmountFinanced": null
    },
    {
    "QuoteLeasePaymentId": "6722",
    "QuoteLeaseId": "1741",
    "DownPayment": "5000.00",
    "TermMonths": 36,
    "InterestRate": 5.9,
    "RF": "1.000",
    "Payment": "1230.37",
    "IsSelected": false,
    "AdjustedCapCost": "25814.00",
    "AmountFinanced": null
    },
    {
    "QuoteLeasePaymentId": "6723",
    "QuoteLeaseId": "1741",
    "DownPayment": "5000.00",
    "TermMonths": 48,
    "InterestRate": 6.9,
    "RF": "1.000",
    "Payment": "964.74",
    "IsSelected": false,
    "AdjustedCapCost": "25814.00",
    "AmountFinanced": null
    },
    {
    "QuoteLeasePaymentId": "6724",
    "QuoteLeaseId": "1741",
    "DownPayment": "5000.00",
    "TermMonths": 60,
    "InterestRate": 7.9,
    "RF": "1.000",
    "Payment": "812.14",
    "IsSelected": false,
    "AdjustedCapCost": "25814.00",
    "AmountFinanced": null
    }]

    const groupBy = (items ,key ) => items.reduce(
        (result, item) => ({
          ...result,
          [item[key]]: [
            ...(result[item[key]] || []),
            item,
          ],
        }), 
        {},
      );

      console.log(groupBy( payments));