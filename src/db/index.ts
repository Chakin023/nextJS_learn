import dotenv from 'dotenv'

import mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';

dotenv.config()

//สร้าง connection
const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  keepAliveInitialDelay: 10000,
  enableKeepAlive: true
});

//ให้ใช้ connection ครั้งเดียว
const dbSingleton = async() => {
  return drizzle({ client: await connection })
}

declare const globalThis: {
  dbGlobal: ReturnType<typeof dbSingleton>;
} & typeof global;

//ถ้ามี connection อยู่แล้วให้ใช้ Global ตลอดไป
//ถ้าไม่มีให้ new connection จาก dbSingleton ขึ้นมา
const conn = globalThis.dbGlobal ?? dbSingleton()
export default conn;
if(process.env.NODE_ENV !== 'production') globalThis.dbGlobal = conn
