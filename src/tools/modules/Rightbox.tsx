import React from 'react';

interface RightBoxProps {
  children: React.ReactNode;
}

function Rightbox({ children }: RightBoxProps) {
  return <div className="col-lg-4 col-md-12 right-box">{children}</div>;
}
export default Rightbox;
