const array =[  {
    "MonthName": "June 2018",
    "InventoryItemType": "New",
    "SalesCount": 5,
    "SalesAmount": 243567.65
  },
  {
    "MonthName": "June 2018",
    "InventoryItemType": "Used",
    "SalesCount": 2,
    "SalesAmount": 67453.23
  },
  {
    "MonthName": "June 2019",
    "InventoryItemType": "New",
    "SalesCount": 7,
    "SalesAmount": 243567.65
  },
  {
    "MonthName": "June 2019",
    "InventoryItemType": "Used",
    "SalesCount": 4,
    "SalesAmount": 67453.23
  }];

  const result = array.reduce(( acc , sale )=>{
    const month = sale.MonthName;
    return {
        ...acc,
        [month]: [...(acc[month] || []),sale ]
    }
  },[]);

  console.log(result)


    

