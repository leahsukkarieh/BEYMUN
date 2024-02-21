const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'LeahKS-21',
    database: 'mun_db'
});

function initializeDatabase() {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to MySQL database: ', err);
            return;
        }
        console.log('Connected to MySQL database');

        createTables(connection);
    });
}

//0: false, 1: true
function createTables(connection) {
    const createTableDelegation = `
        CREATE TABLE IF NOT EXISTS delegation (
            id INT AUTO_INCREMENT PRIMARY KEY,
            number_delegates INT NOT NULL,
            f_name VARCHAR(255) NOT NULL,
            m_name VARCHAR(255) NOT NULL,
            l_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(255) NOT NULL
        )
    `;

    connection.query(createTableDelegation, (err) => {
        if (err) {
            console.error('Error creating Delegation table: ', err);
            connection.release(); 
            return;
        }
        console.log('Delegation table created successfully');
    });

    const createTableDelegate = `
        CREATE TABLE IF NOT EXISTS delegate (
            id INT AUTO_INCREMENT PRIMARY KEY,
            f_name VARCHAR(255) NOT NULL,
            m_name VARCHAR(255) NOT NULL,
            l_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            birthday VARCHAR(255) NOT NULL,
            student_type VARCHAR(255) NOT NULL,
            school_name VARCHAR(255),
            university_name VARCHAR(255),
            first_choice VARCHAR(255) NOT NULL,
            second_choice VARCHAR(255) NOT NULL,
            scholarship TINYINT(1) NOT NULL DEFAULT 0,
            participation TINYINT(1) DEFAULT 0,
            question_one TEXT,
            question_two TEXT,
            question_three TEXT,
            additional_info TEXT,
            individual_delegate TINYINT(1) NOT NULL DEFAULT 0,
            delegation_id INT
        )
    `;

    connection.query(createTableDelegate, (err) => {
        if (err) {
            console.error('Error creating Delegate table: ', err);
            connection.release();
            return;
        }
        console.log('Delegate table created successfully');
    });
    
}

const query = (sql, values) => {
    return new Promise((resolve, reject) => {
      pool.query(sql, values, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };

 module.exports = {
    initializeDatabase, 
    query
 };