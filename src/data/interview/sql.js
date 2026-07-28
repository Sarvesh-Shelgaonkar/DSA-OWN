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
            { q: "What is Pattern Matching in SQL?", a: "Pattern matching lets you search for data when you only know part of the value, using the `LIKE` operator with wildcards. The `%` wildcard matches zero or more characters and `_` matches exactly one character. For example, `WHERE first_name LIKE 'K%'` finds names starting with K, `WHERE name LIKE '%son'` finds names ending in 'son', and `WHERE code LIKE 'A_C'` matches a 3-character code that starts with A and ends with C. Use `NOT LIKE` to select rows that do not match the pattern." },
            { q: "How to create empty tables with the same structure as another table?", a: "Copy the structure without any rows by selecting into a new table with a condition that is always false, so no records qualify. In MySQL there is a dedicated `CREATE TABLE ... LIKE` shortcut. Either way the new table is built with the same columns but stays empty.", code: `-- SQL Server / standard SQL\nSELECT * INTO Students_copy FROM Students WHERE 1 = 2;\n\n-- MySQL\nCREATE TABLE Students_copy LIKE Students;` },
            { q: "What is a Recursive Stored Procedure?", a: "A recursive stored procedure is one that calls itself until a base (boundary) condition is met, letting you reuse the same logic repeatedly — for example to walk a hierarchy or compute a running total. Most databases cap the recursion depth to stop an infinite call chain from causing a stack overflow. A typical shape is:", code: `CREATE PROCEDURE calcTotal(IN n INT, OUT total INT)\nBEGIN\n  IF n <= 0 THEN\n    SET total = 0;\n  ELSE\n    CALL calcTotal(n - 1, total);\n    SET total = total + n;\n  END IF;\nEND;` },
            { q: "What is a Stored Procedure?", a: "A stored procedure is a named, precompiled set of SQL statements stored in the database that applications can call by name, optionally passing parameters. It improves performance (parsed/compiled once), promotes reuse, and adds security because users who cannot access tables directly can still be granted permission to run the procedure. Its main drawback is that the logic lives only inside the database.", code: `CREATE PROCEDURE FetchAllStudents()\nBEGIN\n  SELECT * FROM students;\nEND;` },
            { q: "What is Collation? What are the different types of Collation Sensitivity?", a: "Collation is the set of rules that determine how character data is sorted and compared. The main types of collation sensitivity are: Case sensitivity — 'A' and 'a' treated differently; Accent sensitivity — 'a' and 'á' treated differently; Kana sensitivity — Japanese Hiragana and Katakana treated differently; and Width sensitivity — the single-byte (half-width) and double-byte (full-width) forms of a character treated differently." },
            { q: "What are the differences between OLTP and OLAP?", a: "OLTP (Online Transaction Processing) handles many short, fast, day-to-day read/write transactions (e.g. banking, order entry). Its queries are simple, need sub-second response times, touch few rows, and it emphasizes concurrency and data integrity in a normalized schema. OLAP (Online Analytical Processing) handles complex, read-heavy analytical queries over large historical data (e.g. reporting, BI). Its queries are few but heavy, aggregating millions of rows on a denormalized/star schema optimized for reads. In short: OLTP runs the business, OLAP analyzes it." },
            { q: "What is OLTP?", a: "OLTP (Online Transaction Processing) is a class of systems built to support transaction-oriented applications. It handles a large number of short, concurrent transactions from many users, where queries are simple, need very fast (sub-second) response times, and return relatively few records. To stay highly available, OLTP systems are often designed to avoid single points of failure. Its performance is commonly measured in transactions per second." },
            { q: "What is User-defined function? What are its various types?", a: "A user-defined function (UDF) is a routine that accepts parameters, performs a calculation, and returns a value — letting you reuse logic inside queries. There are two main types: Scalar functions, which return a single value; and Table-valued functions, which return a table. Table-valued functions are further split into Inline (return a table from a single SELECT statement) and Multi-statement (build the returned table using multiple statements in the function body)." },
            { q: "What is a UNIQUE constraint?", a: "A `UNIQUE` constraint ensures that all values in a column (or a combination of columns) are distinct, so no two rows share the same value. Unlike a primary key, a table can have multiple `UNIQUE` constraints and a `UNIQUE` column may allow one NULL.", code: `-- at table creation\nCREATE TABLE Students (\n  ID INT NOT NULL UNIQUE,\n  Name VARCHAR(255)\n);\n\n-- add it later\nALTER TABLE Students ADD UNIQUE (ID);\n\n-- multi-column unique key\nCONSTRAINT uq_student UNIQUE (ID, FirstName);` },
            { q: "What is a Query?", a: "A query is a request for data or an operation on data from one or more database tables. It can be a select query that reads data or an action query that modifies data:", code: `-- read data\nSELECT fname, lname FROM students WHERE student_id = 1;\n\n-- modify data\nUPDATE students SET fname = 'Captain' WHERE student_id = 1;` },
            { q: "What is Data Integrity?", a: "Data integrity is the assurance of the accuracy and consistency of data over its entire lifecycle. It is enforced through integrity constraints — entity integrity (primary keys), referential integrity (foreign keys), and domain integrity (data types, `CHECK`, `NOT NULL`, `DEFAULT`) — which apply business rules whenever data is inserted or updated." },
            { q: "What is the difference between Clustered and Non-clustered index?", a: "A clustered index determines the physical order in which rows are stored on disk, so a table can have only one clustered index (usually the primary key), and it makes range/ordered retrieval very fast. A non-clustered index is a separate structure that stores the key values with pointers back to the rows, so a table can have many of them, and lookups through it are slightly slower because of the extra pointer hop." },
            { q: "What is an Index? Explain its different types.", a: "An index is a data structure (usually a B-tree) that speeds up data retrieval on one or more columns, at the cost of extra storage and slower writes (the index must be maintained). Common types include: Unique index — enforces distinct key values and protects integrity; Non-unique index — purely for performance; Clustered index — defines the physical row order (one per table); Non-clustered index — a separate lookup structure (many per table); and Composite index — spanning multiple columns.", code: `-- create an index\nCREATE INDEX idx_name ON table_name (col1, col2);\n\n-- remove an index\nDROP INDEX idx_name;` },
            { q: "What is a Cross-Join?", a: "A cross join returns the Cartesian product of two tables — every row of the first table paired with every row of the second — so the result has (rows in A × rows in B) rows. If you add a `WHERE` clause that relates the two tables, a cross join effectively behaves like an inner join.", code: `SELECT stu.name, sub.subject\nFROM students stu\nCROSS JOIN subjects sub;` },
            { q: "What is a Self-Join?", a: "A self join is a regular join in which a table is joined to itself, using table aliases to treat the single table as two. It is used to compare rows within the same table — for example, matching each employee to their manager:", code: `SELECT A.emp_name AS Employee, B.emp_name AS Supervisor\nFROM employee A, employee B\nWHERE A.emp_sup = B.emp_id;` },
            { q: "What is a Join? List its different types.", a: "A `JOIN` combines rows from two or more tables based on a related column. The main types are: INNER JOIN — returns only rows with matching values in both tables; LEFT (OUTER) JOIN — all rows from the left table plus matching rows from the right (NULLs where none match); RIGHT (OUTER) JOIN — all rows from the right table plus matching rows from the left; and FULL (OUTER) JOIN — all rows from both tables, matched where possible.", code: `SELECT *\nFROM Table_A A\nLEFT JOIN Table_B B ON A.col = B.col;` },
            { q: "What is a Foreign Key?", a: "A foreign key is one or more columns in a table that reference the primary key of another table, enforcing referential integrity so a value must exist in the parent table (or be NULL). The table holding the foreign key is the child table; the referenced table is the parent. You can also enforce actions with `ON DELETE CASCADE` or `ON DELETE SET NULL`.", code: `CREATE TABLE Students (\n  ID INT PRIMARY KEY,\n  Name VARCHAR(255),\n  LibraryID INT,\n  FOREIGN KEY (LibraryID) REFERENCES Library(LibraryID)\n);` },
            { q: "What is a Subquery? What are its types?", a: "A subquery is a query nested inside another query (also called an inner or nested query), used to restrict or supply data to the outer query. There are two types: a non-correlated subquery runs independently once, on its own; a correlated subquery references a column from the outer query and is re-evaluated for each row the outer query processes, so it can be slower.", code: `SELECT name, email\nFROM contacts\nWHERE roll_no IN (\n  SELECT roll_no FROM students WHERE subject = 'Maths'\n);` },
            { q: "What is a Primary Key?", a: "A primary key uniquely identifies each row in a table. It must contain unique values and cannot be NULL (an implicit `NOT NULL`), and a table can have only one primary key, which may be a single column or a composite of several columns.", code: `-- single-column primary key\nCREATE TABLE Students (\n  ID INT NOT NULL,\n  Name VARCHAR(255),\n  PRIMARY KEY (ID)\n);\n\n-- composite key\nCONSTRAINT PK_Student PRIMARY KEY (ID, FirstName);\n\n-- add one later\nALTER TABLE Students ADD PRIMARY KEY (ID);` },
            { q: "What are Constraints in SQL?", a: "Constraints are rules applied to columns to enforce data integrity, set when creating the table or added later with `ALTER TABLE`. The common constraints are: `NOT NULL` (disallows NULL values), `CHECK` (values must satisfy a condition), `DEFAULT` (assigns a value when none is given), `UNIQUE` (all values must be distinct), `PRIMARY KEY` (uniquely identifies each row), `FOREIGN KEY` (enforces referential integrity with another table), and `INDEX` (speeds up retrieval)." },
            { q: "What are Tables and Fields?", a: "A table is an organized collection of data arranged in rows and columns. The columns of a table are called fields (each field holds one attribute), and the rows are called records (each record is one complete entry)." },
            { q: "What is the difference between SQL and MySQL?", a: "SQL is the standard language used to query and manipulate relational databases. MySQL is a specific relational database management system (RDBMS) — like PostgreSQL, Oracle, or SQL Server — that uses SQL as its query language. In short, SQL is the language; MySQL is software that speaks it." },
            { q: "What is SQL?", a: "SQL (Structured Query Language) is the standard language for managing and querying relational database management systems. It lets you define schema, and insert, retrieve, update, and delete data organized as entities and the relationships between them." },
            { q: "What is RDBMS? How is it different from DBMS?", a: "An RDBMS (Relational Database Management System) stores data as a collection of related tables, with relationships defined between the common columns of those tables and support for keys and constraints. A plain DBMS may store data as files or other structures without enforcing relationships. Most modern systems — MySQL, SQL Server, Oracle, PostgreSQL — are RDBMSs." },
            { q: "What is DBMS?", a: "A DBMS (Database Management System) is system software responsible for creating, retrieving, updating, and managing a database. It acts as an interface between the database and its users or applications, ensuring data is stored consistently, remains organized, and is easily accessible." },
            { q: "What is Database?", a: "A database is an organized collection of data that is stored and retrieved electronically from a computer system. Databases are designed and modeled so that large, complex sets of data can be stored, queried, and managed efficiently." },
            { q: "What is the SELECT statement?", a: "`SELECT` retrieves data from one or more tables, returning the result as a result-set:", code: `-- all columns and rows\nSELECT * FROM students;\n\n-- specific columns for matching rows\nSELECT name, email FROM students WHERE id = 1;` },
            { q: "What are some common clauses used with SELECT query in SQL?", a: "Common clauses used with `SELECT` are: `WHERE` — filters rows by a condition; `ORDER BY` — sorts the result ascending (ASC) or descending (DESC); `GROUP BY` — groups rows with identical values, usually with aggregate functions; and `HAVING` — filters those groups (it can use aggregates, which `WHERE` cannot).", code: `SELECT dept, COUNT(*)\nFROM employees\nWHERE active = 1\nGROUP BY dept\nHAVING COUNT(*) > 5\nORDER BY dept;` },
            { q: "What are UNION, MINUS and INTERSECT commands?", a: "These set operators combine the result-sets of two `SELECT` statements. `UNION` returns all rows from both queries with duplicates removed (`UNION ALL` keeps duplicates). `INTERSECT` returns only the rows present in both queries. `MINUS` (called `EXCEPT` in some databases) returns rows from the first query that are not in the second. For all of them, each `SELECT` must have the same number of columns with compatible data types in the same order." },
            { q: "What is Cursor? How to use a Cursor?", a: "A cursor is a control structure that lets you traverse and process a result-set one row at a time, acting like a pointer to a single row. The steps to use one are: (1) `DECLARE` the cursor together with a `SELECT` statement; (2) `OPEN` it to execute the query and build the result-set; (3) `FETCH` the next row into variables (repeat in a loop); (4) `CLOSE` it to release the result-set; and (5) `DEALLOCATE` it to free the cursor resources. Cursors are best avoided when a set-based query can do the same work." },
            { q: "What are Entities and Relationships?", a: "An entity is a real-world object — tangible or intangible — that can be uniquely identified and about which data is stored; for example, students, professors, and departments in a college database, each with its own attributes. A relationship is an association between entities that are connected in some way; for example, an employees table can be related to a salaries table." },
            { q: "List the different types of relationships in SQL.", a: "The relationship types are: One-to-One — each row in one table maps to at most one row in another; One-to-Many (and Many-to-One) — a row in one table relates to many rows in another (the most common type); Many-to-Many — multiple rows on both sides relate to each other (implemented with a junction/bridge table); and Self-Referencing — a table relates to itself, such as an employee referencing their manager." },
            { q: "What is an Alias in SQL?", a: "An alias is a temporary name given to a table or column for the duration of a query, created with the `AS` keyword. It shortens references, makes output columns more readable, and is required for self-joins to distinguish the two instances of a table. The `AS` keyword is optional but recommended for clarity.", code: `SELECT A.emp_name AS Employee, B.emp_name AS Supervisor\nFROM employee A, employee B\nWHERE A.emp_sup = B.emp_id;` },
            { q: "What is a View?", a: "A view is a virtual table defined by the result of a stored SQL query. It has rows and columns like a real table, but its data comes from one or more underlying tables. Views simplify complex queries, present a consistent interface, and can restrict which columns a user sees for security." },
            { q: "What is Normalization?", a: "Normalization is the process of organizing tables and columns to reduce data redundancy and avoid update, insert, and delete anomalies. It involves splitting data into related tables and defining rules (normal forms) for those relationships, which keeps data consistent and the schema flexible." },
            { q: "What is Denormalization?", a: "Denormalization is the reverse of normalization: deliberately introducing controlled redundancy into a normalized schema to improve read performance. By storing pre-joined or pre-computed data, it avoids expensive joins in read-heavy or analytical systems, at the cost of extra storage and the effort of keeping the redundant data consistent." },
            { q: "What are the various forms of Normalization?", a: "The main normal forms are: 1NF — every attribute holds a single (atomic) value, with no repeating groups or multi-valued attributes; 2NF — is in 1NF and every non-key attribute depends on the whole composite primary key (no partial dependency); 3NF — is in 2NF and non-key attributes depend only on the key, not on other non-key attributes (no transitive dependency); and BCNF — a stronger 3NF where every determinant is a candidate key. We usually normalize up to 3NF in practice." },
            { q: "What are the TRUNCATE, DELETE and DROP statements?", a: "`DELETE` removes rows from a table based on an optional `WHERE` condition; it is a DML command and can be rolled back. `TRUNCATE` removes all rows quickly and frees the storage; it is a DDL command, cannot use `WHERE`, and usually cannot be rolled back. `DROP` removes the entire table — its data and structure — from the database.", code: `-- remove selected rows (can rollback)\nDELETE FROM Candidates WHERE id > 1000;\n\n-- remove all rows fast (usually no rollback)\nTRUNCATE TABLE Candidates;\n\n-- remove the whole table\nDROP TABLE Candidates;` },
            { q: "What is the difference between DROP and TRUNCATE statements?", a: "DROP removes the whole table object, including its structure, relationships, constraints, indexes, and privileges — to use it again you must recreate everything. TRUNCATE only removes all the rows while keeping the table structure, constraints, and relationships intact, so the empty table is ready to use immediately." },
            { q: "What is the difference between DELETE and TRUNCATE statements?", a: "DELETE removes rows one by one based on the WHERE condition (or all rows if none is given), can be rolled back, fires triggers, and does not free the table's storage. TRUNCATE removes all rows at once by deallocating pages, frees the storage, is much faster, cannot use a WHERE clause, and typically cannot be rolled back." },
            { q: "What are Aggregate and Scalar functions?", a: "An aggregate function operates on a set of values and returns a single summarizing value, often used with `GROUP BY`/`HAVING` — for example `AVG()`, `COUNT()`, `MIN()`, `MAX()`, and `SUM()`. A scalar function operates on a single value and returns a single value — for example `UPPER()`, `LOWER()`, `LEN()`/`LENGTH()`, `ROUND()`, and `NOW()`. Note that aggregate functions ignore NULL values." }
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
            { q: "What is the importance of the TRUNCATE statement?", a: "`TRUNCATE TABLE` removes the data efficiently and quickly from a table. It can also reset the values of identity columns along with the cleanup, and can clear several tables at once by listing them comma-separated:", code: `-- clear all rows\nTRUNCATE TABLE name_of_table;\n\n-- clear rows and reset identity columns\nTRUNCATE TABLE name_of_table RESTART IDENTITY;\n\n-- clear multiple tables at once\nTRUNCATE TABLE table_1, table_2, table_3;` },
            { q: "Define tokens in PostgreSQL?", a: "A token in PostgreSQL is either a keyword, identifier, literal, constant, quotes identifier, or any symbol that has a distinctive personality. They may or may not be separated using a space, newline or a tab. If the tokens are keywords, they are usually commands with useful meanings. Tokens are known as building blocks of any PostgreSQL code." },
            { q: "What are partitioned tables called in PostgreSQL?", a: "Partitioning divides one large logical table into smaller physical pieces called partitions, which improves query performance and maintenance on very large tables. You define a partition key (a column or expression) and a partitioning method. PostgreSQL provides three built-in methods: Range partitioning — splits rows by a range of values (commonly on date columns for monthly/yearly data); List partitioning — splits rows by an explicit list of key values (e.g. by region); and Hash partitioning — distributes rows evenly across partitions using a hash of the key." },
            { q: "How can we start, restart and stop the PostgreSQL server?", a: "Use the `service postgresql` command with the appropriate action. On success each prints a short confirmation such as \"Starting PostgreSQL: ok\" or \"Stopping PostgreSQL: server stopped ok\".", code: `# start the server\nservice postgresql start\n\n# restart the server\nservice postgresql restart\n\n# stop the server\nservice postgresql stop` },
            { q: "What is the command used for creating a database in PostgreSQL?", a: "The first step of using PostgreSQL is to create a database, done with the `createdb` command. On success it prints `CREATE DATABASE`.", code: `createdb db_name` },
            { q: "How will you change the datatype of a column?", a: "This can be done using the `ALTER TABLE` statement:", code: `ALTER TABLE tname\n  ALTER COLUMN col_name [SET DATA] TYPE new_data_type;` },
            { q: "How do you define Indexes in PostgreSQL?", a: "An index is a structure that lets queries find matching rows without scanning the whole table. Without an index, a selective query forces the engine to check every row (a sequential scan), which is slow on large tables; an index lets it jump to matching rows by traversing only a few levels of a B-tree. PostgreSQL supports several index types including B-tree (default), Hash, GIN, GiST, and BRIN for different data and query patterns.", code: `-- create an index\nCREATE INDEX idx_name ON table_name (column);\n\n-- drop an index\nDROP INDEX idx_name;` },
            { q: "Define sequence.", a: "A sequence is a schema-bound, user-defined object that generates a sequence of integers, most commonly used to produce values for identity columns. Create it with `CREATE SEQUENCE`, fetch the next value with `nextval()`, and use it while inserting records:", code: `-- create a sequence starting at 100\nCREATE SEQUENCE serial_num START 100;\n\n-- get the next number (101)\nSELECT nextval('serial_num');\n\n-- use it in an INSERT\nINSERT INTO ib_table_name VALUES (nextval('serial_num'), 'interviewbit');` },
            { q: "What are string constants in PostgreSQL?", a: "They are character sequences bound within single quotes, used when inserting or updating character data. There are also special dollar-quoted string constants; the tag is optional, and when it is omitted the constant is called a double-dollar string literal.", code: `$tag$<string_constant>$tag$` },
            { q: "How can you get a list of all databases in PostgreSQL?", a: "This can be done with the `\\l` meta-command — a backslash followed by the lower-case letter L." },
            { q: "How can you delete a database in PostgreSQL?", a: "This is done with the `DROP DATABASE` command. On success it prints `DROP DATABASE`.", code: `DROP DATABASE database_name;` },
            { q: "What are ACID properties? Is PostgreSQL compliant with ACID?", a: "ACID stands for Atomicity, Consistency, Isolation, Durability. They are database transaction properties which are used for guaranteeing data validity in case of errors and failures. - Atomicity: This property ensures that the transaction is completed in all-or-nothing way. - Consistency: This ensures that updates made to the database is valid and follows rules and restrictions. - Isolation: This property ensures integrity of transaction that are visible to all other transactions. - Durability: This property ensures that the committed transactions are stored permanently in the database. PostgreSQL is compliant with ACID properties." },
            { q: "Can you explain the architecture of PostgreSQL?", a: "- The architecture of PostgreSQL follows the client-server model. - The server side comprises of background process manager, query processer, utilities and shared memory space which work together to build PostgreSQL’s instance that has access to the data. The client application does the task of connecting to this instance and requests data processing to the services. The client can either be GUI (Graphical User Interface) or a web application. The most commonly used client for PostgreSQL is pgAdmin." },
            { q: "What do you understand by multi-version concurrency control?", a: "MVCC (Multi-Version Concurrency Control) lets many transactions read and write the same data concurrently without blocking each other. Instead of locking rows, PostgreSQL keeps multiple versions of a row, and each transaction sees a consistent snapshot of the data as it existed when the transaction started. This means readers never block writers and writers never block readers, greatly improving concurrency." },
            { q: "What do you understand by command enable-debug?", a: "The --enable-debug option is used when compiling PostgreSQL to build all libraries and applications with debugging symbols. It helps developers trace and diagnose bugs, but it slows down the system and increases the binary size, so it is not recommended in a production environment." },
            { q: "What read phenomena do isolation levels prevent in PostgreSQL?", a: "The SQL standard defines three phenomena that can occur with concurrent transactions and four isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable) to prevent them. Dirty read — reading data written by another, still-uncommitted transaction. Non-repeatable read — re-reading the same row within a transaction returns different values because another committed transaction changed it. Phantom read — re-running the same query returns a different set of rows because another transaction inserted or deleted rows matching the criteria. Stronger isolation levels prevent more of these phenomena." },
            { q: "What can you tell about WAL (Write Ahead Logging)?", a: "Write-Ahead Logging improves reliability by recording every change in a log before applying it to the actual data files. If the database crashes, it can replay the WAL to recover committed transactions and reach a consistent state, so no committed work is lost. WAL also enables features like point-in-time recovery and streaming replication." },
            { q: "What is the main disadvantage of deleting data from an existing table using the DROP TABLE command?", a: "DROP TABLE command deletes complete data from the table along with removing the complete table structure too. In case our requirement entails just remove the data, then we would need to recreate the table to store data in it. In such cases, it is advised to use the TRUNCATE command." },
            { q: "How do you perform case-insensitive searches using regular expressions in PostgreSQL?", a: "Use the POSIX case-insensitive match operator `~*` from the pattern-matching operators. For example:", code: `'interviewbit' ~* '.*INTervIewBit.*'` },
            { q: "How will you take backup of the database in PostgreSQL?", a: "Use the `pg_dump` tool to dump all object contents into a single file. Navigate to the PostgreSQL `bin` folder, then run `pg_dump` to write the dump to a `.tar` file:", code: `-- 1. go to the PostgreSQL bin folder\ncd C:\\Program Files\\PostgreSQL\\10.0\\bin\n\n-- 2. dump the database to a .tar file\npg_dump -U postgres -W -F t sample_data > C:\\Users\\admin\\pgbackup\\sample_data.tar` },
            { q: "Does PostgreSQL support full text search?", a: "Full-Text Search is the method of searching single or collection of documents stored on a computer in a full-text based database. This is mostly supported in advanced database systems like SOLR or ElasticSearch. However, the feature is present but is pretty basic in PostgreSQL." },
            { q: "What are parallel queries in PostgreSQL?", a: "Parallel Queries support is a feature provided in PostgreSQL for devising query plans capable of exploiting multiple CPU processors to execute the queries faster." },
            { q: "Differentiate between commit and checkpoint.", a: "A commit finalizes a single transaction: it makes that transaction's changes permanent and visible, ends the transaction, and records a COMMIT entry in the write-ahead log. A checkpoint is a database-wide operation that flushes all committed, in-memory (dirty) pages to the data files on disk and marks that point in the log, so recovery after a crash can start from the checkpoint instead of replaying the entire log. In short, commit is per-transaction durability in the log, while checkpoint synchronizes the log with the actual data files." }
          ],
        },
      ],
    },
  ],
};

export default sqlBank;
