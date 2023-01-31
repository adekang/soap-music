import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";


export const formatTime = (Milliseconds: number, format = "HH:MM:SS") => {
  if (!Milliseconds) return "";
  dayjs.extend(duration);
  dayjs.extend(relativeTime);

  const time = dayjs.duration(Milliseconds);
  const hours = time.hours().toString();
  const mins = time.minutes().toString();
  const seconds = time.seconds().toString().padStart(2, "0");


  if (format === "HH:MM:SS") {
    return hours !== "0"
      ? `${hours}:${mins.padStart(2, "0")}:${seconds}`
      : `${mins}:${seconds}`;
  } else if (format === "ZH") {
    const hoursUnit = "小时", minitesUnit = "分钟";
    return hours !== "0"
      ? `${hours} ${hoursUnit} ${mins} ${minitesUnit}`
      : `${mins} ${minitesUnit}`;
  }
};
