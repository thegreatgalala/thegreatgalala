import { useCallback, useEffect, useState } from "react";

const Countdown = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;

    const formatTime = (time) => (time >= 10 ? time : `0${time}`);

    if (timeDifference < 0) {
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      return;
    }

    setCountDownTime({
      days: formatTime(Math.floor(timeDifference / (24 * 60 * 60 * 1000))),
      hours: formatTime(
        Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
      ),
      minutes: formatTime(
        Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))
      ),
      seconds: formatTime(Math.floor((timeDifference % (60 * 1000)) / 1000)),
    });
  };

  const startCountDown = useCallback(() => {
    const countDownDate = new Date(
      "March 27, " + new Date().getFullYear() + " 09:00:00"
    ).getTime();
    const interval = setInterval(() => getTimeDifference(countDownDate), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => startCountDown(), [startCountDown]);

  return (
    <div className="flex justify-center gap-3 sm:gap-8">
      {Object.entries(countDownTime).map(([label, value]) => (
        <div key={label} className="flex flex-col gap-5">
          <div className="h-16 w-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 flex items-center justify-center bg-[#343650] rounded-lg shadow-md">
            <span className="lg:text-4xl sm:text-1xl text-2xl font-semibold text-[#a5b4fc]">
              {value}
            </span>
          </div>
          <span className="text-white text-xs sm:text-xs md:text-xs uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
