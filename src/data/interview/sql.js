/**
 * SQL / DBMS interview bank.
 * Original content written for MyDSA. Rendered by InterviewBankView.
 */

export const sqlBank = {
  id: 'sql',
  slug: 'sql',
  eyebrow: 'Interview prep',
  title: 'SQL & DBMS Interview',
  short: 'SQL',
  icon: 'layers',
  accent: 'text-accent',
  description:
    'The database questions asked in almost every SDE interview — joins, normalization, indexes, transactions, ACID, and the tricky query-writing rounds — each with a clear, interview-ready explanation.',
  tagline: 'From SELECT to isolation levels — everything you need for the DB round.',
  source: { label: 'InterviewBit', href: 'https://www.interviewbit.com/sql-interview-questions/' },
  pdf: { label: 'InterviewBit PDF', href: '/interview/sql-interviewbit.pdf' },
  sections: [
    {
      id: 'basics',
      title: 'Core concepts & terminology',
      icon: 'book',
      blocks: [
        { type: 'p', text: 'Warm-up questions that establish whether you understand the relational model. Get these crisp and fast.' },
        {
          type: 'table',
          head: ['Term', 'Meaning'],
          rows: [
            ['DBMS', 'Software to store, retrieve and manage data (e.g. MySQL, PostgreSQL).'],
            ['RDBMS', 'DBMS based on the relational model — data in tables with relationships.'],
            ['Tuple / Row', 'A single record in a table.'],
            ['Attribute / Column', 'A named field of a table.'],
            ['Degree', 'Number of columns in a relation.'],
            ['Cardinality', 'Number of rows in a relation.'],
            ['Schema', 'The structure/blueprint of the database (tables, columns, types).'],
          ],
        },
        { type: 'h', text: 'DDL vs DML vs DCL vs TCL' },
        {
          type: 'table',
          head: ['Category', 'Purpose', 'Commands'],
          rows: [
            ['DDL', 'Define structure', 'CREATE, ALTER, DROP, TRUNCATE'],
            ['DML', 'Manipulate data', 'SELECT, INSERT, UPDATE, DELETE'],
            ['DCL', 'Control access', 'GRANT, REVOKE'],
            ['TCL', 'Manage transactions', 'COMMIT, ROLLBACK, SAVEPOINT'],
          ],
        },
        {
          type: 'qa',
          items: [
            { q: 'DELETE vs TRUNCATE vs DROP?', a: 'DELETE removes rows (DML, can filter with WHERE, can rollback). TRUNCATE removes all rows fast (DDL, no WHERE, resets identity, usually cannot rollback). DROP removes the whole table structure.' },
            { q: 'CHAR vs VARCHAR?', a: 'CHAR is fixed-length (padded); VARCHAR is variable-length (stores only what\'s needed). Use CHAR for fixed codes, VARCHAR for names/text.' },
          ],
        },
      ],
    },
    {
      id: 'keys',
      title: 'Keys & constraints',
      icon: 'lock',
      blocks: [
        {
          type: 'table',
          head: ['Key', 'What it does'],
          rows: [
            ['Primary Key', 'Uniquely identifies a row. NOT NULL + UNIQUE. One per table.'],
            ['Candidate Key', 'Any column(s) that could serve as a primary key.'],
            ['Super Key', 'Any set of columns that uniquely identifies a row (superset of candidate key).'],
            ['Foreign Key', 'References the primary key of another table — enforces referential integrity.'],
            ['Composite Key', 'A primary key made of two or more columns.'],
            ['Unique Key', 'Ensures uniqueness but allows one NULL (unlike primary key).'],
          ],
        },
        { type: 'answer', text: 'A primary key uniquely identifies each row and cannot be null. A foreign key is a column that references the primary key of another table to maintain referential integrity between them.' },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'Can a table have multiple primary keys?', a: 'No — only one primary key, but it can be composite (multiple columns). A table can have multiple unique keys though.' },
            { level: 'Medium', q: 'What is referential integrity?', a: 'A rule that a foreign key value must either match an existing primary key in the referenced table or be NULL — preventing orphan records.' },
            { level: 'Hard', q: 'What happens to child rows on ON DELETE CASCADE vs ON DELETE SET NULL?', a: 'CASCADE deletes the child rows too; SET NULL sets the foreign key column to NULL. RESTRICT/NO ACTION blocks the delete if children exist.' },
          ],
        },
      ],
    },
    {
      id: 'joins',
      title: 'Joins',
      icon: 'route',
      blocks: [
        { type: 'p', text: 'The single most-tested SQL topic. Know each join type and be able to draw the Venn diagram.' },
        {
          type: 'table',
          head: ['Join', 'Returns'],
          rows: [
            ['INNER JOIN', 'Only rows matching in both tables.'],
            ['LEFT JOIN', 'All rows from left + matched from right (NULLs where no match).'],
            ['RIGHT JOIN', 'All rows from right + matched from left.'],
            ['FULL OUTER JOIN', 'All rows from both, matched where possible (NULLs otherwise).'],
            ['CROSS JOIN', 'Cartesian product — every row of A with every row of B.'],
            ['SELF JOIN', 'A table joined to itself (e.g. employee → manager).'],
          ],
        },
        {
          type: 'code',
          code: `-- Employees with their manager's name (self join)
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;`,
        },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'INNER JOIN vs LEFT JOIN?', a: 'INNER returns only matching rows; LEFT returns all left rows plus matches, filling NULLs where the right side has none.' },
            { level: 'Medium', q: 'Find rows in A that have no match in B.', a: 'LEFT JOIN B and filter WHERE B.key IS NULL — the classic "anti-join".' },
            { level: 'Hard', q: 'Difference between WHERE and ON in a LEFT JOIN?', a: 'ON filters before the join (preserving unmatched left rows as NULL); WHERE filters after, so a condition on the right table in WHERE effectively turns a LEFT JOIN into an INNER JOIN.' },
          ],
        },
      ],
    },
    {
      id: 'normalization',
      title: 'Normalization',
      icon: 'grid',
      blocks: [
        { type: 'p', text: 'Normalization organizes data to reduce redundancy and anomalies. Know 1NF–BCNF and, crucially, when to denormalize.' },
        {
          type: 'table',
          head: ['Form', 'Rule'],
          rows: [
            ['1NF', 'Atomic values, no repeating groups; each cell holds a single value.'],
            ['2NF', '1NF + no partial dependency (non-key attrs depend on the whole composite key).'],
            ['3NF', '2NF + no transitive dependency (non-key attrs depend only on the key).'],
            ['BCNF', 'Stronger 3NF — every determinant is a candidate key.'],
          ],
        },
        { type: 'answer', text: 'Normalization is the process of organizing tables to minimize redundancy and avoid update, insert, and delete anomalies. We usually normalize up to 3NF, and denormalize selectively for read performance.' },
        {
          type: 'qa',
          items: [
            { q: 'What is denormalization and why do it?', a: 'Deliberately adding redundancy (e.g. storing a computed total) to speed up reads and avoid expensive joins — a trade-off used in read-heavy/analytics systems.' },
            { q: 'What are anomalies?', a: 'Insert anomaly (can\'t add data without unrelated data), update anomaly (must change many rows), delete anomaly (deleting one fact loses another).' },
          ],
        },
      ],
    },
    {
      id: 'acid',
      title: 'Transactions & ACID',
      icon: 'bolt',
      blocks: [
        { type: 'p', text: 'A transaction is a group of operations executed as a single unit — all succeed or all fail.' },
        {
          type: 'table',
          head: ['Property', 'Meaning'],
          rows: [
            ['Atomicity', 'All operations complete or none do (rollback on failure).'],
            ['Consistency', 'The DB moves from one valid state to another (constraints hold).'],
            ['Isolation', 'Concurrent transactions don\'t interfere with each other.'],
            ['Durability', 'Once committed, changes survive crashes/power loss.'],
          ],
        },
        { type: 'h', text: 'Isolation levels (weakest → strongest)' },
        {
          type: 'table',
          head: ['Level', 'Prevents'],
          rows: [
            ['Read Uncommitted', 'Nothing — allows dirty reads.'],
            ['Read Committed', 'Dirty reads.'],
            ['Repeatable Read', 'Dirty + non-repeatable reads.'],
            ['Serializable', 'Dirty + non-repeatable + phantom reads (fully isolated).'],
          ],
        },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'What is a transaction?', a: 'A single logical unit of work made of one or more SQL statements that either all commit or all roll back.' },
            { level: 'Medium', q: 'Dirty read vs non-repeatable read vs phantom read?', a: 'Dirty read: reading uncommitted data. Non-repeatable: same row returns different values within a transaction. Phantom: same query returns different sets of rows because new rows were inserted.' },
            { level: 'Hard', q: 'What is a deadlock and how do you handle it?', a: 'Two transactions each hold a lock the other needs, waiting forever. DBs detect it and abort one victim. Prevent by acquiring locks in a consistent order, keeping transactions short, and using lower isolation where safe.' },
          ],
        },
      ],
    },
    {
      id: 'indexes',
      title: 'Indexes & performance',
      icon: 'gauge',
      blocks: [
        { type: 'p', text: 'An index is a data structure (usually a B-tree) that speeds up lookups at the cost of extra storage and slower writes.' },
        { type: 'answer', text: 'An index is like a book\'s index — instead of scanning every row, the DB uses a B-tree to jump straight to matching rows. It speeds up SELECT/WHERE/JOIN but slows INSERT/UPDATE because the index must be maintained.' },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'Clustered vs non-clustered index?', a: 'Clustered defines the physical order of rows (one per table, usually the primary key). Non-clustered is a separate structure pointing to rows (many allowed).' },
            { level: 'Medium', q: 'When does an index NOT help?', a: 'On low-cardinality columns (e.g. boolean), on small tables, when the query returns most rows, or when a function wraps the column (WHERE YEAR(date)=... prevents index use).' },
            { level: 'Hard', q: 'What is a covering index?', a: 'An index that contains all columns a query needs, so the DB answers from the index alone without touching the table ("index-only scan").' },
            { level: 'Hardest', q: 'How would you debug a slow query?', a: 'Run EXPLAIN/EXPLAIN ANALYZE to see the plan, look for full table scans, add/adjust indexes, avoid SELECT *, reduce joins, check statistics, and consider query rewriting or caching.' },
          ],
        },
      ],
    },
    {
      id: 'queries',
      title: 'Query-writing round (must-solve)',
      icon: 'code',
      blocks: [
        { type: 'p', text: 'Interviewers give a schema and ask you to write queries live. Master these patterns — they cover 80% of what\'s asked.' },
        { type: 'h', text: 'Nth highest salary' },
        {
          type: 'code',
          code: `-- 2nd highest salary
SELECT MAX(salary) FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- Nth highest (generic, using DENSE_RANK)
SELECT salary FROM (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) rnk
  FROM employees
) t WHERE rnk = N;`,
        },
        { type: 'h', text: 'Find & delete duplicates' },
        {
          type: 'code',
          code: `-- Find duplicate emails
SELECT email, COUNT(*) FROM users
GROUP BY email HAVING COUNT(*) > 1;

-- Departments with more than 5 employees
SELECT dept_id, COUNT(*) AS cnt
FROM employees
GROUP BY dept_id
HAVING COUNT(*) > 5;`,
        },
        {
          type: 'qa',
          items: [
            { q: 'WHERE vs HAVING?', a: 'WHERE filters individual rows before grouping; HAVING filters groups after GROUP BY (and can use aggregates like COUNT).' },
            { q: 'What is the order of SQL execution?', a: 'FROM → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT. (Not the written order!)' },
            { q: 'UNION vs UNION ALL?', a: 'UNION removes duplicates (extra sort cost); UNION ALL keeps everything and is faster.' },
            { q: 'What are window functions?', a: 'Functions like ROW_NUMBER(), RANK(), LAG() that compute across a set of rows related to the current row, without collapsing them like GROUP BY does.' },
          ],
        },
        { type: 'tip', text: 'When asked to write a query, say your plan out loud first ("I\'ll group by department, then filter groups with HAVING"). Interviewers score your reasoning, not just the final query.' },
      ],
    },
    {
      id: 'views-proc',
      title: 'Views, procedures, functions & triggers',
      icon: 'layers',
      blocks: [
        {
          type: 'table',
          head: ['Object', 'What it is'],
          rows: [
            ['View', 'A virtual table defined by a stored query. Simplifies complex queries and adds a security layer.'],
            ['Stored Procedure', 'A precompiled set of SQL statements you call by name; can take parameters and modify data.'],
            ['Function (UDF)', 'Returns a single value or table; usable inside queries. Cannot change DB state (mostly).'],
            ['Trigger', 'Code that runs automatically on INSERT/UPDATE/DELETE events.'],
            ['Cursor', 'A pointer to iterate row-by-row over a result set (avoid when set-based SQL works).'],
          ],
        },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'What is a view and why use it?', a: 'A named virtual table from a stored SELECT. It simplifies complex joins, restricts column access for security, and presents data consistently without duplicating it.' },
            { level: 'Medium', q: 'Stored procedure vs function?', a: 'A procedure can perform actions (INSERT/UPDATE), may return zero or many values, and is called with CALL/EXEC. A function returns one value (or table) and can be used inside a SELECT. Functions generally can\'t modify data.' },
            { level: 'Medium', q: 'Can you update data through a view?', a: 'Sometimes — a simple view on one table without aggregates/DISTINCT/GROUP BY is updatable. Complex views (joins, aggregates) are read-only; use INSTEAD OF triggers if you must.' },
            { level: 'Hard', q: 'What is a materialized view?', a: 'Unlike a normal view, it physically stores the query result on disk and must be refreshed. It trades storage + staleness for much faster reads on expensive aggregations.' },
            { level: 'Hard', q: 'When would a trigger be a bad idea?', a: 'Triggers hide logic (hard to debug), can cascade unexpectedly, and hurt bulk-load performance. Prefer explicit application logic or constraints when possible.' },
          ],
        },
      ],
    },
    {
      id: 'set-ops',
      title: 'Set operators, subqueries & aliases',
      icon: 'route',
      blocks: [
        {
          type: 'table',
          head: ['Operator', 'Returns'],
          rows: [
            ['UNION', 'Rows from both queries, duplicates removed.'],
            ['UNION ALL', 'Rows from both queries, duplicates kept (faster).'],
            ['INTERSECT', 'Only rows present in both queries.'],
            ['EXCEPT / MINUS', 'Rows in the first query not in the second.'],
          ],
        },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'What is a subquery and what types exist?', a: 'A query nested inside another. Types: scalar (returns one value), row, table, and correlated (references the outer query and runs per outer row).' },
            { level: 'Medium', q: 'Correlated vs non-correlated subquery?', a: 'A non-correlated subquery runs once, independently. A correlated subquery references a column from the outer query and re-executes for each outer row — often slower.' },
            { level: 'Medium', q: 'What is an alias and why use it?', a: 'A temporary name for a table or column (AS). It shortens references, is required for self-joins, and renames output columns for readability.' },
            { level: 'Hard', q: 'IN vs EXISTS — which is faster?', a: 'EXISTS often wins for correlated checks on large subquery results (stops at first match); IN can be faster for small, static lists. Modern optimisers frequently rewrite one into the other.' },
          ],
        },
      ],
    },
    {
      id: 'concepts',
      title: 'More concepts & rapid fire',
      icon: 'bolt',
      blocks: [
        {
          type: 'table',
          head: ['Term', 'Meaning'],
          rows: [
            ['OLTP', 'Online Transaction Processing — many small, fast read/write transactions (e.g. banking).'],
            ['OLAP', 'Online Analytical Processing — complex read-heavy queries over large data (analytics/BI).'],
            ['Data integrity', 'Accuracy & consistency of data, enforced via constraints (entity, referential, domain).'],
            ['Collation', 'Rules for sorting/comparing text (case- and accent-sensitivity).'],
            ['ETL', 'Extract, Transform, Load — moving data into a warehouse.'],
          ],
        },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'SQL vs MySQL?', a: 'SQL is the query language; MySQL is a specific RDBMS (software) that uses SQL. Others include PostgreSQL, Oracle, SQL Server.' },
            { level: 'Easy', q: 'What is pattern matching in SQL?', a: 'Using LIKE with wildcards: % matches any sequence of characters, _ matches a single character. e.g. WHERE name LIKE \'A%\'.' },
            { level: 'Easy', q: 'What are constraints?', a: 'Rules on columns: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT — they enforce data integrity.' },
            { level: 'Medium', q: 'CHAR vs VARCHAR vs TEXT?', a: 'CHAR is fixed-length (padded), VARCHAR is variable-length up to a limit, TEXT stores large variable text (often off-row). Use VARCHAR for most strings.' },
            { level: 'Medium', q: 'What is a composite / candidate / super key again?', a: 'Super key: any uniquely-identifying column set. Candidate key: a minimal super key. Primary key: the chosen candidate key. Composite key: a key spanning multiple columns.' },
            { level: 'Hard', q: 'How do you paginate large result sets efficiently?', a: 'Prefer keyset (seek) pagination — WHERE id > :lastId ORDER BY id LIMIT n — over OFFSET, which gets slower as the offset grows because the DB still scans skipped rows.' },
            { level: 'Hardest', q: 'How would you design for both OLTP and analytics?', a: 'Keep a normalized OLTP database for transactions, then ETL/stream into a separate denormalized warehouse (star schema) for OLAP — so heavy analytics never slow down the transactional system.' },
          ],
        },
      ],
    },
    {
      id: "ib-sql",
      title: "InterviewBit — SQL questions",
      icon: "book",
      blocks: [
        { type: 'p', text: 'Questions curated from InterviewBit (interviewbit.com), with concise, interview-ready answers.' },
        {
          type: 'qa',
          items: [
            { q: "What is Pattern Matching in SQL?", a: "SQL pattern matching provides for pattern search in data if you have no clue as to what that word should be. This kind of SQL query uses wildcards to match a string pattern, rather than writing the exact word. The LIKE operator is used in conjunction with SQL Wildcards to fetch the required information. - Using the % wildcard to perform a simple search The % wildcard matches zero or more characters of any type and can be used to define wildcards both before and after the pattern. Search a student in your database with first name beginning with the letter K: SELECT * FROM students WHERE first_name LIKE 'K%' - Omitting the patterns using the NOT keyword Use the NOT keyword to select records that don't match the pattern. This query returns…" },
            { q: "How to create empty tables with the same structure as another table?", a: "Creating empty tables with the same structure can be done smartly by fetching the records of one table into a new table using the INTO operator while fixing a WHERE clause to be false for all records. Hence, SQL prepares the new table with a duplicate structure to accept the fetched records but since no records get fetched due to the WHERE clause in action, nothing is inserted into the new table. SELECT * INTO Students_copy FROM Students WHERE 1 = 2;" },
            { q: "What is a Recursive Stored Procedure?", a: "A stored procedure that calls itself until a boundary condition is reached, is called a recursive stored procedure. This recursive function helps the programmers to deploy the same set of code several times as and when required. Some SQL programming languages limit the recursion depth to prevent an infinite loop of procedure calls from causing a stack overflow, which slows down the system and may lead to system crashes. DELIMITER $$ /* Set a new delimiter => $$ */ CREATE PROCEDURE calctotal( /* Create the procedure */ IN number INT, /* Set Input and Ouput variables */ OUT total INT ) BEGIN DECLARE score INT DEFAULT NULL; /* Set the default value => \"score\" */ SELECT awards FROM achievements /* Update \"score\" via SELECT query */ WHERE id =…" },
            { q: "What is a Stored Procedure?", a: "A stored procedure is a subroutine available to applications that access a relational database management system (RDBMS). Such procedures are stored in the database data dictionary. The sole disadvantage of stored procedure is that it can be executed nowhere except in the database and occupies more memory in the database server. It also provides a sense of security and functionality as users who can't access the data directly can be granted access via stored procedures. DELIMITER $$ CREATE PROCEDURE FetchAllStudents() BEGIN SELECT * FROM myDB.students; END $$ DELIMITER ;" },
            { q: "What is Collation? What are the different types of Collation Sensitivity?", a: "Collation refers to a set of rules that determine how data is sorted and compared. Rules defining the correct character sequence are used to sort the character data. It incorporates options for specifying case sensitivity, accent marks, kana character types, and character width. Below are the different types of collation sensitivity: - Case sensitivity: A and a are treated differently. - Accent sensitivity: a and á are treated differently. - Kana sensitivity: Japanese kana characters Hiragana and Katakana are treated differently. - Width sensitivity: Same character represented in single-byte (half-width) and double-byte (full-width) are treated differently." },
            { q: "What are the differences between OLTP and OLAP?", a: "OLTP stands for Online Transaction Processing, is a class of software applications capable of supporting transaction-oriented programs. An important attribute of an OLTP system is its ability to maintain concurrency. OLTP systems often follow a decentralized architecture to avoid single points of failure. These systems are generally designed for a large audience of end-users who conduct short transactions. Queries involved in such databases are generally simple, need fast response times, and return relatively few records. A number of transactions per second acts as an effective measure for such systems. OLAP stands for Online Analytical Processing, a class of software programs that are characterized by the relatively low frequency of…" },
            { q: "What is OLTP?", a: "OLTP stands for Online Transaction Processing, is a class of software applications capable of supporting transaction-oriented programs. An essential attribute of an OLTP system is its ability to maintain concurrency. To avoid single points of failure, OLTP systems are often decentralized. These systems are usually designed for a large number of users who conduct short transactions. Database queries are usually simple, require sub-second response times, and return relatively few records. Here is an insight into the working of an OLTP system [ Note - The figure is not important for interviews ] - Advance your career with Mock Assessments Refine your coding skills with Mock Assessments Real-world coding challenges for top company interviews…" },
            { q: "What is User-defined function? What are its various types?", a: "The user-defined functions in SQL are like functions in any other programming language that accept parameters, perform complex calculations, and return a value. They are written to use the logic repetitively whenever required. There are two types of SQL user-defined functions: - Scalar Function: As explained earlier, user-defined scalar functions return a single scalar value. - Table-Valued Functions: User-defined table-valued functions return a table as output. - - Inline: returns a table data type based on a single SELECT statement. - Multi-statement: returns a tabular result-set but, unlike inline, multiple SELECT statements can be used inside the function body." },
            { q: "What is a UNIQUE constraint?", a: "A UNIQUE constraint ensures that all values in a column are different. This provides uniqueness for the column(s) and helps identify each row uniquely. Unlike primary key, there can be multiple unique constraints defined per table. The code syntax for UNIQUE is quite similar to that of PRIMARY KEY and can be used interchangeably. CREATE TABLE Students ( /* Create table with a single field as unique */ ID INT NOT NULL UNIQUE Name VARCHAR(255) ); CREATE TABLE Students ( /* Create table with multiple fields as unique */ ID INT NOT NULL LastName VARCHAR(255) FirstName VARCHAR(255) NOT NULL CONSTRAINT PK_Student UNIQUE (ID, FirstName) ); ALTER TABLE Students /* Set a column as unique */ ADD UNIQUE (ID); ALTER TABLE Students /* Set multiple…" },
            { q: "What is a Query?", a: "A query is a request for data or information from a database table or combination of tables. A database query can be either a select query or an action query. SELECT fname, lname /* select query */ FROM myDb.students WHERE student_id = 1; UPDATE myDB.students /* action query */ SET fname = 'Captain', lname = 'America' WHERE student_id = 1;" },
            { q: "What is Data Integrity?", a: "Data Integrity is the assurance of accuracy and consistency of data over its entire life-cycle and is a critical aspect of the design, implementation, and usage of any system which stores, processes, or retrieves data. It also defines integrity constraints to enforce business rules on the data when it is entered into an application or a database." },
            { q: "What is the difference between Clustered and Non-clustered index?", a: "As explained above, the differences can be broken down into three small factors - - Clustered index modifies the way records are stored in a database based on the indexed column. A non-clustered index creates a separate entity within the table which references the original table. - Clustered index is used for easy and speedy retrieval of data from the database, whereas, fetching records from the non-clustered index is relatively slower. - In SQL, a table can have a single clustered index whereas it can have multiple non-clustered indexes." },
            { q: "What is an Index? Explain its different types.", a: "A database index is a data structure that provides a quick lookup of data in a column or columns of a table. It enhances the speed of operations accessing data from a database table at the cost of additional writes and memory to maintain the index data structure. CREATE INDEX index_name /* Create Index */ ON table_name (column_1, column_2); DROP INDEX index_name; /* Drop Index */ There are different types of indexes that can be created for different purposes: - Unique and Non-Unique Index: Unique indexes are indexes that help maintain data integrity by ensuring that no two rows of data in a table have identical key values. Once a unique index has been defined for a table, uniqueness is enforced whenever keys are added or changed within the…" },
            { q: "What is a Cross-Join?", a: "Cross join can be defined as a cartesian product of the two tables included in the join. The table after join contains the same number of rows as in the cross-product of the number of rows in the two tables. If a WHERE clause is used in cross join then the query will work like an INNER JOIN. SELECT stu.name, sub.subject FROM students AS stu CROSS JOIN subjects AS sub; Write a SQL statement to CROSS JOIN 'table_1' with 'table_2' and fetch 'col_1' from table_1 & 'col_2' from table_2 respectively. Do not use alias. Check Write a SQL statement to perform SELF JOIN for 'Table_X' with alias 'Table_1' and 'Table_2', on columns 'Col_1' and 'Col_2' respectively. Check" },
            { q: "What is a Self-Join?", a: "A self JOIN is a case of regular join where a table is joined to itself based on some relation between its own column(s). Self-join uses the INNER JOIN or LEFT JOIN clause and a table alias is used to assign different names to the table within the query. SELECT A.emp_id AS \"Emp_ID\",A.emp_name AS \"Employee\", B.emp_id AS \"Sup_ID\",B.emp_name AS \"Supervisor\" FROM employee A, employee B WHERE A.emp_sup = B.emp_id;" },
            { q: "What is a Join? List its different types.", a: "The SQL Join clause is used to combine records (rows) from two or more tables in a SQL database based on a related column between the two. There are four different types of JOINs in SQL: - (INNER) JOIN: Retrieves records that have matching values in both tables involved in the join. This is the widely used join for queries. SELECT * FROM Table_A JOIN Table_B; SELECT * FROM Table_A INNER JOIN Table_B; - LEFT (OUTER) JOIN: Retrieves all the records/rows from the left and the matched records/rows from the right table. SELECT * FROM Table_A A LEFT JOIN Table_B B ON A.col = B.col; - RIGHT (OUTER) JOIN: Retrieves all the records/rows from the right and the matched records/rows from the left table. SELECT * FROM Table_A A RIGHT JOIN Table_B B ON…" },
            { q: "What is a Foreign Key?", a: "A FOREIGN KEY comprises of single or collection of fields in a table that essentially refers to the PRIMARY KEY in another table. Foreign key constraint ensures referential integrity in the relation between two tables.The table with the foreign key constraint is labeled as the child table, and the table containing the candidate key is labeled as the referenced or parent table. CREATE TABLE Students ( /* Create table with foreign key - Way 1 */ ID INT NOT NULL Name VARCHAR(255) LibraryID INT PRIMARY KEY (ID) FOREIGN KEY (Library_ID) REFERENCES Library(LibraryID) ); CREATE TABLE Students ( /* Create table with foreign key - Way 2 */ ID INT NOT NULL PRIMARY KEY Name VARCHAR(255) LibraryID INT FOREIGN KEY (Library_ID) REFERENCES…" },
            { q: "What is a Subquery? What are its types?", a: "A subquery is a query within another query, also known as a nested query or inner query. It is used to restrict or enhance the data to be queried by the main query, thus restricting or enhancing the output of the main query respectively. For example, here we fetch the contact information for students who have enrolled for the maths subject: SELECT name, email, mob, address FROM myDb.contacts WHERE roll_no IN ( SELECT roll_no FROM myDb.students WHERE subject = 'Maths'); There are two types of subquery - Correlated and Non-Correlated. - A correlated subquery cannot be considered as an independent query, but it can refer to the column in a table listed in the FROM of the main query. - A non-correlated subquery can be considered as an…" },
            { q: "What is a Primary Key?", a: "The PRIMARY KEY constraint uniquely identifies each row in a table. It must contain UNIQUE values and has an implicit NOT NULL constraint.A table in SQL is strictly restricted to have one and only one primary key, which is comprised of single or multiple fields (columns). CREATE TABLE Students ( /* Create table with a single field as primary key */ ID INT NOT NULL Name VARCHAR(255) PRIMARY KEY (ID) ); CREATE TABLE Students ( /* Create table with multiple fields as primary key */ ID INT NOT NULL LastName VARCHAR(255) FirstName VARCHAR(255) NOT NULL, CONSTRAINT PK_Student PRIMARY KEY (ID, FirstName) ); ALTER TABLE Students /* Set a column as primary key */ ADD PRIMARY KEY (ID); ALTER TABLE Students /* Set multiple columns as primary key */…" },
            { q: "What are Constraints in SQL?", a: "Constraints are used to specify the rules concerning data in the table. It can be applied for single or multiple fields in an SQL table during the creation of the table or after creating using the ALTER TABLE command. The constraints are: - NOT NULL - Restricts NULL value from being inserted into a column. - CHECK - Verifies that all values in a field satisfy a condition. - DEFAULT - Automatically assigns a default value if no value has been specified for the field. - UNIQUE - Ensures unique values to be inserted into the field. - INDEX - Indexes a field providing faster retrieval of records. - PRIMARY KEY - Uniquely identifies each record in a table. - FOREIGN KEY - Ensures referential integrity for a record in another table." },
            { q: "What are Tables and Fields?", a: "A table is an organized collection of data stored in the form of rows and columns. Columns can be categorized as vertical and rows as horizontal. The columns in a table are called fields while the rows can be referred to as records." },
            { q: "What is the difference between SQL and MySQL?", a: "SQL is a standard language for retrieving and manipulating structured databases. On the contrary, MySQL is a relational database management system, like SQL Server, Oracle or IBM DB2, that is used to manage SQL databases." },
            { q: "What is SQL?", a: "SQL stands for Structured Query Language. It is the standard language for relational database management systems. It is especially useful in handling organized data comprised of entities (variables) and relations between different entities of the data." },
            { q: "What is RDBMS? How is it different from DBMS?", a: "RDBMS stands for Relational Database Management System. The key difference here, compared to DBMS, is that RDBMS stores data in the form of a collection of tables, and relations can be defined between the common fields of these tables. Most modern database management systems like MySQL, Microsoft SQL Server, Oracle, IBM DB2, and Amazon Redshift are based on RDBMS." },
            { q: "What is DBMS?", a: "DBMS stands for Database Management System. DBMS is a system software responsible for the creation, retrieval, updation, and management of the database. It ensures that our data is consistent, organized, and is easily accessible by serving as an interface between the database and its end-users or application software." },
            { q: "What is Database?", a: "A database is an organized collection of data, stored and retrieved digitally from a remote or local computer system. Databases can be vast and complex, and such databases are developed using fixed design and modeling approaches." },
            { q: "What is the SELECT statement?", a: "SELECT operator in SQL is used to select data from a database. The data returned is stored in a result table, called the result-set. SELECT * FROM myDB.students;" },
            { q: "What are some common clauses used with SELECT query in SQL?", a: "Some common SQL clauses used in conjuction with a SELECT query are as follows: - WHERE clause in SQL is used to filter records that are necessary, based on specific conditions. - ORDER BY clause in SQL is used to sort the records based on some field(s) in ascending (ASC) or descending order (DESC). SELECT * FROM myDB.students WHERE graduation_year = 2019 ORDER BY studentID DESC; - GROUP BY clause in SQL is used to group records with identical data and can be used in conjunction with some aggregation functions to produce summarized results from the database. - HAVING clause in SQL is used to filter records in combination with the GROUP BY clause. It is different from WHERE, since the WHERE clause cannot filter aggregated records. SELECT…" },
            { q: "What are UNION, MINUS and INTERSECT commands?", a: "The UNION operator combines and returns the result-set retrieved by two or more SELECT statements.The MINUS operator in SQL is used to remove duplicates from the result-set obtained by the second SELECT query from the result-set obtained by the first SELECT query and then return the filtered results from the first.The INTERSECT clause in SQL combines the result-set fetched by the two SELECT statements where records from one match the other and then returns this intersection of result-sets. Certain conditions need to be met before executing either of the above statements in SQL - - Each SELECT statement within the clause must have the same number of columns - The columns must also have similar data types - The columns in each SELECT…" },
            { q: "What is Cursor? How to use a Cursor?", a: "A database cursor is a control structure that allows for the traversal of records in a database. Cursors, in addition, facilitates processing after traversal, such as retrieval, addition, and deletion of database records. They can be viewed as a pointer to one row in a set of rows. Working with SQL Cursor: 1. DECLARE a cursor after any variable declaration. The cursor declaration must always be associated with a SELECT Statement. 2. Open cursor to initialize the result set. The OPEN statement must be called before fetching rows from the result set. 3. FETCH statement to retrieve and move to the next row in the result set. 4. Call the CLOSE statement to deactivate the cursor. 5. Finally use the DEALLOCATE statement to delete the cursor…" },
            { q: "What are Entities and Relationships?", a: "Entity: An entity can be a real-world object, either tangible or intangible, that can be easily identifiable. For example, in a college database, students, professors, workers, departments, and projects can be referred to as entities. Each entity has some associated properties that provide it an identity. Relationships: Relations or links between entities that have something to do with each other. For example - The employee's table in a company's database can be associated with the salary table in the same database." },
            { q: "List the different types of relationships in SQL.", a: "- One-to-One - This can be defined as the relationship between two tables where each record in one table is associated with the maximum of one record in the other table. - One-to-Many & Many-to-One - This is the most commonly used relationship where a record in a table is associated with multiple records in the other table. - Many-to-Many - This is used in cases when multiple instances on both sides are needed for defining a relationship. - Self-Referencing Relationships - This is used when a table needs to define a relationship with itself." },
            { q: "What is an Alias in SQL?", a: "An alias is a feature of SQL that is supported by most, if not all, RDBMSs. It is a temporary name assigned to the table or table column for the purpose of a particular SQL query. In addition, aliasing can be employed as an obfuscation technique to secure the real names of database fields. A table alias is also called a correlation name. An alias is represented explicitly by the AS keyword but in some cases, the same can be performed without it as well. Nevertheless, using the AS keyword is always a good practice. SELECT A.emp_name AS \"Employee\" /* Alias using AS keyword */ B.emp_name AS \"Supervisor\" FROM employee A, employee B /* Alias without AS keyword */ WHERE A.emp_sup = B.emp_id; Write an SQL statement to select all from table…" },
            { q: "What is a View?", a: "A view in SQL is a virtual table based on the result-set of an SQL statement. A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database." },
            { q: "What is Normalization?", a: "Normalization represents the way of organizing structured data in the database efficiently. It includes the creation of tables, establishing relationships between them, and defining rules for those relationships. Inconsistency and redundancy can be kept in check based on these rules, hence, adding flexibility to the database." },
            { q: "What is Denormalization?", a: "Denormalization is the inverse process of normalization, where the normalized schema is converted into a schema that has redundant information. The performance is improved by using redundancy and keeping the redundant data consistent. The reason for performing denormalization is the overheads produced in the query processor by an over-normalized structure." },
            { q: "What are the various forms of Normalization?", a: "Normal Forms are used to eliminate or reduce redundancy in database tables. The different forms are as follows: - First Normal Form:A relation is in first normal form if every attribute in that relation is a single-valued attribute. If a relation contains a composite or multi-valued attribute, it violates the first normal form. Let's consider the following students table. Each student in the table, has a name, his/her address, and the books they issued from the public library - Students Table | Student | Address | Books Issued | Salutation | Sara | Amanora Park Town 94 | Until the Day I Die (Emily Carpenter), Inception (Christopher Nolan) | Ms. | Ansh | 62nd Sector A-10 | The Alchemist (Paulo Coelho), Inferno (Dan Brown) | Mr. | Sara |…" },
            { q: "What are the TRUNCATE, DELETE and DROP statements?", a: "DELETE statement is used to delete rows from a table. DELETE FROM Candidates WHERE CandidateId > 1000; TRUNCATE command is used to delete all the rows from the table and free the space containing the table. TRUNCATE TABLE Candidates; DROP command is used to remove an object from the database. If you drop a table, all the rows in the table are deleted and the table structure is removed from the database. DROP TABLE Candidates; Write a SQL statement to wipe a table 'Temporary' from memory. Check Write a SQL query to remove first 1000 records from table 'Temporary' based on 'id'. Check Write a SQL statement to delete the table 'Temporary' while keeping its relations intact. Check" },
            { q: "What is the difference between DROP and TRUNCATE statements?", a: "If a table is dropped, all things associated with the tables are dropped as well. This includes - the relationships defined on the table with other tables, the integrity checks and constraints, access privileges and other grants that the table has. To create and use the table again in its original form, all these relations, checks, constraints, privileges and relationships need to be redefined. However, if a table is truncated, none of the above problems exist and the table retains its original structure." },
            { q: "What is the difference between DELETE and TRUNCATE statements?", a: "The TRUNCATE command is used to delete all the rows from the table and free the space containing the table.The DELETE command deletes only the rows from the table based on the condition given in the where clause or deletes all the rows from the table if no condition is specified. But it does not free the space containing the table." },
            { q: "What are Aggregate and Scalar functions?", a: "An aggregate function performs operations on a collection of values to return a single scalar value. Aggregate functions are often used with the GROUP BY and HAVING clauses of the SELECT statement. Following are the widely used SQL aggregate functions: - AVG() - Calculates the mean of a collection of values. - COUNT() - Counts the total number of records in a specific table or view. - MIN() - Calculates the minimum of a collection of values. - MAX() - Calculates the maximum of a collection of values. - SUM() - Calculates the sum of a collection of values. - FIRST() - Fetches the first element in a collection of values. - LAST() - Fetches the last element in a collection of values. Note: All aggregate functions described above ignore NULL…" }
          ],
        },
      ],
    },
    {
      id: "ib-postgres",
      title: "InterviewBit — PostgreSQL",
      icon: "layers",
      blocks: [
        { type: 'p', text: 'Questions curated from InterviewBit (interviewbit.com), with concise, interview-ready answers.' },
        {
          type: 'qa',
          items: [
            { q: "What is PostgreSQL?", a: "PostgreSQL was first called Postgres and was developed by a team led by Computer Science Professor Michael Stonebraker in 1986. It was developed to help developers build enterprise-level applications by upholding data integrity by making systems fault-tolerant. PostgreSQL is therefore an enterprise-level, flexible, robust, open-source, and object-relational DBMS that supports flexible workloads along with handling concurrent users. It has been consistently supported by the global developer community. Due to its fault-tolerant nature, PostgreSQL has gained widespread popularity among developers." },
            { q: "What is the capacity of a table in PostgreSQL?", a: "The maximum size of PostgreSQL is 32TB." },
            { q: "What is the importance of the TRUNCATE statement?", a: "TRUNCATE TABLE name_of_table statement removes the data efficiently and quickly from the table.The truncate statement can also be used to reset values of the identity columns along with data cleanup as shown below: TRUNCATE TABLE name_of_table RESTART IDENTITY; We can also use the statement for removing data from multiple tables all at once by mentioning the table names separated by comma as shown below: TRUNCATE TABLE table_1, table_2, table_3;" },
            { q: "Define tokens in PostgreSQL?", a: "A token in PostgreSQL is either a keyword, identifier, literal, constant, quotes identifier, or any symbol that has a distinctive personality. They may or may not be separated using a space, newline or a tab. If the tokens are keywords, they are usually commands with useful meanings. Tokens are known as building blocks of any PostgreSQL code." },
            { q: "What are partitioned tables called in PostgreSQL?", a: "Partitioned tables are logical structures that are used for dividing large tables into smaller structures that are called partitions. This approach is used for effectively increasing the query performance while dealing with large database tables. To create a partition, a key called partition key which is usually a table column or an expression, and a partitioning method needs to be defined. There are three types of inbuilt partitioning methods provided by Postgres: - Range Partitioning: This method is done by partitioning based on a range of values. This method is most commonly used upon date fields to get monthly, weekly or yearly data. In the case of corner cases like value belonging to the end of the range, for example: if the range of…" },
            { q: "How can we start, restart and stop the PostgreSQL server?", a: "- To start the PostgreSQL server, we run: service postgresql start - Once the server is successfully started, we get the below message: Starting PostgreSQL: ok - To restart the PostgreSQL server, we run: service postgresql restart Once the server is successfully restarted, we get the message: Restarting PostgreSQL: server stopped ok - To stop the server, we run the command: service postgresql stop Once stopped successfully, we get the message: Stopping PostgreSQL: server stopped ok" },
            { q: "What is the command used for creating a database in PostgreSQL?", a: "The first step of using PostgreSQL is to create a database. This is done by using the createdb command as shown below:createdb db_name After running the above command, if the database creation was successful, then the below message is shown: CREATE DATABASE" },
            { q: "How will you change the datatype of a column?", a: "This can be done by using the ALTER TABLE statement as shown below: Syntax: ALTER TABLE tname ALTER COLUMN col_name [SET DATA] TYPE new_data_type;" },
            { q: "How do you define Indexes in PostgreSQL?", a: "Indexes are the inbuilt functions in PostgreSQL which are used by the queries to perform search more efficiently on a table in the database. Consider that you have a table with thousands of records and you have the below query that only a few records can satisfy the condition, then it will take a lot of time to search and return those rows that abide by this condition as the engine has to perform the search operation on every single to check this condition. This is undoubtedly inefficient for a system dealing with huge data. Now if this system had an index on the column where we are applying search, it can use an efficient method for identifying matching rows by walking through only a few levels. This is called indexing. Select * from…" },
            { q: "Define sequence.", a: "A sequence is a schema-bound, user-defined object which aids to generate a sequence of integers. This is most commonly used to generate values to identity columns in a table. We can create a sequence by using theCREATE SEQUENCE statement as shown below: CREATE SEQUENCE serial_num START 100; To get the next number 101 from the sequence, we use the nextval() method as shown below: SELECT nextval('serial_num'); We can also use this sequence while inserting new records using the INSERT command: INSERT INTO ib_table_name VALUES (nextval('serial_num'), 'interviewbit');" },
            { q: "What are string constants in PostgreSQL?", a: "They are character sequences bound within single quotes. These are using during data insertion or updation to characters in the database.There are special string constants that are quoted in dollars. Syntax:$tag$<string_constant>$tag$ The tag in the constant is optional and when we are not specifying the tag, the constant is called a double-dollar string literal." },
            { q: "How can you get a list of all databases in PostgreSQL?", a: "This can be done by using the command\\l-> backslash followed by the lower-case letter L." },
            { q: "How can you delete a database in PostgreSQL?", a: "This can be done by using the DROP DATABASE command as shown in the syntax below: DROP DATABASE database_name; If the database has been deleted successfully, then the following message would be shown: DROP DATABASE" },
            { q: "What are ACID properties? Is PostgreSQL compliant with ACID?", a: "ACID stands for Atomicity, Consistency, Isolation, Durability. They are database transaction properties which are used for guaranteeing data validity in case of errors and failures. - Atomicity: This property ensures that the transaction is completed in all-or-nothing way. - Consistency: This ensures that updates made to the database is valid and follows rules and restrictions. - Isolation: This property ensures integrity of transaction that are visible to all other transactions. - Durability: This property ensures that the committed transactions are stored permanently in the database. PostgreSQL is compliant with ACID properties." },
            { q: "Can you explain the architecture of PostgreSQL?", a: "- The architecture of PostgreSQL follows the client-server model. - The server side comprises of background process manager, query processer, utilities and shared memory space which work together to build PostgreSQL’s instance that has access to the data. The client application does the task of connecting to this instance and requests data processing to the services. The client can either be GUI (Graphical User Interface) or a web application. The most commonly used client for PostgreSQL is pgAdmin." },
            { q: "What do you understand by multi-version concurrency control?", a: "MVCC or Multi-version concurrency control is used for avoiding unnecessary database locks when 2 or more requests tries to access or modify the data at the same time. This ensures that the time lag for a user to log in to the database is avoided. The transactions are recorded when anyone tries to access the content. For more information regarding this, you can refer here." },
            { q: "What do you understand by command enable-debug?", a: "The command enable-debug is used for enabling the compilation of all libraries and applications. When this is enabled, the system processes get hindered and generally also increases the size of the binary file. Hence, it is not recommended to switch this on in the production environment. This is most commonly used by developers to debug the bugs in their scripts and help them spot the issues. For more information regarding how to debug, you can refer here." },
            { q: "How do you check the rows affected as part of previous transactions?", a: "SQL standards state that the following three phenomena should be prevented whilst concurrent transactions. SQL standards define 4 levels of transaction isolations to deal with these phenomena. - Dirty reads: If a transaction reads data that is written due to concurrent uncommitted transaction, these reads are called dirty reads. - Phantom reads: This occurs when two same queries when executed separately return different rows. For example, if transaction A retrieves some set of rows matching search criteria. Assume another transaction B retrieves new rows in addition to the rows obtained earlier for the same search criteria. The results are different. - Non-repeatable reads: This occurs when a transaction tries to read the same row multiple…" },
            { q: "What can you tell about WAL (Write Ahead Logging)?", a: "Write Ahead Logging is a feature that increases the database reliability by logging changes before any changes are done to the database. This ensures that we have enough information when a database crash occurs by helping to pinpoint to what point the work has been complete and gives a starting point from the point where it was discontinued. For more information, you can refer here." },
            { q: "What is the main disadvantage of deleting data from an existing table using the DROP TABLE command?", a: "DROP TABLE command deletes complete data from the table along with removing the complete table structure too. In case our requirement entails just remove the data, then we would need to recreate the table to store data in it. In such cases, it is advised to use the TRUNCATE command." },
            { q: "How do you perform case-insensitive searches using regular expressions in PostgreSQL?", a: "To perform case insensitive matches using a regular expression, we can use POSIX(~*) expression from pattern matching operators. For example: 'interviewbit' ~* '.*INTervIewBit.*'" },
            { q: "How will you take backup of the database in PostgreSQL?", a: "We can achieve this by using the pg_dump tool for dumping all object contents in the database into a single file. The steps are as follows: Step 1: Navigate to the bin folder of the PostgreSQL installation path. C:\\>cd C:\\Program Files\\PostgreSQL\\10.0\\bin Step 2: Execute pg_dump program to take the dump of data to a .tar folder as shown below: pg_dump -U postgres -W -F t sample_data > C:\\Users\\admin\\pgbackup\\sample_data.tar The database dump will be stored in the sample_data.tar file on the location specified." },
            { q: "Does PostgreSQL support full text search?", a: "Full-Text Search is the method of searching single or collection of documents stored on a computer in a full-text based database. This is mostly supported in advanced database systems like SOLR or ElasticSearch. However, the feature is present but is pretty basic in PostgreSQL." },
            { q: "What are parallel queries in PostgreSQL?", a: "Parallel Queries support is a feature provided in PostgreSQL for devising query plans capable of exploiting multiple CPU processors to execute the queries faster." },
            { q: "Differentiate between commit and checkpoint.", a: "The commit action ensures that the data consistency of the transaction is maintained and it ends the current transaction in the section. Commit adds a new record in the log that describes the COMMIT to the memory. Whereas, a checkpoint is used for writing all changes that were committed to disk up to SCN which would be kept in datafile headers and control files. Conclusion: SQL is a language for the database. It has a vast scope and robust capability of creating and manipulating a variety of database objects using commands like CREATE, ALTER, DROP, etc, and also in loading the database objects using commands like INSERT. It also provides options for Data Manipulation using commands like DELETE, TRUNCATE and also does effective retrieval of…" }
          ],
        },
      ],
    },
  ],
};

export default sqlBank;
