import React, { CSSProperties, FC } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.scss";

interface Props {
  visible: boolean;
  className: string;
  children?: JSX.Element;
  style?: CSSProperties | null;
}

const Transition: FC<Props> = (props) => {
  const { visible, children, className, style } = props;
  return (
    <CSSTransition in={visible} timeout={200} classNames={className} style={style}>
      {children}
    </CSSTransition>
  );
};

export default Transition;
