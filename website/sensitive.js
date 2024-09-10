
function updateskinCareTipsForsensitive(humidityPercentage) {
    const tip1 = document.getElementById('tip1');
    const tip2 = document.getElementById('tip2');
    const tip3 = document.getElementById('tip3');

    if (humidityPercentage < 30) {
        tip1.innerHTML = `
            <h3>Tip 1: Use Fragrance-Free Products</h3>
            <p>Opt for fragrance-free skincare products to reduce the risk of irritation.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Mild Cleansing</h3>
            <p>Use a mild, hypoallergenic cleanser to gently cleanse your sensitive skin.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Apply a Soothing Moisturizer</h3>
            <p>Choose a moisturizer specifically formulated for sensitive skin to keep it hydrated and calm.</p>
        `;
    } else if (humidityPercentage >= 30 && humidityPercentage <= 60) {
        tip1.innerHTML = `
            <h3>Tip 1: Hydration is Essential</h3>
            <p>Keep your sensitive skin well-hydrated with a gentle, hydrating moisturizer.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Allergen-Free Makeup</h3>
            <p>If you wear makeup, opt for allergen-free and hypoallergenic makeup products.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Patch Test New Products</h3>
            <p>Before using a new skincare product, perform a patch test to check for any adverse reactions.</p>
        `;
    } else {
        tip1.innerHTML = `
            <h3>Tip 1: Soothe with Aloe Vera</h3>
            <p>Keep aloe vera gel on hand to soothe sensitive skin during high-humidity days.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Avoid Harsh Exfoliants</h3>
            <p>Avoid harsh exfoliants and physical scrubs that can irritate sensitive skin.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Maintain a Consistent Routine</h3>
            <p>Stick to a consistent skincare routine with products that your skin has tolerated well.</p>
        `;
    }
    
}


async function updateskinCareTipsForsensitiveFromThingSpeak() {
    try {
      
        const response = await fetch('https://api.thingspeak.com/channels/2247895/feeds.json?api_key=QFCKFMM0X8S29XWM&results=1');
        const data = await response.json();
        
        if (data && data.feeds && data.feeds.length > 0) {
            const humidityPercentage = parseFloat(data.feeds[0].field1);

            
            updateskinCareTipsForsensitive(humidityPercentage);
        }
    } catch (error) {
        console.error(`Error fetching data from ThingSpeak: ${error}`);
    }
}


updateskinCareTipsForsensitiveFromThingSpeak();
