# Backend
The backend of this project is built using Django and GraphQL. It is responsible for serving data to the frontend and handling mutations from the frontend.

### Setup
To set up the backend, follow these steps:-


- Make sure you have Python 3.x installed on your machine.
- Clone the repository and navigate to the backend directory.
- Create a virtual environment by running python -m venv env.
- Activate the virtual environment by running source env/bin/activate on Linux/MacOS or env\Scripts\activate.bat on Windows.
- Install the dependencies by running pip install -r requirements.txt.
-Run the migrations by running python manage.py migrate.
- Create some sample data by running python manage.py create_sample_data.

# Running the server
To run the server, navigate to the backend directory and run python manage.py runserver. The server will start at http://localhost:8000.


If you are using docker
- Build docker image using docker build .
- Run docker-compose build
- Run all the python codes through docker using this as an example: docker-compose run --rm web sh -c "python manage.py createsuperuser"

# Project Structure

project/

├── backend/

│   ├── Dockerfile

│   ├── requirements.txt

│   ├── manage.py

│   ├── graphql/

│   │   ├── schema.py

│   │   ├── queries.py

│   │   ├── mutations.py

│   │   ├── types.py

│   │   └── __init__.py

│   ├── products/

│   │   ├── models.py

│   │   ├── commands.py

│   │   └── __init__.py

│   ├── staticfiles/

│   ├── templates/

│   ├── tests/

│   ├── views/

│   └── ...

└── README.md


# API Endpoints
The backend provides two API endpoints:
-/graphql: This endpoint handles both queries and mutations.
-/graphql/mutation: This endpoint handles mutations.

Both endpoints use the same view (GraphQLView.as_view()) but with different schema objects. The csrf_exempt decorator is used to disable CSRF protection on these endpoints.
You are not necessarily required to complete the exercise but we encourage spending at least 4 hours to showcase as much as you can.

# GraphQL Schema
The GraphQL schema is defined in schema.py. It consists of two types: Query and Mutation

### Query
The Query type defines the available queries. Currently, there is only

example:
query {
allProducts {
id
name
description
price
}
}

## To add list of drugs to database
- run docker-compose run --rm web sh -c "python load_data.py" or python load_data.py if you are not using docker


![ResultsFromDataBase](https://user-images.githubusercontent.com/73552453/231683870-54aaa14f-4ac8-4b67-b73f-e1c9027f25b9.png)
![backend](https://user-images.githubusercontent.com/73552453/231684063-0dce4c1d-2834-4885-b0f8-32c96a19a8a8.png)
![graphql_interface](https://user-images.githubusercontent.com/73552453/231683892-b7935e2a-68ca-4120-8e1a-80d7eb8b3465.png)



