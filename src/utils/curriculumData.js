export const CURRICULUM_MODULES = [
  {
    id: "module-1",
    number: "01",
    title: "Programming Core & Memory Models",
    duration: "2 Weeks • 12+ Hours",
    topicsCount: "15 Topics",
    problemsCount: "35+ Problems",
    summary: "Build solid fundamentals in C++ syntax, memory addresses, pointers, arrays, and recursion.",
    topics: [
      "C++ Syntax & Boilerplate Demystified",
      "Variables, Data Types, and Type Casting",
      "Control Flow: Conditionals, Loops, & Edge Cases",
      "Functions & Scope Resolution",
      "Pointers & Memory Allocation (Stack vs Heap)",
      "Pass by Value vs Pass by Reference",
      "1D and 2D Arrays in Memory",
      "Recursion Fundamentals & Call Stack Visualizer"
    ],
    codeSnippet: `// Memory & Pointer Demo in C++
#include <iostream>
using namespace std;

void swapByRef(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 20;
    swapByRef(x, y);
    cout << "x: " << x << ", y: " << y << endl; // x: 20, y: 10
    return 0;
}`,
  },
  {
    id: "module-2",
    number: "02",
    title: "Essential Linear Data Structures",
    duration: "3 Weeks • 15+ Hours",
    topicsCount: "18 Topics",
    problemsCount: "40+ Problems",
    summary: "Master Arrays, Vectors, Strings, Linked Lists, Stacks, Queues, and Hash Maps.",
    topics: [
      "Dynamic Arrays & Vector Internal Mechanics",
      "String Manipulation & Pattern Searching",
      "Singly & Doubly Linked Lists from Scratch",
      "Stack Implementation (Array & Linked List)",
      "Monotonic Stack Technique & Next Greater Element",
      "Queue, Circular Queue, & Deque",
      "Hash Maps & Hash Sets (Collision Resolution)",
      "Two Pointers & Sliding Window Patterns"
    ],
    codeSnippet: `// Monotonic Stack for Next Greater Element
#include <vector>
#include <stack>
using namespace std;

vector<int> nextGreater(vector<int>& nums) {
    int n = nums.size();
    vector<int> res(n, -1);
    stack<int> st;
    for(int i = 0; i < n; i++) {
        while(!st.empty() && nums[st.top()] < nums[i]) {
            res[st.top()] = nums[i];
            st.pop();
        }
        st.push(i);
    }
    return res;
}`,
  },
  {
    id: "module-3",
    number: "03",
    title: "Advanced Trees & Graph Algorithms",
    duration: "3 Weeks • 16+ Hours",
    topicsCount: "20 Topics",
    problemsCount: "45+ Problems",
    summary: "Master hierarchical and network structures, tree traversals, BST, BFS/DFS, and Shortest Paths.",
    topics: [
      "Binary Tree Traversals (Inorder, Preorder, Postorder, Level-Order)",
      "Binary Search Trees (BST): Insertion, Deletion, Validation",
      "Lowest Common Ancestor & Tree Diameter",
      "Heaps & Priority Queues (Min-Heap / Max-Heap)",
      "Graph Representations (Adjacency Matrix & List)",
      "Graph Traversals: BFS & DFS on Grids and Graphs",
      "Cycle Detection in Directed & Undirected Graphs",
      "Dijkstra's Algorithm & Topological Sorting (Kahn's Algo)"
    ],
    codeSnippet: `// BFS Graph Traversal
void bfs(int start, vector<vector<int>>& adj, vector<bool>& vis) {
    queue<int> q;
    q.push(start);
    vis[start] = true;
    while(!q.empty()) {
        int u = q.front(); q.pop();
        for(int v : adj[u]) {
            if(!vis[v]) {
                vis[v] = true;
                q.push(v);
            }
        }
    }
}`,
  },
  {
    id: "module-4",
    number: "04",
    title: "Algorithmic Paradigms & Dynamic Programming",
    duration: "3 Weeks • 15+ Hours",
    topicsCount: "16 Topics",
    problemsCount: "35+ Problems",
    summary: "Transition from recursion to Memoization, Tabulation, Greedy strategies, and DP patterns.",
    topics: [
      "Divide & Conquer: Binary Search Variants & Merge Sort",
      "Greedy Strategy & Interval Scheduling",
      "Backtracking: N-Queens, Subsets, & Permutations",
      "Introduction to Dynamic Programming (Overlapping Subproblems)",
      "1D DP: Climbing Stairs, House Robber, Coin Change",
      "2D DP: Grid Unique Paths, Longest Common Subsequence",
      "0/1 Knapsack & Unbounded Knapsack Patterns",
      "Bit Manipulation Essentials for Competitive Coding"
    ],
    codeSnippet: `// 1D Dynamic Programming: Coin Change
int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, amount + 1);
    dp[0] = 0;
    for(int i = 1; i <= amount; i++) {
        for(int coin : coins) {
            if(i - coin >= 0) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}`,
  },
  {
    id: "module-5",
    number: "05",
    title: "Technical Interview Strategy & Mock Rounds",
    duration: "1 Week • 8+ Hours",
    topicsCount: "10 Topics",
    problemsCount: "Live Mocks",
    summary: "System design basics for junior roles, code review standards, resume crafting, and live mock interviews.",
    topics: [
      "Deconstructing Top Company Coding Questions (MAANG / FAANG)",
      "How to Speak Out Loud During Technical Interviews",
      "Time & Space Complexity Optimization Breakdown",
      "Git & GitHub Workflow for Developers",
      "Resume Structuring & Project Presentation",
      "1-on-1 Mock Technical Interview Rounds & Feedback"
    ],
    codeSnippet: `// Big-O Space-Time Analysis Checklist
// 1. Time: Identify worst-case loop depth & recursive branching
// 2. Space: Measure call stack overhead + dynamic memory allocation
// 3. Tradeoffs: Hash table speed vs memory consumption`,
  },
];

