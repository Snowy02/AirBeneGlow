AIRBENEGLOW is a web application that provides personalized hair, skin, plant, and perfume recommendations based on environmental sensor data. The app gathers real-time data from humidity, temperature, CO2, and VOC sensors and suggests optimal care routines and products tailored to the current environmental conditions.

Features-
Hair and Skin Care Advice: Based on humidity and temperature, AIRBENEGLOW suggests the most suitable ways to style your hair and care for your skin.

Plant Recommendations: Using CO2 sensor data, the app recommends what plants are best suited for growth in the current environment.

Perfume Suggestions: Based on VOC (Volatile Organic Compounds) data, AIRBENEGLOW suggests the best perfumes for the day to suit the environmental air quality.

Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Python
Sensors Used: Humidity, Temperature, CO2, VOC

Prerequisites-
To run the AIRBENEGLOW website, ensure you have the following installed:
Python 3.x
Required sensor modules for retrieving data from the sensors
Basic web server dependencies (HTML, CSS, JavaScript)


Connect the sensors:

Ensure that the humidity, temperature, CO2, and VOC sensors are correctly connected to your system and that you can retrieve data from them.

Run the application: To start the web server, run the following command:

python3 app.py
Access the website: Once the server is running, open a web browser and navigate to the localhost.
You should now see the AIRBENEGLOW interface.

Usage
After the website loads, the sensor data is automatically retrieved, and the personalized recommendations for hair, skin, plants, and perfumes will be displayed.
Users can interact with the web interface to get real-time suggestions based on current environmental conditions.
Future Improvements
Expanding the range of recommendations for different climates and environments.
Adding more advanced skincare and haircare routines based on seasonal trends.
Integrating the platform with more advanced sensor types for further personalization.
