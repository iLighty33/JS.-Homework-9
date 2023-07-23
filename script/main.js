window.onload = function() {
    var list = document.getElementById("myList");
    var items = list.getElementsByTagName("li");
  
    for (var i = 0; i < items.length; i++) {
      var text = items[i].innerHTML;
      if (text.startsWith("http://") || text.startsWith("https://")) {
        var link = document.createElement("a");
        link.href = text;
        link.innerHTML = text;
        items[i].innerHTML = "";
        items[i].appendChild(link);
      }
   
    }
  };