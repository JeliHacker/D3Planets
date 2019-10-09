var planetPromise = d3.json("planets.json");

planetPromise.then(
    
    function(data){
        answerA1(data);
        answerA2(data);
        answerB3(data);
        answerB4(data);
        answerC1(data);
        answerC2(data);
        answerC3(data);
        console.log("what it do baby");
        console.log(data);
    },
        function(err){
            console.log("this code belongs to the streets");
    })



var answerA1 = function(){
    var answerDiv = d3.select("#A1");
    var Names = [];
    Names.push("Mercury");
    Names.push("Venus");
    Names.push("Earth");
    /*
    answerDiv.selectAll("#A1")
        .data(planetPromise)
        .enter()
        .append("p")*/
    //answerDiv.append("p").text(Names);
    answerDiv.append("p").text(Names);
};



var answerA2 = function(data){
    var addSpan = d3.select("#A2");
    addSpan.selectAll("#A2")
        .data(data)
        .enter()
        .append("span")
        .text()
};



 var answerB3 = function(data){
     
    var addImages = d3.select("#B3");
     
     addImages.selectAll("img")
        .data(data)
        .enter()
        .append("img")
        .attr("src", function(planets){
         return planets.img;
     })
 };



var answerB4 = function(data){
    var answerB4Location = d3.select("#B4");
    
    answerB4Location.selectAll("ol")
        .data(data)
        .enter()
        .append("li")
        .text(function(planets){
        return planets.name;
    })
}



var answerC1 = function(data){
    var answerC1Location = d3.select("#C1")
        .append("table")
    
    answerC1Location.selectAll("tr")
        .data(data)
        .enter()
        .append("tr")
}

var answerC2 = function(data){
    var answerC2Location = d3.select("#C2")
        .append("table")
    
    var rows = answerC2Location.selectAll("tr")
        .data(data)
        .enter()
        .append("tr")
    
    rows.append("td")
        .text(function(planet){
        return planet.name
    })
}

var answerC3 = function(data){
    var answerC3Location = d3.select("#C3")
        .append("table")
    
    var rows = answerC3Location.selectAll("tr")
        .data(data)
        .enter()
        .append("tr")
        .style("font-size", "30px")
        .style("font-family", "Monaco")
    
    rows.append("td")
        .text(function(planet){
        return planet.name
    })
    rows.append("td")
        .text(function(planet){
        return planet.density
    })
    
    rows.append("td")
        .text(function(planet){
        return planet.distance
    })
   /* 
    rows.append("td")
        .text(function(planet){
        return planet.img
    })
    */
    rows.append("td")
        .text(function(planet){
        return planet.moons
    })
    
    rows.append("td")
        .text(function(planet){
        return planet.radius
    })
}
//document.getElementById("body").innerHTML = "look mom no hands";
