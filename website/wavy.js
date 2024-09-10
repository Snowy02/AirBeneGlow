
function updateHairCareTipsForWavy(humidityPercentage) {
    const tip1 = document.getElementById('tip1');
    const tip2 = document.getElementById('tip2');
    const tip3 = document.getElementById('tip3');

    if (humidityPercentage < 30) {
        tip1.innerHTML = `
            <h3>Tip 1: Keep It Hydrated</h3>
            <p>Wavy hair tends to get frizzy in low humidity, so use a hydrating shampoo and conditioner to keep it moisturized.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Light Styling Products</h3>
            <p>Opt for lightweight styling products to enhance your waves without weighing them down.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Air Dry or Diffuse</h3>
            <p>Allow your hair to air dry or use a diffuser on low heat to maintain your natural waves.</p>
        `;
    } else if (humidityPercentage >= 30 && humidityPercentage <= 60) {
        tip1.innerHTML = `
            <h3>Tip 1: Use a Leave-In Conditioner</h3>
            <p>Apply a leave-in conditioner to keep your wavy hair moisturized and frizz-free in moderate humidity.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Scrunch Your Hair</h3>
            <p>To enhance your waves, scrunch your hair with a curl-enhancing product while it's damp.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Avoid Excessive Heat</h3>
            <p>Avoid excessive heat styling to maintain the natural texture of your wavy hair.</p>
        `;
    } else {
        tip1.innerHTML = `
            <h3>Tip 1: Anti-Frizz Serum</h3>
            <p>Use an anti-frizz serum to control frizz and maintain your wavy hair's shape in high humidity.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Updos and Braids</h3>
            <p>In very humid conditions, consider styling your wavy hair in updos or braids to control frizz and maintain a neat look.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Refresh with Water</h3>
            <p>If your waves start to lose definition, lightly mist your hair with water and scrunch to revive them.</p>
        `;
    }
}


async function updateHairCareTipsForWavyFromThingSpeak() {
    try {
      
        const response = await fetch('https://api.thingspeak.com/channels/2247895/feeds.json?api_key=QFCKFMM0X8S29XWM&results=1');
        const data = await response.json();
        
        if (data && data.feeds && data.feeds.length > 0) {
            const humidityPercentage = parseFloat(data.feeds[0].field1);

            
            updateHairCareTipsForWavy(humidityPercentage);
        }
    } catch (error) {
        console.error(`Error fetching data from ThingSpeak: ${error}`);
    }
}


updateHairCareTipsForWavyFromThingSpeak();
