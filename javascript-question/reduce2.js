const cars = [
    { brand: 'Audi', color: 'black' },
    { brand: 'Audi', color: 'white' },
    { brand: 'Ferarri', color: 'red' },
    { brand: 'Ford', color: 'white' },
    { brand: 'Peugot', color: 'white' }
  ];

  const groupByBrand = cars.reduce((accu,obj)=>{
      let key = obj.color
    return{
        ...accu,
        [key]:[ ...accu[key] || [] ,obj]
    }
  },{})

  console.log(groupByBrand,"group by brand")