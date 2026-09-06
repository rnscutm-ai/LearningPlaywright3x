// geto,puto:- spanish words for get and put..
enum HTTPMethods {
  Geto = "GET",
  Posto = "POST",
  Puto = "PUT",
  Deleto = "DELETE"
}
function sendRequest(method: HTTPMethods, url: string): void {
  console.log(method + " " + url + "-> 200 OK");
  // Here you would implement the actual HTTP request logic using fetch or another HTTP client library.
}
sendRequest(HTTPMethods.Geto, "https://api.example.com/users");
sendRequest(HTTPMethods.Puto, "https://api.example.com/users/1");
sendRequest(HTTPMethods.Posto, "https://api.example.com/users");
sendRequest(HTTPMethods.Deleto, "https://api.example.com/users/1");