import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "common/StoreActions";
import { customerPortalApi } from "common/StoreQuerySlice";

function useLogout(props) {
  const dispatch = useDispatch();
  const [logoutMutation, logoutMutationResult] =
    customerPortalApi.useLogoutMutation();

  const logout = useCallback(
    function logout() {
      return dispatch(logoutAction());
    },
    [dispatch]
  );

  return { logout, logoutMutation, logoutMutationResult };
}

export default useLogout;
