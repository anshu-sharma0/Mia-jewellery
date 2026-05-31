export default function SparkleDecor({
  size = "md",
  className = "",
  color = "var(--color-crimson-light)",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
  color?: string;
}) {
  const sizes = { sm: 20, md: 36, lg: 56 };
  const s = sizes[size];
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      className={`animate-float inline-block ${className}`}
      style={{ color }}
    >
      <path
        d="M12 0C12 0 14 8 12 12C10 8 12 0 12 0Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M0 12C0 12 8 10 12 12C8 14 0 12 0 12Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M12 24C12 24 10 16 12 12C14 16 12 24 12 24Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M24 12C24 12 16 14 12 12C16 10 24 12 24 12Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}
