export default function csvToJSON(csv: string) {
  let lines = csv.toLowerCase().split('\r\n');

  let result: {}[] = [];
  let headers = lines[0].split(',');
  let id = 1;

  lines.forEach((line, index) => {
    if (index === 0) return;

    let data: any = {};
    let blocks = line.split(',');
    data.id = id++;

    blocks.forEach((block, index) => {
      let header = headers[index];

      data[header] = block;
    });
    result.push(data);
  });
  return result;
}
