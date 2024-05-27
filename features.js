allProductArrays = [
  {
    img1: "images/miniroundnoseplier1.jpg",
    img2: "images/miniroundnoseplier2.jpg",
    img3: "images/miniroundnoseplier3.jpg",
    img4: "images/miniroundnoseplier4.jpg",
    title:
      "REHMANI Mini Round Nose Pliers - Essential Tool for Jewelry Making and Fine Detail Work - Precision Crafting",
    bulletPoints: `<b>1. Precision Crafting:</b> Our mini round nose pliers provide precise control and accuracy for intricate jewelry making, wire wrapping, and other fine detail work. <br/>
        <b>2. Compact Design:</b> Designed with a smaller size for easy handling, these pliers are perfect for working in tight spaces and with delicate materials. <br/>
        <b>3. High-Quality Construction:</b> Crafted from durable stainless steel, these pliers are built to last, ensuring reliable performance for your crafting projects. <br/>
        <b>4. Rounded Jaws:</b> The rounded jaws create perfectly formed loops and curves, making them ideal for creating custom jewelry components and intricate designs. <br/>
        <b>5. Comfortable Grip:</b> The ergonomic handles offer a comfortable grip, reducing hand fatigue during extended use and enhancing overall control and maneuverability. <br/>
        `,
    Description: `Elevate your jewelry making projects with our Mini Round Nose Pliers. Crafted for precision and control, these compact pliers are perfect for creating intricate loops, curves, and wire-wrapped designs. Whether you're a professional jeweler or a hobbyist, these pliers offer the precision and reliability you need to bring your creative visions to life. The durable stainless steel construction ensures long-lasting performance, while the ergonomic handles provide a comfortable grip for extended crafting sessions. Add these essential tools to your crafting arsenal and unleash your creativity.`,
    Keywords: `- Mini round nose pliers <br/>
        - Jewelry making tools <br/>
        - Precision crafting pliers <br/>
        - Wire wrapping tools <br/>
        - Compact round nose pliers <br/>
        - Miniature jewelry pliers <br/>
        - Fine detail crafting tools <br/>
        - Small round nose pliers <br/>
        - Hobbyist jewelry tools <br/>
        - Mini jewelry pliers`,
  },
  {
    img1: "images/miniroundnoseplier1.jpg",
    img2: "images/miniroundnoseplier2.jpg",
    img3: "images/miniroundnoseplier3.jpg",
    img4: "images/miniroundnoseplier4.jpg",
    title:
      "REHMANI Mini Round Nose Pliers - Essential Tool for Jewelry Making and Fine Detail Work - Precision Crafting",
    bulletPoints: `<b>1. Precision Crafting:</b> Our mini round nose pliers provide precise control and accuracy for intricate jewelry making, wire wrapping, and other fine detail work. <br/>
        <b>2. Compact Design:</b> Designed with a smaller size for easy handling, these pliers are perfect for working in tight spaces and with delicate materials. <br/>
        <b>3. High-Quality Construction:</b> Crafted from durable stainless steel, these pliers are built to last, ensuring reliable performance for your crafting projects. <br/>
        <b>4. Rounded Jaws:</b> The rounded jaws create perfectly formed loops and curves, making them ideal for creating custom jewelry components and intricate designs. <br/>
        <b>5. Comfortable Grip:</b> The ergonomic handles offer a comfortable grip, reducing hand fatigue during extended use and enhancing overall control and maneuverability. <br/>
        `,
    Description: `Elevate your jewelry making projects with our Mini Round Nose Pliers. Crafted for precision and control, these compact pliers are perfect for creating intricate loops, curves, and wire-wrapped designs. Whether you're a professional jeweler or a hobbyist, these pliers offer the precision and reliability you need to bring your creative visions to life. The durable stainless steel construction ensures long-lasting performance, while the ergonomic handles provide a comfortable grip for extended crafting sessions. Add these essential tools to your crafting arsenal and unleash your creativity.`,
    Keywords: `- Mini round nose pliers <br/>
        - Jewelry making tools <br/>
        - Precision crafting pliers <br/>
        - Wire wrapping tools  <br/>
        - Compact round nose pliers <br/>
        - Miniature jewelry pliers <br/>
        - Fine detail crafting tools <br/>
        - Small round nose pliers <br/>
        - Hobbyist jewelry tools <br/>
        - Mini jewelry pliers`,
  },
];

// ____________________________
const allProducts = document.getElementsByClassName("allProducts")[0];

allProductArrays.map((data) => {
  console.log(data);
  return (allProducts.innerHTML += `
        <div class="item"><div class="title"> ${data.title} </div>
        <div class="allProductImages">
        <img src="${data.img1}" alt="">
        <img src="${data.img2}" alt="">
        <img src="${data.img3}" alt="">
        <img src="${data.img4}" alt="">
            </div>
           
            <div class="bulletpoints"><h4>BulletPoints:</h4>${data.bulletPoints}</div>
            <div class="description"><h4>Description:</h4>${data.Description}</div>
            <div class="keywords"><h4>Keywords:</h4> ${data.Keywords}</div>
            <div class="line"></div></div>
        `);
});
