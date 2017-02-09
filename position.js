/**
 * amywod
 * Created by BranDoan on 2/8/2017.
 */

function position(list, value) {
  let pos = 0;
  while (value > list[pos]) {
    pos += 1;
  }
  return pos;
}

const sortedlist = [1, 3, 5, 6];

console.log(position(sortedlist, 5));

console.log(position(sortedlist, 2));

console.log(position(sortedlist, 7));

console.log(position(sortedlist, 0));
