
function updateOilHairCareTips(humidityPercentage) {
    const tip1 = document.getElementById('tip1');
    const tip2 = document.getElementById('tip2');
    const tip3 = document.getElementById('tip3');

    if (humidityPercentage < 30) {
        tip1.innerHTML = `
            <h3>Tip 1: Use an Oil-Free Cleanser</h3>
            <p>Combat excess oil with a gentle, oil-free cleanser to keep your skin clean and refreshed.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Blotting Papers</h3>
            <p>Carry blotting papers with you to quickly remove excess oil throughout the day without clogging your pores.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Lightweight Moisturizer</h3>
            <p>Opt for a lightweight, oil-free moisturizer to hydrate your skin without adding extra oil.</p>
        `;
    } else if (humidityPercentage >= 30 && humidityPercentage <= 60) {
        tip1.innerHTML = `
            <h3>Tip 1: Gentle Cleansing</h3>
            <p>Use a gentle, foaming cleanser to cleanse your skin without stripping away essential oils.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Oil-Absorbing Products</h3>
            <p>Consider using oil-absorbing products like mattifying primers or powders to control shine.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Oil-Free Sunscreen</h3>
            <p>Always use an oil-free, broad-spectrum sunscreen to protect your skin without adding extra oil.</p>
        `;
    } else {
        tip1.innerHTML = `
            <h3>Tip 1: Hydrate Properly</h3>
            <p>Even with oily skin, it's important to use a lightweight moisturizer to maintain skin balance.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Salicylic Acid Products</h3>
            <p>Consider using products containing salicylic acid to exfoliate and unclog pores.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Blot and Reapply</h3>
            <p>Carry oil-blotting sheets and sunscreen for touch-ups throughout the day.</p>
        `;
    }
    
}

async function updateSkinCareTipsFromThingSpeak() {
    try {
      
        const response = await fetch('https://api.thingspeak.com/channels/2247895/feeds.json?api_key=QFCKFMM0X8S29XWM&results=1');
        const data = await response.json();
        
        if (data && data.feeds && data.feeds.length > 0) {
            const humidityPercentage = parseFloat(data.feeds[0].field1);
            updateOilHairCareTips(humidityPercentage);
        }
    } catch (error) {
        console.error(`Error fetching data from ThingSpeak: ${error}`);
    }
}


updateSkinCareTipsFromThingSpeak();
