import { Footer } from "../components/Footer";
import { Head } from "../components/Head";

export function Layout({children}){

    return (
    <>
        <Head />
            {children}
        <Footer />
    </>
    );


}