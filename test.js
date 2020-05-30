let data = [{
  "PurchaseGLAccountID": "799",
  "GLAccountTypeId": 1,
  "GLAccountTypeDesc": "Vehicle",
  "AccountDesc": "Test",
  "AccountNumber": "11234",
  "DebitAmount": "2234.00",
  "CreditAmount": "520.00",
  "Comment": "Test comment",
  "ControlNumber": "#321",
  "SortOrder": 5
}, {
  "PurchaseGLAccountID": "766",
  "GLAccountTypeId": 2,
  "GLAccountTypeDesc": "Vehicle Receivable",
  "AccountDesc": "Cash Down",
  "AccountNumber": "20100",
  "DebitAmount": "5000.00",
  "CreditAmount": null,
  "Comment": "",
  "ControlNumber": null,
  "SortOrder": 1
}, {
  "PurchaseGLAccountID": "767",
  "GLAccountTypeId": 2,
  "GLAccountTypeDesc": "Vehicle Receivable",
  "AccountDesc": "Rebate",
  "AccountNumber": "11050",
  "DebitAmount": "0.00",
  "CreditAmount": null,
  "Comment": "",
  "ControlNumber": null,
  "SortOrder": 2
}, {
  "PurchaseGLAccountID": "768",
  "GLAccountTypeId": 2,
  "GLAccountTypeDesc": "Vehicle Receivable",
  "AccountDesc": "Contract In Transit",
  "AccountNumber": "10500",
  "DebitAmount": "67640.00",
  "CreditAmount": null,
  "Comment": "Default",
  "ControlNumber": null,
  "SortOrder": 3
}, {
  "PurchaseGLAccountID": "800",
  "GLAccountTypeId": 2,
  "GLAccountTypeDesc": "Vehicle Receivable",
  "AccountDesc": "Post Contract",
  "AccountNumber": "12345",
  "DebitAmount": "1552.00",
  "CreditAmount": "22.00",
  "Comment": "",
  "ControlNumber": null,
  "SortOrder": 6
}, {
  "PurchaseGLAccountID": "769",
  "GLAccountTypeId": 4,
  "GLAccountTypeDesc": "Taxes and Fees",
  "AccountDesc": "Sales Commission Expense",
  "AccountNumber": "90001",
  "DebitAmount": "0.00",
  "CreditAmount": null,
  "Comment": "",
  "ControlNumber": null,
  "SortOrder": 4
}, {
  "PurchaseGLAccountID": "0",
  "GLAccountTypeId": 0,
  "GLAccountTypeDesc": "Total",
  "AccountDesc": "Total",
  "AccountNumber": "",
  "DebitAmount": "76426.00",
  "CreditAmount": "542.00",
  "Comment": "Diff: 75884.00",
  "ControlNumber": "",
  "SortOrder": 9999999
},
{
  "PurchaseGLAccountID": "0",
  "GLAccountTypeId": 8,
  "GLAccountTypeDesc": "Total",
  "AccountDesc": "Total",
  "AccountNumber": "",
  "DebitAmount": "76426.00",
  "CreditAmount": "542.00",
  "Comment": "Diff: 75884.00",
  "ControlNumber": "",
  "SortOrder": 9999999
}]


function groupData() {
  let reduce_result = data.reduce((acc, val) => {
    const { GLAccountTypeId } = val;
    return {
      ...acc,
      [GLAccountTypeId]: [...(acc[GLAccountTypeId] || []), val]
    }
  }, {})
  return reduce_result;
}

let result = groupData(data);



function setFlagToTrueInLastIndex(result) {
  let array = []
  for (let key in result) {
    let final_result = result[key].map((data, i) => {
      if (i == result[key].length - 1) {
        return { ...data, flag: true }
      } else {
        return { ...data, flag: false }
      }
    })
    array.push(...final_result)
  }
  let [first_element, ...rest] = array;
  return [...rest, first_element];
}


console.log('sdfsd', setFlagToTrueInLastIndex(result))



// console.log('resutl', setFlag(data))