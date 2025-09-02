import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Calendar, User, ArrowRight, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useState } from 'react';

// 3D Floating Book Elements Component
const FloatingBookElements = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={2500} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={1.8} rotationIntensity={0.7} floatIntensity={0.6}>
        <mesh position={[-2, 1.5, 0]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[0.5, 0.3, 0.4]} />
          <meshStandardMaterial color="#00ff88" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.7}>
        <mesh position={[2, -1.5, 0]} rotation={[-0.3, 0.8, 0.2]}>
          <boxGeometry args={[0.4, 0.5, 0.3]} />
          <meshStandardMaterial color="#ff0088" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={1.6} rotationIntensity={0.8} floatIntensity={0.5}>
        <mesh position={[0, 2.5, -1]} rotation={[0.2, -0.5, 0.7]}>
          <boxGeometry args={[0.3, 0.4, 0.5]} />
          <meshStandardMaterial color="#0088ff" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[-1.8, -2, 0]} rotation={[0.8, -0.2, 0.4]}>
          <boxGeometry args={[0.4, 0.3, 0.4]} />
          <meshStandardMaterial color="#ffaa00" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.25} />
    </Canvas>
  );
};

const BlogPage = () => {
  const [expandedPosts, setExpandedPosts] = useState({});
  const navigate = useNavigate();

  const togglePost = (postId) => {
    setExpandedPosts(prev => {
      const newState = {};
      // Close all other posts
      Object.keys(prev).forEach(id => {
        if (id !== postId.toString()) {
          newState[id] = false;
        }
      });
      // Toggle the clicked post
      newState[postId] = !prev[postId];
      return newState;
    });
  };

  const openPost = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const getCardClassName = (postId) => {
    const baseClass = "blog-post-card";
    const isExpanded = expandedPosts[postId];
    return isExpanded ? `${baseClass} expanded-card` : baseClass;
  };

  const featuredPosts = [
    {
      id: 1,
      title: "Building a RAG System with LangChain and Pinecone for Smarter Web Apps",
      excerpt: "Discover how artificial intelligence is revolutionizing the way we build software, from automated testing to intelligent code generation and beyond.",
      fullContent: "Large Language Models have changed the way we think about software and user experiences, but they are not perfect. They can generate content fluently, yet they sometimes produce outdated or even incorrect answers because their knowledge is frozen at the time of training. This is where Retrieval-Augmented Generation, or RAG, is stepping in as a breakthrough. Instead of relying entirely on what a model has memorized, RAG brings in relevant, real-time information from external sources and feeds it into the model’s reasoning process. The result is a system that is not only intelligent but also grounded in facts. Think about a customer support chatbot for a software platform. A standard AI might give a generic response when a developer asks about a specific API integration. With RAG, the system first retrieves the most relevant sections of the documentation, processes them, and only then asks the model to generate a response. The model uses those real snippets of knowledge to produce an accurate answer, tailored to the user’s query. This makes the assistant far more reliable, up to date, and aligned with the product’s evolving features. The architecture behind RAG can be thought of as a pipeline. At its core, it ingests data from sources like PDFs, websites, or internal knowledge bases. This data is broken into smaller chunks and converted into numerical representations called embeddings. These embeddings are then stored in a vector database such as Pinecone, which is designed for fast and scalable similarity search. When a user submits a query, the system converts that query into its own embedding and searches the vector database for the most similar pieces of information. Those results are passed to the language model, which uses them as context to produce the final answer. By combining the reasoning of the model with the factual grounding of external data, RAG reduces hallucinations and produces answers that are both fluent and accurate. LangChain has become one of the most popular frameworks for orchestrating this workflow. It handles the heavy lifting of splitting text into chunks, generating embeddings, connecting to vector stores, and formatting prompts in a way that integrates retrieved context smoothly. Pinecone, on the other hand, serves as a powerful engine for vector search, capable of storing millions of embeddings and returning relevant chunks in milliseconds. Together, they create a robust system that can support applications at scale. The potential of RAG for web applications is huge. Imagine opening a SaaS dashboard and having a built-in assistant that can answer any product question, troubleshoot issues instantly, or explain advanced configurations in simple terms. Instead of searching through documentation pages or posting queries in forums, users get context-aware answers within the app itself. For educational platforms, RAG can transform course material into interactive tutors, giving students personalized explanations drawn directly from lecture notes or textbooks. In healthcare apps, it can provide clinicians with the latest guidelines, retrieved from trusted medical sources, before generating advice. Even in e-commerce, it can drive intelligent shopping assistants that not only understand user intent but also respond based on real-time inventory and product details. However, building an effective RAG system comes with its own challenges. The quality of the data you ingest directly determines the quality of the responses. If your documentation is outdated or cluttered, the system will faithfully reproduce that noise. Choosing how to split data is equally important. Chunks that are too large may overwhelm the model, while chunks that are too small may strip away the necessary context. Performance is another factor, as retrieving information from a vector database and passing it through a large model can introduce noticeable delays. Techniques like caching, careful prompt engineering, and optimizing vector search parameters are essential for keeping the system fast and efficient. Another dimension to consider is security. Since RAG pulls in external data and feeds it into prompts, developers must ensure that sensitive or private information does not leak unintentionally. This is especially critical in industries like finance, healthcare, or enterprise SaaS where regulatory compliance is non-negotiable. Costs can also grow quickly as usage scales, since every retrieval, embedding generation, and language model call adds up. Balancing reliability, latency, and cost efficiency is part of the craft of building production-ready systems. Despite these challenges, the future of RAG looks incredibly promising. By combining the raw intelligence of large language models with the precision of external knowledge, RAG bridges the gap between generative AI and trustworthy, domain-specific applications. Instead of replacing developers, it equips them with tools to build smarter, more dynamic, and more user-friendly applications. For businesses, this means delivering better user experiences, reducing support costs, and unlocking entirely new kinds of products. For users, it means having AI systems they can trust, because the answers they get are grounded in real knowledge, not just plausible guesses. RAG is not just a technical trick. It is becoming a foundational design pattern for the next generation of AI-powered applications. With frameworks like LangChain and infrastructure like Pinecone making it accessible, developers today have the chance to build assistants, platforms, and products that feel truly intelligent—systems that can learn from evolving knowledge bases, adapt instantly, and serve users with a level of accuracy that was previously impossible. As AI continues to weave itself into the core of software development, RAG will stand out as one of the most impactful innovations shaping the future of web applications.",
      author: "Akshay Rastogi",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "AI & Technology",
      tags: ["AI", "Software Development", "Machine Learning"]
    },
    {
      id: 2,
      title: "AI-Powered DevOps: Automating Cloud Monitoring with LangChain Agents",
      excerpt: "Explore how DevOps teams can leverage LangChain-powered AI agents to analyze logs, detect anomalies, and even suggest automated fixes in cloud environments.",
      fullContent: "Modern DevOps pipelines are complex, distributed, and constantly in motion. From microservices to Kubernetes clusters, the sheer volume of logs and metrics generated in a cloud environment can overwhelm even the best engineering teams. Human engineers spend countless hours scanning logs, configuring alerts, and firefighting production issues. This is an area where AI-powered DevOps agents are beginning to make a significant impact. LangChain provides a framework for building intelligent agents that can process streams of log data, reason through anomalies, and even recommend remediation steps. Instead of manually combing through endless error lines, a DevOps engineer could simply ask, “Why is service X experiencing latency spikes?” and the AI agent would analyze logs, correlate metrics, and respond with actionable insights. This not only saves time but also enables proactive monitoring. Imagine a cloud monitoring system where an agent flags unusual traffic patterns in real-time, explains possible causes such as sudden DDoS attempts or misconfigured load balancers, and suggests steps like scaling instances or tightening firewall rules. Going further, agents can even trigger automated workflows: restarting pods in Kubernetes, rolling back faulty deployments, or adjusting auto-scaling groups without requiring manual intervention. The implications for developer productivity and system reliability are enormous. Instead of reacting after an outage, teams can leverage AI agents to predict and prevent downtime. This moves DevOps closer to a truly self-healing infrastructure where AI augments human engineers rather than replacing them. Of course, challenges exist. Cloud environments are highly varied, and data privacy is a concern. Feeding sensitive logs into external models requires careful consideration of compliance requirements. Latency is also a factor—AI agents must deliver insights quickly enough to be useful in real-time incident response. Solutions like fine-tuned models hosted within secure environments, combined with caching strategies, can help balance these trade-offs. AI in DevOps is not science fiction anymore—it is quickly becoming a necessity. As infrastructure grows more complex, teams that adopt intelligent monitoring and remediation will not only reduce downtime but also free engineers to focus on innovation instead of firefighting. LangChain agents represent a practical path toward this future, where DevOps is smarter, faster, and more resilient.",
      author: "Shiva Dokula",
      date: "December 12, 2024",
      readTime: "8 min read",
      category: "Cloud & DevOps",
      tags: ["AI", "AI Agents", "Cloud","LangChain"]
    },
    {
      id: 3,
      title: "From Docs to Chatbots: Turning Documentation into an Interactive RAG Assistant",
      excerpt: "Learn how to transform static documentation into a conversational assistant powered by RAG pipelines and LangChain.",
      fullContent: "Documentation has always been a cornerstone of the developer experience, but it is often underutilized. Most users find themselves scrolling endlessly, searching for the right page, or piecing together fragmented information. This static, one-way interaction limits the usefulness of documentation, no matter how well-written it is. Enter Retrieval-Augmented Generation, or RAG—a technique that can transform dry documentation into an interactive, conversational assistant. Instead of reading through pages, users can ask natural questions like, “How do I authenticate with the API?” or “Show me an example of creating a new order.” A RAG assistant built with LangChain retrieves the relevant content from the docs and uses a language model to provide an accurate, conversational response. This creates an entirely new way of consuming documentation, one that feels more like a conversation with an expert than a search through a manual. For companies, this means drastically reduced support tickets and happier users who can solve problems faster. For developers, it creates an experience where learning a new tool doesn’t feel like climbing a steep hill but rather having a guide at their side. The potential isn’t limited to API docs—it can extend to product manuals, internal onboarding guides, and even educational course material. The challenge in building such assistants lies in managing context. Documentation is often long, and deciding how to split it into meaningful chunks for embeddings requires careful planning. Too broad, and answers become vague. Too narrow, and the assistant might miss critical context. Additionally, keeping the knowledge base updated is key—if the docs change but the embeddings are outdated, the assistant risks giving inaccurate advice. Despite these hurdles, the value is undeniable. Interactive documentation assistants redefine how knowledge is shared, making it accessible, user-friendly, and far more efficient. In a world where time-to-adoption is critical for software products, this shift can make the difference between frustrated drop-offs and delighted, loyal users.",
      author: "Nithin Rajeev",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "AI & Technology",
      tags: ["RAG", "Web Apps","LangChain", "AI", "Documentation"]
    }  ];

  const categories = [
    "All Posts",
    "AI & Technology",
    "Web Applications",
    "Cloud & DevOps"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const allBlogPosts = [
    {
      id: 1,
      title: "Building a RAG System with LangChain and Pinecone for Smarter Web Apps",
      excerpt: "Discover how artificial intelligence is revolutionizing the way we build software, from automated testing to intelligent code generation and beyond.",
      fullContent: "Large Language Models have changed the way we think about software and user experiences, but they are not perfect. They can generate content fluently, yet they sometimes produce outdated or even incorrect answers because their knowledge is frozen at the time of training. This is where Retrieval-Augmented Generation, or RAG, is stepping in as a breakthrough. Instead of relying entirely on what a model has memorized, RAG brings in relevant, real-time information from external sources and feeds it into the model’s reasoning process. The result is a system that is not only intelligent but also grounded in facts. Think about a customer support chatbot for a software platform. A standard AI might give a generic response when a developer asks about a specific API integration. With RAG, the system first retrieves the most relevant sections of the documentation, processes them, and only then asks the model to generate a response. The model uses those real snippets of knowledge to produce an accurate answer, tailored to the user’s query. This makes the assistant far more reliable, up to date, and aligned with the product’s evolving features. The architecture behind RAG can be thought of as a pipeline. At its core, it ingests data from sources like PDFs, websites, or internal knowledge bases. This data is broken into smaller chunks and converted into numerical representations called embeddings. These embeddings are then stored in a vector database such as Pinecone, which is designed for fast and scalable similarity search. When a user submits a query, the system converts that query into its own embedding and searches the vector database for the most similar pieces of information. Those results are passed to the language model, which uses them as context to produce the final answer. By combining the reasoning of the model with the factual grounding of external data, RAG reduces hallucinations and produces answers that are both fluent and accurate. LangChain has become one of the most popular frameworks for orchestrating this workflow. It handles the heavy lifting of splitting text into chunks, generating embeddings, connecting to vector stores, and formatting prompts in a way that integrates retrieved context smoothly. Pinecone, on the other hand, serves as a powerful engine for vector search, capable of storing millions of embeddings and returning relevant chunks in milliseconds. Together, they create a robust system that can support applications at scale. The potential of RAG for web applications is huge. Imagine opening a SaaS dashboard and having a built-in assistant that can answer any product question, troubleshoot issues instantly, or explain advanced configurations in simple terms. Instead of searching through documentation pages or posting queries in forums, users get context-aware answers within the app itself. For educational platforms, RAG can transform course material into interactive tutors, giving students personalized explanations drawn directly from lecture notes or textbooks. In healthcare apps, it can provide clinicians with the latest guidelines, retrieved from trusted medical sources, before generating advice. Even in e-commerce, it can drive intelligent shopping assistants that not only understand user intent but also respond based on real-time inventory and product details. However, building an effective RAG system comes with its own challenges. The quality of the data you ingest directly determines the quality of the responses. If your documentation is outdated or cluttered, the system will faithfully reproduce that noise. Choosing how to split data is equally important. Chunks that are too large may overwhelm the model, while chunks that are too small may strip away the necessary context. Performance is another factor, as retrieving information from a vector database and passing it through a large model can introduce noticeable delays. Techniques like caching, careful prompt engineering, and optimizing vector search parameters are essential for keeping the system fast and efficient. Another dimension to consider is security. Since RAG pulls in external data and feeds it into prompts, developers must ensure that sensitive or private information does not leak unintentionally. This is especially critical in industries like finance, healthcare, or enterprise SaaS where regulatory compliance is non-negotiable. Costs can also grow quickly as usage scales, since every retrieval, embedding generation, and language model call adds up. Balancing reliability, latency, and cost efficiency is part of the craft of building production-ready systems. Despite these challenges, the future of RAG looks incredibly promising. By combining the raw intelligence of large language models with the precision of external knowledge, RAG bridges the gap between generative AI and trustworthy, domain-specific applications. Instead of replacing developers, it equips them with tools to build smarter, more dynamic, and more user-friendly applications. For businesses, this means delivering better user experiences, reducing support costs, and unlocking entirely new kinds of products. For users, it means having AI systems they can trust, because the answers they get are grounded in real knowledge, not just plausible guesses. RAG is not just a technical trick. It is becoming a foundational design pattern for the next generation of AI-powered applications. With frameworks like LangChain and infrastructure like Pinecone making it accessible, developers today have the chance to build assistants, platforms, and products that feel truly intelligent—systems that can learn from evolving knowledge bases, adapt instantly, and serve users with a level of accuracy that was previously impossible. As AI continues to weave itself into the core of software development, RAG will stand out as one of the most impactful innovations shaping the future of web applications.",
      author: "Akshay Rastogi",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "AI & Technology",
      tags: ["AI", "Software Development", "Machine Learning"]
    },
    {
      id: 2,
      title: "AI-Powered DevOps: Automating Cloud Monitoring with LangChain Agents",
      excerpt: "Explore how DevOps teams can leverage LangChain-powered AI agents to analyze logs, detect anomalies, and even suggest automated fixes in cloud environments.",
      fullContent: "Modern DevOps pipelines are complex, distributed, and constantly in motion. From microservices to Kubernetes clusters, the sheer volume of logs and metrics generated in a cloud environment can overwhelm even the best engineering teams. Human engineers spend countless hours scanning logs, configuring alerts, and firefighting production issues. This is an area where AI-powered DevOps agents are beginning to make a significant impact. LangChain provides a framework for building intelligent agents that can process streams of log data, reason through anomalies, and even recommend remediation steps. Instead of manually combing through endless error lines, a DevOps engineer could simply ask, “Why is service X experiencing latency spikes?” and the AI agent would analyze logs, correlate metrics, and respond with actionable insights. This not only saves time but also enables proactive monitoring. Imagine a cloud monitoring system where an agent flags unusual traffic patterns in real-time, explains possible causes such as sudden DDoS attempts or misconfigured load balancers, and suggests steps like scaling instances or tightening firewall rules. Going further, agents can even trigger automated workflows: restarting pods in Kubernetes, rolling back faulty deployments, or adjusting auto-scaling groups without requiring manual intervention. The implications for developer productivity and system reliability are enormous. Instead of reacting after an outage, teams can leverage AI agents to predict and prevent downtime. This moves DevOps closer to a truly self-healing infrastructure where AI augments human engineers rather than replacing them. Of course, challenges exist. Cloud environments are highly varied, and data privacy is a concern. Feeding sensitive logs into external models requires careful consideration of compliance requirements. Latency is also a factor—AI agents must deliver insights quickly enough to be useful in real-time incident response. Solutions like fine-tuned models hosted within secure environments, combined with caching strategies, can help balance these trade-offs. AI in DevOps is not science fiction anymore—it is quickly becoming a necessity. As infrastructure grows more complex, teams that adopt intelligent monitoring and remediation will not only reduce downtime but also free engineers to focus on innovation instead of firefighting. LangChain agents represent a practical path toward this future, where DevOps is smarter, faster, and more resilient.",
      author: "Shiva Dokula",
      date: "December 12, 2024",
      readTime: "8 min read",
      category: "Cloud & DevOps",
      tags: ["AI", "AI Agents", "Cloud","LangChain"]
    },
    {
      id: 3,
      title: "From Docs to Chatbots: Turning Documentation into an Interactive RAG Assistant",
      excerpt: "Learn how to transform static documentation into a conversational assistant powered by RAG pipelines and LangChain.",
      fullContent: "Documentation has always been a cornerstone of the developer experience, but it is often underutilized. Most users find themselves scrolling endlessly, searching for the right page, or piecing together fragmented information. This static, one-way interaction limits the usefulness of documentation, no matter how well-written it is. Enter Retrieval-Augmented Generation, or RAG—a technique that can transform dry documentation into an interactive, conversational assistant. Instead of reading through pages, users can ask natural questions like, “How do I authenticate with the API?” or “Show me an example of creating a new order.” A RAG assistant built with LangChain retrieves the relevant content from the docs and uses a language model to provide an accurate, conversational response. This creates an entirely new way of consuming documentation, one that feels more like a conversation with an expert than a search through a manual. For companies, this means drastically reduced support tickets and happier users who can solve problems faster. For developers, it creates an experience where learning a new tool doesn’t feel like climbing a steep hill but rather having a guide at their side. The potential isn’t limited to API docs—it can extend to product manuals, internal onboarding guides, and even educational course material. The challenge in building such assistants lies in managing context. Documentation is often long, and deciding how to split it into meaningful chunks for embeddings requires careful planning. Too broad, and answers become vague. Too narrow, and the assistant might miss critical context. Additionally, keeping the knowledge base updated is key—if the docs change but the embeddings are outdated, the assistant risks giving inaccurate advice. Despite these hurdles, the value is undeniable. Interactive documentation assistants redefine how knowledge is shared, making it accessible, user-friendly, and far more efficient. In a world where time-to-adoption is critical for software products, this shift can make the difference between frustrated drop-offs and delighted, loyal users.",
      author: "Nithin Rajeev",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Web Applications",
      tags: ["RAG", "Web Application","LangChain", "AI", "Documentation"]
    },
    {
      id: 4,
      title: "Scaling AI Agents in the Cloud with Serverless Functions",
      excerpt: "Discover how to deploy LangChain-based AI agents using AWS Lambda and serverless infrastructure for efficient, on-demand scaling.",
      fullContent: "Deploying AI agents in the cloud is one thing. Scaling them cost-effectively is another. Running large models continuously can be expensive, especially when demand is unpredictable. This is why serverless computing has emerged as a natural fit for AI agents, allowing developers to scale workloads dynamically while paying only for what they use. With serverless infrastructure like AWS Lambda, AI agents can be deployed in lightweight containers that spin up only when triggered by an event, such as a user query. This means a customer support agent, for example, can handle thousands of requests during peak hours and scale down to zero during downtime—all without manual intervention. The cloud provider manages the scaling, availability, and infrastructure overhead, letting developers focus on building smarter agents rather than managing servers. This approach is especially useful for microservices-based architectures where different agents are specialized for different tasks. One agent might handle customer queries, another could monitor analytics, and a third could process documents. Each agent runs independently, triggered only when needed, making the system modular and cost-efficient. The trade-offs lie in latency and cold starts. Since serverless functions spin up on demand, the first request may take longer, which can be noticeable in conversational interfaces. Developers can mitigate this with techniques like function warming or hybrid architectures where critical agents are kept warm while others scale dynamically. Security is another factor—since these agents often access sensitive data, developers must configure IAM policies and encryption carefully. Serverless AI agents represent a pragmatic step toward scalable, intelligent applications. They bring together the intelligence of LangChain, the flexibility of cloud infrastructure, and the cost savings of on-demand compute. For businesses experimenting with AI at scale, this model is not just efficient—it is future-proof.",
      author: "Mohamed Moin Irfan",
      date: "December 8, 2024",
      readTime: "8 min read",
      category: "Cloud & DevOps",
      tags: ["AI","Cloud","Serverless","LangChain","AI agents"]
    },
    {
      id: 5,
      title: "AI in CI/CD: Intelligent Pull Request Reviewers with LangChain",
      excerpt: "See how AI agents can act as automated PR reviewers, detecting bugs, suggesting improvements, and improving code quality in CI/CD pipelines.",
      fullContent: "Code reviews are essential for maintaining quality, but they are also one of the biggest bottlenecks in modern software development. Developers often wait hours, if not days, for peers to review their pull requests. Human reviewers bring valuable judgment and experience, but many of the issues caught in reviews—formatting problems, repetitive bugs, or missing documentation—could be flagged automatically. This is where AI-powered reviewers built with LangChain are beginning to make their mark. An AI reviewer embedded in a CI/CD pipeline can analyze every pull request as soon as it is submitted. It can identify potential bugs, highlight security vulnerabilities, suggest performance improvements, and even provide explanations for its recommendations. By handling the repetitive and mechanical aspects of review, the AI frees human reviewers to focus on higher-level design and architectural decisions. This doesn’t mean replacing human judgment. Instead, it augments it. For example, the AI might point out that a function lacks error handling for edge cases, while the human reviewer decides whether the overall design fits the system architecture. The result is faster reviews, higher-quality code, and more satisfied developers. The challenges are primarily about trust and adoption. Developers need to feel confident that the AI is not generating false positives or overwhelming them with noise. Careful prompt design, fine-tuning, and incremental rollout are key. Another challenge is ensuring privacy—source code is sensitive intellectual property, so running AI reviewers within secure environments is critical. As the pace of software development accelerates, intelligent reviewers are likely to become standard in modern CI/CD pipelines. They represent a future where every line of code is not only reviewed by peers but also enhanced by AI-driven insights. For organizations, this means fewer bugs reaching production, stronger security, and more efficient development cycles. For developers, it means spending less time on nitpicks and more time on building.",
      author: "Sindhu Jinukala",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "AI & Technology",
      tags: ["AI","DevOps","LangChain","Software Development"]
    }
  ];

  const filteredPosts = selectedCategory === "All Posts" 
    ? allBlogPosts 
    : allBlogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="ai-hero">
        <div className="hero-background">
          <FloatingBookElements />
        </div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <BookOpen size={24} />
            <span>Resources</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Insights & Knowledge
            <span className="title-highlight"> Hub</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            From deep-tech breakdowns to product updates, our blog is where we share what we're brewing. Learn, explore, and grow with us.
          </motion.p>
        </motion.div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Featured Articles</h2>
            <p>Our latest insights and thought leadership</p>
          </motion.div>

          <div className={`featured-posts-grid ${featuredPosts.length === 2 ? 'two-columns' : ''}`}>
            {featuredPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                className={getCardClassName(post.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  layout: { duration: 0.4, ease: "easeInOut" }
                }}
                viewport={{ once: true }}
                whileHover={{ y: expandedPosts[post.id] ? 0 : -5 }}
                layout
              >
                <div className="card-header">
                  <div className="card-icon">
                    <BookOpen size={24} />
                  </div>
                  <div className="card-meta">
                    <span className="post-category">{post.category}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                </div>
                
                <div className="card-content">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                </div>
                
                <div className="card-footer">
                  <div className="post-author">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <button 
                    className={`read-more-link ${expandedPosts[post.id] ? 'expanded' : ''}`}
                    onClick={() => openPost(post.id)}
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
                
                {expandedPosts[post.id] && null}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <motion.div 
            className="categories-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="all-posts-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {selectedCategory !== "All Posts" && (
              <div className="filter-indicator">
                <span>Filtered by: <strong>{selectedCategory}</strong></span>
                <button 
                  className="clear-filter-btn"
                  onClick={() => setSelectedCategory("All Posts")}
                >
                  Clear Filter
                </button>
              </div>
            )}
          </motion.div>

          <div className={`all-posts-grid ${filteredPosts.length === 2 ? 'two-columns' : ''}`}>
            {filteredPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                className={getCardClassName(post.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: expandedPosts[post.id] ? 0 : -5 }}
                layout
              >
                <div className="card-header">
                  <div className="card-icon">
                    <BookOpen size={24} />
                  </div>
                  <div className="card-meta">
                    <span className="post-category">{post.category}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                </div>
                
                <div className="card-content">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                </div>
                
                <div className="card-footer">
                  <div className="post-author">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <button 
                    className="read-more-link"
                    onClick={() => openPost(post.id)}
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
                
                {expandedPosts[post.id] && null}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <motion.div 
            className="newsletter-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Stay Updated</h2>
            <p>New insights, stories, and updates are brewed here regularly.<br/> Stay tuned...</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
