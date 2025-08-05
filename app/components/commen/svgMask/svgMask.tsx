type SolidSvgProps = {
  width: string | number;
  height: string | number;
  path: string;
  color?: string;
  fit?: boolean;
  className?: string | undefined;
};

export default function SolidSvg({
  width,
  height,
  path,
  color = "black",
  fit = false,
  className,
}: SolidSvgProps) {
  return (
    <div className={className}>
      <style jsx>{`
        div {
          width: ${typeof width === "number" ? `${width}px` : width};
          height: ${typeof height === "number" ? `${height}px` : height};
          background-color: ${color};
          mask: url(${path});
          mask-repeat: no-repeat;
          mask-position: center;
          mask-size: ${fit ? "contain" : "auto"};
        }
      `}</style>
    </div>
  );
}
