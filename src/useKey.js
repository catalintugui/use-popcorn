import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function eventCallback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", eventCallback);

      return function () {
        document.removeEventListener("keydown", eventCallback);
      };
    },
    [action, key]
  );
}
