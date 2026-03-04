'use client'
import { StatCard } from '@/components/StatCard'
import { BarChart3, FileText, MessageSquare, Share2Icon, Users } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useEffect, useState } from 'react'
interface Stats {
  platforms: number;
  messages: number;
  blogs: number;
  users: number;
}
export default function DashboardPage() {
  const { user} = useAuth()
  const [statsData, setStats] = useState<Stats>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const fetchStats = async () => {
    setIsLoading(true)
      try {
        const response = await fetch('/api/stats');
        if (response.ok) {        const data = await response.json();
          setStats(data);
        } else {
          console.error('Failed to fetch social media accounts');
        }
      } catch (error) {
        console.error('Error fetching social media accounts:', error);
      }finally{
        setIsLoading(false);
      }
    }
    useEffect(()=> {
      fetchStats();
    }, [])
  const stats = [
    {
      icon: <FileText size={32} />,
      label: 'Total Blog Posts',
      value: statsData?.blogs ?? 0,
      description: 'Published articles',
    },
    {
      icon: <MessageSquare size={32} />,
      label: 'Messages Received',
      value: statsData?.messages ?? 0,
      description: 'This month',
    },
  ]

  const adminStats = [
    {
      icon: <Users size={32} />,
      label: 'Total Users',
      value: statsData?.users ?? 0,
      description: 'Active users',
    },
    {
      icon: <Share2Icon />,
      label: 'Total Social',
      value: statsData?.platforms ?? 0,
      description: 'All social Media',
    },
  ];

  const allStats = user?.role === "admin" ? [...stats, ...adminStats] : stats

     if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading blog post...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Welcome back, {user?.role.toLocaleUpperCase()}!</h1>
        <p className="text-muted-foreground mt-2 capitalize">You are logged in as {user?.role}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {allStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="/dashboard/blogs"
            className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors group"
          >
            <div>
              <p className="font-semibold text-foreground group-hover:text-primary">View Blog Posts</p>
              <p className="text-sm text-muted-foreground">Manage your articles</p>
            </div>
          </a>
          <a
            href="/dashboard/messages"
            className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors group"
          >
            <div>
              <p className="font-semibold text-foreground group-hover:text-primary">View Messages</p>
              <p className="text-sm text-muted-foreground">Check contact form submissions</p>
            </div>
          </a>
          {user?.role === "admin" && (
            <>
              <a
                href="/dashboard/users"
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors group"
              >
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary">Manage Users</p>
                  <p className="text-sm text-muted-foreground">View and manage users</p>
                </div>
              </a>
              <a
                href="/dashboard/blogs/create"
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors group"
              >
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary">Create Blog Post</p>
                  <p className="text-sm text-muted-foreground">Write a new article</p>
                </div>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
