type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = new Date(dateString);
  return (
    <time dateTime={dateString}>
      {date.toLocaleString("en-US", { month: "long" })} {date.getDate()},{" "}
      {date.getFullYear()}
    </time>
  );
};

export default DateFormatter;
