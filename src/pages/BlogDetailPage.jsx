import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, ArrowRight, ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { getPostById } from './posts';

const BlogDetailPage = () => {
  const { id } = useParams();
  const post = getPostById(id);

  if (!post) {
    return (
      <div className="blog-detail-page">
        <Navigation />
        <section className="container" style={{ padding: '80px 0' }}>
          <h2>Post not found</h2>
          <Link to="/blog" className="read-more-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Go back to Blog <ArrowRight size={16} />
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  // Split long content into readable paragraphs (groups of sentences)
  const sentenceFragments = post.fullContent.split(/\.(\s+|$)/).filter(Boolean);
  const sentences = [];
  for (let i = 0; i < sentenceFragments.length; i += 2) {
    const sentence = sentenceFragments[i].trim();
    if (sentence) sentences.push(sentence + '.');
  }
  const groupSize = Math.ceil(sentences.length / 4) || 1;
  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += groupSize) {
    paragraphs.push(sentences.slice(i, i + groupSize).join(' '));
  }

  return (
    <div className="blog-detail-page">
      <Navigation />

      <section className="container" style={{ paddingTop: 120, paddingBottom: 40 }}>
        <div style={{ marginBottom: 16 }}>
          <Link to="/blog" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }} aria-label="Back to blog">
            <ArrowLeft size={16} />
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-header" style={{ marginBottom: 16 }}>
            <div className="card-icon">
              <BookOpen size={24} />
            </div>
            <div className="card-meta">
              <span className="post-category">{post.category}</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>
          </div>

          <h1 className="post-title" style={{ marginBottom: 12 }}>{post.title}</h1>

          <div className="post-details" style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 24 }}>
            <div className="detail-item" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="detail-item" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <BookOpen size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>

          <article className="content-main">
            {paragraphs.length > 0 ? (
              paragraphs.map((para, idx) => (
                <p key={idx} style={{ marginBottom: 16 }}>{para}</p>
              ))
            ) : (
              <p>{post.fullContent}</p>
            )}
          </article>

          {post.tags?.length > 0 && (
            <div className="post-tags" style={{ marginTop: 24 }}>
              <h4>Tags</h4>
              {post.tags.map((tag, idx) => (
                <span key={idx} className="post-tag">{tag}</span>
              ))}
            </div>
          )}

          <div style={{ marginTop: 32 }}>
            <Link to="/blog" className="back-bottom-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Back to Blog <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;


