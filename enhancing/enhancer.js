module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20 && item.enhancement > -1) {

    return{ ...item, enhancement: item.enhancement + 1};

  } else if (item.enhancement == 20) {

    return { ...item, enhancement: item.enhancement}

   } else return { ...item }
}

function fail(item) {
  if (item.enhancement < 20 && item.enhancement > -1 && item.enhancement < 16) {
    
    return{ ...item, durability: item.durability - 5};

  } else if (item.enhancement > 15) {

    return{ ...item, enhancement: item.enhancement - 1, durability: item.durability - 10};

  } else if (item.enhancement < 20 && item.enhancement > -1 && item.enhancement > 14) {

    return { ...item, durability: item.durability - 10};

   } else return { ...item }
}

function repair(item) {
  return { ...item, durability: 100};
}

function get(item) {
  if (item.enhancement > 0) {
    return { ...item, name: `[${item.enhancement}] Iron Sword` }
  }
  return { ...item };
}
