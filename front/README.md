# Factoria-F5-crm

This application aims to help the F5 PR team to streamline the process of recruitment and selection of applicants; and to facilitate the monitoring of the selected coders during their training.

This is the root repository of the project developed by two teams of female developers as the final project of the FEM Coders North P2 bootcamp. It is also mandatory to clone the two complementary repositories to this one in order to access all the information they contain and link together:

[Factoria-F5-captacion](https://github.com/anaencinasd/factoria-F5-captacion) |
[Factoria-F5-seguimiento](https://github.com/Andre-889/factoria_F5_seguimiento)

## Technologies Used

- Composer.
- PHP.
- Laravel.
- MySQL.
- React.
- Tailwind.
- Axios.
- React ChartJs.

## Getting Started

To clone and set up this repository, follow these steps:

Clone the repository:


1. **Clone the Repository:**

```bash
git clone https://github.com/RocioAlonsoDev/factoria-f5-crm
cd factoria-f5-crm
```
2. **Move to Backend directory:**

```bash
cd back
```

3. **Install Dependencies:**

Run the following command to install all the required dependencies for the project:

```bash
composer install
```
4.**Database Setup:**

Create a database in MySQL and configure the .env file with your database credentials:

env
```bash
DB_CONNECTION=mysql
DB_HOST=your_database_host
DB_PORT=your_database_port
DB_DATABASE=factoria_f5_crm
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
```

5.**In terminal enter the following command and the API Key will be automatically added to your .env file.**

```bash
php artisan key:generate
```

6.**Then run the migrations to set up the database schema:**

```bash
php artisan migrate --seed
```
7.**Start the Development Server:**

Use the following command to start the Laravel development server:

```bash
php artisan serve —- port=8002
```
The backend will be accessible at http://localhost:8002.

8. **Move to Frontend directory:**

```bash
cd ..
cd front
```

9. **Install Dependencies:**

Run the following command to install all the required dependencies for the project:

```bash
npm install
```

## Developers


|[<img src="https://avatars.githubusercontent.com/u/67557714?v=4" width=115><br><sub>Yolanda Zahonero Alfaro</sub>](https://github.com/yzadeveloper)| [<img src="https://avatars.githubusercontent.com/u/132447141?v=4" width=115><br><sub>Soledad Grobas</sub>](https://github.com/SoleGrobas)|[<img src="https://avatars.githubusercontent.com/u/132446921?v=4" width=115><br><sub>Ana Encinas</sub>](https://github.com/anaencinasd) | [<img src="https://avatars.githubusercontent.com/AmaiaAbaroa" width=115><br><sub>Amaia Abaroa</sub>](https://github.com/AmaiaAbaroa) | [<img src="https://avatars.githubusercontent.com/u/132386229?v=4" width=115><br><sub>Liliana Gutiérrez Fernández</sub>](https://github.com/LilinaG) 
| :---: | :---: | :---: | :---: | :---: |
|[<img src="https://avatars.githubusercontent.com/u/130401333?v=4" width=115><br><sub>Rocío Alonso</sub>](https://github.com/RocioAlonsoDev)|[<img src="https://avatars.githubusercontent.com/u/108815965?v=4" width=115><br><sub>Andreina Fernandez</sub>](https://github.com/Andre-889/)|[<img src="https://avatars.githubusercontent.com/u/130498392?v=4" width=115><br><sub>Beatriz Cano</sub>](https://github.com/BeatrizCano) | [<img src="https://avatars.githubusercontent.com/u/110122046?v=4" width=115><br><sub>Raissa Ninnetthe de León Escobar</sub>](https://github.com/Ninetthe) | [<img src="https://avatars.githubusercontent.com/u/132447061?v=4" width=115><br><sub>Mireia Vázquez</sub>](https://github.com/mireiavh)| :---: |:---: |:---: |:---: |:---: |

#