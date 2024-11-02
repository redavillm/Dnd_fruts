//Проверка на превышение 100 в прогресс баре.
export const checkExess = (currentValue: number, added: number): number => {
  if (currentValue + added > 100) {
    const excess = currentValue + added - 100;
    if (excess <= 5) return currentValue + added - excess;
    if (excess > 5) return currentValue;
  }
  return currentValue + added;
};

//Увеличение прогресса по типу фрукта, возвращает обновленное знаечение прогресс бара.
export const progresBarCounter = (
  type: string,
  currentProgressValue: number
): number => {
  if (currentProgressValue === 100) return currentProgressValue;
  switch (type) {
    case "apple":
      return checkExess(currentProgressValue, 20);
    case "banana":
      return checkExess(currentProgressValue, 10);
    case "peach":
      return checkExess(currentProgressValue, 5);
    default:
      return currentProgressValue;
  }
};
