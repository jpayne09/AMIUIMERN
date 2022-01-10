import $ from 'jquery'; 


export default function setInfo(){
  
  var retrievedObject = JSON.parse(localStorage.getItem('test1'));
  
  var tbody = document.getElementById('tbody');
  
  for (var i = 0; i < retrievedObject.length; i++) {
    
    $("#productTable tbody").append("<tr>" +
     "<td>" + retrievedObject[i].AssetTag + "</td>"+
     "<td>" + retrievedObject[i].SerialNumber + "</td>>"+
      "<td>" + retrievedObject[i].modelinput + "</td>"+
      "<td>" + retrievedObject[i].statusinput + "</td>"+
      "<td>" + retrievedObject[i].AssetName + "</td>" +
      "<td>" + retrievedObject[i].PurchaseDate + "</td>" +
      "<td>" + retrievedObject[i].Supplier + "</td>" +
      "<td>" + retrievedObject[i].OrderNum + "</td>" +
      "<td>" + retrievedObject[i].PurchasedCost + "</td>"+
    "</tr>");
  
  }
  
}
