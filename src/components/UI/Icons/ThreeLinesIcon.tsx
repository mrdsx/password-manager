export function ThreeLinesIcon({
  width,
}: {
  width: number;
}): React.ReactElement {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 24 24">
      <path
        d="M5 6H12H19M5 12H19M5 18H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
