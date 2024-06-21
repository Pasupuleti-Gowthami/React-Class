// import ButtonComponent from "./components/button/button.js";
import ImageComponent from "./components/imageComponent/image";
import TableComponent from "./components/tablecomponent/table";
import "./style.css"
// import FormComponent from "./components/formcomponent/form.js";
import Heading1 from "./components/headingscomponent/heading.js";
// import ListComponent from "./components/ListComponent/list.js";
// import ImageComponent from "./components/image.js";

function Hello(){
  return(
    <div>
      
      <h1>Hii, I am Gowthami</h1>
      {/* <ButtonComponent></ButtonComponent> */}
      {/* <ListComponent></ListComponent> */}
      <ImageComponent></ImageComponent>
      <TableComponent></TableComponent>
      {/* <FormComponent></FormComponent> */}
      <Heading1></Heading1>
    </div>
  )
}
export default Hello;