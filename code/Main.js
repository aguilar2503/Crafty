
  Object.constructor.error = function (message, t) {
  
    t = t || this;
    t.name = " Syntax Error ";
    t.message = message;
    throw t;
  };
  
  function main() {
  
    //var parse = make_parse();
    
    var source = document.getElementById('codeBoard').getElementsByTagName('textarea')[0].value;;
    var string, tree;
      
    try {
      tree = source.tokens();
      string = JSON.stringify(tree, null, 6);
                                     
    } catch (e) {
      string = JSON.stringify(e, null, 6);
    }
    
    var data = string;
    console.log(data);
    
    document.getElementById('analisisLex').value= data;
  
  };

  window.onload = function() {
  
    parse.onclick = main;
  }