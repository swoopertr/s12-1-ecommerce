import CategoryAccordion from "./CategoryAccordion";

function CategoryAccordionList ({categoryList}){
    
    return(
        <>
            { categoryList && categoryList.map(category => <CategoryAccordion categoryName={category}/>)}
        </>
    )
}
export default CategoryAccordionList;