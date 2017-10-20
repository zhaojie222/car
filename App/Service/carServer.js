/**
 * Created by lenovo on 2017/10/20.
 */
app.factory("carServer",["ajaxServer",function(ajaxServer){
    var factory={
      getCar:function(){
          var url="./Data/data.json";
          return ajaxServer.ajax("get",url);
      }
    }
    return factory
}])