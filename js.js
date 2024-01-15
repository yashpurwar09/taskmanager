document.getElementById('status-filter').addEventListener('change', applyFilters);
document.getElementById('priority-filter').addEventListener('change', applyFilters);
document.getElementById('search-input').addEventListener('change', applyFilters);
const user = document.getElementById('user').getAttribute('custom')


function applyFilters() {
  var statusFilterValue = document.getElementById('status-filter').value;
  var priorityFilterValue = document.getElementById('priority-filter').value;
  var url;
  if(statusFilterValue=="All" && priorityFilterValue=="All"){
  url = "http://127.0.0.1:2222/api/tasks/?"+"user="+user;
  }
  else if(priorityFilterValue=="All"){
  url = "http://127.0.0.1:2222/api/tasks/?"+"user="+user+"&status="+statusFilterValue;
  }
  else if(statusFilterValue=="All"){
  url = "http://127.0.0.1:2222/api/tasks/?"+"user="+user+"&priority="+priorityFilterValue;
  }
  else{
  url = "http://127.0.0.1:2222/api/tasks/?"+"user="+user+"&status="+statusFilterValue+"&priority="+priorityFilterValue;
  }
  fetch(url)
  .then(res => res.json())
  .then(data => {
  var searchValue = document.getElementById('search-input').value;
  var data = data.filter(function(data){
      return ((data.title).toLowerCase()).startsWith(searchValue.toLowerCase());
  });
  const formElements = document.getElementsByClassName('container');
  let count = data.length;
  const containerElements = document.getElementsByClassName('label');
  if(count!=0){
  for(let z=1;z<formElements.length;z++){
      formElements[z].style.display = "block";
      }
        let keys = ['title','description','deadline','status','priority'];
        let y=0;
        for(let x=0;x<containerElements.length;x++){
            let child = containerElements[x].children;
            if (Array.isArray(data)){
                child[0].innerHTML = data[y][keys[(x%5)]];
                if ((x+1)%5==0){
                y++;
                }
            if(count==y){
                for(y=y+1;y<formElements.length;y++){
                    formElements[y].style.display = "none";
                }
                break;
            }
            }
            /*else{
                let key = x%5;
                child[0].innerHTML = data[keys[key]];
                console.log(child[0].innerHTML);
                console.log(data[keys[key]]);
                if (data[keys[key+1]] === undefined){
                    break;
                }
                let len = formElements.length;
                for(let f=2;f<len;f++){
                    formElements[f].style.display = "none";
                }
            }*/
            }
            //location.reload();
  //const queryString = new URLSearchParams(data).toString();
  //const url = 'http://127.0.0.1:8000/TaskManager/gettask?${queryString}';
  //window.location.href = url;
  }
  else{
    for(let z=1;z<formElements.length;z++){
      formElements[z].style.display = "none";
      }
  }
  })
  .catch(error => {
    // Handle any errors that occurred during the request
         document.getElementById('check1').innerHTML = error
  });
  }

