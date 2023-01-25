import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.scss";

interface Props {
  visible: boolean;
  className: string;
  children?: JSX.Element;
  nodeRef: React.Ref<any>;
}

const LuTransition: FC<Props> = (props) => {
  const { visible, children, className, nodeRef } = props;
  return (
    <CSSTransition nodeRef={nodeRef}
                   in={visible} timeout={300} classNames={className} unmountOnExit={true}>
      {children}
    </CSSTransition>
  );
};

export default LuTransition;
