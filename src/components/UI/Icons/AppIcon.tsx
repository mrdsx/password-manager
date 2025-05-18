import reactIcon from "../../../assets/react.svg";

export function AppIcon({ width }: { width: number }): React.ReactElement {
  return (
    <div className="logo">
      <img src={reactIcon} alt="" width={width} />
      <span>Password Manager</span>
    </div>
  );
}
