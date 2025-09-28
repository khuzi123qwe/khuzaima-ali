

function getWeather(){



const res = axios.get(
"https://p2pclouds.up.railway.app/v1/learn/weather?city=lahore"
)
res 
.then((data)=> {
console.log(data.data.current.feelsslike_c);
})

.catch.log((err)=> {
    console.log (err);
   });




}



