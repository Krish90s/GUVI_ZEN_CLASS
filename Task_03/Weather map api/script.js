var rq=new XMLHttpRequest();
rq.open('GET','https://restcountries.eu/rest/v2/all',true);
rq.send();
rq.onload=function (){
    var country=JSON.parse(this.response);
    for(var i in country){
        try{
           var cname=country[i].name;
           var latlong=country[i].latlng;
           if(latlong.length===0){
               ("Lattitude and long not found");
            }
           weatherdata(cname,...latlong);
        }
        catch(e){
            console.log("invalid coordinates");
        }
    }
}
var weatherdata=function(name,lat,lng){
    var URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=97f215062b07de74b1972fd300bafe91`;
    var request= new XMLHttpRequest();
    request.open('GET',URL,true);
    request.send();
    request.onload=function(){
        var data=JSON.parse(this.response);
        console.log(`${name}:${data.main.temp}`);
    }
}