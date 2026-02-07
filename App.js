function loadPage(page){
  fetch("pages/" + page + ".html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
    });
}

function runCode(id, out){
  let code = document.getElementById(id).value;
  document.getElementById(out).srcdoc = code;
}
