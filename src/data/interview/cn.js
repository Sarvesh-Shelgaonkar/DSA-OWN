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
            { q: "How are Network types classified?", a: "Networks are classified mainly by their geographic scope (area of distribution): PAN (Personal Area Network) covers a few metres around a person; LAN (Local Area Network) covers a building or campus; MAN (Metropolitan Area Network) covers a city; and WAN (Wide Area Network) spans countries or the globe (the internet being the largest WAN)." },
            { q: "What are Private and Special IP addresses?", a: "Private IP addresses are non-routable ranges reserved for use inside local networks and cannot be used directly on the internet. They are: Class A — 10.0.0.0 to 10.255.255.255; Class B — 172.16.0.0 to 172.31.255.255; and Class C — 192.168.0.0 to 192.168.255.255. Special addresses include the loopback range 127.0.0.1 to 127.255.255.255, used for network testing on the local machine." },
            { q: "What is an IPv4 address? What are the different classes of IPv4?", a: "An IPv4 address is a 32-bit address (four 8-bit octets, each 0–255) that identifies a node on a network. It is divided into five classes based on the first octet: Class A (0–127) for very large networks; Class B (128–191) for medium networks; Class C (192–223) for small/local networks; Class D (224–239) reserved for multicasting; and Class E (240–255) reserved for experimental use and research." },
            { q: "Define different types of network topology", a: "The common network topologies are: Bus — all nodes share one central cable; simple and cheap, but a break in the cable brings down the whole network. Star — all nodes connect to a central hub/switch; easy to troubleshoot and robust, but the network fails if the central node fails (most common in homes/offices). Ring — each node connects to exactly two others forming a loop; a single node/link failure can break it. Mesh — every node connects to many others; highly reliable and fault-tolerant but expensive in cabling. Tree/Hybrid — a combination of the above arranged hierarchically." },
            { q: "What is the network topology?", a: "Network topology is the layout or arrangement of a network — how its nodes (computers, devices) are connected to each other through links (cables or wireless). It describes the physical or logical structure of the connectivity between devices." },
            { q: "What are nodes and links?", a: "A node is any communicating device in a network — the point where data is sent or received — such as a computer, laptop, printer, server, or modem. A link is the connection (edge) between two nodes; it defines the type of connectivity (wired or wireless) and the protocols used so that one node can communicate with another." },
            { q: "What are the different types of VPN?", a: "The main types of VPN are: Access (Remote-Access) VPN — lets individual remote or mobile users securely connect to a private network, replacing older dial-up/ISDN links. Site-to-Site VPN — connects the networks of two whole sites over the internet, with two sub-types: an Intranet VPN links offices of the same organization, and an Extranet VPN links an organization's network to partners or customers while restricting access." },
            { q: "What are the advantages of using a VPN?", a: "Advantages of a VPN include: it securely connects offices in different locations far more cheaply than dedicated WAN links; it enables secure, confidential data transfer between sites; it protects an organization's information from threats and eavesdropping; and it encrypts internet traffic while masking the user's online identity and location." },
            { q: "Tell me something about VPN (Virtual Private Network)", a: "A VPN (Virtual Private Network) is a private network built on top of the public internet. It creates an encrypted, secured tunnel between networks or between a user and a network, so data travels privately over the public internet. This lets a client securely connect to an organization's internal network from a remote location." },
            { q: "Explain LAN (Local Area Network)", a: "A LAN (Local Area Network) connects computers, laptops, and other devices within a limited area such as a home, office, or building, letting them share resources (like printers and files) and exchange information. When used by a company it is called an enterprise network. LANs come in two forms: wired LAN (using cables, e.g. Ethernet) and wireless LAN (using Wi-Fi), the latter being popular where running cables is impractical." },
            { q: "Explain different types of networks.", a: "The main network types by scope are: PAN (Personal Area Network) — connects devices within a person's range, e.g. Bluetooth; LAN (Local Area Network) — a privately owned network within a building such as a home or office; MAN (Metropolitan Area Network) — covers a whole city, e.g. cable TV networks; WAN (Wide Area Network) — spans large areas like countries or continents, the internet being the largest; and GAN (Global Area Network) — connects the globe, often using satellites." }
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
            { q: "Differentiate OSI Reference Model with TCP/IP Reference Model", a: "The OSI model has 7 layers while the TCP/IP model has 4 layers. OSI has fixed, well-defined boundaries and functions for each layer, whereas TCP/IP is more flexible with looser boundaries. OSI is considered a theoretical reference model used mainly for understanding, while TCP/IP is the practical model the internet actually runs on and is regarded as more reliable in real-world use." },
            { q: "What is the use of a router and how is it different from a gateway?", a: "A router connects two or more networks and forwards data between them as packets, directing traffic based on IP addresses at the network layer. A gateway also routes and regulates traffic, but its key difference is that it can connect two dissimilar networks using different protocols (acting as a protocol translator), whereas a router typically connects networks that use the same protocol." },
            { q: "What is the DNS?", a: "DNS (Domain Name System) is the internet's directory service — a decentralized, hierarchical naming system that translates human-readable domain names into IP addresses (for example, interviewbit.com into an IP like 172.217.166.36). It lets users reach websites by name instead of memorizing IP addresses and uses port 53 by default." },
            { q: "What is the SMTP protocol?", a: "SMTP (Simple Mail Transfer Protocol) defines the rules for sending email between mail servers over the internet. It supports both end-to-end and store-and-forward delivery, is used to push mail from a client to a server and between servers, and listens on port 25 by default (with 587/465 commonly used for secured submission)." },
            { q: "What are the HTTP and the HTTPS protocol?", a: "HTTP (HyperText Transfer Protocol) defines how information is exchanged between web browsers and servers on the World Wide Web. It is an application-layer, stateless protocol (each request is independent) built on TCP and uses port 80 by default. HTTPS (HTTP Secure) is HTTP layered with SSL/TLS: it encrypts the communication, verifies the server's identity via certificates, and ensures data integrity, using port 443 by default." },
            { q: "Define the 4 different layers of the TCP/IP Reference Model", a: "The four TCP/IP layers are: Link (Network Access) — decides how bits are physically sent over the medium (e.g. Ethernet, serial lines). Internet — routes IP packets across networks to their destination (the layer that holds the architecture together). Transport — enables end-to-end communication between hosts (TCP for reliable delivery, UDP for fast delivery). Application — contains all the higher-level protocols such as HTTP, FTP, SMTP, and DNS." },
            { q: "Describe the TCP/IP Reference Model", a: "The TCP/IP reference model is a practical, condensed version of the OSI model with only four layers — Link, Internet, Transport, and Application. It was developed by the US Department of Defense (DoD) in the 1980s and is named after its two core protocols, TCP (Transmission Control Protocol) and IP (Internet Protocol). It is the model the modern internet is built on." },
            { q: "Define the 7 different layers of the OSI Reference Model", a: "The seven OSI layers (bottom to top) are: Physical — transmits raw bits over the medium and chooses the transmission mode (simplex, half/full duplex). Data Link — groups bits into frames, handles MAC addressing and error detection (e.g. CRC). Network — routes packets between networks using logical (IP) addresses. Transport — provides end-to-end delivery, segmentation, and reliability (TCP/UDP). Session — establishes, maintains, and closes sessions between applications. Presentation — handles data translation, encryption, and compression. Application — provides network services directly to the user (HTTP, FTP, SMTP)." },
            { q: "Describe the OSI Reference Model", a: "The OSI (Open Systems Interconnection) model is a seven-layer conceptual framework, based on ISO standards, that describes how open systems communicate with each other. It splits communication into seven well-defined layers, guided by principles such as: create a new layer only when a different level of abstraction is needed, give each layer a well-defined function, and base each layer's function on internationally standardized protocols." }
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
            { q: "What is the difference between a switch, router, and bridge?", a: "All three forward data but operate at different levels. A bridge works at Layer 2 (Data Link), connecting two network segments and forwarding or filtering traffic based on MAC addresses; it has few ports and is essentially the predecessor of the switch. A switch also works at Layer 2 but is a smarter, multi-port bridge that forwards frames to the specific port of the destination MAC within a single LAN. A router works at Layer 3 (Network), connecting different networks and forwarding packets between them using IP addresses." },
            { q: "What are the different types of network delays?", a: "Total delay (latency) between two hosts is made up of four components: Propagation delay — time for a signal to physically travel the distance over the medium (depends on distance and medium like fiber or copper); Transmission delay — time to push all the bits of a packet onto the link (depends on packet size and link bandwidth); Processing delay — time a router/host takes to examine the packet header and decide where to forward it; and Queuing delay — time the packet waits in a buffer/queue before it can be transmitted (depends on congestion)." },
            { q: "What is a ping command? What is TTL?", a: "Ping is the simplest tool to check whether a host is reachable over a network. It sends ICMP Echo Request packets to the destination, and if reachable, the destination replies with ICMP Echo Reply packets — reporting both reachability and the round-trip time (RTT). TTL (Time To Live) is a counter carried in each IP packet; every router that forwards the packet decrements it by 1, and when it reaches 0 the packet is discarded and the router returns an ICMP 'Time Exceeded' message. TTL prevents packets from looping through the network forever." },
            { q: "How does SSL/TLS work? What happens during a TLS handshake?", a: "TLS (Transport Layer Security, the successor to SSL) sits between HTTP and TCP and makes communication encrypted, authenticated, and tamper-proof — it is the 'S' in HTTPS. Before any secure data flows, a handshake occurs: (1) the client sends a Client Hello with the TLS versions and cipher suites it supports plus a random value; (2) the server replies with a Server Hello choosing a cipher, and sends its digital certificate containing its public key; (3) the client verifies the certificate against a trusted CA; (4) both sides use asymmetric cryptography to derive a shared symmetric session key; (5) encrypted communication then proceeds using that fast symmetric key." },
            { q: "What is a VLAN (Virtual LAN)? Why is it used?", a: "A VLAN logically divides one physical switch/network into multiple separate networks. Normally all devices on a switch share one broadcast domain, so broadcasts (like ARP) reach everyone. A VLAN groups devices so that each VLAN behaves like its own isolated network: broadcast traffic stays within a VLAN and doesn't reach others, while devices in the same VLAN communicate as if on the same LAN even if physically apart. VLANs are used to improve security (isolation), reduce broadcast traffic, and organize networks flexibly without extra hardware." },
            { q: "What is a proxy server? Forward proxy vs reverse proxy.", a: "A proxy server is an intermediary that sits between a client and a server, so requests pass through it instead of going directly. A forward proxy sits in front of clients: outbound requests go client → forward proxy → internet, hiding and controlling the clients (used for filtering, caching, and anonymity), so the destination server sees only the proxy. A reverse proxy sits in front of servers: incoming requests go client → reverse proxy → backend servers, hiding the servers and providing load balancing, caching, and TLS termination." },
            { q: "What are port numbers? What are well-known ports?", a: "A port number identifies a specific process or service running on a host, since an IP address alone only identifies the machine. For example, in 192.168.1.10:443 the IP identifies the device and 443 routes the request to the HTTPS service; the IP-and-port combination is called a socket. Ports are grouped into ranges: 0–1023 are well-known ports for system/standard services, 1024–49151 are registered ports, and 49152–65535 are dynamic/ephemeral ports used temporarily by clients. Common well-known ports include HTTP 80, HTTPS 443, SSH 22, FTP 21, DNS 53, and SMTP 25." },
            { q: "Explain subnetting and CIDR notation with an example.", a: "Subnetting divides a network into smaller sub-networks; the subnet mask marks which part of an IP is the network and which is the host. CIDR notation is a compact way to write this — for example, /24 means the first 24 bits are the network and the last 8 bits are for hosts. Take 192.168.1.0/24: it has 256 total addresses but only 254 usable hosts, because .0 is the network address and .255 is the broadcast address (usable range 192.168.1.1–192.168.1.254). Splitting it into /25 gives two subnets, 192.168.1.0/25 and 192.168.1.128/25, each with 128 addresses (126 usable hosts)." },
            { q: "What is NAT (Network Address Translation)? Why is it used?", a: "NAT is a technique, usually performed by a router, that lets many devices on a private network share a single public IP address to reach the internet. Internal devices use private IPs that aren't routable on the internet, so when they send a request the router swaps the private source IP for its own public IP, and uses a translation table to route the response back to the correct device. NAT became essential because IPv4 addresses are limited, allowing many devices to share one public IP. Types include Static NAT (one-to-one mapping), Dynamic NAT (from a pool), and PAT/NAT overload (many-to-one using port numbers)." },
            { q: "Explain the TCP three-way handshake in detail.", a: "TCP establishes a reliable connection using three steps — SYN, SYN-ACK, ACK — before any data is sent, ensuring both sides are ready. (1) The client sends a SYN packet with its initial sequence number, requesting a connection. (2) The server replies with a SYN-ACK: it acknowledges the client's sequence number and sends its own initial sequence number. (3) The client sends an ACK acknowledging the server's sequence number. After this exchange the connection is established and data transfer can begin, with both sides having synchronized their sequence numbers." },
            { q: "What is IPv6? How is it different from IPv4?", a: "IPv6 (Internet Protocol version 6) is the newer IP addressing scheme created mainly because IPv4 ran out of addresses. IPv4 uses 32-bit addresses (about 4.3 billion), which became insufficient with the growth of phones, laptops, and IoT devices. IPv6 uses 128-bit addresses written in hexadecimal (e.g. 2001:0db8:85a3::8a2e:0370:7334), providing a practically unlimited address space so every device can have a unique public IP — which is why IPv6 doesn't need NAT the way IPv4 does. IPv6 also offers simplified headers, built-in security (IPsec), and better support for autoconfiguration." }
          ],
        },
      ],
    },
  ],
};

export default cnBank;
