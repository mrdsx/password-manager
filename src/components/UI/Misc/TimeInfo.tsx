interface TimeInfoProps {
  isViewingItem: boolean;
}

export function TimeInfo(props: TimeInfoProps) {
  return (
    <div className="time-info">
      {props.isViewingItem && (
        <>
          <p className="update-time">Updated: time</p>
          <p className="creation-time">Created: time</p>
        </>
      )}
    </div>
  );
}
