const contacts = [
  { name: "abin", phone: "988494993933" },
  { name: "siagal", phone: "988494993933" },
  { name: "anuj", phone: "988494993933" },
  { name: "anup", phone: "988494993933" },
  { name: "sandep", phone: "988494993933" },
  { name: "sawdf", phone: "988494993933" },
  { name: "anup", phone: "988494993933" },
  { name: "kian", phone: "988494993933" }
];

const contactByLetters = contacts.reduce((obj, contact, index) => {
  const firstLetter = contact.name[0].toUpperCase();
  console.log(index);
  if (index == 2) console.log(obj, "-------------------");
  return {
    ...obj,
    [firstLetter]: [...(obj[firstLetter] || []), contact]
  };
}, {});

console.log(contactByLetters, "result");

// let newArray = [  ];

// let obj = newArray.find(x=>console.log(x,"df"))

// console.log(obj,"df" )
