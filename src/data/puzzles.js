// Interview puzzles imported and structured from the user's "PUZZLES" Google Doc.
// Source: https://docs.google.com/document/d/1C2jh2EpDhCysYb2YHSWP0ZIuNlziKHnT_tlI8pVxp9o/edit
// Each problem/solution is an ordered list of blocks:
//   { t:'h', text } heading | { t:'p', text } paragraph | { t:'li', text } bullet
//   { t:'table', rows:[[...]] } | { t:'img', src } (served from /puzzles/<src>)
export const puzzleDocUrl = "https://docs.google.com/document/d/1C2jh2EpDhCysYb2YHSWP0ZIuNlziKHnT_tlI8pVxp9o/edit?usp=sharing";

export const puzzleCategories = ["River Crossing", "Hats & Prisoners", "Poison, Pills & Testing", "Bulbs, Switches & Lights", "Bridge, Time & Speed", "Probability & Expectation", "Shapes & Matchsticks", "Arrangement & Seating", "Measuring & Weighing", "Math & Numbers", "Logic & Deduction"];

export const puzzles = [
  {
    "id": "p1",
    "title": "Pay an employee using a gold rod of 7 units",
    "category": "Measuring & Weighing",
    "problem": [
      {
        "t": "img",
        "src": "image226.png"
      },
      {
        "t": "img",
        "src": "image187.jpg"
      },
      {
        "t": "h",
        "text": "🔍 Problem Statement (Clear Version)"
      },
      {
        "t": "p",
        "text": "**You have one gold rod of length 7 units.\n You must pay an employee 1 unit of gold per day for 7 days.**"
      },
      {
        "t": "h",
        "text": "❗ Constraint:"
      },
      {
        "t": "li",
        "text": "**You are allowed to make ONLY 2 cuts on the gold rod (total 3 pieces).**"
      },
      {
        "t": "li",
        "text": "**After paying each day, you can take back some gold and give different pieces (exchange is allowed).**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "✅ Final Answer (What to Do)"
      },
      {
        "t": "p",
        "text": "**👉 Cut the 7-unit gold rod into pieces of:\n 1 unit, 2 units, and 4 units**"
      },
      {
        "t": "p",
        "text": "**Because:\n 1 + 2 + 4 = 7**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview-Ready English Answer (Say This)"
      },
      {
        "t": "p",
        "text": "**“I would cut the 7-unit gold rod into 1, 2, and 4 units.\n Using these three pieces, I can pay exactly 1 unit of gold per day for all 7 days by exchanging pieces.\n This works because any value from 1 to 7 can be formed using combinations of 1, 2, and 4, similar to binary representation.”**"
      },
      {
        "t": "h",
        "text": "🧠 Confidence Line (If Interviewer Pushes)"
      },
      {
        "t": "p",
        "text": "**“This is a classic payment optimization puzzle based on binary combinations, ensuring minimum cuts and maximum flexibility.”**"
      },
      {
        "t": "h",
        "text": "🧩 Puzzle Recap (Short)"
      },
      {
        "t": "li",
        "text": "**Gold rod = 7 units**"
      },
      {
        "t": "li",
        "text": "**Cuts allowed = 2**"
      },
      {
        "t": "li",
        "text": "**Pieces = 1, 2, 4**"
      },
      {
        "t": "li",
        "text": "**Daily pay = 1 unit**"
      },
      {
        "t": "li",
        "text": "**Exchange (take back) allowed ❗**"
      },
      {
        "t": "h",
        "text": "🔑 MOST IMPORTANT RULE (Interview Point)"
      },
      {
        "t": "p",
        "text": "**👉 Employee ke paas hamesha “total paid till that day” ke barabar gold hona chahiye\n 👉 Not “aaj ka 1 unit alag se”**"
      },
      {
        "t": "h",
        "text": "📅 Day-by-Day (TAKE BACK CLEARLY SHOWN)"
      },
      {
        "t": "h",
        "text": "🔹 Day 1 (Total = 1)"
      },
      {
        "t": "li",
        "text": "**Give: 1**"
      },
      {
        "t": "li",
        "text": "**Employee has: 1**"
      },
      {
        "t": "h",
        "text": "🔹 Day 2 (Total = 2)"
      },
      {
        "t": "li",
        "text": "**Take back: 1**"
      },
      {
        "t": "li",
        "text": "**Give: 2**"
      },
      {
        "t": "li",
        "text": "**Employee has: 2**"
      },
      {
        "t": "p",
        "text": "**✔ Correct**"
      },
      {
        "t": "h",
        "text": "🔹 Day 3 (Total = 3)"
      },
      {
        "t": "li",
        "text": "**Give: 1 + 2**"
      },
      {
        "t": "li",
        "text": "**Employee has: 3**"
      },
      {
        "t": "p",
        "text": "**✔ No take back needed**"
      },
      {
        "t": "h",
        "text": "🔹 Day 4 (Total = 4)"
      },
      {
        "t": "li",
        "text": "**Take back: 1 + 2 (total 3)**"
      },
      {
        "t": "li",
        "text": "**Give: 4**"
      },
      {
        "t": "li",
        "text": "**Employee has: 4**"
      },
      {
        "t": "p",
        "text": "**✔ Correct**"
      },
      {
        "t": "h",
        "text": "🔹 Day 5 (Total = 5)"
      },
      {
        "t": "li",
        "text": "**Give: 4 + 1**"
      },
      {
        "t": "li",
        "text": "**Employee has: 5**"
      },
      {
        "t": "p",
        "text": "**✔ Correct**"
      },
      {
        "t": "h",
        "text": "🔹 Day 6 (🔥 CONFUSION POINT)"
      },
      {
        "t": "p",
        "text": "**Employee must end with TOTAL = 6**"
      },
      {
        "t": "p",
        "text": "**Employee currently has:**"
      },
      {
        "t": "li",
        "text": "**4 + 1 = 5**"
      },
      {
        "t": "p",
        "text": "**👉 We need 6**"
      },
      {
        "t": "li",
        "text": "**Take back: 1**"
      },
      {
        "t": "li",
        "text": "**Give: 2**"
      },
      {
        "t": "p",
        "text": "**Now employee has:**"
      },
      {
        "t": "li",
        "text": "**4 + 2 = 6**"
      },
      {
        "t": "p",
        "text": "**✔ This is where take back actually happens**"
      },
      {
        "t": "h",
        "text": "🔹 Day 7 (Total = 7)"
      },
      {
        "t": "li",
        "text": "**Give: 1**"
      },
      {
        "t": "li",
        "text": "**Employee has: 4 + 2 + 1 = 7**"
      },
      {
        "t": "p",
        "text": "**✔ Done**"
      },
      {
        "t": "h",
        "text": "📊 Summary Table (Crystal Clear)"
      },
      {
        "t": "table",
        "rows": [
          [
            "Day",
            "Take Back",
            "Give",
            "Final Total"
          ],
          [
            "1",
            "–",
            "1",
            "1"
          ],
          [
            "2",
            "1",
            "2",
            "2"
          ],
          [
            "3",
            "–",
            "1+2",
            "3"
          ],
          [
            "4",
            "1+2",
            "4",
            "4"
          ],
          [
            "5",
            "–",
            "4+1",
            "5"
          ],
          [
            "6",
            "1",
            "2",
            "6"
          ],
          [
            "7",
            "–",
            "1",
            "7"
          ]
        ]
      },
      {
        "t": "h",
        "text": "🗣️ Interview Line (IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**“Take back means exchanging earlier pieces so that the employee always ends the day with the correct total payment, not just the daily increment.”**"
      },
      {
        "t": "h",
        "text": "🌍 Real-World Example (Best One)"
      },
      {
        "t": "p",
        "text": "**“This is like giving salary using currency notes.\n If I earlier gave ₹1 notes, I can take them back and give a ₹2 note instead to keep the total correct.”**"
      },
      {
        "t": "h",
        "text": "🧩 Puzzle Recap (Short)"
      },
      {
        "t": "li",
        "text": "**Gold rod = 7 units**"
      },
      {
        "t": "li",
        "text": "**Cuts allowed = 2**"
      },
      {
        "t": "li",
        "text": "**Pieces = 1, 2, 4**"
      },
      {
        "t": "li",
        "text": "**Daily pay = 1 unit**"
      },
      {
        "t": "li",
        "text": "**Exchange (take back) allowed ❗**"
      },
      {
        "t": "h",
        "text": "🔑 MOST IMPORTANT RULE (Interview Point)"
      },
      {
        "t": "p",
        "text": "**👉 Employee ke paas hamesha “total paid till that day” ke barabar gold hona chahiye\n 👉 Not “aaj ka 1 unit alag se”**"
      },
      {
        "t": "h",
        "text": "📅 Day-by-Day (TAKE BACK CLEARLY SHOWN)"
      },
      {
        "t": "h",
        "text": "🔹 Day 1 (Total = 1)"
      },
      {
        "t": "li",
        "text": "**Give: 1**"
      },
      {
        "t": "li",
        "text": "**Employee has: 1**"
      },
      {
        "t": "h",
        "text": "🔹 Day 2 (Total = 2)"
      },
      {
        "t": "li",
        "text": "**Take back: 1**"
      },
      {
        "t": "li",
        "text": "**Give: 2**"
      },
      {
        "t": "li",
        "text": "**Employee has: 2**"
      },
      {
        "t": "p",
        "text": "**✔ Correct**"
      },
      {
        "t": "h",
        "text": "🔹 Day 3 (Total = 3)"
      },
      {
        "t": "li",
        "text": "**Give: 1 + 2**"
      },
      {
        "t": "li",
        "text": "**Employee has: 3**"
      },
      {
        "t": "p",
        "text": "**✔ No take back needed**"
      },
      {
        "t": "h",
        "text": "🔹 Day 4 (Total = 4)"
      },
      {
        "t": "li",
        "text": "**Take back: 1 + 2 (total 3)**"
      },
      {
        "t": "li",
        "text": "**Give: 4**"
      },
      {
        "t": "li",
        "text": "**Employee has: 4**"
      },
      {
        "t": "p",
        "text": "**✔ Correct**"
      },
      {
        "t": "h",
        "text": "🔹 Day 5 (Total = 5)"
      },
      {
        "t": "li",
        "text": "**Give: 4 + 1**"
      },
      {
        "t": "li",
        "text": "**Employee has: 5**"
      },
      {
        "t": "p",
        "text": "**✔ Correct**"
      },
      {
        "t": "h",
        "text": "🔹 Day 6 (🔥 CONFUSION POINT)"
      },
      {
        "t": "p",
        "text": "**Employee must end with TOTAL = 6**"
      },
      {
        "t": "p",
        "text": "**Employee currently has:**"
      },
      {
        "t": "li",
        "text": "**4 + 1 = 5**"
      },
      {
        "t": "p",
        "text": "**👉 We need 6**"
      },
      {
        "t": "li",
        "text": "**Take back: 1**"
      },
      {
        "t": "li",
        "text": "**Give: 2**"
      },
      {
        "t": "p",
        "text": "**Now employee has:**"
      },
      {
        "t": "li",
        "text": "**4 + 2 = 6**"
      },
      {
        "t": "p",
        "text": "**✔ This is where take back actually happens**"
      },
      {
        "t": "h",
        "text": "🔹 Day 7 (Total = 7)"
      },
      {
        "t": "li",
        "text": "**Give: 1**"
      },
      {
        "t": "li",
        "text": "**Employee has: 4 + 2 + 1 = 7**"
      },
      {
        "t": "p",
        "text": "**✔ Done**"
      },
      {
        "t": "table",
        "rows": [
          [
            "Day",
            "Take Back",
            "Give",
            "Final Total"
          ],
          [
            "1",
            "–",
            "1",
            "1"
          ],
          [
            "2",
            "1",
            "2",
            "2"
          ],
          [
            "3",
            "–",
            "1 + 2",
            "3"
          ],
          [
            "4",
            "1 + 2",
            "4",
            "4"
          ],
          [
            "5",
            "–",
            "4 + 1",
            "5"
          ],
          [
            "6",
            "1",
            "2",
            "6"
          ],
          [
            "7",
            "–",
            "1",
            "7"
          ]
        ]
      },
      {
        "t": "h",
        "text": "🗣️ Interview Line (IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**“Take back means exchanging earlier pieces so that the employee always ends the day with the correct total payment, not just the daily increment.”**"
      },
      {
        "t": "h",
        "text": "🌍 Real-World Example (Best One)"
      },
      {
        "t": "p",
        "text": "**“This is like giving salary using currency notes.\n If I earlier gave ₹1 notes, I can take them back and give a ₹2 note instead to keep the total correct.”**"
      },
      {
        "t": "img",
        "src": "image61.png"
      },
      {
        "t": "p",
        "text": "P2"
      },
      {
        "t": "p",
        "text": "PUZZLE 2)\n**🧩 Puzzle: Find the Fastest 3 Horses (25 Horses Problem)**"
      },
      {
        "t": "img",
        "src": "image19.jpg"
      },
      {
        "t": "h",
        "text": "🔍 Problem Statement (Clear & Interview Style)"
      },
      {
        "t": "li",
        "text": "You have **25 horses**"
      },
      {
        "t": "li",
        "text": "You want to find the **fastest 3 horses**"
      },
      {
        "t": "li",
        "text": "You can race **only 5 horses at a time**"
      },
      {
        "t": "li",
        "text": "You **do NOT have a stopwatch**"
      },
      {
        "t": "li",
        "text": "You only know **relative speed within a race**"
      },
      {
        "t": "li",
        "text": "❗ Question: **Minimum number of races required?**"
      },
      {
        "t": "h",
        "text": "✅ Final Answer (One-Line)"
      },
      {
        "t": "p",
        "text": "👉 **Minimum races required = 7**"
      },
      {
        "t": "h",
        "text": "🧠 Step-by-Step Thinking (THIS IS WHAT INTERVIEWER WANTS)"
      },
      {
        "t": "h",
        "text": "🏁 Step 1: First 5 Races (Group Race)"
      },
      {
        "t": "p",
        "text": "Divide 25 horses into **5 groups**:"
      },
      {
        "t": "li",
        "text": "Group A"
      },
      {
        "t": "li",
        "text": "Group B"
      },
      {
        "t": "li",
        "text": "Group C"
      },
      {
        "t": "li",
        "text": "Group D"
      },
      {
        "t": "li",
        "text": "Group E"
      },
      {
        "t": "p",
        "text": "Race each group once."
      },
      {
        "t": "p",
        "text": "📊 After 5 races:"
      },
      {
        "t": "li",
        "text": "You know **ranking inside each group**"
      },
      {
        "t": "li",
        "text": "Total races so far = **5**"
      },
      {
        "t": "h",
        "text": "🏁 Step 2: Winners’ Race (6th Race)"
      },
      {
        "t": "p",
        "text": "Now race **the winners** of each group:"
      },
      {
        "t": "li",
        "text": "A1, B1, C1, D1, E1"
      },
      {
        "t": "p",
        "text": "Suppose result is:"
      },
      {
        "t": "p",
        "text": "**A1 > B1 > C1 > D1 > E1**"
      },
      {
        "t": "p",
        "text": "Now we know:"
      },
      {
        "t": "li",
        "text": "Group A is the **fastest group**"
      },
      {
        "t": "li",
        "text": "Group E is the **slowest**"
      },
      {
        "t": "p",
        "text": "❌ Eliminate:"
      },
      {
        "t": "li",
        "text": "All horses in **Group E**"
      },
      {
        "t": "li",
        "text": "D2, D3, D4, D5"
      },
      {
        "t": "li",
        "text": "C3, C4, C5"
      },
      {
        "t": "li",
        "text": "B4, B5"
      },
      {
        "t": "li",
        "text": "A5"
      },
      {
        "t": "h",
        "text": "🏁 Step 3: Final Race (7th Race)"
      },
      {
        "t": "p",
        "text": "Now only **5 horses can still be in top 3**:"
      },
      {
        "t": "li",
        "text": "A1"
      },
      {
        "t": "li",
        "text": "A2"
      },
      {
        "t": "li",
        "text": "A3"
      },
      {
        "t": "li",
        "text": "B1"
      },
      {
        "t": "li",
        "text": "B2"
      },
      {
        "t": "li",
        "text": "C1"
      },
      {
        "t": "p",
        "text": "Wait — we can race only 5 at a time."
      },
      {
        "t": "p",
        "text": "But:"
      },
      {
        "t": "li",
        "text": "**A1 is definitely fastest**"
      },
      {
        "t": "li",
        "text": "So remove A1 from race"
      },
      {
        "t": "p",
        "text": "Final race among:\n 👉 **A2, A3, B1, B2, C1**"
      },
      {
        "t": "p",
        "text": "🏆 Top 2 from this race + A1 = **Fastest 3 Horses**"
      },
      {
        "t": "h",
        "text": "🧠 WHY ONLY THESE 6 MATTER (Interview Gold)"
      },
      {
        "t": "p",
        "text": "Because:"
      },
      {
        "t": "li",
        "text": "Any horse slower than:"
      },
      {
        "t": "li",
        "text": "A3 ❌"
      },
      {
        "t": "li",
        "text": "B2 ❌"
      },
      {
        "t": "li",
        "text": "C1 ❌\n can never reach top 3 overall."
      },
      {
        "t": "table",
        "rows": [
          [
            "Step",
            "Races"
          ],
          [
            "Group races (5 groups)",
            "5"
          ],
          [
            "Winners race (A1-E1)",
            "1"
          ],
          [
            "Final deciding race",
            "1"
          ],
          [
            "Total",
            "7"
          ]
        ]
      },
      {
        "t": "h",
        "text": "🗣️ Interview-Ready Answer (Say This)"
      },
      {
        "t": "p",
        "text": "“First, I divide the 25 horses into 5 groups and race each group once.\n Then I race the winners of each group to find the fastest group.\n Based on relative rankings, I eliminate impossible candidates.\n Finally, I race the remaining contenders to determine the fastest three.\n This requires exactly 7 races.”"
      },
      {
        "t": "p",
        "text": "** What skill does this puzzle test?**"
      },
      {
        "t": "li",
        "text": "Logical elimination"
      },
      {
        "t": "li",
        "text": "Decision tree optimization"
      },
      {
        "t": "li",
        "text": "Problem decomposition"
      },
      {
        "t": "img",
        "src": "image182.png"
      },
      {
        "t": "img",
        "src": "image21.png"
      },
      {
        "t": "img",
        "src": "image137.png"
      },
      {
        "t": "h",
        "text": "🗣️ Interview Answer (Say This EXACTLY)"
      },
      {
        "t": "h",
        "text": "“Even though a horse may not have raced directly, diagonal elimination works because relative ordering propagates through winners. A horse that lost to a slower group winner cannot outrank horses that beat that winner.”"
      },
      {
        "t": "h",
        "text": "#FOR ANY NO OF HORSES:"
      },
      {
        "t": "h",
        "text": "“For any number of horses, I first divide them into groups of five and race each group.\n Then I recursively race the group winners to identify the fastest group.\n Using diagonal elimination, only a small subset can still qualify for the top three.\n A final race among those candidates determines the result.”"
      },
      {
        "t": "p",
        "text": "P3"
      },
      {
        "t": "p",
        "text": "PUZZLE-> 3)"
      }
    ]
  },
  {
    "id": "p2",
    "title": "Find the Fastest 3 Horses (25 Horses Problem)",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "img",
        "src": "image19.jpg"
      },
      {
        "t": "h",
        "text": "🔍 Problem Statement (Clear & Interview Style)"
      },
      {
        "t": "li",
        "text": "You have **25 horses**"
      },
      {
        "t": "li",
        "text": "You want to find the **fastest 3 horses**"
      },
      {
        "t": "li",
        "text": "You can race **only 5 horses at a time**"
      },
      {
        "t": "li",
        "text": "You **do NOT have a stopwatch**"
      },
      {
        "t": "li",
        "text": "You only know **relative speed within a race**"
      },
      {
        "t": "li",
        "text": "❗ Question: **Minimum number of races required?**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "✅ Final Answer (One-Line)"
      },
      {
        "t": "p",
        "text": "👉 **Minimum races required = 7**"
      },
      {
        "t": "h",
        "text": "🧠 Step-by-Step Thinking (THIS IS WHAT INTERVIEWER WANTS)"
      },
      {
        "t": "h",
        "text": "🏁 Step 1: First 5 Races (Group Race)"
      },
      {
        "t": "p",
        "text": "Divide 25 horses into **5 groups**:"
      },
      {
        "t": "li",
        "text": "Group A"
      },
      {
        "t": "li",
        "text": "Group B"
      },
      {
        "t": "li",
        "text": "Group C"
      },
      {
        "t": "li",
        "text": "Group D"
      },
      {
        "t": "li",
        "text": "Group E"
      },
      {
        "t": "p",
        "text": "Race each group once."
      },
      {
        "t": "p",
        "text": "📊 After 5 races:"
      },
      {
        "t": "li",
        "text": "You know **ranking inside each group**"
      },
      {
        "t": "li",
        "text": "Total races so far = **5**"
      },
      {
        "t": "h",
        "text": "🏁 Step 2: Winners’ Race (6th Race)"
      },
      {
        "t": "p",
        "text": "Now race **the winners** of each group:"
      },
      {
        "t": "li",
        "text": "A1, B1, C1, D1, E1"
      },
      {
        "t": "p",
        "text": "Suppose result is:"
      },
      {
        "t": "p",
        "text": "**A1 > B1 > C1 > D1 > E1**"
      },
      {
        "t": "p",
        "text": "Now we know:"
      },
      {
        "t": "li",
        "text": "Group A is the **fastest group**"
      },
      {
        "t": "li",
        "text": "Group E is the **slowest**"
      },
      {
        "t": "p",
        "text": "❌ Eliminate:"
      },
      {
        "t": "li",
        "text": "All horses in **Group E**"
      },
      {
        "t": "li",
        "text": "D2, D3, D4, D5"
      },
      {
        "t": "li",
        "text": "C3, C4, C5"
      },
      {
        "t": "li",
        "text": "B4, B5"
      },
      {
        "t": "li",
        "text": "A5"
      },
      {
        "t": "h",
        "text": "🏁 Step 3: Final Race (7th Race)"
      },
      {
        "t": "p",
        "text": "Now only **5 horses can still be in top 3**:"
      },
      {
        "t": "li",
        "text": "A1"
      },
      {
        "t": "li",
        "text": "A2"
      },
      {
        "t": "li",
        "text": "A3"
      },
      {
        "t": "li",
        "text": "B1"
      },
      {
        "t": "li",
        "text": "B2"
      },
      {
        "t": "li",
        "text": "C1"
      },
      {
        "t": "p",
        "text": "Wait — we can race only 5 at a time."
      },
      {
        "t": "p",
        "text": "But:"
      },
      {
        "t": "li",
        "text": "**A1 is definitely fastest**"
      },
      {
        "t": "li",
        "text": "So remove A1 from race"
      },
      {
        "t": "p",
        "text": "Final race among:\n 👉 **A2, A3, B1, B2, C1**"
      },
      {
        "t": "p",
        "text": "🏆 Top 2 from this race + A1 = **Fastest 3 Horses**"
      },
      {
        "t": "h",
        "text": "🧠 WHY ONLY THESE 6 MATTER (Interview Gold)"
      },
      {
        "t": "p",
        "text": "Because:"
      },
      {
        "t": "li",
        "text": "Any horse slower than:"
      },
      {
        "t": "li",
        "text": "A3 ❌"
      },
      {
        "t": "li",
        "text": "B2 ❌"
      },
      {
        "t": "li",
        "text": "C1 ❌\n can never reach top 3 overall."
      },
      {
        "t": "table",
        "rows": [
          [
            "Step",
            "Races"
          ],
          [
            "Group races (5 groups)",
            "5"
          ],
          [
            "Winners race (A1-E1)",
            "1"
          ],
          [
            "Final deciding race",
            "1"
          ],
          [
            "Total",
            "7"
          ]
        ]
      },
      {
        "t": "h",
        "text": "🗣️ Interview-Ready Answer (Say This)"
      },
      {
        "t": "p",
        "text": "“First, I divide the 25 horses into 5 groups and race each group once.\n Then I race the winners of each group to find the fastest group.\n Based on relative rankings, I eliminate impossible candidates.\n Finally, I race the remaining contenders to determine the fastest three.\n This requires exactly 7 races.”"
      },
      {
        "t": "p",
        "text": "** What skill does this puzzle test?**"
      },
      {
        "t": "li",
        "text": "Logical elimination"
      },
      {
        "t": "li",
        "text": "Decision tree optimization"
      },
      {
        "t": "li",
        "text": "Problem decomposition"
      },
      {
        "t": "img",
        "src": "image182.png"
      },
      {
        "t": "img",
        "src": "image21.png"
      },
      {
        "t": "img",
        "src": "image137.png"
      },
      {
        "t": "h",
        "text": "🗣️ Interview Answer (Say This EXACTLY)"
      },
      {
        "t": "h",
        "text": "“Even though a horse may not have raced directly, diagonal elimination works because relative ordering propagates through winners. A horse that lost to a slower group winner cannot outrank horses that beat that winner.”"
      },
      {
        "t": "h",
        "text": "#FOR ANY NO OF HORSES:"
      },
      {
        "t": "h",
        "text": "“For any number of horses, I first divide them into groups of five and race each group.\n Then I recursively race the group winners to identify the fastest group.\n Using diagonal elimination, only a small subset can still qualify for the top three.\n A final race among those candidates determines the result.”"
      },
      {
        "t": "p",
        "text": "M3"
      }
    ]
  },
  {
    "id": "p3",
    "title": "Finding the Injection for Anesthesia",
    "category": "Poison, Pills & Testing",
    "problem": [
      {
        "t": "h",
        "text": "In a Medical Laboratory:"
      },
      {
        "t": "h",
        "text": "You have 240 injections, and exactly one of them is an anesthetic."
      },
      {
        "t": "h",
        "text": "You also have 5 rats to help identify which injection is the anesthetic."
      },
      {
        "t": "h",
        "text": "How it works"
      },
      {
        "t": "h",
        "text": "If a rat receives the anesthetic injection, it will faint sometime within 24 hours after that injection (the exact time is unknown; could be any time ≤ 24 hours)."
      },
      {
        "t": "h",
        "text": "Once a rat faints, it cannot be used again."
      },
      {
        "t": "h",
        "text": "Multiple injections can be given to a rat at different times until it faints."
      },
      {
        "t": "h",
        "text": "How can you design a testing strategy to find the anesthetic injection within 48 hours using only 5 rats?"
      },
      {
        "t": "img",
        "src": "image6.png"
      },
      {
        "t": "h",
        "text": "Rules:"
      },
      {
        "t": "h",
        "text": "You have a total of 48 hours to identify the single anesthetic injection."
      },
      {
        "t": "h",
        "text": "You may observe and record fainting times during the 48-hour period."
      },
      {
        "t": "h",
        "text": "You must guarantee identification of the anesthetic within the 48 hours (i.e., the scheme must work in the worst case)."
      },
      {
        "t": "img",
        "src": "image96.jpg"
      },
      {
        "t": "img",
        "src": "image178.png"
      },
      {
        "t": "h",
        "text": "🔹 Problem Simple Words Me"
      },
      {
        "t": "h",
        "text": "240 injections"
      },
      {
        "t": "h",
        "text": "Sirf 1 injection anesthesia wali"
      },
      {
        "t": "h",
        "text": "5 rats"
      },
      {
        "t": "h",
        "text": "Agar rat ko anesthesia mile → 24 hours ke andar faint"
      },
      {
        "t": "h",
        "text": "Faint hone ke baad rat useless"
      },
      {
        "t": "h",
        "text": "48 hours total time"
      },
      {
        "t": "h",
        "text": "Goal: guarantee correct injection find karni hai"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🧠 KEY IDEA (ONE LINE)"
      },
      {
        "t": "h",
        "text": "Hum rat ka faint hona “YES/NO” nahi, balki “KAB faint hua” use karte hain."
      },
      {
        "t": "h",
        "text": "👉 Time = extra information\n 👉 Isi se 240 injections possible ho jaati hain"
      },
      {
        "t": "h",
        "text": "🧠 BIG BRAIN CONCEPT (Interview Gold)"
      },
      {
        "t": "h",
        "text": "Normally:"
      },
      {
        "t": "h",
        "text": "Rat = 2 states (faint / not faint)"
      },
      {
        "t": "h",
        "text": "Yahan:"
      },
      {
        "t": "h",
        "text": "Rat = 3 states"
      },
      {
        "t": "h",
        "text": "❌ Nahi faint hua (0)"
      },
      {
        "t": "h",
        "text": "🕐 Day-1 me faint hua (1)"
      },
      {
        "t": "h",
        "text": "🕑 Day-2 me faint hua (2)"
      },
      {
        "t": "h",
        "text": "👉 Each rat = 3 possibilities"
      },
      {
        "t": "h",
        "text": "🔢 Total Combinations"
      },
      {
        "t": "h",
        "text": "3 × 3 × 3 × 3 × 3 = 3⁵ = 243"
      },
      {
        "t": "h",
        "text": "👉 240 injections cover ho jaati hain ✔️"
      },
      {
        "t": "h",
        "text": "👉 Matlab 1 rat = 3 states"
      },
      {
        "t": "table",
        "rows": [
          [
            "Outcome",
            "Meaning"
          ],
          [
            "0",
            "Rat faint nahi hua (Did not faint)"
          ],
          [
            "1",
            "Rat Day-1 (first 24 hours) me faint hua (Fainted on Day 1)"
          ],
          [
            "2",
            "Rat Day-2 (next 24 hours) me faint hua (Fainted on Day 2)"
          ]
        ]
      },
      {
        "t": "h",
        "text": "🐀🐀🐀🐀🐀 Ab 5 rats hain"
      },
      {
        "t": "h",
        "text": "Har rat independently 3 states de sakta hai."
      },
      {
        "t": "h",
        "text": "So total possibilities ="
      },
      {
        "t": "h",
        "text": "Rat1 × Rat2 × Rat3 × Rat4 × Rat5"
      },
      {
        "t": "h",
        "text": "= 3 × 3 × 3 × 3 × 3"
      },
      {
        "t": "h",
        "text": "= 3⁵"
      },
      {
        "t": "h",
        "text": "= 243"
      },
      {
        "t": "h",
        "text": "🧠 FEEL ke liye simple example"
      },
      {
        "t": "h",
        "text": "1 rat hota:"
      },
      {
        "t": "h",
        "text": "👉 3 injections max identify kar sakte\n (0, 1, 2)"
      },
      {
        "t": "h",
        "text": "2 rats hote:"
      },
      {
        "t": "h",
        "text": "👉 3 × 3 = 9 injections\n (00, 01, 02, 10, 11, 12, 20, 21, 22)"
      },
      {
        "t": "h",
        "text": "3 rats hote:"
      },
      {
        "t": "h",
        "text": "👉 3³ = 27 injections"
      },
      {
        "t": "h",
        "text": "5 rats:"
      },
      {
        "t": "h",
        "text": "👉 3⁵ = 243 injections ✅"
      },
      {
        "t": "h",
        "text": "🎯 Puzzle me 240 injections kyu possible hain?"
      },
      {
        "t": "h",
        "text": "Because:"
      },
      {
        "t": "h",
        "text": "243 (capacity) > 240 (actual injections)"
      },
      {
        "t": "h",
        "text": "👉 Har injection ko unique ternary (0,1,2) code mil jata hai\n 👉 Guaranteed identification ho jaata hai"
      },
      {
        "t": "h",
        "text": "🗣️ Interview me kaise bolega (IMPORTANT)"
      },
      {
        "t": "h",
        "text": "“Each rat provides three distinct outcomes based on fainting time.\n With five rats, the total distinguishable combinations are 3 to the power of 5, which is 243, sufficient to uniquely identify the anesthetic among 240 injections.”"
      },
      {
        "t": "h",
        "text": "💎 One-Line Killer"
      },
      {
        "t": "h",
        "text": "“The key is that time converts a binary outcome into a ternary one.”"
      },
      {
        "t": "p",
        "text": "P4"
      },
      {
        "t": "p",
        "text": "PUZZLE 4)"
      }
    ]
  },
  {
    "id": "p4",
    "title": "3 Bulbs and 3 Switches",
    "category": "Bulbs, Switches & Lights",
    "problem": [
      {
        "t": "p",
        "text": "There is a closed room with three light bulbs inside."
      },
      {
        "t": "li",
        "text": "You have a closed room containing three light bulbs."
      },
      {
        "t": "li",
        "text": "Outside the room, there are three switches, each connected to exactly one bulb (but you don’t know the mapping)."
      },
      {
        "t": "li",
        "text": "You can toggle the switches (on/off) in any way before entering the room."
      },
      {
        "t": "li",
        "text": "You may open the door and enter the room only once."
      },
      {
        "t": "li",
        "text": "Once inside, you cannot touch the switches again — you can only observe the bulbs."
      },
      {
        "t": "p",
        "text": "**How can you determine which switch controls which bulb in a single visit?**"
      },
      {
        "t": "img",
        "src": "image184.png"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution:**\nLet the three switches be **X**, **Y**, and **Z**, and let them control three light bulbs inside the room."
      },
      {
        "t": "li",
        "text": "Turn on switch **X** and leave it on for **5 to 10 minutes**."
      },
      {
        "t": "li",
        "text": "After that time, turn off switch **X **and turn on switch **Y.**"
      },
      {
        "t": "li",
        "text": "Leave switch **Z** off the entire time."
      },
      {
        "t": "li",
        "text": "Now open the door and enter the room."
      },
      {
        "t": "p",
        "text": "Inside the room, observe the following:"
      },
      {
        "t": "li",
        "text": "The bulb that is **on** is connected to **switch Y** (since it was turned on most recently)."
      },
      {
        "t": "li",
        "text": "Of the remaining two bulbs:"
      },
      {
        "t": "li",
        "text": "The bulb that is **off but warm** is connected to **switch X** (it was on earlier and is still warm)."
      },
      {
        "t": "li",
        "text": "The bulb that is **off and cold** is connected to **switch Z** (it was never turned on)."
      },
      {
        "t": "h",
        "text": "🗣️ Interview-Ready Answer (Exact Bolna)"
      },
      {
        "t": "p",
        "text": "“I would turn on the first switch for a few minutes and then turn it off.\n Then I turn on the second switch and leave the third off.\n When I enter the room, the bulb that is on corresponds to the second switch,\n the bulb that is off but warm corresponds to the first switch,\n and the bulb that is off and cold corresponds to the third switch.”"
      },
      {
        "t": "p",
        "text": "P5"
      },
      {
        "t": "p",
        "text": "P5)"
      }
    ]
  },
  {
    "id": "p5",
    "title": "Camel and Banana Puzzle",
    "category": "River Crossing",
    "problem": [
      {
        "t": "img",
        "src": "image83.png"
      },
      {
        "t": "img",
        "src": "image188.png"
      },
      {
        "t": "img",
        "src": "image234.jpg"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 CORE FEEL (1 line – yaad rakh)"
      },
      {
        "t": "p",
        "text": "**Camel ek trip me sirf 1000 le ja sakta hai,\n lekin multiple trips me bananas ek jagah par jama ho jaate hain.\n Jab bananas 2000 ho jaate hain, ek extra return trip khatam ho jaata hai — isliye wahi turning point hai.**"
      },
      {
        "t": "h",
        "text": "🧠 AB 2000 BANANAS KYU? (CRYSTAL CLEAR)"
      },
      {
        "t": "h",
        "text": "Jab 3000 bananas hote hain:"
      },
      {
        "t": "li",
        "text": "**Camel ko:**"
      },
      {
        "t": "li",
        "text": "**3 baar aage jaana**"
      },
      {
        "t": "li",
        "text": "**2 baar wapas aana**"
      },
      {
        "t": "li",
        "text": "**👉 Total 5 trips**"
      },
      {
        "t": "li",
        "text": "**👉 Har km = 5 bananas waste**"
      },
      {
        "t": "p",
        "text": "**Camel dukhi 😵‍💫**"
      },
      {
        "t": "h",
        "text": "Jab bananas 2000 reh jaate hain:"
      },
      {
        "t": "li",
        "text": "**Sirf 2 boriyan bachi**"
      },
      {
        "t": "li",
        "text": "**Camel ko:**"
      },
      {
        "t": "li",
        "text": "**2 baar aage**"
      },
      {
        "t": "li",
        "text": "**1 baar wapas**"
      },
      {
        "t": "li",
        "text": "**👉 Total 3 trips**"
      },
      {
        "t": "li",
        "text": "**👉 Har km = 3 bananas waste**"
      },
      {
        "t": "p",
        "text": "**Camel thoda khush 😌**"
      },
      {
        "t": "p",
        "text": "**👉 Isliye 2000 koi assumption nahi\n 👉 2000 wo point hai jahan ek extra wapas aana band ho jaata hai**"
      },
      {
        "t": "h",
        "text": "📍 200 km KYU?"
      },
      {
        "t": "li",
        "text": "**3000 phase me loss = 5 bananas per km**"
      },
      {
        "t": "li",
        "text": "**200 km × 5 = 1000 bananas waste**"
      },
      {
        "t": "li",
        "text": "**3000 − 1000 = 2000 bananas**"
      },
      {
        "t": "p",
        "text": "**👉 Yahin pe strategy change karte hain**"
      },
      {
        "t": "h",
        "text": "🧠 NEXT TURNING POINT: 1000 BANANAS"
      },
      {
        "t": "h",
        "text": "Jab 2000 → 1000:"
      },
      {
        "t": "li",
        "text": "**Trips:**"
      },
      {
        "t": "li",
        "text": "**2 aage + 1 wapas = 3**"
      },
      {
        "t": "li",
        "text": "**Loss = 3 bananas per km**"
      },
      {
        "t": "li",
        "text": "**Distance = 333 km**"
      },
      {
        "t": "li",
        "text": "**Loss = 333 × 3 ≈ 1000**"
      },
      {
        "t": "p",
        "text": "**👉 Ab sirf 1000 bananas bache**"
      },
      {
        "t": "h",
        "text": "🏁 FINAL LEG (SABSE EASY)"
      },
      {
        "t": "li",
        "text": "**Ab camel:**"
      },
      {
        "t": "li",
        "text": "**Ek hi baar jaata hai**"
      },
      {
        "t": "li",
        "text": "**Wapas nahi aata**"
      },
      {
        "t": "li",
        "text": "**Distance left = 467 km**"
      },
      {
        "t": "li",
        "text": "**Loss = 467 bananas**"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "**1000 − 467 = 🎯 533 bananas**"
      },
      {
        "t": "h",
        "text": "🏆 FINAL RESULT"
      },
      {
        "t": "p",
        "text": "**Maximum bananas that reach the destination = 533**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW ME EXACT AISE BOLNA (SCRIPT)"
      },
      {
        "t": "p",
        "text": "**“Although the camel can carry only 1000 bananas at a time, it can accumulate bananas at intermediate points using multiple trips.\n Initially, transporting 3000 bananas requires five trips per kilometer, causing high loss.\n Once the bananas reduce to 2000, one unnecessary return trip disappears, reducing the loss rate.\n Using this strategy in stages, the maximum number of bananas that can reach the destination is 533.”**"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER (Agar interviewer rush kare)"
      },
      {
        "t": "p",
        "text": "**“Two thousand bananas is the point where one return trip disappears, which minimizes waste.”**"
      },
      {
        "t": "h",
        "text": "🧠 LAST FEEL LINE (CONFIDENCE BOOST)"
      },
      {
        "t": "p",
        "text": "**“Capacity limits a single trip, not accumulation over multiple trips.”**"
      },
      {
        "t": "h",
        "text": "🔢 DISTANCE CALCULATION (SEEDHA)"
      },
      {
        "t": "h",
        "text": "Total distance = 1000 km"
      },
      {
        "t": "p",
        "text": "**Humne pehle do stages me chal liya:**"
      },
      {
        "t": "p",
        "text": "**1️⃣ Stage 1: 200 km\n (jab 3000 → 2000 bananas hue)**"
      },
      {
        "t": "p",
        "text": "**2️⃣ Stage 2: 333 km\n (jab 2000 → 1000 bananas hue)**"
      },
      {
        "t": "h",
        "text": "➖ Ab remaining distance"
      },
      {
        "t": "p",
        "text": "**Remaining = 1000 − (200 + 333)**"
      },
      {
        "t": "p",
        "text": "**           = 1000 − 533**"
      },
      {
        "t": "p",
        "text": "**           = ✅ 467 km**"
      },
      {
        "t": "h",
        "text": "🧠 FEEL WALI LINE"
      },
      {
        "t": "p",
        "text": "**“First 533 km tak bananas ko optimize karte hue aaye,\n ab last 467 km ek hi trip me jaana hai.”**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview me exact bolna"
      },
      {
        "t": "p",
        "text": "**“After covering 200 km in the first stage and 333 km in the second stage, the remaining distance is 467 km, which the camel travels in a single trip.”**"
      },
      {
        "t": "h",
        "text": "🔑 ONE-LINER"
      },
      {
        "t": "p",
        "text": "**“467 km is simply the remaining distance after the two optimization stages.”**"
      },
      {
        "t": "p",
        "text": "P6"
      }
    ]
  },
  {
    "id": "p6",
    "title": "Find the Jar with Contaminated Pills",
    "category": "Poison, Pills & Testing",
    "problem": [
      {
        "t": "img",
        "src": "image146.png"
      },
      {
        "t": "img",
        "src": "image39.png"
      },
      {
        "t": "h",
        "text": "🔹 Problem (Simple Language)"
      },
      {
        "t": "li",
        "text": "**5 jars** hain"
      },
      {
        "t": "li",
        "text": "Normal pill = **10 grams**"
      },
      {
        "t": "li",
        "text": "**1 jar contaminated** hai → uske pills = **9 grams**"
      },
      {
        "t": "li",
        "text": "Digital scale ko **sirf 1 baar** use kar sakte ho"
      },
      {
        "t": "li",
        "text": "Goal: **kaunsa jar contaminated hai**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🧠 CORE IDEA (FEEL FIRST)"
      },
      {
        "t": "p",
        "text": "**Hum scale se “kaunsa jar” nahi,\n “kitna weight kam hai” ye puch rahe hain.**"
      },
      {
        "t": "p",
        "text": "Weight ka difference hi answer ban jaata hai 🔥"
      },
      {
        "t": "h",
        "text": "🪜 STEP-BY-STEP STORY (NO CONFUSION)"
      },
      {
        "t": "h",
        "text": "🎒 Step 1: Pills uthao (SMARTLY)"
      },
      {
        "t": "li",
        "text": "Jar 1 se → **1 pill**"
      },
      {
        "t": "li",
        "text": "Jar 2 se → **2 pills**"
      },
      {
        "t": "li",
        "text": "Jar 3 se → **3 pills**"
      },
      {
        "t": "li",
        "text": "Jar 4 se → **4 pills**"
      },
      {
        "t": "li",
        "text": "Jar 5 se → **5 pills**"
      },
      {
        "t": "p",
        "text": "👉 Total pills = **1+2+3+4+5 = 15 pills**"
      },
      {
        "t": "h",
        "text": "⚖️ Step 2: Scale pe rakho (ONLY ONCE)"
      },
      {
        "t": "p",
        "text": "Agar sab pills normal hote:"
      },
      {
        "t": "p",
        "text": "15 × 10 = 150 grams"
      },
      {
        "t": "p",
        "text": "Lekin ek jar contaminated hai,\n toh weight **150 se kam aayega**."
      },
      {
        "t": "h",
        "text": "🔍 Step 3: Weight se jawab kaise milega?"
      },
      {
        "t": "p",
        "text": "Har contaminated pill **1 gram kam** hoti hai."
      },
      {
        "t": "table",
        "rows": [
          [
            "Scale Reading",
            "Missing Weight",
            "Contaminated Jar"
          ],
          [
            "149",
            "1 gram",
            "Jar 1"
          ],
          [
            "148",
            "2 grams",
            "Jar 2"
          ],
          [
            "147",
            "3 grams",
            "Jar 3"
          ],
          [
            "146",
            "4 grams",
            "Jar 4"
          ],
          [
            "145",
            "5 grams",
            "Jar 5"
          ]
        ]
      },
      {
        "t": "p",
        "text": "👉 **Jitna gram kam, utne number ka jar contaminated**"
      },
      {
        "t": "h",
        "text": "🔥 FEEL WALI LINE (IMPORTANT)"
      },
      {
        "t": "p",
        "text": "“I encode the jar number into the number of pills taken, so the weight difference directly identifies the jar.”"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW ME EXACT AISE BOLNA (SCRIPT)"
      },
      {
        "t": "p",
        "text": "“I take a different number of pills from each jar: one from the first, two from the second, and so on.\n If all pills were normal, the total weight would be 150 grams.\n Since contaminated pills weigh one gram less, the deficit in the measured weight directly tells me which jar is contaminated.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER (Agar interviewer rush kare)"
      },
      {
        "t": "p",
        "text": "**“The missing weight uniquely maps to the jar number.”**"
      },
      {
        "t": "p",
        "text": "P7"
      },
      {
        "t": "p",
        "text": "PUZZLE-07)"
      }
    ]
  },
  {
    "id": "p7",
    "title": "100 Prisoners with Red / Black Hats",
    "category": "Hats & Prisoners",
    "problem": [
      {
        "t": "img",
        "src": "image162.jpg"
      },
      {
        "t": "img",
        "src": "image17.png"
      },
      {
        "t": "h",
        "text": "🔹 Problem (1 line me samajh)"
      },
      {
        "t": "li",
        "text": "100 prisoners line me khade"
      },
      {
        "t": "li",
        "text": "Har ek ke sir pe **Red ya Black** hat"
      },
      {
        "t": "li",
        "text": "Apna hat nahi dekh sakte, sirf aage walon ke"
      },
      {
        "t": "li",
        "text": "Last prisoner se guessing start hoti hai"
      },
      {
        "t": "li",
        "text": "Galat bola → dead 😬"
      },
      {
        "t": "li",
        "text": "Pehle se strategy discuss kar sakte hain"
      },
      {
        "t": "p",
        "text": "👉 Goal: **maximum log bachana**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "✅ FINAL ANSWER (Direct)"
      },
      {
        "t": "p",
        "text": "👉 **Maximum 99 prisoners guaranteed bach sakte hain**\n 👉 **1 prisoner (last wala) 50–50 chance pe hota hai**"
      },
      {
        "t": "h",
        "text": "🧠 CORE IDEA (FEEL THIS 🔥)"
      },
      {
        "t": "p",
        "text": "**Last prisoner apni guess se apni jaan nahi,\n baaki 99 logon ke liye INFORMATION bhejta hai.**"
      },
      {
        "t": "p",
        "text": "Information = **even / odd (parity)**"
      },
      {
        "t": "h",
        "text": "🧠 STRATEGY (STEP-BY-STEP, EASY)"
      },
      {
        "t": "h",
        "text": "🔹 Pre-plan (sab prisoners decide karte hain)"
      },
      {
        "t": "li",
        "text": "“Red” bolega matlab → **even number of red hats**"
      },
      {
        "t": "li",
        "text": "“Black” bolega matlab → **odd number of red hats**"
      },
      {
        "t": "p",
        "text": "(ye sirf signal hai, actual color ka claim nahi)"
      },
      {
        "t": "h",
        "text": "🧍 Prisoner 100 (last in line)"
      },
      {
        "t": "li",
        "text": "Wo aage **99 hats** dekh sakta hai"
      },
      {
        "t": "li",
        "text": "Wo **count karta hai kitne RED hats hain**"
      },
      {
        "t": "h",
        "text": "Case 1:"
      },
      {
        "t": "li",
        "text": "Agar red hats **even** hain → bole **“Red”**"
      },
      {
        "t": "h",
        "text": "Case 2:"
      },
      {
        "t": "li",
        "text": "Agar red hats **odd** hain → bole **“Black”**"
      },
      {
        "t": "p",
        "text": "⚠️ Uski jaan 50–50 pe hai\n lekin uska jawab **pure system ko start karta hai**"
      },
      {
        "t": "h",
        "text": "🧍 Prisoner 99 (next)"
      },
      {
        "t": "p",
        "text": "Ab uske paas 2 info hain:"
      },
      {
        "t": "li",
        "text": "Prisoner 100 ne kya bola (even/odd signal)"
      },
      {
        "t": "li",
        "text": "Wo aage ke hats dekh raha hai"
      },
      {
        "t": "h",
        "text": "Example:"
      },
      {
        "t": "li",
        "text": "Prisoner 100 bola **“Red”** → even red hats expected"
      },
      {
        "t": "li",
        "text": "Prisoner 99 ne aage **odd red hats** dekhe"
      },
      {
        "t": "p",
        "text": "👉 To balance even banane ke liye\n 👉 **uska apna hat RED hona chahiye**"
      },
      {
        "t": "p",
        "text": "Isliye wo **correct bol deta hai** ✅"
      },
      {
        "t": "h",
        "text": "🧍 Prisoner 98, 97, …, 1"
      },
      {
        "t": "li",
        "text": "Har prisoner:"
      },
      {
        "t": "li",
        "text": "Signal yaad rakhta hai"
      },
      {
        "t": "li",
        "text": "Aage ke hats count karta hai"
      },
      {
        "t": "li",
        "text": "Pehle prisoners ke answers ko subtract karta hai"
      },
      {
        "t": "li",
        "text": "Aur **apna hat 100% sure bolta hai**"
      },
      {
        "t": "p",
        "text": "👉 Is tarah **99 prisoners guaranteed survive**"
      },
      {
        "t": "h",
        "text": "🔥 STORY FEEL (YAAD RAKHNE KE LIYE)"
      },
      {
        "t": "p",
        "text": "Soch:"
      },
      {
        "t": "p",
        "text": "Last prisoner bolta hai\n “Bhai log, total red hats EVEN hain”"
      },
      {
        "t": "p",
        "text": "Ab har next prisoner kehta hai:"
      },
      {
        "t": "p",
        "text": "“Agar mujhe dekh ke count bigad raha hai,\n toh meri hat hi problem hai.”"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW ME EXACT AISE BOLNA (FINAL SCRIPT)"
      },
      {
        "t": "p",
        "text": "“The prisoners agree on a parity-based strategy.\n The last prisoner announces whether the number of red hats he sees is even or odd.\n Although his own survival is uncertain, this information allows each subsequent prisoner to deduce their own hat color with certainty.\n Using this method, 99 prisoners are guaranteed to survive.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER (INTERVIEWER IMPRESSED)"
      },
      {
        "t": "p",
        "text": "**“One prisoner sacrifices certainty to transmit information that saves the rest.”**"
      },
      {
        "t": "p",
        "text": "P8"
      }
    ]
  },
  {
    "id": "p8",
    "title": "10 Coins Puzzle (Blindfolded)",
    "category": "Hats & Prisoners",
    "problem": [
      {
        "t": "p",
        "text": "You are blindfolded, and 10 coins are placed in front of you on the table. You are allowed to touch the coins, but can’t tell which way up they are by feel. You are told that there are 5 coins heads up, and 5 coins tails up, but not which ones are which. Can you make two piles of coins, each with the same number of heads up? You can flip the coins any number of times."
      },
      {
        "t": "img",
        "src": "image155.png"
      },
      {
        "t": "img",
        "src": "image125.png"
      },
      {
        "t": "img",
        "src": "image141.png"
      },
      {
        "t": "h",
        "text": "🔹 Problem ko FEEL ke saath samjho"
      },
      {
        "t": "li",
        "text": "Tum **blindfolded** ho → kuchh bhi dekh nahi sakte"
      },
      {
        "t": "li",
        "text": "Table pe **10 coins** pade hain"
      },
      {
        "t": "li",
        "text": "Tumhe pata hai:"
      },
      {
        "t": "li",
        "text": "**5 heads**"
      },
      {
        "t": "li",
        "text": "**5 tails**"
      },
      {
        "t": "li",
        "text": "Par **kaunsa coin kya hai, pata nahi**"
      },
      {
        "t": "li",
        "text": "Touch kar sakte ho, flip kar sakte ho"
      },
      {
        "t": "li",
        "text": "Goal:\n 👉 **Do piles banana**\n 👉 Dono piles me **heads ki ginti same ho**"
      },
      {
        "t": "h",
        "text": "🧠 SABSE BADI FEEL (KEY INSIGHT 🔥)"
      },
      {
        "t": "p",
        "text": "**Tumhe exact heads/tails ka location nahi chahiye.\n Tumhe sirf “balance” banana hai.**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🪜 STEP-BY-STEP STORY (BLINDFOLDED FEEL)"
      },
      {
        "t": "h",
        "text": "🎒 Step 1: Random divide"
      },
      {
        "t": "p",
        "text": "Blindfolded ho, toh logically tum ye hi kar sakte ho:"
      },
      {
        "t": "p",
        "text": "👉 **10 coins ko randomly 2 piles me baant do**"
      },
      {
        "t": "li",
        "text": "Pile A → 5 coins"
      },
      {
        "t": "li",
        "text": "Pile B → 5 coins"
      },
      {
        "t": "p",
        "text": "Tumhe nahi pata:"
      },
      {
        "t": "li",
        "text": "Pile A me kitne heads hain"
      },
      {
        "t": "li",
        "text": "Pile B me kitne heads hain"
      },
      {
        "t": "p",
        "text": "Par ek baat sure hai:"
      },
      {
        "t": "p",
        "text": "**A + B = total heads = 5**"
      },
      {
        "t": "h",
        "text": "🧠 Step 2: MAGIC MOVE ✨"
      },
      {
        "t": "p",
        "text": "👉 **Pile A ke saare coins FLIP kar do**"
      },
      {
        "t": "p",
        "text": "Bas.\n Yahi poora puzzle hai."
      },
      {
        "t": "h",
        "text": "🤯 KYU KAAM KARTA HAI? (FEEL THIS)"
      },
      {
        "t": "p",
        "text": "Maan lo:"
      },
      {
        "t": "li",
        "text": "Pile A me **x heads** the"
      },
      {
        "t": "li",
        "text": "Pile B me **(5 − x) heads** the"
      },
      {
        "t": "p",
        "text": "Ab kya hota hai jab Pile A flip hota hai?"
      },
      {
        "t": "li",
        "text": "Jo **heads** the → **tails** ban jaate hain"
      },
      {
        "t": "li",
        "text": "Jo **tails** the → **heads** ban jaate hain"
      },
      {
        "t": "p",
        "text": "Pile A me total coins = 5\n Toh flip ke baad:"
      },
      {
        "t": "p",
        "text": "Heads in Pile A = 5 − x"
      },
      {
        "t": "p",
        "text": "Heads in Pile B = 5 − x"
      },
      {
        "t": "p",
        "text": "👉 **Dono piles me heads same** 💥"
      },
      {
        "t": "h",
        "text": "🎯 FEEL WALI LINE (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**“Flipping converts difference into equality.”**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW ME EXACT AISE BOLNA (FINAL SCRIPT)"
      },
      {
        "t": "p",
        "text": "“I divide the coins into two equal piles of five.\n Even though I don’t know how many heads are in each pile, I know the total number of heads is five.\n If one pile has x heads, the other must have five minus x.\n By flipping all coins in one pile, the number of heads in that pile becomes five minus x, which matches the other pile.\n Hence, both piles have the same number of heads.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER (Agar interviewer rush kare)"
      },
      {
        "t": "p",
        "text": "**“Split the coins equally and flip one pile.”**"
      },
      {
        "t": "p",
        "text": "P9"
      }
    ]
  },
  {
    "id": "p9",
    "title": "Strategy for a 2-Player Coin Game",
    "category": "Measuring & Weighing",
    "problem": [
      {
        "t": "img",
        "src": "image38.png"
      },
      {
        "t": "img",
        "src": "image99.png"
      },
      {
        "t": "img",
        "src": "image192.jpg"
      },
      {
        "t": "h",
        "text": "🎯 PROBLEM FEEL (1 line)"
      },
      {
        "t": "li",
        "text": "Coins **even number** me ek line me pade hain"
      },
      {
        "t": "li",
        "text": "Har turn pe **left ya right corner** se ek coin uthana hai"
      },
      {
        "t": "li",
        "text": "**Zyada total value** wala jeetega"
      },
      {
        "t": "li",
        "text": "Question: **Player A (first) kabhi lose na kare — kaunsi strategy?**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 CORE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**Player A coins nahi, “POSITIONS” choose karta hai.**"
      },
      {
        "t": "p",
        "text": "Coins ki value important hai,\n lekin **positions (odd / even)** usse zyada powerful hain."
      },
      {
        "t": "h",
        "text": "🧠 STEP 1: ODD–EVEN POSITION FEEL"
      },
      {
        "t": "p",
        "text": "Coins ko sirf **positions** me dekho:"
      },
      {
        "t": "p",
        "text": "Position:  1   2   3   4   5   6"
      },
      {
        "t": "p",
        "text": "Coins:    18  20  15  30  10  14"
      },
      {
        "t": "p",
        "text": "Odd Even Odd Even Odd Even"
      },
      {
        "t": "li",
        "text": "Odd positions = 1,3,5 → **18 + 15 + 10 = 43**"
      },
      {
        "t": "li",
        "text": "Even positions = 2,4,6 → **20 + 30 + 14 = 64**"
      },
      {
        "t": "p",
        "text": "👉 **Even side zyada heavy hai**"
      },
      {
        "t": "h",
        "text": "🔥 STEP 2: MAGIC REALIZATION (FEEL THIS)"
      },
      {
        "t": "p",
        "text": "**Game ka har move ek odd coin aur ek even coin ko expose karta hai.**"
      },
      {
        "t": "p",
        "text": "Iska matlab:"
      },
      {
        "t": "li",
        "text": "Agar Player A chahe,\n wo **saare odd coins** ya **saare even coins** apne naam lock kar sakta hai."
      },
      {
        "t": "h",
        "text": "🧠 STEP 3: STRATEGY (GUARANTEED WIN)"
      },
      {
        "t": "h",
        "text": "Case 1️⃣: EVEN > ODD"
      },
      {
        "t": "p",
        "text": "👉 Player A **EVEN positions** lock karega"
      },
      {
        "t": "p",
        "text": "**Kaise?**"
      },
      {
        "t": "li",
        "text": "First move: **RIGHT corner** se uthao"
      },
      {
        "t": "li",
        "text": "Uske baad: har baar **even position** ka coin uthate raho"
      },
      {
        "t": "p",
        "text": "Chahe Player B left uthaye ya right —\n 👉 **Even coins Player A ke hi aayenge**"
      },
      {
        "t": "h",
        "text": "Case 2️⃣: ODD > EVEN"
      },
      {
        "t": "p",
        "text": "👉 Player A **ODD positions** lock karega"
      },
      {
        "t": "p",
        "text": "**Kaise?**"
      },
      {
        "t": "li",
        "text": "First move: **LEFT corner** se uthao"
      },
      {
        "t": "li",
        "text": "Uske baad: har baar **odd position** ka coin uthate raho"
      },
      {
        "t": "h",
        "text": "Case 3️⃣: EVEN == ODD"
      },
      {
        "t": "p",
        "text": "👉 Guaranteed win nahi,\n par **dynamic strategy** se jeet sakta hai (look-ahead)"
      },
      {
        "t": "h",
        "text": "🧠 STEP 4: EXAMPLE FEEL (YOUR GIVEN ONE)"
      },
      {
        "t": "p",
        "text": "Coins:"
      },
      {
        "t": "p",
        "text": "18, 20, 15, 30, 10, 14"
      },
      {
        "t": "li",
        "text": "EVEN sum = **64**"
      },
      {
        "t": "li",
        "text": "ODD sum = **43**"
      },
      {
        "t": "p",
        "text": "👉 Player A bole:"
      },
      {
        "t": "p",
        "text": "“Main EVEN coins lunga”"
      },
      {
        "t": "p",
        "text": "So:"
      },
      {
        "t": "li",
        "text": "Player A first pick = **14 (right corner)**"
      },
      {
        "t": "li",
        "text": "Ab Player B jo bhi kare:"
      },
      {
        "t": "li",
        "text": "18 uthaye ya 10 uthaye\n 👉 Player A ko **30 aur 20 milke hi rahenge**"
      },
      {
        "t": "p",
        "text": "🎯 **Player A guaranteed jeetega**"
      },
      {
        "t": "h",
        "text": "🤯 KYU “MAX CORNER VALUE” STRATEGY FAIL HOTI HAI?"
      },
      {
        "t": "p",
        "text": "Kyuki:"
      },
      {
        "t": "li",
        "text": "Tum **aaj ka fayda** dekh rahe ho"
      },
      {
        "t": "li",
        "text": "Opponent **kal ka trap** bana raha hota hai"
      },
      {
        "t": "p",
        "text": "Puzzle ka lesson:"
      },
      {
        "t": "p",
        "text": "**Greedy thinking loses, strategic thinking wins.**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW ME EXACT AISE BOLNA (FINAL SCRIPT)"
      },
      {
        "t": "p",
        "text": "“Since the number of coins is even, the first player can always commit to either all odd-indexed coins or all even-indexed coins.\n By comparing the total value of odd and even positions, Player A chooses the side with the higher sum and always picks from the appropriate end to secure those coins.\n This guarantees that Player A never loses.”"
      },
      {
        "t": "p",
        "text": "P10"
      }
    ]
  },
  {
    "id": "p10",
    "title": "5 Pirates and 100 Gold Coins",
    "category": "Hats & Prisoners",
    "problem": [
      {
        "t": "p",
        "text": "Five pirates have to divide 100 gold coins among themselves. Each pirate has a different rank based on seniority:\nPirate A is the most senior, followed by B, then C, then D, and finally Pirate E, who is the most junior.\nRules of distribution are:"
      },
      {
        "t": "li",
        "text": "The most senior pirate proposes a distribution of coins."
      },
      {
        "t": "li",
        "text": "All pirates vote on whether to accept the distribution."
      },
      {
        "t": "li",
        "text": "The distribution is approved if at least half of the pirates agree (including the proposer)"
      },
      {
        "t": "li",
        "text": "If the distribution is accepted, the coins are disbursed, and the game ends."
      },
      {
        "t": "li",
        "text": "If not, the proposer is thrown and dies, and the next most senior pirate makes a new proposal to begin the system again."
      },
      {
        "t": "li",
        "text": "In case of a tie vote, the proposer can have the casting vote"
      },
      {
        "t": "p",
        "text": "Rules every pirate follows:"
      },
      {
        "t": "li",
        "text": "Every pirate wants to survive"
      },
      {
        "t": "li",
        "text": "Given survival, each pirate wants to maximise the number of gold coins he receives."
      },
      {
        "t": "p",
        "text": "**What is the maximum number of coins that pirate A might get? **"
      },
      {
        "t": "img",
        "src": "image242.png"
      },
      {
        "t": "img",
        "src": "image7.png"
      },
      {
        "t": "img",
        "src": "image163.jpg"
      },
      {
        "t": "h",
        "text": "🎯 RULES ko FEEL ke saath yaad rakho"
      },
      {
        "t": "li",
        "text": "**Sabse senior propose karega**"
      },
      {
        "t": "li",
        "text": "**50% ya zyada votes chahiye (tie me proposer ka vote chalta hai)**"
      },
      {
        "t": "li",
        "text": "Reject hua → proposer **mar jaata hai**"
      },
      {
        "t": "li",
        "text": "Har pirate ka mindset:"
      },
      {
        "t": "li",
        "text": "🥇 **Sabse pehle survive**"
      },
      {
        "t": "li",
        "text": "🥈 Phir **maximum coins**"
      },
      {
        "t": "p",
        "text": "👉 Sab pirates **perfectly logical** hain."
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔥 PUZZLE KA GOLDEN RULE (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**Senior pirate sirf utna hi deta hai\n jitna junior pirate ko “zinda rehne ke liye haan bolna pade”.**"
      },
      {
        "t": "h",
        "text": "🧠 AB REVERSE ME STORY SHURU KARTE HAIN"
      },
      {
        "t": "p",
        "text": "(Ye sabse important trick hai)"
      },
      {
        "t": "h",
        "text": "🟢 CASE 1: Sirf D aur E bache (A, B, C mar gaye)"
      },
      {
        "t": "li",
        "text": "D senior, E junior"
      },
      {
        "t": "li",
        "text": "D bolega: **(100, 0)**"
      },
      {
        "t": "li",
        "text": "E ko vote dene ki zarurat hi nahi"
      },
      {
        "t": "p",
        "text": "👉 Result:"
      },
      {
        "t": "li",
        "text": "D = 100"
      },
      {
        "t": "li",
        "text": "E = 0"
      },
      {
        "t": "p",
        "text": "🧠 **E ko pata hai: mujhe kuch nahi milne wala**"
      },
      {
        "t": "h",
        "text": "🟢 CASE 2: C, D, E bache (A, B mar gaye)"
      },
      {
        "t": "li",
        "text": "C senior"
      },
      {
        "t": "li",
        "text": "C ko chahiye **2 votes (out of 3)**"
      },
      {
        "t": "p",
        "text": "C sochta:"
      },
      {
        "t": "li",
        "text": "D future me kuch nahi paayega → usse 0 de sakta hoon"
      },
      {
        "t": "li",
        "text": "E ko agar **1 coin** doon,\n E bolega: “1 > 0, mujhe haan bolna hai”"
      },
      {
        "t": "p",
        "text": "👉 C ka plan:"
      },
      {
        "t": "p",
        "text": "C = 99, D = 0, E = 1"
      },
      {
        "t": "h",
        "text": "🟢 CASE 3: B, C, D, E bache (A mar gaya)"
      },
      {
        "t": "li",
        "text": "B senior"
      },
      {
        "t": "li",
        "text": "Votes chahiye = **2 (out of 4)**"
      },
      {
        "t": "p",
        "text": "B jaanta hai:"
      },
      {
        "t": "li",
        "text": "Agar B mar gaya → C ka plan hoga (99,0,1)"
      },
      {
        "t": "li",
        "text": "Isme **D ko 0 milta hai**"
      },
      {
        "t": "p",
        "text": "👉 B D ko sirf **1 coin** de de:"
      },
      {
        "t": "p",
        "text": "B = 99, C = 0, D = 1, E = 0"
      },
      {
        "t": "li",
        "text": "B ka vote + D ka vote = win"
      },
      {
        "t": "h",
        "text": "🔥 FINAL CASE: A, B, C, D, E (REAL QUESTION)"
      },
      {
        "t": "li",
        "text": "A senior"
      },
      {
        "t": "li",
        "text": "Votes chahiye = **3 (out of 5)**"
      },
      {
        "t": "p",
        "text": "A jaanta hai:"
      },
      {
        "t": "li",
        "text": "Agar A mar gaya → B ka plan = (99,0,1,0)"
      },
      {
        "t": "li",
        "text": "Isme:"
      },
      {
        "t": "li",
        "text": "C = 0"
      },
      {
        "t": "li",
        "text": "E = 0"
      },
      {
        "t": "p",
        "text": "👉 A ka masterstroke 💥\n Bas unko **1–1 coin** de do jinko future me 0 milna hai."
      },
      {
        "t": "p",
        "text": "A = 98"
      },
      {
        "t": "p",
        "text": "B = 0"
      },
      {
        "t": "p",
        "text": "C = 1"
      },
      {
        "t": "p",
        "text": "D = 0"
      },
      {
        "t": "p",
        "text": "E = 1"
      },
      {
        "t": "p",
        "text": "Votes:"
      },
      {
        "t": "li",
        "text": "A (khud)"
      },
      {
        "t": "li",
        "text": "C"
      },
      {
        "t": "li",
        "text": "E"
      },
      {
        "t": "p",
        "text": "🎯 **3 votes → accepted**"
      },
      {
        "t": "h",
        "text": "🏁 FINAL ANSWER"
      },
      {
        "t": "h",
        "text": "✅ Pirate A can get a maximum of 98 gold coins"
      },
      {
        "t": "h",
        "text": "🧠 FEEL WALI LINE (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**“I don’t need to bribe everyone,\n only those who would get nothing if I die.”**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW ME EXACT AISE BOLNA (FINAL SCRIPT)"
      },
      {
        "t": "p",
        "text": "“The key is to reason backwards.\n Each pirate knows what he would receive if the current proposer dies.\n The proposer only needs to give a minimal incentive to the pirates who would otherwise get nothing.\n Using this logic, Pirate A can secure approval by giving one coin each to two pirates and keep 98 coins for himself.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER (INTERVIEWER IMPRESS)"
      },
      {
        "t": "p",
        "text": "**“Backward induction and survival-first logic lead to an unintuitive but optimal result.”**"
      },
      {
        "t": "h",
        "text": "❌ Common Mistakes"
      },
      {
        "t": "li",
        "text": "❌ Equal distribution sochna"
      },
      {
        "t": "li",
        "text": "❌ Greedy bribing (zyada coins dena)"
      },
      {
        "t": "li",
        "text": "❌ Future outcomes ignore karna"
      },
      {
        "t": "h",
        "text": "🧠 Puzzle ka Hidden Lesson"
      },
      {
        "t": "p",
        "text": "**Power + foresight beats fairness.**"
      },
      {
        "t": "p",
        "text": "P11"
      }
    ]
  },
  {
    "id": "p11",
    "title": "Minimum Cuts to Pay 1 Unit per Day (5 Days)",
    "category": "Measuring & Weighing",
    "problem": [
      {
        "t": "img",
        "src": "image106.png"
      },
      {
        "t": "table",
        "rows": [
          [
            "Days",
            "Worker Gets",
            "Vendor Takes Back",
            "Worker Holds",
            "Explanation"
          ],
          [
            "Day 0",
            "--",
            "-",
            "[]",
            "No Payment yet."
          ],
          [
            "Day 1",
            "[+1]",
            "-",
            "[1]",
            "Pay the worker Gold Bar with 1 unit."
          ],
          [
            "Day 2",
            "[+2]",
            "[-1]",
            "[2]",
            "Pay the worker Gold with 2 units and take back the gold bar with 1 unit."
          ],
          [
            "Day 3",
            "[+1]",
            "-",
            "[1, 2]",
            "Pay the worker Gold Bar with 1 unit."
          ],
          [
            "Day 4",
            "[+2]",
            "[-1]",
            "[2, 2]",
            "Pay the worker Gold with 2 units and take back the gold bar with 1 unit."
          ],
          [
            "Day 5",
            "[+1]",
            "-",
            "[1, 2, 2]",
            "Pay the worker with only left Gold Bar with 1 unit."
          ]
        ]
      },
      {
        "t": "img",
        "src": "image186.png"
      },
      {
        "t": "h",
        "text": "🎯 Problem (Simple Words)"
      },
      {
        "t": "li",
        "text": "Worker ko **5 din**, har din **1 unit** gold dena hai"
      },
      {
        "t": "li",
        "text": "Tumhare paas **sirf ek 5-unit gold bar** hai"
      },
      {
        "t": "li",
        "text": "Tum **cut** kar sakte ho"
      },
      {
        "t": "li",
        "text": "**Exact 1 unit/day** pay hona chahiye"
      },
      {
        "t": "li",
        "text": "Question: **Minimum cuts kitne?**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "👉 **Minimum cuts = 2**"
      },
      {
        "t": "h",
        "text": "🔑 CORE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**Tum sirf dena nahi, “exchange (take back)” bhi kar sakte ho.**\n Isi se cuts kam ho jaate hain."
      },
      {
        "t": "h",
        "text": "✂️ Cuts Ka Plan (Bas Itna)"
      },
      {
        "t": "li",
        "text": "**Cut 1:** 1 unit alag karo → pieces: **1 | 4**"
      },
      {
        "t": "li",
        "text": "**Cut 2:** 4 ko half karo → pieces: **1 | 2 | 2**"
      },
      {
        "t": "p",
        "text": "Bas.\n Ab in **1, 2, 2** se poora game khelna hai."
      },
      {
        "t": "h",
        "text": "📅 Day-by-Day (FEEL KE SAATH)"
      },
      {
        "t": "h",
        "text": "Day 1"
      },
      {
        "t": "li",
        "text": "Do: **1**"
      },
      {
        "t": "li",
        "text": "Worker holds: **[1]**"
      },
      {
        "t": "h",
        "text": "Day 2"
      },
      {
        "t": "li",
        "text": "Do: **2**"
      },
      {
        "t": "li",
        "text": "Take back: **1**"
      },
      {
        "t": "li",
        "text": "Worker holds: **[2]**"
      },
      {
        "t": "h",
        "text": "Day 3"
      },
      {
        "t": "li",
        "text": "Do: **1**"
      },
      {
        "t": "li",
        "text": "Worker holds: **[1, 2]** (total 3)"
      },
      {
        "t": "h",
        "text": "Day 4"
      },
      {
        "t": "li",
        "text": "Do: **2**"
      },
      {
        "t": "li",
        "text": "Take back: **1**"
      },
      {
        "t": "li",
        "text": "Worker holds: **[2, 2]** (total 4)"
      },
      {
        "t": "h",
        "text": "Day 5"
      },
      {
        "t": "li",
        "text": "Do: **1**"
      },
      {
        "t": "li",
        "text": "Worker holds: **[1, 2, 2]** (total 5)"
      },
      {
        "t": "p",
        "text": "👉 Har din **exact 1 unit ka increment**, aur end me **5 units total** ✔️"
      },
      {
        "t": "h",
        "text": "🤯 Why 2 Cuts Are Enough (Intuition)"
      },
      {
        "t": "li",
        "text": "**1-unit** piece = fine control"
      },
      {
        "t": "li",
        "text": "**2-unit** pieces = efficient jumps"
      },
      {
        "t": "li",
        "text": "Exchange allowed → aaj ka total sahi rakh sakte ho"
      },
      {
        "t": "h",
        "text": "❌ Why 1 Cut Is NOT Enough"
      },
      {
        "t": "li",
        "text": "Sirf **1 | 4** se har din exact control nahi banta"
      },
      {
        "t": "li",
        "text": "Exchange ke baad bhi kuch din stuck ho jaoge"
      },
      {
        "t": "h",
        "text": "🗣️ Interview-Ready Script (Word-to-Word)"
      },
      {
        "t": "p",
        "text": "“I cut the 5-unit gold bar into pieces of 1, 2, and 2 units using two cuts.\n By giving and occasionally taking back pieces, I can ensure the worker’s total increases by exactly one unit each day.\n Therefore, the minimum number of cuts required is two.”"
      },
      {
        "t": "h",
        "text": "💎 One-Line Killer"
      },
      {
        "t": "p",
        "text": "**“The trick is using exchange; with pieces 1, 2, and 2, two cuts are sufficient.”**"
      },
      {
        "t": "p",
        "text": "P12"
      }
    ]
  },
  {
    "id": "p12",
    "title": "Prisoner and Policeman Puzzle",
    "category": "Hats & Prisoners",
    "problem": [
      {
        "t": "p",
        "text": "The policeman decided to punish the Prisoner and asked him to make a statement. The Prisoner should make such a statement so that he would be alive."
      },
      {
        "t": "li",
        "text": "If the statement is held true by the Policeman, the Prisoner will be hanged to death, and"
      },
      {
        "t": "li",
        "text": "If the statement is held false, the Prisoner will be shot dead."
      },
      {
        "t": "img",
        "src": "image206.png"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution:**"
      },
      {
        "t": "p",
        "text": "The prisoner said, **\"I will be shot dead.\"**"
      },
      {
        "t": "p",
        "text": "Now consider the two possible scenarios the Policeman has to decide:"
      },
      {
        "t": "li",
        "text": "If the statement is declared true, then according to the rules, the prisoner should be shot. But that would make the statement true, and the rule says he must be hanged for telling the truth—a contradiction."
      },
      {
        "t": "li",
        "text": "If the statement is declared** false**, then the prisoner should be hanged (as per the rule for false statements). But if he's hanged, then his statement \"I will be shot\" was indeed false, which would make the punishment correct. But now the statement being false results in the correct punishment, which loops back consistently, but leads to a contradiction with the rule that the punishment must reflect the truth value."
      },
      {
        "t": "p",
        "text": "However, here is the real crux:\nNo matter what the Policeman decides, it leads to a logical paradox:"
      },
      {
        "t": "li",
        "text": "If the stateme**nt is true,** the prisoner should be hanged (for truth), but that contradicts the content of the statement."
      },
      {
        "t": "li",
        "text": "If the statement** is false**, the prisoner should be shot (for falsehood), but then the statement becomes true."
      },
      {
        "t": "p",
        "text": "This self-referential paradox means the statement cannot be consistently classified as either true or false under the rules provided."
      },
      {
        "t": "p",
        "text": "Comment"
      },
      {
        "t": "p",
        "text": "kartik"
      },
      {
        "t": "h",
        "text": "Rule yaad rakho (VERY IMPORTANT)"
      },
      {
        "t": "h",
        "text": "Agar statement TRUE hua → HANG"
      },
      {
        "t": "h",
        "text": "Agar statement FALSE hua → SHOT"
      },
      {
        "t": "h",
        "text": "Prisoner ka goal: zinda rehna"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER (Direct)"
      },
      {
        "t": "h",
        "text": "👉 Prisoner bolta hai:\n “I will be shot dead.”"
      },
      {
        "t": "h",
        "text": "Bas.\n Yahi statement usko bachati hai."
      },
      {
        "t": "h",
        "text": "🧠 AB FEEL KE SAATH SAMJHO (NO CONFUSION)"
      },
      {
        "t": "h",
        "text": "Policeman ke paas sirf 2 options hain:"
      },
      {
        "t": "h",
        "text": "🔴 Case 1: Policeman bole — “Statement TRUE hai”"
      },
      {
        "t": "h",
        "text": "Statement: “I will be shot dead”\n TRUE maana → rule ke hisaab se HANG karna padega"
      },
      {
        "t": "h",
        "text": "But agar prisoner ko hang kiya:"
      },
      {
        "t": "h",
        "text": "Toh wo shot nahi hua"
      },
      {
        "t": "h",
        "text": "Matlab statement FALSE ho gaya"
      },
      {
        "t": "h",
        "text": "❌ Contradiction\n (TRUE bola → FALSE ho gaya)"
      },
      {
        "t": "h",
        "text": "🔵 Case 2: Policeman bole — “Statement FALSE hai”"
      },
      {
        "t": "h",
        "text": "FALSE maana → rule ke hisaab se SHOT karna padega"
      },
      {
        "t": "h",
        "text": "But agar prisoner ko shot kiya:"
      },
      {
        "t": "h",
        "text": "Toh statement “I will be shot dead” TRUE ho gaya"
      },
      {
        "t": "h",
        "text": "❌ Phir contradiction\n (FALSE bola → TRUE ho gaya)"
      },
      {
        "t": "h",
        "text": "🤯 RESULT KYA NIKLA?"
      },
      {
        "t": "h",
        "text": "Statement TRUE bhi nahi ho sakta"
      },
      {
        "t": "h",
        "text": "Statement FALSE bhi nahi ho sakta"
      },
      {
        "t": "h",
        "text": "👉 Policeman decision hi nahi le sakta\n 👉 Aur jab decision nahi le sakta → punishment execute nahi ho sakti"
      },
      {
        "t": "h",
        "text": "🎯 Prisoner survives"
      },
      {
        "t": "h",
        "text": "🔥 CORE FEEL (YAAD RAKH)"
      },
      {
        "t": "h",
        "text": "Prisoner ne aisa sentence bola\n jisko TRUE ya FALSE classify hi nahi kiya ja sakta."
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW ME EXACT AISE BOLNA (FINAL SCRIPT)"
      },
      {
        "t": "p",
        "text": "“The prisoner says, ‘I will be shot dead.’\n If the policeman considers the statement true, he must hang the prisoner, which makes the statement false.\n If he considers it false, he must shoot the prisoner, which makes the statement true.\n This creates a logical paradox, so the statement cannot be consistently labeled true or false, preventing any punishment.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER (INTERVIEWER IMPRESS)"
      },
      {
        "t": "p",
        "text": "**“The prisoner uses a self-referential paradox to avoid both outcomes.”**"
      },
      {
        "t": "p",
        "text": "P13"
      }
    ]
  },
  {
    "id": "p13",
    "title": "Guess the Victim (Cheating Husband Puzzle)",
    "category": "Logic & Deduction",
    "problem": [
      {
        "t": "p",
        "text": "**There is a village with N married couples.**"
      },
      {
        "t": "p",
        "text": "**Some of the husbands in the village are cheating, but no one knows how many.**"
      },
      {
        "t": "p",
        "text": "**Rules and information:**"
      },
      {
        "t": "li",
        "text": "**Each wife can see all other husbands in the village**"
      },
      {
        "t": "li",
        "text": "**A wife cannot see her own husband**"
      },
      {
        "t": "li",
        "text": "**Wives cannot communicate with each other**"
      },
      {
        "t": "li",
        "text": "**If a wife becomes certain that her own husband is cheating,\n she will kill him the next morning**"
      },
      {
        "t": "li",
        "text": "**One day, the village leader makes a public announcement:\n\n “At least one husband in this village is cheating.”**"
      },
      {
        "t": "h",
        "text": "❓ Question"
      },
      {
        "t": "p",
        "text": "**If there are exactly N cheating husbands in the village,\n on which day will the cheating husbands be killed?**"
      },
      {
        "t": "p",
        "text": "**(Who is the victim, and when?)**"
      },
      {
        "t": "img",
        "src": "image210.png"
      },
      {
        "t": "img",
        "src": "image219.png"
      },
      {
        "t": "img",
        "src": "image113.png"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "✅ FINAL ANSWER (ONE LINE)"
      },
      {
        "t": "p",
        "text": "**If there are exactly N cheating husbands, then all of them will be killed on the N-th day after the announcement.**"
      },
      {
        "t": "h",
        "text": "🧠 CORE IDEA (MOST IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**This puzzle works because of common knowledge and logical waiting.**"
      },
      {
        "t": "p",
        "text": "**The announcement**"
      },
      {
        "t": "p",
        "text": "**“At least one husband is cheating”**"
      },
      {
        "t": "p",
        "text": "**does not add new facts, but it makes everyone sure that everyone else also knows this.**"
      },
      {
        "t": "p",
        "text": "**Silence itself becomes information.**"
      },
      {
        "t": "h",
        "text": "🔍 STEP-BY-STEP SOLUTION (WITH FEEL)"
      },
      {
        "t": "h",
        "text": "🟢 Case 1: Exactly 1 cheating husband"
      },
      {
        "t": "li",
        "text": "**His wife sees 0 cheating husbands**"
      },
      {
        "t": "li",
        "text": "**She thinks:\n\n “The leader said at least one husband is cheating.\n I see none.\n So my husband must be the cheater.”**"
      },
      {
        "t": "p",
        "text": "**👉 She is 100% sure on Day 1\n 👉 She kills him on Day 1 morning**"
      },
      {
        "t": "h",
        "text": "🟡 Case 2: Exactly 2 cheating husbands"
      },
      {
        "t": "li",
        "text": "**Each cheating husband’s wife sees 1 cheating husband**"
      },
      {
        "t": "li",
        "text": "**Each wife thinks:\n\n “If there were only 1 cheater,\n his wife would kill him on Day 1.”**"
      },
      {
        "t": "li",
        "text": "**Day 1 passes → no one is killed**"
      },
      {
        "t": "p",
        "text": "**Now each wife concludes:**"
      },
      {
        "t": "p",
        "text": "**“So there must be more than one cheater.\n Since I see one, my husband must be the second.”**"
      },
      {
        "t": "p",
        "text": "**👉 Both wives are sure on Day 2\n 👉 Both cheating husbands are killed on Day 2 morning**"
      },
      {
        "t": "h",
        "text": "🔵 Case 3: Exactly 3 cheating husbands"
      },
      {
        "t": "li",
        "text": "**Each wife sees 2 cheating husbands**"
      },
      {
        "t": "li",
        "text": "**She waits:**"
      },
      {
        "t": "li",
        "text": "**Day 1 → nothing**"
      },
      {
        "t": "li",
        "text": "**Day 2 → nothing**"
      },
      {
        "t": "p",
        "text": "**She thinks:**"
      },
      {
        "t": "p",
        "text": "**“If there were only 2 cheaters,\n they would be killed on Day 2.”**"
      },
      {
        "t": "p",
        "text": "**Since nothing happened:**"
      },
      {
        "t": "p",
        "text": "**“There must be 3.\n My husband is one of them.”**"
      },
      {
        "t": "p",
        "text": "**👉 All 3 are killed on Day 3 morning**"
      },
      {
        "t": "h",
        "text": "🔁 GENERAL LOGIC (INDUCTION)"
      },
      {
        "t": "li",
        "text": "**1 cheater → Day 1**"
      },
      {
        "t": "li",
        "text": "**2 cheaters → Day 2**"
      },
      {
        "t": "li",
        "text": "**3 cheaters → Day 3**"
      },
      {
        "t": "li",
        "text": "**N cheaters → Day N**"
      },
      {
        "t": "h",
        "text": "🧠 WHY THE ANNOUNCEMENT MATTERS"
      },
      {
        "t": "p",
        "text": "**Without the announcement:**"
      },
      {
        "t": "li",
        "text": "**Wives see cheating husbands**"
      },
      {
        "t": "li",
        "text": "**But they are not sure others know**"
      },
      {
        "t": "p",
        "text": "**With the announcement:**"
      },
      {
        "t": "li",
        "text": "**Everyone knows**"
      },
      {
        "t": "li",
        "text": "**Everyone knows that everyone knows**"
      },
      {
        "t": "li",
        "text": "**Logical deduction becomes possible**"
      },
      {
        "t": "p",
        "text": "**👉 This is called common knowledge**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ANSWER (WORD-TO-WORD)"
      },
      {
        "t": "p",
        "text": "**“The solution uses logical induction and common knowledge.\n If there is one cheating husband, he is killed on the first day.\n If there are two, both are killed on the second day, and so on.\n In general, if there are N cheating husbands, all of them are killed on the N-th day after the announcement.”**"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER (IMPRESS INTERVIEWER)"
      },
      {
        "t": "p",
        "text": "**“Silence itself becomes information once knowledge is common.”**"
      },
      {
        "t": "h",
        "text": "❓ Your confusion (rephrased clearly)"
      },
      {
        "t": "p",
        "text": "**You are saying:**"
      },
      {
        "t": "p",
        "text": "**“If there are 2 cheating husbands, then each wife sees 1 cheater,\n so why doesn’t she kill her husband on Day 1?”**"
      },
      {
        "t": "p",
        "text": "**This feels totally reasonable.\n Now let’s very carefully see what she knows vs what she is sure about.**"
      },
      {
        "t": "h",
        "text": "🔑 THE MOST IMPORTANT RULE (read twice)"
      },
      {
        "t": "p",
        "text": "**A wife kills her husband only when she is 100% certain\n — not when something is possible.**"
      },
      {
        "t": "h",
        "text": "🟡 Case: Exactly 2 cheating husbands"
      },
      {
        "t": "p",
        "text": "**Let’s name them H1 and H2.\n Their wives are W1 and W2.**"
      },
      {
        "t": "h",
        "text": "👀 What W1 sees"
      },
      {
        "t": "li",
        "text": "**She sees H2 cheating**"
      },
      {
        "t": "li",
        "text": "**She does not see her own husband (H1)**"
      },
      {
        "t": "p",
        "text": "**So W1 thinks:**"
      },
      {
        "t": "p",
        "text": "**“I see 1 cheater.\n My husband could be:**"
      },
      {
        "t": "li",
        "text": "**cheating (→ total cheaters = 2), OR**"
      },
      {
        "t": "li",
        "text": "**not cheating (→ total cheaters = 1).”**"
      },
      {
        "t": "p",
        "text": "**⚠️ Both are possible for her.**"
      },
      {
        "t": "h",
        "text": "🔴 Why she does NOT kill on Day 1"
      },
      {
        "t": "p",
        "text": "**W1 asks herself:**"
      },
      {
        "t": "p",
        "text": "**“If there were only 1 cheater (H2),\n what would H2’s wife (W2) see?”**"
      },
      {
        "t": "p",
        "text": "**Answer:**"
      },
      {
        "t": "li",
        "text": "**W2 would see 0 cheaters**"
      },
      {
        "t": "p",
        "text": "**And from Case 1 we know:**"
      },
      {
        "t": "li",
        "text": "**If a wife sees 0 cheaters,\n she kills her husband on Day 1**"
      },
      {
        "t": "p",
        "text": "**So W1 expects:**"
      },
      {
        "t": "p",
        "text": "**“If I don’t kill on Day 1,\n W2 will kill H2 on Day 1.”**"
      },
      {
        "t": "h",
        "text": "⏳ What actually happens on Day 1?"
      },
      {
        "t": "p",
        "text": "**👉 No one is killed.**"
      },
      {
        "t": "p",
        "text": "**This is the crucial moment.**"
      },
      {
        "t": "h",
        "text": "💡 What W1 concludes on Day 2"
      },
      {
        "t": "p",
        "text": "**W1 now thinks:**"
      },
      {
        "t": "p",
        "text": "**“If there were only 1 cheater,\n H2 would already be dead on Day 1.\n But he is alive.”**"
      },
      {
        "t": "p",
        "text": "**Therefore:**"
      },
      {
        "t": "p",
        "text": "**“There must be more than 1 cheater.\n Since I see exactly 1 (H2),\n my husband must be the second cheater.”**"
      },
      {
        "t": "p",
        "text": "**👉 Now she is 100% certain.**"
      },
      {
        "t": "p",
        "text": "**So she kills her husband on Day 2, not Day 1.**"
      },
      {
        "t": "h",
        "text": "🔁 Same logic for W2"
      },
      {
        "t": "p",
        "text": "**Both wives reach certainty only after Day 1 passes with no deaths.**"
      },
      {
        "t": "h",
        "text": "📌 KEY FIX TO YOUR CONFUSION (THIS LINE IS GOLD)"
      },
      {
        "t": "p",
        "text": "**Seeing one cheater does NOT mean “kill immediately”.\n It means “wait one day to see if the zero-cheater case happens.”**"
      },
      {
        "t": "p",
        "text": "**Silence on Day 1 = information.**"
      },
      {
        "t": "h",
        "text": "🧠 Why Day 1 works only for 1 cheater"
      },
      {
        "t": "table",
        "rows": [
          [
            "Cheaters",
            "What wife sees",
            "When she is sure",
            "Kill day"
          ],
          [
            "1",
            "0",
            "Immediately",
            "Day 1"
          ],
          [
            "2",
            "1",
            "After Day 1 silence",
            "Day 2"
          ],
          [
            "3",
            "2",
            "After Day 2 silence",
            "Day 3"
          ],
          [
            "N",
            "N−1",
            "After Day N−1 silence",
            "Day N"
          ]
        ]
      },
      {
        "t": "h",
        "text": "🗣️ Interview-ready clarification (exact words)"
      },
      {
        "t": "p",
        "text": "**“A wife who sees one cheater is not immediately certain, because there could be only one cheater in total. She waits to see whether the zero-cheater case resolves itself on Day 1. Only when no one is killed does she gain certainty.”**"
      },
      {
        "t": "h",
        "text": "🧠 One-line intuition (remember this)"
      },
      {
        "t": "p",
        "text": "**Certainty comes from waiting, not from seeing.**"
      },
      {
        "t": "p",
        "text": "P14"
      }
    ]
  },
  {
    "id": "p14",
    "title": "Blind Games",
    "category": "Hats & Prisoners",
    "problem": [
      {
        "t": "img",
        "src": "image60.png"
      },
      {
        "t": "p",
        "text": "Given that you are in a dim room where a table is kept. There are 50 coins put on the table, out of which 10 coins show tails and 40 coins show heads."
      },
      {
        "t": "p",
        "text": "The task is to separate this arrangement of 50 coins into 2 groups (not really a similar size) such that both groups have the same number of coins showing tails. You can perform any number of flips on any coin."
      },
      {
        "t": "img",
        "src": "image199.png"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution: **"
      },
      {
        "t": "p",
        "text": "At random, divide the coins into two groups of **10** (Pile1) and **40** (Pile2). The heads will be distributed across the two piles in some way."
      },
      {
        "t": "p",
        "text": "Consider there are N tails (0 ≤ N ≤ 10) in Pile1."
      },
      {
        "t": "p",
        "text": "So there are (10-N) tails in Pile2 and (10-N) heads in Pile1."
      },
      {
        "t": "img",
        "src": "image179.png"
      },
      {
        "t": "p",
        "text": "Now if you flip all the coins in Pile1 then all heads will become tails and vice versa."
      },
      {
        "t": "p",
        "text": "So, the number of tails in Pile1 is now (10-N) which is similar to the number of tails in Pile2."
      },
      {
        "t": "h",
        "text": "🔹 Problem (Simple English)"
      },
      {
        "t": "li",
        "text": "Dim room → tum **coins dekh nahi sakte**"
      },
      {
        "t": "li",
        "text": "Table par **50 coins**"
      },
      {
        "t": "li",
        "text": "**10 tails**"
      },
      {
        "t": "li",
        "text": "**40 heads**"
      },
      {
        "t": "li",
        "text": "Tum coins **touch kar sakte ho**, **flip** kar sakte ho"
      },
      {
        "t": "li",
        "text": "Goal:\n 👉 Coins ko **2 groups** me baantna\n 👉 Dono groups me **same number of tails** ho"
      },
      {
        "t": "h",
        "text": "🔑 CORE FEEL (MOST IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**Tumhe yeh nahi pata kaun sa coin tail hai,\n par tumhe yeh pata hai total tails = 10.**"
      },
      {
        "t": "p",
        "text": "Total knowledge = **power** 💥"
      },
      {
        "t": "h",
        "text": "🧠 STEP-BY-STEP SOLUTION (NO CONFUSION)"
      },
      {
        "t": "h",
        "text": "🔹 Step 1: Random split"
      },
      {
        "t": "p",
        "text": "Andhere me bhi tum yeh kar sakte ho:"
      },
      {
        "t": "li",
        "text": "**Pile 1** → 10 coins"
      },
      {
        "t": "li",
        "text": "**Pile 2** → 40 coins"
      },
      {
        "t": "p",
        "text": "(kaunsa head/tail hai, koi idea nahi — doesn’t matter)"
      },
      {
        "t": "h",
        "text": "🔹 Step 2: Think symbolically"
      },
      {
        "t": "p",
        "text": "Maan lo:"
      },
      {
        "t": "li",
        "text": "Pile 1 me **N tails** hain\n (N = 0 se 10 ke beech kuch bhi ho sakta hai)"
      },
      {
        "t": "p",
        "text": "Toh:"
      },
      {
        "t": "li",
        "text": "Pile 2 me tails = **10 − N**"
      },
      {
        "t": "h",
        "text": "🔹 Step 3: MAGIC MOVE ✨"
      },
      {
        "t": "p",
        "text": "👉 **Pile 1 ke saare coins flip kar do**"
      },
      {
        "t": "p",
        "text": "Flip ka matlab:"
      },
      {
        "t": "li",
        "text": "Head → Tail"
      },
      {
        "t": "li",
        "text": "Tail → Head"
      },
      {
        "t": "h",
        "text": "🔹 Step 4: After flipping"
      },
      {
        "t": "p",
        "text": "Pile 1 me:"
      },
      {
        "t": "li",
        "text": "Pehle N tails the"
      },
      {
        "t": "li",
        "text": "Total coins = 10"
      },
      {
        "t": "p",
        "text": "Flip ke baad:\n\n Tails = 10 − N"
      },
      {
        "t": "p",
        "text": "Pile 2 me:"
      },
      {
        "t": "li",
        "text": "Tails pehle se = **10 − N**"
      },
      {
        "t": "li",
        "text": "(Pile 2 ko kuch kiya hi nahi)"
      },
      {
        "t": "p",
        "text": "🎯 **Dono piles me tails equal ho gaye**"
      },
      {
        "t": "h",
        "text": "🤯 WHY THIS WORKS (FEEL LINE)"
      },
      {
        "t": "p",
        "text": "**Flipping converts “unknown difference” into “known equality”.**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ANSWER (WORD-TO-WORD)"
      },
      {
        "t": "p",
        "text": "“I randomly divide the coins into two piles of 10 and 40.\n Suppose there are N tails in the smaller pile.\n Since the total number of tails is 10, the other pile has 10 minus N tails.\n By flipping all coins in the smaller pile, the number of tails in that pile becomes 10 minus N, which matches the second pile.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER (INTERVIEWER IMPRESS)"
      },
      {
        "t": "p",
        "text": "**“Flipping the smaller pile equalizes the unknown distribution.”**"
      },
      {
        "t": "p",
        "text": "P15"
      }
    ]
  },
  {
    "id": "p15",
    "title": "Chameleons go on a date",
    "category": "Logic & Deduction",
    "problem": [
      {
        "t": "img",
        "src": "image240.jpg"
      },
      {
        "t": "img",
        "src": "image51.jpg"
      },
      {
        "t": "img",
        "src": "image171.jpg"
      },
      {
        "t": "h",
        "text": "🔹 Problem (Simple English)"
      },
      {
        "t": "li",
        "text": "Island par:"
      },
      {
        "t": "li",
        "text": "**13 Purple (P)**"
      },
      {
        "t": "li",
        "text": "**15 Yellow (Y)**"
      },
      {
        "t": "li",
        "text": "**17 Maroon (M)**"
      },
      {
        "t": "li",
        "text": "Rule:"
      },
      {
        "t": "li",
        "text": "Jab **do different colors** milte hain,\n 👉 dono **teesre color** me badal jaate hain"
      },
      {
        "t": "li",
        "text": "Question:\n 👉 **Kya kabhi aisa ho sakta hai ki saare chameleons ek hi color ke ho jaayein?**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "✅ FINAL ANSWER (ONE LINE)"
      },
      {
        "t": "p",
        "text": "**No. It is impossible for all chameleons to ever become the same color.**"
      },
      {
        "t": "h",
        "text": "🔑 CORE IDEA (FEEL THIS 🔥)"
      },
      {
        "t": "p",
        "text": "**Game ke dauraan kuch quantities kabhi “break” nahi hoti.\n Inko bolte hain “INVARIANTS”.**"
      },
      {
        "t": "p",
        "text": "Yahan invariant hai:\n 👉 **Difference between two colors modulo 3 (multiple of 3)**"
      },
      {
        "t": "h",
        "text": "🧠 STEP 1: Numbers ko symbols me likho"
      },
      {
        "t": "p",
        "text": "Let:"
      },
      {
        "t": "li",
        "text": "Purple = **P**"
      },
      {
        "t": "li",
        "text": "Yellow = **Y**"
      },
      {
        "t": "li",
        "text": "Maroon = **M**"
      },
      {
        "t": "p",
        "text": "Start:"
      },
      {
        "t": "p",
        "text": "(P, Y, M) = (13, 15, 17)"
      },
      {
        "t": "p",
        "text": "Total:"
      },
      {
        "t": "p",
        "text": "P + Y + M = 45   (ye kabhi change nahi hota)"
      },
      {
        "t": "h",
        "text": "🧠 STEP 2: Ek difference track karo (TRICK)"
      },
      {
        "t": "p",
        "text": "Hum sirf ye track karenge:"
      },
      {
        "t": "p",
        "text": "Y − P"
      },
      {
        "t": "p",
        "text": "Initially:"
      },
      {
        "t": "p",
        "text": "Y − P = 15 − 13 = 2"
      },
      {
        "t": "h",
        "text": "🧠 STEP 3: Check all possible meetings"
      },
      {
        "t": "h",
        "text": "Case 1: Purple + Yellow meet → become Maroon"
      },
      {
        "t": "p",
        "text": "P − 1, Y − 1, M + 2"
      },
      {
        "t": "p",
        "text": "(Y − 1) − (P − 1) = Y − P"
      },
      {
        "t": "p",
        "text": "👉 **Difference unchanged**"
      },
      {
        "t": "h",
        "text": "Case 2: Purple + Maroon meet → become Yellow"
      },
      {
        "t": "p",
        "text": "P − 1, M − 1, Y + 2"
      },
      {
        "t": "p",
        "text": "(Y + 2) − (P − 1) = (Y − P) + 3"
      },
      {
        "t": "p",
        "text": "👉 **Difference increases by 3**"
      },
      {
        "t": "h",
        "text": "Case 3: Yellow + Maroon meet → become Purple"
      },
      {
        "t": "p",
        "text": "Y − 1, M − 1, P + 2"
      },
      {
        "t": "p",
        "text": "(Y − 1) − (P + 2) = (Y − P) − 3"
      },
      {
        "t": "p",
        "text": "👉 **Difference decreases by 3**"
      },
      {
        "t": "h",
        "text": "🔥 BIG CONCLUSION (FEEL LINE)"
      },
      {
        "t": "p",
        "text": "**Y − P can only change by ±3 or stay the same.**"
      },
      {
        "t": "p",
        "text": "So always:"
      },
      {
        "t": "p",
        "text": "Y − P = 2 + 3k   (for some integer k)"
      },
      {
        "t": "h",
        "text": "🧠 STEP 4: Check “all same color” cases"
      },
      {
        "t": "h",
        "text": "All Purple:"
      },
      {
        "t": "p",
        "text": "(P, Y, M) = (45, 0, 0)"
      },
      {
        "t": "p",
        "text": "Y − P = −45 = multiple of 3"
      },
      {
        "t": "h",
        "text": "All Yellow:"
      },
      {
        "t": "p",
        "text": "(0, 45, 0)"
      },
      {
        "t": "p",
        "text": "Y − P = 45 = multiple of 3"
      },
      {
        "t": "h",
        "text": "All Maroon:"
      },
      {
        "t": "p",
        "text": "(0, 0, 45)"
      },
      {
        "t": "p",
        "text": "Y − P = 0 = multiple of 3"
      },
      {
        "t": "p",
        "text": "👉 **In all cases, Y − P is divisible by 3**"
      },
      {
        "t": "h",
        "text": "❌ BUT OUR GAME SAYS"
      },
      {
        "t": "p",
        "text": "Y − P = 2 + 3k   (never divisible by 3)"
      },
      {
        "t": "p",
        "text": "🚫 Contradiction"
      },
      {
        "t": "h",
        "text": "🏁 FINAL CONCLUSION"
      },
      {
        "t": "p",
        "text": "Since the invariant Y − P (mod 3) never becomes 0,\n **all chameleons can never become the same color.**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ANSWER (WORD-TO-WORD)"
      },
      {
        "t": "p",
        "text": "“The key is an invariant.\n If we track the difference between the number of yellow and purple chameleons, it only changes by multiples of three.\n Initially this difference is 2, which is not divisible by 3.\n In any state where all chameleons have the same color, the difference must be divisible by 3.\n Hence, such a state is unreachable.”"
      },
      {
        "t": "h",
        "text": "Alternative Solution:"
      },
      {
        "t": "p",
        "text": "As per the question, the conditions there is the same number of chameleons, and the total number of chameleons never changes. So, the alternate way to see this situation is by a mathematical formula. Initially, we have:"
      },
      {
        "t": "p",
        "text": "Purple + Yellow + Maroon = 45"
      },
      {
        "t": "p",
        "text": "There are 3 possibilities for colour-changing. A Purple can meet a Yellow, a Purple can meet a Maroon, and a Yellow can meet a Maroon. In each case, two colour types decrease by 1, and the third colour type increases by 2. The three possibilities can be represented by:"
      },
      {
        "t": "li",
        "text": "Purple – 1) + (Yellow – 1) + (Maroon + 2) = 45"
      },
      {
        "t": "li",
        "text": "(Purple – 1) + (Yellow + 2) + (Maroon – 1) = 45"
      },
      {
        "t": "li",
        "text": "(Purple + 2) + (Yellow – 1) + (Maroon – 1) = 45"
      },
      {
        "t": "p",
        "text": "The reduction in the number for the colours that meet is exactly offset by the increase in the number for the other colour."
      },
      {
        "t": "p",
        "text": "To solve the question, let's find an invariant that considers the pairing of Yellow and Purple chameleons considering the difference between Yellow and Purple chameleons:\nYellow – Purple\nThere are 3 possibilities for colour-changing. A Purple can meet a Yellow, a Purple can meet a Maroon, and a Yellow can meet a Maroon. Let's compute what happens to the quantity Yellow – Purple for those possibilities in order:"
      },
      {
        "t": "li",
        "text": "(Yellow – 1) – (Purple – 1) = Yellow – Purple"
      },
      {
        "t": "li",
        "text": "(Yellow + 2) – (Purple – 1) = Yellow – Purple + 3"
      },
      {
        "t": "li",
        "text": "(Yellow – 1) – (Purple + 2) = Yellow – Purple – 3"
      },
      {
        "t": "p",
        "text": "We conclude that the difference can either be the same, or it can go up or down by 3 because when a Purple and a Yellow meet, the number of each reduces by 1 so the difference between them stays the same. When one colour reduces by 1 and the other colour increases by 2, for a total difference of plus or minus 3."
      },
      {
        "t": "p",
        "text": "So, the difference between Yellow and Purple is always the same as at the start, plus or minus a multiple of 3.\nLet's begin with 13 Purple and 15 Maroon so:"
      },
      {
        "t": "p",
        "text": "Yellow – Purple = 2"
      },
      {
        "t": "p",
        "text": "Irrespective of how the chameleons meet, this difference will always be 2 plus a multiple of 3. So we have:"
      },
      {
        "t": "p",
        "text": "Yellow – Purple = 2 + 3k, for some integer k"
      },
      {
        "t": "p",
        "text": "For the chameleons to be of the same colour there are 3 ways this could happen:"
      },
      {
        "t": "li",
        "text": "(45 Purple, 0 Yellow, 0 Maroon), so Yellow – Purple = -45 = 3(-15)"
      },
      {
        "t": "li",
        "text": "(0 Purple, 45 Yellow, 0 Maroon), so Yellow – Purple = 45 = 3(15)"
      },
      {
        "t": "li",
        "text": "(0 Purple, 0 Yellow, 45 Maroon), so Yellow – Purple = 0 = 3(0)"
      },
      {
        "t": "p",
        "text": "If all chameleons became of the same colour, then the difference Yellow – Purple would be a multiple of 3.\nBut it's not possible as per the question as the difference Yellow – Purple will never be a multiple of 3–it will always be 2 more than a multiple of 3.\nTherefore, it is not possible for the 13 Purple, 15 Yellow, and 17 Maroon chameleons to ever all become the same colour."
      },
      {
        "t": "p",
        "text": "P16"
      }
    ]
  },
  {
    "id": "p16",
    "title": "Heaven and Hell",
    "category": "Logic & Deduction",
    "problem": [
      {
        "t": "img",
        "src": "image95.jpg"
      },
      {
        "t": "img",
        "src": "image224.png"
      },
      {
        "t": "h",
        "text": "🔹 Problem (Simple English)"
      },
      {
        "t": "h",
        "text": "Two gates:"
      },
      {
        "t": "h",
        "text": "One → Heaven"
      },
      {
        "t": "h",
        "text": "One → Hell"
      },
      {
        "t": "h",
        "text": "Two gatekeepers:"
      },
      {
        "t": "h",
        "text": "One always tells the truth"
      },
      {
        "t": "h",
        "text": "One always lies"
      },
      {
        "t": "h",
        "text": "You don’t know:"
      },
      {
        "t": "h",
        "text": "Which gate is Heaven"
      },
      {
        "t": "h",
        "text": "Which gatekeeper is liar or truthful"
      },
      {
        "t": "h",
        "text": "You can:"
      },
      {
        "t": "h",
        "text": "Ask only ONE question"
      },
      {
        "t": "h",
        "text": "To only ONE gatekeeper"
      },
      {
        "t": "h",
        "text": "Goal:\n 👉 Guarantee finding the gate to Heaven"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "✅ THE QUESTION (FINAL ANSWER)"
      },
      {
        "t": "h",
        "text": "Ask either gatekeeper this question:"
      },
      {
        "t": "h",
        "text": "“If I were to ask the other gatekeeper which gate leads to Heaven, which gate would they point to?”"
      },
      {
        "t": "h",
        "text": "🎯 WHAT YOU DO AFTER THEY ANSWER"
      },
      {
        "t": "h",
        "text": "👉 Go to the OPPOSITE gate of the one they point to."
      },
      {
        "t": "h",
        "text": "🧠 WHY THIS ALWAYS WORKS (FEEL VERSION)"
      },
      {
        "t": "h",
        "text": "No matter whom you ask, the answer will always point to Hell."
      },
      {
        "t": "h",
        "text": "Let’s see both cases 👇"
      },
      {
        "t": "h",
        "text": "🟢 Case 1: You ask the Truth-teller"
      },
      {
        "t": "h",
        "text": "Truth-teller will honestly say what the liar would answer"
      },
      {
        "t": "h",
        "text": "The liar would lie and point to Hell"
      },
      {
        "t": "h",
        "text": "So the truth-teller says:\n\n “The other would point to THIS gate” (Hell)"
      },
      {
        "t": "h",
        "text": "🔴 Case 2: You ask the Liar"
      },
      {
        "t": "h",
        "text": "The liar lies about what the truth-teller would say"
      },
      {
        "t": "h",
        "text": "The truth-teller would point to Heaven"
      },
      {
        "t": "h",
        "text": "The liar lies and points to Hell"
      },
      {
        "t": "h",
        "text": "🔥 BIG RESULT"
      },
      {
        "t": "h",
        "text": "👉 In both cases, the answer you hear is Hell"
      },
      {
        "t": "h",
        "text": "So you simply:"
      },
      {
        "t": "h",
        "text": "Choose the opposite gate → Heaven"
      },
      {
        "t": "h",
        "text": "🧠 CORE FEEL (YAAD RAKH)"
      },
      {
        "t": "h",
        "text": "A lie about the truth = a lie\n A truth about a lie = still wrong"
      },
      {
        "t": "h",
        "text": "Double logic cancels identity and gives the same result."
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW ME AISE BOLEGA (CONFIDENCE KE SAATH)"
      }
    ]
  },
  {
    "id": "p17",
    "title": "Mislabeled Jars",
    "category": "Poison, Pills & Testing",
    "problem": [
      {
        "t": "img",
        "src": "image65.png"
      },
      {
        "t": "img",
        "src": "image216.png"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (FEEL FIRST)"
      },
      {
        "t": "p",
        "text": "Table pe **3 jars** pade hain:"
      },
      {
        "t": "li",
        "text": "**Jar A** → label: Candies"
      },
      {
        "t": "li",
        "text": "**Jar B** → label: Sweets"
      },
      {
        "t": "li",
        "text": "**Jar C** → label: Candies & Sweets (Mixed)"
      },
      {
        "t": "p",
        "text": "⚠️ **Important rule**:\n 👉 **ALL labels are WRONG**\n 👉 Ek bhi label sahi nahi hai"
      },
      {
        "t": "p",
        "text": "Aur dikkat:"
      },
      {
        "t": "li",
        "text": "Candies aur sweets **touch se same lagte hain**"
      },
      {
        "t": "li",
        "text": "Sirf **ek item nikaal ke dekh sakta hai**"
      },
      {
        "t": "li",
        "text": "Goal: **sab jars ko sahi label karna**"
      },
      {
        "t": "li",
        "text": "Question: **minimum picks kitne?**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🧠 CORE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**Jo jar “Mixed” likha hai,\n wo mixed ho hi nahi sakta.**"
      },
      {
        "t": "p",
        "text": "Yahi se poora puzzle khulta hai 🔓"
      },
      {
        "t": "h",
        "text": "🔥 MASTER MOVE (SIRF EK PICK)"
      },
      {
        "t": "p",
        "text": "👉 **Jar C se sirf 1 item nikaalo**"
      },
      {
        "t": "p",
        "text": "Kyun?"
      },
      {
        "t": "li",
        "text": "Kyunki C pe Mixed likha hai"
      },
      {
        "t": "li",
        "text": "Aur labels galat hain"
      },
      {
        "t": "li",
        "text": "Matlab **C pure Candies ya pure Sweets me se ek hi hoga**"
      },
      {
        "t": "h",
        "text": "🤯 AB MAGIC HOTA HAI"
      },
      {
        "t": "h",
        "text": "Case: Jar C se Candy nikli"
      },
      {
        "t": "p",
        "text": "Soch kya confirm ho gaya?"
      },
      {
        "t": "p",
        "text": "👉 Jar C **pure Candies** hai\n (mixed ho hi nahi sakta tha)"
      },
      {
        "t": "h",
        "text": "🧠 AB BAQI JARS KA LOGIC (AUTO SOLVE)"
      },
      {
        "t": "h",
        "text": "Jar B"
      },
      {
        "t": "li",
        "text": "Label hai: Sweets"
      },
      {
        "t": "li",
        "text": "Par label galat hai ❌"
      },
      {
        "t": "li",
        "text": "Aur C already Candies ho gaya"
      },
      {
        "t": "p",
        "text": "👉 Jar B:"
      },
      {
        "t": "li",
        "text": "Candies nahi ho sakta"
      },
      {
        "t": "li",
        "text": "Sweets bhi nahi (label galat hai)\n ✔️ **Sirf Mixed hi bachta hai**"
      },
      {
        "t": "h",
        "text": "Jar A"
      },
      {
        "t": "li",
        "text": "Ab jo last bacha\n ✔️ **Pure Sweets**"
      },
      {
        "t": "h",
        "text": "✅ FINAL CORRECT LABELS"
      },
      {
        "t": "table",
        "rows": [
          [
            "Jar",
            "Actual Content"
          ],
          [
            "A",
            "Sweets"
          ],
          [
            "B",
            "Candies & Sweets (Mixed)"
          ],
          [
            "C",
            "Candies"
          ]
        ]
      },
      {
        "t": "p",
        "text": "🎯 **Sirf 1 pick me poora solve** 🔥"
      },
      {
        "t": "h",
        "text": "❓ Agar Jar C se Sweet nikalti?"
      },
      {
        "t": "p",
        "text": "Same logic, bas roles flip:"
      },
      {
        "t": "table",
        "rows": [
          [
            "Jar",
            "Actual Content"
          ],
          [
            "C",
            "Sweets"
          ],
          [
            "B",
            "Mixed"
          ],
          [
            "A",
            "Candies"
          ]
        ]
      },
      {
        "t": "h",
        "text": "🏁 FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "👉 **Minimum eatables to pick = 1**"
      },
      {
        "t": "h",
        "text": "🧠 FEEL WALI LINE (GOLD)"
      },
      {
        "t": "p",
        "text": "**“The jar labeled ‘Mixed’ is the only jar that gives full information from one pick.”**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW ME AISE BOLEGA (CONFIDENCE KE SAATH)"
      },
      {
        "t": "p",
        "text": "“Since all labels are wrong, the jar labeled ‘mixed’ cannot actually be mixed.\n By picking just one item from that jar, we immediately know its true content.\n The remaining jars can then be deduced logically without any further picks.”"
      },
      {
        "t": "p",
        "text": "P18"
      }
    ]
  },
  {
    "id": "p18",
    "title": "8 Balls Problem (2 Weighings)",
    "category": "Measuring & Weighing",
    "problem": [
      {
        "t": "img",
        "src": "image13.png"
      },
      {
        "t": "img",
        "src": "image94.png"
      },
      {
        "t": "img",
        "src": "image8.jpg"
      },
      {
        "t": "h",
        "text": "🎯 Problem ko FEEL ke saath samjho"
      },
      {
        "t": "li",
        "text": "**8 balls** bilkul identical dikhte hain"
      },
      {
        "t": "li",
        "text": "**7 normal** hain, **1 defective** hai"
      },
      {
        "t": "li",
        "text": "Defective ball **lighter** hai"
      },
      {
        "t": "li",
        "text": "Tumhare paas **weighing scale** hai"
      },
      {
        "t": "li",
        "text": "Sirf **2 measurements** allowed"
      },
      {
        "t": "li",
        "text": "Goal: **defective ball ka exact number batana**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 CORE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**Har weighing ek question hai.\n Har question se maximum possibilities eliminate karni hoti hain.**"
      },
      {
        "t": "p",
        "text": "2 weighings ⇒ maximum smart splitting chahiye."
      },
      {
        "t": "h",
        "text": "🧠 STEP 1: BALLS KO SMARTLY TOD DO"
      },
      {
        "t": "p",
        "text": "Soch:"
      },
      {
        "t": "li",
        "text": "8 balls ko agar seedha half–half kar diya → problem aayegi"
      },
      {
        "t": "li",
        "text": "Isliye hum **3–3–2** me todte hain"
      },
      {
        "t": "h",
        "text": "Groups banao:"
      },
      {
        "t": "li",
        "text": "**C1** = B1, B2, B3"
      },
      {
        "t": "li",
        "text": "**C2** = B4, B5, B6"
      },
      {
        "t": "li",
        "text": "**C3** = B7, B8"
      },
      {
        "t": "h",
        "text": "⚖️ STEP 2: PEHLA WEIGHING (BIG DECISION)"
      },
      {
        "t": "p",
        "text": "👉 **C1 vs C2** ko scale pe rakho"
      },
      {
        "t": "p",
        "text": "Ab sirf **3 possible outcomes** ho sakte hain:"
      },
      {
        "t": "h",
        "text": "🔵 Case 1: C1 = C2"
      },
      {
        "t": "p",
        "text": "FEEL:"
      },
      {
        "t": "p",
        "text": "“Dono side equal hain, matlab in 6 me koi problem nahi.”"
      },
      {
        "t": "p",
        "text": "👉 Defective ball **C3 (B7 ya B8)** me hai"
      },
      {
        "t": "li",
        "text": "B7 vs B8"
      },
      {
        "t": "p",
        "text": "Lighter jo hoga → **defective**"
      },
      {
        "t": "p",
        "text": "🎯 Done in 2 weighings ✔️"
      },
      {
        "t": "h",
        "text": "🔴 Case 2: C1 < C2"
      },
      {
        "t": "p",
        "text": "FEEL:"
      },
      {
        "t": "p",
        "text": "“C1 halka hai → problem isi group me hai.”"
      },
      {
        "t": "p",
        "text": "👉 Defective ball **B1, B2, ya B3** me hai"
      },
      {
        "t": "li",
        "text": "B1 vs B2"
      },
      {
        "t": "p",
        "text": "Outcomes:"
      },
      {
        "t": "li",
        "text": "Equal → B3 defective"
      },
      {
        "t": "li",
        "text": "B1 lighter → B1 defective"
      },
      {
        "t": "li",
        "text": "B2 lighter → B2 defective"
      },
      {
        "t": "p",
        "text": "🎯 Done in 2 weighings ✔️"
      },
      {
        "t": "h",
        "text": "🟠 Case 3: C1 > C2"
      },
      {
        "t": "p",
        "text": "FEEL:"
      },
      {
        "t": "p",
        "text": "“C2 halka hai → problem udhar hai.”"
      },
      {
        "t": "p",
        "text": "👉 Defective ball **B4, B5, ya B6** me hai"
      },
      {
        "t": "li",
        "text": "B4 vs B5"
      },
      {
        "t": "p",
        "text": "Outcomes:"
      },
      {
        "t": "li",
        "text": "Equal → B6 defective"
      },
      {
        "t": "li",
        "text": "B4 lighter → B4 defective"
      },
      {
        "t": "li",
        "text": "B5 lighter → B5 defective"
      },
      {
        "t": "p",
        "text": "🎯 Done in 2 weighings ✔️"
      },
      {
        "t": "h",
        "text": "🤯 WHY THIS WORKS (FEEL LINE)"
      },
      {
        "t": "p",
        "text": "**Pehli weighing se hum location narrow kar dete hain,\n doosri weighing se exact identity mil jaati hai.**"
      },
      {
        "t": "h",
        "text": "🧠 DECISION TREE FEEL (MENTAL IMAGE)"
      },
      {
        "t": "p",
        "text": "C1 vs C2"
      },
      {
        "t": "p",
        "text": "equal   <      >"
      },
      {
        "t": "p",
        "text": "C3     C1     C2"
      },
      {
        "t": "p",
        "text": "B7 vs B8  B1vsB2  B4vsB5"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW ME AISE BOLEGA (CONFIDENT SCRIPT)"
      },
      {
        "t": "p",
        "text": "“I divide the balls into three groups of 3, 3, and 2.\n The first weighing identifies which group contains the lighter ball.\n The second weighing compares two balls within that group to identify the defective one.\n Thus, the defective ball is found in exactly two measurements.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER (INTERVIEW IMPRESS)"
      },
      {
        "t": "p",
        "text": "**“The trick is a 3–3–2 split to maximize information from each weighing.”**"
      },
      {
        "t": "h",
        "text": "❌ Common Galti"
      },
      {
        "t": "li",
        "text": "❌ 4–4 split karna"
      },
      {
        "t": "li",
        "text": "❌ Random comparisons"
      },
      {
        "t": "li",
        "text": "❌ Second weighing ka plan pehle se na sochna"
      },
      {
        "t": "h",
        "text": "🏁 FINAL TAKEAWAY"
      },
      {
        "t": "p",
        "text": "✔ Exactly **2 weighings**\n ✔ Guaranteed result\n ✔ Logic = **information elimination**"
      },
      {
        "t": "p",
        "text": "M10"
      },
      {
        "t": "p",
        "text": "PUZZLE-07)"
      }
    ]
  },
  {
    "id": "p19",
    "title": "Cheryl’s Birthday",
    "category": "Probability & Expectation",
    "problem": [
      {
        "t": "img",
        "src": "image107.jpg"
      },
      {
        "t": "img",
        "src": "image227.jpg"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (VERY IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Cheryl ke paas ye **10 possible dates** hain:"
      },
      {
        "t": "li",
        "text": "**May** 15, 16, 19"
      },
      {
        "t": "li",
        "text": "**June** 17, 18"
      },
      {
        "t": "li",
        "text": "**July** 14, 16"
      },
      {
        "t": "li",
        "text": "**August** 14, 15, 17"
      },
      {
        "t": "p",
        "text": "Cheryl:"
      },
      {
        "t": "li",
        "text": "**Albert** ko sirf **MONTH** batati hai"
      },
      {
        "t": "li",
        "text": "**Bernard** ko sirf **DAY** batati hai"
      },
      {
        "t": "p",
        "text": "Aur phir ye baat-cheet hoti hai 👇"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🧠 STEP 1: Albert ka pehla statement (GAME START 🔥)"
      },
      {
        "t": "p",
        "text": "**Albert:**\n “I don’t know Cheryl’s birthday, but I know that Bernard doesn’t know either.”"
      },
      {
        "t": "h",
        "text": "FEEL THIS 👇"
      },
      {
        "t": "p",
        "text": "Albert ke paas **sirf month** hai.\n Phir bhi wo confidently bol raha hai:"
      },
      {
        "t": "p",
        "text": "“Bernard abhi bhi confused hai.”"
      },
      {
        "t": "p",
        "text": "Iska matlab:"
      },
      {
        "t": "li",
        "text": "Albert ko **aise month** bataya gaya hai"
      },
      {
        "t": "li",
        "text": "Jisme **koi aisa day nahi** jo Bernard ko turant answer de deta"
      },
      {
        "t": "h",
        "text": "⚠️ Critical observation"
      },
      {
        "t": "p",
        "text": "Agar Bernard ko **18** ya **19** day mila hota:"
      },
      {
        "t": "li",
        "text": "18 → sirf **June 18**"
      },
      {
        "t": "li",
        "text": "19 → sirf **May 19**"
      },
      {
        "t": "p",
        "text": "👉 Bernard **turant jaan jaata**"
      },
      {
        "t": "p",
        "text": "Par Albert keh raha hai:"
      },
      {
        "t": "p",
        "text": "“Bernard nahi jaanta”"
      },
      {
        "t": "p",
        "text": "👉 Matlab **May aur June impossible** ❌"
      },
      {
        "t": "h",
        "text": "❌ Eliminate"
      },
      {
        "t": "li",
        "text": "May 15, 16, 19"
      },
      {
        "t": "li",
        "text": "June 17, 18"
      },
      {
        "t": "h",
        "text": "✅ Remaining dates"
      },
      {
        "t": "li",
        "text": "**July** 14, 16"
      },
      {
        "t": "li",
        "text": "**August** 14, 15, 17"
      },
      {
        "t": "h",
        "text": "🧠 STEP 2: Bernard ka statement (TURNING POINT)"
      },
      {
        "t": "p",
        "text": "**Bernard:**\n “At first I didn’t know, but now I know.”"
      },
      {
        "t": "h",
        "text": "FEEL THIS 👇"
      },
      {
        "t": "p",
        "text": "Bernard ke paas **sirf day** hai."
      },
      {
        "t": "p",
        "text": "Ab soch:"
      },
      {
        "t": "li",
        "text": "Agar uske paas **14** hota:"
      },
      {
        "t": "li",
        "text": "July 14"
      },
      {
        "t": "li",
        "text": "August 14\n 👉 Ab bhi confusion hota"
      },
      {
        "t": "p",
        "text": "Isliye:"
      },
      {
        "t": "p",
        "text": "Bernard ka day **14 nahi ho sakta**"
      },
      {
        "t": "h",
        "text": "❌ Eliminate"
      },
      {
        "t": "li",
        "text": "July 14"
      },
      {
        "t": "li",
        "text": "August 14"
      },
      {
        "t": "h",
        "text": "✅ Remaining dates"
      },
      {
        "t": "li",
        "text": "**July 16**"
      },
      {
        "t": "li",
        "text": "**August 15, 17**"
      },
      {
        "t": "h",
        "text": "🧠 STEP 3: Albert ka final statement (CHECKMATE ♟️)"
      },
      {
        "t": "p",
        "text": "**Albert:**\n “Then I also know Cheryl’s birthday.”"
      },
      {
        "t": "h",
        "text": "FEEL THIS 👇"
      },
      {
        "t": "p",
        "text": "Albert ke paas **sirf month** hai."
      },
      {
        "t": "p",
        "text": "Agar month **August** hota:"
      },
      {
        "t": "li",
        "text": "Possible days = 15 or 17\n 👉 Albert still confused hota"
      },
      {
        "t": "p",
        "text": "Par Albert confident hai:"
      },
      {
        "t": "p",
        "text": "“Now I know.”"
      },
      {
        "t": "p",
        "text": "👉 Iska matlab:"
      },
      {
        "t": "li",
        "text": "Month **August nahi ho sakta**"
      },
      {
        "t": "h",
        "text": "❌ Eliminate"
      },
      {
        "t": "li",
        "text": "August 15"
      },
      {
        "t": "li",
        "text": "August 17"
      },
      {
        "t": "h",
        "text": "🏁 FINAL ANSWER 🎯"
      },
      {
        "t": "p",
        "text": "👉 **Cheryl’s birthday is: JULY 16**"
      },
      {
        "t": "h",
        "text": "🧠 PURE FEEL SUMMARY (YAAD RAKH)"
      },
      {
        "t": "li",
        "text": "Albert ka pehla statement → **May & June out**"
      },
      {
        "t": "li",
        "text": "Bernard ka confidence → **14 out**"
      },
      {
        "t": "li",
        "text": "Albert ka final certainty → **August out**"
      },
      {
        "t": "p",
        "text": "👉 Sirf ek date bachi: **July 16**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY EXPLANATION (SHORT & CLEAN)"
      },
      {
        "t": "p",
        "text": "“By analyzing what each person knows and what they know about the other’s knowledge, we can eliminate impossible dates step by step. This process leaves only one possible date: July 16.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER (IMPRESS INTERVIEWER)"
      },
      {
        "t": "p",
        "text": "**“The puzzle is solved by reasoning about others’ uncertainty, not by the dates themselves.”**"
      },
      {
        "t": "p",
        "text": "P20"
      },
      {
        "t": "h",
        "text": "0🧩 Puzzle | The Lion and the Unicorn"
      },
      {
        "t": "img",
        "src": "image119.jpg"
      },
      {
        "t": "img",
        "src": "image74.jpg"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (FEEL FIRST)"
      },
      {
        "t": "p",
        "text": "Ek ladki forest me khadi hai.\n Uske saamne:"
      },
      {
        "t": "li",
        "text": "🦁 **Lion**"
      },
      {
        "t": "li",
        "text": "**Monday, Tuesday, Wednesday** → hamesha **jhooth**"
      },
      {
        "t": "li",
        "text": "Baaki din → **sach**"
      },
      {
        "t": "li",
        "text": "🦄 **Unicorn**"
      },
      {
        "t": "li",
        "text": "**Thursday, Friday, Saturday** → hamesha **jhooth**"
      },
      {
        "t": "li",
        "text": "Baaki din → **sach**"
      },
      {
        "t": "p",
        "text": "Ab dono bolte hain 👇"
      },
      {
        "t": "p",
        "text": "🦁 Lion:"
      },
      {
        "t": "p",
        "text": "**“Yesterday I was lying.”**"
      },
      {
        "t": "p",
        "text": "🦄 Unicorn:"
      },
      {
        "t": "p",
        "text": "**“So was I.”**\n (Matlab: Yesterday main bhi jhooth bol raha tha)"
      },
      {
        "t": "p",
        "text": "👉 Question: **Aaj kaunsa din hai?**"
      },
      {
        "t": "h",
        "text": "🧠 CORE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**Dono “yesterday” ke baare me bol rahe hain,\n par humein check karna hai:\n aaj wo sach bol rahe hain ya jhooth.**"
      },
      {
        "t": "h",
        "text": "🧠 STEP 1: Lion ko FEEL karo"
      },
      {
        "t": "p",
        "text": "Lion ka statement:"
      },
      {
        "t": "p",
        "text": "“Yesterday I was lying.”"
      },
      {
        "t": "p",
        "text": "Soch:"
      },
      {
        "t": "li",
        "text": "Agar aaj **lion sach bol raha hai**,\n toh kal uska **lying-day** hona chahiye"
      },
      {
        "t": "li",
        "text": "Agar aaj **lion jhooth bol raha hai**,\n toh kal uska **truth-day** hona chahiye"
      },
      {
        "t": "p",
        "text": "Lion **jhooth bolta hai**:"
      },
      {
        "t": "li",
        "text": "Monday"
      },
      {
        "t": "li",
        "text": "Tuesday"
      },
      {
        "t": "li",
        "text": "Wednesday"
      },
      {
        "t": "p",
        "text": "Lion **sach bolta hai**:"
      },
      {
        "t": "li",
        "text": "Thursday"
      },
      {
        "t": "li",
        "text": "Friday"
      },
      {
        "t": "li",
        "text": "Saturday"
      },
      {
        "t": "li",
        "text": "Sunday"
      },
      {
        "t": "h",
        "text": "🔥 IMPORTANT OBSERVATION"
      },
      {
        "t": "p",
        "text": "Lion ka statement **perfectly fit** hota hai agar:"
      },
      {
        "t": "li",
        "text": "**Aaj = Thursday**"
      },
      {
        "t": "li",
        "text": "Kal = Wednesday"
      },
      {
        "t": "li",
        "text": "Wednesday ko lion **jhooth bolta hai**"
      },
      {
        "t": "p",
        "text": "👉 Thursday ko lion **sach bolta hai**,\n aur “Yesterday I was lying” **bilkul correct** ho jaata hai."
      },
      {
        "t": "h",
        "text": "🧠 STEP 2: Unicorn ko FEEL karo"
      },
      {
        "t": "p",
        "text": "Unicorn ka statement:"
      },
      {
        "t": "p",
        "text": "“So was I.”\n (Matlab: Yesterday main bhi jhooth bol raha tha)"
      },
      {
        "t": "p",
        "text": "Unicorn **jhooth bolta hai**:"
      },
      {
        "t": "li",
        "text": "Thursday"
      },
      {
        "t": "li",
        "text": "Friday"
      },
      {
        "t": "li",
        "text": "Saturday"
      },
      {
        "t": "p",
        "text": "Unicorn **sach bolta hai**:"
      },
      {
        "t": "li",
        "text": "Sunday"
      },
      {
        "t": "li",
        "text": "Monday"
      },
      {
        "t": "li",
        "text": "Tuesday"
      },
      {
        "t": "li",
        "text": "Wednesday"
      },
      {
        "t": "h",
        "text": "Agar aaj Thursday ho:"
      },
      {
        "t": "li",
        "text": "Unicorn aaj **jhooth bolta hai**"
      },
      {
        "t": "li",
        "text": "Wo keh raha hai: “Yesterday main jhooth bol raha tha”"
      },
      {
        "t": "p",
        "text": "Kal = Wednesday\n Wednesday ko unicorn **sach bolta hai**"
      },
      {
        "t": "p",
        "text": "👉 Matlab uska statement **jhooth** hai\n 👉 Aur aaj unicorn **jhooth bolta hi hai**"
      },
      {
        "t": "p",
        "text": "✔️ **Perfect match**"
      },
      {
        "t": "h",
        "text": "🔥 DONO STATEMENTS EK HI DIN PE MATCH KARTE HAIN"
      },
      {
        "t": "li",
        "text": "Lion: Thursday ko sach bolta, aur kal (Wednesday) jhooth bolta tha ✔️"
      },
      {
        "t": "li",
        "text": "Unicorn: Thursday ko jhooth bolta, aur “yesterday I was lying” jhooth hi hai ✔️"
      },
      {
        "t": "h",
        "text": "🏁 FINAL ANSWER 🎯"
      },
      {
        "t": "p",
        "text": "✅ **Today is THURSDAY**"
      },
      {
        "t": "h",
        "text": "🧠 FEEL WALI ONE-LINE"
      },
      {
        "t": "p",
        "text": "**“The only day when the lion tells the truth about lying yesterday,\n and the unicorn lies about lying yesterday, is Thursday.”**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY EXPLANATION (SHORT)"
      },
      {
        "t": "p",
        "text": "“On Thursday, the lion tells the truth and was lying on Wednesday, so his statement is true. The unicorn lies on Thursday and falsely claims he was lying yesterday, even though he told the truth on Wednesday. Hence, today must be Thursday.”"
      },
      {
        "t": "h",
        "text": "💎 MEMORY TRICK"
      },
      {
        "t": "p",
        "text": "**Truth + yesterday’s lie must align for both.**"
      },
      {
        "t": "p",
        "text": "P21"
      }
    ]
  },
  {
    "id": "p20",
    "title": "Farmer, Goat, Wolf and Cabbage",
    "category": "River Crossing",
    "problem": [
      {
        "t": "img",
        "src": "image160.png"
      },
      {
        "t": "img",
        "src": "image111.jpg"
      },
      {
        "t": "img",
        "src": "image105.png"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (FEEL FIRST)"
      },
      {
        "t": "p",
        "text": "Soch:"
      },
      {
        "t": "li",
        "text": "Ek **farmer**"
      },
      {
        "t": "li",
        "text": "Ek **goat 🐐**"
      },
      {
        "t": "li",
        "text": "Ek **wolf 🐺**"
      },
      {
        "t": "li",
        "text": "Ek **cabbage 🥬**"
      },
      {
        "t": "li",
        "text": "Ek **chhoti boat** 🚣"
      },
      {
        "t": "p",
        "text": "Rule:"
      },
      {
        "t": "li",
        "text": "Boat me **farmer + sirf ek cheez** ja sakti hai"
      },
      {
        "t": "p",
        "text": "Dikkat:"
      },
      {
        "t": "li",
        "text": "Goat + Wolf akela = **wolf goat kha jaayega**"
      },
      {
        "t": "li",
        "text": "Goat + Cabbage akela = **goat cabbage kha jaayega**"
      },
      {
        "t": "p",
        "text": "👉 Farmer ka kaam: **sabko safely doosri side pahunchana**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 CORE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**Goat sabse dangerous combination hai.\n Jahan goat ho, wahan farmer ka control hona chahiye.**"
      },
      {
        "t": "p",
        "text": "Goat ko **kabhi bhi galat log ke saath akela nahi chhod sakte**."
      },
      {
        "t": "h",
        "text": "🧠 STEP-BY-STEP STORY (FEEL MODE)"
      },
      {
        "t": "h",
        "text": "🚣 Trip 1: Farmer + Goat"
      },
      {
        "t": "p",
        "text": "Farmer sochta:"
      },
      {
        "t": "p",
        "text": "“Goat dono ko kha sakta hai / khud kha ja sakta hai.\n Isko pehle le jaata hoon.”"
      },
      {
        "t": "p",
        "text": "👉 Farmer **goat ko le jaata hai**"
      },
      {
        "t": "p",
        "text": "Left side: Wolf + Cabbage (safe)\n Right side: Goat"
      },
      {
        "t": "p",
        "text": "Farmer wapas **akela** aata hai"
      },
      {
        "t": "h",
        "text": "🚣 Trip 2: Farmer + Wolf"
      },
      {
        "t": "p",
        "text": "Ab farmer wolf ko le jaata hai."
      },
      {
        "t": "p",
        "text": "Right side: Goat + Wolf ❌ (danger!)"
      },
      {
        "t": "p",
        "text": "⚠️ Isliye farmer **goat ko wapas le aata hai**"
      },
      {
        "t": "p",
        "text": "Result:"
      },
      {
        "t": "li",
        "text": "Left side: Goat + Cabbage"
      },
      {
        "t": "li",
        "text": "Right side: Wolf"
      },
      {
        "t": "p",
        "text": "(Safe, kyunki goat cabbage ke saath tabhi hai jab farmer present hai)"
      },
      {
        "t": "h",
        "text": "🚣 Trip 3: Farmer + Cabbage"
      },
      {
        "t": "p",
        "text": "Ab farmer cabbage ko le jaata hai."
      },
      {
        "t": "p",
        "text": "Right side: Wolf + Cabbage (safe)\n Left side: Goat"
      },
      {
        "t": "p",
        "text": "Farmer wapas **akela** aata hai"
      },
      {
        "t": "h",
        "text": "🚣 Trip 4: Farmer + Goat (FINAL)"
      },
      {
        "t": "p",
        "text": "Ab goat ko le jaata hai."
      },
      {
        "t": "p",
        "text": "Right side:"
      },
      {
        "t": "li",
        "text": "Goat 🐐"
      },
      {
        "t": "li",
        "text": "Wolf 🐺"
      },
      {
        "t": "li",
        "text": "Cabbage 🥬"
      },
      {
        "t": "p",
        "text": "🎉 **MISSION COMPLETE**"
      },
      {
        "t": "h",
        "text": "🏁 FINAL SAFE SEQUENCE (YAAD RAKHNE KE LIYE)"
      },
      {
        "t": "p",
        "text": "1️⃣ Goat →\n 2️⃣ Wolf → Goat back ←\n 3️⃣ Cabbage →\n 4️⃣ Goat →"
      },
      {
        "t": "h",
        "text": "🤯 KYU YE KAAM KARTA HAI? (FEEL LINE)"
      },
      {
        "t": "p",
        "text": "**Goat ko “buffer” ki tarah use kiya jaata hai.\n Wo hi problem bhi hai, aur solution bhi.**"
      },
      {
        "t": "h",
        "text": "❌ COMMON GALTI (LOG YAHAN PHASTE HAIN)"
      },
      {
        "t": "li",
        "text": "❌ Pehle wolf le jaana"
      },
      {
        "t": "li",
        "text": "❌ Pehle cabbage le jaana"
      },
      {
        "t": "li",
        "text": "❌ Goat ko galat pairing ke saath chhod dena"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY EXPLANATION (SHORT)"
      },
      {
        "t": "p",
        "text": "“The key is to transport the goat first, since it creates conflicts with both the wolf and the cabbage. By using the goat as a buffer and occasionally bringing it back, the farmer ensures that no forbidden pair is ever left alone.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER"
      },
      {
        "t": "p",
        "text": "**“The goat is both the problem and the solution.”**"
      },
      {
        "t": "h",
        "text": "🧠 MEMORY TRICK"
      },
      {
        "t": "p",
        "text": "**Goat → Wolf → Goat ← → Cabbage → Goat**"
      },
      {
        "t": "p",
        "text": "P22"
      }
    ]
  },
  {
    "id": "p21",
    "title": "Water Jug Problem (4 Gallon & 9 Gallon)",
    "category": "Measuring & Weighing",
    "problem": [
      {
        "t": "img",
        "src": "image120.png"
      },
      {
        "t": "img",
        "src": "image180.png"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (FEEL FIRST)"
      },
      {
        "t": "p",
        "text": "Soch:"
      },
      {
        "t": "li",
        "text": "Ek jug = **4 Gallon (4G)**"
      },
      {
        "t": "li",
        "text": "Ek jug = **9 Gallon (9G)**"
      },
      {
        "t": "li",
        "text": "Dono pe **koi marking nahi**"
      },
      {
        "t": "li",
        "text": "Paani unlimited hai 🚰"
      },
      {
        "t": "p",
        "text": "Tum kya kar sakte ho:"
      },
      {
        "t": "li",
        "text": "Jug **fill** kar sakte ho"
      },
      {
        "t": "li",
        "text": "Jug **empty** kar sakte ho"
      },
      {
        "t": "li",
        "text": "Ek jug se doosre me **pour** kar sakte ho (jab tak ek full ya doosra empty)"
      },
      {
        "t": "p",
        "text": "❓ Question:"
      },
      {
        "t": "p",
        "text": "**Kya hum 1G se leke 9G tak sab exact amount nikal sakte hain?**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 CORE FEEL (SABSE IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**Jug puzzle ka magic “remainder” me hota hai.\n Jo paani bach jaata hai, wahi measurement hota hai.**"
      },
      {
        "t": "p",
        "text": "4 aur 9 **co-prime** hain\n 👉 isliye **har quantity possible** hai 🔥"
      },
      {
        "t": "h",
        "text": "🧠 AB STORY KE SAATH SAMJHO (AMOUNTS ONE BY ONE)"
      },
      {
        "t": "h",
        "text": "✅ 4G aur 9G (easy)"
      },
      {
        "t": "li",
        "text": "4G → 4G jug poora bharo"
      },
      {
        "t": "li",
        "text": "9G → 9G jug poora bharo"
      },
      {
        "t": "h",
        "text": "✅ 5G (FIRST REAL FEEL)"
      },
      {
        "t": "li",
        "text": "9G jug bharo"
      },
      {
        "t": "li",
        "text": "9G → 4G me daalo (jab tak 4G full)"
      },
      {
        "t": "p",
        "text": "👉 9 − 4 = **5G bacha**\n 🎯 **5G mil gaya**"
      },
      {
        "t": "h",
        "text": "✅ 1G (REMAINDER GAME 🔥)"
      },
      {
        "t": "li",
        "text": "9G bharo"
      },
      {
        "t": "li",
        "text": "9G → 4G (4G full) → 5G bacha"
      },
      {
        "t": "li",
        "text": "4G empty"
      },
      {
        "t": "li",
        "text": "5G → 4G (4G full)"
      },
      {
        "t": "p",
        "text": "👉 5 − 4 = **1G bacha (9G me)**\n 🎯 **1G mil gaya**"
      },
      {
        "t": "p",
        "text": "💡 FEEL:"
      },
      {
        "t": "p",
        "text": "“Repeated subtraction se smallest unit nikalta hai.”"
      },
      {
        "t": "h",
        "text": "✅ 8G"
      },
      {
        "t": "li",
        "text": "4G bharo → 9G me daalo"
      },
      {
        "t": "li",
        "text": "4G bharo → 9G me daalo"
      },
      {
        "t": "p",
        "text": "👉 4 + 4 = **8G**\n 🎯 Simple"
      },
      {
        "t": "h",
        "text": "✅ 3G"
      },
      {
        "t": "li",
        "text": "4G bharo → 9G me daalo"
      },
      {
        "t": "li",
        "text": "4G bharo → 9G me daalo"
      },
      {
        "t": "li",
        "text": "4G bharo → 9G me daalo (9G full ho jaata)"
      },
      {
        "t": "p",
        "text": "👉 4G jug me **3G bacha**\n 🎯 **3G**"
      },
      {
        "t": "h",
        "text": "✅ 7G"
      },
      {
        "t": "li",
        "text": "Ab tumhe **3G aata hai**"
      },
      {
        "t": "li",
        "text": "3G → 9G"
      },
      {
        "t": "li",
        "text": "4G bharo"
      },
      {
        "t": "p",
        "text": "👉 3 + 4 = **7G**\n 🎯 Done"
      },
      {
        "t": "h",
        "text": "✅ 2G"
      },
      {
        "t": "li",
        "text": "Ab setup:"
      },
      {
        "t": "li",
        "text": "9G = 7G"
      },
      {
        "t": "li",
        "text": "4G = empty"
      },
      {
        "t": "li",
        "text": "4G bharo"
      },
      {
        "t": "li",
        "text": "4G → 9G (jab tak 9G full)"
      },
      {
        "t": "p",
        "text": "👉 4 − 2 = **2G bacha (4G me)**\n 🎯 **2G**"
      },
      {
        "t": "h",
        "text": "✅ 6G"
      },
      {
        "t": "li",
        "text": "Ab tumhare paas **2G** hai"
      },
      {
        "t": "li",
        "text": "2G → 9G"
      },
      {
        "t": "li",
        "text": "4G bharo"
      },
      {
        "t": "p",
        "text": "👉 2 + 4 = **6G**\n 🎯 Done"
      },
      {
        "t": "h",
        "text": "🏁 FINAL CONCLUSION"
      },
      {
        "t": "p",
        "text": "✅ **Yes, using 4G and 9G unmarked jugs, we can measure every amount from 1G to 9G.**"
      },
      {
        "t": "h",
        "text": "🧠 BIG FEEL LINE (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**“Jug puzzles are solved by creating remainders, not by measuring directly.”**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ANSWER (SHORT & STRONG)"
      },
      {
        "t": "p",
        "text": "“Since 4 and 9 are coprime, any amount from 1 to 9 gallons can be obtained by repeatedly filling, emptying, and transferring water between the jugs. The key idea is to use remainders created during transfers.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER"
      },
      {
        "t": "p",
        "text": "**“Coprime jug sizes guarantee all measurements are possible.”**"
      },
      {
        "t": "h",
        "text": "🧠 MEMORY TRICK"
      },
      {
        "t": "p",
        "text": "**Subtract → Remainder → Build again**"
      },
      {
        "t": "p",
        "text": "P23"
      }
    ]
  },
  {
    "id": "p22",
    "title": "Blind Man and Pills",
    "category": "Poison, Pills & Testing",
    "problem": [
      {
        "t": "img",
        "src": "image238.png"
      },
      {
        "t": "img",
        "src": "image108.png"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (FEEL FIRST)"
      },
      {
        "t": "p",
        "text": "Soch:"
      },
      {
        "t": "li",
        "text": "Ek **blind man** 🧑‍🦯"
      },
      {
        "t": "li",
        "text": "Deserted island 🌴"
      },
      {
        "t": "li",
        "text": "Uske paas:"
      },
      {
        "t": "li",
        "text": "**2 Red pills**"
      },
      {
        "t": "li",
        "text": "**2 Blue pills**"
      },
      {
        "t": "li",
        "text": "Rule:\n 👉 **Har din exactly 1 red + 1 blue lena zaroori**\n 👉 Zyada / kam hua → **death**"
      },
      {
        "t": "p",
        "text": "Problem:"
      },
      {
        "t": "li",
        "text": "Wo **dekh nahi sakta**"
      },
      {
        "t": "li",
        "text": "Touch se bhi **red–blue ka farq pata nahi**"
      },
      {
        "t": "li",
        "text": "Pills **identical feel hoti hain**"
      },
      {
        "t": "p",
        "text": "❓ Question:"
      },
      {
        "t": "p",
        "text": "**Wo kaise guarantee karega ki exactly 1 red aur 1 blue le?**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 CORE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**Jab pehchaan possible na ho,\n tab “equal division” safest strategy hoti hai.**"
      },
      {
        "t": "h",
        "text": "✅ SOLUTION 1 (SABSE CLASSIC – FEEL WALA)"
      },
      {
        "t": "h",
        "text": "🧠 IDEA"
      },
      {
        "t": "p",
        "text": "“Agar har pill ka aadha loonga,\n toh total hamesha balanced hoga.”"
      },
      {
        "t": "h",
        "text": "🪜 STEP-BY-STEP (STORY MODE)"
      },
      {
        "t": "p",
        "text": "1️⃣ Blind man **har pill ko aadha tod deta hai**"
      },
      {
        "t": "li",
        "text": "2 Red → 4 halves"
      },
      {
        "t": "li",
        "text": "2 Blue → 4 halves"
      },
      {
        "t": "p",
        "text": "2️⃣ Har pill todte waqt:"
      },
      {
        "t": "li",
        "text": "**Ek half turant kha leta hai**"
      },
      {
        "t": "li",
        "text": "**Ek half kal ke liye rakh leta hai**"
      },
      {
        "t": "p",
        "text": "3️⃣ Aakhir me kya hua?"
      },
      {
        "t": "li",
        "text": "Usne khaya:"
      },
      {
        "t": "li",
        "text": "2 Red halves = **1 Red**"
      },
      {
        "t": "li",
        "text": "2 Blue halves = **1 Blue**"
      },
      {
        "t": "p",
        "text": "🎯 **Exactly required dose mil gaya**"
      },
      {
        "t": "p",
        "text": "4️⃣ Kal ke liye bhi:"
      },
      {
        "t": "li",
        "text": "Same number of halves bachi hain"
      },
      {
        "t": "li",
        "text": "Same trick repeat karega"
      },
      {
        "t": "h",
        "text": "🔥 FEEL LINE"
      },
      {
        "t": "p",
        "text": "**“Half of everything = full balance.”**"
      },
      {
        "t": "h",
        "text": "✅ SOLUTION 2 (BRAINY / MATH FEEL)"
      },
      {
        "t": "h",
        "text": "🧠 IDEA"
      },
      {
        "t": "p",
        "text": "“Mix kar do, phir equal divide.”"
      },
      {
        "t": "h",
        "text": "🪜 STEPS"
      },
      {
        "t": "p",
        "text": "1️⃣ Sab pills **crush** kar do\n 2️⃣ Sab powder **achhe se mix** kar do\n 3️⃣ Mixture ko **2 equal parts** me divide karo\n 4️⃣ **Ek part kha lo**"
      },
      {
        "t": "h",
        "text": "🤯 MAGIC"
      },
      {
        "t": "li",
        "text": "Total pills = 2 Red + 2 Blue"
      },
      {
        "t": "li",
        "text": "Half mixture ="
      },
      {
        "t": "li",
        "text": "1 Red"
      },
      {
        "t": "li",
        "text": "1 Blue"
      },
      {
        "t": "p",
        "text": "🎯 **Guaranteed correctness**"
      },
      {
        "t": "h",
        "text": "🧠 KYU YE DONO KAAM KARTE HAIN? (FEEL)"
      },
      {
        "t": "p",
        "text": "**Color ki pehchaan nahi,\n par quantity ki equality control me hai.**"
      },
      {
        "t": "p",
        "text": "Isliye puzzle **blind hone ke baad bhi solvable** hai."
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ANSWER (SHORT & STRONG)"
      },
      {
        "t": "p",
        "text": "“Since he cannot distinguish the pills, he splits all pills in half and consumes one half from each. This guarantees that he ingests exactly one red pill and one blue pill.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER (IMPRESS INTERVIEWER)"
      },
      {
        "t": "p",
        "text": "**“When identification fails, symmetry guarantees correctness.”**"
      },
      {
        "t": "h",
        "text": "🧠 MEMORY TRICK"
      },
      {
        "t": "p",
        "text": "**Blind + Balance = Safe**"
      },
      {
        "t": "p",
        "text": "P24"
      }
    ]
  },
  {
    "id": "p23",
    "title": "The Burning Candles",
    "category": "Bridge, Time & Speed",
    "problem": [
      {
        "t": "img",
        "src": "image46.jpg"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (FEEL FIRST)"
      },
      {
        "t": "p",
        "text": "Soch:"
      },
      {
        "t": "li",
        "text": "**2 candles**"
      },
      {
        "t": "li",
        "text": "Har candle **1 hour** me poori jal jaati hai"
      },
      {
        "t": "li",
        "text": "❌ Par **evenly nahi jalti** (kabhi tez, kabhi slow)"
      },
      {
        "t": "li",
        "text": "Tumhare paas sirf **matches** hain"
      },
      {
        "t": "li",
        "text": "Goal:"
      },
      {
        "t": "li",
        "text": "**45 minutes measure karna**"
      },
      {
        "t": "li",
        "text": "**15 minutes measure karna**"
      },
      {
        "t": "p",
        "text": "⚠️ Important:"
      },
      {
        "t": "p",
        "text": "Candle ka “length” ya “shape” time ka reliable indicator nahi hai.\n Sirf **burning ends ki count** matter karti hai."
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 CORE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**A candle burning from both ends burns twice as fast.**"
      },
      {
        "t": "li",
        "text": "1 end se → 60 min"
      },
      {
        "t": "li",
        "text": "2 ends se → 30 min"
      },
      {
        "t": "p",
        "text": "Chahe candle uneven ho — **total time fixed** hota hai."
      },
      {
        "t": "h",
        "text": "🧠 MASTER PLAN (STORY MODE)"
      },
      {
        "t": "h",
        "text": "🔥 STEP 1: START THE CLOCK"
      },
      {
        "t": "li",
        "text": "**Candle A** → dono ends se jala do 🔥🔥"
      },
      {
        "t": "li",
        "text": "**Candle B** → sirf ek end se jalao 🔥"
      },
      {
        "t": "p",
        "text": "Ab kya ho raha hai?"
      },
      {
        "t": "h",
        "text": "Candle A:"
      },
      {
        "t": "li",
        "text": "Dono ends se jal rahi"
      },
      {
        "t": "li",
        "text": "Isliye **30 minutes** me poori khatam"
      },
      {
        "t": "h",
        "text": "Candle B:"
      },
      {
        "t": "li",
        "text": "Sirf ek end se jal rahi"
      },
      {
        "t": "li",
        "text": "Normal speed se"
      },
      {
        "t": "p",
        "text": "👉 **Jaise hi Candle A khatam hoti hai = 30 minutes ho chuke**"
      },
      {
        "t": "p",
        "text": "⏱️ **30-minute marker mil gaya**"
      },
      {
        "t": "h",
        "text": "🔥 STEP 2: CREATE 15 MINUTES"
      },
      {
        "t": "p",
        "text": "Ab Candle B ko dekho:"
      },
      {
        "t": "li",
        "text": "Ye **30 minutes** se jal chuki"
      },
      {
        "t": "li",
        "text": "Iske paas **30 minutes ka fuel** bacha hai"
      },
      {
        "t": "p",
        "text": "Ab trick:"
      },
      {
        "t": "p",
        "text": "👉 **Candle B ke doosre end ko bhi jala do**"
      },
      {
        "t": "p",
        "text": "Ab Candle B:"
      },
      {
        "t": "li",
        "text": "Dono ends se jal rahi"
      },
      {
        "t": "li",
        "text": "Bache hue 30 minutes ka fuel"
      },
      {
        "t": "li",
        "text": "Dono ends = double speed"
      },
      {
        "t": "p",
        "text": "⏱️ **30 ÷ 2 = 15 minutes**"
      },
      {
        "t": "p",
        "text": "👉 Candle B poori jale = **15 minutes**"
      },
      {
        "t": "h",
        "text": "🧠 TIME SUMMARY (FEEL CHECK)"
      },
      {
        "t": "table",
        "rows": [
          [
            "Action",
            "Time"
          ],
          [
            "Candle A (both ends)",
            "30 min"
          ],
          [
            "Candle B remaining (both ends)",
            "15 min"
          ],
          [
            "Total",
            "45 min"
          ]
        ]
      },
      {
        "t": "p",
        "text": "🎯 **45 minutes measure ho gaye**"
      },
      {
        "t": "p",
        "text": "Aur:"
      },
      {
        "t": "li",
        "text": "Sirf **second phase** = **15 minutes**"
      },
      {
        "t": "h",
        "text": "🤯 WHY THIS WORKS (REAL FEEL)"
      },
      {
        "t": "p",
        "text": "**We never measure length — we only change burn rate.**"
      },
      {
        "t": "p",
        "text": "Uneven burning irrelevant ho jaata hai."
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY EXPLANATION (SHORT)"
      },
      {
        "t": "p",
        "text": "“I light one candle from both ends and the other from one end. When the first candle burns out, 30 minutes have passed. Then I light the second end of the remaining candle, which burns the remaining 30 minutes of fuel in 15 minutes. This gives both 45 and 15 minutes.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER (IMPRESS INTERVIEWER)"
      },
      {
        "t": "p",
        "text": "**“Control the burning speed, not the candle.”**"
      },
      {
        "t": "p",
        "text": "M2"
      },
      {
        "t": "p",
        "text": "PUZZLE 2)"
      }
    ]
  },
  {
    "id": "p24",
    "title": "Rat and Poisonous Milk Bottles",
    "category": "Poison, Pills & Testing",
    "problem": [
      {
        "t": "img",
        "src": "image225.png"
      },
      {
        "t": "img",
        "src": "image152.jpg"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (FEEL FIRST)"
      },
      {
        "t": "p",
        "text": "Soch:"
      },
      {
        "t": "li",
        "text": "**4 milk bottles** 🍼"
      },
      {
        "t": "li",
        "text": "**Sirf 1 poisonous** ☠️"
      },
      {
        "t": "li",
        "text": "**1 rat** 🐀"
      },
      {
        "t": "li",
        "text": "Rat:"
      },
      {
        "t": "li",
        "text": "Poison peene ke **exactly 10 hours baad** marta hai"
      },
      {
        "t": "li",
        "text": "Tumhare paas:"
      },
      {
        "t": "li",
        "text": "Clock jo **sirf whole hours** dikhaata hai"
      },
      {
        "t": "li",
        "text": "Goal:\n 👉 **24 hours ke andar identify karna** kaunsa bottle poisonous hai"
      },
      {
        "t": "p",
        "text": "⚠️ Important:"
      },
      {
        "t": "p",
        "text": "Tum rat ko **multiple baar** doodh pila sakte ho\n Jab tak wo zinda hai"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 CORE FEEL (SABSE IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**Rat ka marne ka time hi answer banega.\n Bottle ≠ poison,\n Bottle = time-stamp.**"
      },
      {
        "t": "h",
        "text": "🧠 MASTER STRATEGY (STORY MODE)"
      },
      {
        "t": "p",
        "text": "Socho jaise tum **rat ko ek clock bana rahe ho** ⏰"
      },
      {
        "t": "h",
        "text": "⏱️ STEP-BY-STEP PLAN"
      },
      {
        "t": "h",
        "text": "🕐 Hour 0 (start)"
      },
      {
        "t": "p",
        "text": "👉 Rat ko **Bottle 1** ka doodh pilao"
      },
      {
        "t": "h",
        "text": "🕑 Hour 1"
      },
      {
        "t": "p",
        "text": "👉 Rat ko **Bottle 2** ka doodh pilao"
      },
      {
        "t": "h",
        "text": "🕒 Hour 2"
      },
      {
        "t": "p",
        "text": "👉 Rat ko **Bottle 3** ka doodh pilao"
      },
      {
        "t": "h",
        "text": "❌ Bottle 4"
      },
      {
        "t": "p",
        "text": "👉 **Kabhi pilaya hi nahi**"
      },
      {
        "t": "h",
        "text": "👀 AB OBSERVATION START HOTA HAI"
      },
      {
        "t": "p",
        "text": "Rat **kab marta hai**, wahi answer hai 👇"
      },
      {
        "t": "h",
        "text": "🧠 POSSIBLE CASES (FEEL KE SAATH)"
      },
      {
        "t": "h",
        "text": "☠️ Case 1: Rat marta hai Hour 10"
      },
      {
        "t": "li",
        "text": "Matlab:"
      },
      {
        "t": "li",
        "text": "Usne **Hour 0** me poison piya\n 👉 **Bottle 1 poisonous**"
      },
      {
        "t": "h",
        "text": "☠️ Case 2: Rat marta hai Hour 11"
      },
      {
        "t": "li",
        "text": "Matlab:"
      },
      {
        "t": "li",
        "text": "Usne **Hour 1** me poison piya\n 👉 **Bottle 2 poisonous**"
      },
      {
        "t": "h",
        "text": "☠️ Case 3: Rat marta hai Hour 12"
      },
      {
        "t": "li",
        "text": "Matlab:"
      },
      {
        "t": "li",
        "text": "Usne **Hour 2** me poison piya\n 👉 **Bottle 3 poisonous**"
      },
      {
        "t": "h",
        "text": "🐀 Case 4: Rat 12 hours ke baad bhi zinda"
      },
      {
        "t": "li",
        "text": "Matlab:"
      },
      {
        "t": "li",
        "text": "Poison usne kabhi piya hi nahi\n 👉 **Bottle 4 poisonous**"
      },
      {
        "t": "h",
        "text": "🎯 DONE — 100% GUARANTEE"
      },
      {
        "t": "li",
        "text": "Max time: **12 hours**"
      },
      {
        "t": "li",
        "text": "Limit: **24 hours ke andar**"
      },
      {
        "t": "li",
        "text": "Rat: **sirf ek**"
      },
      {
        "t": "li",
        "text": "Result: **exact bottle identified**"
      },
      {
        "t": "h",
        "text": "🤯 WHY THIS WORKS (REAL FEEL)"
      },
      {
        "t": "p",
        "text": "**Hum bottle ko nahi,\n time ko encode kar rahe hain.**"
      },
      {
        "t": "p",
        "text": "Rat = biological timer\n Feeding time = bottle identity"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ANSWER (SHORT & SHARP)"
      },
      {
        "t": "p",
        "text": "“I feed the rat from different bottles at different hours. Since the rat dies exactly 10 hours after drinking poison, the time of death uniquely identifies the bottle. If it survives beyond all expected times, the remaining bottle is poisonous.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER (IMPRESS INTERVIEWER)"
      },
      {
        "t": "p",
        "text": "**“Time of death acts as the bottle label.”**"
      },
      {
        "t": "h",
        "text": "🧠 MEMORY TRICK"
      },
      {
        "t": "p",
        "text": "**Bottle = Feeding Hour + 10**"
      },
      {
        "t": "h",
        "text": "🏁 FINAL TAKEAWAY"
      },
      {
        "t": "li",
        "text": "Multiple feedings allowed ✅"
      },
      {
        "t": "li",
        "text": "Exact death delay = information"
      },
      {
        "t": "li",
        "text": "One rat is enough"
      },
      {
        "t": "p",
        "text": "P26"
      }
    ]
  },
  {
    "id": "p25",
    "title": "Measuring 6L using 4L & 9L",
    "category": "Measuring & Weighing",
    "problem": [
      {
        "t": "img",
        "src": "image120.png"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (FEEL FIRST)"
      },
      {
        "t": "p",
        "text": "Soch:"
      },
      {
        "t": "li",
        "text": "Ek **4-litre jug**"
      },
      {
        "t": "li",
        "text": "Ek **9-litre bucket**"
      },
      {
        "t": "li",
        "text": "Dono **unmarked**"
      },
      {
        "t": "li",
        "text": "Paani **unlimited**"
      },
      {
        "t": "li",
        "text": "Goal: **exactly 6 litres** nikaalna"
      },
      {
        "t": "p",
        "text": "Rule:"
      },
      {
        "t": "li",
        "text": "Sirf **fill**, **pour**, **empty**"
      },
      {
        "t": "li",
        "text": "Jab tak ek full ho ya doosra empty"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 CORE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**Jug puzzles me answer “direct naap” se nahi,\n balki “bacha hua paani (remainder)” se milta hai.**"
      },
      {
        "t": "p",
        "text": "Hum pehle **1L** create karenge, phir usse **6L** build karenge."
      },
      {
        "t": "h",
        "text": "🧠 STORY MODE SOLUTION (STEP-BY-STEP)"
      },
      {
        "t": "h",
        "text": "Step 1️⃣: 9L bucket poora bharo"
      },
      {
        "t": "li",
        "text": "(9, 0)"
      },
      {
        "t": "h",
        "text": "Step 2️⃣: 9 → 4 (jab tak 4 full)"
      },
      {
        "t": "li",
        "text": "9 − 4 = **5** bacha"
      },
      {
        "t": "li",
        "text": "(5, 4)"
      },
      {
        "t": "h",
        "text": "Step 3️⃣: 4L jug empty"
      },
      {
        "t": "li",
        "text": "(5, 0)"
      },
      {
        "t": "h",
        "text": "Step 4️⃣: Phir 9 → 4 (jab tak 4 full)"
      },
      {
        "t": "li",
        "text": "5 − 4 = **1** bacha"
      },
      {
        "t": "li",
        "text": "(1, 4)"
      },
      {
        "t": "h",
        "text": "Step 5️⃣: 4L jug empty"
      },
      {
        "t": "li",
        "text": "(1, 0)"
      },
      {
        "t": "p",
        "text": "💡 **Click moment:**\n Ab tumhare paas **exactly 1 litre** aa chuka hai (9L bucket me)."
      },
      {
        "t": "h",
        "text": "Step 6️⃣: Ye 1L 4L jug me daal do"
      },
      {
        "t": "li",
        "text": "(0, 1)"
      },
      {
        "t": "h",
        "text": "Step 7️⃣: 9L bucket phir se poora bharo"
      },
      {
        "t": "li",
        "text": "(9, 1)"
      },
      {
        "t": "h",
        "text": "Step 8️⃣: 9 → 4 (jab tak 4 full)"
      },
      {
        "t": "li",
        "text": "4 ko full karne ke liye **3L** chahiye (kyunki 1L pehle se hai)"
      },
      {
        "t": "li",
        "text": "9 − 3 = **6** bacha"
      },
      {
        "t": "p",
        "text": "🎯 **9L bucket me ab EXACTLY 6 litres hain**"
      },
      {
        "t": "h",
        "text": "🏁 FINAL RESULT"
      },
      {
        "t": "p",
        "text": "👉 **6 litres measured successfully** (9L bucket me)"
      },
      {
        "t": "h",
        "text": "🤯 KYU YE KAAM KARTA HAI? (FEEL LINE)"
      },
      {
        "t": "p",
        "text": "**Chhota jug “cutter” ki tarah kaam karta hai —\n har baar exact bacha hua paani nikaalta hai.**"
      },
      {
        "t": "h",
        "text": "🧠 QUICK STATE SUMMARY (YAAD RAKHNE KE LIYE)"
      },
      {
        "t": "p",
        "text": "(9,0) → (5,4) → (5,0) → (1,4) → (1,0)"
      },
      {
        "t": "p",
        "text": "→ (0,1) → (9,1) → (6,4)"
      },
      {
        "t": "p",
        "text": "(Left = 9L bucket, Right = 4L jug)"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ANSWER (SHORT)"
      },
      {
        "t": "p",
        "text": "“I first create 1 litre by repeatedly filling and emptying the 4-litre jug from the 9-litre bucket. Then I refill the 9-litre bucket and use the 4-litre jug to remove 3 litres, leaving exactly 6 litres.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER"
      },
      {
        "t": "p",
        "text": "**“Create 1 litre first; the rest becomes arithmetic.”**"
      },
      {
        "t": "p",
        "text": "P27"
      }
    ]
  },
  {
    "id": "p26",
    "title": "Six Houses P, Q, R, S, T, U",
    "category": "Arrangement & Seating",
    "problem": [
      {
        "t": "img",
        "src": "image84.jpg"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (FEEL FIRST)"
      },
      {
        "t": "li",
        "text": "Road ke **dono sides** par **3–3 houses**"
      },
      {
        "t": "li",
        "text": "Houses: **P, Q, R, S, T, U**"
      },
      {
        "t": "li",
        "text": "Colors: **Red, Blue, Green, Orange, Yellow, White**"
      },
      {
        "t": "li",
        "text": "Heights: **sab different**"
      },
      {
        "t": "p",
        "text": "Goal:\n1️⃣ **Tallest house ka color?**\n2️⃣ **House R se kitne houses taller hain?**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 CORE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**“Opposite” clues road ko fix karte hain.\n“Between” clues order batate hain.\nHeights ke clues ladder banate hain.**"
      },
      {
        "t": "h",
        "text": "🧠 STEP 1: Sabse strong clues lock karo"
      },
      {
        "t": "li",
        "text": "**T** = **tallest**"
      },
      {
        "t": "li",
        "text": "**T** is **opposite** the **Red** house"
      },
      {
        "t": "li",
        "text": "**Shortest** house is **opposite** the **Green** house"
      },
      {
        "t": "h",
        "text": "🧠 STEP 2: “Between” clue se sides split karo"
      },
      {
        "t": "p",
        "text": "**U (Orange)** is **between P and S**"
      },
      {
        "t": "p",
        "text": "👉 Matlab **P–U–S** ek hi side par honge\nAur baaki **Q, R, T** doosri side par"
      },
      {
        "t": "p",
        "text": "Possible order: **P–U–S **ya **S–U–P** (donon allowed abhi)"
      },
      {
        "t": "h",
        "text": "🧠 STEP 3: Opposites fix karo"
      },
      {
        "t": "li",
        "text": "**R (Yellow)** is **opposite P**"
      },
      {
        "t": "li",
        "text": "**Q (Green)** is **opposite U**"
      },
      {
        "t": "p",
        "text": "👉 Ab pairs ban gaye:"
      },
      {
        "t": "li",
        "text": "**P ↔ R**"
      },
      {
        "t": "li",
        "text": "**U ↔ Q**"
      },
      {
        "t": "li",
        "text": "Bacha: **S ↔ T**"
      },
      {
        "t": "h",
        "text": "🧠 STEP 4: Shortest ka logic (BIG CLICK 🔥)"
      },
      {
        "t": "li",
        "text": "**Shortest** house is **opposite Green**"
      },
      {
        "t": "li",
        "text": "**Green = Q**"
      },
      {
        "t": "li",
        "text": "Opposite of **Q** = **U**"
      },
      {
        "t": "p",
        "text": "👉 **U is the shortest house**"
      },
      {
        "t": "h",
        "text": "🧠 STEP 5: Tallest + Red clue"
      },
      {
        "t": "li",
        "text": "**T** is tallest"
      },
      {
        "t": "li",
        "text": "**T** is opposite **Red**"
      },
      {
        "t": "p",
        "text": "Opposite of **T** = **S**\n👉 **S is Red**"
      },
      {
        "t": "h",
        "text": "🧠 STEP 6: P ke height relation se ladder banao"
      },
      {
        "t": "p",
        "text": "**P (White)** is:"
      },
      {
        "t": "li",
        "text": "taller than **R**"
      },
      {
        "t": "li",
        "text": "shorter than **S** and **Q**"
      },
      {
        "t": "p",
        "text": "So height order (top to bottom) must satisfy:"
      },
      {
        "t": "p",
        "text": "(S or Q) > (Q or S) > P > R > U"
      },
      {
        "t": "p",
        "text": "And **T** sabse upar already locked."
      },
      {
        "t": "h",
        "text": "🧠 STEP 7: Colors finish karo"
      },
      {
        "t": "p",
        "text": "Ab colors used:"
      },
      {
        "t": "li",
        "text": "U = Orange"
      },
      {
        "t": "li",
        "text": "R = Yellow"
      },
      {
        "t": "li",
        "text": "P = White"
      },
      {
        "t": "li",
        "text": "S = Red"
      },
      {
        "t": "li",
        "text": "Q = Green"
      },
      {
        "t": "p",
        "text": "👉 Bacha hua color = **Blue**\n👉 Ye **T** ko milega"
      },
      {
        "t": "h",
        "text": "🏁 FINAL ANSWERS 🎯"
      },
      {
        "t": "h",
        "text": "✅ Tallest house ka color?"
      },
      {
        "t": "p",
        "text": "👉 **Blue**\n👉 (**House T is Blue**)"
      },
      {
        "t": "h",
        "text": "✅ House R se kitne houses taller hain?"
      },
      {
        "t": "li",
        "text": "Taller than **R**:"
      },
      {
        "t": "li",
        "text": "**P**"
      },
      {
        "t": "li",
        "text": "**S**"
      },
      {
        "t": "li",
        "text": "**Q**"
      },
      {
        "t": "li",
        "text": "**T**"
      },
      {
        "t": "p",
        "text": "👉 **Total = 4 houses**"
      },
      {
        "t": "h",
        "text": "🧠 FEEL WALI SUMMARY (YAAD RAKH)"
      },
      {
        "t": "li",
        "text": "“Between” → same side fix"
      },
      {
        "t": "li",
        "text": "“Opposite” → pairs lock"
      },
      {
        "t": "li",
        "text": "“Shortest opposite Green” → **U shortest**"
      },
      {
        "t": "li",
        "text": "“Tallest opposite Red” → **S is Red**"
      },
      {
        "t": "li",
        "text": "Height ladder → count mil gaya"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ANSWER (SHORT)"
      },
      {
        "t": "p",
        "text": "“The tallest house is T, and its color is Blue. There are four houses taller than R.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER"
      },
      {
        "t": "p",
        "text": "**“Opposites fix positions, heights fix order, colors fall into place.”**"
      },
      {
        "t": "p",
        "text": "Agar tu chahe:"
      },
      {
        "t": "li",
        "text": "isko **table/diagram** me draw karke dikhaun"
      },
      {
        "t": "li",
        "text": "ya **similar house-arrangement puzzle** practice karayein"
      },
      {
        "t": "p",
        "text": "Bol bhai 👊"
      },
      {
        "t": "p",
        "text": "P28"
      }
    ]
  },
  {
    "id": "p27",
    "title": "Melting Candles",
    "category": "Bridge, Time & Speed",
    "problem": [
      {
        "t": "img",
        "src": "image172.png"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (FEEL FIRST)"
      },
      {
        "t": "li",
        "text": "**Do candles**, dono **same length** ki"
      },
      {
        "t": "li",
        "text": "**Thick candle** → poori jalne me **6 hours**"
      },
      {
        "t": "li",
        "text": "**Thin candle** → thick se **2 hours kam** → **4 hours**"
      },
      {
        "t": "li",
        "text": "Dono **ek saath jalaayi**"
      },
      {
        "t": "li",
        "text": "Kuch time baad aakar dekha:\n 👉 **Thick candle ki length = Thin candle ki length ka double**"
      },
      {
        "t": "p",
        "text": "❓ Question:\n **Kitni der pehle candles jalaayi gayi thi?**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 CORE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**Same length candles + different total time = different burn rates.**\n Time same hota hai, rate different hoti hai."
      },
      {
        "t": "h",
        "text": "🧠 BURNING SPEED (IMPORTANT)"
      },
      {
        "t": "li",
        "text": "Thick candle:"
      },
      {
        "t": "li",
        "text": "6 hours me poori"
      },
      {
        "t": "li",
        "text": "Har hour me **1/6** length burn"
      },
      {
        "t": "li",
        "text": "Thin candle:"
      },
      {
        "t": "li",
        "text": "4 hours me poori"
      },
      {
        "t": "li",
        "text": "Har hour me **1/4** length burn (tez)"
      },
      {
        "t": "h",
        "text": "🧠 AB STORY KE SAATH CHECK KARTE HAIN"
      },
      {
        "t": "p",
        "text": "Hum hour-by-hour dekhte hain 👇"
      },
      {
        "t": "h",
        "text": "⏱️ After 1 hour"
      },
      {
        "t": "li",
        "text": "Thick left = **5/6**"
      },
      {
        "t": "li",
        "text": "Thin left = **3/4**"
      },
      {
        "t": "li",
        "text": "5/6 ≠ 2 × 3/4 ❌"
      },
      {
        "t": "h",
        "text": "⏱️ After 2 hours"
      },
      {
        "t": "li",
        "text": "Thick left = **4/6 = 2/3**"
      },
      {
        "t": "li",
        "text": "Thin left = **2/4 = 1/2**"
      },
      {
        "t": "li",
        "text": "2/3 ≠ 2 × 1/2 ❌"
      },
      {
        "t": "h",
        "text": "⏱️ After 3 hours"
      },
      {
        "t": "li",
        "text": "Thick left = **3/6 = 1/2**"
      },
      {
        "t": "li",
        "text": "Thin left = **1/4**"
      },
      {
        "t": "p",
        "text": "💥 **CLICK MOMENT**\n 👉 **1/2 = 2 × 1/4**"
      },
      {
        "t": "p",
        "text": "Exactly match!"
      },
      {
        "t": "h",
        "text": "🏁 FINAL ANSWER 🎯"
      },
      {
        "t": "p",
        "text": "✅ **The person lit the candles 3 hours ago.**"
      },
      {
        "t": "h",
        "text": "🤯 WHY THIS WORKS (FEEL LINE)"
      },
      {
        "t": "p",
        "text": "**Thicker candle burns slower, thinner candle burns faster.\n At 3 hours, the slow one has exactly double the remaining length.**"
      },
      {
        "t": "h",
        "text": "🧠 QUICK MATH FEEL (ONE-LINER)"
      },
      {
        "t": "li",
        "text": "Thin burns **25% per hour**"
      },
      {
        "t": "li",
        "text": "Thick burns **16.67% per hour**"
      },
      {
        "t": "li",
        "text": "3 hours → perfect 2:1 remainder ratio"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ANSWER (SHORT)"
      },
      {
        "t": "p",
        "text": "“The thinner candle burns faster since it lasts only 4 hours, while the thicker one lasts 6 hours. After 3 hours, the thicker candle has half its length left and the thinner candle has one-quarter left, making the thicker candle twice as long.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER"
      },
      {
        "t": "p",
        "text": "**“Same length, different burn rates—compare remainders, not time.”**"
      },
      {
        "t": "h",
        "text": "🧠 MEMORY TRICK"
      },
      {
        "t": "p",
        "text": "**6-hour candle × 1/2 = 3 hours**"
      },
      {
        "t": "p",
        "text": "P29"
      }
    ]
  },
  {
    "id": "p28",
    "title": "Red Hat vs Blue Hat (3 Players)",
    "category": "Hats & Prisoners",
    "problem": [
      {
        "t": "img",
        "src": "image91.png"
      },
      {
        "t": "img",
        "src": "image17.png"
      },
      {
        "t": "img",
        "src": "image113.png"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (FEEL FIRST)"
      },
      {
        "t": "li",
        "text": "**3 players**: A, B, C"
      },
      {
        "t": "li",
        "text": "Har player ke sir par **Red (R)** ya **Blue (B)** hat (coin toss)"
      },
      {
        "t": "li",
        "text": "Har player **dusron ke 2 hats dekh sakta hai**, apna nahi"
      },
      {
        "t": "li",
        "text": "Har player ek hi time pe bolega:"
      },
      {
        "t": "li",
        "text": "“I have a red hat”"
      },
      {
        "t": "li",
        "text": "“I have a blue hat”"
      },
      {
        "t": "li",
        "text": "“I pass”"
      },
      {
        "t": "p",
        "text": "**Team jeetegi agar:**"
      },
      {
        "t": "li",
        "text": "**Kam se kam 1** player color bole **aur**"
      },
      {
        "t": "li",
        "text": "**Jo bhi color bole, wo sahi ho**"
      },
      {
        "t": "p",
        "text": "Team haaregi agar:"
      },
      {
        "t": "li",
        "text": "Sab “pass” bole ❌"
      },
      {
        "t": "li",
        "text": "Ya koi galat color bole ❌"
      },
      {
        "t": "p",
        "text": "Goal: **Winning chance maximize karna**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 CORE FEEL (SABSE IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**Game jeetne ke liye “safe guessing” chahiye.\n Galat bolna allowed nahi hai.**"
      },
      {
        "t": "p",
        "text": "Isliye strategy aisi honi chahiye jisme:"
      },
      {
        "t": "li",
        "text": "Kuch cases me **sure-shot correct guess**"
      },
      {
        "t": "li",
        "text": "Baaki cases me **controlled loss**"
      },
      {
        "t": "h",
        "text": "🧠 TOTAL POSSIBILITIES (8 CASES)"
      },
      {
        "t": "p",
        "text": "3 players × 2 colors → **2³ = 8 outcomes**"
      },
      {
        "t": "table",
        "rows": [
          [
            "Case type",
            "Count"
          ],
          [
            "All same color (RRR / BBB)",
            "2"
          ],
          [
            "Mixed colors (2 of one, 1 of other)",
            "6"
          ]
        ]
      },
      {
        "t": "p",
        "text": "💥 **Key insight:\n 6 out of 8** cases me **majority–minority** hoti hai."
      },
      {
        "t": "h",
        "text": "🧠 MAJORITY vs MINORITY FEEL"
      },
      {
        "t": "li",
        "text": "Agar kisi player ko **ek Red + ek Blue** dikhta hai\n 👉 Wo **majority** color me hoga (but kaunsa? unsure)"
      },
      {
        "t": "li",
        "text": "Agar kisi player ko **same color ke 2 hats** dikhte hain\n 👉 Wo **minority** color me hoga (100% sure!)"
      },
      {
        "t": "p",
        "text": "💡 **Sirf minority player hi sure hota hai**"
      },
      {
        "t": "h",
        "text": "🔥 FINAL STRATEGY (YAAD RAKH)"
      },
      {
        "t": "h",
        "text": "✅ RULES (SIMPLE)"
      },
      {
        "t": "li",
        "text": "**Agar tum 1 Red + 1 Blue dekho** → **PASS**"
      },
      {
        "t": "li",
        "text": "**Agar tum 2 Red dekho** → **“I have a Blue hat”**"
      },
      {
        "t": "li",
        "text": "**Agar tum 2 Blue dekho** → **“I have a Red hat”**"
      },
      {
        "t": "h",
        "text": "🧠 KYU YE KAAM KARTA HAI?"
      },
      {
        "t": "h",
        "text": "🎯 Mixed-color cases (6 cases)"
      },
      {
        "t": "li",
        "text": "Sirf **minority player** 2 same-color dekhta hai"
      },
      {
        "t": "li",
        "text": "Wo **sure-shot sahi guess** karta hai"
      },
      {
        "t": "li",
        "text": "Baaki dono **pass**"
      },
      {
        "t": "li",
        "text": "👉 **Team wins** ✅"
      },
      {
        "t": "h",
        "text": "❌ All-same cases (2 cases: RRR, BBB)"
      },
      {
        "t": "li",
        "text": "Sab log 2 same-color dekhte hain"
      },
      {
        "t": "li",
        "text": "Sab **ulta guess** kar dete hain"
      },
      {
        "t": "li",
        "text": "👉 **Team loses** ❌"
      },
      {
        "t": "h",
        "text": "📊 WINNING PROBABILITY"
      },
      {
        "t": "li",
        "text": "Wins = **6**"
      },
      {
        "t": "li",
        "text": "Total cases = **8**"
      },
      {
        "t": "p",
        "text": "👉 **Winning chance = 6/8 = 75%** 🎉"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY EXPLANATION (SHORT)"
      },
      {
        "t": "p",
        "text": "“We let only the player who can identify being in the minority guess. If a player sees two hats of the same color, they must be wearing the opposite color. If they see one of each color, they pass. This wins in all mixed-color cases, giving a 75% success rate.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER (IMPRESS INTERVIEWER)"
      },
      {
        "t": "p",
        "text": "**“Only the minority player guesses; everyone else stays silent.”**"
      },
      {
        "t": "h",
        "text": "🧠 MEMORY TRICK"
      },
      {
        "t": "p",
        "text": "**Same–same → say opposite\n Different–different → pass**"
      },
      {
        "t": "p",
        "text": "P30"
      }
    ]
  },
  {
    "id": "p29",
    "title": "Joint Family of Seven Persons",
    "category": "Arrangement & Seating",
    "problem": [
      {
        "t": "img",
        "src": "image177.png"
      },
      {
        "t": "img",
        "src": "image92.jpg"
      },
      {
        "t": "h",
        "text": "🎬 PEHLE SCENE SET KAR (VERY IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Family me **7 log** hain:"
      },
      {
        "t": "p",
        "text": "**L, M, N, O, P, Q, R**"
      },
      {
        "t": "p",
        "text": "Aur humein **sirf clues ke base par** relation banana hai — koi assumption nahi."
      },
      {
        "t": "p",
        "text": "Goal:\n 1️⃣ **L ka relation O ke saath kya hai?**\n 2️⃣ **Family me total kitne males hain?**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 CORE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**Aise puzzles me hamesha pehle “marriage” aur “parent” relations lock karo.\n Phir children aur siblings apne aap fit ho jaate hain.**"
      },
      {
        "t": "h",
        "text": "🧠 STEP 1: SABSE STRONG CLUES LOCK KARO"
      },
      {
        "t": "h",
        "text": "🔹 Clue 1"
      },
      {
        "t": "p",
        "text": "**R is a housewife, and her husband is a lawyer**"
      },
      {
        "t": "p",
        "text": "👉 R = **Female**\n 👉 R is **married**"
      },
      {
        "t": "h",
        "text": "🔹 Clue 2"
      },
      {
        "t": "p",
        "text": "**N is the wife of M**"
      },
      {
        "t": "p",
        "text": "👉 N = Female\n 👉 M = Male\n 👉 (Marriage couple #1 fixed)"
      },
      {
        "t": "h",
        "text": "🔹 Clue 3"
      },
      {
        "t": "p",
        "text": "**L is an engineer and is the granddaughter of R**"
      },
      {
        "t": "p",
        "text": "👉 L = Female\n 👉 R = grandmother of L"
      },
      {
        "t": "p",
        "text": "So R → parent → parent → L"
      },
      {
        "t": "h",
        "text": "🧠 STEP 2: O KA ROLE FIX KARO"
      },
      {
        "t": "h",
        "text": "🔹 Clue 4"
      },
      {
        "t": "p",
        "text": "**O is the father-in-law of N**"
      },
      {
        "t": "p",
        "text": "Father-in-law of N = **M ka father**"
      },
      {
        "t": "p",
        "text": "👉 O = **father of M**"
      },
      {
        "t": "h",
        "text": "🔹 Clue 5"
      },
      {
        "t": "p",
        "text": "**O is the father of P**"
      },
      {
        "t": "p",
        "text": "👉 O ke **2 bachche**:"
      },
      {
        "t": "li",
        "text": "M"
      },
      {
        "t": "li",
        "text": "P"
      },
      {
        "t": "h",
        "text": "🔹 Clue 6"
      },
      {
        "t": "p",
        "text": "**P and M are siblings of the same gender**"
      },
      {
        "t": "p",
        "text": "👉 M male hai (husband)\n 👉 P bhi **male**"
      },
      {
        "t": "h",
        "text": "🧠 STEP 3: CHILDREN GENERATION"
      },
      {
        "t": "h",
        "text": "🔹 Clue 7"
      },
      {
        "t": "p",
        "text": "**Q is L’s brother and M’s son**"
      },
      {
        "t": "p",
        "text": "👉 Q = Male\n 👉 Q aur L = siblings\n 👉 Dono ke parents = **M & N**"
      },
      {
        "t": "p",
        "text": "So:"
      },
      {
        "t": "li",
        "text": "M + N → children: **L (daughter), Q (son)**"
      },
      {
        "t": "h",
        "text": "🧠 STEP 4: COMPLETE FAMILY TREE (AB FEEL AAYEGA)"
      },
      {
        "t": "p",
        "text": "O (Male)"
      },
      {
        "t": "p",
        "text": "M   P"
      },
      {
        "t": "p",
        "text": "(M) (M)"
      },
      {
        "t": "p",
        "text": "|"
      },
      {
        "t": "p",
        "text": "N (Female)"
      },
      {
        "t": "p",
        "text": "|"
      },
      {
        "t": "p",
        "text": "L        Q"
      },
      {
        "t": "p",
        "text": "(Female)   (Male)"
      },
      {
        "t": "p",
        "text": "R = Mother of O OR Mother-in-law of O (grandmother of L)"
      },
      {
        "t": "p",
        "text": "👉 R = **grandmother of L**\n 👉 O = **grandfather of L**"
      },
      {
        "t": "h",
        "text": "🎯 QUESTION 1: L ka O se kya relation?"
      },
      {
        "t": "p",
        "text": "👉 **L is the granddaughter of O**\n 👉 (O is L’s grandfather)"
      },
      {
        "t": "h",
        "text": "🎯 QUESTION 2: How many males are there?"
      },
      {
        "t": "p",
        "text": "Count one by one:"
      },
      {
        "t": "table",
        "rows": [
          [
            "Person",
            "Gender"
          ],
          [
            "R",
            "Female"
          ],
          [
            "N",
            "Female"
          ],
          [
            "L",
            "Female"
          ],
          [
            "M",
            "Male"
          ],
          [
            "O",
            "Male"
          ],
          [
            "P",
            "Male"
          ],
          [
            "Q",
            "Male"
          ]
        ]
      },
      {
        "t": "p",
        "text": "👉 **Total males = 4**"
      },
      {
        "t": "h",
        "text": "🏁 FINAL ANSWERS (CONFIDENT)"
      },
      {
        "t": "p",
        "text": "✔ **L is the granddaughter of O**\n ✔ **There are 4 males in the family**"
      },
      {
        "t": "h",
        "text": "🧠 FEEL WALI SUMMARY (YAAD RAKH)"
      },
      {
        "t": "li",
        "text": "Marriage → gender clear"
      },
      {
        "t": "li",
        "text": "Father-in-law → generation clear"
      },
      {
        "t": "li",
        "text": "Brother + son → child generation lock"
      },
      {
        "t": "li",
        "text": "Tree ban gaya → answers obvious"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY LINE"
      },
      {
        "t": "p",
        "text": "“By constructing the family tree from the given clues, we see that O is the grandfather of L, and there are four males in the family.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER"
      },
      {
        "t": "p",
        "text": "**“Once the family tree is drawn, the puzzle solves itself.”**"
      },
      {
        "t": "p",
        "text": "P31"
      },
      {
        "t": "img",
        "src": "image56.jpg"
      },
      {
        "t": "img",
        "src": "image4.jpg"
      },
      {
        "t": "img",
        "src": "image42.png"
      },
      {
        "t": "h",
        "text": "🎬 PEHLE QUESTION KI FEEL LO (VERY IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Soch:"
      },
      {
        "t": "li",
        "text": "N lights **circle me lagi hui hain**"
      },
      {
        "t": "li",
        "text": "Har light ke paas **ek switch** hai"
      },
      {
        "t": "li",
        "text": "Jab tum **kisi ek switch ko flip** karte ho:"
      },
      {
        "t": "li",
        "text": "Us light ka state change hota hai"
      },
      {
        "t": "li",
        "text": "Uske **left aur right wali lights** ka bhi state change hota hai\n 👉 Total **3 lights toggle** hoti hain"
      },
      {
        "t": "p",
        "text": "Initial state:"
      },
      {
        "t": "li",
        "text": "❌ **Saari lights OFF**"
      },
      {
        "t": "p",
        "text": "Goal:"
      },
      {
        "t": "li",
        "text": "✅ **Saari lights ON**"
      },
      {
        "t": "li",
        "text": "Aur **minimum number of switch flips**"
      },
      {
        "t": "h",
        "text": "🔑 SABSE IMPORTANT FEEL (PUZZLE KA HEART)"
      },
      {
        "t": "p",
        "text": "**Order matter nahi karta,\n sirf ye matter karta hai ki\n ek switch ODD times flip hua ya EVEN times.**"
      },
      {
        "t": "li",
        "text": "Even flips → no effect (OFF hi rahega)"
      },
      {
        "t": "li",
        "text": "Odd flips → effect dikhega (OFF → ON)"
      },
      {
        "t": "p",
        "text": "Isko bolte hain **parity logic** 🔥"
      },
      {
        "t": "h",
        "text": "🧠 AB BASIC OBSERVATION"
      },
      {
        "t": "p",
        "text": "Ek switch flip ⇒ **3 lights toggle**"
      },
      {
        "t": "p",
        "text": "So naturally dimaag me aata hai:"
      },
      {
        "t": "p",
        "text": "“Kya hum lights ko **groups of 3** me handle kar sakte hain?”"
      },
      {
        "t": "p",
        "text": "Yahin se solution split hota hai 👇"
      },
      {
        "t": "h",
        "text": "🟢 CASE 1: N divisible by 3"
      },
      {
        "t": "p",
        "text": "Example: N = 6, 9, 12 …"
      },
      {
        "t": "h",
        "text": "FEEL"
      },
      {
        "t": "p",
        "text": "Agar N = 3, 6, 9 …\n toh poora circle **perfect 3-light blocks** me toot jaata hai."
      },
      {
        "t": "h",
        "text": "STRATEGY (INTUITIVE)"
      },
      {
        "t": "li",
        "text": "Lights ko number karo: 1, 2, 3, …, N (circle me)"
      },
      {
        "t": "li",
        "text": "Switch flip karo:"
      },
      {
        "t": "li",
        "text": "**1**"
      },
      {
        "t": "li",
        "text": "**4**"
      },
      {
        "t": "li",
        "text": "**7**"
      },
      {
        "t": "li",
        "text": "**10**"
      },
      {
        "t": "li",
        "text": "… (har 3rd ke baad +1)"
      },
      {
        "t": "p",
        "text": "Matlab: **1, 4, 7, 10, …**"
      },
      {
        "t": "h",
        "text": "KYU YE KAAM KARTA HAI?"
      },
      {
        "t": "li",
        "text": "Switch 1 → lights **N, 1, 2** ON"
      },
      {
        "t": "li",
        "text": "Switch 4 → lights **3, 4, 5** ON"
      },
      {
        "t": "li",
        "text": "Switch 7 → lights **6, 7, 8** ON"
      },
      {
        "t": "li",
        "text": "…"
      },
      {
        "t": "li",
        "text": "Last switch → last 3 lights ON"
      },
      {
        "t": "p",
        "text": "💡 **Har light exactly ek baar toggle hoti hai**"
      },
      {
        "t": "h",
        "text": "🎯 RESULT"
      },
      {
        "t": "li",
        "text": "Total flips = **N / 3**"
      },
      {
        "t": "li",
        "text": "Ye **minimum possible** hai"
      },
      {
        "t": "p",
        "text": "✅ **Perfect solution**"
      },
      {
        "t": "h",
        "text": "🔴 CASE 2: N NOT divisible by 3"
      },
      {
        "t": "p",
        "text": "Example: N = 4, 5, 7, 8 …"
      },
      {
        "t": "h",
        "text": "FEEL"
      },
      {
        "t": "p",
        "text": "Yahan problem aati hai:"
      },
      {
        "t": "li",
        "text": "Groups of 3 banate jaoge"
      },
      {
        "t": "li",
        "text": "End me **1 ya 2 lights bach jaayengi** jo OFF rahengi"
      },
      {
        "t": "h",
        "text": "AB KYA PROBLEM HAI?"
      },
      {
        "t": "p",
        "text": "Socho:"
      },
      {
        "t": "li",
        "text": "Tumne kuch switches flip kiye"
      },
      {
        "t": "li",
        "text": "Kuch lights ON ho gayi"
      },
      {
        "t": "li",
        "text": "End me ek light X OFF reh gayi"
      },
      {
        "t": "p",
        "text": "Ab:"
      },
      {
        "t": "li",
        "text": "Agar tum **X ka switch flip** karte ho\n → wo ON hogi\n → par **uske neighbours OFF ho sakte hain** 😬"
      },
      {
        "t": "p",
        "text": "Yani:"
      },
      {
        "t": "p",
        "text": "**Ek light ko fix karne jao, doosri bigad jaati hai**"
      },
      {
        "t": "h",
        "text": "FEEL WALA TRUTH (IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**Jab N ≠ multiple of 3 ho,\n tab “partial strategy” fail hoti hai.\n Sab switches ko involve karna padta hai.**"
      },
      {
        "t": "h",
        "text": "FINAL STRATEGY"
      },
      {
        "t": "li",
        "text": "Agar N divisible by 3 ❌ nahi hai:\n 👉 **Har switch ko exactly ek baar flip karo**"
      },
      {
        "t": "h",
        "text": "KYU YE KAAM KARTA HAI?"
      },
      {
        "t": "li",
        "text": "Har light ke paas:"
      },
      {
        "t": "li",
        "text": "Apna switch"
      },
      {
        "t": "li",
        "text": "Left neighbour ka switch"
      },
      {
        "t": "li",
        "text": "Right neighbour ka switch"
      },
      {
        "t": "p",
        "text": "👉 Total **3 flips** affect hoti hain\n 👉 3 = odd number\n 👉 OFF → ON ✅"
      },
      {
        "t": "h",
        "text": "🎯 RESULT"
      },
      {
        "t": "li",
        "text": "Total flips = **N**"
      },
      {
        "t": "li",
        "text": "Ye minimum hai is case me"
      },
      {
        "t": "h",
        "text": "🏁 FINAL ANSWER (CLEAR)"
      },
      {
        "t": "table",
        "rows": [
          [
            "Case",
            "Minimum Switch Flips"
          ],
          [
            "N divisible by 3",
            "N / 3"
          ],
          [
            "N not divisible by 3",
            "N"
          ]
        ]
      },
      {
        "t": "h",
        "text": "🧠 ONE-LINE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**“Groups of 3 win when possible;\n otherwise everyone must participate.”**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY EXPLANATION (SHORT)"
      },
      {
        "t": "p",
        "text": "“Since the order of flips doesn’t matter, only parity matters.\n If N is divisible by 3, flipping every third switch turns on all lights with N/3 flips.\n Otherwise, any partial strategy leaves some lights off, so every switch must be flipped once, requiring N flips.”"
      },
      {
        "t": "h",
        "text": "💎 MEMORY TRICK"
      },
      {
        "t": "li",
        "text": "**3 ka multiple?** → divide by 3"
      },
      {
        "t": "li",
        "text": "**Nahi?** → sabko flip karo"
      },
      {
        "t": "p",
        "text": "P32"
      }
    ]
  },
  {
    "id": "p30",
    "title": "The Circle of Lights",
    "category": "Bulbs, Switches & Lights",
    "problem": [
      {
        "t": "h",
        "text": "Rule:"
      },
      {
        "t": "li",
        "text": "Tum **switch dabate ho**"
      },
      {
        "t": "li",
        "text": "**3 bulbs** affect hoti hain\n (khud + left + right)"
      },
      {
        "t": "h",
        "text": "Is puzzle me:"
      },
      {
        "t": "li",
        "text": "Switch ka **centre effect** bhi hota hai"
      },
      {
        "t": "li",
        "text": "Isliye naturally **3 bulbs ek unit** ban jaate hain"
      },
      {
        "t": "p",
        "text": "👉 **Yahan 3–3 grouping ka sense banta hai**"
      },
      {
        "t": "p",
        "text": "Example feel:"
      },
      {
        "t": "li",
        "text": "Ek switch = 3 bulbs ka kaam"
      },
      {
        "t": "li",
        "text": "Perfect packing = 3 ke multiple"
      },
      {
        "t": "h",
        "text": "🧩 PUZZLE 2 (ABHI WALA – 2014 bulbs)"
      },
      {
        "t": "h",
        "text": "Light all the bulbs – Tum sirf neighbours ko toggle kar sakte ho"
      },
      {
        "t": "h",
        "text": "Rule:"
      },
      {
        "t": "li",
        "text": "Tum **kisi bulb ko select** karte ho"
      },
      {
        "t": "li",
        "text": "Sirf **left + right neighbours toggle hote hain**"
      },
      {
        "t": "li",
        "text": "**Selected bulb khud affect nahi hota**"
      },
      {
        "t": "p",
        "text": "⚠️ **Yahi sabse bada difference hai**"
      },
      {
        "t": "h",
        "text": "🔥 YAHAN CLICK AATA HAI"
      },
      {
        "t": "table",
        "rows": [
          [
            "Puzzle",
            "Ek move me kya change hota hai",
            "Natural group"
          ],
          [
            "Puzzle 1",
            "3 bulbs",
            "3"
          ],
          [
            "Puzzle 2",
            "2 bulbs",
            "4"
          ]
        ]
      },
      {
        "t": "h",
        "text": "🧠 KYU PUZZLE 2 ME 4–4 GROUP?"
      },
      {
        "t": "p",
        "text": "Ab feel se samjho 👇"
      },
      {
        "t": "li",
        "text": "Tum ek bulb select karte ho"
      },
      {
        "t": "li",
        "text": "Wo **2 neighbours** ko ON karta hai"
      },
      {
        "t": "li",
        "text": "Agar sirf 3 bulbs ka group loge:"
      },
      {
        "t": "li",
        "text": "Ek neighbour bahar chala jaayega"
      },
      {
        "t": "li",
        "text": "Chain break ho jaayegi ❌"
      },
      {
        "t": "p",
        "text": "Lekin **4 bulbs ka group** me:"
      },
      {
        "t": "li",
        "text": "Beech ke 2 bulbs select karke"
      },
      {
        "t": "li",
        "text": "Bahar jaaye bina"
      },
      {
        "t": "li",
        "text": "Andar ke 4 ko ON kiya ja sakta hai"
      },
      {
        "t": "p",
        "text": "👉 **4 ek “safe block” ban jaata hai**"
      },
      {
        "t": "h",
        "text": "🔑 SIMPLE VISUAL FEEL (TEXT)"
      },
      {
        "t": "h",
        "text": "OFF OFF OFF OFF"
      },
      {
        "t": "li",
        "text": "Select 2nd bulb → 1st & 3rd ON"
      },
      {
        "t": "li",
        "text": "Select 3rd bulb → 2nd & 4th ON"
      },
      {
        "t": "p",
        "text": "👉 **sab ON, koi side-effect nahi**"
      },
      {
        "t": "h",
        "text": "🧠 IMPORTANT RULE (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**Grouping hamesha is baat pe depend karti hai\n ki ek move me kitni bulbs affect hoti hain.**"
      },
      {
        "t": "li",
        "text": "3 bulbs affect → group 3"
      },
      {
        "t": "li",
        "text": "2 bulbs affect → group 4"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY LINE (CLEAR)"
      },
      {
        "t": "p",
        "text": "“The grouping size depends on the action of a move.\n When a move affects three bulbs, groups of three work.\n When it affects only neighboring bulbs, groups of four are required to avoid boundary interference.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE CLICK STATEMENT"
      },
      {
        "t": "p",
        "text": "**“Group size is decided by the ripple effect of one move.”**"
      },
      {
        "t": "p",
        "text": "P34"
      }
    ]
  },
  {
    "id": "p31",
    "title": "9 Students & Red–Black Hats",
    "category": "Hats & Prisoners",
    "problem": [
      {
        "t": "img",
        "src": "image72.png"
      },
      {
        "t": "img",
        "src": "image135.jpg"
      },
      {
        "t": "img",
        "src": "image70.png"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (FEEL MODE)"
      },
      {
        "t": "p",
        "text": "Classroom me:"
      },
      {
        "t": "li",
        "text": "**9 students**"
      },
      {
        "t": "li",
        "text": "Har student ke sir par **Red 🔴 ya Black ⚫ hat**"
      },
      {
        "t": "li",
        "text": "Conditions professor ne pehle hi bata di:"
      },
      {
        "t": "li",
        "text": "**At least 1 red hat hai**"
      },
      {
        "t": "li",
        "text": "**Black hats > Red hats**"
      },
      {
        "t": "p",
        "text": "Rules:"
      },
      {
        "t": "li",
        "text": "Har student **dusron ke hats dekh sakta hai**"
      },
      {
        "t": "li",
        "text": "Apna hat **nahi dekh sakta**"
      },
      {
        "t": "li",
        "text": "**Koi baat-cheet nahi**"
      },
      {
        "t": "li",
        "text": "Sirf **soch sakte hain**"
      },
      {
        "t": "li",
        "text": "Professor **time ke baad answer expect karta hai**"
      },
      {
        "t": "p",
        "text": "Goal:\n 👉 **Sabko pata chal jaata hai:\n kitne Red, kitne Black**"
      },
      {
        "t": "h",
        "text": "🧠 SABSE PEHLE YE FEEL KAR"
      },
      {
        "t": "p",
        "text": "**Is puzzle me answer “bolna” important nahi hai,\n “kab koi nahi bolta” ye important hai.**"
      },
      {
        "t": "p",
        "text": "Silence = INFORMATION 🔥"
      },
      {
        "t": "h",
        "text": "⏱️ PHASE 1: FIRST 20 MINUTES (VERY IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Sab students ek hi baat sochte hain:"
      },
      {
        "t": "h",
        "text": "“Suppose sirf 1 Red hat ho…”"
      },
      {
        "t": "li",
        "text": "Jo banda red pehne hoga:"
      },
      {
        "t": "li",
        "text": "Wo **8 black hats dekhega**"
      },
      {
        "t": "li",
        "text": "Aur condition already pata hai:\n 👉 at least 1 red"
      },
      {
        "t": "li",
        "text": "Wo turant bolega:\n\n “Main hi red hoon”"
      },
      {
        "t": "p",
        "text": "🧠 **Expectation**:"
      },
      {
        "t": "li",
        "text": "Agar **1 red** hota →\n **20 min ke andar answer aa jaata**"
      },
      {
        "t": "p",
        "text": "❗ **Reality**:"
      },
      {
        "t": "li",
        "text": "20 min ho gaye"
      },
      {
        "t": "li",
        "text": "**Koi nahi bola**"
      },
      {
        "t": "p",
        "text": "💥 **BIG CLICK**"
      },
      {
        "t": "p",
        "text": "❌ 1 Red possible hi nahi hai"
      },
      {
        "t": "p",
        "text": "Sabke dimaag me ye fact lock ho gaya."
      },
      {
        "t": "h",
        "text": "⏱️ PHASE 2: NEXT 10 MINUTES"
      },
      {
        "t": "p",
        "text": "Ab sab update ho chuke hain:"
      },
      {
        "t": "p",
        "text": "“1 red impossible”"
      },
      {
        "t": "h",
        "text": "Ab sab sochte hain:"
      },
      {
        "t": "p",
        "text": "“Suppose **2 Red hats** ho…”"
      },
      {
        "t": "li",
        "text": "Red hat wala student dekhega:"
      },
      {
        "t": "li",
        "text": "**1 red + 7 black**"
      },
      {
        "t": "li",
        "text": "Wo sochega:\n\n “Agar main black hota,\n toh sirf 1 red hota —\n par wo case pehle hi eliminate ho chuka hai”"
      },
      {
        "t": "p",
        "text": "👉 Conclusion:"
      },
      {
        "t": "p",
        "text": "“Main red hi hoon”"
      },
      {
        "t": "p",
        "text": "🧠 **Expectation**:"
      },
      {
        "t": "li",
        "text": "Agar **2 red** hota →\n **10 min ke andar answer aa jaata**"
      },
      {
        "t": "p",
        "text": "❗ **Reality**:"
      },
      {
        "t": "li",
        "text": "10 min ho gaye"
      },
      {
        "t": "li",
        "text": "**Fir bhi silence**"
      },
      {
        "t": "p",
        "text": "💥 **SECOND CLICK**"
      },
      {
        "t": "p",
        "text": "❌ 2 Red bhi impossible"
      },
      {
        "t": "h",
        "text": "⏱️ PHASE 3: LAST 5 MINUTES"
      },
      {
        "t": "p",
        "text": "Ab sab ke paas common knowledge hai:"
      },
      {
        "t": "li",
        "text": "1 red ❌"
      },
      {
        "t": "li",
        "text": "2 red ❌"
      },
      {
        "t": "h",
        "text": "Ab sab sochte hain:"
      },
      {
        "t": "p",
        "text": "“Suppose **3 Red hats** ho…”"
      },
      {
        "t": "li",
        "text": "Red hat wala dekhega:"
      },
      {
        "t": "li",
        "text": "**2 red + 6 black**"
      },
      {
        "t": "li",
        "text": "Wo sochega:\n\n “Agar main black hota,\n toh sirf 2 red hote\n par wo already impossible ho chuka hai”"
      },
      {
        "t": "p",
        "text": "👉 Conclusion:"
      },
      {
        "t": "p",
        "text": "“Main red hi hoon”"
      },
      {
        "t": "p",
        "text": "🔥 **Is baar logic PAKKA hai**"
      },
      {
        "t": "p",
        "text": "Aur is baar:"
      },
      {
        "t": "li",
        "text": "Professor expect kar raha hai"
      },
      {
        "t": "li",
        "text": "Students confident hain"
      },
      {
        "t": "li",
        "text": "**Answer match karta hai**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🎯 FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "👉 **Red hats = 3**\n 👉 **Black hats = 6**"
      },
      {
        "t": "h",
        "text": "🧠 AB TERA MAIN CONFUSION CLEAR KARTE HAIN"
      },
      {
        "t": "h",
        "text": "❓ “Sirf red wale hi sure the, black wale kaise maan gaye?”"
      },
      {
        "t": "p",
        "text": "🔥 **IMPORTANT FEEL**"
      },
      {
        "t": "li",
        "text": "Black hat wale **directly nahi jaante**"
      },
      {
        "t": "li",
        "text": "Wo ye jaante hain:\n\n “Agar galat hota,\n toh red wale pehle hi bol chuke hote”"
      },
      {
        "t": "p",
        "text": "Isliye:"
      },
      {
        "t": "li",
        "text": "**Silence → proof ban gaya**"
      },
      {
        "t": "li",
        "text": "Silence ne **sabko same conclusion pe la diya**"
      },
      {
        "t": "h",
        "text": "🧠 YE PUZZLE KIS CHEEZ KA HAI?"
      },
      {
        "t": "p",
        "text": "❌ Counting ka nahi\n ❌ Maths ka nahi"
      },
      {
        "t": "p",
        "text": "✅ **Common knowledge + logical waiting** ka puzzle hai"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY EXPLANATION (FEEL KE SAATH)"
      },
      {
        "t": "p",
        "text": "“The students eliminate possibilities based on the absence of responses.\n Each period of silence rules out a smaller number of red hats.\n When silence persists through the first two logical thresholds, the third becomes certain.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER"
      },
      {
        "t": "p",
        "text": "**“In this puzzle, silence is the loudest clue.”**"
      },
      {
        "t": "p",
        "text": "P33"
      }
    ]
  },
  {
    "id": "p32",
    "title": "Light all the Bulbs (2014 bulbs)",
    "category": "Bulbs, Switches & Lights",
    "problem": [
      {
        "t": "img",
        "src": "image90.jpg"
      },
      {
        "t": "img",
        "src": "image167.png"
      },
      {
        "t": "img",
        "src": "image241.png"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (IMAGINE CLEARLY)"
      },
      {
        "t": "li",
        "text": "Ek **circle** hai"
      },
      {
        "t": "li",
        "text": "Total **2014 bulbs**"
      },
      {
        "t": "li",
        "text": "Sirf **2 bulbs ON** hain"
      },
      {
        "t": "li",
        "text": "Baaki **2012 bulbs OFF**"
      },
      {
        "t": "li",
        "text": "Rule:"
      },
      {
        "t": "li",
        "text": "Tum **kisi bhi bulb ko choose** kar sakte ho"
      },
      {
        "t": "li",
        "text": "Us bulb ke **left aur right neighbours ka state flip** ho jaata hai\n (ON → OFF, OFF → ON)"
      },
      {
        "t": "p",
        "text": "Goal:\n 👉 **Saare 2014 bulbs ON karne hain**"
      },
      {
        "t": "h",
        "text": "🧠 SABSE PEHLE FEEL LO"
      },
      {
        "t": "p",
        "text": "**Tum bulb ko direct ON nahi kar rahe\n tum sirf uske neighbours ko affect kar rahe ho**"
      },
      {
        "t": "p",
        "text": "Isliye:"
      },
      {
        "t": "li",
        "text": "Tum ek bulb ko ON karne jaoge"
      },
      {
        "t": "li",
        "text": "Uske aas-paas ke bulbs bhi hilenge"
      },
      {
        "t": "p",
        "text": "Puzzle ka core yahin hai."
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 STEP 1: “2 ON bulbs kahan hain — matter karta hai kya?”"
      },
      {
        "t": "p",
        "text": "Answer: **NAHI**"
      },
      {
        "t": "p",
        "text": "Kyun?"
      },
      {
        "t": "li",
        "text": "Circle hai"
      },
      {
        "t": "li",
        "text": "Rotation allowed hai"
      },
      {
        "t": "li",
        "text": "Tum numbering kahin se bhi start kar sakte ho"
      },
      {
        "t": "p",
        "text": "Isliye hum **assume** kar lete hain:"
      },
      {
        "t": "li",
        "text": "B-1 aur B-2 **ON** hain"
      },
      {
        "t": "li",
        "text": "B-3 se B-2014 tak **sab OFF**"
      },
      {
        "t": "p",
        "text": "👉 Ab ek **continuous block of OFF bulbs** hai\n 👉 Length = **2012**"
      },
      {
        "t": "h",
        "text": "🔥 YAHAN PEHLA CLICK AATA HAI"
      },
      {
        "t": "p",
        "text": "**Agar OFF bulbs ek saath line me hain,\n toh hum unko systematically ON kar sakte hain**"
      },
      {
        "t": "p",
        "text": "Ab sawal:\n 👉 **kaise?**"
      },
      {
        "t": "h",
        "text": "🧠 STEP 2: OFF BULBS KO CHHOTE GROUPS ME TOD DO"
      },
      {
        "t": "p",
        "text": "2012 OFF bulbs ko tod do:"
      },
      {
        "t": "li",
        "text": "**4-4 ke groups** me"
      },
      {
        "t": "p",
        "text": "Kyun 4?"
      },
      {
        "t": "li",
        "text": "Kyunki ek bulb ka action **2 neighbours** ko affect karta hai"
      },
      {
        "t": "li",
        "text": "4 ek “stable working size” ban jaata hai"
      },
      {
        "t": "p",
        "text": "Total groups:\n 👉 2012 ÷ 4 = **503 groups**"
      },
      {
        "t": "h",
        "text": "🧠 STEP 3: EK GROUP KO FEEL KE SAATH SAMJHO"
      },
      {
        "t": "h",
        "text": "Example: Group = B-3, B-4, B-5, B-6"
      },
      {
        "t": "p",
        "text": "Initial state:"
      },
      {
        "t": "p",
        "text": "OFF  OFF  OFF  OFF"
      },
      {
        "t": "h",
        "text": "Move 1️⃣"
      },
      {
        "t": "p",
        "text": "👉 **B-4 select karo**"
      },
      {
        "t": "p",
        "text": "Effect:"
      },
      {
        "t": "li",
        "text": "B-3 → ON"
      },
      {
        "t": "li",
        "text": "B-5 → ON"
      },
      {
        "t": "p",
        "text": "State:"
      },
      {
        "t": "p",
        "text": "ON   OFF  ON   OFF"
      },
      {
        "t": "h",
        "text": "Move 2️⃣"
      },
      {
        "t": "p",
        "text": "👉 **B-5 select karo**"
      },
      {
        "t": "p",
        "text": "Effect:"
      },
      {
        "t": "li",
        "text": "B-4 → ON"
      },
      {
        "t": "li",
        "text": "B-6 → ON"
      },
      {
        "t": "p",
        "text": "State:"
      },
      {
        "t": "p",
        "text": "ON   ON   ON   ON"
      },
      {
        "t": "p",
        "text": "💥 **Group clear ho gaya**"
      },
      {
        "t": "h",
        "text": "🧠 IMPORTANT FEEL (PLEASE READ)"
      },
      {
        "t": "li",
        "text": "Humne **group ke bahar kuch nahi bigaada**"
      },
      {
        "t": "li",
        "text": "Humne **sirf andar ka OFF block clean kiya**"
      },
      {
        "t": "li",
        "text": "Ye kaam **har group ke saath same** ho sakta hai"
      },
      {
        "t": "h",
        "text": "🔁 STEP 4: AB PURE CIRCLE PE APPLY KARO"
      },
      {
        "t": "li",
        "text": "First group clear"
      },
      {
        "t": "li",
        "text": "Second group clear"
      },
      {
        "t": "li",
        "text": "…"
      },
      {
        "t": "li",
        "text": "503rd group clear"
      },
      {
        "t": "p",
        "text": "👉 Dheere-dheere **saare OFF bulbs ON** ho jaate hain"
      },
      {
        "t": "p",
        "text": "Aur:"
      },
      {
        "t": "li",
        "text": "Jo pehle 2 bulbs ON the"
      },
      {
        "t": "li",
        "text": "Wo **kabhi disturb hi nahi hue**"
      },
      {
        "t": "h",
        "text": "🎯 FINAL RESULT"
      },
      {
        "t": "p",
        "text": "✔ **Haan, possible hai**\n ✔ **Saare 2014 bulbs ON ho jaate hain**"
      },
      {
        "t": "h",
        "text": "🧠 PUZZLE KA REAL FEEL (ONE LINE)"
      },
      {
        "t": "p",
        "text": "**“Agar OFF bulbs ek saath mil jaayein,\n toh unko chhote-chhote safe blocks me ON kiya ja sakta hai.”**"
      },
      {
        "t": "h",
        "text": "🤔 “But bhai, agar 2 ON bulbs adjacent na ho toh?”"
      },
      {
        "t": "p",
        "text": "Answer:"
      },
      {
        "t": "li",
        "text": "Circle me numbering tumhari marzi"
      },
      {
        "t": "li",
        "text": "Tum hamesha numbering aise start kar sakte ho\n jisse 2 ON bulbs side-by-side aa jaayein"
      },
      {
        "t": "p",
        "text": "👉 **Configuration ka location matter nahi karta**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY EXPLANATION (SIMPLE)"
      },
      {
        "t": "p",
        "text": "“By relabeling the bulbs, the two ON bulbs can be treated as adjacent, leaving a contiguous block of OFF bulbs. Dividing this block into groups of four allows us to systematically turn all bulbs ON without affecting previously fixed bulbs.”"
      },
      {
        "t": "h",
        "text": "💎 MEMORY TRICK"
      },
      {
        "t": "li",
        "text": "Circle = rotate freedom"
      },
      {
        "t": "li",
        "text": "OFF bulbs = ek block"
      },
      {
        "t": "li",
        "text": "Block → groups of 4"
      },
      {
        "t": "li",
        "text": "Har group → 2 moves"
      },
      {
        "t": "h",
        "text": "🏁 LAST CHECK (HONEST)"
      },
      {
        "t": "p",
        "text": "Agar main poochun:\n 👉 **4 OFF bulbs ka ek group kyun workable hai?**"
      },
      {
        "t": "p",
        "text": "Agar tu bole:"
      },
      {
        "t": "p",
        "text": "“kyunki 2 middle moves se baaki 2 neighbours bhi ON ho jaate hain bina bahar effect ke”"
      },
      {
        "t": "p",
        "text": "🔥 **Puzzle samajh aa gaya**"
      },
      {
        "t": "p",
        "text": "Bhai 🤝\n **yeh confusion 100% genuine hai** — aur actually yahin se real understanding aati hai.\n Main bilkul clear karta hoon, **ekdum seedha, no ghoom-phir**, taaki dimaag me ek hi picture baithe."
      },
      {
        "t": "h",
        "text": "🔴 PEHLE CONFUSION KO NAAM DETE HAIN"
      },
      {
        "t": "p",
        "text": "Tu bol raha hai 👇"
      },
      {
        "t": "p",
        "text": "“Pehle tune bulbs wale puzzle me **3–3 group** bola tha,\n ab achanak **4–4 group** kyu bol raha hai?\n Dono me kya farak hai?”"
      },
      {
        "t": "p",
        "text": "👉 **Answer short me:**\n ❌ Hum rule change nahi kar rahe\n ❌ Hum logic contradict nahi kar rahe\n ✅ **Dono puzzles alag hain, isliye grouping alag hai**"
      },
      {
        "t": "p",
        "text": "Ab slowly samjhaata hoon."
      },
      {
        "t": "h",
        "text": "🧩 PUZZLE 1 (PEHLE WALA)"
      }
    ]
  },
  {
    "id": "p33",
    "title": "3L, 5L, 8L Containers → 4L & 4L",
    "category": "Measuring & Weighing",
    "problem": [
      {
        "t": "img",
        "src": "image180.png"
      },
      {
        "t": "img",
        "src": "image120.png"
      },
      {
        "t": "img",
        "src": "image12.png"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Tere paas 3 containers hain:"
      },
      {
        "t": "li",
        "text": "🫙 **Container I = 3L**"
      },
      {
        "t": "li",
        "text": "🫙 **Container II = 5L**"
      },
      {
        "t": "li",
        "text": "🫙 **Container III = 8L**"
      },
      {
        "t": "p",
        "text": "Initial situation:"
      },
      {
        "t": "p",
        "text": "3L = 0"
      },
      {
        "t": "p",
        "text": "5L = 0"
      },
      {
        "t": "p",
        "text": "8L = 8   ← saara paani yahin hai"
      },
      {
        "t": "p",
        "text": "🎯 **Goal**:"
      },
      {
        "t": "p",
        "text": "5L = 4"
      },
      {
        "t": "p",
        "text": "8L = 4"
      },
      {
        "t": "p",
        "text": "Rules:"
      },
      {
        "t": "li",
        "text": "Paani waste nahi hota"
      },
      {
        "t": "li",
        "text": "Sirf **pour** kar sakta hai"
      },
      {
        "t": "li",
        "text": "Jab tak ek container ya toh **full** ho jaaye\n ya **khali** ho jaaye — pouring rukti hai"
      },
      {
        "t": "h",
        "text": "🧠 SABSE PEHLE FEEL LO (THIS IS KEY)"
      },
      {
        "t": "p",
        "text": "**Hum direct 4L measure nahi kar sakte**\n Kyunki kisi container pe 4L ka mark nahi hai"
      },
      {
        "t": "p",
        "text": "Isliye:\n 👉 Hume **leftover paani** banana padega\n 👉 Aur leftovers **pouring ke through** hi bante hain"
      },
      {
        "t": "h",
        "text": "🧠 STRATEGY FEEL (NO MATH)"
      },
      {
        "t": "p",
        "text": "Soch:"
      },
      {
        "t": "li",
        "text": "8L me saara paani hai"
      },
      {
        "t": "li",
        "text": "3L aur 5L **tools** hain"
      },
      {
        "t": "li",
        "text": "In tools se hum **8L ko “cut” kar rahe hain**"
      },
      {
        "t": "p",
        "text": "Bilkul waise jaise:"
      },
      {
        "t": "p",
        "text": "“Knife nahi hai, par chhoti plate aur badi plate se cake ka size adjust kar raha hoon”"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔁 AB STEP-BY-STEP STORY (REAL FEEL)"
      },
      {
        "t": "h",
        "text": "🔹 Step 1"
      },
      {
        "t": "p",
        "text": "Initial:"
      },
      {
        "t": "p",
        "text": "3L = 0 | 5L = 0 | 8L = 8"
      },
      {
        "t": "h",
        "text": "🔹 Step 2"
      },
      {
        "t": "p",
        "text": "8L → 5L (jab tak 5L full)"
      },
      {
        "t": "p",
        "text": "3L = 0 | 5L = 5 | 8L = 3"
      },
      {
        "t": "p",
        "text": "👉 **Leftover = 3L (important!)**"
      },
      {
        "t": "h",
        "text": "🔹 Step 3"
      },
      {
        "t": "p",
        "text": "5L → 3L (jab tak 3L full)"
      },
      {
        "t": "p",
        "text": "3L = 3 | 5L = 2 | 8L = 3"
      },
      {
        "t": "p",
        "text": "👉 Ab 5L me **2L** ka odd leftover bana"
      },
      {
        "t": "h",
        "text": "🔹 Step 4"
      },
      {
        "t": "p",
        "text": "3L → 8L (poora daal diya)"
      },
      {
        "t": "p",
        "text": "3L = 0 | 5L = 2 | 8L = 6"
      },
      {
        "t": "h",
        "text": "🔹 Step 5"
      },
      {
        "t": "p",
        "text": "5L → 3L"
      },
      {
        "t": "p",
        "text": "3L = 2 | 5L = 0 | 8L = 6"
      },
      {
        "t": "p",
        "text": "👉 Ab **2L safe ho gaya** 3L container me"
      },
      {
        "t": "h",
        "text": "🔹 Step 6"
      },
      {
        "t": "p",
        "text": "8L → 5L (jab tak 5L full)"
      },
      {
        "t": "p",
        "text": "3L = 2 | 5L = 5 | 8L = 1"
      },
      {
        "t": "p",
        "text": "👉 **8L me 1L** bacha (odd remainder again!)"
      },
      {
        "t": "h",
        "text": "🔹 Step 7"
      },
      {
        "t": "p",
        "text": "5L → 3L (jab tak 3L full)"
      },
      {
        "t": "p",
        "text": "3L = 3 | 5L = 4 | 8L = 1"
      },
      {
        "t": "p",
        "text": "🎯 **YAHAN PE CLICK**"
      },
      {
        "t": "li",
        "text": "5L me **4L mil gaya** ✅"
      },
      {
        "t": "h",
        "text": "🔹 Step 8"
      },
      {
        "t": "p",
        "text": "3L → 8L"
      },
      {
        "t": "p",
        "text": "3L = 0 | 5L = 4 | 8L = 4"
      },
      {
        "t": "p",
        "text": "🎉 **DONE**"
      },
      {
        "t": "h",
        "text": "🏁 FINAL STATE (GOAL ACHIEVED)"
      },
      {
        "t": "p",
        "text": "3L = 0"
      },
      {
        "t": "p",
        "text": "5L = 4"
      },
      {
        "t": "p",
        "text": "8L = 4"
      },
      {
        "t": "h",
        "text": "🧠 AB REAL FEEL (WHY THIS WORKED)"
      },
      {
        "t": "p",
        "text": "Is puzzle me hum:"
      },
      {
        "t": "li",
        "text": "Direct 4L nahi naap rahe"
      },
      {
        "t": "li",
        "text": "Hum **3L aur 5L se “odd leftovers” bana rahe**"
      },
      {
        "t": "li",
        "text": "Aur un leftovers ko shift karke"
      },
      {
        "t": "li",
        "text": "**8L ko do equal parts me tod rahe**"
      },
      {
        "t": "p",
        "text": "👉 **Water-jug puzzles ka golden rule**:"
      },
      {
        "t": "p",
        "text": "“Answer leftovers se nikalta hai, direct filling se nahi”"
      },
      {
        "t": "h",
        "text": "🧠 EK LINE ME PUZZLE KA HEART"
      },
      {
        "t": "p",
        "text": "**“Chhote containers ka use karke bade container ko todna hi strategy hai.”**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY SHORT ANSWER"
      },
      {
        "t": "p",
        "text": "“By repeatedly pouring water to fill or empty containers, we create intermediate remainders. Using these remainders strategically, the 8L container can be split into two equal 4L portions.”"
      },
      {
        "t": "p",
        "text": "P35"
      }
    ]
  },
  {
    "id": "p34",
    "title": "Can 2 persons have the same number of hairs?",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "img",
        "src": "image30.jpg"
      },
      {
        "t": "img",
        "src": "image203.jpg"
      },
      {
        "t": "h",
        "text": "🎬 PEHLE SCENE SET KAR (FEEL MODE)"
      },
      {
        "t": "p",
        "text": "Facts jo **100% given** hain:"
      },
      {
        "t": "li",
        "text": "Bengaluru population = **1.23 crore**\n (≈ **12,300,000 people**)"
      },
      {
        "t": "li",
        "text": "Maximum hairs on any human head = **2,00,000**"
      },
      {
        "t": "p",
        "text": "Hair count **integer** hota hai:\n\n 0, 1, 2, 3, ..., 200000"
      },
      {
        "t": "p",
        "text": "👉 Matlab **possible hair counts = 200,001**\n (0 se 2,00,000 tak)"
      },
      {
        "t": "h",
        "text": "🧠 AB BASIC QUESTION"
      },
      {
        "t": "p",
        "text": "**Kya 1.23 crore logon ko\n 2,00,001 different hair-count values me\n bina repeat kiye fit kar sakte ho?**"
      },
      {
        "t": "h",
        "text": "🔥 REAL FEEL EXAMPLE (VERY IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Soch:"
      },
      {
        "t": "li",
        "text": "Tere paas **boxes (bins)** hain"
      },
      {
        "t": "li",
        "text": "Har box ek hair count represent karta hai"
      },
      {
        "t": "p",
        "text": "Boxes:"
      },
      {
        "t": "p",
        "text": "Box 0   → 0 hairs"
      },
      {
        "t": "p",
        "text": "Box 1   → 1 hair"
      },
      {
        "t": "p",
        "text": "Box 2   → 2 hairs"
      },
      {
        "t": "p",
        "text": "Box 200000 → 200000 hairs"
      },
      {
        "t": "p",
        "text": "Total boxes = **200,001**"
      },
      {
        "t": "h",
        "text": "🧠 AB LOGON KO BOXES ME DAALTE HAIN"
      },
      {
        "t": "li",
        "text": "People = **12,300,000**"
      },
      {
        "t": "li",
        "text": "Boxes = **200,001**"
      },
      {
        "t": "p",
        "text": "Ab soch:"
      },
      {
        "t": "p",
        "text": "“Main har person ko alag box me daalun”"
      },
      {
        "t": "h",
        "text": "Question:"
      },
      {
        "t": "p",
        "text": "👉 **Kya ye possible hai?**"
      },
      {
        "t": "p",
        "text": "❌ **Bilkul nahi**"
      },
      {
        "t": "p",
        "text": "Kyun?"
      },
      {
        "t": "li",
        "text": "Log bahut zyada hain"
      },
      {
        "t": "li",
        "text": "Boxes bahut kam"
      },
      {
        "t": "p",
        "text": "💥 **At least ek box me 2 log jaayenge hi jaayenge**"
      },
      {
        "t": "h",
        "text": "🎯 YAHI PUZZLE KA HEART HAI"
      },
      {
        "t": "p",
        "text": "**Chahe tum jitni smart distribution karo,\n repeat hona mathematically unavoidable hai.**"
      },
      {
        "t": "p",
        "text": "Isme:"
      },
      {
        "t": "li",
        "text": "Guessing nahi"
      },
      {
        "t": "li",
        "text": "Probability nahi"
      },
      {
        "t": "li",
        "text": "“Most likely” nahi"
      },
      {
        "t": "p",
        "text": "👉 **FORCED TRUTH** hai"
      },
      {
        "t": "h",
        "text": "🧠 ISKO EK LINE ME SAMJHO"
      },
      {
        "t": "p",
        "text": "**“Zyada cheezein, kam categories → duplication guaranteed.”**"
      },
      {
        "t": "h",
        "text": "🔑 YE PRINCIPLE KA NAAM KYA HAI?"
      },
      {
        "t": "p",
        "text": "Isko kehte hain:"
      },
      {
        "t": "h",
        "text": "🐦 Pigeonhole Principle"
      },
      {
        "t": "p",
        "text": "Meaning:"
      },
      {
        "t": "li",
        "text": "Agar **pigeons > holes**"
      },
      {
        "t": "li",
        "text": "Toh **kisi hole me 2 pigeons honge hi**"
      },
      {
        "t": "h",
        "text": "🧠 EXTRA FEEL (DEEPER CLICK)"
      },
      {
        "t": "p",
        "text": "Maan le:"
      },
      {
        "t": "li",
        "text": "23 lakh logon ke hairs ≤ 10,000"
      },
      {
        "t": "p",
        "text": "Ab bache:"
      },
      {
        "t": "li",
        "text": "1 crore log"
      },
      {
        "t": "p",
        "text": "Hair-count options =\n\n 10,001 to 200,000"
      },
      {
        "t": "li",
        "text": "Total = **190,000 options**"
      },
      {
        "t": "p",
        "text": "👉 1 crore log\n 👉 1.9 lakh options"
      },
      {
        "t": "p",
        "text": "💥 **Aur zyada forcefully repeat hoga**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ANSWER (CRISP)"
      },
      {
        "t": "p",
        "text": "“Yes, the statement is 100% correct.\n There are far more people than possible distinct hair counts, so by the pigeonhole principle, at least two people must share the same number of hairs.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER (INTERVIEW)"
      },
      {
        "t": "p",
        "text": "**“It’s not probability, it’s inevitability.”**"
      },
      {
        "t": "h",
        "text": "🧠 COMMON BEGINNER DOUBT (CLEAR IT)"
      },
      {
        "t": "p",
        "text": "❓ “Bhai, kya sabke hairs alag-alag nahi ho sakte?”"
      },
      {
        "t": "p",
        "text": "👉 **Nahi. Chahe tum chaaho bhi, numbers allow hi nahi karte.**"
      },
      {
        "t": "h",
        "text": "🏁 FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "✔ **Shyam’s statement is 100% correct**\n ✔ **More information ki zarurat nahi**\n ✔ **At least 2 people must have same number of hairs**"
      },
      {
        "t": "h",
        "text": "🧠 LAST CHECK (HONEST)"
      },
      {
        "t": "p",
        "text": "Agar main poochun:\n 👉 **Is puzzle me chance ya probability use hui?**"
      },
      {
        "t": "p",
        "text": "Agar tu bole:"
      },
      {
        "t": "p",
        "text": "“Nahi, sirf counting logic”"
      },
      {
        "t": "p",
        "text": "🔥 **Bhai FEEL aa gaya**"
      },
      {
        "t": "p",
        "text": "P36"
      }
    ]
  },
  {
    "id": "p35",
    "title": "Weight of Heavy Ball (2187 balls)",
    "category": "Measuring & Weighing",
    "problem": [
      {
        "t": "img",
        "src": "image103.jpg"
      },
      {
        "t": "img",
        "src": "image27.jpg"
      },
      {
        "t": "img",
        "src": "image207.jpg"
      },
      {
        "t": "h",
        "text": "🎬 PEHLE QUESTION KI FEEL LO"
      },
      {
        "t": "li",
        "text": "**2187 balls** hain"
      },
      {
        "t": "li",
        "text": "Sab **same dikhte hain**"
      },
      {
        "t": "li",
        "text": "**Exactly 1 ball heavy** hai"
      },
      {
        "t": "li",
        "text": "Tumhare paas **balance scale** hai (digital nahi):"
      },
      {
        "t": "li",
        "text": "Left heavy"
      },
      {
        "t": "li",
        "text": "Right heavy"
      },
      {
        "t": "li",
        "text": "Balance"
      },
      {
        "t": "p",
        "text": "👉 Har weighing me **3 possible results** aate hain"
      },
      {
        "t": "p",
        "text": "🎯 Goal:"
      },
      {
        "t": "p",
        "text": "**Minimum weighings me heavy ball pakka-pakka find karna**"
      },
      {
        "t": "h",
        "text": "🧠 SABSE IMPORTANT FEEL (THIS IS THE CLICK)"
      },
      {
        "t": "p",
        "text": "**Har weighing tumhe 3 me se 1 answer deta hai**\n Matlab:"
      },
      {
        "t": "li",
        "text": "Ek weighing = “3 options eliminate”"
      },
      {
        "t": "p",
        "text": "So natural thought:"
      },
      {
        "t": "p",
        "text": "“Agar har step me main problem ko 3 parts me tod doon,\n toh har weighing ke baad 2/3 balls eliminate ho jaayengi.”"
      },
      {
        "t": "h",
        "text": "🔑 AB MAGIC NUMBER DEKHO"
      },
      {
        "t": "p",
        "text": "2187 = 3 × 3 × 3 × 3 × 3 × 3 × 3 = 3⁷"
      },
      {
        "t": "p",
        "text": "💥 **YAHI SE ANSWER DIKHTA HAI**"
      },
      {
        "t": "p",
        "text": "Agar har weighing me balls ko **3 equal groups** me todta jaaun,\n toh **7 weighings ke baad** sirf 1 ball bachegi."
      },
      {
        "t": "h",
        "text": "🧠 STRATEGY (FEEL, NOT RATTA)"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "Step 1"
      },
      {
        "t": "li",
        "text": "2187 balls → **3 groups of 729**"
      },
      {
        "t": "li",
        "text": "Group A vs Group B weigh karo"
      },
      {
        "t": "p",
        "text": "Result:"
      },
      {
        "t": "li",
        "text": "Agar equal → heavy **Group C** me"
      },
      {
        "t": "li",
        "text": "Agar ek side heavy → wahi group me heavy"
      },
      {
        "t": "p",
        "text": "👉 **Ab sirf 729 balls bachi**"
      },
      {
        "t": "h",
        "text": "Step 2"
      },
      {
        "t": "li",
        "text": "729 → **3 groups of 243**"
      },
      {
        "t": "li",
        "text": "Phir wahi process"
      },
      {
        "t": "p",
        "text": "👉 **Ab sirf 243 balls**"
      },
      {
        "t": "h",
        "text": "Step 3"
      },
      {
        "t": "li",
        "text": "243 → **81**"
      },
      {
        "t": "h",
        "text": "Step 4"
      },
      {
        "t": "li",
        "text": "81 → **27**"
      },
      {
        "t": "h",
        "text": "Step 5"
      },
      {
        "t": "li",
        "text": "27 → **9**"
      },
      {
        "t": "h",
        "text": "Step 6"
      },
      {
        "t": "li",
        "text": "9 → **3**"
      },
      {
        "t": "h",
        "text": "Step 7"
      },
      {
        "t": "li",
        "text": "3 balls:"
      },
      {
        "t": "li",
        "text": "Ball 1 vs Ball 2"
      },
      {
        "t": "li",
        "text": "Agar equal → Ball 3 heavy"
      },
      {
        "t": "li",
        "text": "Nahi → jo heavy dikhe wahi answer"
      },
      {
        "t": "p",
        "text": "🎯 **Heavy ball mil gaya**"
      },
      {
        "t": "h",
        "text": "🧠 KYU EXACTLY 7 HI? (VERY IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Soch:"
      },
      {
        "t": "li",
        "text": "Har weighing = **3-way decision**"
      },
      {
        "t": "p",
        "text": "7 weighings =\n\n 3 × 3 × 3 × 3 × 3 × 3 × 3 = 2187"
      },
      {
        "t": "p",
        "text": "👉 Tum **har possible ball ko uniquely identify** kar sakte ho\n 👉 Isse kam me **information hi kaafi nahi hogi**"
      },
      {
        "t": "h",
        "text": "❌ KYU 6 WEIGHINGS KAAFI NAHI?"
      },
      {
        "t": "li",
        "text": "6 weighings = 3⁶ = 729 possibilities"
      },
      {
        "t": "li",
        "text": "Par balls = 2187"
      },
      {
        "t": "p",
        "text": "👉 **2187 > 729**\n 👉 Kam info, zyada uncertainty\n 👉 Guarantee possible nahi"
      },
      {
        "t": "h",
        "text": "🎯 FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "✔ **Minimum weighings = 7**\n ✔ **Strategy = har baar 3 equal groups me todna**\n ✔ **Reason = balance scale ke 3 outcomes**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ANSWER (SHORT & STRONG)"
      },
      {
        "t": "p",
        "text": "“Each weighing gives three outcomes. Since 2187 equals 3⁷, dividing the balls into three equal groups at each step guarantees finding the heavier ball in exactly seven weighings.”"
      },
      {
        "t": "h",
        "text": "💎 ONE-LINE KILLER"
      },
      {
        "t": "p",
        "text": "**“Three outcomes per weighing → powers of three decide the answer.”**"
      },
      {
        "t": "h",
        "text": "🏁 LAST CHECK (HONEST)"
      },
      {
        "t": "p",
        "text": "Agar main poochun:\n 👉 **2187 balls ka number special kyun hai?**"
      },
      {
        "t": "p",
        "text": "Agar tu bole:"
      },
      {
        "t": "p",
        "text": "“kyunki wo 3⁷ hai, aur scale 3 outcomes deta hai”"
      },
      {
        "t": "p",
        "text": "🔥 **Bhai puzzle poora click ho gaya**"
      },
      {
        "t": "p",
        "text": "SHAPE PUZZLES"
      },
      {
        "t": "p",
        "text": "S1"
      },
      {
        "t": "p",
        "text": "Sarvesh-Shelgaonkar/Puzzles_For_Interview"
      },
      {
        "t": "p",
        "text": "S2"
      }
    ]
  },
  {
    "id": "p36",
    "title": "Circle Division by Six Straight Lines",
    "category": "Shapes & Matchsticks",
    "problem": [
      {
        "t": "img",
        "src": "image123.png"
      },
      {
        "t": "img",
        "src": "image110.png"
      },
      {
        "t": "img",
        "src": "image58.jpg"
      },
      {
        "t": "h",
        "text": "🎬 PEHLE SCENE SET KAR (IMAGINE THIS)"
      },
      {
        "t": "li",
        "text": "Ek **circle** hai (pizza samajh le 🍕)"
      },
      {
        "t": "li",
        "text": "Tumhare paas **straight lines** hain (knife ki tarah)"
      },
      {
        "t": "li",
        "text": "Tumhe lines aise draw karni hain:\n 👉 **maximum pieces** ban sakein\n (koi bhi 2 lines parallel nahi, aur koi 3 ek hi point par intersect nahi karti)"
      },
      {
        "t": "h",
        "text": "🧠 SABSE IMPORTANT FEEL (PUZZLE KA HEART)"
      },
      {
        "t": "p",
        "text": "**Har nayi line purane tukdon ko kaat-ti hui jaati hai\n aur jitne pieces ko cross karti hai,\n utne +1 naye pieces add ho jaate hain.**"
      },
      {
        "t": "p",
        "text": "Yani:"
      },
      {
        "t": "li",
        "text": "New line = **existing regions + 1** new region"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔥 AB STEP-BY-STEP FEEL KARTE HAIN"
      },
      {
        "t": "h",
        "text": "🔹 0 lines"
      },
      {
        "t": "li",
        "text": "Circle as it is"
      },
      {
        "t": "p",
        "text": "Pieces = 1"
      },
      {
        "t": "h",
        "text": "🔹 1 line"
      },
      {
        "t": "li",
        "text": "Circle ko ek straight cut"
      },
      {
        "t": "p",
        "text": "Pieces = 2"
      },
      {
        "t": "h",
        "text": "🔹 2 lines"
      },
      {
        "t": "li",
        "text": "Dono lines ek doosre ko circle ke andar cut karti hain"
      },
      {
        "t": "p",
        "text": "Pieces = 4"
      },
      {
        "t": "h",
        "text": "🔹 3 lines"
      },
      {
        "t": "li",
        "text": "Teesri line pehli 2 lines ko cross karti hai"
      },
      {
        "t": "li",
        "text": "Wo **3 regions ko cross** karti hai"
      },
      {
        "t": "li",
        "text": "Isliye **3 + 1 = 4 naye pieces**"
      },
      {
        "t": "p",
        "text": "Old = 4"
      },
      {
        "t": "p",
        "text": "New = 4"
      },
      {
        "t": "p",
        "text": "Total = 7"
      },
      {
        "t": "h",
        "text": "🔹 4 lines"
      },
      {
        "t": "li",
        "text": "Chauthi line pehli 3 lines ko cross karti hai"
      },
      {
        "t": "li",
        "text": "Wo **4 regions ko cross** karti hai"
      },
      {
        "t": "li",
        "text": "Isliye **4 + 1 = 5 naye pieces**"
      },
      {
        "t": "p",
        "text": "Old = 7"
      },
      {
        "t": "p",
        "text": "New = 5"
      },
      {
        "t": "p",
        "text": "Total = 11"
      },
      {
        "t": "h",
        "text": "🔹 5 lines"
      },
      {
        "t": "li",
        "text": "Paachvi line **5 regions cross** karti hai"
      },
      {
        "t": "li",
        "text": "**5 + 1 = 6 naye pieces**"
      },
      {
        "t": "p",
        "text": "Old = 11"
      },
      {
        "t": "p",
        "text": "New = 6"
      },
      {
        "t": "p",
        "text": "Total = 16"
      },
      {
        "t": "h",
        "text": "🔹 6 lines"
      },
      {
        "t": "li",
        "text": "Chhathi line **6 regions cross** karti hai"
      },
      {
        "t": "li",
        "text": "**6 + 1 = 7 naye pieces**"
      },
      {
        "t": "p",
        "text": "Old = 16"
      },
      {
        "t": "p",
        "text": "New = 7"
      },
      {
        "t": "p",
        "text": "Total = 23 ❌"
      },
      {
        "t": "p",
        "text": "⚠️ Ruk bhai — yahin pe log confuse hote hain."
      },
      {
        "t": "h",
        "text": "🚨 IMPORTANT CORRECTION (VERY IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Circle ke andar:"
      },
      {
        "t": "li",
        "text": "Straight line **poori infinite plane** jaisi behave nahi karti"
      },
      {
        "t": "li",
        "text": "Circle boundary restrict karti hai"
      },
      {
        "t": "p",
        "text": "Isliye correct incremental pattern hota hai:"
      },
      {
        "t": "table",
        "rows": [
          [
            "Lines",
            "Pieces"
          ],
          [
            "0",
            "1"
          ],
          [
            "1",
            "2"
          ],
          [
            "2",
            "4"
          ],
          [
            "3",
            "7"
          ],
          [
            "4",
            "11"
          ],
          [
            "5",
            "16"
          ],
          [
            "6",
            "22 ✅"
          ]
        ]
      },
      {
        "t": "h",
        "text": "🧠 AB FORMULA KA FEEL (NO RATTA)"
      },
      {
        "t": "p",
        "text": "Formula diya hai:"
      },
      {
        "t": "p",
        "text": "Pieces = 1 + n(n+1)/2"
      },
      {
        "t": "p",
        "text": "Iska matlab:"
      },
      {
        "t": "li",
        "text": "Har line pichhli sab lines ko **ek-ek baar** intersect karti hai"
      },
      {
        "t": "p",
        "text": "Intersections =\n\n 1 + 2 + 3 + ... + n"
      },
      {
        "t": "p",
        "text": "Ye sum hota hai:\n\n n(n+1)/2"
      },
      {
        "t": "p",
        "text": "Plus 1 kyun?"
      },
      {
        "t": "li",
        "text": "Starting me circle khud ek piece hai"
      },
      {
        "t": "h",
        "text": "🔢 APPLY FOR n = 6"
      },
      {
        "t": "p",
        "text": "Pieces = 1 + 6×7/2"
      },
      {
        "t": "p",
        "text": "= 1 + 21"
      },
      {
        "t": "p",
        "text": "= 22"
      },
      {
        "t": "h",
        "text": "🎯 FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "✔ **Maximum pieces = 22**"
      },
      {
        "t": "h",
        "text": "🧠 ONE-LINE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**“Har nayi line jitni purani lines ko cross karti hai,\n utne +1 naye pieces ban jaate hain.”**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ANSWER (CRISP)"
      },
      {
        "t": "p",
        "text": "“To maximize pieces, each new line must intersect all previous lines inside the circle. The maximum number of pieces formed by n lines is 1 + n(n+1)/2. For six lines, this gives 22 pieces.”"
      },
      {
        "t": "h",
        "text": "🏁 LAST CHECK (IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Agar main poochun:\n 👉 **Maximum pieces tab milte hain jab lines kaise drawn ho?**"
      },
      {
        "t": "p",
        "text": "Agar tu bole:"
      },
      {
        "t": "p",
        "text": "“Jab koi 2 parallel na ho aur koi 3 ek point pe na milen”"
      },
      {
        "t": "p",
        "text": "S3"
      }
    ]
  },
  {
    "id": "p37",
    "title": "Matchstick",
    "category": "Shapes & Matchsticks",
    "problem": [
      {
        "t": "img",
        "src": "image24.png"
      },
      {
        "t": "h",
        "text": "🧠 Puzzle samajh pehle (feel)"
      },
      {
        "t": "p",
        "text": "“6 matchsticks se 4 equilateral triangles banana”\n Agar tu **table par flat** rakh ke sochega ❌ → impossible lagega\n Par agar tu **pyramid (3D)** sochega ✅ → turant click hoga"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "✅ CORRECT & REAL SOLUTION (Interview valid)"
      },
      {
        "t": "h",
        "text": "👉 Tetrahedron (Triangular Pyramid)"
      },
      {
        "t": "img",
        "src": "image25.jpg"
      },
      {
        "t": "img",
        "src": "image1.png"
      },
      {
        "t": "img",
        "src": "image175.jpg"
      },
      {
        "t": "h",
        "text": "Step-by-step (imaginary nahi, real):"
      },
      {
        "t": "h",
        "text": "🔹 Step 1: Base banao"
      },
      {
        "t": "li",
        "text": "3 matchsticks lo"
      },
      {
        "t": "li",
        "text": "**Table par ek equilateral triangle** banao\n (yeh 1 triangle ho gaya)"
      },
      {
        "t": "h",
        "text": "🔹 Step 2: Upar ka point banao"
      },
      {
        "t": "li",
        "text": "Bache hue **3 matchsticks** lo"
      },
      {
        "t": "li",
        "text": "Base triangle ke **3 corners se upar ek single point** ko jodo"
      },
      {
        "t": "p",
        "text": "Ab dhyaan de 👇"
      },
      {
        "t": "h",
        "text": "🎯 Ab total triangles gin"
      },
      {
        "t": "li",
        "text": "Base triangle → **1**"
      },
      {
        "t": "li",
        "text": "Side 1 → **1**"
      },
      {
        "t": "li",
        "text": "Side 2 → **1**"
      },
      {
        "t": "li",
        "text": "Side 3 → **1**"
      },
      {
        "t": "h",
        "text": "🔥 TOTAL = 4 Equilateral Triangles"
      },
      {
        "t": "h",
        "text": "🤯 Click moment (jo interviewer dekhna chahta hai)"
      },
      {
        "t": "p",
        "text": "“Triangles sirf flat nahi hote, 3D mein bhi hote hain.”"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW MEI EXACT LINE"
      },
      {
        "t": "p",
        "text": "“By arranging the 6 matchsticks in a 3D tetrahedron shape, we form a triangular pyramid which has exactly 4 equilateral triangular faces.”"
      },
      {
        "t": "p",
        "text": "How to make 4 equilateral triangles with 6 identical matchsticks?"
      },
      {
        "t": "img",
        "src": "image24.png"
      },
      {
        "t": "h",
        "text": "Solution:"
      },
      {
        "t": "p",
        "text": "**Method I:** A tetrahedron has:"
      },
      {
        "t": "li",
        "text": "4 equilateral triangle faces"
      },
      {
        "t": "li",
        "text": "6 edges"
      },
      {
        "t": "img",
        "src": "image63.png"
      },
      {
        "t": "p",
        "text": "Each edge of the tetrahedron can be formed with one matchstick."
      },
      {
        "t": "p",
        "text": "So, arrange the 6 matchsticks to form a **tetrahedron**:"
      },
      {
        "t": "li",
        "text": "Place 3 matchsticks in a triangle on the base."
      },
      {
        "t": "li",
        "text": "Use the remaining 3 matchsticks to connect each vertex of the base triangle to a single point above the base (the apex)."
      },
      {
        "t": "li",
        "text": "This creates 4 faces — all equilateral triangles."
      },
      {
        "t": "p",
        "text": "**Method II: **"
      },
      {
        "t": "p",
        "text": "Rather than physically building triangles,"
      },
      {
        "t": "li",
        "text": "Just write the number \"4\" and draw a triangle."
      },
      {
        "t": "li",
        "text": "This represents \"4 triangles.\""
      },
      {
        "t": "img",
        "src": "image76.png"
      },
      {
        "t": "p",
        "text": "**Method III:**"
      },
      {
        "t": "li",
        "text": "Use 3 matchsticks to make a large equilateral triangle (each matchstick forms one side)."
      },
      {
        "t": "li",
        "text": "Now take 3 more matchsticks and connect the midpoints of the triangle’s sides."
      },
      {
        "t": "li",
        "text": "These 3 inner matchsticks form a smaller inverted triangle inside the larger one."
      },
      {
        "t": "p",
        "text": "**Method IV:**"
      },
      {
        "t": "li",
        "text": "4 equilateral triangles labeled 1, 2, 3, and 4"
      },
      {
        "t": "li",
        "text": "Arranged in a bowtie/hourglass shape"
      },
      {
        "t": "p",
        "text": "Most Asked"
      },
      {
        "t": "p",
        "text": "M1"
      }
    ]
  },
  {
    "id": "p38",
    "title": "Torch and Bridge",
    "category": "Bridge, Time & Speed",
    "problem": [
      {
        "t": "img",
        "src": "image45.png"
      },
      {
        "t": "img",
        "src": "image20.png"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (IMAGINE CLEARLY)"
      },
      {
        "t": "li",
        "text": "Raat hai 🌙"
      },
      {
        "t": "li",
        "text": "Ek **narrow bridge**"
      },
      {
        "t": "li",
        "text": "**Torch ek hi**"
      },
      {
        "t": "li",
        "text": "Max **2 log ek saath**"
      },
      {
        "t": "li",
        "text": "Speed:"
      },
      {
        "t": "li",
        "text": "A = 1 min (fastest)"
      },
      {
        "t": "li",
        "text": "B = 2 min"
      },
      {
        "t": "li",
        "text": "C = 5 min"
      },
      {
        "t": "li",
        "text": "D = 8 min (slowest)"
      },
      {
        "t": "p",
        "text": "Rule yaad rakh:"
      },
      {
        "t": "p",
        "text": "**2 log saath jayenge → slowest ke speed pe jayenge**"
      },
      {
        "t": "p",
        "text": "🎯 Goal:"
      },
      {
        "t": "p",
        "text": "**Sabko 15 min ke andar cross karwana**"
      },
      {
        "t": "h",
        "text": "🧠 PUZZLE KA HEART (YEH FEEL SABSE IMPORTANT)"
      },
      {
        "t": "p",
        "text": "❌ Slow log ko wapas mat bhejo\n ✅ Fast log hi torch wapas laayein"
      },
      {
        "t": "p",
        "text": "Kyun?"
      },
      {
        "t": "li",
        "text": "Slow aadmi = time waste"
      },
      {
        "t": "li",
        "text": "Fast aadmi = minimum damage"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🚶 STEP-BY-STEP STORY (FEEL KE SAATH)"
      },
      {
        "t": "h",
        "text": "🔹 Step 1: A & B jaate hain (fastest pair)"
      },
      {
        "t": "li",
        "text": "Time = **2 min** (B slow hai)"
      },
      {
        "t": "li",
        "text": "Ab torch us side hai"
      },
      {
        "t": "p",
        "text": "👉 **Torch wapas kaun laayega?**"
      },
      {
        "t": "li",
        "text": "A (1 min) best choice"
      },
      {
        "t": "p",
        "text": "**A wapas aata hai**"
      },
      {
        "t": "li",
        "text": "Extra time = **1 min**"
      },
      {
        "t": "p",
        "text": "⏱️ Total so far = **3 min**"
      },
      {
        "t": "p",
        "text": "📍 Status:"
      },
      {
        "t": "li",
        "text": "Is side: A, C, D"
      },
      {
        "t": "li",
        "text": "Us side: B"
      },
      {
        "t": "h",
        "text": "🔹 Step 2: C & D jaate hain (slowest pair together)"
      },
      {
        "t": "p",
        "text": "Ye sabse important trick hai 👇"
      },
      {
        "t": "p",
        "text": "**Slowest ko ek hi baar bhejo**"
      },
      {
        "t": "li",
        "text": "Time = **8 min**"
      },
      {
        "t": "li",
        "text": "Torch us side chala gaya"
      },
      {
        "t": "p",
        "text": "Ab torch wapas laani hai ❗"
      },
      {
        "t": "p",
        "text": "👉 **Kaun wapas aaye?**"
      },
      {
        "t": "li",
        "text": "B (2 min) — second fastest"
      },
      {
        "t": "p",
        "text": "**B wapas aata hai**"
      },
      {
        "t": "li",
        "text": "Extra time = **2 min**"
      },
      {
        "t": "p",
        "text": "⏱️ Step 2 total = **10 min**"
      },
      {
        "t": "p",
        "text": "⏱️ Running total = **3 + 10 = 13 min**"
      },
      {
        "t": "p",
        "text": "📍 Status:"
      },
      {
        "t": "li",
        "text": "Is side: A, B"
      },
      {
        "t": "li",
        "text": "Us side: C, D"
      },
      {
        "t": "h",
        "text": "🔹 Step 3: A & B final crossing"
      },
      {
        "t": "li",
        "text": "Time = **2 min**"
      },
      {
        "t": "p",
        "text": "⏱️ Final total = **13 + 2 = 15 min**"
      },
      {
        "t": "p",
        "text": "🎉 **SAB CROSS KAR GAYE**"
      },
      {
        "t": "h",
        "text": "🧠 KYU YE STRATEGY OPTIMAL HAI?"
      },
      {
        "t": "li",
        "text": "Slowest (C, D) **sirf ek baar** cross kiye"
      },
      {
        "t": "li",
        "text": "Torch **hamesha fastest log** wapas laaye"
      },
      {
        "t": "li",
        "text": "Koi extra back-and-forth nahi"
      },
      {
        "t": "h",
        "text": "❌ COMMON MISTAKE (FEEL AAYEGA)"
      },
      {
        "t": "p",
        "text": "Agar tum:"
      },
      {
        "t": "li",
        "text": "C ya D ko wapas bhejo\n → **5 ya 8 min barbaad**"
      },
      {
        "t": "p",
        "text": "Puzzle wahi haar jaata hai."
      },
      {
        "t": "h",
        "text": "🎯 FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "✔ **Haan, sab 15 minutes me cross kar sakte hain**\n ✔ **Exact minimum time = 15 minutes**"
      },
      {
        "t": "h",
        "text": "🧠 ONE-LINE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**“Slow log ek saath bhejo, fast log torch laayen.”**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ANSWER (CRISP)"
      },
      {
        "t": "p",
        "text": "“To minimize time, the two slowest cross together once, while the fastest individuals return the torch. Using this strategy, all four cross in exactly 15 minutes.”"
      },
      {
        "t": "h",
        "text": "🔥 LAST CHECK (IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Agar main poochun:\n 👉 **Torch kaun wapas laata hai aur kyun?**"
      },
      {
        "t": "p",
        "text": "Agar tu bole:"
      },
      {
        "t": "p",
        "text": "“Fastest log, kyunki unka return time least hota hai”"
      },
      {
        "t": "p",
        "text": "🔥 **Bhai puzzle click ho gaya**"
      },
      {
        "t": "p",
        "text": "M4"
      }
    ]
  },
  {
    "id": "p39",
    "title": "Poison and Rat",
    "category": "Poison, Pills & Testing",
    "problem": [
      {
        "t": "img",
        "src": "image73.png"
      },
      {
        "t": "img",
        "src": "image29.png"
      },
      {
        "t": "img",
        "src": "image169.png"
      },
      {
        "t": "h",
        "text": "🎬 PEHLE SCENE SET KAR (CLEAR PICTURE)"
      },
      {
        "t": "li",
        "text": "🍾 **1000 bottles**"
      },
      {
        "t": "li",
        "text": "☠️ **sirf 1 bottle poisoned**"
      },
      {
        "t": "li",
        "text": "🐀 Rat:"
      },
      {
        "t": "li",
        "text": "Poison piyega → **1 hour me mar jaayega**"
      },
      {
        "t": "li",
        "text": "Safe wine → **kuch nahi**"
      },
      {
        "t": "li",
        "text": "⏱️ **Sirf 1 hour** ka time"
      },
      {
        "t": "li",
        "text": "Rule:"
      },
      {
        "t": "li",
        "text": "Har rat **start me** jitni chahe utni bottles ka sip le sakta hai"
      },
      {
        "t": "p",
        "text": "🎯 Goal:"
      },
      {
        "t": "p",
        "text": "**1 hour ke baad exact bottle number pata hona chahiye**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🧠 CORE FEEL (PUZZLE KA HEART)"
      },
      {
        "t": "p",
        "text": "**Har rat ek “YES / NO” signal deta hai**"
      },
      {
        "t": "li",
        "text": "Mara → YES (poison mila)"
      },
      {
        "t": "li",
        "text": "Zinda → NO (poison nahi mila)"
      },
      {
        "t": "p",
        "text": "Soch:"
      },
      {
        "t": "li",
        "text": "1 rat = **1 bit of information**"
      },
      {
        "t": "li",
        "text": "2 states: **0 / 1**"
      },
      {
        "t": "h",
        "text": "🔑 AB SABSE IMPORTANT CLICK"
      },
      {
        "t": "p",
        "text": "1000 bottles ko **uniquely identify** karna hai\n YES/NO signals se"
      },
      {
        "t": "p",
        "text": "Sawal:"
      },
      {
        "t": "p",
        "text": "“Kitne YES/NO answers chahiye jisse 1000 cheezein pehchaani ja sakein?”"
      },
      {
        "t": "p",
        "text": "Math feel:"
      },
      {
        "t": "p",
        "text": "2^10 = 1024  ≥ 1000"
      },
      {
        "t": "p",
        "text": "2^9  = 512   < 1000"
      },
      {
        "t": "p",
        "text": "💥 **CLICK**"
      },
      {
        "t": "p",
        "text": "**10 rats kaafi hain**"
      },
      {
        "t": "h",
        "text": "🧠 STRATEGY (BINARY KO STORY BANAAO)"
      },
      {
        "t": "h",
        "text": "Step 1️⃣"
      },
      {
        "t": "li",
        "text": "Bottles ko number de do: **1 to 1000**"
      },
      {
        "t": "li",
        "text": "Har number ko **binary** me likho\n (10 bits chahiye)"
      },
      {
        "t": "p",
        "text": "Example:"
      },
      {
        "t": "p",
        "text": "Bottle 42 = 0000101010"
      },
      {
        "t": "h",
        "text": "Step 2️⃣"
      },
      {
        "t": "li",
        "text": "**Har rat = ek bit**"
      },
      {
        "t": "li",
        "text": "Rat 1 → bit 1"
      },
      {
        "t": "li",
        "text": "Rat 2 → bit 2"
      },
      {
        "t": "li",
        "text": "…"
      },
      {
        "t": "li",
        "text": "Rat 10 → bit 10"
      },
      {
        "t": "h",
        "text": "Step 3️⃣"
      },
      {
        "t": "p",
        "text": "Rule:"
      },
      {
        "t": "p",
        "text": "**Jis bottle ke binary me bit = 1 ho,\n woh rat us bottle se sip lega**"
      },
      {
        "t": "li",
        "text": "Agar bit = 0 → rat us bottle ko touch bhi nahi karega"
      },
      {
        "t": "h",
        "text": "🕒 1 HOUR BAAD KYA HOGA?"
      },
      {
        "t": "li",
        "text": "Kuch rats mar jaayenge"
      },
      {
        "t": "li",
        "text": "Kuch zinda rahenge"
      },
      {
        "t": "p",
        "text": "👉 Marne–zinda rehne ka pattern = **binary number**"
      },
      {
        "t": "p",
        "text": "Example:"
      },
      {
        "t": "li",
        "text": "Rats: 5, 7, 9 die"
      },
      {
        "t": "p",
        "text": "0000101010"
      },
      {
        "t": "p",
        "text": "= **42**"
      },
      {
        "t": "p",
        "text": "🎯 **Bottle 42 poisoned**"
      },
      {
        "t": "h",
        "text": "❌ KYU 9 RATS KAAM NAHI KARENGE?"
      },
      {
        "t": "li",
        "text": "9 rats → max patterns = **2^9 = 512**"
      },
      {
        "t": "li",
        "text": "Bottles = **1000**"
      },
      {
        "t": "p",
        "text": "👉 2 bottles same pattern de dengi\n 👉 **confusion**\n 👉 **guarantee nahi**"
      },
      {
        "t": "h",
        "text": "✅ KYU 10 RATS PERFECT HAIN?"
      },
      {
        "t": "li",
        "text": "10 rats → **1024 patterns**"
      },
      {
        "t": "li",
        "text": "Bottles = 1000"
      },
      {
        "t": "p",
        "text": "👉 Har bottle ka **unique fingerprint**\n 👉 1 hour me exact answer"
      },
      {
        "t": "h",
        "text": "🎯 FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "✔ **Minimum rats needed = 10**"
      },
      {
        "t": "h",
        "text": "🧠 ONE-LINE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**“Har rat ek bit hai, aur 1000 ko pehchaanne ke liye 10 bits chahiye.”**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ANSWER (CRISP)"
      },
      {
        "t": "p",
        "text": "“Each rat provides a binary outcome. Since 2¹⁰ ≥ 1000, ten rats are sufficient to uniquely identify the poisoned bottle within one hour.”"
      },
      {
        "t": "p",
        "text": "M5"
      }
    ]
  },
  {
    "id": "p40",
    "title": "2 Eggs and 100 Floors",
    "category": "Logic & Deduction",
    "problem": [
      {
        "t": "img",
        "src": "image149.png"
      },
      {
        "t": "img",
        "src": "image230.png"
      },
      {
        "t": "h",
        "text": "🎬 PEHLE PROBLEM KI FEEL LO"
      },
      {
        "t": "p",
        "text": "Tumhare paas:"
      },
      {
        "t": "li",
        "text": "🥚 **2 eggs**"
      },
      {
        "t": "li",
        "text": "🏢 **100 floors**"
      },
      {
        "t": "li",
        "text": "Ek **critical floor** hai:"
      },
      {
        "t": "li",
        "text": "Usse neeche → egg safe"
      },
      {
        "t": "li",
        "text": "Usse upar → egg break"
      },
      {
        "t": "p",
        "text": "Goal:"
      },
      {
        "t": "p",
        "text": "**Worst case me minimum drops ke saath\n critical floor pakka nikaalna**"
      },
      {
        "t": "h",
        "text": "❌ KYU SIMPLE IDEAS FAIL HOTI HAIN?"
      },
      {
        "t": "h",
        "text": "❌ Linear search"
      },
      {
        "t": "li",
        "text": "1st, 2nd, 3rd…"
      },
      {
        "t": "li",
        "text": "Worst case = **100 drops**\n 👉 bahut slow"
      },
      {
        "t": "h",
        "text": "❌ Binary search (50th floor)"
      },
      {
        "t": "li",
        "text": "Agar 50 pe break ho gaya → ek egg gaya"
      },
      {
        "t": "li",
        "text": "Ab neeche **49 floors** ko one-by-one test"
      },
      {
        "t": "li",
        "text": "Worst case ≈ **50 drops**\n 👉 useless"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 CORE FEEL (PUZZLE KA HEART)"
      },
      {
        "t": "p",
        "text": "**2 eggs = 2 chances**"
      },
      {
        "t": "li",
        "text": "Pehla egg = **jump karne ke liye**"
      },
      {
        "t": "li",
        "text": "Doosra egg = **confirm karne ke liye (linear search)**"
      },
      {
        "t": "p",
        "text": "Isliye:"
      },
      {
        "t": "li",
        "text": "Pehle egg ko **soch-samajh ke** giraana hai"
      },
      {
        "t": "li",
        "text": "Aise floors choose karne hain ki:\n 👉 **kabhi bhi total drops limit cross na kare**"
      },
      {
        "t": "h",
        "text": "🧠 SMART IDEA (YEH CLICK HAI)"
      },
      {
        "t": "p",
        "text": "Maan le:"
      },
      {
        "t": "p",
        "text": "“Main maximum **x drops** afford kar sakta hoon (worst case)”"
      },
      {
        "t": "p",
        "text": "Ab soch:"
      },
      {
        "t": "li",
        "text": "Agar pehla drop **xth floor** pe kiya"
      },
      {
        "t": "li",
        "text": "Agar egg wahin toot gaya:"
      },
      {
        "t": "li",
        "text": "Neeche **x−1 floors** check kar sakta hoon"
      },
      {
        "t": "li",
        "text": "Total drops = x ✅"
      },
      {
        "t": "p",
        "text": "Agar nahi toota:"
      },
      {
        "t": "li",
        "text": "Next jump **(x−1) floors** ka"
      },
      {
        "t": "li",
        "text": "Phir **(x−2)**, phir **(x−3)** …"
      },
      {
        "t": "p",
        "text": "👉 Kyunki har baar **remaining attempts kam ho rahe hain**"
      },
      {
        "t": "h",
        "text": "🔢 AB MATH FEEL KE SAATH"
      },
      {
        "t": "p",
        "text": "Worst case me total floors covered hone chahiye = 100"
      },
      {
        "t": "p",
        "text": "So:"
      },
      {
        "t": "p",
        "text": "x + (x−1) + (x−2) + ... + 1 ≥ 100"
      },
      {
        "t": "p",
        "text": "Ye ek simple sum hai:"
      },
      {
        "t": "p",
        "text": "x(x+1)/2 ≥ 100"
      },
      {
        "t": "p",
        "text": "Ab values try kar:"
      },
      {
        "t": "li",
        "text": "13 → 13×14/2 = 91 ❌"
      },
      {
        "t": "li",
        "text": "14 → 14×15/2 = 105 ✅"
      },
      {
        "t": "p",
        "text": "💥 **CLICK**"
      },
      {
        "t": "h",
        "text": "🎯 ISKA MATLAB KYA HUA?"
      },
      {
        "t": "p",
        "text": "👉 Agar main **14 drops** allow karoon:"
      },
      {
        "t": "li",
        "text": "Main 100 floors **guarantee ke saath cover** kar sakta hoon"
      },
      {
        "t": "li",
        "text": "Chahe egg kahin bhi break ho"
      },
      {
        "t": "h",
        "text": "🪜 ACTUAL STRATEGY (STORY MODE)"
      },
      {
        "t": "p",
        "text": "Drops yahan karoge:"
      },
      {
        "t": "li",
        "text": "14"
      },
      {
        "t": "li",
        "text": "27 (14 + 13)"
      },
      {
        "t": "li",
        "text": "39 ( +12)"
      },
      {
        "t": "li",
        "text": "50 ( +11)"
      },
      {
        "t": "li",
        "text": "60 ( +10)"
      },
      {
        "t": "li",
        "text": "69"
      },
      {
        "t": "li",
        "text": "77"
      },
      {
        "t": "li",
        "text": "84"
      },
      {
        "t": "li",
        "text": "90"
      },
      {
        "t": "li",
        "text": "95"
      },
      {
        "t": "li",
        "text": "99"
      },
      {
        "t": "li",
        "text": "102 (beyond, so stop)"
      },
      {
        "t": "p",
        "text": "📌 Jis floor pe egg break hua:"
      },
      {
        "t": "li",
        "text": "Uske **just neeche se linear search**"
      },
      {
        "t": "li",
        "text": "Doosra egg use karo"
      },
      {
        "t": "p",
        "text": "Worst case:\n 👉 **Total drops = 14**"
      },
      {
        "t": "h",
        "text": "🧠 ONE-LINE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**“Jump size har baar ek kam karo,\n taaki egg tootne par linear search bach jaaye.”**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ANSWER (CRISP)"
      },
      {
        "t": "p",
        "text": "“With two eggs, we minimize the worst case by dropping the first egg at decreasing intervals. Solving x(x+1)/2 ≥ 100 gives x = 14, so the minimum guaranteed number of drops is 14.”"
      },
      {
        "t": "h",
        "text": "🏁 FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "✔ **Minimum worst-case drops = 14**"
      },
      {
        "t": "p",
        "text": "M6"
      },
      {
        "t": "h",
        "text": "🧩 Water Jug Puzzle (4G & 9G)"
      },
      {
        "t": "img",
        "src": "image214.png"
      },
      {
        "t": "img",
        "src": "image244.png"
      },
      {
        "t": "h",
        "text": "🎬 PEHLE FEEL LO (MOST IMPORTANT)"
      },
      {
        "t": "li",
        "text": "Tum **measure nahi kar sakte**"
      },
      {
        "t": "li",
        "text": "Tum sirf:"
      },
      {
        "t": "li",
        "text": "jug **poora bhar** sakte ho"
      },
      {
        "t": "li",
        "text": "jug **poora khali** kar sakte ho"
      },
      {
        "t": "li",
        "text": "ek jug se doosre me **pour** kar sakte ho (jab tak ek bhare ya doosra khali)"
      },
      {
        "t": "p",
        "text": "👉 **Har measurement “difference” se banta hai**\n 👉 9 − 4 = **5**\n 👉 4 − (9 mod 4) = **1**"
      },
      {
        "t": "p",
        "text": "Bas yahin se **sab numbers nikalte hain**"
      },
      {
        "t": "h",
        "text": "🧠 CORE IDEA (YE CLICK HAI)"
      },
      {
        "t": "p",
        "text": "**Jab bhi tum 9G se 4G bharke paani nikaalte ho,\n remainder kuch bachta hai — wahi exact measurement hota hai.**"
      },
      {
        "t": "h",
        "text": "🟢 EASY CASES (DIRECT)"
      },
      {
        "t": "li",
        "text": "**4G** → 4G jug poora bharo"
      },
      {
        "t": "li",
        "text": "**9G** → 9G jug poora bharo"
      },
      {
        "t": "h",
        "text": "🔵 5G KAISE AATA HAI?"
      },
      {
        "t": "li",
        "text": "9G bharo"
      },
      {
        "t": "li",
        "text": "9G → 4G pour (4G full)"
      },
      {
        "t": "li",
        "text": "9G me bacha = **5G**"
      },
      {
        "t": "p",
        "text": "👉 **5 = 9 − 4**"
      },
      {
        "t": "h",
        "text": "🔵 1G KAISE AATA HAI? (VERY IMPORTANT)"
      },
      {
        "t": "li",
        "text": "9G bharo"
      },
      {
        "t": "li",
        "text": "9G → 4G (4G full, 9G = 5)"
      },
      {
        "t": "li",
        "text": "4G khali karo"
      },
      {
        "t": "li",
        "text": "9G → 4G (4G full, 9G = **1**)"
      },
      {
        "t": "p",
        "text": "💥 **1G mil gaya**"
      },
      {
        "t": "h",
        "text": "🔵 8G KAISE?"
      },
      {
        "t": "li",
        "text": "4G bharo → 9G me daalo (9G = 4)"
      },
      {
        "t": "li",
        "text": "Phir 4G bharo → 9G me daalo (9G = **8**)"
      },
      {
        "t": "h",
        "text": "🔵 3G KAISE?"
      },
      {
        "t": "li",
        "text": "4G bharo → 9G me daalo (4)"
      },
      {
        "t": "li",
        "text": "4G bharo → 9G me daalo (8)"
      },
      {
        "t": "li",
        "text": "4G bharo → 9G full ho jaata (9)"
      },
      {
        "t": "li",
        "text": "4G me bacha = **3**"
      },
      {
        "t": "p",
        "text": "👉 **3G mil gaya**"
      },
      {
        "t": "h",
        "text": "🔵 7G KAISE?"
      },
      {
        "t": "li",
        "text": "Tumhe **3G aata hai**"
      },
      {
        "t": "li",
        "text": "Ab:"
      },
      {
        "t": "li",
        "text": "3G (4G jug me)"
      },
      {
        "t": "li",
        "text": "4G bharo"
      },
      {
        "t": "p",
        "text": "👉 Total = **7G**"
      },
      {
        "t": "h",
        "text": "🔵 2G KAISE?"
      },
      {
        "t": "li",
        "text": "Tumhare paas already:"
      },
      {
        "t": "li",
        "text": "4G jug full"
      },
      {
        "t": "li",
        "text": "9G jug me 3G"
      },
      {
        "t": "li",
        "text": "4G → 9G (9G = 7)"
      },
      {
        "t": "li",
        "text": "4G bharo"
      },
      {
        "t": "li",
        "text": "4G → 9G jab tak 9G full"
      },
      {
        "t": "li",
        "text": "4G me bacha = **2G**"
      },
      {
        "t": "h",
        "text": "🔵 6G KAISE?"
      },
      {
        "t": "li",
        "text": "Tumhe **2G mil chuka**"
      },
      {
        "t": "li",
        "text": "9G khali"
      },
      {
        "t": "li",
        "text": "2G → 9G"
      },
      {
        "t": "li",
        "text": "4G bharo"
      },
      {
        "t": "p",
        "text": "👉 Total = **6G**"
      },
      {
        "t": "h",
        "text": "🎯 FINAL FEEL (PLEASE YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**4 aur 9 co-prime hain (GCD = 1),\n isliye 1 se 9 tak har measurement possible hai.**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ONE-LINER"
      },
      {
        "t": "p",
        "text": "“Since 4 and 9 are co-prime, by repeatedly filling, emptying, and transferring water, we can generate all quantities from 1 to 9 gallons.”"
      },
      {
        "t": "p",
        "text": "M7"
      }
    ]
  },
  {
    "id": "p41",
    "title": "Number of Legs in the Palace",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "img",
        "src": "image14.jpg"
      },
      {
        "t": "img",
        "src": "image121.jpg"
      },
      {
        "t": "img",
        "src": "image68.jpg"
      },
      {
        "t": "h",
        "text": "🎯 PEHLE TRAP SAMJH LO (IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Puzzle ka trap hota hai:"
      },
      {
        "t": "li",
        "text": "Log **guards ke rooms** aur **tigers ke cubs** me confuse ho jaate hain"
      },
      {
        "t": "li",
        "text": "Ya **khud ko count karna bhool jaate hain**"
      },
      {
        "t": "p",
        "text": "Hum **slow + systematic** jaayenge."
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🧠 STEP 1: ROOMS KITNE HAIN?"
      },
      {
        "t": "li",
        "text": "5 guards"
      },
      {
        "t": "li",
        "text": "Har guard = 5 rooms"
      },
      {
        "t": "p",
        "text": "Total rooms = 5 × 5 = 25 rooms"
      },
      {
        "t": "h",
        "text": "🐅 STEP 2: ADULT TIGERS"
      },
      {
        "t": "li",
        "text": "Har room me = 5 adult tigers"
      },
      {
        "t": "p",
        "text": "Adult tigers = 25 × 5 = 125"
      },
      {
        "t": "h",
        "text": "🐯 STEP 3: TIGER CUBS"
      },
      {
        "t": "li",
        "text": "Har adult tiger ke = 5 cubs"
      },
      {
        "t": "p",
        "text": "Cubs = 125 × 5 = 625"
      },
      {
        "t": "h",
        "text": "🐅🐯 STEP 4: TOTAL TIGERS"
      },
      {
        "t": "p",
        "text": "Total tigers = 125 + 625 = 750"
      },
      {
        "t": "h",
        "text": "🦵 STEP 5: TIGER LEGS"
      },
      {
        "t": "li",
        "text": "Har tiger (adult ya cub) = 4 legs"
      },
      {
        "t": "p",
        "text": "Tiger legs = 750 × 4 = 3000"
      },
      {
        "t": "h",
        "text": "👮‍♂️ STEP 6: HUMAN LEGS"
      },
      {
        "t": "li",
        "text": "Guards = 5"
      },
      {
        "t": "li",
        "text": "Legs per guard = 2"
      },
      {
        "t": "p",
        "text": "Guard legs = 5 × 2 = 10"
      },
      {
        "t": "li",
        "text": "**Tum khud palace ke andar ho** (important)"
      },
      {
        "t": "p",
        "text": "Your legs = 2"
      },
      {
        "t": "p",
        "text": "Total human legs = 10 + 2 = 12"
      },
      {
        "t": "h",
        "text": "✅ FINAL STEP: TOTAL LEGS"
      },
      {
        "t": "p",
        "text": "Total legs = Tiger legs + Human legs"
      },
      {
        "t": "p",
        "text": "= 3000 + 12"
      },
      {
        "t": "p",
        "text": "= 3012"
      },
      {
        "t": "h",
        "text": "🏁 ✅ FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "🎯 **Total number of legs in the palace = 3012**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ONE-LINER"
      },
      {
        "t": "p",
        "text": "“There are 750 tigers in total, contributing 3000 legs. Including the 5 guards and myself adds 12 human legs, making a total of 3012 legs.”"
      },
      {
        "t": "p",
        "text": "M8"
      }
    ]
  },
  {
    "id": "p42",
    "title": "Monty Hall problem",
    "category": "Probability & Expectation",
    "problem": [
      {
        "t": "p",
        "text": "The Monty Hall problem is a surprising probability puzzle:"
      },
      {
        "t": "li",
        "text": "There are 3 doors—two hide goats, and one hides a car."
      },
      {
        "t": "li",
        "text": "You pick one door (let’s call it door 2), hoping it has the car."
      },
      {
        "t": "li",
        "text": "The game show host, Monty Hall, then looks at the other two doors (1 and 3) and opens one that has a goat behind it (Say 3). (If both doors have goats, he chooses one at random.)"
      },
      {
        "t": "p",
        "text": "He then says to you, \"Do you want to pick door 2 or stick to door 1."
      },
      {
        "t": "p",
        "text": "What do you decide to have better chances of winning a car?"
      },
      {
        "t": "img",
        "src": "image86.png"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution:** The main trick is that the host would open the door with a goat only, so the chances of the other door having a car are higher. Hence, you should always switch to improve your chances. Below is a detailed solution."
      },
      {
        "t": "p",
        "text": "Let’s solve the Monty Hall problem step by step, assuming the gates are numbered 1, 2, and 3:"
      },
      {
        "t": "p",
        "text": "**Setup:**"
      },
      {
        "t": "li",
        "text": "**Player’s choice:** The player initially picks **gate 2**."
      },
      {
        "t": "p",
        "text": "The car is equally likely to be behind any of the three gates initially. Let’s evaluate the three possible arrangements:"
      },
      {
        "t": "p",
        "text": "**1. Car behind gate 1:**"
      },
      {
        "t": "li",
        "text": "Player picks gate 2 (initial choice)."
      },
      {
        "t": "li",
        "text": "Host must open gate 3, showing a goat (since gate 1 has the car)."
      },
      {
        "t": "li",
        "text": "**Switching to gate 1 wins the car.**"
      },
      {
        "t": "p",
        "text": "**2. Car behind gate 2:**"
      },
      {
        "t": "li",
        "text": "Player picks gate 2 (initial choice)."
      },
      {
        "t": "li",
        "text": "Host opens gate 3, showing a goat."
      },
      {
        "t": "li",
        "text": "**Switching to gate 1 loses, as the car is behind gate 2.**"
      },
      {
        "t": "p",
        "text": "**3. Car behind gate 3:**"
      },
      {
        "t": "li",
        "text": "Player picks gate 2 (initial choice)."
      },
      {
        "t": "li",
        "text": "Host cannot open gate 3 because it has the car. Instead, he opens gate 1, showing a goat."
      },
      {
        "t": "li",
        "text": "**Switching to gate 3 wins the car.**"
      },
      {
        "t": "p",
        "text": "**Summary of outcomes:**"
      },
      {
        "t": "li",
        "text": "In **2 out of 3 scenarios**, switching wins the car."
      },
      {
        "t": "li",
        "text": "In **1 out of 3 scenarios**, staying with the initial choice wins."
      },
      {
        "t": "p",
        "text": "**As probability of winning a car by switching is higher than not switching. It is advantage to switch.**"
      },
      {
        "t": "img",
        "src": "image86.png"
      },
      {
        "t": "h",
        "text": "🎬 SCENE SET KAR (DIMAAG ME PICTURE BANA)"
      },
      {
        "t": "li",
        "text": "3 band darwaze 🚪🚪🚪"
      },
      {
        "t": "li",
        "text": "1 ke peeche 🚗 car"
      },
      {
        "t": "li",
        "text": "2 ke peeche 🐐 goats"
      },
      {
        "t": "p",
        "text": "Tum:"
      },
      {
        "t": "li",
        "text": "**andha guess** karte ho"
      },
      {
        "t": "li",
        "text": "maan lo **Door 2** choose kiya"
      },
      {
        "t": "h",
        "text": "🧠 SABSE PEHLE YE FEEL LO (IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Jab tumne pehli baar choose kiya:"
      },
      {
        "t": "li",
        "text": "Tumhara door (Door 2)\n 👉 **1/3 chance** car ka"
      },
      {
        "t": "li",
        "text": "Baaki ke **2 doors milkar**\n 👉 **2/3 chance** car ka"
      },
      {
        "t": "p",
        "text": "💡\n Tumne car nahi choose ki,\n tumne **probability choose ki**."
      },
      {
        "t": "h",
        "text": "🎭 HOST KYA KARTA HAI (YEH PUZZLE KA HEART)"
      },
      {
        "t": "p",
        "text": "Host:"
      },
      {
        "t": "li",
        "text": "Car ka location **jaanta hai**"
      },
      {
        "t": "li",
        "text": "**Kabhi bhi car wala door nahi kholta**"
      },
      {
        "t": "li",
        "text": "Hamesha **goat dikhata hai**"
      },
      {
        "t": "p",
        "text": "👉 Matlab:"
      },
      {
        "t": "li",
        "text": "Host random nahi"
      },
      {
        "t": "li",
        "text": "Host **information de raha hai**"
      },
      {
        "t": "h",
        "text": "🔥 AB MAGIC MOMENT (YE CLICK HAI)"
      },
      {
        "t": "p",
        "text": "Pehle:"
      },
      {
        "t": "li",
        "text": "Door 2 = **1/3**"
      },
      {
        "t": "li",
        "text": "Door 1 + Door 3 = **2/3**"
      },
      {
        "t": "p",
        "text": "Host:"
      },
      {
        "t": "li",
        "text": "Door 3 khol deta (goat dikha ke)"
      },
      {
        "t": "li",
        "text": "Ab **Door 1 hi bacha** un 2 me se"
      },
      {
        "t": "p",
        "text": "❗ **Probability shift nahi hoti**\n ❗ **Probability concentrate hoti hai**"
      },
      {
        "t": "p",
        "text": "👉 Door 1 par ab **poora 2/3 aa gaya**"
      },
      {
        "t": "h",
        "text": "🧠 SIMPLE LINE JO SAB CLEAR KAR DETI HAI"
      },
      {
        "t": "p",
        "text": "**“Tumhara pehla guess galat hone ka chance zyada hota hai.”**"
      },
      {
        "t": "li",
        "text": "Agar pehla guess galat hai (2/3 cases)\n → **switch karoge to jeet**"
      },
      {
        "t": "li",
        "text": "Agar pehla guess sahi hai (1/3 cases)\n → switch karoge to haar"
      },
      {
        "t": "h",
        "text": "📊 CASES DEKH KE CONFIRM KAR LO"
      },
      {
        "t": "table",
        "rows": [
          [
            "Car kaha hai",
            "Tumhara first pick",
            "Switch ka result"
          ],
          [
            "Door 1",
            "Galat",
            "✅ Jeet"
          ],
          [
            "Door 2",
            "Sahi",
            "❌ Haar"
          ],
          [
            "Door 3",
            "Galat",
            "✅ Jeet"
          ]
        ]
      },
      {
        "t": "p",
        "text": "👉 3 me se **2 baar switch jeetata hai**"
      },
      {
        "t": "h",
        "text": "🎯 FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "✔ **Hamesha SWITCH karna chahiye**\n ✔ Winning chance = **2/3**\n ✔ Stay karne par = **1/3**"
      },
      {
        "t": "h",
        "text": "🧠 ONE-LINE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**“Host goat dikha ke tumhari galat choice ko expose karta hai.”**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY ANSWER (CRISP)"
      },
      {
        "t": "p",
        "text": "“Initially my choice has a 1/3 chance. The remaining doors together have a 2/3 chance. When the host reveals a goat, that probability shifts to the remaining unopened door, so switching doubles the winning probability.”"
      },
      {
        "t": "h",
        "text": "🔥 LAST FEEL CHECK"
      },
      {
        "t": "p",
        "text": "Agar main poochun:\n 👉 **Switch kyun better hai?**"
      },
      {
        "t": "p",
        "text": "Agar tu bole:"
      },
      {
        "t": "p",
        "text": "“Kyunki pehla guess aksar galat hota hai”"
      },
      {
        "t": "p",
        "text": "🔥 **Bhai puzzle samajh aa gaya**"
      },
      {
        "t": "p",
        "text": "Other"
      },
      {
        "t": "p",
        "text": "O1"
      },
      {
        "t": "h",
        "text": "🔥Puzzle | Measuring 45 Minutes with Two Burning Wires"
      },
      {
        "t": "li",
        "text": "2 identical wires"
      },
      {
        "t": "li",
        "text": "Har wire **1 hour (60 min)** me jalta hai"
      },
      {
        "t": "li",
        "text": "Jalna **uneven** hai (speed constant nahi)"
      },
      {
        "t": "li",
        "text": "Sirf **matchsticks** allowed"
      },
      {
        "t": "h",
        "text": "🧠 Ek simple rule (yaad rakh)"
      },
      {
        "t": "p",
        "text": "**Wire ko dono ends se jalao ⇒ total time exactly half ho jaata hai**\n Chahe wire uneven jale, ye rule hamesha true hota hai."
      },
      {
        "t": "h",
        "text": "✅ STEP-BY-STEP FINAL SOLUTION"
      },
      {
        "t": "img",
        "src": "image128.jpg"
      },
      {
        "t": "img",
        "src": "image205.png"
      },
      {
        "t": "img",
        "src": "image158.png"
      },
      {
        "t": "h",
        "text": "⏱️ Time = 0 minutes"
      },
      {
        "t": "li",
        "text": "**Wire A** → **dono ends se jalao**"
      },
      {
        "t": "li",
        "text": "**Wire B** → **sirf ek end se jalao**"
      },
      {
        "t": "p",
        "text": "👉 Wire A ab **30 minutes** me khatam hoga\n 👉 Wire B normally jal raha hai"
      },
      {
        "t": "h",
        "text": "⏱️ Time = 30 minutes"
      },
      {
        "t": "li",
        "text": "**Wire A poori jal chuki hai**"
      },
      {
        "t": "li",
        "text": "Ab **Wire B ke doosre end ko bhi jala do**"
      },
      {
        "t": "p",
        "text": "👉 Wire B ke bache hue part ko\n 👉 **dono ends se jalna start ho gaya**"
      },
      {
        "t": "h",
        "text": "⏱️ Ab kya hoga?"
      },
      {
        "t": "li",
        "text": "Wire B ka jo hissa bacha tha, wo **15 minutes** me jal ke khatam ho jaayega\n (kyunki ab dono ends se jal raha hai)"
      },
      {
        "t": "h",
        "text": "🏁 Total Time"
      },
      {
        "t": "li",
        "text": "Pehle phase → 30 minutes"
      },
      {
        "t": "li",
        "text": "Doosra phase → 15 minutes"
      },
      {
        "t": "h",
        "text": "🔥 30 + 15 = 45 minutes"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW MEI EXACT LINE"
      },
      {
        "t": "p",
        "text": "“Light one wire from both ends and the second wire from one end. After 30 minutes, the first wire burns out. Then light the other end of the second wire; it will burn out in another 15 minutes. Hence, total time measured is 45 minutes.”"
      },
      {
        "t": "h",
        "text": "🔒 FINAL LOCK"
      },
      {
        "t": "li",
        "text": "✔️ Uneven burning doesn’t matter"
      },
      {
        "t": "li",
        "text": "✔️ Dono ends = half time"
      },
      {
        "t": "li",
        "text": "✔️ Answer = **45 minutes**"
      },
      {
        "t": "p",
        "text": "O2"
      }
    ]
  },
  {
    "id": "p43",
    "title": "Elevator Puzzle",
    "category": "Arrangement & Seating",
    "problem": [
      {
        "t": "p",
        "text": "A man works on the 10-th floor and takes the elevator down to ground level at the end of the day. Yet every morning, he only takes the elevator to the 7th floor, even when in a hurry. But he goes all the way to the 10-th floor when others are in the elevator with him or it is a rainy day. Why?"
      },
      {
        "t": "h",
        "text": "🛗 Puzzle samjho pehle (feel ke saath)"
      },
      {
        "t": "li",
        "text": "Banda **10th floor** pe kaam karta hai"
      },
      {
        "t": "li",
        "text": "**Shaam ko** lift se **ground floor** aa jaata hai (koi problem nahi)"
      },
      {
        "t": "li",
        "text": "**Subah**:"
      },
      {
        "t": "li",
        "text": "Hamesha lift se **sirf 7th floor** tak jaata hai"
      },
      {
        "t": "li",
        "text": "Chahe **late** ho, tab bhi 7th hi"
      },
      {
        "t": "li",
        "text": "**Par**:"
      },
      {
        "t": "li",
        "text": "Jab **aur log lift me hote hain** → seedha **10th floor**"
      },
      {
        "t": "li",
        "text": "Jab **baarish hoti hai** → tab bhi **10th floor**"
      },
      {
        "t": "p",
        "text": "👉 Question: **KYU?** 🤔"
      },
      {
        "t": "h",
        "text": "❌ Galat soch (jo sab pehle sochte hain)"
      },
      {
        "t": "li",
        "text": "Lift kharab hai ❌"
      },
      {
        "t": "li",
        "text": "Company rule ❌"
      },
      {
        "t": "li",
        "text": "Health / exercise ❌"
      },
      {
        "t": "p",
        "text": "Ye puzzle **technology ka nahi**, **insaan ka** hai 😉"
      },
      {
        "t": "h",
        "text": "✅ Actual Logic (simple + killer)"
      },
      {
        "t": "h",
        "text": "🧍‍♂️ Banda short height ka hai"
      },
      {
        "t": "li",
        "text": "Lift ke buttons **upar vertical panel** me lage hote hain"
      },
      {
        "t": "li",
        "text": "Banda:"
      },
      {
        "t": "li",
        "text": "**7 ka button** press kar sakta hai"
      },
      {
        "t": "li",
        "text": "**10 ka button reach hi nahi hota**"
      },
      {
        "t": "p",
        "text": "👉 Isliye **akela hota hai** → 7th floor\n 👉 Wahan se **stairs se 10th** (thoda walk)"
      },
      {
        "t": "h",
        "text": "👥 Phir log hone par 10th kaise?"
      },
      {
        "t": "li",
        "text": "Dusre log:"
      },
      {
        "t": "li",
        "text": "**button press kar dete hain**"
      },
      {
        "t": "li",
        "text": "Banda sirf bolta hai:\n\n “10th floor please”"
      },
      {
        "t": "h",
        "text": "☔ Rainy day ka scene"
      },
      {
        "t": "li",
        "text": "Baarish me:"
      },
      {
        "t": "li",
        "text": "Uske paas **umbrella hota hai**"
      },
      {
        "t": "li",
        "text": "Umbrella = **extra height tool**"
      },
      {
        "t": "li",
        "text": "Umbrella se:"
      },
      {
        "t": "li",
        "text": "**10 ka button press ho jaata hai**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🎯 FINAL ANSWER (Interview-ready)"
      },
      {
        "t": "p",
        "text": "“The man is too short to reach the 10th-floor button. When alone, he can only press up to the 7th floor. When others are present, they press the button for him, and on rainy days, he uses his umbrella to reach the 10th-floor button.”"
      },
      {
        "t": "h",
        "text": "🧠 Puzzle ka moral"
      },
      {
        "t": "li",
        "text": "Kabhi-kabhi problem:"
      },
      {
        "t": "li",
        "text": "**system me nahi**"
      },
      {
        "t": "li",
        "text": "**human limitation me hoti hai**"
      },
      {
        "t": "p",
        "text": "03"
      }
    ]
  },
  {
    "id": "p44",
    "title": "Find the last ball",
    "category": "Measuring & Weighing",
    "problem": [
      {
        "t": "p",
        "text": "**Last Updated : 25 Aug, 2025**"
      },
      {
        "t": "p",
        "text": "**You have 20 Red and 16 Blue balls in a bag. You pull out 2 balls, one after another.**"
      },
      {
        "t": "li",
        "text": "**If the balls are of the same color, then you replace them with a Blue ball**"
      },
      {
        "t": "li",
        "text": "**If they are of different colors, you replace them with a Red ball.**"
      },
      {
        "t": "p",
        "text": "**Once you take out the balls, you do not put them back in the bag, so the balls keep reducing.**"
      },
      {
        "t": "img",
        "src": "image221.png"
      },
      {
        "t": "p",
        "text": "**What would be the color of the last ball remaining in the bag?**"
      },
      {
        "t": "p",
        "text": "**👉 Red balls ki parity (odd/even nature) kabhi change hi nahi hoti**"
      },
      {
        "t": "p",
        "text": "**Isko samajh lo, puzzle turant click karega.**"
      },
      {
        "t": "h",
        "text": "🔴🔵 Start situation"
      },
      {
        "t": "li",
        "text": "**Red = 20 (even)**"
      },
      {
        "t": "li",
        "text": "**Blue = 16**"
      },
      {
        "t": "li",
        "text": "**Total balls = 36**"
      },
      {
        "t": "h",
        "text": "🎯 Rules ko simplify kar dete hain"
      },
      {
        "t": "h",
        "text": "Case 1: 🔴 + 🔴 → 🔵"
      },
      {
        "t": "li",
        "text": "**Red: −2**"
      },
      {
        "t": "li",
        "text": "**Blue: +1\n 👉 Red even hi rehta hai**"
      },
      {
        "t": "h",
        "text": "Case 2: 🔵 + 🔵 → 🔵"
      },
      {
        "t": "li",
        "text": "**Blue: −1**"
      },
      {
        "t": "li",
        "text": "**Red: no change**"
      },
      {
        "t": "h",
        "text": "Case 3: 🔴 + 🔵 → 🔴"
      },
      {
        "t": "li",
        "text": "**Blue: −1**"
      },
      {
        "t": "li",
        "text": "**Red: same (1 gaya, 1 aaya)**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 IMPORTANT OBSERVATION (ye hi puzzle jeetata hai)"
      },
      {
        "t": "p",
        "text": "**👉 Red balls hamesha EVEN hi rehte hain**"
      },
      {
        "t": "li",
        "text": "**Start: 20 (even)**"
      },
      {
        "t": "li",
        "text": "**−2 hota hai ya same rehta hai**"
      },
      {
        "t": "li",
        "text": "**Kabhi odd nahi ban sakta**"
      },
      {
        "t": "h",
        "text": "⏳ Game kab khatam hota hai?"
      },
      {
        "t": "li",
        "text": "**Jab sirf 1 ball bachi ho**"
      },
      {
        "t": "p",
        "text": "**Ab socho 👇**"
      }
    ]
  },
  {
    "id": "p45",
    "title": "100 people in a circle with sword.",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "img",
        "src": "image87.png"
      },
      {
        "t": "h",
        "text": "🧠 Pehle problem ko FEEL karo"
      },
      {
        "t": "li",
        "text": "100 log circle me khade hain → **1, 2, 3, …, 100**"
      },
      {
        "t": "li",
        "text": "Rule simple:"
      },
      {
        "t": "li",
        "text": "Jiske paas sword hai → **next banda mar jaata**"
      },
      {
        "t": "li",
        "text": "Sword **agle zinda bande** ko milta"
      },
      {
        "t": "li",
        "text": "Ye repeat hota rehta hai"
      },
      {
        "t": "li",
        "text": "Last me **sirf 1 banda zinda**"
      },
      {
        "t": "p",
        "text": "👉 Question: **wo kaunsa number hoga?**"
      },
      {
        "t": "h",
        "text": "🔥 Sabse pehla round (ye bahut important hai)"
      },
      {
        "t": "p",
        "text": "Start:"
      },
      {
        "t": "p",
        "text": "1 🔪 2 ❌ → sword to 3"
      },
      {
        "t": "p",
        "text": "3 🔪 4 ❌ → sword to 5"
      },
      {
        "t": "p",
        "text": "5 🔪 6 ❌ → sword to 7"
      },
      {
        "t": "p",
        "text": "💡 **Observation 1 (gold point):**"
      },
      {
        "t": "p",
        "text": "**Saare even numbers mar jaate hain**"
      },
      {
        "t": "p",
        "text": "After Round 1, bachte hain:"
      },
      {
        "t": "p",
        "text": "1, 3, 5, 7, 9, 11, ..., 99   (total 50 log)"
      },
      {
        "t": "h",
        "text": "🔄 Ab kya hua?"
      },
      {
        "t": "li",
        "text": "Ab bhi rule wahi hai: next ko maarna"
      },
      {
        "t": "li",
        "text": "But ab **1 ke baad 3**, phir 5, etc."
      },
      {
        "t": "li",
        "text": "Matlab **phir se alternate elimination**"
      },
      {
        "t": "p",
        "text": "Ye process **har round me aadhe log uda deta hai**"
      },
      {
        "t": "h",
        "text": "🔑 Real magic logic (formula nahi, intuition)"
      },
      {
        "t": "h",
        "text": "🧠 Special case:"
      },
      {
        "t": "p",
        "text": "Agar total log **power of 2** hote:"
      },
      {
        "t": "li",
        "text": "2, 4, 8, 16, 32, 64, 128 …\n 👉 **toh hamesha person 1 jeetta**"
      },
      {
        "t": "p",
        "text": "Example:"
      },
      {
        "t": "li",
        "text": "8 log → winner = 1"
      },
      {
        "t": "li",
        "text": "16 log → winner = 1"
      },
      {
        "t": "li",
        "text": "64 log → winner = 1"
      },
      {
        "t": "h",
        "text": "❓ Par yaha 100 hai (power of 2 nahi)"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "Step 1:"
      },
      {
        "t": "p",
        "text": "100 se **chhoti sabse badi power of 2** nikaalo:"
      },
      {
        "t": "p",
        "text": "64  (2^6)"
      },
      {
        "t": "h",
        "text": "Step 2:"
      },
      {
        "t": "p",
        "text": "Extra log ="
      },
      {
        "t": "p",
        "text": "100 − 64 = 36"
      },
      {
        "t": "h",
        "text": "Step 3:"
      },
      {
        "t": "p",
        "text": "Ye extra log **circle ko shift** kar dete hain\n Har extra banda winner ko **2 steps aage** le jaata hai"
      },
      {
        "t": "p",
        "text": "👉 Formula:"
      },
      {
        "t": "p",
        "text": "Winner = 2 × (n − power_of_2) + 1"
      },
      {
        "t": "h",
        "text": "🧮 Apply karo (easy maths)"
      },
      {
        "t": "p",
        "text": "Winner = 2 × 36 + 1"
      },
      {
        "t": "p",
        "text": "= 72 + 1"
      },
      {
        "t": "p",
        "text": "= 73"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "🔥 **Person number 73 survives**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview-ready one-liner"
      },
      {
        "t": "p",
        "text": "“This is a Josephus problem. Since 64 is the largest power of 2 less than 100, the survivor is calculated as 2 × (100 − 64) + 1 = 73.”"
      },
      {
        "t": "p",
        "text": "05"
      },
      {
        "t": "h",
        "text": "Find the total guests that are present at the party"
      },
      {
        "t": "p",
        "text": "A person hosts a party and invites N guests to it. However, each guest has a condition, that each guest 'Gi' only stays at the party if there are at least 'Pi' people already at the party, otherwise leaves. The total number of guests N and the number of people each guest needs 'Pi' are given as input for each guest. The task is to find the total guests that are present at the party. It is also given that **the guests arrive at the party in the order given in the array 'Pi'\nExamples: **"
      },
      {
        "t": "h",
        "text": "🧠 Problem ko pehle FEEL karo"
      },
      {
        "t": "li",
        "text": "Party hai"
      },
      {
        "t": "li",
        "text": "Guests **ek-ek karke** aate hain (order matters ⚠️)"
      },
      {
        "t": "li",
        "text": "Har guest **Gi** bolta hai:"
      },
      {
        "t": "p",
        "text": "“Agar party me **kam se kam Pi log pehle se ho**, tabhi main rukunga.\n Nahi toh main turant chala jaunga.”"
      },
      {
        "t": "p",
        "text": "👉 Tumhe bas ye nikalna hai:\n **Last me kitne guests actually party me bache?**"
      },
      {
        "t": "h",
        "text": "🔑 Golden Rule (yaad rakhna)"
      },
      {
        "t": "p",
        "text": "**Jo guest ruk gaya, wahi count badha sakta hai**\n Jo guest chala gaya, uska koi effect nahi"
      },
      {
        "t": "p",
        "text": "Isliye hum:"
      },
      {
        "t": "li",
        "text": "Ek variable rakhte hain → totalGuests"
      },
      {
        "t": "li",
        "text": "Start me: totalGuests = 0"
      },
      {
        "t": "h",
        "text": "🔄 Core Logic (1 line me)"
      },
      {
        "t": "p",
        "text": "Har guest ke liye:"
      },
      {
        "t": "p",
        "text": "agar Pi <= totalGuests"
      },
      {
        "t": "p",
        "text": "toh guest stays → totalGuests++"
      },
      {
        "t": "p",
        "text": "warna"
      },
      {
        "t": "p",
        "text": "guest leaves → kuch nahi"
      },
      {
        "t": "p",
        "text": "Bas.\n Koi sorting nahi, koi backtracking nahi, koi trick nahi."
      },
      {
        "t": "h",
        "text": "🧪 Example 1 (slow + feel ke saath)"
      },
      {
        "t": "h",
        "text": "Input"
      },
      {
        "t": "p",
        "text": "N = 5"
      },
      {
        "t": "p",
        "text": "Pi = {1, 0, 2, 1, 3}"
      },
      {
        "t": "h",
        "text": "Step-by-step:"
      },
      {
        "t": "table",
        "rows": [
          [
            "Guest",
            "Pi",
            "Party me log",
            "Stays?",
            "totalGuests"
          ],
          [
            "1",
            "1",
            "0",
            "❌",
            "0"
          ],
          [
            "2",
            "0",
            "0",
            "✅",
            "1"
          ],
          [
            "3",
            "2",
            "1",
            "❌",
            "1"
          ],
          [
            "4",
            "1",
            "1",
            "✅",
            "2"
          ],
          [
            "5",
            "3",
            "2",
            "❌",
            "2"
          ]
        ]
      },
      {
        "t": "p",
        "text": "✅ **Final Answer = 2**"
      },
      {
        "t": "h",
        "text": "🧪 Example 2"
      },
      {
        "t": "p",
        "text": "Pi = {0, 2, 1}"
      },
      {
        "t": "table",
        "rows": [
          [
            "Guest",
            "Pi",
            "Party me log",
            "Stays?",
            "totalGuests"
          ],
          [
            "1",
            "0",
            "0",
            "✅",
            "1"
          ],
          [
            "2",
            "2",
            "1",
            "❌",
            "1"
          ],
          [
            "3",
            "1",
            "1",
            "✅",
            "2"
          ]
        ]
      },
      {
        "t": "p",
        "text": "✅ **Final Answer = 2**"
      },
      {
        "t": "h",
        "text": "❗ Important Observations (interview gold)"
      },
      {
        "t": "li",
        "text": "**Order matters**"
      },
      {
        "t": "li",
        "text": "Agar order change hota → answer change ho sakta"
      },
      {
        "t": "li",
        "text": "Guest once leaves → **wapas nahi aata**"
      },
      {
        "t": "li",
        "text": "Ye problem:"
      },
      {
        "t": "li",
        "text": "**Greedy**"
      },
      {
        "t": "li",
        "text": "**Single pass**"
      },
      {
        "t": "li",
        "text": "**O(N) time**"
      },
      {
        "t": "li",
        "text": "**O(1) space**"
      },
      {
        "t": "h",
        "text": "🧠 Interview me kaise bolna"
      },
      {
        "t": "p",
        "text": "“We simulate guest arrivals one by one.\n We keep a running count of guests currently present.\n If a guest’s requirement Pi is less than or equal to the current count, they stay and increment the count.\n Otherwise, they leave.\n The final count is the answer.”"
      },
      {
        "t": "h",
        "text": "🧑‍💻 Code ka logic (simple English)"
      },
      {
        "t": "p",
        "text": "count = 0"
      },
      {
        "t": "p",
        "text": "for each guest i:"
      },
      {
        "t": "p",
        "text": "if Pi <= count:"
      },
      {
        "t": "p",
        "text": "count++"
      },
      {
        "t": "p",
        "text": "return count"
      },
      {
        "t": "p",
        "text": "Arrangement Puzzles"
      },
      {
        "t": "p",
        "text": "A1"
      }
    ]
  },
  {
    "id": "p46",
    "title": "Days of month using 2 dice",
    "category": "Probability & Expectation",
    "problem": [
      {
        "t": "p",
        "text": "How can you represent days of the month using two 6-sided dice?"
      },
      {
        "t": "p",
        "text": "You can write one number on each face of the dice from 0 to 9, and you have to represent days from 1 to 31, for example, for 1, one dice should show 0 and another should show 1, similarly for 29, one dice should show 2 and another should show 9."
      },
      {
        "t": "img",
        "src": "image75.png"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution:**"
      },
      {
        "t": "img",
        "src": "image55.png"
      },
      {
        "t": "p",
        "text": "**Tumhare paas 2 dice hain**"
      },
      {
        "t": "p",
        "text": "**Har dice ke 6 faces → total 12 faces**"
      },
      {
        "t": "p",
        "text": "**Tumhe dates 01 se 31 dikhani hain**"
      },
      {
        "t": "p",
        "text": "**01 → (0,1)**"
      },
      {
        "t": "p",
        "text": "**12 → (1,2)**"
      },
      {
        "t": "p",
        "text": "**29 → (2,9)**"
      },
      {
        "t": "p",
        "text": "**31 → (3,1)**"
      },
      {
        "t": "p",
        "text": "**👉 Har date 2 digits se banti hai**"
      },
      {
        "t": "p",
        "text": "**👉 Har digit dice ke face par hona chahiye**"
      },
      {
        "t": "p",
        "text": "**🔍 Step 1: Kaunse digits really required hain?**"
      },
      {
        "t": "p",
        "text": "**Units place (last digit):**"
      },
      {
        "t": "p",
        "text": "**Dates jaati hain 0 se 9 tak**"
      },
      {
        "t": "p",
        "text": "**👉 digits needed: 0,1,2,3,4,5,6,7,8,9**"
      },
      {
        "t": "p",
        "text": "**Tens place (first digit):**"
      },
      {
        "t": "p",
        "text": "**Dates sirf jaati hain:**"
      },
      {
        "t": "p",
        "text": "**01–09 → 0**"
      },
      {
        "t": "p",
        "text": "**10–19 → 1**"
      },
      {
        "t": "p",
        "text": "**20–29 → 2**"
      },
      {
        "t": "p",
        "text": "**30–31 → 3**"
      },
      {
        "t": "p",
        "text": "**👉 Tens digit = 0,1,2,3**"
      },
      {
        "t": "p",
        "text": "**⚠️ Important constraint jo game change karta hai**"
      },
      {
        "t": "p",
        "text": "**Kuch dates same digit ke saath aati hain:**"
      },
      {
        "t": "p",
        "text": "**11 → (1,1)**"
      },
      {
        "t": "p",
        "text": "**22 → (2,2)**"
      },
      {
        "t": "p",
        "text": "**01 → (0,1)**"
      },
      {
        "t": "p",
        "text": "**02 → (0,2)**"
      },
      {
        "t": "p",
        "text": "**👉 Matlab:**"
      },
      {
        "t": "p",
        "text": "**0, 1, 2 dono dice par hone hi chahiye**"
      },
      {
        "t": "p",
        "text": "**kyunki:**"
      },
      {
        "t": "p",
        "text": "**Ek dice sirf ek digit dikhata hai**"
      },
      {
        "t": "p",
        "text": "**11 dikhane ke liye 1 dono dice par hona zaroori**"
      },
      {
        "t": "p",
        "text": "**✔️ So 0, 1, 2 must be on both dice**"
      },
      {
        "t": "p",
        "text": "**🧮 Step 2: Counting ka logic (bahut important)**"
      },
      {
        "t": "p",
        "text": "**Total faces available:**"
      },
      {
        "t": "p",
        "text": "**2 dice × 6 faces = 12 faces**"
      },
      {
        "t": "p",
        "text": "**Digits required:**"
      },
      {
        "t": "p",
        "text": "**0–9 = 10 digits**"
      },
      {
        "t": "p",
        "text": "**extra: tens digit ke liye 0,1,2 repeat = +3**"
      },
      {
        "t": "p",
        "text": "**👉 Total = 13 digits**"
      },
      {
        "t": "p",
        "text": "**⚠️ Problem:**"
      },
      {
        "t": "p",
        "text": "**13 digits chahiye**"
      },
      {
        "t": "p",
        "text": "**12 faces hi hain**"
      },
      {
        "t": "p",
        "text": "**🎩 Magic trick (puzzle ka soul)**"
      },
      {
        "t": "p",
        "text": "**👉 6 ko ulta ghumao → 9 ban jaata hai**"
      },
      {
        "t": "p",
        "text": "**Iska matlab:**"
      },
      {
        "t": "p",
        "text": "**Tumhe 9 likhne ki zaroorat hi nahi**"
      },
      {
        "t": "p",
        "text": "**Sirf 6 likho, kaam ho jaayega**"
      },
      {
        "t": "p",
        "text": "**✔️ Ab digits needed = 12**"
      },
      {
        "t": "p",
        "text": "**✔️ Faces available = 12**"
      },
      {
        "t": "p",
        "text": "**Perfect match 🔥**"
      },
      {
        "t": "p",
        "text": "**🧩 Final rule yaad rakhna**"
      },
      {
        "t": "p",
        "text": "**0, 1, 2 → dono dice par hone chahiye**"
      },
      {
        "t": "p",
        "text": "**9 likhne ki zaroorat nahi (6 use karo)**"
      },
      {
        "t": "p",
        "text": "**Baaki digits kahin bhi daal sakte ho**"
      },
      {
        "t": "p",
        "text": "**✅ Ek valid solution (example)**"
      },
      {
        "t": "p",
        "text": "**Dice 1:**"
      },
      {
        "t": "p",
        "text": "**0, 1, 2, 3, 4, 5**"
      },
      {
        "t": "p",
        "text": "**Dice 2:**"
      },
      {
        "t": "p",
        "text": "**0, 1, 2, 6, 7, 8**"
      },
      {
        "t": "p",
        "text": "**Ab check karo:**"
      },
      {
        "t": "p",
        "text": "**01 → 0 + 1 ✔️**"
      },
      {
        "t": "p",
        "text": "**11 → 1 + 1 ✔️**"
      },
      {
        "t": "p",
        "text": "**22 → 2 + 2 ✔️**"
      },
      {
        "t": "p",
        "text": "**29 → 2 + (6 flipped = 9) ✔️**"
      },
      {
        "t": "p",
        "text": "**31 → 3 + 1 ✔️**"
      },
      {
        "t": "p",
        "text": "**👉 01 se 31 sab possible 💯**"
      },
      {
        "t": "p",
        "text": "**🗣️ Interview-ready one-liner**"
      },
      {
        "t": "p",
        "text": "**“To represent all dates from 01 to 31 using two dice, digits 0, 1, and 2 must appear on both dice to allow repeated digits like 11 and 22. Since there are only 12 faces but 13 required digits, we exploit the fact that 6 can be rotated to represent 9.”**"
      },
      {
        "t": "p",
        "text": "A3"
      }
    ]
  },
  {
    "id": "p47",
    "title": "Last Palindrome",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "p",
        "text": "In the year 2001, on October 2, 2001, the date in MMDDYYYY format was a palindrome (same forwards as backwards), 10/02/2001 -> \"10022001\". When was the last palindrome date before 10/02/2001?"
      },
      {
        "t": "img",
        "src": "image81.png"
      },
      {
        "t": "li",
        "text": "Date format: **MMDDYYYY**"
      },
      {
        "t": "li",
        "text": "Palindrome matlab:"
      },
      {
        "t": "li",
        "text": "Date **aage se = peeche se**"
      },
      {
        "t": "p",
        "text": "Given palindrome:\n\n 10/02/2001 → 10022001 ✅"
      },
      {
        "t": "p",
        "text": "👉 Question:"
      },
      {
        "t": "p",
        "text": "**10/02/2001 se pehle ka last palindrome date kaunsa tha?**"
      },
      {
        "t": "h",
        "text": "🔑 Core observation (sabse important)"
      },
      {
        "t": "p",
        "text": "Agar date palindrome hai:"
      },
      {
        "t": "p",
        "text": "MM DD YYYY"
      },
      {
        "t": "p",
        "text": "A  B   C"
      },
      {
        "t": "p",
        "text": "Toh rule ban jaata hai:"
      },
      {
        "t": "p",
        "text": "MMDD = reverse(YYYY)"
      },
      {
        "t": "p",
        "text": "Example:"
      },
      {
        "t": "p",
        "text": "2001 → reverse = 1002 → MM=10, DD=02"
      },
      {
        "t": "p",
        "text": "✔️ isi wajah se **har saal maximum ek hi palindrome date** ho sakta hai"
      },
      {
        "t": "h",
        "text": "⏪ Ab peeche jaana shuru karo (logic)"
      },
      {
        "t": "p",
        "text": "Hum 2001 se **peeche ke saal** check karenge."
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "Step 1: 1900s (1900–1999)"
      },
      {
        "t": "p",
        "text": "Example:"
      },
      {
        "t": "p",
        "text": "1991 → reverse = 1991 → MM=19 ❌ (month 19 impossible)"
      },
      {
        "t": "p",
        "text": "👉 1900s ke saare saal:"
      },
      {
        "t": "li",
        "text": "reverse karne pe month **13 se upar** aa jaata\n ❌ So **1900s me koi valid palindrome nahi**"
      },
      {
        "t": "h",
        "text": "Step 2: 1800s, 1700s, 1600s, 1500s"
      },
      {
        "t": "p",
        "text": "Same issue:"
      },
      {
        "t": "li",
        "text": "Reverse karne pe **DD ya MM invalid**\n ❌ Sab reject"
      },
      {
        "t": "h",
        "text": "Step 3: 1300s (yahin game interesting hota hai)"
      },
      {
        "t": "p",
        "text": "Try:"
      },
      {
        "t": "p",
        "text": "1380 → reverse = 0831 → MM=08, DD=31"
      },
      {
        "t": "p",
        "text": "Check validity:"
      },
      {
        "t": "li",
        "text": "August (08) ✔️"
      },
      {
        "t": "li",
        "text": "31 days ✔️"
      },
      {
        "t": "p",
        "text": "✅ **Valid palindrome date found**"
      },
      {
        "t": "p",
        "text": "08/31/1380 → 08311380"
      },
      {
        "t": "h",
        "text": "❓ Kya isse bada koi ho sakta tha (1381–1399)?"
      },
      {
        "t": "p",
        "text": "Example:"
      },
      {
        "t": "p",
        "text": "1390 → reverse = 0931 → September 31 ❌"
      },
      {
        "t": "li",
        "text": "September me 30 din hi hote hain"
      },
      {
        "t": "li",
        "text": "1391 → 1931 → month 19 ❌"
      },
      {
        "t": "p",
        "text": "👉 1380 ke baad **koi valid date nahi banti**"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "🔥 **Last palindrome date before 10/02/2001 was:**"
      },
      {
        "t": "p",
        "text": "08/31/1380"
      },
      {
        "t": "h",
        "text": "🗣️ Interview-ready one-liner"
      },
      {
        "t": "p",
        "text": "“In MMDDYYYY format, a palindrome requires MMDD to be the reverse of YYYY. Checking backwards from 2001, the latest valid reverse that forms a real calendar date is 08/31/1380.”"
      },
      {
        "t": "p",
        "text": "A5"
      }
    ]
  },
  {
    "id": "p48",
    "title": "Identical bottles of pills",
    "category": "Poison, Pills & Testing",
    "problem": [
      {
        "t": "p",
        "text": "Given 10 identical bottles of identical pills (each bottle contains 100 pills). Out of 10 bottles, 9 have 1 gram of pills, but 1 bottle has pills of the weight of 1.1 grams. Given a measurement scale, how would you find the heavy bottle? **You can use the scale only once. **"
      },
      {
        "t": "img",
        "src": "image101.png"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution: **"
      },
      {
        "t": "p",
        "text": "**Step 1:** Arrange the bottles on the shelf and now take, 1 pill from the first bottle, 2 pills from the second bottle, 3 pills from the third bottle, and so on."
      },
      {
        "t": "p",
        "text": "**Step 2: **In total, you'll be taking 1 + 2 + 3 + ... + 10 pills. This is a mathematical sequence that adds up to 55 pills (10 x 11 / 2) or normally if you'll add up you'll get 55 Pills."
      },
      {
        "t": "p",
        "text": "**Step 3: **If the weight reads exactly 55 grams, congratulations! All the bottles have pills of the correct weight. But If the weight is more than 55 grams, the difference indicates the bottle with the heavier pills."
      },
      {
        "t": "p",
        "text": "For example, if the weight shows 55.1 grams, the extra 0.1 gram comes from the first bottle (since you took 1 pill from it)."
      },
      {
        "t": "li",
        "text": "Similarly, if the weight shows 55.2 grams, the second bottle has the heavier pills (because you took 2 pills from it)."
      },
      {
        "t": "li",
        "text": "Likewise if the weight shows 55.6 grams, the 6th bottle has the heavier pills (Since you too 6 pills from bottle 6) and so on."
      },
      {
        "t": "h",
        "text": "🧠 Problem ko pehle FEEL karo"
      },
      {
        "t": "li",
        "text": "Total bottles = **10**"
      },
      {
        "t": "li",
        "text": "Har bottle me pills **same dikhte hain**"
      },
      {
        "t": "li",
        "text": "9 bottles: **1 gram per pill**"
      },
      {
        "t": "li",
        "text": "1 bottle: **1.1 gram per pill** (heavy bottle)"
      },
      {
        "t": "li",
        "text": "Scale use kar sakte ho **sirf 1 baar**"
      },
      {
        "t": "p",
        "text": "👉 Goal:\n **1 weighing me heavy bottle ka number batana**"
      },
      {
        "t": "h",
        "text": "❌ Galat approach (jo kaam nahi karegi)"
      },
      {
        "t": "li",
        "text": "Ek bottle ko ek-ek karke weigh karna ❌"
      },
      {
        "t": "li",
        "text": "Do-do bottles compare karna ❌"
      },
      {
        "t": "p",
        "text": "Kyuki:"
      },
      {
        "t": "li",
        "text": "Scale sirf **ek baar** allowed hai"
      },
      {
        "t": "h",
        "text": "🔑 Smart idea (puzzle ka soul)"
      },
      {
        "t": "p",
        "text": "“Har bottle se **alag count** ke pills lo, taaki weight se bottle ka number samajh aa jaaye.”"
      },
      {
        "t": "h",
        "text": "🪜 Step-by-step solution"
      },
      {
        "t": "h",
        "text": "✅ Step 1: Pills uthao (important)"
      },
      {
        "t": "li",
        "text": "Bottle 1 → **1 pill**"
      },
      {
        "t": "li",
        "text": "Bottle 2 → **2 pills**"
      },
      {
        "t": "li",
        "text": "Bottle 3 → **3 pills**"
      },
      {
        "t": "li",
        "text": "Bottle 10 → **10 pills**"
      },
      {
        "t": "p",
        "text": "👉 Total pills ="
      },
      {
        "t": "p",
        "text": "1 + 2 + 3 + ... + 10 = 55 pills"
      },
      {
        "t": "h",
        "text": "✅ Step 2: Weigh karo (sirf 1 baar)"
      },
      {
        "t": "p",
        "text": "Agar **sab pills 1 gram ke hote**, toh weight hota:"
      },
      {
        "t": "p",
        "text": "55 grams"
      },
      {
        "t": "h",
        "text": "🎯 Magic moment (result kaise milega)"
      },
      {
        "t": "p",
        "text": "Heavy bottle ke har pill ka extra weight = **0.1 gram**"
      },
      {
        "t": "p",
        "text": "👉 Agar heavy bottle = **kth bottle**,\n toh extra weight ="
      },
      {
        "t": "p",
        "text": "k × 0.1 gram"
      },
      {
        "t": "h",
        "text": "🧪 Examples (feel aayega yahin)"
      },
      {
        "t": "table",
        "rows": [
          [
            "Scale Reading",
            "Extra Weight",
            "Heavy Bottle"
          ],
          [
            "55.1 g",
            "0.1",
            "Bottle 1"
          ],
          [
            "55.2 g",
            "0.2",
            "Bottle 2"
          ],
          [
            "55.6 g",
            "0.6",
            "Bottle 6"
          ],
          [
            "56.0 g",
            "1.0",
            "Bottle 10"
          ]
        ]
      },
      {
        "t": "p",
        "text": "👉 Decimal ka number = **bottle number** 🔥"
      },
      {
        "t": "h",
        "text": "🧠 Why this works (intuition)"
      },
      {
        "t": "li",
        "text": "Har bottle ka **unique signature** bana diya (1 pill, 2 pills, 3 pills…)"
      },
      {
        "t": "li",
        "text": "Heavy pills ka effect **add ho jaata hai**"
      },
      {
        "t": "li",
        "text": "Ek hi weighing me **exact bottle reveal**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview-ready one-liner"
      },
      {
        "t": "p",
        "text": "“I take a different number of pills from each bottle and weigh them once. Any excess over the expected total weight directly reveals the index of the heavier bottle.”"
      },
      {
        "t": "h",
        "text": "🔥 One-line memory trick"
      },
      {
        "t": "p",
        "text": "**“Decimal batata hai bottle number.”**"
      },
      {
        "t": "p",
        "text": "A6"
      }
    ]
  },
  {
    "id": "p49",
    "title": "10 Balls in 5 Lines",
    "category": "Measuring & Weighing",
    "problem": [
      {
        "t": "p",
        "text": "Given ten balls, the task is to place these 10 balls in five lines such that each line contains exactly 4 balls."
      },
      {
        "t": "img",
        "src": "image134.png"
      },
      {
        "t": "h",
        "text": "🧠 Problem ko pehle FEEL karo"
      },
      {
        "t": "li",
        "text": "Total balls = **10**"
      },
      {
        "t": "li",
        "text": "Total lines = **5**"
      },
      {
        "t": "li",
        "text": "Har line me **exactly 4 balls**"
      },
      {
        "t": "li",
        "text": "Balls **share ho sakti hain** (same ball multiple lines ka part ho sakta hai)"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "👉 **Trap:**\n Agar tu soche “5 alag-alag straight rows banaunga” → ❌ impossible\n 👉 Solution **overlapping lines** me hai."
      },
      {
        "t": "h",
        "text": "🔑 Core idea (puzzle ka soul)"
      },
      {
        "t": "p",
        "text": "**Har ball sirf ek jagah nahi hoti —\n ek ball multiple lines ka intersection ban sakti hai**"
      },
      {
        "t": "p",
        "text": "Isliye hum **star (⭐) + pentagon** use karte hain."
      },
      {
        "t": "h",
        "text": "✨ Step-by-step Visualization (IMPORTANT)"
      },
      {
        "t": "h",
        "text": "🔹 Step 1: Ek regular pentagon imagine karo"
      },
      {
        "t": "li",
        "text": "5 corners (vertices)"
      },
      {
        "t": "h",
        "text": "🔹 Step 2: Pentagon ke andar ek ⭐ star draw karo"
      },
      {
        "t": "li",
        "text": "Ye star **5 straight lines** banata hai"
      },
      {
        "t": "li",
        "text": "Har line doosri lines ko cut karti hai"
      },
      {
        "t": "h",
        "text": "🔹 Step 3: Balls kahan rakhen?"
      },
      {
        "t": "li",
        "text": "**5 balls** → pentagon ke **5 corners** par"
      },
      {
        "t": "li",
        "text": "**5 balls** → star ke **5 intersection points** par"
      },
      {
        "t": "p",
        "text": "Total balls ="
      },
      {
        "t": "p",
        "text": "5 (corners) + 5 (intersections) = 10"
      },
      {
        "t": "h",
        "text": "🧩 Ab magic check karo (har line me 4 balls?)"
      },
      {
        "t": "p",
        "text": "Star ki **har straight line**:"
      },
      {
        "t": "li",
        "text": "2 corner balls"
      },
      {
        "t": "li",
        "text": "2 intersection balls"
      },
      {
        "t": "p",
        "text": "👉 Total = **4 balls per line** ✅"
      },
      {
        "t": "h",
        "text": "📊 Summary table"
      },
      {
        "t": "table",
        "rows": [
          [
            "Cheez",
            "Count"
          ],
          [
            "Balls",
            "10"
          ],
          [
            "Lines",
            "5"
          ],
          [
            "Balls per line",
            "4"
          ],
          [
            "Trick",
            "Overlapping + intersections"
          ]
        ]
      },
      {
        "t": "h",
        "text": "🧠 Ek sentence me samjho"
      },
      {
        "t": "p",
        "text": "“By arranging the balls at the vertices and intersection points of a pentagon-star, each of the five straight lines formed by the star passes through exactly four balls.”"
      },
      {
        "t": "h",
        "text": "🎯 Interview-ready one-liner"
      },
      {
        "t": "p",
        "text": "“The trick is to use intersecting lines. Placing balls at the vertices of a pentagon and at the intersections of a star inside it gives five lines, each containing exactly four balls.”"
      },
      {
        "t": "p",
        "text": "**Solution:**"
      },
      {
        "t": "img",
        "src": "image183.jpg"
      },
      {
        "t": "li",
        "text": "Draw the star with a pentagon in the centre."
      },
      {
        "t": "img",
        "src": "image211.jpg"
      },
      {
        "t": "li",
        "text": "Place each ball at the intersection of extended lines of pentagon"
      },
      {
        "t": "img",
        "src": "image159.jpg"
      },
      {
        "t": "li",
        "text": "Then place remaining balls on 5 vertices of pentagon."
      },
      {
        "t": "li",
        "text": "Hence the solution to the \"**Ten balls in five lines**\" is:"
      },
      {
        "t": "p",
        "text": "The solution to the above puzzle can be obtained as:"
      },
      {
        "t": "img",
        "src": "image195.jpg"
      },
      {
        "t": "p",
        "text": "A7"
      }
    ]
  },
  {
    "id": "p50",
    "title": "(Round table coin game)",
    "category": "Arrangement & Seating",
    "problem": [],
    "solution": [
      {
        "t": "p",
        "text": "Suppose two player, player A and player B have the infinite number of coins. Now they are sitting near a perfectly round table and going to play a game. The game is, in each turn, a player will put one coin anywhere on the table (not on the top of coin already placed on the table, but on the surface of the table). And the player who places the last coin on the table will win the game. Given player A will always move first suggest a strategy such that player A will always win, no matter how player B will play. Solution: On the first move place the coin on the center of the table. Then player B will place his coin anywhere on the table. Now, you put your coin on the line of diameter passing through the coin placed by player B, at the same distance away from the boundary of the circle (i.e mimic his placement on the opposite side of the table). Refer figure for better understanding. If player A has space to place a coin, so will player B. Player B will run out of place before player A."
      },
      {
        "t": "img",
        "src": "image26.png"
      },
      {
        "t": "h",
        "text": "🧠 Problem ko FEEL karo"
      },
      {
        "t": "li",
        "text": "Round (perfect circle) table"
      },
      {
        "t": "li",
        "text": "Dono players ke paas **infinite coins**"
      },
      {
        "t": "li",
        "text": "Rule:"
      },
      {
        "t": "li",
        "text": "Ek turn = table par **1 coin**"
      },
      {
        "t": "li",
        "text": "Coin **kisi aur coin ke upar nahi**"
      },
      {
        "t": "li",
        "text": "**Jo last coin rakhega → wahi jeetega**"
      },
      {
        "t": "li",
        "text": "Player **A pehle move karta hai**"
      },
      {
        "t": "p",
        "text": "👉 Question:\n **A aisi strategy batao ki A hamesha jeete, chahe B kuch bhi kare**"
      },
      {
        "t": "h",
        "text": "🔑 Key idea (puzzle ka soul)"
      },
      {
        "t": "p",
        "text": "**Table perfectly round hai → symmetry ka fayda uthao**"
      },
      {
        "t": "p",
        "text": "A ka goal:"
      },
      {
        "t": "li",
        "text": "Har move ka **mirror banaana**"
      },
      {
        "t": "li",
        "text": "Taaki B ke baad **hamesha A ke paas bhi jagah ho**"
      },
      {
        "t": "h",
        "text": "🪜 Strategy (simple steps)"
      },
      {
        "t": "h",
        "text": "✅ Step 1: First move (MOST IMPORTANT)"
      },
      {
        "t": "p",
        "text": "👉 **Player A table ke exact CENTER par coin rakhta hai**"
      },
      {
        "t": "p",
        "text": "📌 Isse:"
      },
      {
        "t": "li",
        "text": "Table **perfectly symmetric** ho jaati hai"
      },
      {
        "t": "li",
        "text": "Ab har jagah ka **exact opposite point exist karta hai**"
      },
      {
        "t": "h",
        "text": "✅ Step 2: Player B ka move"
      },
      {
        "t": "li",
        "text": "B kahin bhi coin rakhta hai (random jagah)"
      },
      {
        "t": "h",
        "text": "✅ Step 3: Player A ka reply (MAGIC MOVE)"
      },
      {
        "t": "p",
        "text": "👉 A:"
      },
      {
        "t": "li",
        "text": "B ke coin ko dekhta hai"
      },
      {
        "t": "li",
        "text": "Us coin ke **diameter ke opposite side**"
      },
      {
        "t": "li",
        "text": "**same distance** par apna coin rakhta hai"
      },
      {
        "t": "p",
        "text": "💡 Matlab:"
      },
      {
        "t": "li",
        "text": "B ne jahan coin rakha"
      },
      {
        "t": "li",
        "text": "A uska **mirror image** bana deta hai"
      },
      {
        "t": "h",
        "text": "🔄 Ye process kyun kaam karta hai?"
      },
      {
        "t": "li",
        "text": "Table round hai → **perfect symmetry**"
      },
      {
        "t": "li",
        "text": "Agar B ke paas jagah hai:"
      },
      {
        "t": "li",
        "text": "Toh uska **mirror point bhi khaali hoga**"
      },
      {
        "t": "li",
        "text": "Isliye:"
      },
      {
        "t": "li",
        "text": "**B jab bhi coin rakhega**"
      },
      {
        "t": "li",
        "text": "**A hamesha uska copy bana sakta hai**"
      },
      {
        "t": "h",
        "text": "🧨 End game (jeet ka reason)"
      },
      {
        "t": "li",
        "text": "B jab last jagah use karega"
      },
      {
        "t": "li",
        "text": "Us jagah ka mirror **pehle hi A use kar chuka hoga**"
      },
      {
        "t": "li",
        "text": "Matlab:"
      },
      {
        "t": "li",
        "text": "**B pehle phase me hi jagah khatam karega**"
      },
      {
        "t": "li",
        "text": "A ke paas **last valid move hoga**"
      },
      {
        "t": "p",
        "text": "🔥 **Winner = Player A (always)**"
      },
      {
        "t": "h",
        "text": "🧠 Ek line me intuition"
      },
      {
        "t": "p",
        "text": "“A pehle center par coin rakhta hai aur phir har move me B ke coin ka mirror image banata hai. Symmetry ensure karti hai ki A hamesha last move kare.”"
      },
      {
        "t": "h",
        "text": "🗣️ Interview-ready explanation"
      },
      {
        "t": "p",
        "text": "“Since the table is perfectly circular, Player A uses a symmetry strategy. After placing the first coin at the center, A mirrors every move made by B across the center. This guarantees that whenever B has a move, A also has a corresponding move, ensuring A always plays last.”"
      },
      {
        "t": "h",
        "text": "🎯 Yaad rakhne ka trick"
      },
      {
        "t": "li",
        "text": "**Center + Mirror = Guaranteed Win**"
      },
      {
        "t": "li",
        "text": "Round table + first move = **OP advantage**"
      },
      {
        "t": "p",
        "text": "A8"
      },
      {
        "t": "li",
        "text": "**N is divisible in 3:** In this case, we flip the switch for **1st** bulb, which lights the bulbs **1, 2 and N**. Then we flip the switch of **4th bulb**, which lights the bulb **3, 4, and 5**. In this manner, we flip the switch of every **3K + 1** bulb until we flip the switch of **N - 2** bulb, which will light up the last 3 bulbs. This results in a total of **N/3** switch flips."
      },
      {
        "t": "img",
        "src": "image56.jpg"
      },
      {
        "t": "img",
        "src": "image4.jpg"
      },
      {
        "t": "img",
        "src": "image42.png"
      },
      {
        "t": "h",
        "text": "🎬 PEHLE QUESTION KI FEEL LO (VERY IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Soch:"
      },
      {
        "t": "li",
        "text": "N lights **circle me lagi hui hain**"
      },
      {
        "t": "li",
        "text": "Har light ke paas **ek switch** hai"
      },
      {
        "t": "li",
        "text": "Jab tum **kisi ek switch ko flip** karte ho:"
      },
      {
        "t": "li",
        "text": "Us light ka state change hota hai"
      },
      {
        "t": "li",
        "text": "Uske **left aur right wali lights** ka bhi state change hota hai\n 👉 Total **3 lights toggle** hoti hain"
      },
      {
        "t": "p",
        "text": "Initial state:"
      },
      {
        "t": "li",
        "text": "❌ **Saari lights OFF**"
      },
      {
        "t": "p",
        "text": "Goal:"
      },
      {
        "t": "li",
        "text": "✅ **Saari lights ON**"
      },
      {
        "t": "li",
        "text": "Aur **minimum number of switch flips**"
      },
      {
        "t": "h",
        "text": "🔑 SABSE IMPORTANT FEEL (PUZZLE KA HEART)"
      },
      {
        "t": "p",
        "text": "**Order matter nahi karta,\n sirf ye matter karta hai ki\n ek switch ODD times flip hua ya EVEN times.**"
      },
      {
        "t": "li",
        "text": "Even flips → no effect (OFF hi rahega)"
      },
      {
        "t": "li",
        "text": "Odd flips → effect dikhega (OFF → ON)"
      },
      {
        "t": "p",
        "text": "Isko bolte hain **parity logic** 🔥"
      },
      {
        "t": "h",
        "text": "🧠 AB BASIC OBSERVATION"
      },
      {
        "t": "p",
        "text": "Ek switch flip ⇒ **3 lights toggle**"
      },
      {
        "t": "p",
        "text": "So naturally dimaag me aata hai:"
      },
      {
        "t": "p",
        "text": "“Kya hum lights ko **groups of 3** me handle kar sakte hain?”"
      },
      {
        "t": "p",
        "text": "Yahin se solution split hota hai 👇"
      },
      {
        "t": "h",
        "text": "🟢 CASE 1: N divisible by 3"
      },
      {
        "t": "p",
        "text": "Example: N = 6, 9, 12 …"
      },
      {
        "t": "h",
        "text": "FEEL"
      },
      {
        "t": "p",
        "text": "Agar N = 3, 6, 9 …\n toh poora circle **perfect 3-light blocks** me toot jaata hai."
      },
      {
        "t": "h",
        "text": "STRATEGY (INTUITIVE)"
      },
      {
        "t": "li",
        "text": "Lights ko number karo: 1, 2, 3, …, N (circle me)"
      },
      {
        "t": "li",
        "text": "Switch flip karo:"
      },
      {
        "t": "li",
        "text": "**1**"
      },
      {
        "t": "li",
        "text": "**4**"
      },
      {
        "t": "li",
        "text": "**7**"
      },
      {
        "t": "li",
        "text": "**10**"
      },
      {
        "t": "li",
        "text": "… (har 3rd ke baad +1)"
      },
      {
        "t": "p",
        "text": "Matlab: **1, 4, 7, 10, …**"
      },
      {
        "t": "h",
        "text": "KYU YE KAAM KARTA HAI?"
      },
      {
        "t": "li",
        "text": "Switch 1 → lights **N, 1, 2** ON"
      },
      {
        "t": "li",
        "text": "Switch 4 → lights **3, 4, 5** ON"
      },
      {
        "t": "li",
        "text": "Switch 7 → lights **6, 7, 8** ON"
      },
      {
        "t": "li",
        "text": "…"
      },
      {
        "t": "li",
        "text": "Last switch → last 3 lights ON"
      },
      {
        "t": "p",
        "text": "💡 **Har light exactly ek baar toggle hoti hai**"
      },
      {
        "t": "h",
        "text": "🎯 RESULT"
      },
      {
        "t": "li",
        "text": "Total flips = **N / 3**"
      },
      {
        "t": "li",
        "text": "Ye **minimum possible** hai"
      },
      {
        "t": "p",
        "text": "✅ **Perfect solution**"
      },
      {
        "t": "h",
        "text": "🔴 CASE 2: N NOT divisible by 3"
      },
      {
        "t": "p",
        "text": "Example: N = 4, 5, 7, 8 …"
      },
      {
        "t": "h",
        "text": "FEEL"
      },
      {
        "t": "p",
        "text": "Yahan problem aati hai:"
      },
      {
        "t": "li",
        "text": "Groups of 3 banate jaoge"
      },
      {
        "t": "li",
        "text": "End me **1 ya 2 lights bach jaayengi** jo OFF rahengi"
      },
      {
        "t": "h",
        "text": "AB KYA PROBLEM HAI?"
      },
      {
        "t": "p",
        "text": "Socho:"
      },
      {
        "t": "li",
        "text": "Tumne kuch switches flip kiye"
      },
      {
        "t": "li",
        "text": "Kuch lights ON ho gayi"
      },
      {
        "t": "li",
        "text": "End me ek light X OFF reh gayi"
      },
      {
        "t": "p",
        "text": "Ab:"
      },
      {
        "t": "li",
        "text": "Agar tum **X ka switch flip** karte ho\n → wo ON hogi\n → par **uske neighbours OFF ho sakte hain** 😬"
      },
      {
        "t": "p",
        "text": "Yani:"
      },
      {
        "t": "p",
        "text": "**Ek light ko fix karne jao, doosri bigad jaati hai**"
      },
      {
        "t": "h",
        "text": "FEEL WALA TRUTH (IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**Jab N ≠ multiple of 3 ho,\n tab “partial strategy” fail hoti hai.\n Sab switches ko involve karna padta hai.**"
      },
      {
        "t": "h",
        "text": "FINAL STRATEGY"
      },
      {
        "t": "li",
        "text": "Agar N divisible by 3 ❌ nahi hai:\n 👉 **Har switch ko exactly ek baar flip karo**"
      },
      {
        "t": "h",
        "text": "KYU YE KAAM KARTA HAI?"
      },
      {
        "t": "li",
        "text": "Har light ke paas:"
      },
      {
        "t": "li",
        "text": "Apna switch"
      },
      {
        "t": "li",
        "text": "Left neighbour ka switch"
      },
      {
        "t": "li",
        "text": "Right neighbour ka switch"
      },
      {
        "t": "p",
        "text": "👉 Total **3 flips** affect hoti hain\n 👉 3 = odd number\n 👉 OFF → ON ✅"
      },
      {
        "t": "h",
        "text": "🎯 RESULT"
      },
      {
        "t": "li",
        "text": "Total flips = **N**"
      },
      {
        "t": "li",
        "text": "Ye minimum hai is case me"
      },
      {
        "t": "h",
        "text": "🏁 FINAL ANSWER (CLEAR)"
      },
      {
        "t": "table",
        "rows": [
          [
            "Case",
            "Minimum Switch Flips"
          ],
          [
            "N divisible by 3",
            "N / 3"
          ],
          [
            "N not divisible by 3",
            "N"
          ]
        ]
      },
      {
        "t": "h",
        "text": "🧠 ONE-LINE FEEL (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**“Groups of 3 win when possible;\n otherwise everyone must participate.”**"
      },
      {
        "t": "h",
        "text": "🗣️ INTERVIEW-READY EXPLANATION (SHORT)"
      },
      {
        "t": "p",
        "text": "“Since the order of flips doesn’t matter, only parity matters.\n If N is divisible by 3, flipping every third switch turns on all lights with N/3 flips.\n Otherwise, any partial strategy leaves some lights off, so every switch must be flipped once, requiring N flips.”"
      },
      {
        "t": "h",
        "text": "💎 MEMORY TRICK"
      },
      {
        "t": "li",
        "text": "**3 ka multiple?** → divide by 3"
      },
      {
        "t": "li",
        "text": "**Nahi?** → sabko flip karo"
      },
      {
        "t": "p",
        "text": "Mathematical And Analytical Puzzles"
      },
      {
        "t": "p",
        "text": "MA1"
      }
    ]
  },
  {
    "id": "p51",
    "title": "Find the ages of daughters",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "h",
        "text": "Note: You don’t need to know the actual house number — Shyam’s reaction in the story gives enough information to figure it out."
      },
      {
        "t": "p",
        "text": "Alok ki **3 daughters** hain."
      },
      {
        "t": "h",
        "text": "Hints:"
      },
      {
        "t": "p",
        "text": "1️⃣ **Product of ages = 72**\n 2️⃣ **Sum of ages = House number** (Shyam ne dekha, phir bhi confuse)\n 3️⃣ **Oldest girl likes strawberry ice cream**"
      },
      {
        "t": "p",
        "text": "👉 Question: **Ages kya hain?**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🧠 Step 1: Interviewer ki soch samjho (VERY IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Interviewer yeh puzzle **math ke liye nahi**, balki yeh check karne ke liye deta hai:"
      },
      {
        "t": "li",
        "text": "Kya tum **information se information nikal sakte ho?**"
      },
      {
        "t": "li",
        "text": "Kya tum **ambiguity notice karte ho?**"
      },
      {
        "t": "li",
        "text": "Kya tum **last hint ka real meaning samajhte ho?**"
      },
      {
        "t": "h",
        "text": "✍️ Step 2: Hint 1 → Product = 72"
      },
      {
        "t": "p",
        "text": "Teen positive integers ka product 72 hona chahiye."
      },
      {
        "t": "p",
        "text": "Possible combinations (order doesn’t matter):"
      },
      {
        "t": "table",
        "rows": [
          [
            "Ages",
            "Product"
          ],
          [
            "1, 1, 72",
            "72"
          ],
          [
            "1, 2, 36",
            "72"
          ],
          [
            "1, 3, 24",
            "72"
          ],
          [
            "1, 4, 18",
            "72"
          ],
          [
            "1, 6, 12",
            "72"
          ],
          [
            "1, 8, 9",
            "72"
          ],
          [
            "2, 2, 18",
            "72"
          ],
          [
            "2, 3, 12",
            "72"
          ],
          [
            "2, 4, 9",
            "72"
          ],
          [
            "2, 6, 6",
            "72"
          ],
          [
            "3, 3, 8",
            "72"
          ],
          [
            "3, 4, 6",
            "72"
          ]
        ]
      },
      {
        "t": "p",
        "text": "👉 **Shyam says: “Not enough information”**\n ✔️ That’s obvious — too many possibilities."
      },
      {
        "t": "h",
        "text": "🏠 Step 3: Hint 2 → Sum = House Number"
      },
      {
        "t": "p",
        "text": "Ab har triplet ka **sum** nikaalte hain:"
      },
      {
        "t": "table",
        "rows": [
          [
            "Ages",
            "Sum"
          ],
          [
            "1, 1, 72",
            "74"
          ],
          [
            "1, 2, 36",
            "39"
          ],
          [
            "1, 3, 24",
            "28"
          ],
          [
            "1, 4, 18",
            "23"
          ],
          [
            "1, 6, 12",
            "19"
          ],
          [
            "1, 8, 9",
            "18"
          ],
          [
            "2, 2, 18",
            "22"
          ],
          [
            "2, 3, 12",
            "17"
          ],
          [
            "2, 4, 9",
            "15"
          ],
          [
            "2, 6, 6",
            "14"
          ],
          [
            "3, 3, 8",
            "14"
          ],
          [
            "3, 4, 6",
            "13"
          ]
        ]
      },
      {
        "t": "p",
        "text": "🔥 **KEY OBSERVATION**"
      },
      {
        "t": "p",
        "text": "👉 **Sirf ek sum repeat ho raha hai: 14**"
      },
      {
        "t": "li",
        "text": "(2, 6, 6)"
      },
      {
        "t": "li",
        "text": "(3, 3, 8)"
      },
      {
        "t": "p",
        "text": "👉 Shyam ne **house number dekha**, phir bhi bola:"
      },
      {
        "t": "p",
        "text": "“I still do not have enough information”"
      },
      {
        "t": "p",
        "text": "✔️ Iska matlab **house number = 14**\n ✔️ Aur **do valid combinations** bachi hui hain"
      },
      {
        "t": "h",
        "text": "👀 Visualization (Mind clarity)"
      },
      {
        "t": "img",
        "src": "image239.png"
      },
      {
        "t": "img",
        "src": "image118.png"
      },
      {
        "t": "img",
        "src": "image52.png"
      },
      {
        "t": "p",
        "text": "Socho:"
      },
      {
        "t": "li",
        "text": "3 bachchiyan line me khadi hain"
      },
      {
        "t": "li",
        "text": "Dono cases me sum 14 aa raha hai"
      },
      {
        "t": "li",
        "text": "Ab third hint decision maker hai"
      },
      {
        "t": "h",
        "text": "🍓 Step 4: Hint 3 → “The oldest girl likes strawberry ice cream”"
      },
      {
        "t": "p",
        "text": "🔥 **YAHI PUZZLE KA HEART HAI**"
      },
      {
        "t": "p",
        "text": "Sentence ka matlab:\n 👉 **Sirf ek eldest daughter hai**"
      },
      {
        "t": "h",
        "text": "Case 1: (2, 6, 6)"
      },
      {
        "t": "p",
        "text": "❌ Do eldest (6 & 6)\n ❌ “The oldest girl” meaningful nahi"
      },
      {
        "t": "h",
        "text": "Case 2: (3, 3, 8)"
      },
      {
        "t": "p",
        "text": "✅ Ek clear eldest = 8\n ✅ Sentence perfectly valid"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "🎯 **Daughters’ ages = 3, 3, and 8**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview Me EXACT Kaise Bolna Hai (IMPORTANT 🔥)"
      },
      {
        "t": "p",
        "text": "“First, I listed all age triplets whose product is 72.\n When the sum was revealed to be the house number, the fact that Shyam was still unsure tells me that the sum must be ambiguous.\n Only two triplets give the same sum of 14.\n The final hint specifies a single oldest daughter, which eliminates the (2,6,6) case.\n Hence, the ages are 3, 3, and 8.”"
      },
      {
        "t": "p",
        "text": "💥 **Interviewer impressed.**"
      },
      {
        "t": "h",
        "text": "🌍 Real-World Analogy (Bonus Points 💯)"
      },
      {
        "t": "p",
        "text": "“This puzzle is similar to debugging a system where multiple configurations produce the same output.\n Only an additional constraint — like a unique leader or maximum value — resolves the ambiguity.”"
      },
      {
        "t": "h",
        "text": "❓ Follow-up Questions Interviewer Puchega"
      },
      {
        "t": "h",
        "text": "Q1️⃣ Why second hint was still insufficient?"
      },
      {
        "t": "p",
        "text": "👉 Because **same sum** ke **multiple solutions** exist karte the."
      },
      {
        "t": "h",
        "text": "Q2️⃣ Why third hint was necessary?"
      },
      {
        "t": "p",
        "text": "👉 To ensure **uniqueness (single maximum)**."
      },
      {
        "t": "h",
        "text": "Q3️⃣ What concept is this?"
      },
      {
        "t": "p",
        "text": "👉 **Constraint satisfaction & elimination**"
      },
      {
        "t": "h",
        "text": "Q4️⃣ What if youngest was mentioned instead?"
      },
      {
        "t": "p",
        "text": "👉 Still ambiguous → dono cases me unique youngest nahi"
      },
      {
        "t": "h",
        "text": "🚫 Common Mistakes Candidates Karte Hain"
      },
      {
        "t": "p",
        "text": "❌ House number guess karna\n ❌ Third hint ko ignore karna\n ❌ Direct answer bol dena without reasoning"
      },
      {
        "t": "p",
        "text": "MA2"
      }
    ]
  },
  {
    "id": "p52",
    "title": "Total distance travelled by bee",
    "category": "Bridge, Time & Speed",
    "problem": [
      {
        "t": "h",
        "text": "Given:"
      },
      {
        "t": "li",
        "text": "Train A speed = **50 km/h**"
      },
      {
        "t": "li",
        "text": "Train B speed = **70 km/h**"
      },
      {
        "t": "li",
        "text": "Distance between trains = **100 km**"
      },
      {
        "t": "li",
        "text": "Bee speed = **80 km/h**"
      },
      {
        "t": "li",
        "text": "Bee continuously dono trains ke beech udti rehti hai"
      },
      {
        "t": "li",
        "text": "Question: **Bee ne total kitna distance travel kiya?**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🧠 Step 1: Interviewer ka trap samjho"
      },
      {
        "t": "p",
        "text": "❌ Most candidates yeh galti karte hain:"
      },
      {
        "t": "li",
        "text": "Bee ke **har back-and-forth trip** calculate karna shuru kar dete hain"
      },
      {
        "t": "li",
        "text": "Infinite series me phas jaate hain"
      },
      {
        "t": "li",
        "text": "Panic 😵‍💫"
      },
      {
        "t": "p",
        "text": "✅ Interviewer actually check karta hai:"
      },
      {
        "t": "li",
        "text": "Kya tum **problem ko simplify** kar sakte ho?"
      },
      {
        "t": "li",
        "text": "Kya tum **irrelevant complexity ignore** kar sakte ho?"
      },
      {
        "t": "h",
        "text": "👀 Step 2: Visualization (THIS CHANGES EVERYTHING)"
      },
      {
        "t": "img",
        "src": "image145.png"
      },
      {
        "t": "img",
        "src": "image11.png"
      },
      {
        "t": "img",
        "src": "image127.jpg"
      },
      {
        "t": "p",
        "text": "Socho:"
      },
      {
        "t": "li",
        "text": "Train A ➡️"
      },
      {
        "t": "li",
        "text": "⬅️ Train B"
      },
      {
        "t": "li",
        "text": "Bee bas **ud rahi hai jab tak trains takra nahi jaati**"
      },
      {
        "t": "p",
        "text": "🔥 **IMPORTANT REALIZATION**"
      },
      {
        "t": "p",
        "text": "Bee ka path zig-zag hai,\n **par time finite hai**"
      },
      {
        "t": "p",
        "text": "Bee sirf **utni hi der udegi**\n jitni der trains ko **takrane me lagegi**"
      },
      {
        "t": "h",
        "text": "⏱️ Step 3: Sabse important sawal (Golden Question)"
      },
      {
        "t": "p",
        "text": "👉 **Trains ko collide hone me kitna time lagega?**"
      },
      {
        "t": "p",
        "text": "Bee ka movement **matter hi nahi karta** jab tak collision time pata ho."
      },
      {
        "t": "h",
        "text": "🚆 Step 4: Trains collision time nikaalo (SUPER SIMPLE)"
      },
      {
        "t": "h",
        "text": "Relative speed concept:"
      },
      {
        "t": "li",
        "text": "Train A + Train B speed\n = 50 + 70\n = **120 km/h**"
      },
      {
        "t": "h",
        "text": "Time to collide:"
      },
      {
        "t": "p",
        "text": "Time=DistanceRelative Speed=100120=56 hour\\text{Time} = \\frac{Distance}{Relative\\ Speed} = \\frac{100}{120} = \\frac{5}{6}\\ \\text{hour}Time=Relative SpeedDistance​=120100​=65​ hour"
      },
      {
        "t": "p",
        "text": "👉 **= 50 minutes**"
      },
      {
        "t": "h",
        "text": "🐝 Step 5: Bee ka total distance (Boom 💥)"
      },
      {
        "t": "p",
        "text": "Bee:"
      },
      {
        "t": "li",
        "text": "Speed = **80 km/h**"
      },
      {
        "t": "li",
        "text": "Time = **5/6 hour**"
      },
      {
        "t": "p",
        "text": "Distance=Speed×Time=80×56=66.67 kmDistance = Speed \\times Time = 80 \\times \\frac{5}{6} = 66.67\\ kmDistance=Speed×Time=80×65​=66.67 km"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "🎯 **Total distance travelled by the bee = 66.67 km (approx)**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview Me EXACT Kaise Bolna Hai (Very Important 🔥)"
      },
      {
        "t": "p",
        "text": "“Instead of tracking the bee’s infinite back-and-forth motion,\n I focused on how long the trains take to collide.\n Since the bee flies continuously during this time,\n the total distance depends only on the collision time, not on the number of trips.”"
      },
      {
        "t": "p",
        "text": "💥 Interviewer: “Good approach.”"
      },
      {
        "t": "h",
        "text": "🌍 Real-World Analogy (Extra Impression Points 😎)"
      },
      {
        "t": "p",
        "text": "“This is similar to measuring how much data a server sends while two systems are synchronizing.\n The number of packets doesn’t matter — only the total synchronization time does.”"
      },
      {
        "t": "h",
        "text": "❓ Follow-Up Questions Interviewer Puchega"
      },
      {
        "t": "h",
        "text": "Q1️⃣ Bee speed agar infinite hoti?"
      },
      {
        "t": "p",
        "text": "👉 Still distance = **bee speed × collision time**\n (Number of trips irrelevant)"
      },
      {
        "t": "h",
        "text": "Q2️⃣ Bee speed slow hoti (say 30 km/h)?"
      },
      {
        "t": "p",
        "text": "👉 Same logic — just multiply with time"
      },
      {
        "t": "h",
        "text": "Q3️⃣ Why infinite trips don’t mean infinite distance?"
      },
      {
        "t": "p",
        "text": "👉 Because **time is finite**"
      },
      {
        "t": "h",
        "text": "Q4️⃣ What core concept is tested?"
      },
      {
        "t": "p",
        "text": "👉 **Relative velocity + problem simplification**"
      },
      {
        "t": "h",
        "text": "🚫 Common Mistakes Candidates Karte Hain"
      },
      {
        "t": "p",
        "text": "❌ Har trip ka distance calculate karna\n ❌ Infinite series banana\n ❌ Overthinking motion\n ❌ Bee ke direction par focus karna"
      },
      {
        "t": "h",
        "text": "🧠 Interviewer Mindset (Secret)"
      },
      {
        "t": "p",
        "text": "Interviewer yeh dekh raha hota hai:\n ✔️ Can you ignore noise?\n ✔️ Can you find invariant (time)?\n ✔️ Can you simplify complex systems?"
      },
      {
        "t": "li",
        "text": "Let the first train A move at **u** km/h."
      },
      {
        "t": "li",
        "text": "Let the second train B move at **v** km/h."
      },
      {
        "t": "li",
        "text": "Let the distance between two trains be **d** km"
      },
      {
        "t": "li",
        "text": "Let the speed of bee be **b** km/h"
      },
      {
        "t": "p",
        "text": "Therefore, the time taken by trains to collide = **d/(u+v)**\nNow putting all the known values into the above equation, we get,"
      },
      {
        "t": "p",
        "text": "u = 50 km/hr"
      },
      {
        "t": "p",
        "text": "v = 70 km/hr"
      },
      {
        "t": "p",
        "text": "d = 100 km"
      },
      {
        "t": "p",
        "text": "b = 80 km/hr"
      },
      {
        "t": "p",
        "text": "Therefore, the total distance travelled by bee"
      },
      {
        "t": "p",
        "text": "= b*d/(u+v)"
      },
      {
        "t": "p",
        "text": "= 80 * 100/(50+70)"
      },
      {
        "t": "p",
        "text": "= **66.67 km (approx)**"
      },
      {
        "t": "p",
        "text": "**Another Solution:**"
      },
      {
        "t": "p",
        "text": "Another easier approach to solve this can be by using the concept of relative velocity:"
      },
      {
        "t": "img",
        "src": "image181.png"
      },
      {
        "t": "p",
        "text": "With respect to Train A, train B's velocity is (70+50) = 120 km/hr. Thus, the time taken by Train B to collide with Train A will be"
      },
      {
        "t": "p",
        "text": "(100 km) / (120 km/hr)  = 5/6 hr = 50 min"
      },
      {
        "t": "p",
        "text": "Now, since the velocity of the bee is 80 km/hr, the distance travelled by the bee in this time interval will be"
      },
      {
        "t": "p",
        "text": "80 km/hr * 5/6 hr = 66.67 km (approx)"
      },
      {
        "t": "p",
        "text": "MA3"
      }
    ]
  },
  {
    "id": "p53",
    "title": "Ways to Reach Bottom Right in 6x6 Grid",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "p",
        "text": "You begin in the top left corner of a 6x6 grid, and your objective is to move to the bottom right corner. There are just two directions you can move: right or down. Both diagonal and backward movements are prohibited."
      },
      {
        "t": "p",
        "text": "How many different ways are there to get from the start to the finish?"
      },
      {
        "t": "img",
        "src": "image131.png"
      },
      {
        "t": "p",
        "text": "Puzzle"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution: **"
      },
      {
        "t": "p",
        "text": "We can solve this problem using two approaches:"
      },
      {
        "t": "p",
        "text": "**Approach 1 - Using Combinatorics:**"
      },
      {
        "t": "img",
        "src": "image126.png"
      },
      {
        "t": "p",
        "text": "Three conditions of reaching at the last end"
      },
      {
        "t": "li",
        "text": "The number of paths from the starting point (left) to the ending point (right) does not depend on the specific path taken."
      },
      {
        "t": "li",
        "text": "It depends only on the number of rows and columns used to reach the end."
      },
      {
        "t": "li",
        "text": "In such problems, you have a fixed number of steps (rows and columns) to take, regardless of order."
      },
      {
        "t": "li",
        "text": "This situation can be solved using mathematics — specifically, combinatorics."
      },
      {
        "t": "li",
        "text": "Combinatorics helps count the number of possible ways to arrange or choose these steps."
      },
      {
        "t": "img",
        "src": "image18.png"
      },
      {
        "t": "p",
        "text": "**Why combinatorics?**"
      },
      {
        "t": "li",
        "text": "In this case of a 6×6 grid, all the paths must consist of a total of 10 moves, 5 down and 5 right, our job is to select the 5 right moves from the collection of 10 moves."
      },
      {
        "t": "li",
        "text": "we must employ a certain number of rows and columns (5 of the total 10 blocks) to travel from the left beginning to the right end."
      },
      {
        "t": "li",
        "text": "if we choose 5 rows box then the answer is **10c5=252** and the same if we choose 5 column answer is **10c5=252.**"
      },
      {
        "t": "li",
        "text": "Hence, combinatorics helps count the total possible paths without listing each one."
      },
      {
        "t": "p",
        "text": "**Approach 2 - Using Pascal Triangle:**"
      },
      {
        "t": "img",
        "src": "image50.png"
      },
      {
        "t": "p",
        "text": "If we know the number of ways to reach the left box and an upper box of a given box, then, the number of ways to reach at the given box, we can easily visualize, it will be the sum of both because we can either reach here from the left box paths or upper box paths."
      },
      {
        "t": "p",
        "text": "As shown in the figure here, we can reach the left box in A ways and reach the upper blocks in B ways, so the total answer to reach will be A+B."
      },
      {
        "t": "img",
        "src": "image28.png"
      },
      {
        "t": "li",
        "text": "Here, for the first row, they can only be taken from the left move, not from the upward move."
      },
      {
        "t": "li",
        "text": "So the answer is 1 for the first row and similarly, for the first column they can be only taken from the upward move, not from the left move."
      },
      {
        "t": "li",
        "text": "The answer here is also 1, and for the remaining grid, it is calculated using the **Pascal Approach** which is explained before."
      },
      {
        "t": "li",
        "text": "To reach the right endpoint, we have taken the sum of (126+126), which are moves at its top and left"
      },
      {
        "t": "p",
        "text": "MA4"
      }
    ]
  },
  {
    "id": "p54",
    "title": "Maximize probability of White Ball",
    "category": "Probability & Expectation",
    "problem": [
      {
        "t": "h",
        "text": "Given"
      },
      {
        "t": "li",
        "text": "2 bowls (initially empty)"
      },
      {
        "t": "li",
        "text": "100 balls total"
      },
      {
        "t": "li",
        "text": "50 **white**"
      },
      {
        "t": "li",
        "text": "50 **black**"
      },
      {
        "t": "li",
        "text": "Steps:"
      },
      {
        "t": "li",
        "text": "Distribute balls in any way"
      },
      {
        "t": "li",
        "text": "One bowl chosen **randomly**"
      },
      {
        "t": "li",
        "text": "One ball drawn **randomly**"
      },
      {
        "t": "li",
        "text": "🎯 Goal: **White ball ki probability maximize karni hai**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🧠 Step 1: Interviewer kya test kar raha hai?"
      },
      {
        "t": "li",
        "text": "Can you **think asymmetrically**?"
      },
      {
        "t": "li",
        "text": "Can you **create imbalance to gain advantage**?"
      },
      {
        "t": "li",
        "text": "Can you **separate certainty from randomness**?"
      },
      {
        "t": "p",
        "text": "❌ Equal distribution = average result\n ✅ Smart skewing = optimal result"
      },
      {
        "t": "h",
        "text": "👀 Step 2: Visualization (Very Important)"
      },
      {
        "t": "img",
        "src": "image173.png"
      },
      {
        "t": "img",
        "src": "image115.png"
      },
      {
        "t": "img",
        "src": "image231.jpg"
      },
      {
        "t": "p",
        "text": "Socho:"
      },
      {
        "t": "li",
        "text": "Bowl select hona **random** hai (50–50 chance)"
      },
      {
        "t": "li",
        "text": "Par bowl ke andar kya hai — **tum control kar sakte ho**"
      },
      {
        "t": "p",
        "text": "🔥 Trick:"
      },
      {
        "t": "p",
        "text": "**Ek bowl ko “guaranteed win” bana do**"
      },
      {
        "t": "h",
        "text": "❌ Step 3: Naïve approach (Equal distribution)"
      },
      {
        "t": "li",
        "text": "Bowl 1: 25 white + 25 black"
      },
      {
        "t": "li",
        "text": "Bowl 2: 25 white + 25 black"
      },
      {
        "t": "p",
        "text": "Probability:"
      },
      {
        "t": "p",
        "text": "12×2550+12×2550=0.5\\frac{1}{2}\\times\\frac{25}{50} + \\frac{1}{2}\\times\\frac{25}{50} = 0.521​×5025​+21​×5025​=0.5"
      },
      {
        "t": "p",
        "text": "👉 **Bas coin-flip jaisa** — boring ❌"
      },
      {
        "t": "h",
        "text": "💡 Step 4: Golden Strategy (INTERVIEW WINNER)"
      },
      {
        "t": "h",
        "text": "Strategy:"
      },
      {
        "t": "li",
        "text": "**Bowl 1**: 1 white ball"
      },
      {
        "t": "li",
        "text": "**Bowl 2**: 49 white + 50 black"
      },
      {
        "t": "h",
        "text": "🧮 Step 5: Probability Calculation"
      },
      {
        "t": "h",
        "text": "Bowl 1:"
      },
      {
        "t": "li",
        "text": "Selected with probability = 1/2"
      },
      {
        "t": "li",
        "text": "White ball probability = 1"
      },
      {
        "t": "p",
        "text": "Contribution:"
      },
      {
        "t": "p",
        "text": "12×1=0.5\\frac{1}{2} \\times 1 = 0.521​×1=0.5"
      },
      {
        "t": "h",
        "text": "Bowl 2:"
      },
      {
        "t": "li",
        "text": "Selected with probability = 1/2"
      },
      {
        "t": "li",
        "text": "White probability = 49 / 99"
      },
      {
        "t": "p",
        "text": "Contribution:"
      },
      {
        "t": "p",
        "text": "12×4999≈0.247\\frac{1}{2} \\times \\frac{49}{99} \\approx 0.24721​×9949​≈0.247"
      },
      {
        "t": "h",
        "text": "✅ Final Probability"
      },
      {
        "t": "p",
        "text": "0.5+0.247=0.747≈0.750.5 + 0.247 = 0.747 \\approx 0.750.5+0.247=0.747≈0.75"
      },
      {
        "t": "p",
        "text": "🎯 **Maximum probability ≈ 75%**"
      },
      {
        "t": "h",
        "text": "🏆 Final Answer (Short & Sweet)"
      },
      {
        "t": "p",
        "text": "**Put one white ball in one bowl and all remaining balls in the other bowl.**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview Me EXACT Kaise Bolna Hai 🔥"
      },
      {
        "t": "p",
        "text": "“Since the bowl selection is random, I tried to maximize certainty in at least one outcome.\n By placing a single white ball in one bowl, I guarantee success if that bowl is chosen.\n The remaining balls go into the second bowl, which still has a reasonably high white probability.\n This asymmetric distribution maximizes the overall probability.”"
      },
      {
        "t": "p",
        "text": "💥 Interviewer: “Nice optimization.”"
      },
      {
        "t": "h",
        "text": "🌍 Real-World Analogy (Extra Points 😎)"
      },
      {
        "t": "p",
        "text": "“This is similar to portfolio diversification —\n I create one risk-free investment and one high-return investment to maximize expected success.”"
      },
      {
        "t": "h",
        "text": "❓ Follow-Up Questions Interviewer Puchega"
      },
      {
        "t": "h",
        "text": "Q1️⃣ Why not put more white balls in Bowl 1?"
      },
      {
        "t": "p",
        "text": "👉 Because bowl selection is random — adding blacks would reduce certainty"
      },
      {
        "t": "h",
        "text": "Q2️⃣ What if 3 bowls?"
      },
      {
        "t": "p",
        "text": "👉 Still isolate one bowl with minimal balls (white only)"
      },
      {
        "t": "h",
        "text": "Q3️⃣ What concept is tested?"
      },
      {
        "t": "p",
        "text": "👉 **Expected value + optimization under randomness**"
      },
      {
        "t": "h",
        "text": "Q4️⃣ What if bowl selection wasn’t random?"
      },
      {
        "t": "p",
        "text": "👉 Strategy would change completely"
      },
      {
        "t": "h",
        "text": "🚫 Common Mistakes Candidates Karte Hain"
      },
      {
        "t": "p",
        "text": "❌ Equal distribution\n ❌ “Balance is always fair” mindset\n ❌ Ignoring bowl selection probability"
      },
      {
        "t": "h",
        "text": "🧠 One-Line Killer Insight (Yaad Rakh)"
      },
      {
        "t": "p",
        "text": "**“Guarantee one success, manage the rest probabilistically.”**"
      },
      {
        "t": "p",
        "text": "First, assume you divide the balls **equally** between the two jars:"
      },
      {
        "t": "li",
        "text": "Each jar gets **25 white** and **25 black** balls."
      },
      {
        "t": "p",
        "text": "The probability of selecting a white ball in this case is:"
      },
      {
        "t": "p",
        "text": "(1/2 × 25/50) + (1/2 × 25/50) =1/2"
      },
      {
        "t": "p",
        "text": "To maximise the probability of selecting a white ball, we need to increase the chance in at least one jar."
      },
      {
        "t": "li",
        "text": "Put **1 white ball** in **Jar 1**"
      },
      {
        "t": "li",
        "text": "Put the remaining **49 white balls and 50 black balls** in **Jar 2**"
      },
      {
        "t": "p",
        "text": "Now calculate the probability:"
      },
      {
        "t": "li",
        "text": "Probability of selecting** Jar 1 **= 1/2"
      },
      {
        "t": "li",
        "text": "Probability of white ball from **Jar 1** = 1 (since it has only one white ball)-Contribution from** Jar 1** = (1/2) × 1 = 0.5"
      },
      {
        "t": "li",
        "text": "Probability of selecting** Jar 2 **= 1/2"
      },
      {
        "t": "li",
        "text": "**Jar 2** has **49 white** out of** 99 balls** - Contribution from **Jar 2 **= (1/2) × (49/99) ≈ 0.247."
      },
      {
        "t": "li",
        "text": "**Total probability**:"
      },
      {
        "t": "p",
        "text": "1​/2 ​×1 +1​/2 ×49/99=1​/2+49/198​≈**0.747**"
      },
      {
        "t": "p",
        "text": "Therefore, the probability of drawing a white ball is approximately **three-fourths** or **0.75**."
      },
      {
        "t": "h",
        "text": "🧠 Step 0: Formula yaad rakh (VERY IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**Total Probability =**\n (Bowl choose hone ka chance × us bowl se white nikalne ka chance)\n **+**\n (dusre bowl ka bhi same)"
      },
      {
        "t": "p",
        "text": "Bas.\n Iske alawa kuch nahi hai."
      },
      {
        "t": "h",
        "text": "🥣 Case 1: Equal distribution (25W + 25B in both bowls)"
      },
      {
        "t": "h",
        "text": "Fact 1️⃣: Bowl ka selection"
      },
      {
        "t": "li",
        "text": "2 bowls hain"
      },
      {
        "t": "li",
        "text": "Randomly ek select hoga\n 👉 **Chance = 1/2**"
      },
      {
        "t": "h",
        "text": "Fact 2️⃣: Bowl ke andar white nikalne ka chance"
      },
      {
        "t": "li",
        "text": "Total balls = 50"
      },
      {
        "t": "li",
        "text": "White balls = 25"
      },
      {
        "t": "p",
        "text": "👉 Probability = **25/50**"
      },
      {
        "t": "h",
        "text": "🧮 Ab calculation ekdum bacche jaisi"
      },
      {
        "t": "h",
        "text": "Bowl 1 se white aane ka chance:"
      },
      {
        "t": "p",
        "text": "12×2550\\frac{1}{2} \\times \\frac{25}{50}21​×5025​"
      },
      {
        "t": "p",
        "text": "👉 Matlab:"
      },
      {
        "t": "li",
        "text": "50% chance bowl mile"
      },
      {
        "t": "li",
        "text": "usme se 50% chance white mile"
      },
      {
        "t": "p",
        "text": "👉 Result = **0.25**"
      },
      {
        "t": "h",
        "text": "Bowl 2 se white aane ka chance:"
      },
      {
        "t": "p",
        "text": "Same cheez:"
      },
      {
        "t": "p",
        "text": "12×2550=0.25\\frac{1}{2} \\times \\frac{25}{50} = 0.2521​×5025​=0.25"
      },
      {
        "t": "h",
        "text": "➕ Dono add karo (kyunki dono possible hain)"
      },
      {
        "t": "p",
        "text": "0.25+0.25=0.50.25 + 0.25 = 0.50.25+0.25=0.5"
      },
      {
        "t": "h",
        "text": "✅ FINAL MEANING (IMPORTANT 🔥)"
      },
      {
        "t": "p",
        "text": "Agar balls equally baante,\n toh white ball milne ka chance **sirf 50%** hai\n (coin toss jaisa)"
      },
      {
        "t": "h",
        "text": "🚨 Ab ek LINE me samjho (Exam / Interview ready)"
      },
      {
        "t": "p",
        "text": "“Since both bowls have the same composition, the probability of drawing a white ball remains 0.5.”"
      },
      {
        "t": "h",
        "text": "🤯 Ab jab smart strategy lagate hain (1 white in one bowl)"
      },
      {
        "t": "h",
        "text": "Bowl 1:"
      },
      {
        "t": "li",
        "text": "1 white only\n 👉 White milna = **100%**"
      },
      {
        "t": "p",
        "text": "12×1=0.5\\frac{1}{2} \\times 1 = 0.521​×1=0.5"
      },
      {
        "t": "h",
        "text": "Bowl 2:"
      },
      {
        "t": "li",
        "text": "49 white, 50 black → total 99"
      },
      {
        "t": "p",
        "text": "12×4999≈0.247\\frac{1}{2} \\times \\frac{49}{99} \\approx 0.24721​×9949​≈0.247"
      },
      {
        "t": "h",
        "text": "Total:"
      },
      {
        "t": "p",
        "text": "0.5+0.247=0.7470.5 + 0.247 = 0.7470.5+0.247=0.747"
      },
      {
        "t": "h",
        "text": "🧠 ONE GOLDEN LINE (Yaad rakh bas)"
      },
      {
        "t": "p",
        "text": "**Probability = Bowl choose hone ka chance × andar success ka chance**"
      },
      {
        "t": "p",
        "text": "MA8"
      }
    ]
  },
  {
    "id": "p55",
    "title": "Hourglasses Puzzle",
    "category": "Bridge, Time & Speed",
    "problem": [
      {
        "t": "h",
        "text": "Given:"
      },
      {
        "t": "li",
        "text": "Hourglass A = **4 minutes**"
      },
      {
        "t": "li",
        "text": "Hourglass B = **7 minutes**"
      },
      {
        "t": "li",
        "text": "Stopwatch ❌ (allowed nahi)"
      },
      {
        "t": "li",
        "text": "Goal = **exact 9 minutes**"
      },
      {
        "t": "h",
        "text": "🧠 Pehle ek important baat (CONFUSION BREAKER)"
      },
      {
        "t": "p",
        "text": "❌ Hourglass exact time nahi batata\n ✅ Hourglass **events** batata hai\n 👉 “Kab empty hua” = reference point"
      },
      {
        "t": "p",
        "text": "Is puzzle me hum **sand khatam hone ke moments** use karte hain."
      },
      {
        "t": "h",
        "text": "👀 Visualization (dimag me picture banao)"
      },
      {
        "t": "p",
        "text": "Socho:"
      },
      {
        "t": "li",
        "text": "Dono hourglass table par hain"
      },
      {
        "t": "li",
        "text": "Time sirf tab note karte ho jab koi empty hota hai"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "⏱️ STEP-BY-STEP (THIS IS THE HEART 🔥)"
      },
      {
        "t": "h",
        "text": "🔹 Step 1: Time = 0"
      },
      {
        "t": "p",
        "text": "👉 Dono hourglasses **ek saath start karo**"
      },
      {
        "t": "li",
        "text": "4-min: full"
      },
      {
        "t": "li",
        "text": "7-min: full"
      },
      {
        "t": "p",
        "text": "🕒 Clock chal rahi hai…"
      },
      {
        "t": "h",
        "text": "🔹 Step 2: Time = 4"
      },
      {
        "t": "p",
        "text": "👉 4-min hourglass **empty ho gaya**"
      },
      {
        "t": "p",
        "text": "✔️ Action: **4-min ko flip karo**"
      },
      {
        "t": "li",
        "text": "7-min me **abhi 3 minute bache hain**"
      },
      {
        "t": "p",
        "text": "🧠 Note:"
      },
      {
        "t": "p",
        "text": "Ab 4-min chal raha hai\n 7-min bhi chal raha hai"
      },
      {
        "t": "h",
        "text": "🔹 Step 3: Time = 7"
      },
      {
        "t": "p",
        "text": "👉 7-min hourglass **empty ho gaya**"
      },
      {
        "t": "li",
        "text": "4-min me **1 minute bacha hai**"
      },
      {
        "t": "p",
        "text": "✔️ Action: **7-min ko flip karo**"
      },
      {
        "t": "h",
        "text": "🔹 Step 4: Time = 8"
      },
      {
        "t": "p",
        "text": "👉 4-min hourglass **dobara empty**"
      },
      {
        "t": "p",
        "text": "Ab dhyaan de 👇"
      },
      {
        "t": "li",
        "text": "7-min me:"
      },
      {
        "t": "li",
        "text": "ek side me **1 minute ka sand**"
      },
      {
        "t": "li",
        "text": "doosri side me **6 minutes ka sand**"
      },
      {
        "t": "p",
        "text": "✔️ Action: **7-min ko flip karo**\n (taaki 1-minute wali side upar aa jaye)"
      },
      {
        "t": "h",
        "text": "🔹 Step 5: Time = 9"
      },
      {
        "t": "p",
        "text": "👉 7-min hourglass **1 minute baad empty**"
      },
      {
        "t": "p",
        "text": "🎉 **DONE!**\n ⏰ **Exactly 9 minutes measure ho gaye**"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER (ONE LINE)"
      },
      {
        "t": "p",
        "text": "By flipping the hourglasses at the right empty points, we isolate a **1-minute interval** after 8 minutes, completing **9 minutes total**."
      },
      {
        "t": "h",
        "text": "🗣️ Interview Me EXACT Kaise Bolna Hai 🔥"
      },
      {
        "t": "p",
        "text": "“I don’t track continuous time.\n I only use the moments when an hourglass empties as reference points.\n By synchronizing these events, I isolate the final one minute after eight minutes, giving me exactly nine minutes.”"
      },
      {
        "t": "p",
        "text": "💥 Interviewer: “Good control of state changes.”"
      },
      {
        "t": "h",
        "text": "🧠 CORE LOGIC (Yaad rakh bas)"
      },
      {
        "t": "p",
        "text": "❗ **Hourglass puzzles are not about time**\n ✅ **They are about state transitions**"
      },
      {
        "t": "h",
        "text": "❓ Follow-Up Questions Interviewer Puchega"
      },
      {
        "t": "h",
        "text": "Q1️⃣ Why flip at 8 minutes?"
      },
      {
        "t": "p",
        "text": "👉 To isolate **exactly 1 minute**"
      },
      {
        "t": "h",
        "text": "Q2️⃣ Can this be generalized?"
      },
      {
        "t": "p",
        "text": "👉 Yes — any time = combination of **differences** of hourglasses"
      },
      {
        "t": "h",
        "text": "Q3️⃣ What skill is tested?"
      },
      {
        "t": "p",
        "text": "👉 **Event-based reasoning**"
      },
      {
        "t": "h",
        "text": "🚫 Common Mistakes"
      },
      {
        "t": "p",
        "text": "❌ Time continuously count karna\n ❌ Panic when glasses overlap\n ❌ Flips randomly karna"
      },
      {
        "t": "p",
        "text": "MA10"
      }
    ]
  },
  {
    "id": "p56",
    "title": "The Boy Preference Ratio Riddle",
    "category": "Poison, Pills & Testing",
    "problem": [
      {
        "t": "p",
        "text": "In a country, every family continues to have children until they have a boy, after which they stop having more children. Assuming the probability of having a boy or a girl is equal (50%), what is the **expected ratio of boys to girls** in the overall population?"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution:**"
      },
      {
        "t": "p",
        "text": "**Assumptions:** Each child born has an equal probability of being a boy or a girl (i.e., 50%). The gender of each child is independent of the previous births. To solve the problem, we calculate the expected number of girls born before a boy appears in each family."
      },
      {
        "t": "p",
        "text": "Let **NG **be the expected no. of girls before a boy is born"
      },
      {
        "t": "p",
        "text": "Let p be the probability that a child is girl and (1-p)"
      },
      {
        "t": "p",
        "text": "be probability that a child is boy."
      },
      {
        "t": "p",
        "text": "NG can be written as sum of following infinite series."
      },
      {
        "t": "p",
        "text": "**NG **= 0*(1-p) + 1*p*(1-p) + 2*p*p*(1-p) + 3*p*p*p*(1-p) + 4*p*p*p*p*(1-p) +....."
      },
      {
        "t": "p",
        "text": "Putting p = 1/2 in above formula."
      },
      {
        "t": "p",
        "text": "**NG** = ( 1-1/2) .1/2(1-1/2)2 = 1/2. 1/2/ ( 1/2)2= 1/2. 1/2/ 1/4= 1/2.2= 1"
      },
      {
        "t": "p",
        "text": "**NG = 1**"
      },
      {
        "t": "p",
        "text": "So,"
      },
      {
        "t": "li",
        "text": "Expected number of boys per family = 1"
      },
      {
        "t": "li",
        "text": "Expected number of girls per family = 1"
      },
      {
        "t": "li",
        "text": "Therefore, in the whole country:"
      },
      {
        "t": "p",
        "text": "**⁛ Ratio of boys to girls=1/1​=1:1​**"
      },
      {
        "t": "h",
        "text": "👶 Puzzle: Boy Preference Ratio (SUPER SIMPLE)"
      },
      {
        "t": "h",
        "text": "Rule of the country:"
      },
      {
        "t": "li",
        "text": "Har family **bacche paida karti rahegi**"
      },
      {
        "t": "li",
        "text": "**Jab tak boy nahi hota**"
      },
      {
        "t": "li",
        "text": "**Jaise hi boy hua → STOP**"
      },
      {
        "t": "p",
        "text": "👉 Chance:"
      },
      {
        "t": "li",
        "text": "Boy = 50%"
      },
      {
        "t": "li",
        "text": "Girl = 50%"
      },
      {
        "t": "p",
        "text": "🎯 Question:\n **Poore country me boys : girls ka ratio kya hoga?**"
      },
      {
        "t": "h",
        "text": "🧠 Sabse pehle GALAT SOCH (jo 90% log karte hain)"
      },
      {
        "t": "p",
        "text": "❌ “Log boys chahte hain,\n toh boys zyada honge”"
      },
      {
        "t": "p",
        "text": "❌ “Girls kam hongi”"
      },
      {
        "t": "p",
        "text": "👉 **YEH GALAT HAI** ❌"
      },
      {
        "t": "h",
        "text": "👀 Visualization (dimag me picture banao)"
      },
      {
        "t": "img",
        "src": "image9.png"
      },
      {
        "t": "img",
        "src": "image193.jpg"
      },
      {
        "t": "img",
        "src": "image212.jpg"
      },
      {
        "t": "p",
        "text": "Socho 4 families 👇"
      },
      {
        "t": "h",
        "text": "🏠 Family-wise Story (YAHI KEY HAI 🔑)"
      },
      {
        "t": "h",
        "text": "👨‍👩‍👧‍👦 Family 1"
      },
      {
        "t": "li",
        "text": "First child → **Boy**"
      },
      {
        "t": "li",
        "text": "Stop\n 👉 Boys = 1, Girls = 0"
      },
      {
        "t": "h",
        "text": "👨‍👩‍👧‍👦 Family 2"
      },
      {
        "t": "li",
        "text": "First → Girl"
      },
      {
        "t": "li",
        "text": "Second → **Boy**"
      },
      {
        "t": "li",
        "text": "Stop\n 👉 Boys = 1, Girls = 1"
      },
      {
        "t": "h",
        "text": "👨‍👩‍👧‍👦 Family 3"
      },
      {
        "t": "li",
        "text": "Girl"
      },
      {
        "t": "li",
        "text": "Girl"
      },
      {
        "t": "li",
        "text": "**Boy**"
      },
      {
        "t": "li",
        "text": "Stop\n 👉 Boys = 1, Girls = 2"
      },
      {
        "t": "h",
        "text": "👨‍👩‍👧‍👦 Family 4"
      },
      {
        "t": "li",
        "text": "Girl"
      },
      {
        "t": "li",
        "text": "Girl"
      },
      {
        "t": "li",
        "text": "Girl"
      },
      {
        "t": "li",
        "text": "**Boy**"
      },
      {
        "t": "li",
        "text": "Stop\n 👉 Boys = 1, Girls = 3"
      },
      {
        "t": "h",
        "text": "🔢 Ab total gino (IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Families = 4"
      },
      {
        "t": "h",
        "text": "Boys:"
      },
      {
        "t": "li",
        "text": "Har family me **exactly 1 boy**\n 👉 Total boys = **4**"
      },
      {
        "t": "h",
        "text": "Girls:"
      },
      {
        "t": "li",
        "text": "Family 1 → 0"
      },
      {
        "t": "li",
        "text": "Family 2 → 1"
      },
      {
        "t": "li",
        "text": "Family 3 → 2"
      },
      {
        "t": "li",
        "text": "Family 4 → 3"
      },
      {
        "t": "p",
        "text": "👉 Total girls = **6**"
      },
      {
        "t": "h",
        "text": "🤯 Ab dikkat aati hai yahan…"
      },
      {
        "t": "p",
        "text": "Tum bologe:"
      },
      {
        "t": "p",
        "text": "“Girls zyada ho gayi 😵‍💫”"
      },
      {
        "t": "p",
        "text": "👉 BUT ruk ✋\n Hum sirf 4 families nahi dekh sakte."
      },
      {
        "t": "h",
        "text": "🧠 REAL LOGIC (YEH YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "👉 **Har family ka END hamesha boy pe hota hai**\n 👉 Isliye **boys = number of families**"
      },
      {
        "t": "p",
        "text": "👉 Girls:"
      },
      {
        "t": "li",
        "text": "Kabhi 0"
      },
      {
        "t": "li",
        "text": "Kabhi 1"
      },
      {
        "t": "li",
        "text": "Kabhi 5"
      },
      {
        "t": "li",
        "text": "Kabhi 10\n 👉 Average nikalta hai"
      },
      {
        "t": "h",
        "text": "🔑 GOLDEN TRUTH (NO MATH)"
      },
      {
        "t": "p",
        "text": "🎯 **Average me, ek family me**"
      },
      {
        "t": "li",
        "text": "1 boy hota hai"
      },
      {
        "t": "li",
        "text": "1 girl hoti hai"
      },
      {
        "t": "p",
        "text": "Isliye:"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "h",
        "text": "👦 Boys : 👧 Girls"
      },
      {
        "t": "p",
        "text": "👉 **1 : 1**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview me EXACT kaise bolna hai"
      },
      {
        "t": "p",
        "text": "“Although each family stops after having a boy,\n every family contributes exactly one boy.\n The number of girls varies, but on average equals one per family.\n Hence, the overall ratio remains 1:1.”"
      },
      {
        "t": "p",
        "text": "💥 Interviewer: “Good understanding of expectation.”"
      },
      {
        "t": "h",
        "text": "🌍 Real-World Analogy (bohot simple)"
      },
      {
        "t": "p",
        "text": "Har YouTube channel tab band hota hai\n jab **1 viral video aa jata hai**"
      },
      {
        "t": "p",
        "text": "Viral videos = number of channels\n Normal videos = average me same count"
      },
      {
        "t": "h",
        "text": "🚫 Common Mistake"
      },
      {
        "t": "p",
        "text": "❌ “Boy preference ⇒ more boys”\n ❌ Emotion se sochna\n ❌ Family-level logic ignore karna"
      },
      {
        "t": "p",
        "text": "MA11"
      }
    ]
  },
  {
    "id": "p57",
    "title": "Car Wheel Puzzle",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "h",
        "text": "Tumhare paas:"
      },
      {
        "t": "li",
        "text": "🚘 Car ke **4 tyres** (road par lagte hain)"
      },
      {
        "t": "li",
        "text": "🛞 **1 spare tyre**"
      },
      {
        "t": "li",
        "text": "Har tyre **20,000 km** tak chal sakta hai"
      },
      {
        "t": "li",
        "text": "Tum **kabhi bhi tyre swap** kar sakte ho"
      },
      {
        "t": "li",
        "text": "🎯 Goal: **Maximum distance** travel karni hai"
      },
      {
        "t": "h",
        "text": "🧠 Sabse pehle GALAT soch (jo sab karte hain)"
      },
      {
        "t": "p",
        "text": "❌ “Car ke 4 tyres × 20,000 = 80,000 km”\n ❌ “Spare ka kya fayda?”"
      },
      {
        "t": "p",
        "text": "👉 **Galat** ❌\n Kyunki ek time par **sirf 4 tyres hi chalte hain**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 CORE IDEA (YEH YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "🛞 **Spare tyre ka kaam hai baaki tyres ka load share karna**"
      },
      {
        "t": "p",
        "text": "Agar spare ko **smart tareeke se** use kare:"
      },
      {
        "t": "li",
        "text": "Sab tyres **barabar ghis jaate hain**"
      },
      {
        "t": "li",
        "text": "Koi tyre pehle khatam nahi hota"
      },
      {
        "t": "h",
        "text": "👀 Visualization (dimag me picture banao)"
      },
      {
        "t": "img",
        "src": "image37.png"
      },
      {
        "t": "img",
        "src": "image40.jpg"
      },
      {
        "t": "img",
        "src": "image200.jpg"
      },
      {
        "t": "p",
        "text": "Socho:"
      },
      {
        "t": "li",
        "text": "5 tyres = 5 log"
      },
      {
        "t": "li",
        "text": "4 log kaam kar rahe"
      },
      {
        "t": "li",
        "text": "1 rest me"
      },
      {
        "t": "li",
        "text": "Thodi-thodi der me **shift change**"
      },
      {
        "t": "h",
        "text": "🧠 SIMPLE STRATEGY (NO MATH)"
      },
      {
        "t": "p",
        "text": "👉 **Spare ko thoda-thoda chalao**\n 👉 **Har main tyre ko rest do**"
      },
      {
        "t": "h",
        "text": "Total tyre life:"
      },
      {
        "t": "li",
        "text": "5 tyres × 20,000 km\n = **100,000 km tyre-life**"
      },
      {
        "t": "p",
        "text": "Par road par ek time me:"
      },
      {
        "t": "li",
        "text": "4 tyres use hote hain"
      },
      {
        "t": "p",
        "text": "👉 Isliye:"
      },
      {
        "t": "p",
        "text": "100,000÷4=25,000 km100{,}000 \\div 4 = 25{,}000\\ km100,000÷4=25,000 km"
      },
      {
        "t": "p",
        "text": "🔥 **Bas yahi poora logic hai**"
      },
      {
        "t": "h",
        "text": "🧮 Ab step-by-step story (CONFUSION FREE)"
      },
      {
        "t": "p",
        "text": "Tyres ke naam:"
      },
      {
        "t": "li",
        "text": "A, B, C, D = car ke tyres"
      },
      {
        "t": "li",
        "text": "S = spare"
      },
      {
        "t": "h",
        "text": "🟢 0–5000 km"
      },
      {
        "t": "li",
        "text": "A, B, C, D chal rahe"
      },
      {
        "t": "li",
        "text": "S rest"
      },
      {
        "t": "p",
        "text": "👉 5000 km baad:"
      },
      {
        "t": "li",
        "text": "A ko hatao"
      },
      {
        "t": "li",
        "text": "**S lagao**"
      },
      {
        "t": "h",
        "text": "🟢 5000–10000 km"
      },
      {
        "t": "li",
        "text": "B, C, D, S chal rahe"
      },
      {
        "t": "li",
        "text": "A rest"
      },
      {
        "t": "p",
        "text": "👉 10000 km pe:"
      },
      {
        "t": "li",
        "text": "S hatao"
      },
      {
        "t": "li",
        "text": "A wapas"
      },
      {
        "t": "li",
        "text": "**B ko rest do**"
      },
      {
        "t": "h",
        "text": "🟢 10000–15000 km"
      },
      {
        "t": "li",
        "text": "A, C, D, S chal rahe"
      },
      {
        "t": "li",
        "text": "B rest"
      },
      {
        "t": "p",
        "text": "👉 15000 km pe:"
      },
      {
        "t": "li",
        "text": "C ko rest"
      },
      {
        "t": "li",
        "text": "S lagao"
      },
      {
        "t": "h",
        "text": "🟢 15000–20000 km"
      },
      {
        "t": "li",
        "text": "A, B, D, S chal rahe"
      },
      {
        "t": "li",
        "text": "C rest"
      },
      {
        "t": "p",
        "text": "👉 20000 km pe:"
      },
      {
        "t": "li",
        "text": "D ko rest"
      },
      {
        "t": "li",
        "text": "S lagao"
      },
      {
        "t": "h",
        "text": "🟢 20000–25000 km"
      },
      {
        "t": "li",
        "text": "A, B, C, S chal rahe"
      },
      {
        "t": "p",
        "text": "🎉 **25,000 km pe sab tyres khatam**"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "h",
        "text": "🚗 Maximum distance = 25,000 km"
      },
      {
        "t": "h",
        "text": "🗣️ Interview me EXACT kaise bolna hai (VERY IMPORTANT)"
      },
      {
        "t": "p",
        "text": "“Since the spare tyre can also be used,\n I distribute the wear evenly across all five tyres.\n The total tyre life is 100,000 km,\n and since four tyres are used at a time,\n the maximum distance is 25,000 km.”"
      },
      {
        "t": "p",
        "text": "💥 Interviewer: “Good resource optimization.”"
      },
      {
        "t": "h",
        "text": "🌍 Real-World Analogy (samajhne ke liye)"
      },
      {
        "t": "p",
        "text": "5 workers hain\n 4 kaam karte hain\n 1 rest karta hai"
      },
      {
        "t": "p",
        "text": "Shift rotate karte raho\n Sab equally thak jaate hain"
      },
      {
        "t": "h",
        "text": "🚫 Common Mistakes"
      },
      {
        "t": "p",
        "text": "❌ Spare ko use hi nahi karna\n ❌ Ek tyre pe zyada load\n ❌ Total tyre-life ignore karna"
      },
      {
        "t": "h",
        "text": "🧠 ONE LINE YAAD RAKH"
      },
      {
        "t": "p",
        "text": "**“Spare tyre bhi resource hai — usko use karo.”**"
      },
      {
        "t": "p",
        "text": "MA12"
      }
    ]
  },
  {
    "id": "p58",
    "title": "Maximum Chocolates",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "h",
        "text": "Tumhare paas:"
      },
      {
        "t": "li",
        "text": "₹15"
      },
      {
        "t": "li",
        "text": "1 chocolate = ₹1"
      },
      {
        "t": "li",
        "text": "🎁 Offer: **3 wrappers = 1 chocolate**"
      },
      {
        "t": "p",
        "text": "🎯 Question: **Maximum chocolates kitni kha sakte ho?**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 GOLDEN RULE (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "❗ **Chocolate khane ke baad wrapper milta hi milta hai**\n ❗ Wrapper = future chocolate"
      },
      {
        "t": "h",
        "text": "👀 Visualization (dimag me picture banao)"
      },
      {
        "t": "img",
        "src": "image153.png"
      },
      {
        "t": "img",
        "src": "image174.png"
      },
      {
        "t": "img",
        "src": "image16.jpg"
      },
      {
        "t": "h",
        "text": "🧠 STEP–BY–STEP (EK BHI STEP SKIP NAHI)"
      },
      {
        "t": "h",
        "text": "🟢 STEP 1: Paiso se chocolates lo"
      },
      {
        "t": "li",
        "text": "₹15 = **15 chocolates**"
      },
      {
        "t": "li",
        "text": "Kha li\n 👉 **15 wrappers**"
      },
      {
        "t": "p",
        "text": "📝 Total chocolates so far = **15**"
      },
      {
        "t": "h",
        "text": "🟢 STEP 2: Wrappers exchange (FIRST ROUND)"
      },
      {
        "t": "li",
        "text": "3 wrappers = 1 chocolate"
      },
      {
        "t": "li",
        "text": "15 wrappers ÷ 3 = **5 chocolates**"
      },
      {
        "t": "p",
        "text": "👉 Kha li:"
      },
      {
        "t": "li",
        "text": "+5 chocolates"
      },
      {
        "t": "li",
        "text": "+5 naye wrappers"
      },
      {
        "t": "p",
        "text": "📝 Wrappers bache = **5**\n 📝 Total chocolates = **15 + 5 = 20**"
      },
      {
        "t": "h",
        "text": "🟢 STEP 3: Wrappers exchange (SECOND ROUND)"
      },
      {
        "t": "li",
        "text": "Ab wrappers = 5"
      },
      {
        "t": "li",
        "text": "3 wrappers se = **1 chocolate**"
      },
      {
        "t": "p",
        "text": "👉 Kha li:"
      },
      {
        "t": "li",
        "text": "+1 chocolate"
      },
      {
        "t": "li",
        "text": "+1 wrapper"
      },
      {
        "t": "p",
        "text": "Wrappers bache:"
      },
      {
        "t": "li",
        "text": "5 − 3 = 2"
      },
      {
        "t": "li",
        "text": "+1 (naya) = **3 wrappers**"
      },
      {
        "t": "p",
        "text": "📝 Total chocolates = **21**"
      },
      {
        "t": "h",
        "text": "🟢 STEP 4: Wrappers exchange (LAST ROUND)"
      },
      {
        "t": "li",
        "text": "3 wrappers = **1 chocolate**"
      },
      {
        "t": "p",
        "text": "👉 Kha li:"
      },
      {
        "t": "li",
        "text": "+1 chocolate"
      },
      {
        "t": "li",
        "text": "+1 wrapper"
      },
      {
        "t": "p",
        "text": "Wrappers:"
      },
      {
        "t": "li",
        "text": "3 − 3 = 0"
      },
      {
        "t": "li",
        "text": "+1 = **1 wrapper**"
      },
      {
        "t": "p",
        "text": "❌ Ab 3 nahi bane → STOP"
      },
      {
        "t": "p",
        "text": "📝 Total chocolates = **22**"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "🎯 **Maximum chocolates = 22**"
      },
      {
        "t": "h",
        "text": "🧠 ONE LINE ME SAMAJH LO (VERY IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**Jab tak 3 wrappers bante rahe, chocolate milti rahegi.**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview / Exam me EXACT kaise bolna hai"
      },
      {
        "t": "p",
        "text": "“I treat wrappers as a secondary currency.\n I keep exchanging them until fewer than three remain.\n This process gives a total of 22 chocolates.”"
      },
      {
        "t": "h",
        "text": "🚫 Common Galti (jo log karte hain)"
      },
      {
        "t": "p",
        "text": "❌ Wrapper ko count nahi karte\n ❌ Ek round ke baad ruk jaate hain\n ❌ Naye chocolate ka wrapper add nahi karte"
      },
      {
        "t": "h",
        "text": "🧠 TRICK YAAD RAKH"
      },
      {
        "t": "p",
        "text": "**Har chocolate = +1 wrapper\n Wrapper kabhi waste nahi hota**"
      },
      {
        "t": "p",
        "text": "MA13"
      }
    ]
  },
  {
    "id": "p59",
    "title": "Splitting a Cake with a Missing Piece in two equal portion",
    "category": "Shapes & Matchsticks",
    "problem": [
      {
        "t": "p",
        "text": "Three friends ordered a rectangular cake. One of them was in a hurry, so he cut a rectangular piece from the cake. The piece could be of any arbitrary size(less than the size of the cake) and rotation."
      },
      {
        "t": "p",
        "text": "Now the remaining two friends want to divide the remaining cake into two equal portions with a single straight cut."
      },
      {
        "t": "p",
        "text": "**Note:**"
      },
      {
        "t": "li",
        "text": "The single straight cut could pass through the cut-out portion."
      },
      {
        "t": "li",
        "text": "They both need an equal amount of cream and toppings. So they can not cut along the height of the cake."
      },
      {
        "t": "p",
        "text": "**Observation:**"
      },
      {
        "t": "img",
        "src": "image233.png"
      },
      {
        "t": "li",
        "text": "All lines in the above diagram divide the rectangle into two equal halves."
      },
      {
        "t": "li",
        "text": "The observation is that,"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution: **"
      },
      {
        "t": "li",
        "text": "By extending our observation and creating a line such that passes through both the center of the cake as well as the center of the missing piece."
      },
      {
        "t": "li",
        "text": "Such a line would divide the cake into two halves."
      },
      {
        "t": "p",
        "text": "MA14"
      },
      {
        "t": "h",
        "text": "Puzzle 33 | ( Rs 500 Note Puzzle )"
      },
      {
        "t": "p",
        "text": "A Lady (L) bought an item of Rs 100 from the Shopkeeper (C). She paid him through a 500 Rs Note. Realizing that he did not have change, the shopkeeper C got change for that note from another shopkeeper (S) and paid Rs 400 to the Lady. After a few days, S realized that the note is fake, And this railed at C and took 500 Rs back from him. So in this whole process how much money did C lose in the end?           Answer: 500 Explanation: The total loss for shopkeeper = 500 ( given back to the person who had provided the change ) Consider a transaction box, the lady came with a counterfeit 500 Rs note which can be considered of 0 value. Now the lady took the item (cost of the item 100 Rs ) and 400 Rs (the change given by shopkeeper(C) to the lady) from the transaction box, total of 500 Rs. Now the equivalent amount should be lost by someone, thus shopkeeper(C) lost 500 Rs. Another shopkeeper(S) gave 500 Rs and took back the same amount hence no loss for him."
      },
      {
        "t": "p",
        "text": "Bhai 😄 **yeh Rs 500 note puzzle sabko confuse karta hai**, tu akela nahi hai.\n Main ab isko **ledger / pocket logic**, **no maths**, **no English heavy**, **1–1 step** me samjha raha hoon."
      },
      {
        "t": "p",
        "text": "Bas **yeh rule yaad rakh**:\n 👉 “Fake note = zero value”"
      },
      {
        "t": "h",
        "text": "💵 Rs 500 Note Puzzle (ULTRA SIMPLE VERSION)"
      },
      {
        "t": "h",
        "text": "Characters:"
      },
      {
        "t": "li",
        "text": "👩 Lady (L)"
      },
      {
        "t": "li",
        "text": "🧑 Shopkeeper (C)"
      },
      {
        "t": "li",
        "text": "🧑‍🦱 Another shopkeeper (S)"
      },
      {
        "t": "h",
        "text": "Situation:"
      },
      {
        "t": "li",
        "text": "Item price = **₹100**"
      },
      {
        "t": "li",
        "text": "Lady gives **fake ₹500 note**"
      },
      {
        "t": "h",
        "text": "🔴 STEP 1: Lady kya leke aayi?"
      },
      {
        "t": "p",
        "text": "👉 Lady **fake ₹500** leke aayi\n ⚠️ Fake note = **₹0 value**"
      },
      {
        "t": "p",
        "text": "So effectively:"
      },
      {
        "t": "li",
        "text": "Lady ne **kuch bhi real paisa nahi diya**"
      },
      {
        "t": "h",
        "text": "🟢 STEP 2: Shopkeeper (C) kya karta hai?"
      },
      {
        "t": "li",
        "text": "C ke paas change nahi"
      },
      {
        "t": "li",
        "text": "Woh **Shopkeeper S se change** le aata hai"
      },
      {
        "t": "p",
        "text": "👉 S → C ko **real ₹500** deta hai"
      },
      {
        "t": "h",
        "text": "🟢 STEP 3: C Lady ko kya deta hai?"
      },
      {
        "t": "li",
        "text": "Item worth **₹100**"
      },
      {
        "t": "li",
        "text": "Change **₹400 cash**"
      },
      {
        "t": "p",
        "text": "👉 Lady leke chali gayi:"
      },
      {
        "t": "li",
        "text": "₹100 ka item"
      },
      {
        "t": "li",
        "text": "₹400 cash"
      },
      {
        "t": "p",
        "text": "🎯 Total gain for Lady = **₹500**"
      },
      {
        "t": "h",
        "text": "🟢 STEP 4: Problem start hoti hai 😬"
      },
      {
        "t": "p",
        "text": "Kuch din baad:"
      },
      {
        "t": "li",
        "text": "S bolta hai: “Bhai note fake hai”"
      },
      {
        "t": "li",
        "text": "C ko **₹500 real cash** wapas dena padta hai"
      },
      {
        "t": "p",
        "text": "👉 C → S ko **₹500** deta hai"
      },
      {
        "t": "h",
        "text": "🧠 Ab asli game samjho (YAHI KEY HAI 🔑)"
      },
      {
        "t": "h",
        "text": "❌ S ka loss?"
      },
      {
        "t": "li",
        "text": "S ne ₹500 diya"
      },
      {
        "t": "li",
        "text": "S ne ₹500 wapas le liya\n 👉 **NO LOSS**"
      },
      {
        "t": "h",
        "text": "❌ Lady ka loss?"
      },
      {
        "t": "li",
        "text": "Fake note diya (₹0)"
      },
      {
        "t": "li",
        "text": "₹500 ka maal le gayi\n 👉 **NO LOSS**"
      },
      {
        "t": "h",
        "text": "❗ Toh LOSS kis ka hua?"
      },
      {
        "t": "p",
        "text": "👉 **Sirf Shopkeeper C ka**"
      },
      {
        "t": "h",
        "text": "📒 Shopkeeper C ka FINAL LEDGER (CONFUSION FREE)"
      },
      {
        "t": "p",
        "text": "C ne kya khoya:"
      },
      {
        "t": "p",
        "text": "1️⃣ ₹400 cash (change diya)\n 2️⃣ ₹100 ka item"
      },
      {
        "t": "p",
        "text": "👉 **Total loss = ₹500**"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "🎯 **Shopkeeper C ka total loss = ₹500**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview me EXACT kaise bolna hai 🔥"
      },
      {
        "t": "p",
        "text": "“The counterfeit note has zero value.\n The lady takes goods worth 100 and cash of 400.\n The second shopkeeper neither gains nor loses anything.\n Hence, the shopkeeper alone bears a loss of 500 rupees.”"
      },
      {
        "t": "p",
        "text": "💥 Interviewer: “Correct and well reasoned.”"
      },
      {
        "t": "h",
        "text": "🚫 Common Galti (jo 90% log karte hain)"
      },
      {
        "t": "p",
        "text": "❌ Lady ke fake 500 ko real maan lete hain\n ❌ S ka loss ginte hain\n ❌ Multiple transactions add kar dete hain"
      },
      {
        "t": "h",
        "text": "🧠 ONE LINE YAAD RAKH (EXAM + INTERVIEW)"
      },
      {
        "t": "p",
        "text": "**“Fake note = zero, so loss sirf wahi uthata hai jo real paisa deta hai.”**"
      },
      {
        "t": "p",
        "text": "MA15"
      }
    ]
  },
  {
    "id": "p60",
    "title": "Tuesday Boy Paradox",
    "category": "Probability & Expectation",
    "problem": [
      {
        "t": "h",
        "text": "Given:"
      },
      {
        "t": "li",
        "text": "Brother ke **2 bachche** hain"
      },
      {
        "t": "li",
        "text": "**Ek bachcha ladka hai**"
      },
      {
        "t": "li",
        "text": "Aur **woh ladka Tuesday ko paida hua**"
      },
      {
        "t": "li",
        "text": "🎯 Question:\n 👉 **Probability kya hai ki dono bachche ladke hi hon?**"
      },
      {
        "t": "h",
        "text": "🔴 Sabse pehle ek baat clear karo (VERY IMPORTANT)"
      },
      {
        "t": "p",
        "text": "❌ Yeh mat socho:"
      },
      {
        "t": "p",
        "text": "“Ek ladka hai, to dusra bhi ladka hoga ya nahi?”"
      },
      {
        "t": "p",
        "text": "❌ Yeh bhi mat socho:"
      },
      {
        "t": "p",
        "text": "“Tuesday ka kya role hai?”"
      },
      {
        "t": "p",
        "text": "✅ **Tuesday extra information hai**\n Aur **extra information probability change kar deti hai**"
      },
      {
        "t": "h",
        "text": "👀 Visualization (dimag me picture banao)"
      },
      {
        "t": "img",
        "src": "image9.png"
      },
      {
        "t": "img",
        "src": "image235.jpg"
      },
      {
        "t": "p",
        "text": "Socho:"
      },
      {
        "t": "li",
        "text": "Har bachcha:"
      },
      {
        "t": "li",
        "text": "👦 Boy ya 👧 Girl (50–50)"
      },
      {
        "t": "li",
        "text": "🗓️ Monday–Sunday (7 options)"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🧠 STEP 1: Pehle possible family types socho"
      },
      {
        "t": "p",
        "text": "2 bachche → sirf **4 gender combinations** hote hain:"
      },
      {
        "t": "p",
        "text": "1️⃣ BB (Boy, Boy)\n 2️⃣ BG (Boy, Girl)\n 3️⃣ GB (Girl, Boy)\n 4️⃣ GG (Girl, Girl)"
      },
      {
        "t": "h",
        "text": "🧠 STEP 2: Given condition lagao"
      },
      {
        "t": "p",
        "text": "Condition:"
      },
      {
        "t": "p",
        "text": "**“At least one child is a BOY born on TUESDAY”**"
      },
      {
        "t": "p",
        "text": "👉 GG **direct eliminate** ❌\n (kyunki GG me koi boy hi nahi)"
      },
      {
        "t": "p",
        "text": "Bache sirf:"
      },
      {
        "t": "li",
        "text": "BB"
      },
      {
        "t": "li",
        "text": "BG"
      },
      {
        "t": "li",
        "text": "GB"
      },
      {
        "t": "h",
        "text": "🧠 STEP 3: Ab yahan TRAP hai 😈"
      },
      {
        "t": "p",
        "text": "Tuesday ka use ab aata hai."
      },
      {
        "t": "h",
        "text": "🧮 Counting WITHOUT formula (sirf logic)"
      },
      {
        "t": "h",
        "text": "👉 Har bachcha:"
      },
      {
        "t": "li",
        "text": "7 din me se kisi ek din paida ho sakta hai"
      },
      {
        "t": "h",
        "text": "🔹 Case 1: BB (Boy, Boy)"
      },
      {
        "t": "p",
        "text": "Dono ladke hain.\n “At least one boy Tuesday ko paida hua” ka matlab:"
      },
      {
        "t": "li",
        "text": "Pehla boy Tuesday ho sakta hai"
      },
      {
        "t": "li",
        "text": "Dusra boy Tuesday ho sakta hai"
      },
      {
        "t": "li",
        "text": "Ya dono Tuesday ho sakte hain"
      },
      {
        "t": "p",
        "text": "👉 Total **13 valid ways**\n (yeh accepted standard result hai)"
      },
      {
        "t": "h",
        "text": "🔹 Case 2: BG (Boy, Girl)"
      },
      {
        "t": "p",
        "text": "Sirf **boy** hi Tuesday ka ho sakta hai\n Girl ka din kuch bhi ho sakta hai"
      },
      {
        "t": "p",
        "text": "👉 **7 valid ways**"
      },
      {
        "t": "h",
        "text": "🔹 Case 3: GB (Girl, Boy)"
      },
      {
        "t": "p",
        "text": "Same logic:\n 👉 **7 valid ways**"
      },
      {
        "t": "h",
        "text": "🔢 Ab TOTAL gino"
      },
      {
        "t": "table",
        "rows": [
          [
            "Case",
            "Valid ways"
          ],
          [
            "BB",
            "13"
          ],
          [
            "BG",
            "7"
          ],
          [
            "GB",
            "7"
          ]
        ]
      },
      {
        "t": "p",
        "text": "👉 Total = **27**"
      },
      {
        "t": "h",
        "text": "🎯 Ab actual question ka jawab"
      },
      {
        "t": "p",
        "text": "Probability =\n (BB ke valid cases) / (Total valid cases)"
      },
      {
        "t": "p",
        "text": "=1327= \\frac{13}{27}=2713​"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "h",
        "text": "🎯 Probability = 13 / 27"
      },
      {
        "t": "p",
        "text": "👉 Approx = **0.48 (50% se thoda kam)**"
      },
      {
        "t": "h",
        "text": "🧠 Ab ONE LINE me samjho (MOST IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Tuesday batana ek **extra filter** hai\n jo BB cases ko **zyada weight** deta hai\n isliye probability 1/3 ya 1/2 nahi rehti"
      },
      {
        "t": "h",
        "text": "🗣️ Interview me EXACT kaise bolna hai 🔥"
      },
      {
        "t": "p",
        "text": "“The day-of-birth information changes the sample space.\n When we condition on a boy born on Tuesday,\n the BB case appears more frequently than the mixed cases.\n Hence the probability becomes 13 over 27.”"
      },
      {
        "t": "p",
        "text": "💥 Interviewer: “Good understanding of conditional probability.”"
      },
      {
        "t": "h",
        "text": "🚫 Common Galti (jo 95% log karte hain)"
      },
      {
        "t": "p",
        "text": "❌ Tuesday ko ignore karna\n ❌ Simple 1/3 bol dena\n ❌ “At least one” ka meaning galat lena"
      },
      {
        "t": "h",
        "text": "🧠 ONE LINE YAAD RAKH (LIFE SAVER)"
      },
      {
        "t": "p",
        "text": "**“Extra information changes probability.”**"
      },
      {
        "t": "p",
        "text": "MA16"
      }
    ]
  },
  {
    "id": "p61",
    "title": "Know Average Salary without Disclosing Salaries",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "p",
        "text": "Three Employees want to know the average of their salaries. They are not allowed to share their individual salaries."
      },
      {
        "t": "img",
        "src": "image191.png"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution :**"
      },
      {
        "t": "p",
        "text": "Follow the steps below"
      },
      {
        "t": "p",
        "text": "**Step 1:** X adds a Random Number and his salary and tells the sum to Y."
      },
      {
        "t": "p",
        "text": "**Step 2:** Y also adds a Random Number and his salary to the sum told by X and tells new sum to Z."
      },
      {
        "t": "p",
        "text": "**Step 3:** Z also adds a Random Number and his salary to the sum told by Y and tells new sum to X."
      },
      {
        "t": "p",
        "text": "**Step 4:** X subtracts its random number from the sum told by Z and tells the new number to Y."
      },
      {
        "t": "p",
        "text": "**Step 5:** Y subtracts its random number from the sum told by X and tells the new number to Z."
      },
      {
        "t": "p",
        "text": "**Step 6:** Z subtracts its random number from the sum told by Y and announces the new number. The new number is now the sum of three salaries and the average can be calculated by dividing the sum by 3. Finally, nobody knows the salary of others, but all know average."
      },
      {
        "t": "p",
        "text": "This can be extended to more than 3 employees also."
      },
      {
        "t": "h",
        "text": "💰 Puzzle: Average Salary bina salary bataye"
      },
      {
        "t": "h",
        "text": "Characters:"
      },
      {
        "t": "li",
        "text": "👤 X"
      },
      {
        "t": "li",
        "text": "👤 Y"
      },
      {
        "t": "li",
        "text": "👤 Z"
      },
      {
        "t": "p",
        "text": "👉 **Goal:**\n Sab log **average salary** jaan lein\n ❌ Par **kisi ko kisi ki exact salary pata na chale**"
      },
      {
        "t": "h",
        "text": "🔑 CORE IDEA (PEHLE SAMJHO)"
      },
      {
        "t": "p",
        "text": "💡 **Random number = lock**\n 💡 Salary = secret"
      },
      {
        "t": "p",
        "text": "Lock lagake number ghumaya jaata hai\n End me locks hata diye jaate hain"
      },
      {
        "t": "h",
        "text": "👀 Visualization (dimag me picture banao)"
      },
      {
        "t": "img",
        "src": "image157.png"
      },
      {
        "t": "img",
        "src": "image161.png"
      },
      {
        "t": "img",
        "src": "image62.png"
      },
      {
        "t": "h",
        "text": "🧠 Ab REAL NUMBERS ke saath samjho (VERY IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Assume (sirf samjhane ke liye):"
      },
      {
        "t": "li",
        "text": "X salary = **10**"
      },
      {
        "t": "li",
        "text": "Y salary = **20**"
      },
      {
        "t": "li",
        "text": "Z salary = **30**"
      },
      {
        "t": "p",
        "text": "⚠️ **In reality koi kisi ko nahi batata**,\n hum sirf clarity ke liye maan rahe hain."
      },
      {
        "t": "h",
        "text": "🔐 Step 1: X lock lagata hai"
      },
      {
        "t": "li",
        "text": "X apna **random number = 100** choose karta hai"
      },
      {
        "t": "li",
        "text": "X bolta hai Y ko:"
      },
      {
        "t": "p",
        "text": "10  (salary)+100  (random)=11010 \\;(\\text{salary}) + 100 \\;(\\text{random}) = 11010(salary)+100(random)=110"
      },
      {
        "t": "p",
        "text": "👉 Y ko sirf **110** pata hai\n ❌ Salary nahi pata"
      },
      {
        "t": "h",
        "text": "🔐 Step 2: Y apna lock lagata hai"
      },
      {
        "t": "li",
        "text": "Y apna **random number = 50**"
      },
      {
        "t": "li",
        "text": "Y apni salary add karta hai:"
      },
      {
        "t": "p",
        "text": "110+20+50=180110 + 20 + 50 = 180110+20+50=180"
      },
      {
        "t": "p",
        "text": "👉 Z ko **180** bol deta hai"
      },
      {
        "t": "h",
        "text": "🔐 Step 3: Z apna lock lagata hai"
      },
      {
        "t": "li",
        "text": "Z apna **random number = 30**"
      },
      {
        "t": "li",
        "text": "Z apni salary add karta hai:"
      },
      {
        "t": "p",
        "text": "180+30+30=240180 + 30 + 30 = 240180+30+30=240"
      },
      {
        "t": "p",
        "text": "👉 X ko **240** bol deta hai"
      },
      {
        "t": "h",
        "text": "🔓 Ab LOCKS hataana start 🔓"
      },
      {
        "t": "h",
        "text": "🔓 Step 4: X apna lock nikalta hai"
      },
      {
        "t": "li",
        "text": "X apna random (100) minus karta hai:"
      },
      {
        "t": "p",
        "text": "240−100=140240 - 100 = 140240−100=140"
      },
      {
        "t": "p",
        "text": "👉 Y ko **140** bolta hai"
      },
      {
        "t": "h",
        "text": "🔓 Step 5: Y apna lock nikalta hai"
      },
      {
        "t": "li",
        "text": "Y apna random (50) minus karta hai:"
      },
      {
        "t": "p",
        "text": "140−50=90140 - 50 = 90140−50=90"
      },
      {
        "t": "p",
        "text": "👉 Z ko **90** bolta hai"
      },
      {
        "t": "h",
        "text": "🔓 Step 6: Z apna lock nikalta hai"
      },
      {
        "t": "li",
        "text": "Z apna random (30) minus karta hai:"
      },
      {
        "t": "p",
        "text": "90−30=6090 - 30 = 6090−30=60"
      },
      {
        "t": "p",
        "text": "🎉 **ANNOUNCE: TOTAL SALARY = 60**"
      },
      {
        "t": "h",
        "text": "🧮 Average nikaalo"
      },
      {
        "t": "p",
        "text": "Average=603=20\\text{Average} = \\frac{60}{3} = 20Average=360​=20"
      },
      {
        "t": "h",
        "text": "✅ FINAL RESULT"
      },
      {
        "t": "li",
        "text": "Sabko **average salary = 20** pata"
      },
      {
        "t": "li",
        "text": "❌ Kisi ko individual salary nahi pata"
      },
      {
        "t": "h",
        "text": "🧠 ONE LINE ME SAMAJH LO (MOST IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**Random numbers pehle add hote hain, baad me hata diye jaate hain —\n salary beech me hidden rehti hai.**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview me EXACT kaise bolna hai 🔥"
      },
      {
        "t": "p",
        "text": "“Each person masks their salary with a private random number.\n After the total is circulated, everyone removes only their own mask.\n This reveals the total sum without exposing individual salaries.”"
      },
      {
        "t": "p",
        "text": "💥 Interviewer: “Nice privacy-preserving idea.”"
      },
      {
        "t": "h",
        "text": "🚫 Common Confusion (clear kar deta hoon)"
      },
      {
        "t": "p",
        "text": "❓ **“Agar X 240 dekhta hai, kya use salary ka idea nahi milta?”**\n 👉 Nahi, kyunki usme **Y + Z + unke randoms** sab mixed hai"
      },
      {
        "t": "p",
        "text": "❓ **“Random number bada hona chahiye?”**\n 👉 Koi bhi ho sakta hai, bas secret hona chahiye"
      },
      {
        "t": "h",
        "text": "🧠 Real-World Use (bonus point)"
      },
      {
        "t": "p",
        "text": "Secure voting\n Secure salary surveys\n Privacy-preserving data sharing"
      },
      {
        "t": "p",
        "text": "MA17"
      }
    ]
  },
  {
    "id": "p62",
    "title": "Maximum run in cricket",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "p",
        "text": "In a one-day international (ODI) cricket match, assuming no extras (no wides, no no-balls, no overthrows) and considering a realistic but ideal scenario, what is the maximum number of runs a batsman can score?"
      },
      {
        "t": "p",
        "text": "**Note: **Assuming a 50-over match with 300 legal deliveries, no extras or overthrows, and a maximum of 3 runs per ball, the batsman retains strike after each over. The scenario is ideal and practical, focused on maximising runs with perfect coordination."
      },
      {
        "t": "img",
        "src": "image201.png"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution:**"
      },
      {
        "t": "p",
        "text": "Total Runs = 49 × (6 × 5 + 3 ) + (6 × 6)"
      },
      {
        "t": "p",
        "text": "= 49 × 33 + 36"
      },
      {
        "t": "p",
        "text": "= 1653 runs"
      },
      {
        "t": "p",
        "text": "Overs 1 to 49:"
      },
      {
        "t": "li",
        "text": "On each over, the batsman hits five sixes (5 × 6 = 30 runs)."
      },
      {
        "t": "li",
        "text": "On the 6th ball, he takes 3 runs to retain the strike."
      },
      {
        "t": "li",
        "text": "Total per over = 30 + 3 = 33 runs"
      },
      {
        "t": "li",
        "text": "So, 49 × 33 = 1617"
      },
      {
        "t": "p",
        "text": "50th Over:"
      },
      {
        "t": "p",
        "text": "Hits six sixes in a row = 6 × 6 = 36 runs"
      },
      {
        "t": "p",
        "text": "Total Runs = 1617 + 36 = 1653"
      },
      {
        "t": "p",
        "text": "MA18"
      }
    ]
  },
  {
    "id": "p63",
    "title": "Completion of Task",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "h",
        "text": "Given:"
      },
      {
        "t": "li",
        "text": "Aadmi **roz kaam double** karta hai"
      },
      {
        "t": "li",
        "text": "**18 din me 100% kaam** complete ho jaata hai"
      },
      {
        "t": "li",
        "text": "Question:\n 👉 **25% kaam kab complete hoga?**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 GOLDEN RULE (YEH PUZZLE KA HEART HAI)"
      },
      {
        "t": "p",
        "text": "❗ Jab kaam **double hota hai**,\n toh **last din sabse zyada kaam hota hai**"
      },
      {
        "t": "p",
        "text": "Matlab:"
      },
      {
        "t": "li",
        "text": "Pehle din bahut kam"
      },
      {
        "t": "li",
        "text": "Last din bahut zyada"
      },
      {
        "t": "h",
        "text": "👀 Visualization (dimag me imagine kar)"
      },
      {
        "t": "img",
        "src": "image204.png"
      },
      {
        "t": "img",
        "src": "image88.png"
      },
      {
        "t": "img",
        "src": "image168.jpg"
      },
      {
        "t": "p",
        "text": "Socho kaam ka graph:"
      },
      {
        "t": "li",
        "text": "Dheere-dheere upar"
      },
      {
        "t": "li",
        "text": "Last me achanak rocket 🚀"
      },
      {
        "t": "h",
        "text": "🧠 Ab LOGIC lagate hain (NO MATH)"
      },
      {
        "t": "h",
        "text": "Agar:"
      },
      {
        "t": "li",
        "text": "**Day 18** → 100% kaam complete"
      },
      {
        "t": "p",
        "text": "Toh:"
      },
      {
        "t": "li",
        "text": "**Day 17** → usse ek din pehle\n 👉 kaam **aadha (50%)** hota"
      },
      {
        "t": "p",
        "text": "Kyun?\n 👉 Kyunki next day wo **double** kar deta hai"
      },
      {
        "t": "h",
        "text": "🧠 Same logic ek aur baar"
      },
      {
        "t": "li",
        "text": "**Day 17** → 50%"
      },
      {
        "t": "li",
        "text": "Toh **Day 16** → uska aadha"
      },
      {
        "t": "p",
        "text": "👉 **25%**"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "🎯 **25% kaam = Day 16 par complete**"
      },
      {
        "t": "h",
        "text": "🧠 ONE LINE ME YAAD RAKH (MOST IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**Doubling work me,\n 50% kaam last din se ek din pehle hota hai,\n 25% usse ek din pehle.**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview me EXACT kaise bolna hai 🔥"
      },
      {
        "t": "p",
        "text": "“Since the work doubles every day,\n half of the total work is completed just one day before the end.\n Therefore, 25% is completed two days before completion,\n i.e., on Day 16.”"
      },
      {
        "t": "p",
        "text": "💥 Interviewer: “Good intuition about exponential growth.”"
      },
      {
        "t": "h",
        "text": "🚫 Common Galti (jo log karte hain)"
      },
      {
        "t": "p",
        "text": "❌ Average nikalna\n ❌ 18 ka 25% = 4.5 din sochna\n ❌ Linear sochna (yeh linear nahi hai)"
      },
      {
        "t": "p",
        "text": "MA19"
      },
      {
        "t": "h",
        "text": "Puzzle 40 | (Find missing Row in Excel)"
      },
      {
        "t": "p",
        "text": "We are given an excel sheet which contains integers from 1 to 50, including both. However, the numbers are in a jumbled form and there is 1 integer missing. You have to write a code to identify the missing integer. Only the logic is required.       **Solution:** We know that the sum of all the numbers from 1 to n is (n*(n+1)/2) Therefore, sum of all the numbers from 1 to 50 is"
      },
      {
        "t": "p",
        "text": "50*(50+1)/2  (Here, n = 50)"
      },
      {
        "t": "p",
        "text": "= 50*(51)/2"
      },
      {
        "t": "p",
        "text": "= 25*51"
      },
      {
        "t": "p",
        "text": "= 1275."
      },
      {
        "t": "p",
        "text": "Therefore, all we need to do is to sum all the integers present in the file and subtract the sum from 1275. The difference between 1275 and this sum would give us the missing integer. See this for code. This puzzle is contributed by **Feroz Baig**."
      },
      {
        "t": "h",
        "text": "🧠 STEP 1: Perfect list ka total pata karo"
      },
      {
        "t": "p",
        "text": "1 se n tak numbers ka sum hota hai:"
      },
      {
        "t": "p",
        "text": "Sum=n×(n+1)2\\text{Sum} = \\frac{n \\times (n+1)}{2}Sum=2n×(n+1)​"
      },
      {
        "t": "p",
        "text": "Yahan:"
      },
      {
        "t": "li",
        "text": "n = 50"
      },
      {
        "t": "p",
        "text": "Expected Sum=50×512=1275\\text{Expected Sum} = \\frac{50 \\times 51}{2} = 1275Expected Sum=250×51​=1275"
      },
      {
        "t": "p",
        "text": "👉 Agar **koi number missing nahi hota**,\n toh Excel ka sum **1275** hota."
      },
      {
        "t": "p",
        "text": "MA20"
      }
    ]
  },
  {
    "id": "p64",
    "title": "Four People on a Rickety Bridge",
    "category": "Bridge, Time & Speed",
    "problem": [
      {
        "t": "p",
        "text": "Four people need to cross a rickety bridge at night. Unfortunately, they have only one torch, and the bridge is too dangerous to cross without a torch. The bridge can support only two people at a time. Not all people take the same time to cross the bridge."
      },
      {
        "t": "img",
        "src": "image32.png"
      },
      {
        "t": "p",
        "text": "The crossing times for each person are:"
      },
      {
        "t": "li",
        "text": "Person 1: 1 minute"
      },
      {
        "t": "li",
        "text": "Person 2: 2 minutes"
      },
      {
        "t": "li",
        "text": "Person 3: 7 minutes"
      },
      {
        "t": "li",
        "text": "Person 4: 10 minutes"
      },
      {
        "t": "p",
        "text": "What is the shortest time needed for all four of them to cross the bridge?"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution:**"
      },
      {
        "t": "p",
        "text": "The initial solution most people will think of is to use the fastest person as an usher to guide everyone across. But it would take longer as 10 + 1 + 7 + 1 + 2 = 21 mins. But can it be the right answer?"
      },
      {
        "t": "p",
        "text": "No. That would make this question too simple, even as a warm-up question.\n\nLet’s brainstorm a little further. To reduce the amount of time, we should find a way for 10 and 7 to go together, as they are the slowest among all these. If they cross together, then we need one of them to come back to get the others. That would not be ideal. How do we get around that? Maybe we can have 1 waiting on the other side to bring the torch back. This brings us closer to the solution."
      },
      {
        "t": "p",
        "text": "So let’s put all this together."
      },
      {
        "t": "p",
        "text": "**Steps:**"
      },
      {
        "t": "li",
        "text": "1 and 2 cross the bridge and move to the other side."
      },
      {
        "t": "li",
        "text": "Now 2 comes back with the torch from the other side."
      },
      {
        "t": "li",
        "text": "7 and 10 crosses the bridge and 2 remain to this side only."
      },
      {
        "t": "li",
        "text": "Now 1 comes back with the torch from the other side."
      },
      {
        "t": "li",
        "text": "At last, 1 and 2 cross the bridge and we are done.\n\nTotal time taken = 2 + 2 + 10 + 1 + 2 = **17 mins**"
      },
      {
        "t": "p",
        "text": "MA21"
      }
    ]
  },
  {
    "id": "p65",
    "title": "Man fell in well",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "p",
        "text": "A man fell into a **50m** deep well. He climbs **4 meters** up and slips **3 meters** down in one day. How many days would it take for him to come out of the well?"
      },
      {
        "t": "img",
        "src": "image3.png"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution:**"
      },
      {
        "t": "li",
        "text": "On the first day, the man climbs **4 meters** up and slips **3 meters** down; therefore, he only climbs **1 meter** up total."
      },
      {
        "t": "li",
        "text": "On the second day, again he climbs **1 meter** up, so the total distance climbed is **2 meters** till the second day. Therefore, the man climbs 1 meter every day."
      },
      {
        "t": "p",
        "text": "Now, as per the above pattern, on the **46th day**, he must have climbed 46 meters. So on the **47th day**, he climbs full (46 + 4) 50 meters, and after that, he will not slip as he is already out of the well, so the answer is **47 days**."
      },
      {
        "t": "p",
        "text": "MA22"
      }
    ]
  },
  {
    "id": "p66",
    "title": "50 red marbles and 50 blue marbles",
    "category": "Probability & Expectation",
    "problem": [
      {
        "t": "p",
        "text": "**Last Updated : 25 Jul, 2025**"
      },
      {
        "t": "p",
        "text": "**There are two boxes, B1 and B2. One of the boxes contains 50 red marbles, and the other contains 50 blue marbles. You are allowed to redistribute the marbles between the two boxes in any way you like, without changing the total number of red and blue marbles (i.e., 50 red and 50 blue marbles in total).**"
      },
      {
        "t": "p",
        "text": "**A box is then selected at random, and from the chosen box, one marble is selected at random.**"
      },
      {
        "t": "img",
        "src": "image209.png"
      },
      {
        "t": "p",
        "text": "**Your task is to determine how to redistribute the marbles between the two boxes in order to maximize the probability of selecting a red marble.**"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution:**"
      },
      {
        "t": "img",
        "src": "image98.png"
      },
      {
        "t": "p",
        "text": "**Let P(R) be the probability of picking a red marble.**"
      },
      {
        "t": "p",
        "text": "**P(R) = P(B1) * P(B1 | J1) + P(B2) * P(B2 | J2)**"
      },
      {
        "t": "p",
        "text": "**Let P(B1) and P(B2) represent the probabilities of selecting Box B1 and Box B2, respectively. Since the selection of a box is random and equally likely, we have:**"
      },
      {
        "t": "p",
        "text": "**P(B1)=P(B2)=1/2**"
      },
      {
        "t": "p",
        "text": "**Let J1 and J2 denote the total number of marbles in Box B1 and Box B2, respectively, after redistribution of the marbles.**"
      },
      {
        "t": "p",
        "text": "**If we do not reshuffle any balls. Then,**"
      },
      {
        "t": "p",
        "text": "**P(R) = ((1 / 2) * 1) + ((1 / 2) * 0) = 0.5**"
      },
      {
        "t": "p",
        "text": "**But, if we decrease the number of red balls in box B1 and increase the number of red balls in box B2, then the probability of getting a red ball will be maximized. Therefore, let us take 49 red marbles from B1 to B2, then there will be 1 red ball in B1 and 99 balls in B2, out of which 49 are red and 50 of them are blue in the second jar. Then**"
      },
      {
        "t": "p",
        "text": "**P (R) = ((1 / 2) * (1 / 1)) + ((1 / 2) * (49 / 99)) = 0.747474**"
      },
      {
        "t": "p",
        "text": "**Hence,**"
      },
      {
        "t": "p",
        "text": "**the maximum probability of choosing a red ball is 0.747474**"
      },
      {
        "t": "p",
        "text": "MA23"
      }
    ]
  },
  {
    "id": "p67",
    "title": "Form Three Equilateral Triangles",
    "category": "Shapes & Matchsticks",
    "problem": [
      {
        "t": "p",
        "text": "Suppose you have a regular hexagon made up of matchsticks with three diagonals in it. The task is to convert the given hexagon into three equilateral triangles by moving only 4 matchsticks."
      },
      {
        "t": "p",
        "text": "(Each matchstick is numbered as shown below)"
      },
      {
        "t": "img",
        "src": "image194.png"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution:**"
      },
      {
        "t": "p",
        "text": "Move 2, 4, 5, 6 numbered matches to get exactly three equilateral triangles as shown below."
      },
      {
        "t": "img",
        "src": "image116.png"
      },
      {
        "t": "p",
        "text": "MA24"
      }
    ]
  },
  {
    "id": "p68",
    "title": "10 identical bottles of pills",
    "category": "Poison, Pills & Testing",
    "problem": [],
    "solution": [
      {
        "t": "p",
        "text": "Solution: Step 1: Arrange the bottles on the shelf and now take, 1 pill from the first bottle, 2 pills from the second bottle, 3 pills from the third bottle, and so on. Step 2: In total, you'll be taking 1 + 2 + 3 + ... + 10 pills. This is a mathematical sequence that adds up to 55 pills (10 x 11 / 2) or normally if you'll add up you'll get 55 Pills. Step 3: If the weight reads exactly 55 grams, congratulations! All the bottles have pills of the correct weight. But If the weight is more than 55 grams, the difference indicates the bottle with the heavier pills. For example, if the weight shows 55.1 grams, the extra 0.1 gram comes from the first bottle (since you took 1 pill from it). * Similarly, if the weight shows 55.2 grams, the second bottle has the heavier pills (because you took 2 pills from it). * Likewise if the weight shows 55.6 grams, the 6th bottle has the heavier pills (Since you too 6 pills from bottle 6) and so on."
      }
    ]
  },
  {
    "id": "p69",
    "title": "Chain Link Puzzle",
    "category": "Measuring & Weighing",
    "problem": [
      {
        "t": "h",
        "text": "Given:"
      },
      {
        "t": "li",
        "text": "**5 chain segments**"
      },
      {
        "t": "li",
        "text": "Har segment me **3 links**"
      },
      {
        "t": "li",
        "text": "💸 Cost:"
      },
      {
        "t": "li",
        "text": "Link **todna (break)** = **$1**"
      },
      {
        "t": "li",
        "text": "Link **jodna (weld)** = **$3**"
      },
      {
        "t": "li",
        "text": "Rule:"
      },
      {
        "t": "li",
        "text": "Sirf **break + weld** se hi connect kar sakte ho"
      },
      {
        "t": "li",
        "text": "🎯 Goal:"
      },
      {
        "t": "li",
        "text": "**Sab 5 segments ko ek lambi open chain** banana"
      },
      {
        "t": "li",
        "text": "**Cost < $15**"
      },
      {
        "t": "li",
        "text": "**Minimum cost** batana"
      },
      {
        "t": "h",
        "text": "🔴 Sabse pehle common GALAT soch (jo 90% log karte hain)"
      },
      {
        "t": "p",
        "text": "❌ “Har chain ko chain se jodte jao”"
      },
      {
        "t": "p",
        "text": "Agar aisa karoge:"
      },
      {
        "t": "li",
        "text": "Har join = break + weld"
      },
      {
        "t": "li",
        "text": "4 joins chahiye"
      },
      {
        "t": "li",
        "text": "Cost zyada ho jayegi ❌"
      },
      {
        "t": "p",
        "text": "👉 **Yeh puzzle direct jodne ka nahi hai**\n 👉 **Yeh sacrifice + reuse ka puzzle hai**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 CORE IDEA (YEH YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "🔥 **Ek poori chain ko tod do**\n 🔥 **Uske links ko connector bana do**"
      },
      {
        "t": "p",
        "text": "Matlab:"
      },
      {
        "t": "li",
        "text": "Ek chain ko “connector material” bana do"
      },
      {
        "t": "li",
        "text": "Baaki chains ko bina tode jod do"
      },
      {
        "t": "h",
        "text": "👀 Visualization (dimag me imagine kar)"
      },
      {
        "t": "img",
        "src": "image57.png"
      },
      {
        "t": "p",
        "text": "Socho:"
      },
      {
        "t": "li",
        "text": "5 alag-alag chain tukde"
      },
      {
        "t": "li",
        "text": "1 chain ko completely khol diya"
      },
      {
        "t": "li",
        "text": "Uske links se baaki chains jod rahe ho"
      },
      {
        "t": "h",
        "text": "🧠 STEP-BY-STEP (CONFUSION FREE)"
      },
      {
        "t": "p",
        "text": "Chains ko naam de dete hain:"
      },
      {
        "t": "li",
        "text": "Chain 1, 2, 3, 4, 5\n (Har chain = 3 links)"
      },
      {
        "t": "h",
        "text": "🟢 STEP 1: Chain 1 ko TOD DO (sacrifice)"
      },
      {
        "t": "li",
        "text": "Chain 1 ke **3 links tod do**"
      },
      {
        "t": "li",
        "text": "Cost = **3 × $1 = $3**"
      },
      {
        "t": "p",
        "text": "👉 Ab tumhare paas **3 open links** hain\n (yeh connectors banenge)"
      },
      {
        "t": "h",
        "text": "🟢 STEP 2: Ab baaki chains ko jodo"
      },
      {
        "t": "p",
        "text": "Tumhe jodna hai:"
      },
      {
        "t": "li",
        "text": "Chain 2 → Chain 3"
      },
      {
        "t": "li",
        "text": "Chain 3 → Chain 4"
      },
      {
        "t": "li",
        "text": "Chain 4 → Chain 5"
      },
      {
        "t": "p",
        "text": "Total **3 connections** chahiye"
      },
      {
        "t": "h",
        "text": "🟢 STEP 3: Har open link se ek join"
      },
      {
        "t": "li",
        "text": "1st open link: Chain 2–3 → **$3**"
      },
      {
        "t": "li",
        "text": "2nd open link: Chain 3–4 → **$3**"
      },
      {
        "t": "li",
        "text": "3rd open link: Chain 4–5 → **$3**"
      },
      {
        "t": "p",
        "text": "👉 Welding cost = **3 × $3 = $9**"
      },
      {
        "t": "h",
        "text": "🧮 TOTAL COST"
      },
      {
        "t": "table",
        "rows": [
          [
            "Action",
            "Cost"
          ],
          [
            "Break 3 links",
            "$3"
          ],
          [
            "Weld 3 joins",
            "$9"
          ],
          [
            "Total",
            "$12"
          ]
        ]
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "🎯 **Minimum cost = $12**\n ✔️ Less than $15\n ✔️ All chains connected\n ✔️ Open-ended chain"
      },
      {
        "t": "h",
        "text": "🧠 ONE LINE ME SAMAJH LO (MOST IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**“Ek chain ko tod ke, uske links ko baaki chains jodne ke liye use karo.”**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview me EXACT kaise bolna hai 🔥"
      },
      {
        "t": "p",
        "text": "“Instead of breaking links from every chain,\n I completely dismantle one chain and reuse its links as connectors.\n This minimizes the number of breaks and welds,\n resulting in a total cost of $12.”"
      },
      {
        "t": "p",
        "text": "MA27"
      }
    ]
  },
  {
    "id": "p70",
    "title": "The Fake Note Puzzle",
    "category": "Measuring & Weighing",
    "problem": [
      {
        "t": "p",
        "text": "A lady purchases goods worth Rs. 200 from a shop."
      },
      {
        "t": "li",
        "text": "The lady pays with a Rs. 1000 note."
      },
      {
        "t": "li",
        "text": "Since the shopkeeper doesn’t have change, he goes to a neighbouring shop, exchanges the Rs. 1000 note for smaller denominations, and returns to give the lady Rs. 800 in change, keeping Rs. 200 as payment for the goods."
      },
      {
        "t": "li",
        "text": "Later, the neighbouring shopkeeper returns, informing that the Rs. 1000 note is fake and demands his money back."
      },
      {
        "t": "p",
        "text": "How much Loss did the shopkeeper face assuming that the shopkeeper sells the goods at no profit ?"
      },
      {
        "t": "img",
        "src": "image232.png"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution:**"
      },
      {
        "t": "p",
        "text": "Loss of the shopkeeper = What shopkeeper gave to others - What shopkeeper took"
      },
      {
        "t": "p",
        "text": "**Step 1: **The shopkeeper has Rs. 200 worth of goods and Rs. 1000 in original currency; the lady enters with Rs. 1000 in fake currency, and the shopkeeper gives her Rs. 1000 in change taken from the neighbour."
      },
      {
        "t": "p",
        "text": "**Step 2:** At this point, the shopkeeper is holding Rs. 1000 in counterfeit notes and Rs. 1000 in original currency. The lady has taken goods worth Rs. 200, and the neighbor has Rs. 1000, which was given to her as change."
      },
      {
        "t": "img",
        "src": "image170.png"
      },
      {
        "t": "p",
        "text": "**Step 3: **At this stage, the shopkeeper has Rs. 1000 in change and Rs. 1000 in original currency. The lady has received goods worth Rs. 200, while the neighbor is left with the Rs. 1000 in fake currency."
      },
      {
        "t": "img",
        "src": "image220.png"
      },
      {
        "t": "p",
        "text": "**Step 4: **The shopkeeper is left with Rs. 200 worth of goods lost and Rs. 1000 in original currency. The lady now has goods worth Rs. 200 along with Rs. 800 in cash, and the neighbor still holds the Rs. 1000 in fake currency."
      },
      {
        "t": "img",
        "src": "image49.png"
      },
      {
        "t": "p",
        "text": "**Step 5: **The shopkeeper is left with a loss of Rs. 200 and is holding Rs. 1000 in fake currency. The lady has goods worth Rs. 200 and Rs. 800 in cash, while the neighbor possesses Rs. 1000 in original currency."
      },
      {
        "t": "img",
        "src": "image217.png"
      },
      {
        "t": "p",
        "text": "By, Comparing** Step 1 and Step 5**, we see that the lady successfully exchanged her fake Rs. 1000 currency for goods and cash totaling Rs. 1000 in value. As a result, the shopkeeper ended up trading his original Rs. 1000 currency for counterfeit money. Therefore, the shopkeeper incurs a total loss of **Rs. 1000**."
      },
      {
        "t": "p",
        "text": "MA28"
      },
      {
        "t": "h",
        "text": "Egg Dropping Puzzle with 2 Eggs and K Floors"
      },
      {
        "t": "p",
        "text": "Given 2 eggs and k floors, find the minimum number of trials needed in worst case. This problem is a specific case of n eggs and k floors.\n**Examples: **"
      },
      {
        "t": "p",
        "text": "Input : k = 10"
      },
      {
        "t": "p",
        "text": "Output : 4"
      },
      {
        "t": "p",
        "text": "We first try from 4-th floor. Two cases arise,"
      },
      {
        "t": "p",
        "text": "(1) If egg breaks, we have one egg left so we"
      },
      {
        "t": "p",
        "text": "need three more trials."
      },
      {
        "t": "p",
        "text": "(2) If egg does not break, we try next from 7-th"
      },
      {
        "t": "p",
        "text": "floor. Again two cases arise."
      },
      {
        "t": "p",
        "text": "We can notice that if we choose 4th floor as first"
      },
      {
        "t": "p",
        "text": "floor, 7-th as next floor and 9 as next of next floor,"
      },
      {
        "t": "p",
        "text": "we never exceed more than 4 trials."
      },
      {
        "t": "p",
        "text": "Input : k = 100"
      },
      {
        "t": "p",
        "text": "Output : 14"
      },
      {
        "t": "p",
        "text": "**What is the worst case number of trials if we have only one egg? **\nThe answer is k. We will be trying from 1st floor, then 2nd, then 3rd and in worst case, the egg breaks from top floor.\n**What would be our first floor that we try if we have two eggs? **\nWe can notice that if our answer is x, then the first floor that we try has to be floor number x. Because in worst case if egg breaks, we have only one egg left and we have to try every floor from 1 to x-1. So total trials become 1 + (x - 1).\n**What would be our second floor that we try if egg does not break in first attempt? **\nThe next floor that we try has to be x + (x - 1) because our optimal answer is x and if egg breaks from floor number x + (x-1) we have to linearly try from floor number x+1 to x-2.\n**Can we generalize it? **\nIf first egg has not broken so far, then the i-th trial has to be from floor number x + (x - 1) + ... + (x - i - 1).\n**How many floors we can cover with x trials? **\nWe can observe from above that we can cover x + (x - 1) + (x - 2) .... + 2 + 1 floors with x trials. The value of this expression is x * (x + 1) / 2.\n**What is the optimal x for a given k? **\nFrom above, we know,"
      },
      {
        "t": "p",
        "text": "**x * (x + 1)/2 >= k**"
      },
      {
        "t": "p",
        "text": "The optimal value of x can be written as,"
      },
      {
        "t": "p",
        "text": "?((-1 + ?(1+8k))/2)?"
      },
      {
        "t": "p",
        "text": "// CPP program to find optimal number of trials"
      },
      {
        "t": "p",
        "text": "// for k floors and 2 eggs."
      },
      {
        "t": "p",
        "text": "#include<bits/stdc++.h>"
      },
      {
        "t": "p",
        "text": "using namespace std;"
      },
      {
        "t": "p",
        "text": "​"
      },
      {
        "t": "p",
        "text": "int twoEggDrop(int k)"
      },
      {
        "t": "p",
        "text": "{"
      },
      {
        "t": "p",
        "text": "return ceil((-1.0 + sqrt(1 + 8*k))/2.0);"
      },
      {
        "t": "p",
        "text": "}"
      },
      {
        "t": "p",
        "text": "​"
      },
      {
        "t": "p",
        "text": "int main()"
      },
      {
        "t": "p",
        "text": "{"
      },
      {
        "t": "p",
        "text": "int k = 100;"
      },
      {
        "t": "p",
        "text": "cout << twoEggDrop(k);"
      },
      {
        "t": "p",
        "text": "return 0;"
      },
      {
        "t": "p",
        "text": "}"
      },
      {
        "t": "p",
        "text": "**Output: **"
      },
      {
        "t": "p",
        "text": "14"
      },
      {
        "t": "p",
        "text": "**Time Complexity :** O(log(k))"
      },
      {
        "t": "p",
        "text": "**Space complexity :** O(1)"
      },
      {
        "t": "p",
        "text": "MA29"
      },
      {
        "t": "h",
        "text": "Minimum number of Apples to be collected from trees to guarantee M red apples"
      },
      {
        "t": "p",
        "text": "There are different kinds of apple trees in the four directions (East, West, North, South), which may grow both red and green apples such that each tree grows exactly K apples, in the following manner:"
      },
      {
        "t": "li",
        "text": "**N** - number of trees to the north does not have red apples."
      },
      {
        "t": "li",
        "text": "**S** - number of trees to the south does not have green apples."
      },
      {
        "t": "li",
        "text": "**W** - number of trees in the west has some red apples."
      },
      {
        "t": "li",
        "text": "**E** - number of trees in the east have some green apples."
      },
      {
        "t": "p",
        "text": "However, the colors of apples cannot be distinguished outside the house. So, the task is to find the minimum number of apples to be collected from the trees to guarantee M red apples. If it is not possible, print -1."
      },
      {
        "t": "p",
        "text": "**Examples:**"
      },
      {
        "t": "p",
        "text": "**Input: **M = 10, K = 15, N = 0, S = 1, W = 0, E = 0\n**Output: **10\n**Explanation: **It simply gets 10 apples from the 1st south tree"
      },
      {
        "t": "p",
        "text": "**Input:** M = 10, K = 15, N = 3, S = 0, W = 1, E = 0\n**Output:** -1\n**Explanation:** There are no red apples in the South, North and East. But in the West there are atleast 1 red apple and total tree is 1, So, total no. of guaranteed red apple is 1 * 1 = 1 which is less than M."
      },
      {
        "t": "p",
        "text": "**Approach:  **Every apple in the south ensures that it is red. So first, take an apple from the south. In the East and West, there is at least 1 red apple in each tree. That's why for guaranteed it is considered that there is only 1 red apple on each tree in the east and west. For the north there is no red apple, so, neglect that. Follow the steps below to solve the problem:"
      },
      {
        "t": "li",
        "text": "If **M** is less than equal to **S*K** then print **M.**"
      },
      {
        "t": "li",
        "text": "Else if **M** is less than equal to **S*K+E+W** then print **S*K + (M-S*K) * K**"
      },
      {
        "t": "li",
        "text": "Else print **-1.**"
      },
      {
        "t": "p",
        "text": "Below is the implementation of the above approach:"
      },
      {
        "t": "p",
        "text": "// C++ program for the above approach"
      },
      {
        "t": "p",
        "text": "#include<bits/stdc++.h>"
      },
      {
        "t": "p",
        "text": "using namespace std;"
      },
      {
        "t": "p",
        "text": "​"
      },
      {
        "t": "p",
        "text": "// Function to minimum no. of apples"
      },
      {
        "t": "p",
        "text": "int minApples(int M,int K,int N,int S,int W,int E){"
      },
      {
        "t": "p",
        "text": "// If we get all required apple"
      },
      {
        "t": "p",
        "text": "// from South"
      },
      {
        "t": "p",
        "text": "if(M <= S * K)"
      },
      {
        "t": "p",
        "text": "return M;"
      },
      {
        "t": "p",
        "text": "​"
      },
      {
        "t": "p",
        "text": "// If we required trees at"
      },
      {
        "t": "p",
        "text": "// East and West"
      },
      {
        "t": "p",
        "text": "else if(M <= S * K + E + W)"
      },
      {
        "t": "p",
        "text": "return S * K + (M-S * K) * K;"
      },
      {
        "t": "p",
        "text": "​"
      },
      {
        "t": "p",
        "text": "// If we doesn't have enough"
      },
      {
        "t": "p",
        "text": "// red apples"
      },
      {
        "t": "p",
        "text": "else"
      },
      {
        "t": "p",
        "text": "return -1;"
      },
      {
        "t": "p",
        "text": "​"
      },
      {
        "t": "p",
        "text": "}"
      },
      {
        "t": "p",
        "text": "​"
      },
      {
        "t": "p",
        "text": "// Driver Code"
      },
      {
        "t": "p",
        "text": "int main(){"
      },
      {
        "t": "p",
        "text": "// No. of red apple for gift"
      },
      {
        "t": "p",
        "text": "int M = 10;"
      },
      {
        "t": "p",
        "text": "​"
      },
      {
        "t": "p",
        "text": "// No. of red apple in each tree"
      },
      {
        "t": "p",
        "text": "int K = 15;"
      },
      {
        "t": "p",
        "text": "​"
      },
      {
        "t": "p",
        "text": "// No. of tree in North"
      },
      {
        "t": "p",
        "text": "int N = 0;"
      },
      {
        "t": "p",
        "text": "​"
      },
      {
        "t": "p",
        "text": "// No. of tree in South"
      },
      {
        "t": "p",
        "text": "int S = 1;"
      },
      {
        "t": "p",
        "text": "​"
      },
      {
        "t": "p",
        "text": "// No. of tree in West"
      },
      {
        "t": "p",
        "text": "int W = 0;"
      },
      {
        "t": "p",
        "text": "​"
      },
      {
        "t": "p",
        "text": "// No. of tree in East"
      },
      {
        "t": "p",
        "text": "int E = 0;"
      },
      {
        "t": "p",
        "text": "​"
      },
      {
        "t": "p",
        "text": "// Function Call"
      },
      {
        "t": "p",
        "text": "int ans = minApples(M,K,N,S,W,E);"
      },
      {
        "t": "p",
        "text": "cout<<ans<<endl;"
      },
      {
        "t": "p",
        "text": "​"
      },
      {
        "t": "p",
        "text": "}"
      },
      {
        "t": "p",
        "text": "​"
      },
      {
        "t": "p",
        "text": "// This code is contributed by ipg2016107."
      },
      {
        "t": "p",
        "text": "**Output**"
      },
      {
        "t": "p",
        "text": "10"
      },
      {
        "t": "p",
        "text": "**Time Complexity: **O(1) // since no loop is used the algorithm takes constant space to execute\n**Auxiliary Space: **O(1) // since no extra array is used the solution takes up constant space."
      },
      {
        "t": "h",
        "text": "🍎 Minimum Apples to GUARANTEE M Red Apples (ULTRA SIMPLE)"
      },
      {
        "t": "h",
        "text": "Problem ka seedha matlab"
      },
      {
        "t": "li",
        "text": "Tumhe **M red apples** chahiye"
      },
      {
        "t": "li",
        "text": "Tum **bahar se apple ka color nahi dekh sakte**"
      },
      {
        "t": "li",
        "text": "Isliye tumhe **worst case** sochna padega\n (jo apple uthaoge, agar possible hai ki wo green ho, to assume green hi hoga)"
      },
      {
        "t": "h",
        "text": "🧭 Trees ka simple meaning (YEH YAAD RAKH)"
      },
      {
        "t": "table",
        "rows": [
          [
            "Direction",
            "Apple type guarantee"
          ],
          [
            "North (N)",
            "❌ NO red apples"
          ],
          [
            "South (S)",
            "✅ ALL apples are RED"
          ],
          [
            "West (W)",
            "⚠️ At least 1 red per tree"
          ],
          [
            "East (E)",
            "⚠️ At least 1 red per tree"
          ]
        ]
      },
      {
        "t": "li",
        "text": "Har tree me **exactly K apples**"
      },
      {
        "t": "li",
        "text": "West / East me baaki apples green bhi ho sakte hain"
      },
      {
        "t": "h",
        "text": "👀 Visualization (dimag me picture banao)"
      },
      {
        "t": "img",
        "src": "image122.jpg"
      },
      {
        "t": "img",
        "src": "image166.png"
      },
      {
        "t": "p",
        "text": "Socho:"
      },
      {
        "t": "li",
        "text": "South = **safe red zone**"
      },
      {
        "t": "li",
        "text": "West/East = **risky (sirf 1 red guaranteed)**"
      },
      {
        "t": "li",
        "text": "North = **useless for red**"
      },
      {
        "t": "h",
        "text": "🔑 CORE LOGIC (PUZZLE KA HEART)"
      },
      {
        "t": "p",
        "text": "**Guarantee ka matlab = worst case**"
      },
      {
        "t": "p",
        "text": "Agar ek jagah se pakka red milta hai → pehle wahi jao\n Agar sirf 1 red guaranteed hai → poora tree todna padega"
      },
      {
        "t": "h",
        "text": "🧠 STEP-BY-STEP STRATEGY"
      },
      {
        "t": "h",
        "text": "🔴 STEP 1: South se lo (best option)"
      },
      {
        "t": "li",
        "text": "South tree → **sab red**"
      },
      {
        "t": "li",
        "text": "1 South tree = **K guaranteed red apples**"
      },
      {
        "t": "p",
        "text": "👉 Agar"
      },
      {
        "t": "p",
        "text": "M≤S×KM \\le S \\times KM≤S×K"
      },
      {
        "t": "p",
        "text": "toh **sirf M apples uthao**, done ✅"
      },
      {
        "t": "h",
        "text": "🔴 STEP 2: Agar South se kam pad jaye"
      },
      {
        "t": "p",
        "text": "Ab West + East ka use karna padega"
      },
      {
        "t": "li",
        "text": "West/East me:"
      },
      {
        "t": "li",
        "text": "**1 red guaranteed per tree**"
      },
      {
        "t": "li",
        "text": "Baaki green bhi ho sakte hain"
      },
      {
        "t": "li",
        "text": "Guarantee ke liye:\n 👉 **poora tree (K apples) uthana padega**"
      },
      {
        "t": "p",
        "text": "Total guaranteed red:"
      },
      {
        "t": "p",
        "text": "S×K+(W+E)S \\times K + (W + E)S×K+(W+E)"
      },
      {
        "t": "p",
        "text": "Agar"
      },
      {
        "t": "p",
        "text": "M≤S×K+(W+E)M \\le S \\times K + (W + E)M≤S×K+(W+E)"
      },
      {
        "t": "p",
        "text": "toh:"
      },
      {
        "t": "p",
        "text": "Apples picked=S×K+(M−S×K)×K\\text{Apples picked} = S \\times K + (M - S \\times K) \\times KApples picked=S×K+(M−S×K)×K"
      },
      {
        "t": "h",
        "text": "🔴 STEP 3: Agar yeh bhi enough na ho"
      },
      {
        "t": "p",
        "text": "👉 **Guaranteed red possible hi nahi**"
      },
      {
        "t": "p",
        "text": "➡️ Output = **-1**"
      },
      {
        "t": "h",
        "text": "🧪 Example 1 (Easy)"
      },
      {
        "t": "p",
        "text": "**Input**"
      },
      {
        "t": "p",
        "text": "M = 10, K = 15"
      },
      {
        "t": "p",
        "text": "N = 0, S = 1, W = 0, E = 0"
      },
      {
        "t": "p",
        "text": "South me:"
      },
      {
        "t": "li",
        "text": "1 tree × 15 red apples"
      },
      {
        "t": "p",
        "text": "👉 10 ≤ 15\n 👉 Sirf **10 apples uthao**"
      },
      {
        "t": "p",
        "text": "✅ **Answer = 10**"
      },
      {
        "t": "h",
        "text": "🧪 Example 2 (Impossible case)"
      },
      {
        "t": "p",
        "text": "**Input**"
      },
      {
        "t": "p",
        "text": "M = 10, K = 15"
      },
      {
        "t": "p",
        "text": "N = 3, S = 0, W = 1, E = 0"
      },
      {
        "t": "li",
        "text": "South = 0 → no safe red"
      },
      {
        "t": "li",
        "text": "West = 1 tree → **sirf 1 red guaranteed**"
      },
      {
        "t": "li",
        "text": "East = 0"
      },
      {
        "t": "p",
        "text": "👉 Max guaranteed red = **1**"
      },
      {
        "t": "p",
        "text": "❌ 1 < 10\n ➡️ **Answer = -1**"
      },
      {
        "t": "h",
        "text": "🧠 ONE-LINE ME YAAD RAKH (MOST IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**South = full red\n West/East = only 1 red guaranteed\n North = no red**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview me kaise bolna hai"
      },
      {
        "t": "p",
        "text": "“Since apple colors are indistinguishable,\n I consider the worst-case guarantee.\n I first collect from the south where all apples are red,\n then from east and west where only one red per tree is guaranteed.\n If the total guaranteed reds are insufficient, the answer is -1.”"
      },
      {
        "t": "h",
        "text": "🚫 Common Galti"
      },
      {
        "t": "p",
        "text": "❌ West/East se sirf 1 apple utha lena\n ❌ North ko count karna\n ❌ Average case sochna (yahan **guarantee** chahiye)"
      },
      {
        "t": "p",
        "text": "MA30"
      }
    ]
  },
  {
    "id": "p71",
    "title": "Snail and Wall",
    "category": "Bridge, Time & Speed",
    "problem": [
      {
        "t": "p",
        "text": "A snail wishes to reach a water's shore. To do this, it must cross a wall that is 30 feet high. It has a time limit of 30 hours to reach the top of the wall. The time starts as soon as it starts climbing the wall. However, it faces a problem while climbing. Every hour, it climbs the wall 3 feet up, and it slides down 2 feet. This occurs every hour. So, how many hours will it take for the snail to reach the top of the wall?"
      },
      {
        "t": "img",
        "src": "image35.jpg"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution:**"
      },
      {
        "t": "p",
        "text": "Let's think this thoroughly!"
      },
      {
        "t": "li",
        "text": "Every hour the snail climbs up 3 feet, it slides down 2 feet. So, the actual height it is climbing in 1 hour is 1 foot."
      },
      {
        "t": "img",
        "src": "image144.png"
      },
      {
        "t": "li",
        "text": "Similarly, in 25 hours, the snail would have climbed 25 feet, in 26 hours it would have climbed 26 feet and in 27 hours it would have climbed 27 feet, but things change after 27 feet."
      },
      {
        "t": "img",
        "src": "image124.png"
      },
      {
        "t": "li",
        "text": "As we know, the snail covers 3 feet up in 1 hour. So, in the 28th hour, the snail would have climbed 30 feet up the wall and would have reached top of the wall. Therefore the answer to this riddle is 28 hours."
      },
      {
        "t": "p",
        "text": "MA31-MA"
      }
    ]
  },
  {
    "id": "p72",
    "title": "1000 light bulbs switched on/off by 1000 people passing by",
    "category": "Bulbs, Switches & Lights",
    "problem": [],
    "solution": [
      {
        "t": "p",
        "text": "There are 1000 light bulbs and 1000 people. All light bulbs are initially off. Person 1 goes flipping light bulb 1, 2, 3, 4, ... person 2 then flips 2, 4, 6, 8, ... person 3 then 3, 6, 9, ... etc until all 1000 persons have done this. What is the status of light bulbs 25, 93, 576, 132, 605, 26, 45, 37, 36 after all people have flipped their respective light bulbs? Is there a general solution to predict the status of a light bulb? How many light bulbs are on after all 1000 people have gone by?"
      },
      {
        "t": "p",
        "text": "**Explanation:** The key observations are:"
      },
      {
        "t": "li",
        "text": "Person 1 flips the light bulb 1, 2, 3, ... which are multiples of 1."
      },
      {
        "t": "li",
        "text": "Person 2 flips the light bulb 2, 4, 6, ... which are multiples of 2."
      },
      {
        "t": "li",
        "text": "Person 3 flips the light bulb 3, 6, 9, ... which are multiples of 3."
      },
      {
        "t": "li",
        "text": "Similarly, Person 1000 flips the light bulb 1000, which is a multiple of 1000."
      },
      {
        "t": "li",
        "text": "From the above observations, we can say that person i will flip light bulbs which are multiples of i,"
      },
      {
        "t": "li",
        "text": "∀i∈{1,2,3,...,1000}."
      },
      {
        "t": "li",
        "text": "∀i∈{1,2,3,...,1000}."
      },
      {
        "t": "li",
        "text": "Thus, a light bulb j will be flipped by all persons for whom j is a multiple of their person number. In other words, light bulb j will be flipped by all people whose for person number i is a factor of j,"
      },
      {
        "t": "li",
        "text": "∀i,j∈{1,2,3,...,1000}."
      },
      {
        "t": "li",
        "text": "∀i,j∈{1,2,3,...,1000}."
      },
      {
        "t": "li",
        "text": "**Examples: **"
      },
      {
        "t": "li",
        "text": "**(i)** Light Bulb 10 will be flipped by persons 1, 2, 5, 10 whose person numbers are factors of 10."
      },
      {
        "t": "li",
        "text": "**(ii)** Light Bulb 12 will be flipped by persons 1, 2, 3, 4, 6, 12 whose person numbers are factors of 12."
      },
      {
        "t": "li",
        "text": "Thus, light bulb 25 will be flipped by persons 1, 5, 25, so it will be flipped 3 times, which is odd and since initially, all bulbs were \"off\", now light bulb 25 will be \"on\"."
      },
      {
        "t": "li",
        "text": "The light bulb 93 will be flipped by persons 1, 3, 31, 93, so it will be flipped 4 times, which is even and since initially, all bulbs were \"off\", now light bulb 93 will be \"off\"."
      },
      {
        "t": "li",
        "text": "The light bulb 576 will be flipped by persons 1, 2, 3, 4, 6, 8, 9, 12, 16, 18, 24, 32, 36, 48, 64, 72, 96, 144, 192, 288, 576, so it will be flipped 21 times, which is odd and since initially, all bulbs were \"off\", now light bulb 576 will be \"on\"."
      },
      {
        "t": "li",
        "text": "The light bulb 132 will be flipped by persons 1, 2, 3, 4, 6, 11, 12, 22, 33, 44, 66, 132, so it will be flipped 12 times, which is even and since initially, all bulbs were \"off\", now light bulb 132 will be \"off\"."
      },
      {
        "t": "li",
        "text": "The light bulb 605 will be flipped by persons 1, 5, 11, 55, 121, 605, so it will be flipped 6 times, which is even and since initially, all bulbs were \"off\", now light bulb 605 will be \"off\"."
      },
      {
        "t": "li",
        "text": "The light bulb 26 will be flipped by persons 1, 2, 13, 26, so it will be flipped 4 times, which is even and since initially, all bulbs were \"off\", now light bulb 26 will be \"off\"."
      },
      {
        "t": "li",
        "text": "The light bulb 45 will be flipped by persons 1, 3, 5, 9, 15, 45, so it will be flipped 6 times, which is even and since initially, all bulbs were \"off\", now light bulb 45 will be \"off\"."
      },
      {
        "t": "li",
        "text": "The light bulb 37, being the prime numbered bulb, will be flipped by persons 1, 37, so it will be flipped 2 times, which is even and since initially, all bulbs were \"off\", now light bulb 37 will be \"off\"."
      },
      {
        "t": "li",
        "text": "The light bulb 36 will be flipped by persons 1, 2, 3, 4, 6, 9, 12, 18, 36, so it will be flipped 9 times, which is odd and, since initially, all bulbs were \"off\", now light bulb 36 will be \"on\"."
      },
      {
        "t": "h",
        "text": "Setup:"
      },
      {
        "t": "li",
        "text": "1000 bulbs → **sab OFF**"
      },
      {
        "t": "li",
        "text": "1000 log"
      },
      {
        "t": "li",
        "text": "Person 1: 1,2,3,4,… sab flip"
      },
      {
        "t": "li",
        "text": "Person 2: 2,4,6,8,…"
      },
      {
        "t": "li",
        "text": "Person 3: 3,6,9,…"
      },
      {
        "t": "li",
        "text": "…"
      },
      {
        "t": "li",
        "text": "Person 1000: sirf bulb 1000"
      },
      {
        "t": "p",
        "text": "👉 **Flip ka matlab**:"
      },
      {
        "t": "li",
        "text": "OFF → ON"
      },
      {
        "t": "li",
        "text": "ON → OFF"
      },
      {
        "t": "h",
        "text": "🔑 PUZZLE KA HEART (MOST IMPORTANT RULE)"
      },
      {
        "t": "p",
        "text": "💥 **Koi bulb tab ON rahega\n jab usko ODD number of times flip kiya gaya ho**"
      },
      {
        "t": "p",
        "text": "Aur yeh kab hota hai?"
      },
      {
        "t": "p",
        "text": "👉 **Sirf PERFECT SQUARE numbers ke saath**"
      },
      {
        "t": "h",
        "text": "🤯 KYUN? (bahut simple logic)"
      },
      {
        "t": "li",
        "text": "Bulb number = **j**"
      },
      {
        "t": "li",
        "text": "Us bulb ko wahi log flip karenge jo **j ke factors** hain"
      },
      {
        "t": "p",
        "text": "Example:"
      },
      {
        "t": "li",
        "text": "Bulb 10 → factors: 1,2,5,10 → **4 flips (even)** → OFF"
      },
      {
        "t": "li",
        "text": "Bulb 36 → factors: 1,2,3,4,6,9,12,18,36 → **9 flips (odd)** → ON"
      },
      {
        "t": "h",
        "text": "🔥 Important observation"
      },
      {
        "t": "li",
        "text": "Normal numbers ke factors **pair me aate hain**\n (1×36, 2×18, 3×12, …)"
      },
      {
        "t": "li",
        "text": "**Perfect square** me ek factor akela hota hai\n (6×6 in 36)"
      },
      {
        "t": "p",
        "text": "👉 Isliye **sirf squares ke factors odd hote hain**"
      },
      {
        "t": "h",
        "text": "👀 Visualization (dimag me picture banao)"
      },
      {
        "t": "img",
        "src": "image79.jpg"
      },
      {
        "t": "img",
        "src": "image23.png"
      },
      {
        "t": "h",
        "text": "✅ GENERAL SOLUTION (ONE LINE)"
      },
      {
        "t": "p",
        "text": "**Agar bulb number perfect square hai → ON\n warna → OFF**"
      },
      {
        "t": "h",
        "text": "🔍 AB TUMHARE GIVEN BULBS CHECK KARTE HAIN"
      },
      {
        "t": "table",
        "rows": [
          [
            "Bulb No.",
            "Perfect Square?",
            "Final State"
          ],
          [
            "25",
            "5² ✅",
            "ON"
          ],
          [
            "93",
            "❌",
            "OFF"
          ],
          [
            "576",
            "24² ✅",
            "ON"
          ],
          [
            "132",
            "❌",
            "OFF"
          ],
          [
            "605",
            "❌",
            "OFF"
          ],
          [
            "26",
            "❌",
            "OFF"
          ],
          [
            "45",
            "❌",
            "OFF"
          ],
          [
            "37",
            "❌ (prime)",
            "OFF"
          ],
          [
            "36",
            "6² ✅",
            "ON"
          ]
        ]
      },
      {
        "t": "h",
        "text": "🟢 FINAL STATUS ANSWER"
      },
      {
        "t": "li",
        "text": "**ON bulbs**: 25, 576, 36"
      },
      {
        "t": "li",
        "text": "**OFF bulbs**: 93, 132, 605, 26, 45, 37"
      },
      {
        "t": "h",
        "text": "🔢 HOW MANY BULBS ARE ON (OUT OF 1000)?"
      },
      {
        "t": "p",
        "text": "Perfect squares ≤ 1000:"
      },
      {
        "t": "p",
        "text": "12,22,32,…,312=9611^2, 2^2, 3^2, \\dots, 31^2 = 96112,22,32,…,312=961"
      },
      {
        "t": "p",
        "text": "👉 32² = 1024 ❌ (crosses 1000)"
      },
      {
        "t": "h",
        "text": "✅ Total ON bulbs = 31"
      },
      {
        "t": "h",
        "text": "🧠 ONE-LINE YAAD RAKH (EXAM + INTERVIEW)"
      },
      {
        "t": "p",
        "text": "**“Only perfect square numbered bulbs remain ON.”**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview me EXACT kaise bolna hai"
      },
      {
        "t": "p",
        "text": "“Each bulb is toggled once for every divisor it has.\n Only perfect squares have an odd number of divisors,\n so only those bulbs remain on at the end.”"
      },
      {
        "t": "p",
        "text": "💥 Interviewer: “Correct and elegant explanation.”"
      }
    ]
  },
  {
    "id": "p73",
    "title": "Four Alternating Knights",
    "category": "Arrangement & Seating",
    "problem": [
      {
        "t": "h",
        "text": "Initial Position"
      },
      {
        "t": "li",
        "text": "3 × 3 chessboard"
      },
      {
        "t": "li",
        "text": "🔲 **Top-left & top-right** → **Black Knights**"
      },
      {
        "t": "li",
        "text": "🔲 **Bottom-left & bottom-right** → **White Knights**"
      },
      {
        "t": "h",
        "text": "Final Position (Target)"
      },
      {
        "t": "li",
        "text": "Board pe arrangement chahiye:"
      },
      {
        "t": "p",
        "text": "Black  Black"
      },
      {
        "t": "p",
        "text": "White  White"
      },
      {
        "t": "p",
        "text": "(matlab colors alternate / swap ho jaye)"
      },
      {
        "t": "h",
        "text": "👀 Visualization (pehle board ko samjho)"
      },
      {
        "t": "img",
        "src": "image112.jpg"
      },
      {
        "t": "img",
        "src": "image151.png"
      },
      {
        "t": "p",
        "text": "Socho:"
      },
      {
        "t": "li",
        "text": "Board chhota hai (sirf 9 squares)"
      },
      {
        "t": "li",
        "text": "4 knights already occupy 4 corners"
      },
      {
        "t": "li",
        "text": "Beech ke squares limited hain"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🧠 Step 1: Knight ka movement rule (VERY IMPORTANT)"
      },
      {
        "t": "p",
        "text": "Knight:"
      },
      {
        "t": "li",
        "text": "**L-shape move** karta hai\n (2 steps ek direction + 1 step perpendicular)"
      },
      {
        "t": "p",
        "text": "👉 3×3 board par:"
      },
      {
        "t": "li",
        "text": "Knight **bahut hi limited jagah** ja sakta hai"
      },
      {
        "t": "li",
        "text": "Har corner knight ke paas **sirf 2 legal moves** hote hain"
      },
      {
        "t": "h",
        "text": "🧠 Step 2: 3×3 board ka hidden trap"
      },
      {
        "t": "h",
        "text": "Important observation 🔥"
      },
      {
        "t": "li",
        "text": "3×3 board me:"
      },
      {
        "t": "li",
        "text": "Knight **kabhi center square (2,2)** par permanently useful nahi ban sakta"
      },
      {
        "t": "li",
        "text": "Moves **cycle** me phas jaate hain"
      },
      {
        "t": "p",
        "text": "👉 Matlab:"
      },
      {
        "t": "li",
        "text": "Knight kuch squares ke beech hi ghoom sakta hai"
      },
      {
        "t": "li",
        "text": "Sab squares equally reachable nahi hote"
      },
      {
        "t": "h",
        "text": "🧠 Step 3: Try karne par kya hota hai?"
      },
      {
        "t": "p",
        "text": "Puzzle ko logically check karte hain (without exact moves):"
      },
      {
        "t": "li",
        "text": "Tum **3 knights** ko unki correct final position ke paas laa sakte ho"
      },
      {
        "t": "li",
        "text": "**4th knight** ke liye:"
      },
      {
        "t": "li",
        "text": "Ya toh uska target square already occupied hota hai"
      },
      {
        "t": "li",
        "text": "Ya uske paas **legal move hi nahi bachta**"
      },
      {
        "t": "p",
        "text": "👉 Result:"
      },
      {
        "t": "li",
        "text": "Har possible sequence me **ek knight hamesha stuck** ho jaata hai"
      },
      {
        "t": "h",
        "text": "🧠 Core Reason (MOST IMPORTANT)"
      },
      {
        "t": "p",
        "text": "🔴 **3×3 board par knights ke moves symmetric nahi hote**\n 🔴 **Parity + limited mobility** ki wajah se\n 🔴 **4th knight kabhi apni final position tak nahi pahunch pata**"
      },
      {
        "t": "p",
        "text": "Isliye:"
      },
      {
        "t": "li",
        "text": "Chahe jitni koshish kar lo"
      },
      {
        "t": "li",
        "text": "Chahe jitne paths try kar lo\n 👉 **Final configuration achieve hi nahi hoti**"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "🎯 **This puzzle has NO solution**\n ❌ Koi bhi finite sequence of moves se desired final position possible nahi hai"
      },
      {
        "t": "h",
        "text": "🗣️ Interview / Explanation me kaise bolna hai"
      },
      {
        "t": "p",
        "text": "“On a 3×3 board, knight mobility is extremely restricted.\n Although three knights can be positioned correctly,\n the fourth knight always gets trapped due to lack of legal moves.\n Hence, the required final configuration is impossible.”"
      },
      {
        "t": "p",
        "text": "💥 Interviewer: “Good reasoning about constraints.”"
      },
      {
        "t": "h",
        "text": "🧠 ONE-LINE YAAD RAKH (EXAM / INTERVIEW)"
      },
      {
        "t": "p",
        "text": "**“Small boards break knight symmetry — not all swaps are possible.”**"
      },
      {
        "t": "h",
        "text": "🚫 Common Galti (jo log karte hain)"
      },
      {
        "t": "p",
        "text": "❌ Exact move list dhundhne me phas jana\n ❌ Assume kar lena ki solution hoga\n ❌ Board size constraint ignore karna"
      },
      {
        "t": "h",
        "text": "TCS DIGITAL PUZZLE | Lateral Thinking 2"
      },
      {
        "t": "p",
        "text": "Lateral thinking is the most interesting test module of TCS digital hiring process."
      },
      {
        "t": "p",
        "text": "**Problem:**"
      },
      {
        "t": "p",
        "text": "Join all nine dots by drawing minimum number of straight lines. The straight lines must be continuous i.e. one must not lift the pen from the paper once start drawing."
      },
      {
        "t": "img",
        "src": "image109.jpg"
      },
      {
        "t": "p",
        "text": "Before moving towards the solution it is suggested to try it yourself first."
      },
      {
        "t": "p",
        "text": "**Solution:**"
      },
      {
        "t": "p",
        "text": "**Solution:**"
      },
      {
        "t": "p",
        "text": "There can be many possible solutions to this questions. One possible solution is:"
      },
      {
        "t": "img",
        "src": "image237.jpg"
      },
      {
        "t": "p",
        "text": "During the test, candidates need to answer the order of traversal of the dots as if they are number from 1 to 9 in the grid, so the answer is"
      },
      {
        "t": "p",
        "text": "**951236874**"
      },
      {
        "t": "p",
        "text": "For TCS hiring experience and know more about TCS ninja and digital or queries regarding the process, please visit"
      },
      {
        "t": "h",
        "text": "✏️ 9 Dots Puzzle (TCS Digital – Lateral Thinking)"
      },
      {
        "t": "h",
        "text": "Problem (simple words me)"
      },
      {
        "t": "li",
        "text": "3×3 grid me **9 dots**"
      },
      {
        "t": "li",
        "text": "Pen **ek baar uthana mana**"
      },
      {
        "t": "li",
        "text": "**Straight lines** se sab dots connect karne hain"
      },
      {
        "t": "li",
        "text": "**Minimum number of lines** chahiye"
      },
      {
        "t": "h",
        "text": "🔴 Sabse pehle GALAT SOCH (jo 90% log karte hain)"
      },
      {
        "t": "p",
        "text": "❌ “Lines dots ke box ke andar hi honi chahiye”"
      },
      {
        "t": "p",
        "text": "👉 **YEH KAHIN LIKHA NAHI HAI**\n Isliye yeh puzzle lateral thinking ka hai."
      },
      {
        "t": "h",
        "text": "🔑 CORE IDEA (PUZZLE KA HEART)"
      },
      {
        "t": "p",
        "text": "🔥 **Lines ko dots ke box ke bahar extend karna allowed hai**"
      },
      {
        "t": "p",
        "text": "Jaise hi tum yeh maan lete ho — puzzle solve 💥"
      },
      {
        "t": "h",
        "text": "👀 Visualization (dimag me picture banao)"
      },
      {
        "t": "img",
        "src": "image136.jpg"
      },
      {
        "t": "img",
        "src": "image41.jpg"
      },
      {
        "t": "p",
        "text": "Socho 9 dots ko number de diye:"
      },
      {
        "t": "p",
        "text": "1   2   3"
      },
      {
        "t": "p",
        "text": "4   5   6"
      },
      {
        "t": "p",
        "text": "7   8   9"
      },
      {
        "t": "h",
        "text": "🧠 Minimum kitni lines lagti hain?"
      },
      {
        "t": "p",
        "text": "👉 **Sirf 4 straight lines**\n 👉 Pen **ek baar bhi nahi uthta**"
      },
      {
        "t": "h",
        "text": "✍️ Step-by-step Drawing Logic (VERY SIMPLE)"
      },
      {
        "t": "h",
        "text": "🔹 Line 1"
      },
      {
        "t": "p",
        "text": "Start **9** se → diagonal upar jaate hue **5 → 1** cross karo\n (Box ke bahar nikal jao)"
      },
      {
        "t": "h",
        "text": "🔹 Line 2"
      },
      {
        "t": "p",
        "text": "Wahin se right side jao → **2 → 3** cross karo\n (Box ke bahar tak)"
      },
      {
        "t": "h",
        "text": "🔹 Line 3"
      },
      {
        "t": "p",
        "text": "Ab diagonal neeche aao → **6 → 8 → 7** cross karo"
      },
      {
        "t": "h",
        "text": "🔹 Line 4"
      },
      {
        "t": "p",
        "text": "Left side jao → **4** cross karo"
      },
      {
        "t": "p",
        "text": "🎉 **All 9 dots connected, pen bina uthaye**"
      },
      {
        "t": "h",
        "text": "🧮 TCS Test me ANSWER ka format"
      },
      {
        "t": "p",
        "text": "TCS me dots ko **1–9 number** diya hota hai\n Aur tumhe **order of traversal** likhna hota hai."
      },
      {
        "t": "h",
        "text": "✅ Correct traversal order:"
      },
      {
        "t": "p",
        "text": "9 → 5 → 1 → 2 → 3 → 6 → 8 → 7 → 4"
      },
      {
        "t": "h",
        "text": "✍️ Final Answer (as asked):"
      },
      {
        "t": "p",
        "text": "951236874"
      },
      {
        "t": "h",
        "text": "🧠 ONE LINE ME YAAD RAKH (MOST IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**“Puzzle tab solve hota hai jab tum imaginary boundary todte ho.”**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview / HR me kaise bolna hai"
      },
      {
        "t": "p",
        "text": "“The trick is to extend the lines beyond the perceived boundary of the dots.\n Once we allow that, the puzzle can be solved in four continuous straight lines.”"
      },
      {
        "t": "p",
        "text": "💥 Interviewer: “Good lateral thinking.”"
      },
      {
        "t": "h",
        "text": "🚫 Common Galti (jo log fail ho jaate hain)"
      },
      {
        "t": "p",
        "text": "❌ Box ke andar hi lines rakhna\n ❌ 5–6 lines banana\n ❌ Pen uthana\n ❌ Straight line ke jagah curve banana"
      }
    ]
  },
  {
    "id": "p74",
    "title": "100 Cows And Milk",
    "category": "Poison, Pills & Testing",
    "problem": [
      {
        "t": "h",
        "text": "Given:"
      },
      {
        "t": "li",
        "text": "100 cows → numbered **1 to 100**"
      },
      {
        "t": "li",
        "text": "i-th cow gives **i litres milk**"
      },
      {
        "t": "li",
        "text": "10 sons"
      },
      {
        "t": "li",
        "text": "🎯 Goal: **Har son ko equal milk mile**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🧠 STEP 1: Total milk kitna hai?"
      },
      {
        "t": "p",
        "text": "1 se 100 tak numbers ka sum:"
      },
      {
        "t": "p",
        "text": "Total milk=100×1012=5050 litres\\text{Total milk} = \\frac{100 \\times 101}{2} = 5050 \\text{ litres}Total milk=2100×101​=5050 litres"
      },
      {
        "t": "h",
        "text": "🧠 STEP 2: Har son ko kitna milk milna chahiye?"
      },
      {
        "t": "p",
        "text": "5050÷10=505 litres per son5050 \\div 10 = 505 \\text{ litres per son}5050÷10=505 litres per son"
      },
      {
        "t": "p",
        "text": "👉 **Har son = 505 litres**\n 👉 Ab problem ban gayi:\n **1–100 numbers ko 10 groups me baantna, jisme har group ka sum = 505**"
      },
      {
        "t": "h",
        "text": "🔑 CORE IDEA (PUZZLE KA HEART)"
      },
      {
        "t": "p",
        "text": "**Sabse chhota number + sabse bada number = same sum**"
      },
      {
        "t": "p",
        "text": "Jaise:"
      },
      {
        "t": "li",
        "text": "1 + 100 = 101"
      },
      {
        "t": "li",
        "text": "2 + 99 = 101"
      },
      {
        "t": "li",
        "text": "3 + 98 = 101\n …"
      },
      {
        "t": "p",
        "text": "👉 Har aisa pair **101** deta hai"
      },
      {
        "t": "h",
        "text": "👀 Visualization (dimag me imagine kar)"
      },
      {
        "t": "img",
        "src": "image198.jpg"
      },
      {
        "t": "img",
        "src": "image77.jpg"
      },
      {
        "t": "p",
        "text": "Socho:"
      },
      {
        "t": "li",
        "text": "Tum 1 se shuru karke 100 se jod rahe ho"
      },
      {
        "t": "li",
        "text": "Dheere-dheere beech tak aa rahe ho"
      },
      {
        "t": "h",
        "text": "🧠 STEP 3: Ek son ko kaise 505 milega?"
      },
      {
        "t": "p",
        "text": "505 = **5 × 101**"
      },
      {
        "t": "p",
        "text": "👉 Matlab:"
      },
      {
        "t": "li",
        "text": "Har son ko **5 pairs** chahiye"
      },
      {
        "t": "li",
        "text": "Har pair ka sum = 101"
      },
      {
        "t": "li",
        "text": "Total = 505"
      },
      {
        "t": "h",
        "text": "✅ FINAL DISTRIBUTION (EXACT ANSWER)"
      },
      {
        "t": "h",
        "text": "🧑‍👦 Sons ko cows ka division:"
      },
      {
        "t": "p",
        "text": "Son 1  →  1, 2, 3, 4, 5,   96, 97, 98, 99, 100"
      },
      {
        "t": "p",
        "text": "Son 2  →  6, 7, 8, 9, 10,  91, 92, 93, 94, 95"
      },
      {
        "t": "p",
        "text": "Son 3  →  11, 12, 13, 14, 15,  86, 87, 88, 89, 90"
      },
      {
        "t": "p",
        "text": "Son 4  →  16, 17, 18, 19, 20,  81, 82, 83, 84, 85"
      },
      {
        "t": "p",
        "text": "Son 5  →  21, 22, 23, 24, 25,  76, 77, 78, 79, 80"
      },
      {
        "t": "p",
        "text": "Son 6  →  26, 27, 28, 29, 30,  71, 72, 73, 74, 75"
      },
      {
        "t": "p",
        "text": "Son 7  →  31, 32, 33, 34, 35,  66, 67, 68, 69, 70"
      },
      {
        "t": "p",
        "text": "Son 8  →  36, 37, 38, 39, 40,  61, 62, 63, 64, 65"
      },
      {
        "t": "p",
        "text": "Son 9  →  41, 42, 43, 44, 45,  56, 57, 58, 59, 60"
      },
      {
        "t": "p",
        "text": "Son 10 →  46, 47, 48, 49, 50,  51, 52, 53, 54, 55"
      },
      {
        "t": "p",
        "text": "👉 Har son ke paas:"
      },
      {
        "t": "li",
        "text": "10 cows"
      },
      {
        "t": "li",
        "text": "Milk = **505 litres**"
      },
      {
        "t": "h",
        "text": "🧠 ONE-LINE ME YAAD RAKH (MOST IMPORTANT)"
      },
      {
        "t": "p",
        "text": "**“Smallest numbers ko largest numbers ke saath pair karo.”**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview me kaise bolna hai 🔥"
      },
      {
        "t": "p",
        "text": "“I first calculate the total milk and divide it equally.\n Then I pair the smallest and largest numbered cows so that each pair gives the same milk.\n By assigning five such pairs to each son, everyone gets exactly 505 litres.”"
      },
      {
        "t": "p",
        "text": "💥 Interviewer: “Nice partitioning logic.”"
      },
      {
        "t": "h",
        "text": "🚫 Common Galti"
      },
      {
        "t": "p",
        "text": "❌ Random grouping\n ❌ Sirf continuous numbers dena\n ❌ Pairing logic miss karna"
      }
    ]
  },
  {
    "id": "p75",
    "title": "One Mile on the Globe",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "h",
        "text": "Rule:"
      },
      {
        "t": "p",
        "text": "Tum ek jagah khade ho aur:\n 1️⃣ **1 mile South** jaate ho\n 2️⃣ **1 mile East** jaate ho\n 3️⃣ **1 mile North** jaate ho"
      },
      {
        "t": "p",
        "text": "👉 End me **bilkul wahi jagah** par wapas aana hai."
      },
      {
        "t": "p",
        "text": "Question:\n 👉 **Aise kitne points Earth par possible hain?**"
      },
      {
        "t": "h",
        "text": "👀 Visualization (dimag me picture banao)"
      },
      {
        "t": "img",
        "src": "image148.jpg"
      },
      {
        "t": "img",
        "src": "image71.jpg"
      },
      {
        "t": "img",
        "src": "image64.jpg"
      },
      {
        "t": "p",
        "text": "Socho Earth ek gol ball hai:"
      },
      {
        "t": "li",
        "text": "Upar = **North Pole**"
      },
      {
        "t": "li",
        "text": "Neeche = **South Pole**"
      },
      {
        "t": "li",
        "text": "East/West = gol-gol ghoomna"
      },
      {
        "t": "h",
        "text": "🧠 Case 1: North Pole (sabse easy)"
      },
      {
        "t": "p",
        "text": "Start = **North Pole**"
      },
      {
        "t": "p",
        "text": "1️⃣ 1 mile South → pole se thoda neeche\n 2️⃣ 1 mile East → gol-gol ghoom liya\n 3️⃣ 1 mile North → **wapas North Pole**"
      },
      {
        "t": "p",
        "text": "✅ Start point mil gaya"
      },
      {
        "t": "p",
        "text": "👉 **North Pole ek valid point hai**"
      },
      {
        "t": "h",
        "text": "🧠 Case 2: South Pole ❌ (log yahin galti karte hain)"
      },
      {
        "t": "p",
        "text": "Start = South Pole"
      },
      {
        "t": "p",
        "text": "1️⃣ 1 mile South → wahi South Pole\n 2️⃣ 1 mile East → wahi South Pole\n 3️⃣ 1 mile North → **South Pole se bahar nikal gaye**"
      },
      {
        "t": "p",
        "text": "❌ Start point par wapas nahi aaye"
      },
      {
        "t": "p",
        "text": "👉 **South Pole NOT valid**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🧠 Case 3: YAHI REAL TRICK HAI 🔥"
      },
      {
        "t": "p",
        "text": "Ab South Pole ke **thoda upar** ek imaginary line (latitude) socho 👇"
      },
      {
        "t": "h",
        "text": "Special baat:"
      },
      {
        "t": "li",
        "text": "Is latitude ka **poora circle = 1 mile**"
      },
      {
        "t": "p",
        "text": "Matlab:"
      },
      {
        "t": "li",
        "text": "Agar tum **1 mile East** jao\n 👉 tum **poora round complete** karke\n 👉 **wahi jagah wapas aa jaoge**"
      },
      {
        "t": "h",
        "text": "Ab steps dekho (dhyaan se):"
      },
      {
        "t": "p",
        "text": "Start = is special latitude par koi bhi point"
      },
      {
        "t": "p",
        "text": "1️⃣ **1 mile South** → **South Pole**\n 2️⃣ **1 mile East** → pole par ghoomna, position same\n 3️⃣ **1 mile North** → **wapas wahi latitude aur wahi point**"
      },
      {
        "t": "p",
        "text": "🎉 **Perfect loop complete**"
      },
      {
        "t": "h",
        "text": "🤯 Ab sabse important baat"
      },
      {
        "t": "li",
        "text": "Is special latitude par **sirf ek point nahi**"
      },
      {
        "t": "li",
        "text": "Balki **us circle ka har point valid hai**"
      },
      {
        "t": "p",
        "text": "Aur aisi latitude:"
      },
      {
        "t": "li",
        "text": "sirf ek nahi"
      },
      {
        "t": "li",
        "text": "**infinitely many** ho sakti hain\n (jahan circumference = 1 mile, 1/2 mile, 1/3 mile, …)"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "h",
        "text": "🎯 Answer: INFINITELY MANY POINTS"
      },
      {
        "t": "p",
        "text": "Includes:"
      },
      {
        "t": "li",
        "text": "✅ **North Pole**"
      },
      {
        "t": "li",
        "text": "✅ **South Pole ke paas infinitely many points**"
      },
      {
        "t": "li",
        "text": "❌ South Pole itself excluded"
      },
      {
        "t": "h",
        "text": "🧠 ONE-LINE ME YAAD RAKH (INTERVIEW GOLD)"
      },
      {
        "t": "p",
        "text": "**“North Pole + infinitely many points just north of the South Pole.”**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview me kaise bolna hai"
      },
      {
        "t": "p",
        "text": "“The North Pole trivially satisfies the condition.\n Additionally, there are infinitely many points near the South Pole where one mile east completes a full rotation.\n Hence, there are infinitely many such points.”"
      },
      {
        "t": "p",
        "text": "💥 Interviewer: “Classic puzzle, good explanation.”"
      },
      {
        "t": "h",
        "text": "🚫 Common Galti"
      },
      {
        "t": "p",
        "text": "❌ Sirf North Pole bol dena\n ❌ South Pole include kar lena\n ❌ East–West ko straight line samajh lena"
      },
      {
        "t": "h",
        "text": "🔥 Quick check (bas soch ke bata):"
      },
      {
        "t": "p",
        "text": "👉 Agar order hota\n **1 mile North → 1 mile East → 1 mile South**,\n toh answer change hota?"
      },
      {
        "t": "p",
        "text": "👉 **Nahi**, same logic apply hoti 😄"
      },
      {
        "t": "p",
        "text": "Agar chahe toh next:"
      },
      {
        "t": "li",
        "text": "Geometry riddles"
      },
      {
        "t": "li",
        "text": "Earth / sphere puzzles"
      },
      {
        "t": "li",
        "text": "TCS / FAANG lateral thinking"
      },
      {
        "t": "p",
        "text": "sab isi **easy language** me kara dunga bhai 💪"
      },
      {
        "t": "h",
        "text": "PUZZLE | Lateral Thinking"
      },
      {
        "t": "p",
        "text": "**Problem: **Move 3 matchsticks from the given set of matchsticks arranged as shown in the figure, to make 3 square boxes."
      },
      {
        "t": "img",
        "src": "image48.jpg"
      },
      {
        "t": "p",
        "text": "There can be many possible solutions to this questions. One possible solution is:"
      },
      {
        "t": "img",
        "src": "image196.jpg"
      },
      {
        "t": "h",
        "text": "Given:"
      },
      {
        "t": "li",
        "text": "Matchsticks already arranged (figure jaisa)"
      },
      {
        "t": "li",
        "text": "Tumhe **sirf 3 matchsticks move** karne hain"
      },
      {
        "t": "li",
        "text": "🎯 Goal: **3 perfect square boxes banana**"
      },
      {
        "t": "h",
        "text": "🔴 Sabse pehle common GALAT SOCH"
      },
      {
        "t": "p",
        "text": "❌ “Sab squares same size ke hone chahiye”\n ❌ “Squares sirf side-by-side hi ban sakte hain”"
      },
      {
        "t": "p",
        "text": "👉 **Yeh kahin bhi likha nahi hai**\n Isliye yeh **lateral thinking puzzle** hai."
      },
      {
        "t": "h",
        "text": "🔑 CORE IDEA (PUZZLE KA HEART)"
      },
      {
        "t": "p",
        "text": "🔥 **Squares alag-alag size ke ho sakte hain**\n 🔥 **Squares overlap / share sides kar sakte hain**"
      },
      {
        "t": "p",
        "text": "Bas jaise hi yeh maan liya — solution mil jaata hai 😄"
      },
      {
        "t": "h",
        "text": "👀 Visualization (dimag me imagine kar)"
      },
      {
        "t": "img",
        "src": "image185.jpg"
      },
      {
        "t": "img",
        "src": "image138.jpg"
      },
      {
        "t": "img",
        "src": "image190.png"
      },
      {
        "t": "p",
        "text": "Socho:"
      },
      {
        "t": "li",
        "text": "Ek bada square"
      },
      {
        "t": "li",
        "text": "Uske andar / paas chhote squares"
      },
      {
        "t": "li",
        "text": "Kuch sides shared"
      },
      {
        "t": "h",
        "text": "🧠 STEP-BY-STEP SOLUTION (NO CONFUSION)"
      },
      {
        "t": "p",
        "text": "**Exact original figure har jagah thoda alag hota hai**,\n isliye main **logic bata raha hoon**, jo har version me kaam karta hai."
      },
      {
        "t": "h",
        "text": "🟢 Step 1: Ek side ko todna"
      },
      {
        "t": "li",
        "text": "Existing arrangement me jo **extra / open side** hai"
      },
      {
        "t": "li",
        "text": "Wahan se **1 matchstick uthao**"
      }
    ]
  },
  {
    "id": "p76",
    "title": "The Counters and Board",
    "category": "Shapes & Matchsticks",
    "problem": [
      {
        "t": "h",
        "text": "Given:"
      },
      {
        "t": "li",
        "text": "Board = **n × n**"
      },
      {
        "t": "li",
        "text": "Counters = **2n**"
      },
      {
        "t": "li",
        "text": "Condition:"
      },
      {
        "t": "li",
        "text": "❌ Kisi bhi **row** me 2 se zyada counters nahi"
      },
      {
        "t": "li",
        "text": "❌ Kisi bhi **column** me 2 se zyada counters nahi"
      },
      {
        "t": "li",
        "text": "❌ Kisi bhi **diagonal** me 2 se zyada counters nahi"
      },
      {
        "t": "li",
        "text": "n > 1"
      },
      {
        "t": "p",
        "text": "🎯 Goal:\n 👉 **2n counters ko aise place karo ki rules break na ho**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 STEP 1: Sabse important observation (PUZZLE KA HEART)"
      },
      {
        "t": "p",
        "text": "Socho logically 👇"
      },
      {
        "t": "li",
        "text": "Total rows = n"
      },
      {
        "t": "li",
        "text": "Total columns = n"
      },
      {
        "t": "li",
        "text": "Total counters = 2n"
      },
      {
        "t": "p",
        "text": "Agar:"
      },
      {
        "t": "li",
        "text": "kisi row me **sirf 1** counter hota\n → total counters ≤ n ❌ (kam pad jaate)"
      },
      {
        "t": "p",
        "text": "Isliye:"
      },
      {
        "t": "p",
        "text": "🔥 **Har row me EXACTLY 2 counters hone chahiye**\n 🔥 **Har column me bhi EXACTLY 2 counters hone chahiye**"
      },
      {
        "t": "p",
        "text": "Bas yahin se poora solution nikalta hai."
      },
      {
        "t": "h",
        "text": "🧠 Ab 2 cases bante hain"
      },
      {
        "t": "li",
        "text": "**Case 1:** n even"
      },
      {
        "t": "li",
        "text": "**Case 2:** n odd"
      },
      {
        "t": "p",
        "text": "Dono ka idea same hai, bas placement thoda alag."
      },
      {
        "t": "h",
        "text": "🟢 CASE 1: n EVEN (n = 2k)"
      },
      {
        "t": "h",
        "text": "IDEA:"
      },
      {
        "t": "li",
        "text": "Board ko **left half** aur **right half** me divide karo"
      },
      {
        "t": "li",
        "text": "Dono halves me **same pattern** rakho"
      },
      {
        "t": "li",
        "text": "Rows ko **pair** me use karo: (1,2), (3,4), (5,6)…"
      },
      {
        "t": "h",
        "text": "📌 Placement rule (simple words me):"
      },
      {
        "t": "li",
        "text": "Column 1 & (k+1): rows 1,2"
      },
      {
        "t": "li",
        "text": "Column 2 & (k+2): rows 3,4"
      },
      {
        "t": "li",
        "text": "Column 3 & (k+3): rows 5,6"
      },
      {
        "t": "li",
        "text": "…"
      },
      {
        "t": "li",
        "text": "Column k & (2k): rows (n−1, n)"
      },
      {
        "t": "p",
        "text": "👉 Isse:"
      },
      {
        "t": "li",
        "text": "Har row = 2 counters ✅"
      },
      {
        "t": "li",
        "text": "Har column = 2 counters ✅"
      },
      {
        "t": "li",
        "text": "Diagonals me bhi >2 nahi aate ✅"
      },
      {
        "t": "h",
        "text": "👀 Visualization (n = 8 example)"
      },
      {
        "t": "img",
        "src": "image100.jpg"
      },
      {
        "t": "img",
        "src": "image10.png"
      },
      {
        "t": "img",
        "src": "image150.jpg"
      },
      {
        "t": "p",
        "text": "Socho:"
      },
      {
        "t": "li",
        "text": "8×8 board"
      },
      {
        "t": "li",
        "text": "16 counters"
      },
      {
        "t": "li",
        "text": "Rows ko pair karke columns me distribute kar diya"
      },
      {
        "t": "h",
        "text": "🟢 CASE 2: n ODD (n = 2k + 1)"
      },
      {
        "t": "p",
        "text": "Yahan thoda twist hai 🧠"
      },
      {
        "t": "h",
        "text": "IDEA:"
      },
      {
        "t": "li",
        "text": "Beech ka **central column** alag treat karna padega"
      },
      {
        "t": "li",
        "text": "Baaki left aur right parts **mirror image** honge"
      },
      {
        "t": "h",
        "text": "📌 Placement rule (step-by-step):"
      },
      {
        "t": "li",
        "text": "Column 1 → rows 1,2"
      },
      {
        "t": "li",
        "text": "Column 2 → rows 3,4"
      },
      {
        "t": "li",
        "text": "…"
      },
      {
        "t": "li",
        "text": "Column k → rows (n−2, n−1)"
      },
      {
        "t": "li",
        "text": "Rows **1 and n** me 2 counters"
      },
      {
        "t": "li",
        "text": "Left part ka **mirror**"
      },
      {
        "t": "li",
        "text": "Column k+2 → rows 2,3"
      },
      {
        "t": "li",
        "text": "Column k+3 → rows 4,5"
      },
      {
        "t": "li",
        "text": "…"
      },
      {
        "t": "li",
        "text": "Last column → rows (n−1, n)"
      },
      {
        "t": "h",
        "text": "👀 Visualization (n = 7 example)"
      },
      {
        "t": "img",
        "src": "image139.png"
      },
      {
        "t": "h",
        "text": "✅ WHY THIS WORKS (ONE-LINE LOGIC)"
      },
      {
        "t": "p",
        "text": "**Rows are paired, columns are balanced,\n and symmetry ensures diagonals never exceed 2 counters.**"
      },
      {
        "t": "h",
        "text": "🧠 ONE-LINE YAAD RAKH (INTERVIEW GOLD)"
      },
      {
        "t": "p",
        "text": "**“Since there are 2n counters, each row and column must contain exactly two counters.”**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview me kaise bolna hai"
      },
      {
        "t": "p",
        "text": "“Because there are 2n counters on an n×n board,\n each row and column must contain exactly two counters.\n By pairing rows and placing counters symmetrically across columns,\n we ensure that no row, column, or diagonal has more than two counters.”"
      },
      {
        "t": "p",
        "text": "💥 Interviewer: “Good constructive reasoning.”"
      },
      {
        "t": "h",
        "text": "🚫 Common Galti"
      },
      {
        "t": "p",
        "text": "❌ Random placement\n ❌ Diagonal constraint ignore karna\n ❌ Even–odd n ka difference na samajhna"
      }
    ]
  },
  {
    "id": "p77",
    "title": "Six Matches",
    "category": "Shapes & Matchsticks",
    "problem": [
      {
        "t": "p",
        "text": "Given six matchsticks. The task is that you have to rearrange them to make nothing."
      },
      {
        "t": "img",
        "src": "image114.png"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution:**"
      },
      {
        "t": "p",
        "text": "**Approach 1: **The puzzle is to make something from the 6 matches which represents nothing. We have to arrange the 6 matches in some particular order like the mention below:"
      },
      {
        "t": "img",
        "src": "image130.png"
      },
      {
        "t": "p",
        "text": "**Approach 2 :** 0 indicates nothing."
      },
      {
        "t": "img",
        "src": "image147.png"
      }
    ]
  },
  {
    "id": "p78",
    "title": "Find the Initial Money",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "h",
        "text": "Rule (har temple par):"
      },
      {
        "t": "li",
        "text": "Pocket ka paisa **double** hota hai"
      },
      {
        "t": "li",
        "text": "Bahar nikalte waqt **₹100 donate** karta hai"
      },
      {
        "t": "li",
        "text": "Total temples = **4**"
      },
      {
        "t": "li",
        "text": "Last temple ke baad **₹0 bacha**"
      },
      {
        "t": "p",
        "text": "👉 Question: **Shuru me kitne paise the?**"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 TRICK (PUZZLE KA HEART)"
      },
      {
        "t": "p",
        "text": "Jab end me paisa **0** ho,\n toh hum **peeche se ya algebra se** calculate karte hain."
      },
      {
        "t": "p",
        "text": "Yahan algebra easy hai, wahi use karte hain."
      },
      {
        "t": "h",
        "text": "🧠 Step-by-step (SLOW & CLEAR)"
      },
      {
        "t": "h",
        "text": "Maan lo:"
      },
      {
        "t": "p",
        "text": "👉 **Initial money = x**"
      },
      {
        "t": "h",
        "text": "🛕 1st Temple"
      },
      {
        "t": "li",
        "text": "Andar jaate hi → paisa = **2x**"
      },
      {
        "t": "li",
        "text": "Bahar nikalte waqt → ₹100 donate"
      },
      {
        "t": "p",
        "text": "👉 Bacha:"
      },
      {
        "t": "p",
        "text": "2x−1002x - 1002x−100"
      },
      {
        "t": "h",
        "text": "🛕 2nd Temple"
      },
      {
        "t": "li",
        "text": "Andar jaate hi → paisa double:"
      },
      {
        "t": "p",
        "text": "2(2x−100)=4x−2002(2x - 100) = 4x - 2002(2x−100)=4x−200"
      },
      {
        "t": "li",
        "text": "Donate ₹100"
      },
      {
        "t": "p",
        "text": "👉 Bacha:"
      },
      {
        "t": "p",
        "text": "4x−3004x - 3004x−300"
      },
      {
        "t": "h",
        "text": "🛕 3rd Temple"
      },
      {
        "t": "li",
        "text": "Andar jaate hi → double:"
      },
      {
        "t": "p",
        "text": "2(4x−300)=8x−6002(4x - 300) = 8x - 6002(4x−300)=8x−600"
      },
      {
        "t": "li",
        "text": "Donate ₹100"
      },
      {
        "t": "p",
        "text": "👉 Bacha:"
      },
      {
        "t": "p",
        "text": "8x−7008x - 7008x−700"
      },
      {
        "t": "h",
        "text": "🛕 4th Temple"
      },
      {
        "t": "li",
        "text": "Andar jaate hi → double:"
      },
      {
        "t": "p",
        "text": "2(8x−700)=16x−14002(8x - 700) = 16x - 14002(8x−700)=16x−1400"
      },
      {
        "t": "li",
        "text": "Donate ₹100"
      },
      {
        "t": "p",
        "text": "👉 Bacha:"
      },
      {
        "t": "p",
        "text": "16x−150016x - 150016x−1500"
      },
      {
        "t": "h",
        "text": "🧮 Ab condition lagao"
      },
      {
        "t": "p",
        "text": "Question kehta hai:"
      },
      {
        "t": "p",
        "text": "**Last temple ke baad pocket empty hai**"
      },
      {
        "t": "p",
        "text": "Matlab:"
      },
      {
        "t": "p",
        "text": "16x−1500=016x - 1500 = 016x−1500=0"
      },
      {
        "t": "p",
        "text": "Solve karo:"
      },
      {
        "t": "p",
        "text": "16x=150016x = 150016x=1500 x=150016=93.75x = \\frac{1500}{16} = 93.75x=161500​=93.75"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "🎯 **Rama ke paas initially ₹93.75 the**"
      },
      {
        "t": "h",
        "text": "🧠 ONE-LINE YAAD RAKH (INTERVIEW GOLD)"
      },
      {
        "t": "p",
        "text": "**“Har step me double hota hai aur 100 minus hota hai — last me zero rakh ke initial nikal lo.”**"
      },
      {
        "t": "h",
        "text": "🗣️ Interview me kaise bolna hai"
      },
      {
        "t": "p",
        "text": "“I assume the initial amount as x, apply the doubling and donation rule for each temple, and equate the final amount to zero. Solving the equation gives the initial amount as ₹93.75.”"
      }
    ]
  },
  {
    "id": "p79",
    "title": "How much he had initially?",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "p",
        "text": "1st Temple: As soon as he enters the temple, his money is doubled to 2x. On his way out he donates Rs. 100. Therefore, he is left with Rs. Rs. (2x - 100). 2nd Temple: As soon as he enters the temple, his money is doubled to 2(2x - 100). On his way out he donates another Rs. 100 and he is left out with Rs. (4x - 300) 3rd Temple: As soon as he enters the temple, his money is doubled to 2(4x - 300). On his way out he donates another Rs. 100 and he is left with Rs. (8x - 700) 4th Temple: As soon as he enters the temple, his money is doubled to 2(8x - 700). On his way out he donates another Rs. 100 and he is left with Rs. (16x - 1500). According to the question, after his last visit, he completely runs out of money. Therefore, => 16x - 1500 = 0; => x = 1500/16; => x = 93.75 💰 Puzzle: Find the Initial Money (ULTRA SIMPLE) Rule (har temple par): 1. Pocket ka paisa double hota hai 2. Bahar…"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "✅ FINAL ANSWER 🎯 Rama ke paas initially ₹93.75 the 🧠 ONE-LINE YAAD RAKH (INTERVIEW GOLD) “Har step me double hota hai aur 100 minus hota hai — last me zero rakh ke initial nikal lo.” 🗣️ Interview me kaise bolna hai “I assume the initial amount as x, apply the doubling and donation rule for each temple, and equate the final amount to zero. Solving the equation gives the initial amount as ₹93.75.”"
      }
    ]
  },
  {
    "id": "p80",
    "title": "3 cuts to cut round cake into 8 equal pieces",
    "category": "Shapes & Matchsticks",
    "problem": [
      {
        "t": "p",
        "text": "A birthday cake arrives at a hotel party with eight guests eager to eat, but there’s time for only three quick straight cuts. Can the cake be divided into eight equal pieces with just three cuts?"
      },
      {
        "t": "img",
        "src": "image140.png"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "**Solution:**"
      },
      {
        "t": "p",
        "text": "**Observation: **Imagine the cake as a 3D object. First, make two straight cuts across the top at right angles to each other; this gives you four equal parts. Then, make one horizontal cut through the middle of the cake to split those parts in half. Now you have eight equal pieces, no need to stack or move anything around."
      },
      {
        "t": "img",
        "src": "image67.png"
      },
      {
        "t": "img",
        "src": "image189.png"
      },
      {
        "t": "p",
        "text": "The solution can be divided into 3 basic steps. But apart from this, there are also other methods of executing this task."
      },
      {
        "t": "p",
        "text": "**Step 1: **Make the first straight cut across the top surface along a diameter, splitting the cake into two equal semicircles."
      },
      {
        "t": "p",
        "text": "**Step 2: **Make a second straight cut across the surface, perpendicular to the first and also through the diameter, creating four equal quarters in the top view."
      },
      {
        "t": "p",
        "text": "**Step 3: **Make one clean horizontal cut through the middle of the cake’s height, turning the four quarters into eight equal slices, using your third and final cut. You will end up with 8 pieces of cake ."
      },
      {
        "t": "p",
        "text": "**Note: **There are other methods too to complete this task."
      }
    ]
  },
  {
    "id": "p81",
    "title": "Two Creepers Climbing a Tree",
    "category": "River Crossing",
    "problem": [
      {
        "t": "h",
        "text": "Given:"
      },
      {
        "t": "h",
        "text": "Dono creepers same point se start karte hain (ground)"
      },
      {
        "t": "h",
        "text": "Tree = cylindrical"
      },
      {
        "t": "h",
        "text": "Directions:"
      },
      {
        "t": "h",
        "text": "Ek clockwise"
      },
      {
        "t": "h",
        "text": "Dusra counter-clockwise"
      },
      {
        "t": "h",
        "text": "Rose = 3 full twists"
      },
      {
        "t": "h",
        "text": "Jasmine = 5 full twists"
      },
      {
        "t": "h",
        "text": "Question:\n 👉 Bottom (start) aur top (branch) ko chhod ke,\n 👉 kitni baar cross karte hain?"
      }
    ],
    "solution": [
      {
        "t": "h",
        "text": "🔑 STEP 1: Vertical height ko bhool jao (IMPORTANT TRICK)"
      },
      {
        "t": "h",
        "text": "🔥 Height ek illusion hai"
      },
      {
        "t": "h",
        "text": "Creepers:"
      },
      {
        "t": "h",
        "text": "Same height se start"
      },
      {
        "t": "h",
        "text": "Same height pe end"
      },
      {
        "t": "h",
        "text": "Isliye:"
      },
      {
        "t": "h",
        "text": "Sirf angular motion (round-round) matter karti hai"
      },
      {
        "t": "h",
        "text": "👀 Visualization (tree ko khol ke socho)"
      },
      {
        "t": "img",
        "src": "image53.jpg"
      },
      {
        "t": "h",
        "text": "Socho:"
      },
      {
        "t": "h",
        "text": "Tree ko cut karke khol diya"
      },
      {
        "t": "h",
        "text": "Ab dono creepers circle ke edge par chal rahe hain"
      },
      {
        "t": "h",
        "text": "Ek right, ek left"
      },
      {
        "t": "h",
        "text": "Bilkul clock ke hands jaisa (but opposite direction)"
      },
      {
        "t": "h",
        "text": "🧠 STEP 2: Angular speed samjho"
      },
      {
        "t": "h",
        "text": "Jasmine → 5 rounds"
      },
      {
        "t": "h",
        "text": "Rose → 3 rounds"
      },
      {
        "t": "h",
        "text": "Matlab:"
      },
      {
        "t": "h",
        "text": "Jasmine speed = 5w"
      },
      {
        "t": "h",
        "text": "Rose speed = 3w"
      },
      {
        "t": "h",
        "text": "(w = koi bhi angular unit, value matter nahi karti)"
      },
      {
        "t": "h",
        "text": "🧠 STEP 3: Kab cross karte hain?"
      },
      {
        "t": "h",
        "text": "Crossing tab hoti hai jab:"
      },
      {
        "t": "h",
        "text": "Dono milke 360° ka gap cover kar lete hain"
      },
      {
        "t": "h",
        "text": "Relative speed:"
      },
      {
        "t": "h",
        "text": "5w+3w=8w5w + 3w = 8w5w+3w=8w"
      },
      {
        "t": "h",
        "text": "👉 First crossing ka time:"
      },
      {
        "t": "h",
        "text": "t=3608wt = \\frac{360}{8w}t=8w360​"
      },
      {
        "t": "h",
        "text": "🧠 STEP 4: Total time kitna hai?"
      },
      {
        "t": "h",
        "text": "Jasmine ne 5 full rounds kiye:"
      },
      {
        "t": "h",
        "text": "Total angle=5×360=1800°\\text{Total angle} = 5 × 360 = 1800°Total angle=5×360=1800°"
      },
      {
        "t": "h",
        "text": "Time:"
      },
      {
        "t": "h",
        "text": "Total time=18005w=360w\\text{Total time} = \\frac{1800}{5w} = \\frac{360}{w}Total time=5w1800​=w360​"
      },
      {
        "t": "h",
        "text": "🧮 STEP 5: Total crossings nikaalo"
      },
      {
        "t": "h",
        "text": "Crossings=Total timeTime between crossings=360/w360/(8w)=8\\text{Crossings} = \\frac{\\text{Total time}}{\\text{Time between crossings}} = \\frac{360/w}{360/(8w)} = 8Crossings=Time between crossingsTotal time​=360/(8w)360/w​=8"
      },
      {
        "t": "h",
        "text": "⚠️ Last important detail"
      },
      {
        "t": "h",
        "text": "Yeh 8 coincidences me:"
      },
      {
        "t": "h",
        "text": "1 at start (bottom) ❌"
      },
      {
        "t": "h",
        "text": "1 at end (top) ❌"
      },
      {
        "t": "h",
        "text": "👉 Question bola:"
      },
      {
        "t": "h",
        "text": "Exclude bottom and top"
      },
      {
        "t": "h",
        "text": "So:"
      },
      {
        "t": "h",
        "text": "8−1=78 - 1 = \\boxed{7}8−1=7​"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "h",
        "text": "🎯 They cross each other 7 times\n (excluding the bottom and the top)"
      },
      {
        "t": "h",
        "text": "🧠 ONE-LINE YAAD RAKH (INTERVIEW GOLD)"
      },
      {
        "t": "h",
        "text": "“Crossings = sum of twists − 1”\n 👉 (5 + 3 − 1 = 7)"
      },
      {
        "t": "h",
        "text": "🗣️ Interview me kaise bolna hai"
      },
      {
        "t": "h",
        "text": "“Ignoring height, the problem reduces to two points moving in opposite directions around a circle.\n With angular speeds proportional to 5 and 3, they coincide 8 times in total,\n and excluding the start and end points, they cross 7 times.”"
      },
      {
        "t": "h",
        "text": "💥 Interviewer: “Nice reduction of the problem.”"
      },
      {
        "t": "h",
        "text": "🌿 Two Creepers Puzzle — NO PHYSICS VERSION"
      },
      {
        "t": "h",
        "text": "🧠 Bas itna yaad rakh:"
      },
      {
        "t": "li",
        "text": "Rose = **3 chakkar**"
      },
      {
        "t": "li",
        "text": "Jasmine = **5 chakkar**"
      },
      {
        "t": "li",
        "text": "Dono **ulta direction** me ghoom rahe hain"
      },
      {
        "t": "li",
        "text": "Same jagah se start"
      },
      {
        "t": "li",
        "text": "Same jagah par end"
      },
      {
        "t": "h",
        "text": "👀 Sabse pehle TREE ko bhool jao"
      },
      {
        "t": "p",
        "text": "Tree ko side me rakh do ❌🌳\n Ab socho:"
      },
      {
        "t": "p",
        "text": "👉 **Dono ek gol track par chal rahe hain**\n 👉 Ek left ja raha\n 👉 Ek right ja raha"
      },
      {
        "t": "p",
        "text": "Bilkul **circular running track** jaisa 🏃‍♂️🏃‍♀️"
      },
      {
        "t": "img",
        "src": "image129.jpg"
      },
      {
        "t": "h",
        "text": "🔑 IMPORTANT RULE (BAS YAHI PUZZLE HAI)"
      },
      {
        "t": "p",
        "text": "❗ Jab bhi dono **same jagah milte hain**\n 👉 **wo ek crossing hoti hai**"
      },
      {
        "t": "h",
        "text": "🧠 Ab counting karo (SLOWLY)"
      },
      {
        "t": "h",
        "text": "Jasmine:"
      },
      {
        "t": "li",
        "text": "Poore track ke **5 round**"
      },
      {
        "t": "h",
        "text": "Rose:"
      },
      {
        "t": "li",
        "text": "Poore track ke **3 round**"
      },
      {
        "t": "h",
        "text": "🤯 Magic observation (YEH YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**Ulta direction me ghoomne par**\n jitne total rounds hote hain,\n **utni baar milte hain**"
      },
      {
        "t": "p",
        "text": "Total rounds:"
      },
      {
        "t": "p",
        "text": "5+3=85 + 3 = 85+3=8"
      },
      {
        "t": "p",
        "text": "👉 Matlab:"
      },
      {
        "t": "li",
        "text": "Total **8 baar milenge**"
      },
      {
        "t": "h",
        "text": "⚠️ BUT QUESTION NE KYA BOLA?"
      },
      {
        "t": "p",
        "text": "❌ **Start (bottom)** ko count mat karo\n ❌ **End (top)** ko count mat karo"
      },
      {
        "t": "p",
        "text": "Toh:"
      },
      {
        "t": "li",
        "text": "Start wala meeting ❌"
      },
      {
        "t": "li",
        "text": "End wala meeting ❌"
      },
      {
        "t": "h",
        "text": "🧮 Final counting"
      },
      {
        "t": "p",
        "text": "8−1=78 - 1 = \\boxed{7}8−1=7​"
      },
      {
        "t": "h",
        "text": "✅ FINAL ANSWER"
      },
      {
        "t": "p",
        "text": "🎯 **They cross each other 7 times**"
      },
      {
        "t": "h",
        "text": "🧠 ONE LINE ME YAAD RAKH (EXAM / INTERVIEW)"
      },
      {
        "t": "p",
        "text": "**“Ulta direction me ghoomne walon ke crossings = total rounds − 1”**"
      },
      {
        "t": "h",
        "text": "🗣️ Agar interviewer pooche (simple bolna)"
      },
      {
        "t": "p",
        "text": "“I imagine both creepers as moving on a circular track in opposite directions.\n The total number of meetings equals the total number of rounds they make.\n Excluding the start and end, they cross 7 times.”"
      },
      {
        "t": "h",
        "text": "🌿 Puzzle ko bilkul simple bana dete hain"
      },
      {
        "t": "p",
        "text": "Soch:"
      },
      {
        "t": "li",
        "text": "Ek **gol race track** hai"
      },
      {
        "t": "li",
        "text": "Do log:"
      },
      {
        "t": "li",
        "text": "Jasmine → **5 chakkar**"
      },
      {
        "t": "li",
        "text": "Rose → **3 chakkar**"
      },
      {
        "t": "img",
        "src": "image11.png"
      },
      {
        "t": "li",
        "text": "Dono **ulta direction** me chal rahe hain"
      },
      {
        "t": "h",
        "text": "🔑 GOLDEN RULE (YAAD RAKH)"
      },
      {
        "t": "p",
        "text": "**Ulta direction me chalne par,\n jitne total chakkar hote hain,\n utni baar wo milte hain.**"
      },
      {
        "t": "h",
        "text": "🧮 Ab bas counting"
      },
      {
        "t": "li",
        "text": "Jasmine = 5 chakkar"
      },
      {
        "t": "li",
        "text": "Rose = 3 chakkar"
      },
      {
        "t": "p",
        "text": "Total meetings:"
      },
      {
        "t": "p",
        "text": "5+3=85 + 3 = 85+3=8"
      },
      {
        "t": "h",
        "text": "⚠️ Question ne bola kya?"
      },
      {
        "t": "p",
        "text": "❌ Start ko count mat karo\n ❌ End ko count mat karo"
      },
      {
        "t": "p",
        "text": "Matlab:"
      },
      {
        "t": "li",
        "text": "Ek meeting start pe ❌"
      },
      {
        "t": "li",
        "text": "Ek meeting end pe ❌"
      },
      {
        "t": "h",
        "text": "✅ Final answer"
      },
      {
        "t": "p",
        "text": "8−1=78 - 1 = \\boxed{7}8−1=7​"
      },
      {
        "t": "h",
        "text": "🎯 FINAL RESULT"
      },
      {
        "t": "p",
        "text": "**They cross each other 7 times**"
      },
      {
        "t": "h",
        "text": "🧠 ONE LINE (EXAM / INTERVIEW READY)"
      },
      {
        "t": "p",
        "text": "**“Opposite direction me chalne walon ke crossings = total rounds − 1.”**"
      }
    ]
  },
  {
    "id": "p82",
    "title": "Number of legs in palace",
    "category": "Math & Numbers",
    "problem": [
      {
        "t": "p",
        "text": "Imagine you are standing inside a grand palace where 5 guards are on duty. Each guard is responsible for watching 5 large rooms. In every single one of these rooms, there are 5 adult tigers, and each adult tiger has 5 cubs. Can you figure out how many legs are inside the palace? Explanation :"
      }
    ],
    "solution": [
      {
        "t": "p",
        "text": "Step 1: Calculate the Total Number of Tigers First, we need to figure out exactly how many tigers are in the palace. Total number of rooms: There are 5 guards, and each is in charge of 5 rooms. 5 guards × 5 rooms = 25 total rooms Total number of adult tigers: Each of the 25 rooms has 5 adult tigers. 25 rooms × 5 adult tigers = 125 adult tigers Total number of tiger cubs: Each of the 125 adult tigers has 5 cubs. 125 adult tigers × 5 cubs = 625 tiger cubs Add them all up: 125 adult tigers + 625 cubs = 750 total tigers Now that we know the total number of tigers, we can find the number of tiger legs. Since each tiger has 4 legs: 750 tigers × 4 legs = 3000 tiger legs Step 2: Calculate the Total Number of Humans The Guards: There are 5 guards, and each has 2 legs. 5 guards × 2 legs = 10 guard legs You: The puzzle states you are in the palace, so you have to count your own 2 legs. 2 of your legs Add the human legs together : 10 guard legs + 2 of your legs = 12 human legs Step 3: Find the Grand Total Finally, we just add the tiger legs and the human legs together to get the final answer. 3000 tiger legs + 12 human legs = 3012 total legs. So, the total number of legs in the palace is 3,012."
      }
    ]
  }
];
