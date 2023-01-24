import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.scss";

interface Props {
  visible: boolean;
  className: string;
  children?: JSX.Element;
}

const LuTransition: FC<Props> = (props) => {
  const { visible, children, className } = props;
  return (
    <CSSTransition in={visible} timeout={300} classNames={className} unmountOnExit={true}>
      {children}
    </CSSTransition>
  );
};

export default LuTransition;
