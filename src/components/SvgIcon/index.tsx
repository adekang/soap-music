import React, { memo, useMemo } from "react";
import "./index.scss";

export type svgProps = {
  iconName: string;
  fill?: string;
  fontSize?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
};

const SvgIcon: React.FC<Partial<svgProps>> = ({
                                                iconName,
                                                fill,
                                                fontSize,
                                                className,
                                                onClick,
                                                style
                                              }) => {
  const name = useMemo(() => `#icon-${iconName}`, [iconName]);

  const svgClass = () => {
    if (className) {
      return "svg-icon " + className;
    } else {
      return "svg-icon";
    }
  };

  return (
    <svg
      fontSize={fontSize}
      style={{ fontSize, ...style }}
      aria-hidden="true"
      className={svgClass()}
      onClick={onClick}
    >
      <use xlinkHref={name} fill={fill} />
    </svg>
  );
};

SvgIcon.displayName = "SvgIcon";
export default memo(SvgIcon);
