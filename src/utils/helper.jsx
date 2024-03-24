export const mergeClass = (...classNames) => {
  return classNames.filter(Boolean).join(" ");
};
