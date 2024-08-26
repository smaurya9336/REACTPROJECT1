import Price from "./Price";

function Product({ title, idx }){
 let oldPrices = ["12996", "11,995", "1,500", "599"];
 let newPrices = ["8,999", "9,199", "899", "278"];
 let description = [
  ["DPI", "5 Programmable buttons"],
     ["intuitive  surface", "designed for iPad pro"],
    ["designed for iPad Pro",  "intuitive  surface"],
    ["wireless", "optical orientation"]
];
let styles ={
    borderRadius: "10px",
    border:"2px solid black",
    margin: "10px",
    width:"200px",
    height:"150px",

}
    return(
        <div style={styles}>
        <p>{title}</p>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}
export default Product;