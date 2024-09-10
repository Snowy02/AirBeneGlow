from flask import Flask, render_template
import requests
import json
from datetime import datetime, timedelta
humidity_percentage=0
app = Flask(__name__, template_folder='.', static_folder='.')


CHANNEL_ID = '2247895'
API_KEY = 'QFCKFMM0X8S29XWM'
# API_KEY ='O8QGP76A6TL2UAO3'
THING_SPEAK_URL = f'https://api.thingspeak.com/channels/{CHANNEL_ID}/feeds.json?api_key={API_KEY}'

SCHANNEL_ID = '2286706'
SAPI_KEY = '8KFIP8486BF53JPU'
STHING_SPEAK_URL = f'https://api.thingspeak.com/channels/{SCHANNEL_ID}/feeds.json?api_key={SAPI_KEY}'

PCHANNEL_ID = '2286723'
PAPI_KEY = 'BCO570PO5PITYZNF'
PTHING_SPEAK_URL = f'https://api.thingspeak.com/channels/{PCHANNEL_ID}/feeds.json?api_key={PAPI_KEY}'


@app.route('/')
def html1():
    return render_template('index.html')

@app.route("/common.css")
def css1():
    return app.send_static_file("common.css")

@app.route("/navbar.css")
def css2():
    return app.send_static_file("navbar.css")

@app.route("/footer.css")
def css3():
    return app.send_static_file("footer.css")

@app.route("/curly.html")
def html2():
    response = requests.get(THING_SPEAK_URL)
    if response.status_code == 200:
        data = response.json()
        if 'feeds' in data and len(data['feeds']) > 0:
            field1_values = []
            current_time = datetime.now()
            twelve_hours_ago = current_time - timedelta(hours=12)

            for entry in data['feeds']:
                entry_time = datetime.strptime(entry['created_at'], "%Y-%m-%dT%H:%M:%SZ")

                if 'field1' in entry and entry['field1'] is not None and entry['field1'] != "nan":
                    if entry_time >= twelve_hours_ago:
                        field1_values.append(float(entry['field1']))
                    else:
                        break

            if not field1_values:
                for entry in data['feeds']:
                    if 'field1' in entry and entry['field1'] is not None and entry['field1'] != "nan":
                        field1_values.append(float(entry['field1']))
                    if len(field1_values) >= 12:
                        break 

            if field1_values:
                humidity_percentage = sum(field1_values) / len(field1_values)
                humidity_percentage = round(humidity_percentage, 2) 
    
    return render_template('curly.html', humidity_percentage=humidity_percentage)
        

@app.route("/cstyle.css")
def css4():
    return app.send_static_file("cstyle.css")

@app.route("/styles.css")
def css5():
    return app.send_static_file("styles.css")

@app.route("/curly.js")
def js1():
    return app.send_static_file("curly.js")

@app.route("/script.js")
def js2():
    return app.send_static_file("script.js")

    
@app.route("/wavy.html")
def html3():
    response = requests.get(THING_SPEAK_URL)
    if response.status_code == 200:
        data = response.json()
        if 'feeds' in data and len(data['feeds']) > 0:
            field1_values = []
            current_time = datetime.now()
            twelve_hours_ago = current_time - timedelta(hours=12)

            for entry in data['feeds']:
                entry_time = datetime.strptime(entry['created_at'], "%Y-%m-%dT%H:%M:%SZ")

                if 'field1' in entry and entry['field1'] is not None and entry['field1'] != "nan":
                    if entry_time >= twelve_hours_ago:
                        field1_values.append(float(entry['field1']))
                    else:
                        break

            if not field1_values:
                for entry in data['feeds']:
                    if 'field1' in entry and entry['field1'] is not None and entry['field1'] != "nan":
                        field1_values.append(float(entry['field1']))
                    if len(field1_values) >= 12:
                        break 

            if field1_values:
                humidity_percentage = sum(field1_values) / len(field1_values)
                humidity_percentage = round(humidity_percentage, 2) 
    
    return render_template('wavy.html', humidity_percentage=humidity_percentage)

@app.route("/straight.html")
def html4():
    response = requests.get(THING_SPEAK_URL)
    if response.status_code == 200:
        data = response.json()
        if 'feeds' in data and len(data['feeds']) > 0:
            field1_values = []
            current_time = datetime.now()
            twelve_hours_ago = current_time - timedelta(hours=12)

            for entry in data['feeds']:
                entry_time = datetime.strptime(entry['created_at'], "%Y-%m-%dT%H:%M:%SZ")

                if 'field1' in entry and entry['field1'] is not None and entry['field1'] != "nan":
                    if entry_time >= twelve_hours_ago:
                        field1_values.append(float(entry['field1']))
                    else:
                        break

            if not field1_values:
                for entry in data['feeds']:
                    if 'field1' in entry and entry['field1'] is not None and entry['field1'] != "nan":
                        field1_values.append(float(entry['field1']))
                    if len(field1_values) >= 12:
                        break 

            if field1_values:
                humidity_percentage = sum(field1_values) / len(field1_values)
                humidity_percentage = round(humidity_percentage, 2) 
    
    return render_template('straight.html', humidity_percentage=humidity_percentage)
    
    
@app.route("/hair.html")
def html5():
    return render_template('hair.html')


@app.route("/wavy.js")
def js3():
    return app.send_static_file("wavy.js")


@app.route("/straight.js")
def js4():
    return app.send_static_file('straight.js')



@app.route("/index.jpeg")
def image1():
    return app.send_static_file("index.jpeg")



@app.route("/hair.jpg")
def image2():
    return app.send_static_file("hair.jpg")

