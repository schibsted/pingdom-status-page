import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('pingdom-status-page.db');

export default db;
