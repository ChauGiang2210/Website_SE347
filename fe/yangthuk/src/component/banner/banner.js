import { memo } from "react";
import "./banner.scss"

const Banner = ({children}) =>
{
    return (
        <>
            <div className="row">
                <div className='banner-left'>
                    <h3> {children} </h3>
                </div>
                <div className='banner-right'>
                    {/* <h3>img</h3> */}
                </div>
            </div>
        </>
    )
};
export default memo(Banner);
