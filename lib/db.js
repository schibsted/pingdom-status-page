import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('vgstatus.db');

export default db;
