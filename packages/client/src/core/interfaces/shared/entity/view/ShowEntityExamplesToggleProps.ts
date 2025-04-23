// Types
import { ChangeEventHandler } from "react";

export interface ShowEntityExamplesToggleProps {
  showExamples: boolean;
  onShowExamplesChange: ChangeEventHandler<HTMLInputElement>;
  id: string;
}
