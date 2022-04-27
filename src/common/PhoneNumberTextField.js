import { forwardRef } from "react";
import MuiPhoneNumberTextField from "material-ui-phone-number";

const PhoneNumberTextField = forwardRef(
  /**
   *
   * @param {import("react").ComponentPropsWithRef<typeof MuiPhoneNumberTextField>} props
   * @param {*} ref
   */
  (props, ref) => {
    return <MuiPhoneNumberTextField ref={ref} {...props} />;
  }
);

PhoneNumberTextField.defaultProps = {
  defaultCountry: "ng",
  regions: "africa",
  variant: "outlined",
  countryCodeEditable: false,
};

export default PhoneNumberTextField;
