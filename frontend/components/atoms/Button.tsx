export interface IButton {
  size: "small" | "medium" | "large";
  children: string;
  onClick: () => void;
}
export const Button = ({ size, children, onClick }: IButton) => {
  return (
    <button
      className={`button button--${size}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
