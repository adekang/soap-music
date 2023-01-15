import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.scss";

interface Props {
  visible: boolean;
  className: string;
  children?: JSX.Element;
}

const Transition: FC<Props> = (props) => {
  const { visible, children, className } = props;
  return (
    <CSSTransition in={visible} timeout={250} classNames={className}>
      {children}
    </CSSTransition>
  );
};

export default Transition;
