filter(itemList: any, searchKeyword: string, propList?: any[]) {
    if (!itemList)
      return [];
    if (!searchKeyword)
      return itemList;
    let filteredList = [];
    if (itemList.length > 0) {
      searchKeyword = searchKeyword.toLowerCase();
      //IF THERE IS PROPERTY LIST, FILTER USING ONLY THE PROPERTIES ON THE LIST
      if (propList && propList.length > 0) {
        itemList.forEach(item => {
          for (let key in item)//LOOP THROUGH THE PROPERTY TYPES OF EACH ITEM
          {
            if (propList.indexOf(key) > -1) {
              if (item[key] && item[key].toString().toLowerCase().indexOf(searchKeyword) > -1) {
                filteredList.push(item);
                break;
              }
            }
          }
        })
      }
      //ELSE FILTER BY ALL TYPES
      else {
        itemList.forEach(item => {
          //Object.values(item) => gives the list of all the property values of the 'item' object
          let propValueList = Object.values(item);
          for (let i = 0; i < propValueList.length; i++) {
            if (propValueList[i]) {
              if (propValueList[i].toString().toLowerCase().indexOf(searchKeyword) > -1) {
                filteredList.push(item);
                break;
              }
            }
          }
        });
      }
    }
    return filteredList;
  }
