
var ourData = [];

var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET" , "https://api.weatherapi.com/v1/forecast.json?key=91461dd63edd45f9892182908240401&q=cairo&days=3");

xmlhttp.send();

xmlhttp.addEventListener("readystatechange", function(){
  if(xmlhttp.readyState==4 && xmlhttp.status==200)
  {
    ourData=JSON.parse(xmlhttp.response);

    displayData()
  }
})

function displayData()
{
  var Data =``;

  var x = new Date ;

  var alldays = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"] ;


  var months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "Septamber" , "October" , "November" , "December"] ;

  
  
    Data += `
             <div class="col-md-4 py-5 ">
             <div class="card rounded-4 input text-white card-width">
             <div class="card-body">
             <div class="border-bottom d-flex justify-content-between">
               <p class="card-title"> ${alldays[x.getDay()]}</p>
               <p class="card-title">   ${ourData.forecast.forecastday[0].date} </p>
             </div>
               <p class="card-text text-center pt-3 fs-5"> ${ourData.location.name} </p>
               <div class="d-flex align-items-center justify-content-center ">
               <p class="card-text  pt-2 size"> ${ourData.current.temp_c}  </p>
               <i class=" ps-2 fs-1 fa-solid fa-temperature-high"></i>
               </div>
               <p class="card-text text-center color fs-5 pb-3"> ${ourData.current.condition.text} </p>
             </div>
             </div>
             </div>



             <div class="col-md-4 py-5 ">
             <div class="card rounded-4 input text-white card-width">
             <div class="card-body">
             <div class="border-bottom text-center">
               <p class="card-title"> ${ourData.forecast.forecastday[1].date}</p>
             </div>
               <p class="card-text pt-3 text-color fs-5"> ${ourData.location.name} </p>
               <div class="d-flex align-items-center justify-content-center ">
               <p class="card-text  pt-2 size"> ${ourData.forecast.forecastday[1].day.maxtemp_c}  </p>
               <i class=" ps-2 fs-1 fa-solid fa-temperature-high"></i>
               </div>
               <p class="card-text text-center color fs-5 pb-3"> ${ourData.forecast.forecastday[1].day.condition.text} </p>
             </div>
             </div>
             </div>



             <div class="col-md-4 py-5 ">
             <div class="card rounded-4 input text-white card-width">
             <div class="card-body">
             <div class="border-bottom text-center">
               <p class="card-title"> ${ourData.forecast.forecastday[2].date}</p>
             </div>
               <p class="card-text pt-3 text-color fs-5"> ${ourData.location.name} </p>
               <div class="d-flex align-items-center justify-content-center ">
               <p class="card-text  pt-2 size"> ${ourData.forecast.forecastday[2].day.maxtemp_c}  </p>
               <i class=" ps-2 fs-1 fa-solid fa-temperature-high"></i>
               </div>
               <p class="card-text text-center color fs-5 pb-3"> ${ourData.forecast.forecastday[2].day.condition.text} </p>
             </div>
             </div>
             </div>


             

    `

    document.querySelector(".egypt").innerHTML= Data
  
}