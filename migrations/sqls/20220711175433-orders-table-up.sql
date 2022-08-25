CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE store_orders (order_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,user_idF uuid REFERENCES store_users(id),status VARCHAR(8) NOT NULL);