// EDIT CONTENT HERE — save and refresh the browser.
window.PORTFOLIO = {
  "education": [
    {
      "period": "Oct 2024 — Present",
      "title": "M.Sc. Data Science & Artificial Intelligence",
      "institution": "Saarland University",
      "location": "Saarbrücken, Germany",
      "description": ""
    },
    {
      "period": "Jun 2020 — Jun 2024",
      "title": "B.E. Information Technology",
      "institution": "Pune University",
      "location": "India",
      "description": ""
    }
  ],
  "experience": [
    {
      "period": "Oct 2026 — Present",
      "title": "Student Research Assistant · AI & Computer Vision",
      "organization": "FGVT · htw saar",
      "location": "Germany",
      "description": "Applied AI research, vision pipelines and automation prototypes.",
      "tags": [
        "Computer Vision",
        "Python"
      ]
    },
    {
      "period": "Apr 2024 — May 2025",
      "title": "NLP Intern",
      "organization": "LinguaTech Solutions",
      "location": "",
      "description": "Transformer models, NER, semantic search and FastAPI deployment.",
      "tags": [
        "NLP",
        "Transformers"
      ]
    },
    {
      "period": "Jan 2023 — Oct 2023",
      "title": "Machine Learning Intern",
      "organization": "Toward’s Imagination Pvt. Ltd.",
      "location": "India",
      "description": "Financial time-series modeling, XGBoost, LSTM and backtesting.",
      "tags": [
        "Time Series",
        "ML"
      ]
    }
  ],
  "profile": {
    "name": "Rohit Ahire",
    "firstName": "Rohit",
    "headline": "AI / Machine Learning Engineer",
    "descriptor": "Building intelligent systems for real-world problems.",
    "location": "Saarbrücken, Germany",
    "university": "Saarland University",
    "degree": "M.Sc. Data Science and Artificial Intelligence",
    "email": "rohit.ahire2403@gmail.com",
    "linkedin": "https://www.linkedin.com/in/rohit-ahire-7b2063201/",
    "github": "https://github.com/AhireRohit",
    "availability": "Open to AI / ML opportunities",
    "heroImage": "/images/rohit-paris.webp",
    "aboutImage": "/images/rohit-brussels.webp",
    "resume": "./Rohit_Ahire_CV.pdf"
  },
  "projects": [
    {
      "id": "anomaly",
      "number": "01",
      "title": "Industrial Visual Anomaly Detection",
      "subtitle": "Visual anomaly detection using healthy product images.",
      "category": "Computer Vision",
      "year": "2026",
      "featured": true,
      "type": "quality",
      "badge": "Featured project",
      "description": "Detecting manufacturing defects with PatchCore and visual heatmaps.",
      "tags": [
        "PyTorch",
        "PatchCore",
        "Anomalib",
        "Streamlit"
      ],
      "metric": "0.9897",
      "metricLabel": "AUROC · Metal Nut",
      "github": "https://github.com/AhireRohit/Industrial-Visual-Anomaly-Detection",
      "dataset": "MVTec AD — Metal Nut, Cable and Tile. Separate healthy-data training and calibration splits.",
      "challenge": "How can a model detect manufacturing defects when examples of actual defects are scarce?",
      "approach": "Trained PatchCore on healthy MVTec AD images. Added image-level alerts, heatmaps and a Streamlit inspection dashboard.",
      "result": "Metal Nut: 0.9897 image AUROC and 96.77% defect recall on its test set.",
      "disclaimer": "Research benchmark on MVTec AD, not validated on live factory feeds."
    },
    {
      "id": "maintenance",
      "number": "02",
      "title": "Predictive Maintenance AI",
      "subtitle": "Predictive maintenance on NASA C-MAPSS data.",
      "category": "Predictive ML",
      "year": "2026",
      "featured": true,
      "type": "predict",
      "badge": "Featured project",
      "description": "Predicting turbofan engine remaining life from sensor sequences.",
      "tags": [
        "XGBoost",
        "LSTM",
        "PyTorch",
        "Streamlit"
      ],
      "metric": "16.04",
      "metricLabel": "MAE · engine cycles",
      "github": "https://github.com/AhireRohit/Predictive-Maintenance-AI",
      "dataset": "NASA C-MAPSS FD001 simulation — 100 training engines and 100 official test engines.",
      "challenge": "Can a model estimate how many operating cycles a turbofan engine has left based on its evolving sensor measurements?",
      "approach": "Benchmarked XGBoost features against an LSTM trained on 30-cycle sensor windows; built fleet and engine dashboards.",
      "result": "16.04-cycle MAE on FD001 test endpoints for an LSTM with validation-selected adjustment.",
      "disclaimer": "Synthetic simulation research only; not a safety-certified maintenance decision tool."
    },
    {
      "id": "incident",
      "number": "03",
      "title": "IncidentLens — AI Incident Investigator",
      "subtitle": "Explainable industrial incident investigation.",
      "category": "Agentic AI",
      "year": "2026",
      "featured": true,
      "type": "agents",
      "badge": "Featured project",
      "description": "Connecting industrial sensor logs to evidence-checked AI incident reports.",
      "tags": [
        "LangGraph",
        "Groq",
        "Python",
        "Streamlit"
      ],
      "metric": "Evidence-first",
      "metricLabel": "AI investigation workflow",
      "github": "https://github.com/AhireRohit/IncidentLens-AI",
      "demo": "https://incidentlens-aii.streamlit.app/",
      "dataset": "Reproducible synthetic conveyor sensor readings, event logs and maintenance records.",
      "challenge": "Can an AI assistant explain an industrial incident while keeping each claim tied to verifiable evidence?",
      "approach": "Used LangGraph, telemetry, event logs and manuals. Validated generated claims against recorded readings and sources.",
      "result": "Read-only Streamlit dashboard showing reproducible simulated incident investigations.",
      "disclaimer": "Demonstration with synthetic data, not a live industrial monitoring tool."
    },
    {
      "id": "devpilot",
      "number": "04",
      "title": "DevPilot AI",
      "subtitle": "Agentic software engineering assistant.",
      "category": "Agentic AI",
      "year": "2026",
      "featured": false,
      "type": "code",
      "description": "A repository assistant for code exploration and controlled patch proposals.",
      "tags": [
        "LangGraph",
        "Groq",
        "Docker",
        "Python"
      ],
      "metric": "Docker",
      "metricLabel": "Isolated execution",
      "github": "https://github.com/AhireRohit/DevPilot-AI",
      "dataset": "Software repositories and test fixtures rather than a traditional training dataset.",
      "challenge": "How can a coding assistant reason across a repository without applying uncontrolled edits?",
      "approach": "Built a LangGraph workflow for repository exploration, patch generation and isolated Docker testing.",
      "result": "A practical prototype for investigating and proposing changes to source code.",
      "disclaimer": "Developer prototype; review all generated code changes."
    },
    {
      "id": "lane",
      "number": "05",
      "title": "LaneDet — Real-time Lane Detection",
      "subtitle": "Computer vision benchmark for road scenes.",
      "category": "Computer Vision",
      "year": "2026",
      "featured": false,
      "type": "lane",
      "description": "Comparing real-time lane detection models on TuSimple road images.",
      "tags": [
        "PyTorch",
        "U-Net",
        "OpenCV",
        "Gradio"
      ],
      "metric": "91.5 FPS",
      "metricLabel": "U-Net throughput",
      "github": "https://github.com/AhireRohit/Lane_Detection",
      "dataset": "TuSimple — 3,626 annotated training images.",
      "challenge": "What accuracy and throughput tradeoffs appear across lightweight lane-segmentation architectures?",
      "approach": "Benchmarked U-Net, CLRNet-style, LaneATT-style and SCNN-style segmentation with visual overlays and a Gradio demo.",
      "result": "U-Net achieved 0.389 IoU, 0.559 F1 and approximately 91.5 FPS.",
      "disclaimer": "Benchmark results, not road-ready vehicle perception."
    },
    {
      "id": "docsrag",
      "number": "06",
      "title": "CompanyDocs RAG Assistant",
      "subtitle": "Retrieval-augmented Q&A with open-source tools.",
      "category": "NLP & RAG",
      "year": "2026",
      "featured": false,
      "type": "rag",
      "description": "Grounded Q&A over documentation using embeddings, FAISS and citations.",
      "tags": [
        "FAISS",
        "Sentence Transformers",
        "Gradio",
        "Python"
      ],
      "metric": "56%",
      "metricLabel": "Top-4 retrieval accuracy",
      "github": "https://github.com/AhireRohit/CompanyDocs_RAG",
      "dataset": "20 public GitLab handbook/docs pages, segmented into 206 text chunks.",
      "challenge": "Can a small, local RAG system retrieve the right documentation and decline questions without supporting evidence?",
      "approach": "Indexed 20 GitLab docs pages using Sentence Transformers and FAISS; returned cited text evidence.",
      "result": "Top-4 retrieval accuracy 0.56 on a 35-question evaluation.",
      "disclaimer": "Small educational evaluation set; not a production knowledge system."
    }
  ],
  "skillGroups": [
    {
      "title": "Machine learning",
      "eyebrow": "01 / MODELING",
      "skills": [
        "PyTorch",
        "scikit-learn",
        "XGBoost",
        "LSTM / CNN",
        "Transformers",
        "Evaluation & benchmarking"
      ]
    },
    {
      "title": "Computer vision",
      "eyebrow": "02 / PERCEPTION",
      "skills": [
        "OpenCV",
        "PatchCore",
        "Anomalib",
        "Image segmentation",
        "Grad-CAM",
        "Visual inspection"
      ]
    },
    {
      "title": "LLMs & agents",
      "eyebrow": "03 / INTELLIGENCE",
      "skills": [
        "LangGraph",
        "LangChain",
        "RAG",
        "FAISS",
        "Sentence Transformers",
        "Groq"
      ]
    },
    {
      "title": "Engineering",
      "eyebrow": "04 / BUILD & SHIP",
      "skills": [
        "Python",
        "Git / GitHub",
        "Docker",
        "Streamlit / Gradio",
        "SQL / SQLite",
        "Raspberry Pi"
      ]
    }
  ],
  "careerTimeline": [
    {
      "period": "2026 — Present",
      "type": "Experience",
      "title": "HiWi Research Assistant · AI & Computer Vision",
      "place": "FGVT, htw saar · Germany"
    },
    {
      "period": "2024 — Present",
      "type": "Education",
      "title": "M.Sc. Data Science & Artificial Intelligence",
      "place": "Saarland University · Germany"
    },
    {
      "period": "2024 — 2025",
      "type": "Internship",
      "title": "NLP Intern",
      "place": "LinguaTech Solutions"
    },
    {
      "period": "2023",
      "type": "Internship",
      "title": "Machine Learning Intern",
      "place": "Toward’s Imagination Pvt. Ltd. · India"
    },
    {
      "period": "2020 — 2024",
      "type": "Education",
      "title": "B.E. Information Technology",
      "place": "Pune University · India"
    }
  ]
};
