import reactIcon from "../../../app/assets/react.svg";

export function AppIcon({ width }: { width: number }) {
  return (
    <div className="logo">
      <img src={reactIcon} alt="" width={width} />
      <span>Password Manager</span>
    </div>
  );
}
