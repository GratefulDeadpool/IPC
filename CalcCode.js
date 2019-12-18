var triangleCount = 0;
var triangleSideList = [];
var runFunction = false;
var p1;

while (triangleCount < 1 || isNaN(triangleCount))
{
  triangleCount = prompt("This is a polygon area calculator specially suited to polygons that are irregular. Draw diagonals between the verticies of your polygon without intersecting the lines, forming triangles. Please enter the amount of triangles that were formed:");
  if (triangleCount === null)
  {
    break;
  }
}

triangleSideList = inputArrayMake(triangleCount);

for (var z = 0; z < triangleSideList.length; z++)
{
  if (triangleSideList[z] !== null)
  {
    runFunction = true;
  }
}

if (runFunction)
{
  calcPolygon(triangleSideList);
}

function inputArrayMake(tCount)
{
  var sideCounter = 0;
  var triangleSidePrompt = 0;
  var currentTriangleSide = 1;
  var currentTriangle = 0;
  var tSList = [];
  for (var x = 0; x < tCount; x++)
  {
    currentTriangle = x+1;
    for (var y = 0; y < 3; y++)
    {
      triangleSidePrompt = prompt("Please enter side measurement " + currentTriangleSide + " of triangle " + currentTriangle + ":");
      if (triangleSidePrompt > 0 && isNaN(triangleSidePrompt)===false)
      {
        tSList[sideCounter] = parseInt(triangleSidePrompt);
        currentTriangleSide++;
        sideCounter++;
      }
      else if (triangleSidePrompt === null)
      {
        tSList = [];
        x = tCount;
        y = 3;
      }
      else 
      {
       y--;
      }
    }
    currentTriangle++;
    currentTriangleSide = 1;
  }
  return tSList;
}

function calcPolygon(polyArray) 
{
  var s = 0;
  var triArea = 0;
  var totArea = 0;
  
  for (var x = 0; x < polyArray.length; x+=3)
  {
    s = (polyArray[x] + polyArray[x+1] + polyArray[x+2])/2;
    triArea = Math.sqrt(s*(s-polyArray[x])*(s-polyArray[x+1])*(s-polyArray[x+2]));
    totArea += triArea;
  }
  if (totArea == 1)
  {
    document.getElementById("output").innerHTML = totArea + " square unit";
  }
  else if (totArea > 0)
  {
    document.getElementById("output").innerHTML = totArea + " square units";
  }
  else
  {
    document.getElementById("output").innerHTML = "Illogical input! The sum of any 2 sides of a triangle must be greater than the measure of the third side. In at least one of the inputted triangles, this condition was not satisfied. Please check your measurements carefully and restart this program.";
  }
}

