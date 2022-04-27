import { Button, InputAdornment, Typography } from "@mui/material";
import useCountdown from "hooks/useCountdown";

/**
 *
 * @param {OTPInputAdornmentProps} props
 */
function OTPInputAdornment(props) {
  const { countdownDate, onResend, ...rest } = props;
  const countdown = useCountdown();

  return (
    <InputAdornment {...rest}>
      {countdown.completed || countdown.completedIdle ? (
        <Button variant="text" onClick={onResend}>
          Resend OTP
        </Button>
      ) : (
        <Typography color="secondary">
          {countdown.minutes}:
          {countdown.seconds < 10 ? `0${countdown.seconds}` : countdown.seconds}
        </Typography>
      )}
    </InputAdornment>
  );
}

export default OTPInputAdornment;

/**
 * @typedef {{
 * countdownDate: number | Date;
 * onResend: Function
 * } & import("@mui/material").InputAdornmentProps} OTPInputAdornmentProps
 */
