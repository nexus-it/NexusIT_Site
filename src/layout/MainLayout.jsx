import {Footer} from "../components/Footer";

import {Header} from "../components/Header";


export const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="overflow-hidden">
                {children}
            </div>
            <Footer />
        </>
    )
}
