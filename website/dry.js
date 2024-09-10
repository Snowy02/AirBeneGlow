


function updateSkinCareTips(humidityPercentage) {
    const tip1 = document.getElementById('tip1');
    const tip2 = document.getElementById('tip2');
    const tip3 = document.getElementById('tip3');

    if (humidityPercentage < 30) {
        tip1.innerHTML = `
            <h3>Tip 1: Hydration is Crucial</h3>
            <p>Keep your skin well-hydrated by using a rich, moisturizing cream or lotion.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Gentle Cleansing</h3>
            <p>Avoid harsh soaps and opt for a gentle, hydrating cleanser to prevent further drying of your skin.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Stay Hydrated</h3>
            <p>Drink plenty of water throughout the day to hydrate your skin from the inside out.</p>
        `;
    } else if (humidityPercentage >= 30 && humidityPercentage <= 60) {
        tip1.innerHTML = `
            <h3>Tip 1: Hydration is Key</h3>
            <p>Keep your skin hydrated with a moisturizing cream or lotion designed for your skin type.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Exfoliate Gently</h3>
            <p>Exfoliate your skin once a week to remove dead skin cells and promote better absorption of moisturizers.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Use a Humidifier</h3>
            <p>Consider using a humidifier in your room to add moisture to the air, which can benefit your skin.</p>
        `;
    } else {
        tip1.innerHTML = `
            <h3>Tip 1: Intensive Moisturization</h3>
            <p>Opt for an intensive moisturizer or ointment to combat extreme dryness in low-humidity conditions.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Lukewarm Showers</h3>
            <p>Take shorter, lukewarm showers instead of hot ones to prevent further moisture loss from your skin.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Consider a Humidifier</h3>
            <p>Using a humidifier in your home can help maintain adequate moisture levels for your skin.</p>
        `;
    }
    
}


async function updateSkinCareTipsFromThingSpeak() {
    try {
       
        const response = await fetch('https://api.thingspeak.com/channels/2247895/feeds.json?api_key=QFCKFMM0X8S29XWM&results=1');
        const data = await response.json();
        
        if (data && data.feeds && data.feeds.length > 0) {
            const humidityPercentage = parseFloat(data.feeds[0].field1);
            // const humidityDisplay = document.getElementById('humidity-percentage');  //newly added  
            // humidityDisplay.textContent = `Current Humidity: ${humidityPercentage}%`;

         
            const tip1 = document.getElementById('tip1');
            const tip2 = document.getElementById('tip2');
            const tip3 = document.getElementById('tip3');

            if (humidityPercentage < 30) {
                tip1.innerHTML = `
                    <h3>Tip 1: Hydration is Crucial</h3>
                    <p>Keep your skin well-hydrated by using a rich, moisturizing cream or lotion.</p>
                `;
                tip2.innerHTML = `
                    <h3>Tip 2: Gentle Cleansing</h3>
                    <p>Avoid harsh soaps and opt for a gentle, hydrating cleanser to prevent further drying of your skin.</p>
                `;
                tip3.innerHTML = `
                    <h3>Tip 3: Stay Hydrated</h3>
                    <p>Drink plenty of water throughout the day to hydrate your skin from the inside out.</p>
                `;
            } else if (humidityPercentage >= 30 && humidityPercentage <= 60) {
                tip1.innerHTML = `
                    <h3>Tip 1: Hydration is Key</h3>
                    <p>Keep your skin hydrated with a moisturizing cream or lotion designed for your skin type.</p>
                `;
                tip2.innerHTML = `
                    <h3>Tip 2: Exfoliate Gently</h3>
                    <p>Exfoliate your skin once a week to remove dead skin cells and promote better absorption of moisturizers.</p>
                `;
                tip3.innerHTML = `
                    <h3>Tip 3: Use a Humidifier</h3>
                    <p>Consider using a humidifier in your room to add moisture to the air, which can benefit your skin.</p>
                `;
            } else {
                tip1.innerHTML = `
                    <h3>Tip 1: Intensive Moisturization</h3>
                    <p>Opt for an intensive moisturizer or ointment to combat extreme dryness in low-humidity conditions.</p>
                `;
                tip2.innerHTML = `
                    <h3>Tip 2: Lukewarm Showers</h3>
                    <p>Take shorter, lukewarm showers instead of hot ones to prevent further moisture loss from your skin.</p>
                `;
                tip3.innerHTML = `
                    <h3>Tip 3: Consider a Humidifier</h3>
                    <p>Using a humidifier in your home can help maintain adequate moisture levels for your skin.</p>
                `;
            }
            
        }
    } catch (error) {
        console.error(`Error fetching data from ThingSpeak: ${error}`);
    }
}


updateSkinCareTipsFromThingSpeak();

