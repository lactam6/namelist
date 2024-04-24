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
    console.log(data[116])
}
csv_("namelist.csv");