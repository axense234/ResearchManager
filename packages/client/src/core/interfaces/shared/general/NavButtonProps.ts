export interface NavButtonProps {
  showButton: boolean;
  onNavButtonClick: () => void;
  direction: "prev" | "next";
  type?: "light" | "dark";
}
