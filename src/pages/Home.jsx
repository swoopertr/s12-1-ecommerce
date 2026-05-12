
import CategoryAccordionList from "../components/CategoryAccordionList";
import SliderImage from "../components/SliderImage/SliderImage";
import { categoriesHomePage } from "../Constants/Categories";

export function Home (){
    return(<>
        <h1>Home Page</h1>

        <SliderImage />
        <CategoryAccordionList categoryList={categoriesHomePage}/>

    </>)
    }