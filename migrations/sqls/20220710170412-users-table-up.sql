CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE store_users (id uuid DEFAULT uuid_generate_v4() PRIMARY KEY, username VARCHAR(20) NOT NULL,f_name VARCHAR(50) NOT NULL,l_name VARCHAR(50) NOT NULL,u_password VARCHAR(200) NOT NULL);

