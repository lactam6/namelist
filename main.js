function csv_(datapath){
    const req = new XMLHttpRequest();
    req.addEventListener("load", (event) =>{
      const response = event.target.responseText;
      let dataArray = [];
      const dataString = response.split('\r\n');
      for(let i=0;i<dataString.length;i++){
        dataArray.push(dataString[i].split(','));
      }
      print_table(dataArray);
    });
    req.open('GET', datapath, true);
    req.send();
}
function print_table(data){
  for(let i=0;i<data.length;i++){
    let row = "<tr>";
    for(let j=0;j<data[i].length;j++){
      row = row + "<td>" + data[i][j] + "</td>";
    }
    row = row + "</tr>";
    document.getElementById("csv").innerHTML += row
  }
}
csv_("namelist.csv");