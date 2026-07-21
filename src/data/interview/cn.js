/**
 * Computer Networks (CN / CNS) interview bank.
 * Original content written for MyDSA. Rendered by InterviewBankView.
 */

export const cnBank = {
  id: 'cn',
  slug: 'cn',
  eyebrow: 'Interview prep',
  title: 'Computer Networks Interview',
  short: 'Networks',
  icon: 'route',
  accent: 'text-medium',
  description:
    'OSI vs TCP/IP, "what happens when you type a URL", TCP vs UDP, DNS, HTTP/HTTPS, and subnetting — the networking questions asked in SDE and SDE-intern interviews, made clear.',
  tagline: 'From the OSI model to "what happens when you hit enter on a URL".',
  source: { label: 'InterviewBit', href: 'https://www.interviewbit.com/networking-interview-questions/' },
  pdf: { label: 'InterviewBit PDF', href: '/interview/cn-interviewbit.pdf' },
  sections: [
    {
      id: 'models',
      title: 'OSI & TCP/IP models',
      icon: 'layers',
      blocks: [
        { type: 'p', text: 'Networking questions almost always start here. Memorize the 7 OSI layers (a mnemonic helps) and how TCP/IP maps to them.' },
        {
          type: 'table',
          head: ['OSI Layer', 'Role', 'Example'],
          rows: [
            ['7 Application', 'User-facing protocols', 'HTTP, DNS, FTP, SMTP'],
            ['6 Presentation', 'Encryption, compression, encoding', 'TLS/SSL, JPEG'],
            ['5 Session', 'Establish/maintain sessions', 'Sockets, RPC'],
            ['4 Transport', 'End-to-end delivery, ports', 'TCP, UDP'],
            ['3 Network', 'Routing, logical addressing', 'IP, ICMP, routers'],
            ['2 Data Link', 'Framing, MAC addressing', 'Ethernet, switches, ARP'],
            ['1 Physical', 'Bits over the medium', 'Cables, hubs, signals'],
          ],
        },
        { type: 'tip', text: 'Mnemonic (top→bottom): "All People Seem To Need Data Processing". TCP/IP collapses OSI into 4 layers: Application, Transport, Internet, Network Access.' },
        {
          type: 'qa',
          items: [
            { q: 'OSI vs TCP/IP model?', a: 'OSI is a 7-layer conceptual reference model. TCP/IP is the practical 4-layer model the internet actually runs on. OSI is for understanding; TCP/IP is for implementation.' },
            { q: 'Router vs switch vs hub?', a: 'Hub (L1) broadcasts to all ports. Switch (L2) forwards by MAC to the right port. Router (L3) forwards between networks using IP addresses.' },
          ],
        },
      ],
    },
    {
      id: 'tcp-udp',
      title: 'TCP vs UDP',
      icon: 'route',
      blocks: [
        { type: 'p', text: 'A guaranteed question. Know the trade-off: reliability vs speed.' },
        {
          type: 'table',
          head: ['Feature', 'TCP', 'UDP'],
          rows: [
            ['Connection', 'Connection-oriented (handshake)', 'Connectionless'],
            ['Reliability', 'Guaranteed, ordered, error-checked', 'Best-effort, no guarantee'],
            ['Speed', 'Slower (overhead)', 'Faster (minimal overhead)'],
            ['Flow/Congestion control', 'Yes', 'No'],
            ['Use cases', 'Web, email, file transfer', 'Video calls, gaming, DNS, streaming'],
          ],
        },
        { type: 'answer', text: 'TCP is connection-oriented and reliable — it guarantees ordered, error-free delivery using acknowledgements and retransmission, so it\'s used for web and email. UDP is connectionless and fast with no delivery guarantee, so it\'s used where speed matters more than perfection, like video calls and gaming.' },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'Why is TCP called reliable?', a: 'It uses sequence numbers, acknowledgements, retransmission of lost packets, and checksums to guarantee ordered, error-free delivery.' },
            { level: 'Medium', q: 'Explain the TCP 3-way handshake.', a: 'SYN (client → server) → SYN-ACK (server → client) → ACK (client → server). This synchronizes sequence numbers and establishes the connection before data flows.' },
            { level: 'Hard', q: 'What is TCP connection termination (4-way)?', a: 'FIN → ACK from the other side, then FIN → ACK the other direction. It\'s 4 steps because each side closes independently (half-close). TIME_WAIT ensures late packets are handled.' },
            { level: 'Hard', q: 'Flow control vs congestion control?', a: 'Flow control (sliding window) stops a fast sender overwhelming a slow receiver. Congestion control (slow start, AIMD) stops senders overwhelming the network itself.' },
          ],
        },
      ],
    },
    {
      id: 'url',
      title: 'What happens when you type a URL',
      icon: 'sparkles',
      blocks: [
        { type: 'p', text: 'The ultimate integrative question — it lets the interviewer probe DNS, TCP, HTTP, and rendering all at once. Have a clean, step-by-step answer.' },
        {
          type: 'ol',
          items: [
            'Browser checks its cache, then the OS/router/ISP for the domain\'s IP (DNS resolution). If not cached, a recursive DNS lookup queries root → TLD → authoritative servers.',
            'With the IP, the browser opens a TCP connection to the server (3-way handshake) on port 80/443.',
            'If HTTPS, a TLS handshake negotiates encryption keys and verifies the server\'s certificate.',
            'The browser sends an HTTP request (GET /) with headers.',
            'The server processes it and returns an HTTP response (status code + HTML).',
            'The browser parses HTML, builds the DOM, fetches CSS/JS/images (more requests), builds the render tree, and paints the page.',
            'The TCP connection is kept alive or closed.',
          ],
        },
        { type: 'tip', text: 'Even a 4-step version — "DNS → TCP/TLS → HTTP request/response → render" — scores well. Then go deeper on whichever layer they poke.' },
      ],
    },
    {
      id: 'dns-http',
      title: 'DNS, HTTP & HTTPS',
      icon: 'book',
      blocks: [
        { type: 'answer', text: 'DNS is the internet\'s phonebook — it translates human-readable domain names like google.com into IP addresses that machines use to route traffic.' },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'HTTP vs HTTPS?', a: 'HTTPS is HTTP over TLS/SSL — it encrypts the traffic, authenticates the server via certificates, and ensures integrity. HTTP is plaintext and insecure.' },
            { level: 'Easy', q: 'GET vs POST?', a: 'GET requests data (parameters in the URL, cacheable, idempotent, no body typically). POST sends data in the body to create/change state (not idempotent, not cached).' },
            { level: 'Medium', q: 'Common HTTP status codes?', a: '2xx success (200 OK, 201 Created), 3xx redirects (301, 304), 4xx client errors (400, 401, 403, 404), 5xx server errors (500, 502, 503).' },
            { level: 'Medium', q: 'How does HTTPS/TLS actually secure data?', a: 'Asymmetric keys during the handshake exchange a shared symmetric session key; then fast symmetric encryption protects the data. The certificate (signed by a CA) authenticates the server.' },
            { level: 'Hard', q: 'What is DNS caching and TTL?', a: 'Resolvers cache DNS answers for the record\'s TTL (time to live) to reduce lookups and latency. A low TTL allows faster changes; a high TTL reduces load.' },
          ],
        },
        {
          type: 'qa',
          items: [
            { q: 'Stateful vs stateless protocol?', a: 'HTTP is stateless — each request is independent. State is added on top via cookies, sessions, or tokens.' },
            { q: 'What is an IP vs MAC address?', a: 'MAC is a permanent hardware address (L2, local). IP is a logical, routable address (L3) that can change and works across networks.' },
          ],
        },
      ],
    },
    {
      id: 'addressing',
      title: 'IP addressing & subnetting',
      icon: 'grid',
      blocks: [
        {
          type: 'table',
          head: ['Concept', 'Meaning'],
          rows: [
            ['IPv4 / IPv6', '32-bit (4.3B addresses) vs 128-bit (practically unlimited).'],
            ['Private IP', 'Non-routable ranges (10.x, 172.16–31.x, 192.168.x) used inside LANs.'],
            ['Public IP', 'Globally routable, assigned by ISP.'],
            ['Subnet mask', 'Splits an IP into network + host portions (e.g. /24).'],
            ['NAT', 'Maps many private IPs to one public IP.'],
            ['DHCP', 'Automatically assigns IPs to devices on a network.'],
          ],
        },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'Why do we need NAT?', a: 'IPv4 addresses are scarce, so NAT lets many devices share one public IP by translating private↔public addresses at the router.' },
            { level: 'Medium', q: 'What does /24 mean in CIDR?', a: 'The first 24 bits are the network portion, leaving 8 bits (256 addresses, 254 usable hosts) for the subnet — a mask of 255.255.255.0.' },
            { level: 'Hard', q: 'ARP vs DNS vs DHCP?', a: 'ARP maps IP→MAC within a LAN. DNS maps domain→IP. DHCP assigns IP addresses to devices. All three run automatically to make a simple web request work.' },
          ],
        },
        { type: 'tip', text: 'If you mention any networking/security project (a chat app, a proxy, "CNS" coursework), be ready for TCP, sockets, and TLS follow-ups tied to it.' },
      ],
    },
    {
      id: 'devices',
      title: 'Devices, topologies & network types',
      icon: 'layers',
      blocks: [
        {
          type: 'table',
          head: ['Device', 'Layer', 'Role'],
          rows: [
            ['Hub', 'L1', 'Broadcasts data to all ports (dumb, obsolete).'],
            ['Switch', 'L2', 'Forwards frames to the correct port using MAC addresses.'],
            ['Router', 'L3', 'Routes packets between different networks using IP.'],
            ['Bridge', 'L2', 'Connects two LAN segments into one network.'],
            ['Gateway', 'L3+', 'Connects networks using different protocols (a translator).'],
          ],
        },
        {
          type: 'table',
          head: ['Network', 'Scope'],
          rows: [
            ['PAN', 'Personal — a few metres (Bluetooth).'],
            ['LAN', 'Local — home/office building.'],
            ['MAN', 'Metropolitan — a city.'],
            ['WAN', 'Wide — countries/globe (the internet).'],
          ],
        },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'Switch vs router (one line)?', a: 'A switch forwards within one network using MAC (L2); a router forwards between networks using IP (L3).' },
            { level: 'Easy', q: 'What are common network topologies?', a: 'Bus, Star (most common), Ring, Mesh (most reliable, most cabling), and Tree/Hybrid. Star centralises on a switch; mesh gives redundancy.' },
            { level: 'Medium', q: 'What is a VPN and why use it?', a: 'A Virtual Private Network creates an encrypted tunnel over the public internet, giving privacy, security on untrusted networks, and secure remote access to private resources.' },
            { level: 'Medium', q: 'What is a VLAN?', a: 'A Virtual LAN logically segments one physical switch into isolated broadcast domains — improving security and reducing broadcast traffic without extra hardware.' },
          ],
        },
      ],
    },
    {
      id: 'security',
      title: 'TLS, proxies, ports & firewalls',
      icon: 'lock',
      blocks: [
        { type: 'h', text: 'TLS handshake (simplified)' },
        {
          type: 'ol',
          items: [
            'Client Hello: sends supported cipher suites and a random number.',
            'Server Hello: picks a cipher, sends its certificate (public key) and a random number.',
            'Client verifies the certificate against a trusted CA.',
            'Key exchange: both derive a shared symmetric session key (e.g. via ECDHE).',
            'Encrypted communication begins using fast symmetric encryption.',
          ],
        },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'What are well-known ports?', a: 'Ports 0–1023 reserved for standard services: HTTP 80, HTTPS 443, SSH 22, FTP 21, DNS 53, SMTP 25, MySQL 3306.' },
            { level: 'Medium', q: 'Forward proxy vs reverse proxy?', a: 'A forward proxy sits in front of clients (hides/consolidates outbound requests, filtering). A reverse proxy sits in front of servers (load balancing, caching, TLS termination, hiding backends).' },
            { level: 'Medium', q: 'What does a firewall do?', a: 'It monitors and filters traffic based on rules (IP, port, protocol), acting as a barrier between trusted internal and untrusted external networks. Can be stateless or stateful.' },
            { level: 'Hard', q: 'How does SSL/TLS give both authentication and encryption?', a: 'The certificate (signed by a CA) authenticates the server. Asymmetric crypto during the handshake securely establishes a shared symmetric key, which then encrypts the bulk data efficiently.' },
          ],
        },
      ],
    },
    {
      id: 'cn-rapid',
      title: 'Protocols & rapid fire',
      icon: 'bolt',
      blocks: [
        {
          type: 'table',
          head: ['Concept', 'Meaning'],
          rows: [
            ['ARP', 'Resolves an IP address to a MAC address on a LAN.'],
            ['RARP', 'The reverse — MAC to IP (legacy).'],
            ['ICMP', 'Error/diagnostic messages (used by ping, traceroute).'],
            ['DHCP', 'Auto-assigns IP addresses to devices.'],
            ['MAC address', '48-bit permanent hardware address (L2).'],
            ['TTL', 'Time To Live — hop limit that prevents packets looping forever.'],
          ],
        },
        {
          type: 'levels',
          items: [
            { level: 'Easy', q: 'What does the ping command do?', a: 'Sends ICMP echo requests to a host and measures round-trip time and packet loss — used to test reachability and latency.' },
            { level: 'Medium', q: 'What are the types of network delay?', a: 'Transmission delay (pushing bits onto the link), propagation delay (travel time), queuing delay (waiting in buffers), and processing delay (router handling).' },
            { level: 'Medium', q: 'Why is DNS mostly over UDP?', a: 'DNS queries are small and benefit from UDP\'s low overhead/speed; it falls back to TCP for large responses (e.g. zone transfers) that exceed the UDP size limit.' },
            { level: 'Hard', q: 'What happens on a TCP packet loss?', a: 'The sender doesn\'t receive an ACK within the timeout (or gets duplicate ACKs), triggers retransmission, and congestion control reduces the window (fast retransmit/recovery) to ease the network.' },
            { level: 'Hardest', q: 'How does HTTPS + DNS + TCP combine for one page load?', a: 'DNS (UDP) resolves the domain to an IP, TCP\'s 3-way handshake opens a reliable connection, TLS negotiates encryption over it, then HTTP requests flow — each layer building on the one below.' },
          ],
        },
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
            { q: "How are Network types classified?", a: "Network types can be classified and divided based on the area of distribution of the network. The below diagram would help to understand the same: Network Types" },
            { q: "What are Private and Special IP addresses?", a: "Private Address: For each class, there are specific IPs that are reserved specifically for private use only. This IP address cannot be used for devices on the Internet as they are non-routable. | IPv4 Class | Private IPv4 Start Address | Private IPv4 End Address | A | 10.0.0.0 | 10.255.255.255 | B | 172.16.0.0 | 172.31.255.255 | C | 192.168.0.0 | 192.168.255.255 | Special Address: IP Range from 127.0.0.1 to 127.255.255.255 are network testing addresses also known as loopback addresses are the special IP address." },
            { q: "What is an IPv4 address? What are the different classes of IPv4?", a: "An IP address is a 32-bit dynamic address of a node in the network. An IPv4 address has 4 octets of 8-bit each with each number with a value up to 255. IPv4 classes are differentiated based on the number of hosts it supports on the network. There are five types of IPv4 classes and are based on the first octet of IP addresses which are classified as Class A, B, C, D, or E. | IPv4 Class | IPv4 Start Address | IPv4 End Address | Usage | A | 0.0.0.0 | 127.255.255.255 | Used for Large Network | B | 128.0.0.0 | 191.255.255.255 | Used for Medium Size Network | C | 192.0.0.0 | 223.255.255.255 | Used for Local Area Network | D | 224.0.0.0 | 239.255.255.255 | Reserved for Multicasting | E | 240.0.0.0 | 255.255.255.254 | Study and R&D | Also, check…" },
            { q: "Define different types of network topology", a: "The different types of network topology are given below: Bus Topology: Bus Topology - All the nodes are connected using the central link known as the bus. - It is useful to connect a smaller number of devices. - If the main cable gets damaged, it will damage the whole network. Star Topology: Star Topology - All the nodes are connected to one single node known as the central node. - It is more robust. - If the central node fails the complete network is damaged. - Easy to troubleshoot. - Mainly used in home and office networks. Ring Topology: Ring Topology - Each node is connected to exactly two nodes forming a ring structure - If one of the nodes are damaged, it will damage the whole network - It is used very rarely as it is expensive and…" },
            { q: "What is the network topology?", a: "Network topology is a physical layout of the network, connecting the different nodes using the links. It depicts the connectivity between the computers, devices, cables, etc." },
            { q: "What are nodes and links?", a: "Node: Any communicating device in a network is called a Node. Node is the point of intersection in a network. It can send/receive data and information within a network. Examples of the node can be computers, laptops, printers, servers, modems, etc. Link: A link or edge refers to the connectivity between two nodes in the network. It includes the type of connectivity (wired or wireless) between the nodes and protocols used for one node to be able to communicate with the other. Nodes and Links" },
            { q: "What are the different types of VPN?", a: "Few types of VPN are: - Access VPN: Access VPN is used to provide connectivity to remote mobile users and telecommuters. It serves as an alternative to dial-up connections or ISDN (Integrated Services Digital Network) connections. It is a low-cost solution and provides a wide range of connectivity. - Site-to-Site VPN: A Site-to-Site or Router-to-Router VPN is commonly used in large companies having branches in different locations to connect the network of one office to another in different locations. There are 2 sub-categories as mentioned below: - Intranet VPN: Intranet VPN is useful for connecting remote offices in different geographical locations using shared infrastructure (internet connectivity and servers) with the same accessibility…" },
            { q: "What are the advantages of using a VPN?", a: "Below are few advantages of using VPN: - VPN is used to connect offices in different geographical locations remotely and is cheaper when compared to WAN connections. - VPN is used for secure transactions and confidential data transfer between multiple offices located in different geographical locations. - VPN keeps an organization’s information secured against any potential threats or intrusions by using virtualization. - VPN encrypts the internet traffic and disguises the online identity." },
            { q: "Tell me something about VPN (Virtual Private Network)", a: "VPN or the Virtual Private Network is a private WAN (Wide Area Network) built on the internet. It allows the creation of a secured tunnel (protected network) between different networks using the internet (public network). By using the VPN, a client can connect to the organization’s network remotely. The below diagram shows an organizational WAN network over Australia created using VPN: VPN (Virtual Private Network)" },
            { q: "Explain LAN (Local Area Network)", a: "LANs are widely used to connect computers/laptops and consumer electronics which enables them to share resources (e.g., printers, fax machines) and exchange information. When LANs are used by companies or organizations, they are called enterprise networks. There are two different types of LAN networks i.e. wireless LAN (no wires involved achieved using Wi-Fi) and wired LAN (achieved using LAN cable). Wireless LANs are very popular these days for places where installing wire is difficult. The below diagrams explain both wireless and wired LAN. LAN (Local Area Network)" },
            { q: "Explain different types of networks.", a: "Below are few types of networks: | Type | Description | PAN (Personal Area Network) | Let devices connect and communicate over the range of a person. E.g. connecting Bluetooth devices. | LAN (Local Area Network) | It is a privately owned network that operates within and nearby a single building like a home, office, or factory | MAN (Metropolitan Area Network) | It connects and covers the whole city. E.g. TV Cable connection over the city | WAN (Wide Area Network) | It spans a large geographical area, often a country or continent. The Internet is the largest WAN | GAN (Global Area Network) | It is also known as the Internet which connects the globe using satellites. The Internet is also called the Network of WANs." }
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
            { q: "Differentiate OSI Reference Model with TCP/IP Reference Model", a: "OSI Vs TCP/IP | OSI Reference Model | TCP/IP Reference Model | 7 layered architecture | 4 layered architecture | Fixed boundaries and functionality for each layer | Flexible architecture with no strict boundaries between layers | Low Reliability | High Reliability | Vertical Layer Approach | Horizontal Layer Approach" },
            { q: "What is the use of a router and how is it different from a gateway?", a: "The router is a networking device used for connecting two or more network segments. It directs the traffic in the network. It transfers information and data like web pages, emails, images, videos, etc. from source to destination in the form of packets. It operates at the network layer. The gateways are also used to route and regulate the network traffic but, they can also send data between two dissimilar networks while a router can only send data to similar networks." },
            { q: "What is the DNS?", a: "DNS is the Domain Name System. It is considered as the devices/services directory of the Internet. It is a decentralized and hierarchical naming system for devices/services connected to the Internet. It translates the domain names to their corresponding IPs. For e.g. interviewbit.com to 172.217.166.36. It uses port 53 by default." },
            { q: "What is the SMTP protocol?", a: "SMTP is the Simple Mail Transfer Protocol. SMTP sets the rule for communication between servers. This set of rules helps the software to transmit emails over the internet. It supports both End-to-End and Store-and-Forward methods. It is in always-listening mode on port 25. SMTP Protocol" },
            { q: "What are the HTTP and the HTTPS protocol?", a: "HTTP is the HyperText Transfer Protocol which defines the set of rules and standards on how the information can be transmitted on the World Wide Web (WWW). It helps the web browsers and web servers for communication. It is a ‘stateless protocol’ where each command is independent with respect to the previous command. HTTP is an application layer protocol built upon the TCP. It uses port 80 by default. HTTPS is the HyperText Transfer Protocol Secure or Secure HTTP. It is an advanced and secured version of HTTP. On top of HTTP, SSL/TLS protocol is used to provide security. It enables secure transactions by encrypting the communication and also helps identify network servers securely. It uses port 443 by default." },
            { q: "Define the 4 different layers of the TCP/IP Reference Model", a: "Layers of TCP/IP | Layer | Description | Link | Decides which links such as serial lines or classic Ethernet must be used to meet the needs of the connectionless internet layer. | Internet | The internet layer is the most important layer which holds the whole architecture together. It delivers the IP packets where they are supposed to be delivered. | Transport | Its functionality is almost the same as the OSI transport layer. It enables peer entities on the network to carry on a conversation. | Application | It contains all the higher-level protocols." },
            { q: "Describe the TCP/IP Reference Model", a: "It is a compressed version of the OSI model with only 4 layers. It was developed by the US Department of Defence (DoD) in the 1980s. The name of this model is based on 2 standard protocols used i.e. TCP (Transmission Control Protocol) and IP (Internet Protocol)." },
            { q: "Define the 7 different layers of the OSI Reference Model", a: "Here the 7 layers of the OSI reference model: Layers of OSI Model | Layer | Unit Exchanged | Description | Physical | Bit | It is concerned with transmitting raw bits over a communication channel. Chooses which type of transmission mode is to be selected for the transmission. The available transmission modes are Simplex, Half Duplex and Full Duplex., | Data Link | Frame | The main task of this layer is to transform a raw transmission facility into a line that appears free of undetected transmission errors. It also allows detecting damaged packets using the CRC (Cyclic Redundancy Check) error-detecting, code. When more than one node is connected to a shared link, Data Link Layer protocols are required to determine which device has control…" },
            { q: "Describe the OSI Reference Model", a: "Open System Interconnections (OSI) is a network architecture model based on the ISO standards. It is called the OSI model as it deals with connecting the systems that are open for communication with other systems. The OSI model has seven layers. The principles used to arrive at the seven layers can be summarized briefly as below: - Create a new layer if a different abstraction is needed. - Each layer should have a well-defined function. - The function of each layer is chosen based on internationally standardized protocols." }
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
            { q: "What is the difference between a switch, router, and bridge?", a: "For basic understanding, the difference between these 3 are: 1. Switch - Connects various devices using a single LAN and MAC 2. Router - Connects different networks 3. Bridge - Connects two network segments Sounds confusing? Don’t worry, I’ll explain the difference between each! These three devices all move data, but they don’t operate at the same level or for the same purpose. A bridge works at Layer 2, which is the Data Link layer, and connects two network segments. It looks at MAC addresses and decides whether to forward or filter traffic. You can think of it as an early way to reduce unnecessary traffic between two parts of a network. Bridges usually have very few ports and are mostly considered predecessors to switches. Now, a switch…" },
            { q: "What are the different types of network delays?", a: "Mainly the different types of network delays are: propagation delay, transmission delay, processing delay, and queueing delay. I’ll explain everything in-depth! You know when data travels from one system to another, almost every time you face a certain delay. This process is basically called a total delay or latency and it’s made up from multiple smaller delays. So, here is how it goes: Propagation delay is the time it takes for the signal to physically travel from sender to receiver. Now, a propagation delay completely depends on distance and the medium such as fiber, copper, etc., so even at high speeds, long distances do add delay. And then, comes your transmission delay. This is the time required to push all bits of a packet onto the…" },
            { q: "What is a ping command? What is TTL?", a: "Here’s what you need to remember: A ping command is given because it is the simplest way to check if a system is reachable over a network But how does it work? So, when you run a ping , your machine sends an ICMP Echo Request to the destination. If the destination is reachable, it replies with an ICMP Echo Reply. And so, ping is responsible for 2 things, and those are if the system is reachable or just how long it would take, i.e, the round-trip time. Now, along with this, every packet also carries something called TTL, i.e, Time To Live. TTL is just a counter inside the IP packet. Each time the packet passes through a router, the TTL is reduced by 1. When it reaches 0, the packet is discarded, and the router sends back an ICMP ‘Time…" },
            { q: "How does SSL/TLS work? What happens during a TLS handshake?", a: "SSL and TLS are the same and just named differently. Currently people call it TLS which stands for Transport Layer Security because SSL is now the older version. The ‘S’ from this TLS is put into https. Interesting right? TLS comes in between HTTP and TCP, and its main job is to make communication secure and that is to make it encrypted, verified, and tamper-proof. Now, a handshake happens before any secure data is sent: I will let you know about this simply, so stay with me: The client, which is the browser, starts by sending a message saying, which TLS versions it supports and which encryption methods/ciphers it can use. The server responds with: - the chosen cipher - its digital certificate This certificate contains the server’s public…" },
            { q: "What is a VLAN (Virtual LAN)? Why is it used?", a: "A VLAN is a way to divide a single physical network into multiple logical networks using a switch. Even though all devices may be connected to the same switch, VLANs make it work as if there were separate networks. Okay, so to understand this better, you should think of LAN. In a regular setup, all devices connected to a switch belong to the same broadcast domain. So any broadcast message like ARP is sent to everyone. Now here’s what VLAN does. - Basically all the devices are grouped into different VLANs, and each VLAN acts like its own separate network. So from here, broadcast traffic stays within that VLAN and does not reach others. - Another interesting part is that devices in the same VLAN can communicate as if they are on the same…" },
            { q: "What is a proxy server? Forward proxy vs reverse proxy.", a: "A proxy server acts as an intermediary/middlemam between a client and a server. I So what happens is that direct communication doesn’t take place, and a request is passed through the proxy, which is then forwarded to the destination intended. Now, proxy works differently depending on where it is placed. And this can be understood through forward and revers proxies. I’ll first explain this to you with a simple idea. Normally, a request goes from a client to server. But when a proxy is introduced, the client first nudges the proxy and then it reaches the server. In Forward Proxy, the proxy sits in front of the client. So the request flow goes from client to the forward proxy and then the internet. And because of this, the server doesn’t…" },
            { q: "What are port numbers? What are well-known ports?", a: "An IP address works well with the machines and systems but it doesn’t necessarily tell you which application or service on that machine must handle the request. And that is why, Port numbers are used. So basically, a port identifies a specific process or service running on a host. For example: 192.168.1.10:443 Here, 192.168.1.10 is the device, and 443 tells the system to route the request to the HTTPS service. This combination of IP address and port is called a socket, and it uniquely identifies a communication endpoint. Port numbers are divided into ranges: - 0–1023 - well-known ports which are system-level services - 1024–49151 - registered ports - 49152–65535 - dynamic/ephemeral ports used temporarily by clients Here are some well-known…" },
            { q: "Explain subnetting and CIDR notation with an example.", a: "Subnetting means dividing a network into smaller parts. The subnet mask help in the division where it tells which part of an IP address is the network and which part is for hosts. CIDR notation is just a shorter way to represent this. For example, /24 means the first 24 bits are for the network, and the remaining 8 bits are for hosts. You can understand this with the help of an example: 192.168.1.0/24 Here: Total addresses = 256 Usable hosts = 254 But why not 256? It is because .0 is the network address and .255 broadcast address So actual usable IPs are: 192.168.1.1 to 192.168.1.254 Now if you split this /24 into two smaller networks: You increase the network bits - /25 192.168.1.0/25 192.168.1.128/25 This will give you two subnets…" },
            { q: "What is NAT (Network Address Translation)? Why is it used?", a: "NAT is a networking technique. It is used by routers, so that private networks on multiple devices can share a singular IP address to access the internet. But why is it needed? Devices inside a network use private IPs, which are not directly accessible on the internet. So when a request is sent out, the router replaces the private IP with its own public IP. When the response comes back, the router uses a mapping to forward it to the correct device. This mechanism especially became necessary because IPv4 addresses were limited. And that is why, instead of assigning a unique public IP to every device, NAT made it so, that multiple devices could share a single public IP. You should also note the different types of NAT: Static NAT creates a…" },
            { q: "Explain the TCP three-way handshake in detail.", a: "Before getting into the detailed answer, first remember these 3 words: SYN, SYN-ACK, ACK. Talking about TCP. Before any data is sent ove to TCP, the client and server are expected to make sure that the connection is reliable. In this case, TCP uses a three-way handshake method where it establishes a connection where both sides are ready to send and receive data. Here’s how it goes: 1. A client, say your browser wants to connect to a server. It starts by sending a SYN packet. Along with this, it includes an initial sequence number basically saying, “I want to start a connection, and here’s where my data numbering begins.” 2. The server receives this and responds with a SYN-ACK. Two things take place here, it acknowledges the client’s…" },
            { q: "What is IPv6? How is it different from IPv4?", a: "Internet Protocol Version 6, or popularly called IPv6 is an updated version of IP addressing, and (might sound silly), but the main reason for its launch was because IPv4 ran out of addresses. IPv4 used 32-bit addresses, which gave roughly 4.3 billion unique combinations. And at that time, it sounded like a lot, but with phones, laptops, IoT devices, etc., it ended up not being enough. Hence, IPv6 was introduced to solve this by using 128-bit addresses which were written in hexadecimal format: 2001:0db8:85a3::8a2e:0370:7334 With this format, an almost unlimited space was created, so every device could have its own unique IP. Also, this is why IPv doesn’t rely on NAT the way IPv did. We spoke about spaces, but there’s more to their…" }
          ],
        },
      ],
    },
  ],
};

export default cnBank;
