import React from 'react';

interface LeftBoxProps {
  children: React.ReactNode;
}

function Leftbox({ children }: LeftBoxProps) {
  return <div className="col-lg-8 col-md-12 left-box">{children}</div>;
}
export default Leftbox;
