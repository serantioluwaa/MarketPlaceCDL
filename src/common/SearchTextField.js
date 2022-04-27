import { TextField, InputAdornment, Icon } from "@mui/material";
import { forwardRef } from "react";

const SearchTextField = forwardRef(
  /**
   *
   * @param {import("@mui/material").TextFieldProps} props
   * @param {any} ref
   */
  function SearchTextField(props, ref) {
    const { InputProps, ...rest } = props;
    return (
      <TextField
        ref={ref}
        placeholder="Search"
        InputProps={{
          ...InputProps,
          endAdornment: (
            <InputAdornment position="end">
              <Icon>search</Icon>
            </InputAdornment>
          ),
        }}
        {...rest}
      />
    );
  }
);

export default SearchTextField;