@app.route("/skin.jpg")
def image3():
    return app.send_static_file("skin.jpg")


@app.route("/skin.html")
def html6():
    return render_template('skin.html')

@app.route("/script_skin.js")
def js5():
    return app.send_static_file("script_skin.js")

@app.route("/oil.html")
def html7():
    response = requests.get(STHING_SPEAK_URL)
    if response.status_code == 200:
        data = response.json()
        if 'feeds' in data and len(data['feeds']) > 0:
            field1_values = []
            current_time = datetime.now()
            twelve_hours_ago = current_time - timedelta(hours=12)

            for entry in data['feeds']:
                entry_time = datetime.strptime(entry['created_at'], "%Y-%m-%dT%H:%M:%SZ")

                if 'field1' in entry and entry['field1'] is not None and entry['field1'] != "nan":
                    if entry_time >= twelve_hours_ago:
                        field1_values.append(float(entry['field1']))
                    else:
                        break

            if not field1_values:
                for entry in data['feeds']:
                    if 'field1' in entry and entry['field1'] is not None and entry['field1'] != "nan":
                        field1_values.append(float(entry['field1']))
                    if len(field1_values) >= 12:
                        break 

            if field1_values:
                humidity_percentage = sum(field1_values) / len(field1_values)
                humidity_percentage = round(humidity_percentage, 2) 
    
    return render_template('oil.html', humidity_percentage=humidity_percentage)

@app.route("/oil.js")
def js6():
    return app.send_static_file("oil.js")

@app.route("/dry.html")
def html8():
    response = requests.get(STHING_SPEAK_URL)
    if response.status_code == 200:
        data = response.json()
        if 'feeds' in data and len(data['feeds']) > 0:
            field1_values = []
            current_time = datetime.now()
            twelve_hours_ago = current_time - timedelta(hours=12)

            for entry in data['feeds']:
                entry_time = datetime.strptime(entry['created_at'], "%Y-%m-%dT%H:%M:%SZ")

                if 'field1' in entry and entry['field1'] is not None and entry['field1'] != "nan":
                    if entry_time >= twelve_hours_ago:
                        field1_values.append(float(entry['field1']))
                    else:
                        break

            if not field1_values:
                for entry in data['feeds']:
                    if 'field1' in entry and entry['field1'] is not None and entry['field1'] != "nan":
                        field1_values.append(float(entry['field1']))
                    if len(field1_values) >= 12:
                        break 

            if field1_values:
                humidity_percentage = sum(field1_values) / len(field1_values)
                humidity_percentage = round(humidity_percentage, 2) 
    
    return render_template('dry.html', humidity_percentage=humidity_percentage)

@app.route("/dry.js")
def js7():
    return app.send_static_file("dry.js")

@app.route("/sensitive.html")
def html9():
    response = requests.get(STHING_SPEAK_URL)
    if response.status_code == 200:
        data = response.json()
        if 'feeds' in data and len(data['feeds']) > 0:
            field1_values = []
            current_time = datetime.now()
            twelve_hours_ago = current_time - timedelta(hours=12)

            for entry in data['feeds']:
                entry_time = datetime.strptime(entry['created_at'], "%Y-%m-%dT%H:%M:%SZ")

                if 'field1' in entry and entry['field1'] is not None and entry['field1'] != "nan":
                    if entry_time >= twelve_hours_ago:
                        field1_values.append(float(entry['field1']))
                    else:
                        break

            if not field1_values:
                for entry in data['feeds']:
                    if 'field1' in entry and entry['field1'] is not None and entry['field1'] != "nan":
                        field1_values.append(float(entry['field1']))
                    if len(field1_values) >= 12:
                        break 

            if field1_values:
                humidity_percentage = sum(field1_values) / len(field1_values)
                humidity_percentage = round(humidity_percentage, 2) 
    
    return render_template('sensitive.html', humidity_percentage=humidity_percentage)

@app.route("/sensitive.js")
def js8():
    return app.send_static_file("sensitive.js")

@app.route("/index.html")
def html10():
    return app.send_static_file("index.html")



def get_average_co2_level():
    response = requests.get(PTHING_SPEAK_URL)
    if response.status_code == 200:
        data = response.json()
        co2_values = [float(entry['field1']) for entry in data['feeds'] if entry['field1'] is not None]
        if co2_values:
            average_co2_level = sum(co2_values) / len(co2_values)
            formatted_co2_level =  round(average_co2_level, 2)
            return formatted_co2_level
        else:
            return None
    else:
        print(f"Failed to retrieve data. Status Code: {response.status_code}")
        return None

def get_average_voc_level():
    response = requests.get(PTHING_SPEAK_URL)
    if response.status_code == 200:
        data = response.json()
        voc_values = [float(entry['field2']) for entry in data['feeds'] if entry['field2'] is not None]
        if voc_values:
            average_voc_level = sum(voc_values) / len(voc_values)
            formatted_voc_level =  round(average_voc_level, 2)
            return formatted_voc_level
        else:
            return None
    else:
        print(f"Failed to retrieve data. Status Code: {response.status_code}")
        return None

@app.route("/plant.html")
def a():
    co2_level = get_average_co2_level()
    return render_template('plant.html', co2_level=co2_level)


@app.route("/perfume.html")
def x():
    voc_level = get_average_voc_level()
    return render_template('perfume.html', voc_level=voc_level)


@app.route("/plant.css")
def css6():
    return app.send_static_file("plant.css")

@app.route("/plant.js")
def js10():
    return app.send_static_file("plant.js")



if __name__ == '__main__':
    app.run(debug=True)