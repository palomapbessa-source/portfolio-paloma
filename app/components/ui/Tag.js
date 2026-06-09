export default function Tag({ children }) {
  return (
    <span
      className="
        inline-flex
        items-center
        justify-center

        h-8
        px-4

        whitespace-nowrap

        rounded-full

        bg-[var(--tag-background)]
        border border-[var(--tag-border)]

        text-[14px]
        leading-[20px]
        font-medium

        text-[var(--tag-text)]
      "
      style={{
        backgroundColor: "var(--tag-background)",
        borderColor: "var(--tag-border)",
        color: "var(--tag-text)",
      }}
    >
      {children}
    </span>
  );
}