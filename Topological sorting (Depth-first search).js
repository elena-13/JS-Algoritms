// BEGIN (write your solution here)
module.exports.sortGraph = function (graph){
  var nodes = [];
  var res = [];
  for (var key in graph){
     nodes.push(key);
     nodes = nodes.concat(graph[key]);
  }

  var removed = {};
  function dfs(node) {

    if(node in removed) return;

    if ((node in graph) && graph[node].length != 0)
    {
      var temp = graph[node];
      for (var j=0; j<temp.length; ++j){
        dfs(temp[j]);
      }
    }
    res.push(node);
    removed[node] = 1;
  }
  for (var i=0; i<nodes.length; ++i){
    dfs(nodes[i]);
  }
  return res;
}
// END
