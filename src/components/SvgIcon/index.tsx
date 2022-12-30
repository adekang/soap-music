import React, { memo, useMemo } from "react";

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
                                                fontSize = "13px",
                                                className,
                                                onClick,
                                                style
                                              }) => {
  const name = useMemo(() => `#icon-${iconName}`, [iconName]);
  return (
    <svg
      fontSize={fontSize}
      style={{ ...svgStyle, fontSize, ...style }}
      aria-hidden="true"
      className={className}
      onClick={onClick}
    >
      <use xlinkHref={name} fill={fill} />
    </svg>
  );
};

const svgStyle = {
  width: "1em",
  height: "1em",
  verticalAlign: "-0.15em",
  overflow: "hidden",
  fill: "currentColor", // 颜色值
  fontSize: "1.1em"
};

SvgIcon.displayName = "SvgIcon";
export default memo(SvgIcon);
