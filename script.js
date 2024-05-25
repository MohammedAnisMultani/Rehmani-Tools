const productArray = [
  {
    title: "",
    img_src: "images/miniroundnoseplier.JPG",
    name: "REHMANI Mini Round Nose Pliers",
    details: "Essential Tool for Jewelry Making and Fine Detail Work - Precision Crafting",
    grip: "Dual Colour Grip",
    item: "AFT 001",
    size: "8*",
  },
  {
    title: "",
    img_src: "images/plier.JPG",
    name: "REHMANI Mini Nose Pliers",
    details: "Precision Craftsmanship in a Compact Design for Jewelry Making and Electronics Repair",
    grip: "Orange Colour Grip",
    item: "AFT 002",
    size: "8*",
  },
  {
    title: "",
    img_src: "images/plier.JPG",
    name: "REHMANI Heavy Duty Punching Pliers",
    details: "Professional Leathercraft Tool for Precise Hole Punching and Grommet Setting for jewelry making use",
    grip: "GT Grip",
    item: "AFT 003",
    size: "8*",
  },
  {
    title: "AFT 555",
    img_src: "images/plier.JPG",
    name: "COMBINATION PLIER",
    details: "Induction Hardnened",
    grip: "Blue HV Grip",
    item: "AFT 004",
    size: "8*",
  },
  {
    title: "AFT 908",
    img_src: "images/plier.JPG",
    name: "COMBINATION PLIER",
    details: "Induction Hardnened",
    grip: "Light Acetate Grip",
    item: "AFT 005",
    size: "8*",
  },
  {
    title: "AFT 999",
    img_src: "images/plier.JPG",
    name: "COMBINATION PLIER",
    details: "Induction Hardnened",
    grip: "Light Blue PVC Grip",
    item: "AFT 006",
    size: "8*",
  },
];

// ________________________________________
// Hand tools --> now converted as Top Products(keeping the data with same name)
const handleToolProducts = document.getElementsByClassName('handtool-porducts')[0]


productArray.map((value) => {
  return(
   handleToolProducts.innerHTML +=
   `
   <div class="handtoolcard">
   <img src=${value.img_src} alt="not found"/>
    <h6>${value.name}</h6>
    <p><b>${value.details}</b><p>
    <p>${value.grip}</p>
    <p>Item: ${value.item}</p>
    <p>Size: ${value.size}</p>
    
</div>
`
  )
  
}) 
// __________________________________________