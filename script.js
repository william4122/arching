function matchAndDisplay(file1Data, file2Data) {
    const matches = [];

    for (const entry2 of file2Data) {
        // Check if 'body' is defined and has a 'targetId' property
        if (entry2.body && entry2.body.targetId) {
            const targetId = entry2.body.targetId;

            // Find matching entry in file1 based on targetId
            const matchingEntry = file1Data.find(entry1 => entry1.id === targetId);

            if (matchingEntry) {
                // Check if 'name' property is present in matchingEntry
                const name = matchingEntry.name || 'N/A';

                // Display matches
                matches.push({
                    Name: name,
                    RelatedID: entry2.relatedId || 'N/A',
                    TargetID: targetId,
                    ID: entry2.id || 'N/A'
                });
            }
        }
    }

    // Display matches
    displayMatches(matches);
}
