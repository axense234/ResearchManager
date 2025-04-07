// Redux
import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
// Thunks
import { logOutUser } from "../slices/general";
// Reducers
import { setModal } from "../slices/general/slice";

export const triggerGeneralModalListener = createListenerMiddleware();

triggerGeneralModalListener.startListening({
  matcher: isAnyOf(
    logOutUser.pending,
    logOutUser.fulfilled,
    logOutUser.rejected,
  ),
  effect: async (action, listenerApi) => {
    const { dispatch } = listenerApi;

    dispatch(
      setModal({
        isLoading: true,
        isClosed: false,
        message: "Hello",
        type: "general",
      }),
    );
  },
});
