import { i18n } from '../next.config';

type Props = {
  dateString: string;
  locale?: string;
};

const DateFormatter = ({ dateString, locale }: Props) => {
  const date = new Date(dateString);
  return (
    <time dateTime={dateString}>
      {date.toLocaleString(locale ?? i18n.defaultLocale, { month: "long" })}{" "}
      {date.getDate()}, {date.getFullYear()}
    </time>
  );
};

export default DateFormatter;
