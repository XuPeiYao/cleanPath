/**
 * 清除路徑字串中的相對路徑
 * @param path 路徑
 */
export function cleanPath(path: string): string {
  const temp = [];
  const segs = path.split('/');

  for (let i = 0; i < segs.length; i++) {
    if (segs[i].length === 0 || segs[i].trim() === '.') {
      continue;
    }
    if (segs[i].trim() === '..') {
      temp.pop();
      continue;
    }
    temp.push(segs[i]);
  }

  return temp.join('/');
}
