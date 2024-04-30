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
  let table = document.createElement("table");
    table.setAttribute("id", "table");
    let tbd = document.createElement("tbody");
    for(let i = 0;i < data.length;i++){
      let row = document.createElement("tr");
      for(let j = 0;j < data[0].length;j++){
        let cel = document.createElement("td");
        cel.innerHTML = '<p class="text">' + data[i][j] + '</class>';
        row.appendChild(cel);
      }
      tbd.appendChild(row);
    }
    table.appendChild(tbd);
    table.setAttribute("border", "2");
    document.getElementsByTagName("body")[0].appendChild(table);
}
csv_("namelist.csv");