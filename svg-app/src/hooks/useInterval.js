import React, { useEffect, useRef } from "react";

/**
 * Use interval custom hook
 *
 * Calls the given callback cyclic with the given delay
 *
 * Timer is stoped when passing null to delay parameter
 *
 * @param {fpn} callback
 * @param {number} delay in ms
 */
export default function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return;
    }

    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
