


function updateHairCareTips(humidityPercentage) {
    const tip1 = document.getElementById('tip1');
    const tip2 = document.getElementById('tip2');
    const tip3 = document.getElementById('tip3');

    if (humidityPercentage < 30) {
        tip1.innerHTML = `
            <h3>Tip 1: Hydration is Key</h3>
            <p>Keep your curly hair hydrated by using a moisturizing shampoo and conditioner.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Avoid Heat Styling</h3>
            <p>Avoid excessive heat styling, as it can cause damage to your curls. Use heat protectant when necessary.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Regular Trims</h3>
            <p>Get regular trims to prevent split ends and maintain the shape of your curls.</p>
        `;
    } else if (humidityPercentage >= 30 && humidityPercentage <= 60) {
        tip1.innerHTML = `
            <h3>Tip 1: Hydration is Key</h3>
            <p>Keep your curly hair hydrated by using a moisturizing shampoo and conditioner.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Use a Diffuser</h3>
            <p>Opt for a diffuser when blow-drying your hair to enhance your curls without causing frizz.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Condition Regularly</h3>
            <p>Use a leave-in conditioner to maintain moisture throughout the day.</p>
        `;
    } else {
        tip1.innerHTML = `
            <h3>Tip 1: Use Anti-Frizz Products</h3>
            <p>Use anti-frizz products to control frizz in high humidity.</p>
        `;
        tip2.innerHTML = `
            <h3>Tip 2: Avoid Excessive Product</h3>
            <p>Avoid using too much product in high humidity, as it can weigh down your curls.</p>
        `;
        tip3.innerHTML = `
            <h3>Tip 3: Embrace the Humidity</h3>
            <p>Consider embracing the natural volume and texture that humidity can give your curls.</p>
        `;
    }
}


async function updateHairCareTipsFromThingSpeak() {
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
                    <h3>Tip 1: Hydration is Key</h3>
                    <p>Keep your curly hair hydrated by using a moisturizing shampoo and conditioner.</p>
                `;
                tip2.innerHTML = `
                    <h3>Tip 2: Avoid Heat Styling</h3>
                    <p>Avoid excessive heat styling, as it can cause damage to your curls. Use heat protectant when necessary.</p>
                `;
                tip3.innerHTML = `
                    <h3>Tip 3: Regular Trims</h3>
                    <p>Get regular trims to prevent split ends and maintain the shape of your curls.</p>
                `;
            } else if (humidityPercentage >= 30 && humidityPercentage <= 60) {
                tip1.innerHTML = `
                    <h3>Tip 1: Hydration is Key</h3>
                    <p>Keep your curly hair hydrated by using a moisturizing shampoo and conditioner.</p>
                `;
                tip2.innerHTML = `
                    <h3>Tip 2: Use a Diffuser</h3>
                    <p>Opt for a diffuser when blow-drying your hair to enhance your curls without causing frizz.</p>
                `;
                tip3.innerHTML = `
                    <h3>Tip 3: Condition Regularly</h3>
                    <p>Use a leave-in conditioner to maintain moisture throughout the day.</p>
                `;
            } else {
                tip1.innerHTML = `
                    <h3>Tip 1: Use Anti-Frizz Products</h3>
                    <p>Use anti-frizz products to control frizz in high humidity.</p>
                `;
                tip2.innerHTML = `
                    <h3>Tip 2: Avoid Excessive Product</h3>
                    <p>Avoid using too much product in high humidity, as it can weigh down your curls.</p>
                `;
                tip3.innerHTML = `
                    <h3>Tip 3: Embrace the Humidity</h3>
                    <p>Consider embracing the natural volume and texture that humidity can give your curls.</p>
                `;
            }
        }
    } catch (error) {
        console.error(`Error fetching data from ThingSpeak: ${error}`);
    }
}


updateHairCareTipsFromThingSpeak();

