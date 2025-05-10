import { useEffect, useState } from "react";
import dayjs from "dayjs";

export function Time() {
  const [currentTime, setCurrentTime] = useState(
    dayjs().format("MMMM D, YYYY h:mm:ss A"),
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("MMMM, D, YYYY h:mm:ss A"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>{currentTime}</>;
}
