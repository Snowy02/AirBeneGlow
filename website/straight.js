
function updateStraightHairCareTips(humidityPercentage) {
    const tip1 = document.getElementById('tip1');
    const tip2 = document.getElementById('tip2');
    const tip3 = document.getElementById('tip3');

    if (humidityPercentage < 30) {
        tip1.innerHTML = `
            <h3>Tip 1: Use a Mild Shampoo</h3>
            <p>Use a mild shampoo to keep your straight hair clean and healthy.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Avoid Heavy Products</h3>
            <p>Avoid using heavy styling products, as they can weigh down your straight hair.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Regular Trims</h3>
            <p>Get regular trims to maintain the shape and prevent split ends.</p>
        `;
    } else if (humidityPercentage >= 30 && humidityPercentage <= 60) {
        tip1.innerHTML = `
            <h3>Tip 1: Use a Moisturizing Conditioner</h3>
            <p>Use a moisturizing conditioner to keep your straight hair hydrated.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Blow-Dry with Cool Air</h3>
            <p>When blow-drying, use cool air to prevent excessive heat damage.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Consider a Hair Serum</h3>
            <p>Consider using a hair serum to add shine and reduce frizz in moderate humidity.</p>
        `;
    } else {
        tip1.innerHTML = `
            <h3>Tip 1: Embrace Straightness</h3>
            <p>Embrace the natural straightness of your hair in high humidity.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Use Anti-Humidity Products</h3>
            <p>Use anti-humidity hair products to combat frizz in humid conditions.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Minimal Styling</h3>
            <p>Opt for minimal styling in high humidity to maintain your straight hair's sleekness.</p>
        `;
    }
}

async function updateHairCareTipsFromThingSpeak() {
    try {
      
        const response = await fetch('https://api.thingspeak.com/channels/2247895/feeds.json?api_key=QFCKFMM0X8S29XWM&results=1');
        const data = await response.json();
        
        if (data && data.feeds && data.feeds.length > 0) {
            const humidityPercentage = parseFloat(data.feeds[0].field1);
            updateStraightHairCareTips(humidityPercentage);
        }
    } catch (error) {
        console.error(`Error fetching data from ThingSpeak: ${error}`);
    }
}


updateHairCareTipsFromThingSpeak();
