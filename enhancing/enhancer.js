module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  
  if (enhancement < 20 && enhancement > -1) {
    return{ ...item, enhancement: enhancement++};
  } else if (enhancement == 20) {
    return { ...item, enhancement}
   } else return { ...item }

}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100};
}

function get(item) {
  return { ...item };
}
