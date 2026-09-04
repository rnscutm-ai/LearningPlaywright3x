class Report{
    generate(data){
        console.log("Raw Data:" + data)
    }
}
class HTMLReport extends Report{
    generate(data){
        console.log("<html><body>" + data + "</body></html>")
    }
}
class JSONReport extends Report{
generate(data){
        console.log('{"report":"' + data + '"}');
    }
}
class TestReport extends Report{
    generate(data){
        console.log("=== REPORT ===\n" + data + "\n======");
    }
}
let reports = [new HTMLReport(), new JSONReport(), new TestReport()];
reports.forEach(function(r){
r.generate("5 test passed, 1 failed");
console.log("---");
});