'use client'
import { Messages } from '@prisma/client';
import { Mail, Trash2, Check, X } from 'lucide-react'
import { useEffect, useState } from 'react';

function MessagesContent() {
  const [messages, setMessages] = useState<Messages[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Messages | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoadingMessage, setIsLoadingMessage] = useState<Boolean>(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/contact');
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
        // Use mock data if API fails
        setMessages([]);
      }finally{
        setIsLoadingMessage(false)
      }
    };
    fetchMessages();
  }, []);

  const handleViewMessage = (message: Messages) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
    
    // Mark as read if it was unread
    if (!message.read) {
      handleMarkAsRead(message.id);
    }
  };

  const handleMarkAsRead = async (id: string) => {
    // Update local state
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, read: true } : msg
    ));
  
    try {
      await fetch(`/api/contact/${id}`, { method: 'PUT' });
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this message?')) {
      // Update local state
      setMessages(messages.filter(msg => msg.id !== id));
      
      // Close modal if the deleted message was selected
      if (selectedMessage?.id === id) {
        setIsModalOpen(false);
        setSelectedMessage(null);
      }
      
      // TODO: Call API to delete
      try {
        await fetch(`/api/contact/${id}`, { method: 'DELETE' });
      } catch (error) {
        console.error('Error deleting message:', error);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMessage(null);
  };

    if (isLoadingMessage) {
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
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Contact Messages</h1>
        <p className="text-muted-foreground mt-1">View and manage messages from your contact form</p>
      </div>

      {/* Messages Table */}
      <div className="rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b border-border">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-foreground">From</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground hidden sm:table-cell">Subject</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground hidden md:table-cell">Date</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Status</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr
                  key={msg.id}
                  className={`border-t border-border hover:bg-muted/50 transition-colors ${
                    !msg.read ? 'bg-primary/5' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className={`font-medium ${!msg.read ? 'font-bold text-foreground' : 'text-foreground'}`}>
                        {msg.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{msg.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    <button
                      onClick={() => handleViewMessage(msg)}
                      className={`text-left hover:underline focus:outline-none ${
                        !msg.read ? 'font-semibold text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {msg.subject}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">
                    {new Date(msg.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      msg.read
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {msg.read ? 'Read' : 'Unread'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleViewMessage(msg)}
                        className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-primary" 
                        title="View message"
                      >
                        <Mail size={16} />
                      </button>
                      {!msg.read && (
                        <button 
                          onClick={() => handleMarkAsRead(msg.id)}
                          className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-primary" 
                          title="Mark as read"
                        >
                          <Check size={16} />
                        </button>
                      )}
                      <button 
                        onClick={() => handleDelete(msg.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors text-muted-foreground hover:text-red-600" 
                        title="Delete"
                      >
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

      {/* Message Modal */}
      {isModalOpen && selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-background rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">Message Details</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-4">
                {/* Sender Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Name</p>
                    <p className="font-medium text-foreground">{selectedMessage.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a 
                      href={`mailto:${selectedMessage.email}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {selectedMessage.email}
                    </a>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Subject</p>
                  <p className="font-medium text-foreground">{selectedMessage.subject}</p>
                </div>

                {/* Date */}
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Received</p>
                  <p className="text-foreground">
                    {new Date(selectedMessage.date).toLocaleString()}
                  </p>
                </div>

                {/* Message */}
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Message</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-foreground whitespace-pre-wrap">
                      {selectedMessage.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 p-6 border-t border-border bg-muted/50">
              <button
                onClick={() => {
                  window.location.href = `mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`;
                }}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Reply via Email
              </button>
              <button
                onClick={() => {
                  handleDelete(selectedMessage.id);
                  closeModal();
                }}
                className="px-4 py-2 border border-border hover:bg-red-50 rounded-lg transition-colors text-muted-foreground hover:text-red-600 font-medium"
              >
                Delete
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 border border-border hover:bg-muted rounded-lg transition-colors text-foreground font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Summary */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Total Messages</p>
          <p className="text-2xl font-bold text-foreground">{messages.length}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Unread</p>
          <p className="text-2xl font-bold text-foreground">{messages.filter((m) => !m.read).length}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Read</p>
          <p className="text-2xl font-bold text-foreground">{messages.filter((m) => m.read).length}</p>
        </div>
      </div>
    </div>
  )
}

export default function MessagesPage() {
  return <MessagesContent />
}