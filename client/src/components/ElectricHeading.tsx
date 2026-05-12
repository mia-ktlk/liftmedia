/**
 * ElectricHeading
 * Design: Splits heading text into individual character spans.
 * On mouseover each letter flashes electric blue then fades back to white.
 * Uses CSS animation via a data attribute toggle — avoids React synthetic event issues.
 * Words are wrapped in non-breaking spans so natural line-breaks still work.
 */

interface ElectricHeadingProps {
  as?: "h1" | "h2" | "h3";
  children: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function ElectricHeading({
  as: Tag = "h2",
  children,
  style,
  className,
}: ElectricHeadingProps) {
  const words = children.split(" ");

  return (
    <Tag style={style} className={className}>
      {words.map((word, wi) => (
        <span
          key={wi}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.split("").map((char, ci) => (
            <span
              key={ci}
              className="electric-letter"
              style={{ display: "inline-block", cursor: "default" }}
            >
              {char}
            </span>
          ))}
          {wi < words.length - 1 && (
            <span style={{ display: "inline-block" }}>&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  );
}
