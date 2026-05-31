import SparkleDecor from "./SparkleDecor";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <p className="text-sm font-medium text-[var(--color-crimson)] tracking-[0.3em] uppercase font-body">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading text-[var(--color-text)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-[var(--color-text-muted)] font-body leading-relaxed">
          {description}
        </p>
      ) : null}
      <div className={`mt-5 flex items-center ${align === "center" ? "justify-center" : "justify-start"}`}>
        <SparkleDecor size="sm" color="var(--color-gold)" />
      </div>
    </div>
  );
}