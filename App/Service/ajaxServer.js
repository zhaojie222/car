/**
 * Created by lenovo on 2017/10/19.
 */
app.factory("ajaxServer",function($http,$q){
    var factory={
        ajax:function(type,url,data){
            var defer=$q.defer();
            if(type=="jsonp" || type=="JSONP"){
                $.ajax({
                    url:url,
                    dataType:'JSONP',
                    success:function(res){
                        return defer.resolve(res);
                    },
                    error:function(err){
                        return defer.reject(err);
                    }
                });
                return defer.promise;
            }else{
                $http({
                    url:url,
                    method:type,
                    data:data||null
                }).then(function(res){
                    return defer.resolve(res);
                },function(err){
                    return defer.reject(err);
                })
            }
            return defer.promise;
        }
    };
    return factory;
});
