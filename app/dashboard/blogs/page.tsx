'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Edit2, Trash2, Eye, Plus } from 'lucide-react'
import React from 'react'
import { blogs } from '@prisma/client'

export default function BlogsPage() {
  const [blogPosts, setBlogPosts] = React.useState<blogs[]>([])
  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogPosts(data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      // Use mock data if API fails
      setBlogPosts([]);
    }
  };
  React.useEffect(() => {
    fetchBlogs()
  }, [])

  const handleDeleteBlog = async(id: string) => {
     try {
      await fetch(`/api/blogs/${id}`,
        {
          method: "DELETE"
        }
        
      );
      fetchBlogs()
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  } 
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Blog Posts</h1>
          <p className="text-muted-foreground mt-1">Manage all your blog articles</p>
        </div>
        <Link href="/dashboard/blogs/create">
          <Button className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
            <Plus size={18} className="mr-2" />
            Create Post
          </Button>
        </Link>
      </div>

      {/* Blog Posts Table */}
      <div className="rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b border-border">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Title</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground hidden md:table-cell">Date</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogPosts.map((post) => (
                <tr key={post.id} className="border-t border-border hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-foreground">{post.title}</p>
                      <p className="text-sm text-muted-foreground truncate">{post.excerpt}</p>
                    </div>
                  </td>
                
                  <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">
                    {new Date(post.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Link href={`/blog/${post.slug}`} target="_blank" title="View post">
                        <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                          <Eye size={16} />
                        </button>
                      </Link>
                      <Link href={`/dashboard/blogs/${post.id}/edit`}>
                        <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-primary">
                          <Edit2 size={16} />
                        </button>
                      </Link>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors text-muted-foreground hover:text-red-600" onClick={() => handleDeleteBlog(post.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
