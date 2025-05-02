// Tool data structure
const tools = [
    // Text Generation Tools
    {
        name: "ChatGPT",
        description: "OpenAI's free AI language model for natural conversations and text generation",
        url: "https://chat.openai.com",
        category: "text",
        tags: ["AI Chat", "Writing", "Assistant"]
    },
    {
        name: "Claude",
        description: "Anthropic's free AI assistant for writing, analysis, and coding help",
        url: "https://claude.ai",
        category: "text",
        tags: ["Writing", "Analysis", "Coding"]
    },
    {
        name: "Gemini",
        description: "Google's free AI chatbot for creative and helpful conversations",
        url: "https://gemini.google.com",
        category: "text",
        tags: ["AI Chat", "Creative", "Assistant"]
    },
    {
        name: "HuggingChat",
        description: "Open-source AI chat interface powered by various language models",
        url: "https://huggingface.co/chat",
        category: "text",
        tags: ["Open Source", "Chat", "AI"]
    },
    {
        name: "Perplexity AI",
        description: "Free AI-powered search engine that provides detailed answers with sources",
        url: "https://www.perplexity.ai",
        category: "text",
        tags: ["Search", "Research", "Answers"]
    },
    {
        name: "Grok",
        description: "xAI's free conversational AI assistant with real-time knowledge",
        url: "https://grok.com",
        category: "text",
        tags: ["AI Chat", "Real-time", "Assistant"]
    },
    {
        name: "Poe",
        description: "Free platform for accessing various AI chatbots and assistants",
        url: "https://poe.com",
        category: "text",
        tags: ["AI Chat", "Multiple Models", "Assistant"]
    },
    {
        name: "NotebookLM",
        description: "Google's free AI notebook for research and writing",
        url: "https://notebooklm.google.com",
        category: "text",
        tags: ["Research", "Writing", "Google"]
    },
    {
        name: "Mistral AI Chat",
        description: "Free advanced AI chat assistant by Mistral AI",
        url: "https://chat.mistral.ai",
        category: "text",
        tags: ["AI Chat", "Assistant", "Advanced"]
    },
    {
        name: "Abacus AI Chat",
        description: "Free AI chat assistant with advanced capabilities",
        url: "https://chatllm.abacus.ai",
        category: "text",
        tags: ["AI Chat", "Advanced", "Assistant"]
    },
    {
        name: "ChefGPT",
        description: "AI-powered cooking assistant for recipes and meal planning",
        url: "https://chefgpt.xyz",
        category: "text",
        tags: ["Cooking", "Recipes", "Meal Planning"]
    },

    // Image Generation Tools
    {
        name: "Stable Diffusion WebUI",
        description: "Free open-source AI image generation model for creating art and illustrations",
        url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
        category: "image",
        tags: ["Open Source", "Art", "AI Art"]
    },
    {
        name: "Playground AI",
        description: "Free-to-use online AI image creator with various models",
        url: "https://playground.ai",
        category: "image",
        tags: ["Free", "Art", "Easy to Use"]
    },
    {
        name: "Bing Image Creator",
        description: "Microsoft's free AI image generator powered by DALL-E",
        url: "https://www.bing.com/create",
        category: "image",
        tags: ["Free", "Art", "Microsoft"]
    },
    {
        name: "Ideogram",
        description: "Free AI image generation platform with advanced text-to-image capabilities",
        url: "https://ideogram.ai",
        category: "image",
        tags: ["Art", "Text-to-Image", "Generation"]
    },
    {
        name: "Dream by WOMBO",
        description: "Free AI art generator for creating unique artwork",
        url: "https://dream.ai",
        category: "image",
        tags: ["Art", "Generation", "Easy to Use"]
    },
    {
        name: "Genmo AI",
        description: "Free AI-powered image and video generation platform",
        url: "https://genmo.ai",
        category: "image",
        tags: ["Art", "Video", "Generation"]
    },
    {
        name: "Leonardo.AI",
        description: "Free AI art generation platform with daily credits",
        url: "https://leonardo.ai",
        category: "image",
        tags: ["Art", "Generation", "Credits"]
    },
    {
        name: "Canva Text to Image",
        description: "Free AI image generation within Canva's design platform",
        url: "https://www.canva.com/your-apps/text-to-image",
        category: "image",
        tags: ["Design", "Art", "Canva"]
    },
    {
        name: "Hugging Face Spaces",
        description: "Free access to various open-source AI image generation models",
        url: "https://huggingface.co/spaces",
        category: "image",
        tags: ["Open Source", "Multiple Models", "Free"]
    },
    {
        name: "Stable Diffusion Online",
        description: "Free online version of Stable Diffusion for image generation",
        url: "https://stablediffusionweb.com",
        category: "image",
        tags: ["Art", "Generation", "Online"]
    },
    {
        name: "Craiyon",
        description: "Free AI image generator with simple interface",
        url: "https://www.craiyon.com",
        category: "image",
        tags: ["Art", "Simple", "Free"]
    },
    {
        name: "NightCafe",
        description: "Free AI art generator with daily free credits",
        url: "https://nightcafe.studio",
        category: "image",
        tags: ["Art", "Credits", "Generation"]
    },
    {
        name: "Pexels",
        description: "Free stock photos and videos for creative projects",
        url: "https://www.pexels.com",
        category: "image",
        tags: ["Stock Media", "Free", "Creative"]
    },
    {
        name: "Pixabay",
        description: "Free stock photos, videos, and music",
        url: "https://pixabay.com",
        category: "image",
        tags: ["Stock Media", "Free", "Multiple Formats"]
    },
    {
        name: "Unsplash",
        description: "High-quality free stock photos",
        url: "https://unsplash.com",
        category: "image",
        tags: ["Stock Photos", "High Quality", "Free"]
    },
    {
        name: "Vecteezy",
        description: "Free vector graphics and stock photos",
        url: "https://www.vecteezy.com",
        category: "image",
        tags: ["Vector Graphics", "Stock Photos", "Free"]
    },
    {
        name: "Videvo",
        description: "Free stock videos and motion graphics",
        url: "https://www.videvo.net",
        category: "image",
        tags: ["Stock Videos", "Motion Graphics", "Free"]
    },
    {
        name: "Vimeo",
        description: "Video hosting and sharing platform",
        url: "https://vimeo.com",
        category: "video",
        tags: ["Video Hosting", "Sharing", "Platform"]
    },
    {
        name: "VSDC",
        description: "Free video editor with advanced features",
        url: "https://www.videosoftdev.com",
        category: "video",
        tags: ["Video Editing", "Advanced", "Free"]
    },
    {
        name: "Wondershare Filmora",
        description: "User-friendly video editing software with AI features",
        url: "https://filmora.wondershare.com",
        category: "video",
        tags: ["Video Editing", "User-friendly", "AI Features"]
    },

    // Audio Tools
    {
        name: "Whisper",
        description: "OpenAI's free speech recognition system for accurate transcription",
        url: "https://openai.com/research/whisper",
        category: "audio",
        tags: ["Transcription", "Speech", "Open Source"]
    },
    {
        name: "Covers AI",
        description: "Free AI voice and song generation platform",
        url: "https://covers.ai",
        category: "audio",
        tags: ["Voice", "Music", "Generation"]
    },
    {
        name: "Voicemaker",
        description: "Free online text-to-speech converter with multiple voices",
        url: "https://voicemaker.in",
        category: "audio",
        tags: ["Voice", "Text-to-Speech", "Online"]
    },
    {
        name: "Musicfy",
        description: "AI-powered music creation and remixing platform",
        url: "https://musicfy.lol",
        category: "audio",
        tags: ["Music", "Creation", "Remixing"]
    },

    // Video Tools
    {
        name: "RunwayML",
        description: "Free AI-powered video editing and generation platform",
        url: "https://runwayml.com",
        category: "video",
        tags: ["Video", "Editing", "Generation"]
    },
    {
        name: "VEED.IO",
        description: "Free online video editing platform with AI features",
        url: "https://veed.io",
        category: "video",
        tags: ["Video", "Editing", "Online"]
    },
    {
        name: "Luma Labs",
        description: "Free AI video generation platform with advanced capabilities",
        url: "https://lumalabs.ai",
        category: "video",
        tags: ["Video", "Generation", "3D"]
    },
    {
        name: "Stable Video",
        description: "Free Stability AI's video generation platform",
        url: "https://stablevideo.com",
        category: "video",
        tags: ["Video", "Generation", "AI"]
    },
    {
        name: "Pollo AI",
        description: "Free AI video generation and editing platform",
        url: "https://pollo.ai",
        category: "video",
        tags: ["Video", "Generation", "Editing"]
    },
    {
        name: "Kaiber",
        description: "Free AI video generation platform with daily credits",
        url: "https://kaiber.ai",
        category: "video",
        tags: ["Video", "Generation", "Credits"]
    },
    {
        name: "Pika Labs",
        description: "Free AI video generation platform with text-to-video capabilities",
        url: "https://pika.art",
        category: "video",
        tags: ["Video", "Generation", "Text-to-Video"]
    },
    {
        name: "CapCut",
        description: "Free video editing software with AI-powered features",
        url: "https://www.capcut.com",
        category: "video",
        tags: ["Video Editing", "AI Features", "Free"]
    },
    {
        name: "Clipchamp",
        description: "Online video editor with AI-powered tools",
        url: "https://clipchamp.com",
        category: "video",
        tags: ["Video Editing", "Online", "AI Tools"]
    },
    {
        name: "DaVinci Resolve",
        description: "Professional-grade free video editing software",
        url: "https://www.blackmagicdesign.com/products/davinciresolve",
        category: "video",
        tags: ["Professional", "Video Editing", "Free"]
    },
    {
        name: "HitPaw",
        description: "AI-powered video and audio enhancement tools",
        url: "https://www.hitpaw.com",
        category: "video",
        tags: ["Video Enhancement", "Audio", "AI Tools"]
    },
    {
        name: "InVideo",
        description: "Online video creation platform with AI templates",
        url: "https://invideo.io",
        category: "video",
        tags: ["Video Creation", "Templates", "Online"]
    },
    {
        name: "Kapwing",
        description: "Online video editor with collaborative features",
        url: "https://www.kapwing.com",
        category: "video",
        tags: ["Video Editing", "Collaborative", "Online"]
    },

    // Coding Tools
    {
        name: "GitHub Copilot",
        description: "Free AI pair programmer that helps write better code",
        url: "https://github.com/features/copilot",
        category: "coding",
        tags: ["Coding", "AI Assistant", "Productivity"]
    },
    {
        name: "Tabnine",
        description: "Free AI code completion tool for faster coding",
        url: "https://www.tabnine.com",
        category: "coding",
        tags: ["Coding", "Completion", "Productivity"]
    },
    {
        name: "Codeium",
        description: "Free AI code completion and chat assistant",
        url: "https://codeium.com",
        category: "coding",
        tags: ["Free", "Coding", "AI Assistant"]
    },
    {
        name: "Blackbox AI",
        description: "Free AI coding assistant for developers",
        url: "https://www.blackbox.ai",
        category: "coding",
        tags: ["Coding", "AI Assistant", "Development"]
    },
    {
        name: "CodeGPT",
        description: "Free AI coding assistant for various programming languages",
        url: "https://www.codegpt.co",
        category: "coding",
        tags: ["Coding", "AI Assistant", "Multiple Languages"]
    },
    {
        name: "Google Colab",
        description: "Free cloud-based Jupyter notebook environment for AI and ML development",
        url: "https://colab.research.google.com",
        category: "coding",
        tags: ["Development", "Cloud", "Jupyter"]
    },

    // Productivity Tools
    {
        name: "Notion AI",
        description: "Free AI writing assistant integrated with Notion workspace",
        url: "https://www.notion.so/product/ai",
        category: "productivity",
        tags: ["Writing", "Organization", "Workspace"]
    },
    {
        name: "Otter.ai",
        description: "Free AI-powered meeting transcription and note-taking",
        url: "https://otter.ai",
        category: "productivity",
        tags: ["Transcription", "Meetings", "Notes"]
    },
    {
        name: "Fireflies.ai",
        description: "Free AI meeting assistant for transcription and analysis",
        url: "https://fireflies.ai",
        category: "productivity",
        tags: ["Meetings", "Transcription", "Analysis"]
    },
    {
        name: "Grammarly",
        description: "Free AI writing assistant for grammar and style improvement",
        url: "https://www.grammarly.com",
        category: "productivity",
        tags: ["Writing", "Grammar", "Style"]
    },
    {
        name: "Tome",
        description: "Free AI-powered presentation and storytelling platform",
        url: "https://tome.app",
        category: "productivity",
        tags: ["Presentations", "Storytelling", "Design"]
    },
    {
        name: "CloudConvert",
        description: "Free online file converter supporting various formats",
        url: "https://cloudconvert.com",
        category: "productivity",
        tags: ["File Conversion", "Online", "Multiple Formats"]
    },
    {
        name: "FileCR",
        description: "Software download platform with verified applications",
        url: "https://filecr.com",
        category: "productivity",
        tags: ["Software", "Downloads", "Verified"]
    },

    // Research Tools
    {
        name: "Elicit",
        description: "Free AI research assistant for literature review and analysis",
        url: "https://elicit.org",
        category: "research",
        tags: ["Research", "Literature", "Analysis"]
    },
    {
        name: "Consensus",
        description: "Free AI-powered research search engine",
        url: "https://consensus.app",
        category: "research",
        tags: ["Research", "Search", "Academic"]
    },
    {
        name: "SciSpace",
        description: "Free AI research assistant for scientific papers",
        url: "https://typeset.io",
        category: "research",
        tags: ["Research", "Scientific", "Papers"]
    },
    {
        name: "Paperpal",
        description: "Free AI writing assistant for academic papers",
        url: "https://paperpal.com",
        category: "research",
        tags: ["Academic", "Writing", "Research"]
    },
    {
        name: "Scholarcy",
        description: "Free AI-powered research paper summarizer",
        url: "https://www.scholarcy.com",
        category: "research",
        tags: ["Research", "Summarization", "Academic"]
    },
    {
        name: "Have I Been Pwned",
        description: "Free tool to check if your email has been compromised in data breaches",
        url: "https://haveibeenpwned.com",
        category: "research",
        tags: ["Security", "Privacy", "OSINT"]
    },
    {
        name: "Epieos",
        description: "Free OSINT and digital footprint analysis tool",
        url: "https://epieos.com",
        category: "research",
        tags: ["OSINT", "Analysis", "Privacy"]
    },
    {
        name: "IntelTechniques",
        description: "Free OSINT and privacy research tools",
        url: "https://inteltechniques.com",
        category: "research",
        tags: ["OSINT", "Privacy", "Research"]
    },
    {
        name: "Social Searcher",
        description: "Free social media search and monitoring tool",
        url: "https://social-searcher.com",
        category: "research",
        tags: ["Social Media", "Search", "Monitoring"]
    },

    // Design & Presentation Tools
    {
        name: "Decktopus AI",
        description: "Free AI-powered presentation creation platform",
        url: "https://decktopus.com",
        category: "design",
        tags: ["Presentations", "Design", "AI"]
    },
    {
        name: "Gamma",
        description: "Free AI presentation and document creation platform",
        url: "https://gamma.app",
        category: "design",
        tags: ["Presentations", "Documents", "AI"]
    },
    {
        name: "Excalidraw",
        description: "Free virtual whiteboard for sketching and collaboration",
        url: "https://excalidraw.com",
        category: "design",
        tags: ["Drawing", "Collaboration", "Whiteboard"]
    },
    {
        name: "Shots",
        description: "Free tool to create amazing mockups and designs",
        url: "https://shots.so",
        category: "design",
        tags: ["Mockups", "Design", "Visual"]
    },

    // Development Tools
    {
        name: "Google AI Studio",
        description: "Free Google's platform for AI development and experimentation",
        url: "https://aistudio.google.com",
        category: "development",
        tags: ["Development", "AI", "Google"]
    },
    {
        name: "Firebase Studio",
        description: "Free Google's development platform with AI capabilities",
        url: "https://firebase.google.com",
        category: "development",
        tags: ["Development", "Backend", "Google"]
    },
    {
        name: "Napkin AI",
        description: "Free AI-powered development and prototyping platform",
        url: "https://napkin.ai",
        category: "development",
        tags: ["Development", "Prototyping", "AI"]
    },
    {
        name: "Dora AI",
        description: "Free AI development and deployment platform",
        url: "https://dora.run",
        category: "development",
        tags: ["Development", "Deployment", "AI"]
    },

    // Utility Tools
    {
        name: "Text to Handwriting",
        description: "Free tool to convert text to handwritten style",
        url: "https://texttohandwriting.com",
        category: "utility",
        tags: ["Text", "Handwriting", "Conversion"]
    },

    // Business Tools
    {
        name: "Wordtune",
        description: "Free AI writing assistant for improving business communication",
        url: "https://www.wordtune.com",
        category: "business",
        tags: ["Writing", "Communication", "Business"]
    },
    {
        name: "Grammarly Business",
        description: "Free AI writing assistant for professional communication",
        url: "https://www.grammarly.com/business",
        category: "business",
        tags: ["Writing", "Grammar", "Business"]
    },
    {
        name: "Otter.ai Business",
        description: "Free AI meeting assistant for business transcription",
        url: "https://otter.ai/business",
        category: "business",
        tags: ["Meetings", "Transcription", "Business"]
    },
    {
        name: "Fireflies.ai Business",
        description: "Free AI meeting assistant for business teams",
        url: "https://fireflies.ai/business",
        category: "business",
        tags: ["Meetings", "Analysis", "Business"]
    },
    {
        name: "Notion AI",
        description: "Free AI workspace for business organization and collaboration",
        url: "https://www.notion.so/product/ai",
        category: "business",
        tags: ["Organization", "Collaboration", "Business"]
    },
    {
        name: "Tome",
        description: "Free AI presentation platform for business storytelling",
        url: "https://tome.app",
        category: "business",
        tags: ["Presentations", "Storytelling", "Business"]
    },
    {
        name: "Beautiful.ai",
        description: "Free AI presentation maker for business professionals",
        url: "https://www.beautiful.ai",
        category: "business",
        tags: ["Presentations", "Design", "Business"]
    },
    {
        name: "Gamma",
        description: "Free AI document and presentation platform for business",
        url: "https://gamma.app",
        category: "business",
        tags: ["Documents", "Presentations", "Business"]
    },
    {
        name: "Decktopus AI",
        description: "Free AI presentation creator for business professionals",
        url: "https://decktopus.com",
        category: "business",
        tags: ["Presentations", "Design", "Business"]
    },
    {
        name: "ChatGPT for Business",
        description: "Free AI assistant for business communication and tasks",
        url: "https://chat.openai.com",
        category: "business",
        tags: ["AI Assistant", "Communication", "Business"]
    },

    // Media Resources
    {
        name: "Pexels",
        description: "Free stock photos and videos for creative projects",
        url: "https://www.pexels.com",
        category: "media",
        tags: ["Stock Media", "Free", "Creative"]
    },
    {
        name: "Pixabay",
        description: "Free stock photos, videos, and music",
        url: "https://pixabay.com",
        category: "media",
        tags: ["Stock Media", "Free", "Multiple Formats"]
    },
    {
        name: "Unsplash",
        description: "High-quality free stock photos",
        url: "https://unsplash.com",
        category: "media",
        tags: ["Stock Photos", "High Quality", "Free"]
    },
    {
        name: "Vecteezy",
        description: "Free vector graphics and stock photos",
        url: "https://www.vecteezy.com",
        category: "media",
        tags: ["Vector Graphics", "Stock Photos", "Free"]
    },
    {
        name: "Videvo",
        description: "Free stock videos and motion graphics",
        url: "https://www.videvo.net",
        category: "media",
        tags: ["Stock Videos", "Motion Graphics", "Free"]
    },
    {
        name: "Mixkit",
        description: "Free stock videos, music, and sound effects",
        url: "https://mixkit.co",
        category: "media",
        tags: ["Stock Media", "Music", "Sound Effects"]
    },
    {
        name: "Storyblocks",
        description: "Subscription-based stock media library",
        url: "https://www.storyblocks.com",
        category: "media",
        tags: ["Stock Media", "Subscription", "Library"]
    },
    {
        name: "Envato Elements",
        description: "Creative assets marketplace with subscription",
        url: "https://elements.envato.com",
        category: "media",
        tags: ["Creative Assets", "Subscription", "Marketplace"]
    },
    {
        name: "Freepik",
        description: "Free vector graphics, photos, and PSD files",
        url: "https://www.freepik.com",
        category: "media",
        tags: ["Vector Graphics", "Photos", "PSD"]
    },
    {
        name: "Flaticon",
        description: "Free icons and stickers for your projects",
        url: "https://www.flaticon.com",
        category: "media",
        tags: ["Icons", "Stickers", "Free"]
    },
    {
        name: "Icons8",
        description: "Free icons, illustrations, and photos",
        url: "https://icons8.com",
        category: "media",
        tags: ["Icons", "Illustrations", "Photos"]
    },
    {
        name: "Canva",
        description: "Free online design platform with media resources",
        url: "https://www.canva.com",
        category: "media",
        tags: ["Design", "Templates", "Resources"]
    },
    {
        name: "Adobe Stock",
        description: "Professional stock media marketplace",
        url: "https://stock.adobe.com",
        category: "media",
        tags: ["Stock Media", "Professional", "Marketplace"]
    },
    {
        name: "Shutterstock",
        description: "Premium stock photos, vectors, and videos",
        url: "https://www.shutterstock.com",
        category: "media",
        tags: ["Stock Media", "Premium", "Library"]
    },
    {
        name: "Getty Images",
        description: "Professional stock photography and media",
        url: "https://www.gettyimages.com",
        category: "media",
        tags: ["Stock Photos", "Professional", "Media"]
    },
    {
        name: "Pond5",
        description: "Stock media marketplace for creative professionals",
        url: "https://www.pond5.com",
        category: "media",
        tags: ["Stock Media", "Marketplace", "Professional"]
    },
    {
        name: "Videezy",
        description: "Free stock videos and motion graphics",
        url: "https://www.videezy.com",
        category: "media",
        tags: ["Stock Videos", "Motion Graphics", "Free"]
    },
    {
        name: "Coverr",
        description: "Free stock videos for websites",
        url: "https://coverr.co",
        category: "media",
        tags: ["Stock Videos", "Websites", "Free"]
    },
    {
        name: "Life of Vids",
        description: "Free stock videos and loops",
        url: "https://www.lifeofvids.com",
        category: "media",
        tags: ["Stock Videos", "Loops", "Free"]
    },
    {
        name: "Mazwai",
        description: "Free stock videos and motion graphics",
        url: "https://mazwai.com",
        category: "media",
        tags: ["Stock Videos", "Motion Graphics", "Free"]
    }
];

