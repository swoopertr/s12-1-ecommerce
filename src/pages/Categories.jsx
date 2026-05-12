import CategoryAccordionList from "../components/CategoryAccordionList";
import { categoriesAll } from "../Constants/Categories";
export function Categories(){

    return(
    <>
    Kategoriler
    <CategoryAccordionList categoryList={categoriesAll}/>
    </>);
}