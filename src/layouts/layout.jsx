import { Footer } from "../components/Footer/Footer";
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