// Cache DOM elements
const elements = {
    searchInput: document.getElementById('searchInput'),
    toolsGrid: document.getElementById('toolsGrid'),
    categoryButtons: document.querySelectorAll('.category-btn')
};

// Create loading skeleton
const createSkeleton = () => {
    const skeleton = document.createElement('div');
    skeleton.className = 'tool-card skeleton';
    skeleton.innerHTML = `
        <div class="skeleton" style="height: 24px; width: 70%; margin-bottom: 12px;"></div>
        <div class="skeleton" style="height: 16px; width: 100%; margin-bottom: 8px;"></div>
        <div class="skeleton" style="height: 16px; width: 90%; margin-bottom: 12px;"></div>
        <div style="display: flex; gap: 8px;">
            <div class="skeleton" style="height: 24px; width: 80px;"></div>
            <div class="skeleton" style="height: 24px; width: 60px;"></div>
        </div>
    `;
    return skeleton;
};

// Show loading state
const showLoading = () => {
    elements.toolsGrid.innerHTML = '';
    for (let i = 0; i < 6; i++) {
        elements.toolsGrid.appendChild(createSkeleton());
    }
};

// Debounce function for search with improved performance
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Create tool card with optimized rendering
const createToolCard = (tool) => {
    const card = document.createElement('a');
    card.href = tool.url;
    card.className = 'tool-card';
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    
    // Use template literal for better performance
    card.innerHTML = `
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
        <div class="tags">
            ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
    
    return card;
};

// Optimized tool filtering with improved search
const filterTools = debounce(() => {
    const searchTerm = elements.searchInput.value.toLowerCase().trim();
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    
    // Show loading state
    showLoading();
    
    // Use requestAnimationFrame for smooth rendering
    requestAnimationFrame(() => {
        const filteredTools = tools.filter(tool => {
            const matchesSearch = searchTerm === '' || 
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm) ||
                tool.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            
            const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
            
            return matchesSearch && matchesCategory;
        });
        
        renderTools(filteredTools);
    });
}, 150);

// Optimized tool rendering with document fragment and intersection observer
const renderTools = (toolsToRender) => {
    const fragment = document.createDocumentFragment();
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    toolsToRender.forEach((tool, index) => {
        const card = createToolCard(tool);
        card.style.opacity = '0';
        card.style.transition = 'opacity 0.3s ease';
        fragment.appendChild(card);
        observer.observe(card);
    });
    
    elements.toolsGrid.innerHTML = '';
    elements.toolsGrid.appendChild(fragment);
};

// Event listeners with optimized handling
const setupEventListeners = () => {
    // Search input with improved performance
    elements.searchInput.addEventListener('input', filterTools, { passive: true });
    
    // Category buttons with improved accessibility
    elements.categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            elements.categoryButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            filterTools();
        }, { passive: true });
    });

    // Add keyboard navigation for categories
    elements.categoryButtons.forEach(button => {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
};

// Initialize page with optimized loading
const initializePage = () => {
    showLoading();
    requestAnimationFrame(() => {
        renderTools(tools);
        setupEventListeners();
    });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
} 
