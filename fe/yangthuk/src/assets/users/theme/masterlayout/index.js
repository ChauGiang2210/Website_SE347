import { memo } from "react";
import Header from "../header";
import HomePage from "../../HomePage";
import Footer from "../footer";

const MasterLayout = ({children, ...props}) =>
{
    return (
        <div {...props}>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};
export default memo(MasterLayout);