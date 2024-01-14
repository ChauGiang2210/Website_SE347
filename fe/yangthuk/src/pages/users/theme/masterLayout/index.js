import { memo } from "react";
import Header from "../header";
import Footer from "../footer";

const MasterLayout = ({ children, ...props }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} {...props}>
      <Header />
      <div style={{ flex: 1 }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default memo(MasterLayout);
