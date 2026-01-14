import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';

const POSTS = [
  {
    id: 1,
    title: "How to use a prompt list with Google Whisk AI",
    excerpt: "A step-by-step guide to uploading CSVs and using Whisk AI batch processing for maximum efficiency.",
    date: "Oct 12, 2025",
    author: "Sarah Connor",
    image: "https://picsum.photos/seed/ai1/800/600",
    category: "Tutorial"
  },
  {
    id: 2,
    title: "The fastest way to generate 100 images in Google Whisk",
    excerpt: "Stop clicking. Learn how to automate Google Whisk prompts to generate 100+ coherent images in minutes.",
    date: "Sep 28, 2025",
    author: "John Matrix",
    image: "https://picsum.photos/seed/ai2/800/600",
    category: "Workflow"
  },
  {
    id: 3,
    title: "Google Whisk tips for designers: Exporting in Bulk",
    excerpt: "Why we are the best WhiskAutomator alternative. Learn how to export Whisk AI images in bulk with metadata.",
    date: "Sep 15, 2025",
    author: "Team Whisk",
    image: "https://picsum.photos/seed/ai3/800/600",
    category: "Product"
  }
];

const ITEMS_PER_PAGE = 2;

export const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(POSTS.length / ITEMS_PER_PAGE);

  useEffect(() => {
    // Read page from URL on mount
    const params = new URLSearchParams(window.location.search);
    const pageParam = parseInt(params.get('page') || '1');
    if (!isNaN(pageParam) && pageParam > 0) {
      setCurrentPage(pageParam);
    }
    
    // Set Canonical for SEO
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    const cleanUrl = new URL(window.location.href);
    // Ensure we are pointing to the authoritative version
    link.setAttribute('href', `https://whiskautomation.com/?view=blog&page=${pageParam}`);

  }, []);

  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update URL for sharing and SEO
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('view', 'blog');
    newUrl.searchParams.set('page', newPage.toString());
    window.history.pushState({}, '', newUrl);
  };

  const paginatedPosts = POSTS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
       <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-white mb-6">Latest <span className="text-primary">Guides</span></h1>
            <p className="text-slate-400 text-xl">Expert tutorials on Google Whisk workflow automation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
             {paginatedPosts.map(post => (
               <div key={post.id} className="group rounded-[2rem] bg-surface border border-white/10 overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-2 duration-300">
                  <div className="h-48 overflow-hidden relative">
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                     <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                     </div>
                  </div>
                  <div className="p-8">
                     <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                        <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                     <p className="text-slate-400 text-sm mb-6 leading-relaxed">{post.excerpt}</p>
                     <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                        Read Guide <ArrowRight size={16} />
                     </button>
                  </div>
               </div>
             ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4">
            <button 
              onClick={() => changePage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-full border border-white/10 hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="text-sm font-bold text-slate-400">
              Page <span className="text-white">{currentPage}</span> of {totalPages}
            </div>

            <button 
              onClick={() => changePage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full border border-white/10 hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
       </div>
    </div>
  );
};