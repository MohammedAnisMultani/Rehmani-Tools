const productArray = [
  {
    title: "",
    img_src: "images/miniroundnoseplier.JPG",
    name: "REHMANI Mini Round Nose Pliers",
    details:
      "Essential Tool for Jewelry Making and Fine Detail Work - Precision Crafting",
    price: "₹149",
    grip: "Black & Orange Grip",
    item: "AFT 001",
    size: "8*",
  },
  {
    title: "",
    img_src: "images/mininoseplier.JPG",
    name: "REHMANI Mini Nose Pliers",
    details:
      "Precision Craftsmanship in a Compact Design for Jewelry Making and Electronics Repair",
    price: "149",
    grip: "Black & Orange Grip",
    item: "AFT 002",
    size: "8*",
  },
  {
    title: "",
    img_src: "images/punchingplier.JPG",
    name: "REHMANI Heavy Duty Punching Pliers",
    details:
      "Professional Leathercraft Tool for Precise Hole Punching and Grommet Setting for jewelry making use",
    price: "₹199",
    grip: "Black & Orange Grip",
    item: "AFT 003",
    size: "8*",
  },
  {
    title: "",
    img_src: "images/jewelrymakingcutter.JPG",
    name: "REHMANI Precision JC-18 Jewelry Making Cutter",
    details: "Essential Tool for Crafting Exquisite Designs",
    price: "₹199",
    grip: "Orange Grip",
    item: "AFT 004",
    size: "8*",
  },
  // {
  //   title: "AFT 908",
  //   img_src: "images/plier.JPG",
  //   name: "COMBINATION PLIER",
  //   details: "Induction Hardnened",
  //   grip: "Light Acetate Grip",
  //   item: "AFT 005",
  //   size: "8*",
  // },
  // {
  //   title: "AFT 999",
  //   img_src: "images/plier.JPG",
  //   name: "COMBINATION PLIER",
  //   details: "Induction Hardnened",
  //   grip: "Light Blue PVC Grip",
  //   item: "AFT 006",
  //   size: "8*",
  // },
];

let bestSealingToolsArray = [
  {
    title: "",
    img_src: "images/6inchnoseplier.JPG",
    name: "REHMANI 6-Inch Nose Pliers",
    details: " N-000 Essential Tool for Precision Work ",
    price: "₹149",
    grip: "Blue Grip",
    item: "",
    size: "8*",
  },
  {
    title: "",
    img_src: "images/premiumpopatwirecutter.JPG",
    name: "REHMANI Premium Popat Wire Cutter W_456",
    details: "Precision Tool for Clean Cut",
    price: "149",
    grip: "Red Grip",
    item: "",
    size: "8*",
  },
  {
    title: "",
    img_src: "images/combinationplier.JPG",
    name: "REHMANI p-757 Combination pliers",
    details: "Quality Combination Pliers for Precision Work",
    price: "₹199",
    grip: "Black & Orange Grip",
    item: "",
    size: "8*",
  },
  {
    title: "",
    img_src: "images/shoemakerpliers.JPG",
    name: "REHMANI: Premium Shoe Maker Pliers",
    details: "S_20 Dual color grip High-Quality  Leatherworking Tool",
    price: "₹199",
    grip: "Dual colour Grip",
    item: "",
    size: "8*",
  },
];

let newProductArray = [
  {
    title: "",
    img_src: "images/miniroundnoseplier.JPG",
    name: "REHMANI Mini Round Nose Pliers",
    details:
      "Essential Tool for Jewelry Making and Fine Detail Work - Precision Crafting",
    price: "₹149",
    grip: "Black & Orange Grip",
    item: "AFT 001",
    size: "8*",
  },
  {
    title: "",
    img_src: "images/mininoseplier.JPG",
    name: "REHMANI Mini Nose Pliers",
    details:
      "Precision Craftsmanship in a Compact Design for Jewelry Making and Electronics Repair",
    price: "149",
    grip: "Black & Orange Grip",
    item: "AFT 002",
    size: "8*",
  },
  {
    title: "",
    img_src: "images/bangalijewelrymaker3.JPG",
    name: "G Plass Bengali Jewelry Making G-888 Kit ",
    details:
      "Authentic Craft Supplies for DIY Artisanal Creations",
    price: "₹199",
    grip: "No Grip",
    item: "AFT 003",
    size: "8*",
  },
  {
    title: "",
    img_src: "images/jewelrymakingcutter.JPG",
    name: "REHMANI Precision JC-18 Jewelry Making Cutter",
    details: "Essential Tool for Crafting Exquisite Designs",
    price: "₹199",
    grip: "Orange Grip",
    item: "AFT 004",
    size: "8*",
  },
];
// ________________________________________
// Hand tools --> now converted as Top Products(keeping the data with same name)
const handleToolProducts =
  document.getElementsByClassName("handtool-porducts")[0];

productArray.map((value) => {
  return (handleToolProducts.innerHTML += `
   <div class="handtoolcard">
   <img src=${value.img_src} alt="not found"/>
    <h6>${value.name}</h6>
    <p><b>${value.details}</b><p>
    <p><b>${value.price}</b><p>
    <p>${value.grip}</p>
   
    <p>Size: ${value.size}</p>
    
</div>
`);
});
// __________________________________________
//Best sealing tools

const bestSealingTools = document.getElementsByClassName("bestSealingTools")[0];

bestSealingToolsArray.map((value) => {
  return (bestSealingTools.innerHTML += `
   <div class="handtoolcard">
   <img src=${value.img_src} alt="not found"/>
    <h6>${value.name}</h6>
    <p><b>${value.details}</b><p>
    <p><b>${value.price}</b><p>
    <p>${value.grip}</p>
 
    <p>Size: ${value.size}</p>
    
</div>
`);
});
// _______________________________
//newProduct
const newProducts = document.getElementsByClassName("newProducts")[0];

newProductArray.map((value) => {
  return (newProducts.innerHTML += `
   <div class="handtoolcard">
   <img src=${value.img_src} alt="not found"/>
    <h6>${value.name}</h6>
    <p><b>${value.details}</b><p>
    <p><b>${value.price}</b><p>
    <p>${value.grip}</p>
    
    <p>Size: ${value.size}</p>
    
</div>
`);
});

// ___________________________________
