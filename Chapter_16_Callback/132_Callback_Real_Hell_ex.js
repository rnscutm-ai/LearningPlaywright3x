const fs = require('fs');

// Step 1: Read file1.txt
fs.readFile('file1.txt', 'utf8', (err, data1) => {
    if (err) {
        console.error("Error reading file1:", err);
        return;
    }
    console.log("File1 content:", data1);

    // Step 2: Read file2.txt
    fs.readFile('file2.txt', 'utf8', (err, data2) => {
        if (err) {
            console.error("Error reading file2:", err);
            return;
        }
        console.log("File2 content:", data2);

        // Step 3: Write combined content to file3.txt
        fs.writeFile('file3.txt', data1 + "\n" + data2, (err) => {
            if (err) {
                console.error("Error writing file3:", err);
                return;
            }
            console.log("file3.txt created successfully!");

            // Step 4: Append extra text to file3.txt
            fs.appendFile('file3.txt', "\nExtra line added!", (err) => {
                if (err) {
                    console.error("Error appending to file3:", err);
                    return;
                }
                console.log("Extra line appended!");

                // Step 5: Read final file3.txt
                fs.readFile('file3.txt', 'utf8', (err, finalData) => {
                    if (err) {
                        console.error("Error reading final file3:", err);
                        return;
                    }
                    console.log("Final file3 content:\n", finalData);
                });
            });
        });
    });
});
