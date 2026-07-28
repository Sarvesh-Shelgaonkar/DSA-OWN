/**
 * Operating Systems interview bank.
 * Original content written for MyDSA. Rendered by InterviewBankView.
 */

export const osBank = {
  id: 'os',
  slug: 'os',
  eyebrow: 'Interview prep',
  title: 'Operating Systems Interview',
  short: 'OS',
  icon: 'grid',
  accent: 'text-success',
  description:
    'Process vs thread, scheduling, deadlocks, synchronization, memory management, and paging — the OS core-subject questions that come up in every product-based interview, explained simply.',
  tagline: 'The OS core-subject round, made intuitive.',
  source: { label: 'InterviewBit', href: 'https://www.interviewbit.com/operating-system-interview-questions/' },
  pdf: { label: 'InterviewBit PDF', href: '/interview/os-interviewbit.pdf' },
  sections: [
    {
      id: 'basics',
      title: 'What an OS does',
      icon: 'book',
      blocks: [
        { type: 'p', text: 'An operating system is the software layer between hardware and applications. It manages resources — CPU, memory, I/O, files — and provides services to programs.' },
        { type: 'answer', text: 'An OS is the interface between the user/applications and the hardware. Its main jobs are process management, memory management, file management, I/O management, and security — it decides which program uses which resource and when.' },
        {
          type: 'ul',
          items: [
            'Process management: create, schedule, and terminate processes.',
            'Memory management: allocate/free RAM, virtual memory, paging.',
            'File system: organize, store, and secure data.',
            'I/O & device management: drivers, buffering, spooling.',
            'Security & protection: access control, isolation between processes.',
          ],
        },
        {
          type: 'qa',
          items: [
            { q: 'Kernel vs user mode?', a: 'Kernel mode has full hardware access (OS core runs here); user mode is restricted (apps run here). A system call switches from user to kernel mode.' },
            { q: 'What is a system call?', a: 'A controlled entry point for a program to request an OS service (e.g. read, write, fork). It triggers a switch to kernel mode.' },
          ],
        },
      ],
    },
    {
      id: 'process-thread',
      title: 'Process vs Thread',
      icon: 'layers',
      blocks: [
        { type: 'p', text: 'The single most common OS interview question. Nail the definition and the memory-sharing difference.' },
        {
          type: 'table',
          head: ['Feature', 'Process', 'Thread'],
          rows: [
            ['Definition', 'A program in execution', 'A lightweight unit within a process'],
            ['Memory', 'Own separate address space', 'Shares the process\'s memory'],
            ['Communication', 'IPC (slow, e.g. pipes, sockets)', 'Shared memory (fast)'],
            ['Overhead', 'Heavy to create/switch', 'Light to create/switch'],
            ['Crash impact', 'Isolated — one crash doesn\'t kill others', 'A crash can bring down the whole process'],
          ],
        },
        { type: 'answer', text: 'A process is an independent program in execution with its own memory space. A thread is a lightweight unit of execution inside a process that shares the process\'s memory — so threads are cheaper to create and communicate, but less isolated.' },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'What is a PCB?', a: 'Process Control Block — the data structure the OS keeps per process (PID, state, program counter, registers, memory info, open files).' },
            { level: 'Medium', q: 'What is a context switch?', a: 'Saving the state of the current process/thread and loading another\'s so the CPU can switch execution. It has overhead — pure bookkeeping, no useful work.' },
            { level: 'Medium', q: 'What are the process states?', a: 'New → Ready → Running → Waiting (blocked) → Terminated. It moves between Ready and Running via the scheduler.' },
            { level: 'Hard', q: 'Zombie vs orphan process?', a: 'A zombie has finished but its parent hasn\'t read its exit status (entry lingers in the table). An orphan\'s parent died first — it gets adopted by init/systemd.' },
          ],
        },
      ],
    },
    {
      id: 'scheduling',
      title: 'CPU scheduling',
      icon: 'clock',
      blocks: [
        { type: 'p', text: 'The scheduler decides which ready process runs next. Know the algorithms and their trade-offs.' },
        {
          type: 'table',
          head: ['Algorithm', 'Idea', 'Note'],
          rows: [
            ['FCFS', 'First come, first served', 'Simple; suffers convoy effect'],
            ['SJF', 'Shortest job first', 'Optimal avg wait; can starve long jobs'],
            ['Priority', 'Highest priority first', 'Starvation → fix with aging'],
            ['Round Robin', 'Fixed time quantum, cyclic', 'Fair; good for time-sharing'],
            ['Multilevel Queue', 'Separate queues by type', 'e.g. system vs interactive'],
          ],
        },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'Preemptive vs non-preemptive scheduling?', a: 'Preemptive can pause a running process (e.g. Round Robin, SRTF); non-preemptive runs a process to completion or until it blocks (e.g. FCFS, basic SJF).' },
            { level: 'Medium', q: 'What is starvation and aging?', a: 'Starvation is a low-priority process never getting the CPU. Aging gradually raises the priority of waiting processes to prevent it.' },
            { level: 'Medium', q: 'What is the convoy effect?', a: 'In FCFS, short processes wait behind one long process, hurting average wait time — like small cars stuck behind a truck.' },
            { level: 'Hard', q: 'Turnaround vs waiting vs response time?', a: 'Turnaround = completion − arrival. Waiting = turnaround − burst. Response = first-run − arrival. RR optimises response; SJF optimises average waiting.' },
          ],
        },
      ],
    },
    {
      id: 'deadlock',
      title: 'Deadlocks',
      icon: 'lock',
      blocks: [
        { type: 'p', text: 'A deadlock is when a set of processes are all blocked, each waiting for a resource held by another. A classic favourite.' },
        { type: 'h', text: 'The 4 necessary (Coffman) conditions — all must hold' },
        {
          type: 'ol',
          items: [
            'Mutual exclusion: a resource is held in a non-shareable mode.',
            'Hold and wait: a process holds one resource while waiting for another.',
            'No preemption: resources can\'t be forcibly taken away.',
            'Circular wait: a cycle of processes each waiting on the next.',
          ],
        },
        { type: 'answer', text: 'A deadlock needs all four Coffman conditions — mutual exclusion, hold and wait, no preemption, and circular wait — to hold simultaneously. Break any one and you prevent deadlock.' },
        {
          type: 'levels',
          items: [
            { level: 'Medium', q: 'How do you handle deadlocks?', a: 'Four strategies: prevention (break a Coffman condition), avoidance (Banker\'s algorithm), detection & recovery (find cycles, kill/rollback), or ignore it (the "ostrich" approach, used by many OSes).' },
            { level: 'Hard', q: 'What is the Banker\'s algorithm?', a: 'A deadlock-avoidance algorithm: before granting a resource, it checks whether the system stays in a "safe state" (there exists an order in which all processes can finish). If not, the request waits.' },
            { level: 'Hard', q: 'Deadlock vs starvation vs livelock?', a: 'Deadlock: processes blocked forever in a cycle. Starvation: a process waits indefinitely due to priority. Livelock: processes keep changing state in response to each other but make no progress.' },
          ],
        },
      ],
    },
    {
      id: 'synchronization',
      title: 'Process synchronization',
      icon: 'route',
      blocks: [
        { type: 'p', text: 'When multiple threads access shared data, you need synchronization to avoid race conditions.' },
        {
          type: 'table',
          head: ['Term', 'Meaning'],
          rows: [
            ['Race condition', 'Output depends on unpredictable timing of concurrent access.'],
            ['Critical section', 'Code region that accesses shared resources — only one thread at a time.'],
            ['Mutex', 'Lock allowing one thread at a time (ownership-based).'],
            ['Semaphore', 'Counter controlling access to N resources (wait/signal).'],
            ['Monitor', 'High-level construct bundling shared data + synchronized methods.'],
          ],
        },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'Mutex vs semaphore?', a: 'A mutex is a lock for one resource, owned by the locking thread. A semaphore is a signalling counter for N resources and any thread can signal it. Binary semaphore ≈ mutex but without ownership.' },
            { level: 'Medium', q: 'What is a race condition and how do you prevent it?', a: 'Two threads modify shared data concurrently and the result depends on timing. Prevent with locks/mutexes, atomic operations, or by avoiding shared mutable state.' },
            { level: 'Hard', q: 'Explain the producer-consumer problem.', a: 'A classic sync problem: producers add to a bounded buffer, consumers remove. Solved with a mutex for mutual exclusion plus two semaphores (empty and full slots) to coordinate.' },
          ],
        },
      ],
    },
    {
      id: 'memory',
      title: 'Memory management, paging & virtual memory',
      icon: 'grid',
      blocks: [
        { type: 'p', text: 'How the OS gives each process the illusion of a large, private, contiguous memory.' },
        {
          type: 'table',
          head: ['Concept', 'Meaning'],
          rows: [
            ['Virtual memory', 'Illusion of large memory using RAM + disk (swap).'],
            ['Paging', 'Split memory into fixed-size pages/frames — no external fragmentation.'],
            ['Segmentation', 'Split by logical units (code, stack, heap) of variable size.'],
            ['Page fault', 'Accessing a page not in RAM → OS loads it from disk.'],
            ['TLB', 'Cache of recent page-table lookups to speed address translation.'],
          ],
        },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'Internal vs external fragmentation?', a: 'Internal: wasted space inside an allocated block (paging). External: free memory split into scattered small holes (segmentation/variable allocation).' },
            { level: 'Medium', q: 'What is thrashing?', a: 'When the system spends more time swapping pages in/out than executing, because processes don\'t have enough frames. Fixed by reducing multiprogramming or the working-set model.' },
            { level: 'Medium', q: 'Compare page-replacement algorithms.', a: 'FIFO (simple, suffers Belady\'s anomaly), LRU (evicts least recently used — good approximation of optimal), Optimal (evicts the page used furthest in future — theoretical benchmark).' },
            { level: 'Hard', q: 'How does virtual → physical address translation work?', a: 'The MMU splits the virtual address into page number + offset, looks up the frame in the page table (via TLB first), and combines frame + offset for the physical address. A miss causes a page fault.' },
          ],
        },
        { type: 'tip', text: 'If you list an OS project or "familiar with Linux", expect questions on fork(), exec(), and how a shell runs a command. Keep a one-line answer for each ready.' },
      ],
    },
    {
      id: 'kernel-ipc',
      title: 'Kernel, system calls & IPC',
      icon: 'bolt',
      blocks: [
        { type: 'answer', text: 'The kernel is the core of the OS that always runs in memory. It manages CPU, memory, and devices, and is the bridge between applications and hardware.' },
        {
          type: 'table',
          head: ['Kernel type', 'Idea'],
          rows: [
            ['Monolithic', 'All OS services run in kernel space — fast, but a bug can crash everything (Linux).'],
            ['Microkernel', 'Only essentials in kernel; services in user space — stable & modular, but slower (message passing).'],
            ['Hybrid', 'Mix of both (Windows, macOS).'],
          ],
        },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'What is a system call?', a: 'A programmatic way for a process to request a service from the kernel (e.g. read, write, fork, exec). It switches the CPU from user mode to kernel mode.' },
            { level: 'Medium', q: 'System call vs library call?', a: 'A library call runs in user space (e.g. printf); it may internally make a system call (write) to ask the kernel to do privileged work. System calls cross into kernel mode; library calls don\'t by themselves.' },
            { level: 'Medium', q: 'What is IPC and name some mechanisms?', a: 'Inter-Process Communication lets processes exchange data: pipes, named pipes (FIFOs), message queues, shared memory, semaphores, and sockets. Shared memory is fastest; sockets work across machines.' },
            { level: 'Hard', q: 'Interrupt vs trap vs exception?', a: 'An interrupt is an async signal from hardware (I/O done). A trap is a synchronous, intentional software interrupt (a system call). An exception is an error condition during execution (divide by zero, page fault).' },
            { level: 'Hard', q: 'Micro vs monolithic kernel trade-off?', a: 'Monolithic is faster (no message-passing overhead) but less isolated. Microkernel is more reliable and modular (a driver crash won\'t kill the kernel) at the cost of IPC overhead.' },
          ],
        },
      ],
    },
    {
      id: 'os-concepts',
      title: 'Key concepts & rapid fire',
      icon: 'grid',
      blocks: [
        {
          type: 'table',
          head: ['Concept', 'Meaning'],
          rows: [
            ['Multiprogramming', 'Keep multiple jobs in memory so the CPU always has work.'],
            ['Multitasking', 'Time-share the CPU among tasks so they appear to run together.'],
            ['Multiprocessing', 'Use multiple CPUs/cores to run processes truly in parallel.'],
            ['Time sharing', 'Rapidly switch the CPU between users for interactive response.'],
            ['RTOS', 'Real-Time OS — guarantees responses within strict time deadlines.'],
            ['Demand paging', 'Load a page into memory only when it is actually referenced.'],
          ],
        },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'What is virtual memory (one line)?', a: 'A technique that gives each process the illusion of a large, contiguous private memory by combining RAM with disk (swap).' },
            { level: 'Easy', q: 'What is a bootstrap program?', a: 'The initial code (in ROM/firmware) that runs on power-on, initialises hardware, and loads the OS kernel into memory.' },
            { level: 'Medium', q: 'What is copy-on-write (COW)?', a: 'After fork(), parent and child share the same pages read-only; a page is copied only when one of them writes to it. It makes process creation fast and memory-efficient.' },
            { level: 'Medium', q: 'What is a zombie and how is it created?', a: 'A process that has terminated but whose parent hasn\'t called wait() to read its exit status, so its entry remains in the process table.' },
            { level: 'Medium', q: 'What is priority inversion and its fix?', a: 'A high-priority task waits on a resource held by a low-priority task that\'s preempted by a medium one. Fix with priority inheritance — temporarily boost the low-priority holder\'s priority.' },
            { level: 'Hard', q: 'Process context switch vs thread context switch?', a: 'A thread switch (same process) only swaps registers/stack/PC — memory maps stay. A process switch also swaps the address space and flushes the TLB, so it\'s more expensive.' },
            { level: 'Hard', q: 'What causes thrashing and how do you detect it?', a: 'Too many processes with too few frames → constant page faults. Detected by high paging activity with low CPU utilisation. Fix with the working-set model or reducing the degree of multiprogramming.' },
          ],
        },
        { type: 'tip', text: 'Practise the classic sync problems out loud: Producer-Consumer, Readers-Writers, and Dining Philosophers. Interviewers love asking you to reason about the mutex/semaphore placement.' },
      ],
    },
    {
      id: "ib-basic",
      title: "InterviewBit — Basic",
      icon: "book",
      blocks: [
        { type: 'p', text: 'Questions curated from InterviewBit (interviewbit.com), with concise, interview-ready answers.' },
        {
          type: 'qa',
          items: [
            { q: "What's the main purpose of an OS? What are the different types of OS?", a: "The main purpose of an OS is to execute user programs and make it easier for users to understand and interact with computers as well as run applications. It is specially designed to ensure that the computer system performs better by managing all computational activities. It also manages computer memory, processes, and operation of all hardware and software.Types of OS: - Batched OS (Example: Payroll System, Transactions Process, etc.) - Multi-Programmed OS (Example: Windows O/S, UNIX O/S, etc.) - Timesharing OS (Example: Multics, etc.) - Distributed OS (LOCUS, etc.) - Real-Time OS (PSOS, VRTX, etc.)" },
            { q: "Why is the operating system important?", a: "OS is the most essential and vital part of a computer without which it is considered useless. It enables an interface or acts like a link for interaction between computer software that is installed on OS and users. It also helps to communicate with hardware and also maintains balance among hardware and CPU. It also provides services to users and a platform for programs to run on. It performs all common tasks applications require." },
            { q: "What are the benefits of a multiprocessor system?", a: "A multiprocessor system has two or more CPUs sharing memory and can execute multiple programs truly in parallel. Its benefits are: increased throughput — more tasks completed per unit time as processors are added; cost savings — the processors share resources like memory, buses, and peripherals; and improved reliability — if one processor fails, the others can keep the system running (graceful degradation)." },
            { q: "What is RAID structure in OS? What are the different levels of RAID configuration?", a: "RAID (Redundant Array of Independent Disks) combines multiple physical disks into one logical unit to improve performance, reliability, and/or capacity through redundancy. Common levels are: RAID 0 (striping) — splits data across disks for speed, but no redundancy; RAID 1 (mirroring) — keeps identical copies on two disks for fault tolerance; RAID 5 — striping with distributed parity, surviving one disk failure with good read performance; RAID 6 — like RAID 5 but with double parity, surviving two disk failures; and RAID 10 (1+0) — mirrored pairs that are then striped, combining speed with redundancy." },
            { q: "What is GUI?", a: "A GUI (Graphical User Interface) lets users interact with the operating system through graphical elements like windows, icons, menus, and buttons instead of typing text commands. It is more user-friendly and easier to learn than a command-line interface, because users can click to perform actions rather than memorizing commands. Examples include Microsoft Windows, macOS, and Apple's iOS." },
            { q: "What is a Pipe and when it is used?", a: "The pipe is generally a connection among two or more processes that are interrelated to each other. It is a mechanism that is used for inter-process communication using message passing. One can easily send information such as the output of one program process to another program process using a pipe. It can be used when two processes want to communicate one-way i.e., inter-process communication (IPC)." },
            { q: "What are the different kinds of operations that are possible on semaphore?", a: "A semaphore supports two atomic operations: wait() (also called P or down), which decrements the semaphore and blocks the process if the value becomes negative, and signal() (also called V or up), which increments the semaphore and wakes a waiting process if any. These two operations together coordinate access to shared resources." },
            { q: "What is a bootstrap program in OS?", a: "It is generally a program that initializes OS during startup i.e., first code that is executed whenever computer system startups. OS is loaded through a bootstrapping process or program commonly known as booting. Overall OS only depends on the bootstrap program to perform and work correctly. It is fully stored in boot blocks at a fixed location on the disk. It also locates the kernel and loads it into the main memory after which the program starts its execution." },
            { q: "Explain demand paging?", a: "Demand paging loads a page into memory only when it is actually referenced, rather than loading the whole process up front — a core technique in virtual memory. The steps are: attempt to access the page; if it is valid (already in memory), continue as normal; if invalid, a page-fault trap occurs; the OS checks whether the reference is legal (if not, it terminates the process); it schedules a disk read to bring the required page into a free frame, updates the page table, and finally restarts the instruction that caused the fault." },
            { q: "What do you mean by RTOS?", a: "Real Time Operating System (RTOS) is an operating system that is used for real-time applications i.e., for those applications where data processing should be done in a fixed and small measure of time. It performs much better on tasks that are needed to be executed within a short time. It also takes care of execution, monitoring, and all-controlling processes. It also occupies less memory and consumes fewer resources. Types of RTOS: - Hard Real-Time - Firm Real-Time - Soft Real-Time RTOS is used in Air traffic control systems, Anti-lock Brake Systems, and Heart pacemakers." },
            { q: "What do you mean by process synchronization?", a: "Process synchronization is basically a way to coordinate processes that use shared resources or data. It is very much essential to ensure synchronized execution of cooperating processes so that will maintain data consistency. Its main purpose is to share resources without any interference using mutual exclusion. There are two types of process synchronization: - Independent Process - Cooperative Process" },
            { q: "What is IPC? What are the different IPC mechanisms?", a: "IPC (Inter-Process Communication) is the set of mechanisms the OS provides so that separate processes can exchange data and coordinate with each other. The different mechanisms include: Pipes and named pipes (FIFOs), Message queues, Shared memory, Semaphores, Signals, and Sockets. Shared memory is the fastest because processes read/write the same memory region, while sockets can also work between processes on different machines." },
            { q: "What is the difference between main memory and secondary memory?", a: "Main memory (RAM) is the primary, volatile, read-write memory that holds the programs and data the CPU is actively using; it is fast and directly accessible by the CPU, but its contents are lost on power-off. Secondary memory (hard drives, SSDs, USB drives, CDs) is non-volatile external storage used to keep data and programs permanently; it is larger and cheaper but slower, and the CPU cannot access it directly — data must first be brought into main memory." },
            { q: "What do you mean by overlays in OS?", a: "Overlays is basically a programming method that divides processes into pieces so that instructions that are important and need can be saved in memory. It does not need any type of support from the OS. It can run programs that are bigger in size than physical memory by only keeping only important data and instructions that can be needed at any given time." },
            { q: "Write top 10 examples of OS?", a: "Some of the top OS’s that are used mostly are given below: - MS-Windows - Ubuntu - Mac OS - Fedora - Solaris - Free BSD - Chrome OS - CentOS - Debian - Android" },
            { q: "What is time sharing, and how does it help users?", a: "Time sharing is a technique where the CPU switches rapidly between multiple processes, giving each process a small time slice. This creates the illusion that multiple programs are running at the same time. Time sharing improves system responsiveness and allows multiple users or applications to share system resources efficiently. It is especially useful in multi-user and multitasking operating systems." },
            { q: "What is latency, and why does it matter in an operating system?", a: "Latency refers to the time taken to respond to a request or event. In an operating system, lower latency means faster response to user actions, interrupts, or system calls. High latency can make systems feel slow or unresponsive, even if overall throughput is high. This is especially important in real-time and interactive systems." },
            { q: "What is context switching in simple terms?", a: "Context switching is the process of saving the state of one process and loading the state of another, so the CPU can switch between them. When the operating system switches tasks, it stores information like registers and program counters of the current process and restores the saved state of the next process. This allows multiple processes to share the CPU effectively." },
            { q: "What is the difference between an interrupt, a trap, and an exception?", a: "These terms describe different ways control is transferred to the operating system. - Interrupt is triggered by hardware or external events, such as I/O completion or a timer signal. It is asynchronous to the currently running program. - Trap is a deliberate, synchronous event caused by a program, commonly used to invoke a system call. - Exception occurs due to an error during program execution, such as division by zero or invalid memory access." },
            { q: "What is the difference between a system call and a library call?", a: "A system call is a request made by a program to the operating system kernel to perform a privileged operation, such as reading a file or creating a process. A library call is a function provided by a programming library that runs in user space. It may perform computations on its own or internally invoke a system call if kernel access is required." },
            { q: "What is a system call, and why is it needed?", a: "A system call is a mechanism that allows a program running in user mode to request services from the kernel. Operations like file access, process creation, and memory allocation require kernel-level permissions. Since user programs cannot access these resources directly, they use system calls to safely communicate with the operating system. System calls help maintain control, security, and proper resource management in the system." },
            { q: "What is the difference between user mode and kernel mode?", a: "An operating system works in two modes to maintain security and stability. - User mode is where normal applications run. In this mode, programs have limited access to system resources and cannot directly interact with hardware. - Kernel mode is where the operating system core runs. It has full access to hardware, memory, and system resources. These categories ensure that if an application crashes or misbehaves in user mode, it does not affect the system entirely." }
          ],
        },
      ],
    },
    {
      id: "ib-intermediate",
      title: "InterviewBit — Intermediate",
      icon: "layers",
      blocks: [
        { type: 'p', text: 'Questions curated from InterviewBit (interviewbit.com), with concise, interview-ready answers.' },
        {
          type: 'qa',
          items: [
            { q: "What is Reentrancy?", a: "Reentrant is simply a function in which various clients can use and shares a single copy of a program during a similar period. This concept is generally associated with OS code and does not deal with concurrency. It has two major functions: - Program code cannot change or modify itself. - Local data for every client process needs to be stored in different disks." },
            { q: "What is a Scheduling Algorithm? Name different types of scheduling algorithms.", a: "A scheduling algorithm decides which of the ready processes gets the CPU next, aiming to maximize CPU utilization and throughput while minimizing waiting time, response time, and starvation. The common types are: First Come First Serve (FCFS), Shortest Job First (SJF), Shortest Remaining Time First (SRTF), Priority scheduling, Round Robin (RR), and Multilevel Queue / Multilevel Feedback Queue scheduling." },
            { q: "What is the difference between paging and segmentation?", a: "Paging is a memory-management technique that divides a process into fixed-size blocks called pages and physical memory into equal-size frames; it is invisible to the programmer, avoids external fragmentation (but can cause internal fragmentation), and does not separate code and data. Segmentation divides a process into variable-size logical units called segments (such as code, stack, and heap); it is visible to the programmer, reflects the program's logical structure, keeps procedures and data separate, and can cause external fragmentation." },
            { q: "What is thrashing in OS?", a: "It is generally a situation where the CPU performs less productive work and more swapping or paging work. It spends more time swapping or paging activities rather than its execution. By evaluating the level of CPU utilization, a system can detect thrashing. It occurs when the process does not have enough pages due to which the page-fault rate is increased. It inhibits much application-level processing that causes computer performance to degrade or collapse." },
            { q: "What is the main objective of multiprogramming?", a: "It refers to the ability to execute or perform more than one program on a single processor machine. This technique was introduced to overcome the problem of underutilization of CPU and main memory. In simple words, it is the coordination of execution of various programs simultaneously on a single processor (CPU). The main objective of multiprogramming is to have at least some processes running at all times. It simply improves the utilization of the CPU as it organizes many jobs where the CPU always has one to execute." },
            { q: "What do you mean by asymmetric clustering?", a: "Asymmetric Clustering is generally a system in which one of the nodes among all nodes is in hot standby mode whereas the rest of all nodes run different applications. It simply uses whole or entire hardware resources therefore it is considered a more reliable system as compared to others." },
            { q: "What is the difference between multitasking and multiprocessing OS?", a: "Multitasking runs multiple tasks on a single CPU by rapidly switching between them (time-sharing), so they only appear to run at once — it uses one processor and is more economical. Multiprocessing uses two or more processors to execute multiple tasks (or parts of the same program) genuinely in parallel — it uses multiple CPUs, completes more work in less time, and is more reliable but more expensive." },
            { q: "What do you mean by Sockets in OS?", a: "The socket in OS is generally referred to as an endpoint for IPC (Interprocess Communication). Here, the endpoint is referred to as a combination of an IP address and port number. Sockets are used to make it easy for software developers to create network-enabled programs. It also allows communication or exchange of information between two different processes on the same or different machines. It is mostly used in client-server-based systems. Types of SocketsThere are basically four types of sockets as given below: - Stream Sockets - Datagram Sockets - Sequenced Packet Sockets - Raw Sockets" },
            { q: "Explain zombie process?", a: "Zombie process, referred to as a defunct process, is basically a process that is terminated or completed but the whole process control block is not cleaned up from the main memory because it still has an entry in the process table to report to its parent process. It does not consume any of the resources and is dead, but it still exists. It also shows that resources are held by process and are not free." },
            { q: "What do you mean by cascading termination?", a: "Cascading termination is a process termination in which if the parent process is exiting or terminating then the children process will also get terminated. It does not allow the child to continue processing as its parent process terminates. It is generally initiated by OS." },
            { q: "What is starvation and aging in OS?", a: "Starvation happens when a process waits indefinitely for the CPU or resources because higher-priority processes keep getting served first — a common risk with Priority and Shortest Job First scheduling, where low-priority processes may never run. Aging is the technique used to prevent starvation: it gradually raises the priority of a process the longer it waits, so that even a low-priority process eventually becomes high enough priority to be scheduled." },
            { q: "What is a process? What are the different states of a process?", a: "A process is a program in execution, and managing processes is a core job of the OS. In memory a process is divided into four sections — stack, heap, data, and text (code). A process moves through several states: New — being created; Ready — loaded and waiting for the CPU; Running — instructions are executing on the CPU; Waiting (Blocked) — paused until some event or I/O completes; and Terminated — finished execution and being removed from the system." },
            { q: "What do you mean by FCFS?", a: "FCFS (First Come First Serve) is a type of OS scheduling algorithm that executes processes in the same order in which processes arrive. In simple words, the process that arrives first will be executed first. It is non-preemptive in nature. FCFS scheduling may cause the problem of starvation if the burst time of the first process is the longest among all the jobs. Burst time here means the time that is required in milliseconds by the process for its execution. It is also considered the easiest and simplest OS scheduling algorithm as compared to others. Implementation of FCFS is generally managed with help of the FIFO (First In First Out) queue." },
            { q: "What is thread in OS?", a: "A thread is a single path of execution within a process, consisting of its own thread ID, program counter, register set, and stack. It is the basic unit of CPU utilization and enables parallelism, faster communication, and cheaper context switches than processes. Threads are called lightweight processes because they have their own stack but share the rest of the process's resources — including its address space, heap, static/global data, code segment, open file descriptors, and signals — with the other threads of the same process." },
            { q: "What is virtual memory?", a: "It is a memory management technique feature of OS that creates the illusion to users of a very large (main) memory. It is simply space where a greater number of programs can be stored by themselves in the form of pages. It enables us to increase the use of physical memory by using a disk and also allows us to have memory protection. It can be managed in two common ways by OS i.e., paging and segmentation. It acts as temporary storage that can be used along with RAM for computer processes." },
            { q: "What is Round Robin scheduling, and how does time quantum affect performance?", a: "Round Robin scheduling is a preemptive CPU scheduling algorithm where each process is given a fixed time slice, called the time quantum, in a cyclic order. The length of the time quantum directly impacts performance: - If the time quantum is too small, the system spends more time on context switching, reducing efficiency. - If the time quantum is too large, the algorithm starts behaving like First Come First Serve (FCFS), increasing response time." },
            { q: "What is the difference between a process context switch and a thread context switch?", a: "A process context switch occurs when the CPU switches from one process to another. This requires switching the entire process state, including memory space, page tables, and CPU registers, making it relatively expensive. A thread context switch happens between threads of the same process. Since threads share the same address space and resources, only CPU registers and stack information need to be switched, making it faster than a process context switch." },
            { q: "What is preemptive vs non-preemptive scheduling?", a: "Preemptive scheduling allows the operating system to interrupt a running process and assign the CPU to another process, usually based on priority or time slice expiration. Non-preemptive scheduling allows a process to run until it finishes execution or voluntarily gives up the CPU. Preemptive scheduling improves responsiveness and fairness, while non-preemptive scheduling is simpler but can lead to poor response times." },
            { q: "What is the difference between page size and frame size?", a: "- Page size refers to the fixed-size block of memory used by a process in virtual memory. - Frame size refers to the fixed-size block of memory in physical memory (RAM). In operating systems, page size and frame size are always equal. This one-to-one mapping allows pages from virtual memory to be easily loaded into frames in physical memory." },
            { q: "What is copy-on-write, and where is it used?", a: "Copy-on-write (COW) is a memory management technique where multiple processes initially share the same memory pages, and a copy is created only when one process tries to modify the data. This approach improves performance and reduces memory usage because unnecessary copying is avoided. Copy-on-write is commonly used in: - Process creation (for example, after fork()) - Virtual memory systems - File systems and snapshots" },
            { q: "What is internal vs external fragmentation?", a: "- Internal fragmentation happens when allocated memory blocks are larger than needed, leaving unused space inside the allocated block. - External fragmentation occurs when free memory is split into small, non-contiguous blocks, making it hard to allocate a large, contiguous block. Internal fragmentation wastes space within allocations, while external fragmentation wastes space between allocations." },
            { q: "What is priority inversion, and how can it be solved?", a: "Priority inversion occurs when a high-priority process is forced to wait because a low-priority process holds a resource it needs, and a medium-priority process preempts the low-priority one. This situation can delay critical tasks and harm system responsiveness. Common solutions include: - Priority inheritance, where the low-priority process temporarily inherits the higher priority while holding the resource Priority ceiling, where resources are assigned a priority that prevents lower-priority tasks from blocking higher-priority ones" },
            { q: "Explain the producer-consumer problem.", a: "The producer-consumer problem is a classic synchronization problem where: - A producer generates data and places it into a shared buffer - A consumer removes and processes data from that buffer The challenge is to ensure: - Producers do not add data when the buffer is full - Consumers do not remove data when the buffer is empty - Both operate without conflicts This problem is commonly solved using synchronization techniques such as semaphores, mutexes, or monitors to coordinate access to the shared buffer." },
            { q: "What is a monitor in operating systems?", a: "A monitor is a high-level synchronization construct used to manage access to shared resources safely. It combines: - Mutual exclusion: only one thread can execute monitor code at a time - Condition variables: to allow threads to wait and be notified Monitors simplify synchronization by encapsulating shared data and the operations on that data in one place, reducing the chances of race conditions." },
            { q: "What is the difference between a mutex and a semaphore?", a: "A mutex is a locking mechanism used to ensure mutual exclusion, meaning only one thread or process can access a critical section at a time. It is typically owned and released by the same thread. A semaphore is a signaling mechanism that controls access to a resource using a counter. It allows multiple threads or processes to access a limited number of resources." }
          ],
        },
      ],
    },
    {
      id: "ib-advanced",
      title: "InterviewBit — Advanced",
      icon: "trophy",
      blocks: [
        { type: 'p', text: 'Questions curated from InterviewBit (interviewbit.com), with concise, interview-ready answers.' },
        {
          type: 'qa',
          items: [
            { q: "What is Kernel and write its main functions?", a: "The kernel is the central component of an operating system that always stays in main memory (it is loaded first at startup) and acts as the bridge between user applications and hardware. Its main functions are: process management (creating, scheduling, and terminating processes), memory management (allocating and freeing RAM, handling virtual memory), device/I-O management (communicating with hardware through drivers), file management, and handling system calls and interrupts — controlling and coordinating all the core resources of the system." },
            { q: "What do you mean by Semaphore in OS? Why is it used?", a: "A semaphore is a synchronization tool used to control access to shared resources among multiple threads or processes, preventing race conditions. It holds a counter and offers two atomic operations, wait() and signal(). There are two types: a Binary semaphore takes only 0 or 1 and works like a lock to protect a single resource; a Counting semaphore can hold a value greater than 1 and controls access to a pool of N identical resources, decreasing on each acquire and increasing on each release." },
            { q: "What are different types of Kernel?", a: "There are basically five types of Kernels as given below: - Monolithic Kernel - MicroKernel - Hybrid Kernel - Nano Kernel - Exo Kernel" },
            { q: "Write difference between micro kernel and monolithic kernel?", a: "A microkernel keeps only the essential services (like basic scheduling and IPC) in kernel space and runs other services such as drivers and file systems in user space; it is smaller, more modular and reliable (a crashing driver won't bring down the kernel), but slower due to message-passing overhead (e.g. QNX, Mac OS X, K42). A monolithic kernel runs all OS services — memory management, file systems, drivers — together in a single kernel address space; it is larger and faster (no message-passing overhead) but less isolated, so a bug can crash the whole system (e.g. Linux, Solaris, OpenVMS)." },
            { q: "What is SMP (Symmetric Multiprocessing)?", a: "SMP is generally referred to as computer architecture in which the processing of programs is done by multiple processors that share a common OS and memory. SMP is very much required if you want to take advantage of multiprocessor hardware. It simply enables any processor to work on any of the tasks no matter where data or resources for that particular task are located in memory. These systems are more reliable than single-processor systems." },
            { q: "What is a time-sharing system?", a: "It is a system that allows more than one user to access the resources of a particular system in many locations. In simple words, it performs multiple tasks on a single processor or CPU. As the name suggests, it means to share time into multiple slots in several processes. It also allows different users from different locations to use a particular computer system at the same time therefore it is considered one of the important types of OS." },
            { q: "What is Context Switching?", a: "Context switching is basically a process of saving the context of one process and loading the context of another process. It is one of the cost-effective and time-saving measures executed by CPU the because it allows multiple processes to share a single CPU. Therefore, it is considered an important part of a modern OS. This technique is used by OS to switch a process from one state to another i.e., from running state to ready state. It also allows a single CPU to handle and control various different processes or threads without even the need for additional resources." },
            { q: "What is difference between Kernel and OS?", a: "The operating system is the complete system software that provides an interface between the user and the computer and manages all its resources, including a user interface, utilities, and applications support. The kernel is the core component of that operating system that acts as the bridge between software and hardware, converting user requests into machine-level operations and managing CPU, memory, and devices. In short: the kernel is a part of the OS, and the OS is the broader software built around it." },
            { q: "What is difference between process and thread?", a: "A process is a program in execution and is the heavier unit: it has its own separate memory (address) space, is more expensive to create and context-switch, and is well isolated from other processes. A thread is the smallest unit of execution within a process and is lightweight: it shares the memory and resources of its parent process, is cheaper to create and switch between, but is less isolated — a fault in one thread can affect the whole process. One process can contain many threads." },
            { q: "What are various sections of the process?", a: "There are basically four sections in the process as given below: - Stack: It is used for local variables and returns addresses. - Heap: It is used for dynamic memory allocation. - Data: It stores global and static variables. - Code or text: It comprises compiled program code." },
            { q: "What is a deadlock in OS? What are the necessary conditions for a deadlock?", a: "Deadlock is generally a situation where a set of processes are blocked as each process is holding resources and waits to acquire resources held by another process. In this situation, two or more processes simply try to execute simultaneously and wait for each to finish their execution because they are dependent on each other. We can see a hand problem in our system whenever a deadlock occurs in a program. It is one of the common problems you can see in multiprocessing. Necessary Conditions for DeadlockThere are basically four necessary conditions for deadlock as given below: - Mutual Exclusion - Hold and Wait - No Pre-emption - Circular Wait or Resource Wait" },
            { q: "What do you mean by Belady’s Anomaly?", a: "In the Operating System, process data is loaded in fixed-sized chunks and each chunk is referred to as a page. The processor loads these pages in the fixed-sized chunks of memory called frames. Belady’s Anomaly is a phenomenon in which if we increase the number of frames in memory, then the number of page faults also increases. It is generally experienced when we use FIFO (First in First out) page replacement algorithm." },
            { q: "What is spooling in OS?", a: "Spooling (Simultaneous Peripheral Operations On-Line) places the data of I/O jobs into a buffer — a special area on disk or in memory — so that a slow peripheral, like a printer, can process jobs at its own pace while the CPU continues with other work. The classic example is a print spool, where multiple print jobs queue on disk and print one after another, letting the OS overlap one task's I/O with another task's computation." },
            { q: "What happens inside the OS when a process crashes unexpectedly?", a: "When a process crashes unexpectedly, the operating system performs a controlled cleanup to protect system stability. Typically, the OS: - Detects the crash due to an illegal operation, such as invalid memory access or division by zero - Terminates the process and releases its allocated resources, including memory, file descriptors, and locks - Update process tables and scheduling structures to remove the process - May generate logs or a core dump for debugging purposes" },
            { q: "How does an operating system ensure memory protection between processes?", a: "An operating system ensures memory protection by giving each process its own virtual address space. Key mechanisms include: - Virtual memory, which prevents processes from accessing each other’s memory directly - Page tables, which map virtual addresses to physical memory with access permissions - Hardware support (MMU) to enforce read, write, and execute permissions - Kernel mode vs user mode, ensuring only the OS can access protected memory regions These mechanisms ensure that a process cannot read or modify another process’s memory, improving system stability and security." },
            { q: "What is the difference between a hard link and a soft link?", a: "A hard link is another directory entry that points to the same inode as the original file. Both names refer to the same data on disk, and the file exists as long as at least one hard link remains. Hard links cannot span across file systems and usually cannot be created for directories. A soft link (symbolic link) is a separate file that contains the path to another file. It has its own inode and can point to files across file systems or to directories. If the original file is deleted, the soft link becomes invalid." },
            { q: "What is an inode in a file system?", a: "An inode is a data structure used by a file system to store metadata about a file, not the file’s actual content. An inode typically contains: - File size - Ownership and permissions - Timestamps (creation, modification, access) - Pointers to the data blocks on disk File names are stored separately in directory entries, which map names to inode numbers. This separation allows multiple filenames to reference the same file data." },
            { q: "What is NUMA architecture, and how is it different from SMP?", a: "NUMA (Non-Uniform Memory Access) is a memory architecture where each processor has its own local memory, and access time depends on whether the memory is local or remote. SMP (Symmetric Multiprocessing) is an architecture where all processors share a single, uniform memory space with equal access time. Key differences include: - NUMA: memory access time varies based on location - SMP: memory access time is uniform - NUMA scales better for large systems, while SMP is simpler and easier to manage Modern multi-core servers commonly use NUMA to improve performance and scalability." },
            { q: "How does the OS handle deadlock detection vs deadlock prevention?", a: "Deadlock detection allows the system to enter a deadlock state and then checks periodically to see if a deadlock has occurred. Once detected, the OS recovers by terminating or rolling back one or more processes to break the deadlock. Deadlock prevention avoids deadlocks altogether by ensuring that at least one of the necessary deadlock conditions (mutual exclusion, hold and wait, no preemption, circular wait) never occurs. This is done by restricting how resources are requested or allocated." },
            { q: "What is Belady’s anomaly, and why does it occur?", a: "Belady’s anomaly is a phenomenon where increasing the number of page frames results in more page faults instead of fewer. It occurs in certain algorithms, like FIFO, because they do not consider page usage patterns. Adding more memory can change the page replacement order in a way that increases faults. Algorithms like LRU and Optimal do not suffer from Belady’s anomaly because they are stack algorithms, meaning the set of pages in memory with n frames is always a subset of the pages with n+1 frames." },
            { q: "Compare FIFO, LRU, and Optimal page replacement algorithms.", a: "These page replacement algorithms decide which memory page to remove when new pages need to be loaded into memory. - FIFO (First-In, First-Out) replaces the page that has been in memory the longest. It is simple to implement, but it does not consider how frequently or recently a page is used. - LRU (Least Recently Used) replaces the page that has not been accessed for the longest time. It performs better than FIFO in most cases, but requires tracking page usage. - Optimal replaces the page that will not be used for the longest time in the future. It provides the best possible performance but is not practical to implement because future access patterns are unknown. Optimal is mainly used as a benchmark to evaluate other algorithms." },
            { q: "How does a Translation Lookaside Buffer (TLB) improve performance?", a: "A Translation Lookaside Buffer (TLB) is a small, fast cache that stores recent virtual-to-physical memory address translations. Instead of accessing the page table in memory for every address translation, the CPU first checks the TLB. If the entry is found (a TLB hit), the translation is done quickly. If not (a TLB miss), the system falls back to the page table. By reducing frequent page table lookups, the TLB significantly improves memory access speed and overall system performance." },
            { q: "What is Multi-Level Feedback Queue (MLFQ) scheduling?", a: "Multi-Level Feedback Queue (MLFQ) is a CPU scheduling algorithm that uses multiple priority queues and dynamically adjusts a process’s priority based on its behavior. Processes that use the CPU for short bursts are given higher priority, while CPU-intensive processes are gradually moved to lower-priority queues. This allows the scheduler to favor interactive and I/O-bound tasks without requiring prior knowledge of execution time. MLFQ improves responsiveness and fairness by adapting to how processes actually behave rather than relying on fixed priorities." }
          ],
        },
      ],
    },
  ],
};

export default osBank;
