let responseCode: number[] = [200, 201, 404, 500];

function getFailedCode(codes: number[]): number[] {
    return codes.filter(function(code:number): boolean {
        return code >= 400;
    });
}
console.log("All Codes:", responseCode);
console.log("Failed Codes:", getFailedCode(responseCode));
