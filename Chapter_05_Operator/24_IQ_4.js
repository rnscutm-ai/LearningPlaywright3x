let responseTime = 850; //ms
let sla = 1000; //ms  sla = service level agreement
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA breached";
console.log(`Response: ${responseTime}ms - ${slaStatus}`);
// Template literal
console.log(`What is the SLA time ? - ${sla}`);



