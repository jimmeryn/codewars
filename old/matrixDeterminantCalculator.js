function determinant(m) {
  if (m.length === 1) return m[0][0];
  let h;
  return m.reduce((det, currVertex, vertexIndex) => {
    h = determinant(
      m.reduce(
        (s, c, i) =>
          i > 0 ? s.concat([c.filter((el, id) => id !== vertexIndex)]) : s,
        []
      )
    );
    return vertexIndex % 2 === 0
      ? det + m[0][vertexIndex] * h
      : det - m[0][vertexIndex] * h;
  }, 0);
}

let mat = [[1, 3], [2, 5]];
console.log(determinant(mat));
