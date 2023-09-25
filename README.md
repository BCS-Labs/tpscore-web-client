# TPScore

![GitHub](https://img.shields.io/github/license/BCS-Labs/tpscore-web-client)
![nycrc config on GitHub](https://img.shields.io/nycrc/BCS-Labs/tpscore-web-client)

## Description
TPScore simplifies TPS Data Analysis for non-technical users in the Polkadot Ecosystem.

TPScore aims to provide non-technical users in the Polkadot ecosystem with an accessible and user-friendly platform for analyzing TPS (Transactions per Second) data. Our goal is to bridge the gap between technical intricacies and user-friendly visualization, empowering individuals to make informed decisions about blockchain adoption, investment, and development.

The project consists of two main parts:

1. ETL System
2. User Interface (UI) with Data Visualizations

This repository contains the User Interface (UI) with Data Visualizations, that includes visually appealing and informative visualizations of the data, reducing users barier to understanding Polkadot parachains metrics. This repository is a part of Milestone 2 submission for the [Grants-Program](https://github.com/w3f/Grants-Program).

## How to run the project using [Docker](https://www.docker.com/) 

Run the ETL System first:

1. Clone [ETL System repository](https://github.com/BCS-Labs/tpscore-etl-system) with `git clone`

Create and Run MySQL Database Container

2. Navigate to the 'db' directory from the project's root directory: `cd db`
3. Build the Docker image using the Dockerfile: `docker build -t mysql_tpscore .`
4. Run a container with the MySQL database **exposing 3306 port**: `docker run --name db_mysql -p 3306:3306 -d mysql_tpscore`

Create and Run Airflow Container

5. Navigate to the 'airflow' directory from the project's root directory: `cd ../airflow`
6. Launch the airflow-init container: `docker compose up airflow-init`
7. Build an image using the Dockerfile and docker-compose files: `docker build .`
8. Start Airflow services: `docker compose up -d`

<hr> 

Then run the TPScore UI project:

1. Clone this repository with `git clone`

2. Add following credentials to `.env.local`:
```.env
DB_HOST=host.docker.internal
DB_USER=user_tpscore
DB_PASSWORD=pass_tpscore
DB_NAME=tpscore_data
```

Create and Run Next.js Container

3. Build the Docker image using the Dockerfile: `docker build -t tpscore-web-client .`
4. Run a container with the Next.js **exposing 3000 port**: `docker run --name tpscore-web-client -p 3000:3000 -d tpscore-web-client`

<hr>

Then create a network and add containers to it.

1. Create a Docker network: `docker network create net_tpscore`
2. Connect the 'db_mysql' container: `docker network connect net_tpscore db_mysql`
3. Connect the 'airflow_scheduler' container: `docker network connect net_tpscore airflow_scheduler`
3. Connect the 'tpscore-web-client' container: `docker network connect net_tpscore tpscore-web-client`

## Usage

**Access the Airflow GUI to run DAG:**

1. Go to http://localhost:8080/
2. Log in using the credentials (airflow, airflow)
   ![Airflow Login](https://raw.githubusercontent.com/BCS-Labs/tpscore-etl-system/main/readme_images/airflow_login.png)
3. Find the `get_data_tpscore` DAG and activate it by moving toggle to the right
   ![Run DAG](https://raw.githubusercontent.com/BCS-Labs/tpscore-etl-system/main/readme_images/run_dag.png)
4. Click on the DAG to verify successful execution (squares will be dark green, indicating error-free execution).
   ![DAG Run Success](https://raw.githubusercontent.com/BCS-Labs/tpscore-etl-system/main/readme_images/dag_run_success.png)

**Access the TPScore UI**

1. Go to http://localhost:3000/ and verify all parachains are there.

![TPScore UI](/docs_images/tpscore_ui.png)

## How to run project for development

1. Install dependencies
```bash
yarn install
```
2. Add database credentials inside `.env.local`.
```
DB_HOST=db_host
DB_USER=db_admin
DB_PASSWORD=db_admin_password
DB_NAME=db_name
```
3. Run project
```bash
yarn dev
```

## Lint the project

```bash
yarn lint
```

## Run all unit tests

```bash
yarn test
```

## Check test coverage

```bash
yarn coverage
```

## Build the project for production

```bash
yarn build
```

## Run the project in production mode

```bash
yarn start
```

## License

This project is licensed under GPLv3. For more details, refer to the [license document](https://github.com/BCS-Labs/tpscore-etl-system/blob/main/LICENSE).