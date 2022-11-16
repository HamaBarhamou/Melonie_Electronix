# Melonie-Electronix
The objective of this project (Meloni Electronix) is to develop an e-commerce app for electronics business.

![CONTRIBUTING.md](/CONTRIBUTING.md)



create a databases

```
cat setup_mysql_dev.sql | mysql -hlocalhost -uroot -p
```


Drop all tables

```
cat drop_all_tables_of_current_db.sql | mysql -uroot -p ME_db
```

Create a environement virtual
```
cd Melanie_Electronix
python3 -m venv env
source env/bin/activate
```
install the dependence
```
pip install -r requirements.txt
```

start of the project

```
./start
curl http://127.0.0.1:5000/
http://127.0.0.1:5000/presentation
http://127.0.0.1:5000/api/v1/produit
```
to work with the console, you must pass the console parameter to the scrpit
```
./start console
```

to disable the virtual environment 
```
deactivate
```