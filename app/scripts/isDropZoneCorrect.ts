export const isDropZoneCorrect = (
  x: number,
  y: number,
  id: string
): boolean => {
  switch (id) {
    case "apple":
      return x >= 10 && x <= 260 && y >= -400 && y <= -100 ? true : false;
    case "banana":
      return x >= -120 && x <= 115 && y >= -400 && y <= -100 ? true : false;
    case "peach":
      return x >= -250 && x <= -10 && y >= -400 && y <= -100 ? true : false;
    default:
      return false;
  }
};

//apple
// x  10 till 260
//y -100 till -400

//banana
// x  -120 till 115
//y -100 till -400

//peach
// x  -250 till -10
//y -100 till -400
