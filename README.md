# nodegres
Test Node.js application with Postgres

## Prerequisites
You need to install:
- [Nodejs](https://nodejs.org/en/download/);
- [Postgres](https://www.postgresql.org/download/).

## Application installation

Clone the repository and download dependencies:
```
git clone https://github.com/sg2nr/nodegres.git
npm i
```

## Database installation
After installing Postgres in your machine create a `.env` file to store connection information to your database.
Your `.env` file must specify the following variables:
``` 
DB_USER
DB_PASSWORD
DB_HOST
DB_PORT
DB_DATABASE

```


Setup the database schema:
```
psql -U DB_USER -d DB_DATABASE -a -f db/schema.sql
```

## Application execution
Run the application:
```
node index.js
```

Go to *localhost:3000/hello*.
