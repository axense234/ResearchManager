// React
import { MutableRefObject, useEffect, useState } from "react";
// Types
import { ElementPositionType } from "@/core/types";

export const useGetElementRelativePosition = (
  elementRef: MutableRefObject<HTMLDivElement>,
  showElement?: boolean,
) => {
  const [position, setPosition] = useState<ElementPositionType>({
    x: undefined,
    y: undefined,
  });

  useEffect(() => {
    if (elementRef.current && showElement) {
      const refPosition = elementRef.current.getBoundingClientRect();

      console.log(refPosition);

      setPosition({
        x: refPosition.x,
        y: refPosition.y,
      });
    }
  }, [showElement]);

  return position;
};
