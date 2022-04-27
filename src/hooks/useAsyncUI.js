import { useContext } from "react";
import AsyncUIContext from "common/AsyncUIContext";

export function useAsyncUI() {
  return useContext(AsyncUIContext);
}

export default useAsyncUI;