export const ROADMAP_STEPS = [
  {
    step: "STEP 01",
    title: "Programming & DSA Core",
    status: "CURRENT BATCH",
    active: true,
    color: "from-indigo-600 to-blue-600",
    description: "Master C++, Memory Models, Linear & Non-Linear Data Structures, and Algorithmic Thinking.",
    skills: ["C++ Logic", "Arrays & Pointers", "Trees & Graphs", "Dynamic Programming", "LeetCode Patterns"],
  },
  {
    step: "STEP 02",
    title: "Full-Stack Web Development",
    status: "UPCOMING NEXT",
    active: false,
    color: "from-cyan-600 to-blue-600",
    description: "Build modern, high-performance web applications with React, Node.js, and Cloud Infrastructure.",
    skills: ["JavaScript / TypeScript", "React.js & Tailwind", "Node.js & Express", "MongoDB / PostgreSQL", "REST APIs"],
  },
  {
    step: "STEP 03",
    title: "Autonomous Agentic AI",
    status: "FUTURE VISION",
    active: false,
    color: "from-slate-700 to-slate-900",
    description: "Architect AI agents, vector database systems, LLM fine-tuning, and autonomous execution pipelines.",
    skills: ["LangChain / LlamaIndex", "Vector Databases", "Function Calling & Tools", "Multi-Agent Swarms", "RAG Systems"],
  },
];

export const CHEAT_SHEETS = [
  {
    id: "cs-dsa",
    title: "C++ DSA Quick Reference Sheet",
    category: "Data Structures",
    format: "PDF Sheet",
    size: "2.4 MB",
    downloadUrl: "#",
    snippet: "Includes C++ STL containers (vector, map, set, priority_queue), time complexity table, and code templates.",
  },
  {
    id: "cs-big-o",
    title: "Big-O Time & Space Complexity Guide",
    category: "Algorithms",
    format: "PDF Sheet",
    size: "1.8 MB",
    downloadUrl: "#",
    snippet: "Visual chart comparing O(1), O(log N), O(N), O(N log N), O(N²), and O(2ⁿ) with practical examples.",
  },
  {
    id: "cs-memory",
    title: "Pointers & Memory Allocation Cheat Sheet",
    category: "Language Core",
    format: "PDF Sheet",
    size: "3.1 MB",
    downloadUrl: "#",
    snippet: "Diagrammatic guide to Stack vs Heap, dangling pointers, dynamic memory allocation (`new`/`delete`), and references.",
  },
  {
    id: "cs-patterns",
    title: "Top 14 LeetCode Problem Patterns",
    category: "Interview Prep",
    format: "PDF Sheet",
    size: "4.0 MB",
    downloadUrl: "#",
    snippet: "Master Two Pointers, Sliding Window, Fast & Slow Pointers, In-place Reversal, BFS, DFS, Dynamic Programming.",
  },
];

export const FAQS = [
  {
    question: "Who is this Programming & DSA course designed for?",
    answer: "This cohort is built for absolute beginners with zero programming background, Computer Science students wanting strong fundamentals, and self-taught developers preparing for software engineering job interviews.",
  },
  {
    question: "Do I need prior coding experience before joining the Demo Class?",
    answer: "No! We start from absolute scratch. In the Demo Class, we will teach you how to think like a programmer step-by-step using real-world analogies.",
  },
  {
    question: "What are the laptop and system requirements?",
    answer: "Any modern Windows, Mac, or Linux laptop/desktop with at least 4GB RAM will work seamlessly. All tools (VS Code, C++ compiler) are 100% free and will be set up together during class.",
  },
  {
    question: "What if I miss a live class session?",
    answer: "Every live class is recorded in HD quality and uploaded to your student portal within 2 hours of class completion, along with classroom code snippets and lecture notes.",
  },
  {
    question: "How does 1-on-1 doubt clearing work?",
    answer: "You get access to a private Discord and WhatsApp group where mentors and peer teaching assistants answer code errors, debug stack traces, and explain concepts 7 days a week.",
  },
  {
    question: "How do I reserve my free seat for the upcoming Demo Class?",
    answer: "Click any 'Save Your Spot' or 'Book Free Demo' button on the website. Fill in your details, and you will be redirected to WhatsApp where our team will send your Zoom/Google Meet live link.",
  },
];
