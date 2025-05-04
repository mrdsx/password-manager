export function CopyBtn({ copyText }: { copyText: string }) {
  const SVG_SIZE = "20";
  const copyBtnStyle: Record<string, string> = {
    background: "transparent",
    border: "none",
    outline: "none",
  };

  function handleBtnClick(): void {
    if (copyText) navigator.clipboard.writeText(copyText);
  }

  return (
    <button onClick={handleBtnClick} style={copyBtnStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={SVG_SIZE}
        height={SVG_SIZE}
        fill="currentColor"
        className="bi bi-copy"
        viewBox="0 0 16 16"
      >
        <path
          fill="evenodd"
          d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
        />
      </svg>
    </button>
  );
}
