from flask import  Flask, jsonify, request, render_template, send_from_directory, session, redirect, url_for


app = Flask(__name__, static_folder='statics', static_url_path='/statics')



@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/testMessage')
def testMessage():
    return {'message':'The connection to backend is all good!'}

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json(force=True)
    username = data.get('username')
    password = data.get('password')

    # Print the received username and password
    print(f"Received username: {username}")
    print(f"Received password: {password}")

    # Check if username and password are not null
    if not username or not password:
        print("Username and password are required.")
        return jsonify({'message': 'Username and password are required.'}), 400

    # Authentication successful
    print("Register successful." + username)
    successful_message = 'Account ' + username + ' has been registered successfully.'
    
    return jsonify({'message': successful_message}), 200



if __name__ == '__main__':
    app.run()