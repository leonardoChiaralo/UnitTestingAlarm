const alarm = (h1, m1, h2, m2) => {
  let output = h2 * 60 + m2 - (h1 * 60 + m1);

  if (output < 0) {
    output += 1440;
  }

  return output;
};

module.exports = { alarm };
