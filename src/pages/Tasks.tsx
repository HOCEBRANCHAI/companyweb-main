import React, { useState } from 'react';
import { PlusIcon, FilterIcon, GridIcon, ListIcon, SortAscIcon, CheckCircleIcon, ClockIcon, AlertTriangleIcon, CalendarIcon, ChevronDownIcon, UserIcon, TagIcon, BarChart2Icon, FlagIcon, ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
interface Task {
  id: string;
  title: string;
  description: string;
  deadline: Date;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress' | 'blocked' | 'completed';
  type: 'one-off' | 'ongoing';
  category: 'administrative' | 'financial' | 'legal' | 'operational';
  assignedTo?: string;
  createdAt: Date;
  tags: string[];
}
const dummyTasks: Task[] = [{
  id: '1',
  title: 'Complete VAT Return for Q1',
  description: 'Prepare and submit the quarterly VAT return to the tax authorities',
  deadline: new Date(2024, 3, 30),
  priority: 'high',
  status: 'pending',
  type: 'one-off',
  category: 'financial',
  assignedTo: 'John Doe',
  createdAt: new Date(2024, 2, 15),
  tags: ['tax', 'compliance']
}, {
  id: '2',
  title: 'Review Annual Financial Statements',
  description: 'Review and approve the annual financial statements before submission',
  deadline: new Date(2024, 4, 15),
  priority: 'high',
  status: 'in-progress',
  type: 'one-off',
  category: 'financial',
  assignedTo: 'Jane Smith',
  createdAt: new Date(2024, 3, 1),
  tags: ['finance', 'annual']
}, {
  id: '3',
  title: 'Update Employee Handbook',
  description: 'Update the employee handbook with new policies and procedures',
  deadline: new Date(2024, 5, 10),
  priority: 'medium',
  status: 'blocked',
  type: 'one-off',
  category: 'administrative',
  createdAt: new Date(2024, 2, 20),
  tags: ['HR', 'documentation']
}, {
  id: '4',
  title: 'Monthly Bookkeeping',
  description: 'Reconcile accounts and update bookkeeping records',
  deadline: new Date(2024, 3, 10),
  priority: 'medium',
  status: 'completed',
  type: 'ongoing',
  category: 'financial',
  assignedTo: 'John Doe',
  createdAt: new Date(2024, 2, 25),
  tags: ['finance', 'recurring']
}, {
  id: '5',
  title: 'Renew Business Insurance',
  description: 'Review and renew business insurance policies',
  deadline: new Date(2024, 6, 1),
  priority: 'medium',
  status: 'pending',
  type: 'one-off',
  category: 'legal',
  createdAt: new Date(2024, 3, 5),
  tags: ['insurance', 'compliance']
}, {
  id: '6',
  title: 'Weekly Team Meeting',
  description: 'Conduct weekly team meeting to discuss progress and issues',
  deadline: new Date(2024, 3, 12),
  priority: 'low',
  status: 'pending',
  type: 'ongoing',
  category: 'operational',
  assignedTo: 'Jane Smith',
  createdAt: new Date(2024, 3, 8),
  tags: ['meeting', 'team']
}];
interface TodoListProps {
  tasks: Task[];
  viewMode: 'list' | 'grid';
  onStatusChange: (id: string, status: Task['status']) => void;
  onDelete: (id: string) => void;
}
function TodoList({
  tasks,
  viewMode,
  onStatusChange,
  onDelete
}: TodoListProps) {
  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-[#EA3A70]';
      case 'medium':
        return 'text-yellow-400';
      case 'low':
        return 'text-green-400';
      default:
        return 'text-indigo-300';
    }
  };
  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5 text-green-400" />;
      case 'in-progress':
        return <ClockIcon className="h-5 w-5 text-blue-400" />;
      case 'blocked':
        return <AlertTriangleIcon className="h-5 w-5 text-[#EA3A70]" />;
      case 'pending':
        return <ClockIcon className="h-5 w-5 text-yellow-400" />;
      default:
        return null;
    }
  };
  const getCategoryIcon = (category: Task['category']) => {
    switch (category) {
      case 'administrative':
        return <UserIcon className="h-4 w-4" />;
      case 'financial':
        return <BarChart2Icon className="h-4 w-4" />;
      case 'legal':
        return <FlagIcon className="h-4 w-4" />;
      case 'operational':
        return <TagIcon className="h-4 w-4" />;
      default:
        return null;
    }
  };
  const getStatusOptions = (task: Task) => {
    return <select value={task.status} onChange={e => onStatusChange(task.id, e.target.value as Task['status'])} className="bg-indigo-800/40 border border-indigo-500/20 text-white rounded-lg text-sm px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="blocked">Blocked</option>
        <option value="completed">Completed</option>
      </select>;
  };
  if (viewMode === 'grid') {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map(task => <div key={task.id} className="bg-indigo-800/40 backdrop-blur-md rounded-xl border border-indigo-500/20 p-4 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg mr-3 ${task.category === 'financial' ? 'bg-blue-900/30' : task.category === 'administrative' ? 'bg-purple-900/30' : task.category === 'legal' ? 'bg-yellow-900/30' : 'bg-green-900/30'}`}>
                  {getCategoryIcon(task.category)}
                </div>
                <div>
                  <h3 className="font-medium text-white">{task.title}</h3>
                  <span className="text-xs text-indigo-300">
                    {task.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                {getStatusIcon(task.status)}
              </div>
            </div>
            <p className="text-sm text-indigo-200 mb-4 line-clamp-2">
              {task.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {task.tags.map((tag, index) => <span key={index} className="px-2 py-0.5 bg-indigo-900/50 text-indigo-300 rounded-full text-xs">
                  {tag}
                </span>)}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm text-indigo-300">
                <CalendarIcon className="h-4 w-4 mr-1" />
                {task.deadline.toLocaleDateString()}
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${task.priority === 'high' ? 'bg-red-900/30 text-red-400' : task.priority === 'medium' ? 'bg-yellow-900/30 text-yellow-400' : 'bg-green-900/30 text-green-400'}`}>
                  {task.priority}
                </span>
                {getStatusOptions(task)}
              </div>
            </div>
          </div>)}
      </div>;
  }
  return <div className="space-y-4">
      {tasks.map(task => <div key={task.id} className="bg-indigo-800/40 backdrop-blur-md rounded-xl border border-indigo-500/20 p-4 hover:shadow-lg transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-start mb-3 md:mb-0">
              <div className={`p-2 rounded-lg mr-3 flex-shrink-0 ${task.category === 'financial' ? 'bg-blue-900/30' : task.category === 'administrative' ? 'bg-purple-900/30' : task.category === 'legal' ? 'bg-yellow-900/30' : 'bg-green-900/30'}`}>
                {getCategoryIcon(task.category)}
              </div>
              <div>
                <h3 className="font-medium text-white">{task.title}</h3>
                <p className="text-sm text-indigo-200 mt-1 line-clamp-2">
                  {task.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {task.tags.map((tag, index) => <span key={index} className="px-2 py-0.5 bg-indigo-900/50 text-indigo-300 rounded-full text-xs">
                      {tag}
                    </span>)}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center text-sm text-indigo-300">
                <CalendarIcon className="h-4 w-4 mr-1" />
                {task.deadline.toLocaleDateString()}
              </div>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${task.priority === 'high' ? 'bg-red-900/30 text-red-400' : task.priority === 'medium' ? 'bg-yellow-900/30 text-yellow-400' : 'bg-green-900/30 text-green-400'}`}>
                {task.priority}
              </span>
              <div className="flex items-center text-sm text-indigo-300">
                <span className="mr-2">Status:</span>
                {getStatusOptions(task)}
              </div>
              {task.assignedTo && <div className="flex items-center text-sm text-indigo-300">
                  <UserIcon className="h-4 w-4 mr-1" />
                  {task.assignedTo}
                </div>}
            </div>
          </div>
        </div>)}
    </div>;
}
interface TaskModalProps {
  onClose: () => void;
  onSave: (task: Omit<Task, 'id' | 'createdAt'>) => void;
}
function TaskModal({
  onClose,
  onSave
}: TaskModalProps) {
  const [taskData, setTaskData] = useState<Omit<Task, 'id' | 'createdAt'>>({
    title: '',
    description: '',
    deadline: new Date(),
    priority: 'medium',
    status: 'pending',
    type: 'one-off',
    category: 'administrative',
    tags: []
  });
  const [tagInput, setTagInput] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(taskData);
    onClose();
  };
  const handleAddTag = () => {
    if (tagInput.trim() && !taskData.tags.includes(tagInput.trim())) {
      setTaskData({
        ...taskData,
        tags: [...taskData.tags, tagInput.trim()]
      });
      setTagInput('');
    }
  };
  const handleRemoveTag = (tag: string) => {
    setTaskData({
      ...taskData,
      tags: taskData.tags.filter(t => t !== tag)
    });
  };
  return <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-indigo-900/90 backdrop-blur-md rounded-xl border border-indigo-500/30 p-6 max-w-2xl w-full">
        <h2 className="text-xl font-bold text-white mb-6">Create New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-indigo-300 mb-1">
              Title
            </label>
            <input type="text" value={taskData.title} onChange={e => setTaskData({
            ...taskData,
            title: e.target.value
          })} className="w-full bg-indigo-800/40 border border-indigo-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-indigo-300 mb-1">
              Description
            </label>
            <textarea value={taskData.description} onChange={e => setTaskData({
            ...taskData,
            description: e.target.value
          })} className="w-full bg-indigo-800/40 border border-indigo-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-indigo-300 mb-1">
                Deadline
              </label>
              <input type="date" value={taskData.deadline.toISOString().split('T')[0]} onChange={e => setTaskData({
              ...taskData,
              deadline: new Date(e.target.value)
            })} className="w-full bg-indigo-800/40 border border-indigo-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-300 mb-1">
                Priority
              </label>
              <select value={taskData.priority} onChange={e => setTaskData({
              ...taskData,
              priority: e.target.value as Task['priority']
            })} className="w-full bg-indigo-800/40 border border-indigo-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-300 mb-1">
                Type
              </label>
              <select value={taskData.type} onChange={e => setTaskData({
              ...taskData,
              type: e.target.value as Task['type']
            })} className="w-full bg-indigo-800/40 border border-indigo-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="one-off">One-off</option>
                <option value="ongoing">Ongoing</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-300 mb-1">
                Category
              </label>
              <select value={taskData.category} onChange={e => setTaskData({
              ...taskData,
              category: e.target.value as Task['category']
            })} className="w-full bg-indigo-800/40 border border-indigo-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="administrative">Administrative</option>
                <option value="financial">Financial</option>
                <option value="legal">Legal</option>
                <option value="operational">Operational</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-indigo-300 mb-1">
              Assigned To (optional)
            </label>
            <input type="text" value={taskData.assignedTo || ''} onChange={e => setTaskData({
            ...taskData,
            assignedTo: e.target.value
          })} className="w-full bg-indigo-800/40 border border-indigo-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-indigo-300 mb-1">
              Tags
            </label>
            <div className="flex">
              <input type="text" value={tagInput} onChange={e => setTagInput(e.target.value)} className="flex-1 bg-indigo-800/40 border border-indigo-500/20 rounded-l-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Add tag and press Enter" onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddTag();
              }
            }} />
              <button type="button" onClick={handleAddTag} className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700">
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {taskData.tags.map((tag, index) => <span key={index} className="px-2 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-xs flex items-center">
                  {tag}
                  <button type="button" onClick={() => handleRemoveTag(tag)} className="ml-2 text-indigo-300 hover:text-white">
                    &times;
                  </button>
                </span>)}
            </div>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-indigo-800/40 border border-indigo-500/20 text-white rounded-lg hover:bg-indigo-700/40">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>;
}
export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(dummyTasks);
  const [filter, setFilter] = useState<'all' | 'one-off' | 'ongoing' | 'blocked' | 'completed'>('all');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [sortMode, setSortMode] = useState<'deadline' | 'priority' | 'type'>('deadline');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showTaskTypeDropdown, setShowTaskTypeDropdown] = useState(false);
  const [statusFilter, setStatusFilter] = useState<'all' | 'one-off' | 'ongoing' | 'blocked' | 'completed'>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'tax' | 'financial' | 'company' | 'legal' | 'shipments' | 'kyc'>('all');
  const [initialCategory, setInitialCategory] = useState<Task['category']>();
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'one-off') return task.type === 'one-off';
    if (filter === 'ongoing') return task.type === 'ongoing';
    if (filter === 'blocked') return task.status === 'blocked';
    if (filter === 'completed') return task.status === 'completed';
    return true;
  });
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortMode === 'deadline') {
      return sortDirection === 'asc' ? a.deadline.getTime() - b.deadline.getTime() : b.deadline.getTime() - a.deadline.getTime();
    } else if (sortMode === 'priority') {
      const priorityOrder = {
        high: 0,
        medium: 1,
        low: 2
      };
      return sortDirection === 'asc' ? priorityOrder[a.priority] - priorityOrder[b.priority] : priorityOrder[b.priority] - priorityOrder[a.priority];
    } else {
      return sortDirection === 'asc' ? a.type.localeCompare(b.type) : b.type.localeCompare(a.type);
    }
  });
  const handleStatusChange = (id: string, status: Task['status']) => {
    setTasks(tasks.map(task => task.id === id ? {
      ...task,
      status
    } : task));
  };
  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  const handleAddTask = (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...taskData,
      id: `task-${Date.now()}`,
      createdAt: new Date()
    };
    setTasks([...tasks, newTask]);
  };
  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };
  const taskTypes = [{
    id: 'administrative',
    name: 'Administrative Task',
    description: 'General administrative tasks and operations'
  }, {
    id: 'financial',
    name: 'Financial Task',
    description: 'Tasks related to finances, accounting, and reporting'
  }, {
    id: 'legal',
    name: 'Legal Task',
    description: 'Tasks related to legal compliance and documentation'
  }, {
    id: 'operational',
    name: 'Operational Task',
    description: 'Tasks related to day-to-day business operations'
  }];
  return <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Tasks</h1>
        <p className="text-indigo-300 mt-2">
          Manage and track your company's tasks and to-dos
        </p>
      </div>
      {/* Sub-header with actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="relative">
          <button onClick={() => setShowTaskTypeDropdown(!showTaskTypeDropdown)} className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 flex items-center">
            <PlusIcon className="h-5 w-5 mr-2" />
            Start a New Task
            <ChevronDownIcon className="h-5 w-5 ml-2" />
          </button>
          {showTaskTypeDropdown && <div className="absolute left-0 mt-2 w-64 bg-indigo-900/90 backdrop-blur-md rounded-xl border border-indigo-500/30 shadow-lg z-10">
              <div className="p-2">
                {taskTypes.map(type => <button key={type.id} onClick={() => {
              setShowTaskTypeDropdown(false);
              setShowTaskModal(true);
              setInitialCategory(type.id as Task['category']);
            }} className="w-full text-left px-4 py-3 hover:bg-indigo-800/50 rounded-lg text-white flex items-start">
                    <div className={`p-2 rounded-lg mr-3 ${type.id === 'financial' ? 'bg-blue-900/30' : type.id === 'tax' ? 'bg-green-900/30' : type.id === 'legal' ? 'bg-yellow-900/30' : type.id === 'company' ? 'bg-purple-900/30' : type.id === 'shipments' ? 'bg-orange-900/30' : type.id === 'kyc' ? 'bg-red-900/30' : 'bg-indigo-900/30'}`}>
                      {getCategoryIcon(type.id as Task['category'])}
                    </div>
                    <div>
                      <div className="font-medium">{type.name}</div>
                      <div className="text-xs text-indigo-300 mt-1">
                        {type.description}
                      </div>
                    </div>
                  </button>)}
              </div>
            </div>}
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-indigo-800/40 rounded-lg">
            <button onClick={() => setViewMode('list')} className={`px-3 py-2 rounded-l-lg ${viewMode === 'list' ? 'bg-indigo-600 text-white' : 'text-indigo-300 hover:text-white'}`}>
              <ListIcon className="h-5 w-5" />
            </button>
            <button onClick={() => setViewMode('grid')} className={`px-3 py-2 rounded-r-lg ${viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'text-indigo-300 hover:text-white'}`}>
              <GridIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center bg-indigo-800/40 rounded-lg px-3 py-2">
            <FilterIcon className="h-4 w-4 text-indigo-300 mr-2" />
            <select value={sortMode} onChange={e => setSortMode(e.target.value as 'deadline' | 'priority' | 'type')} className="bg-transparent text-white text-sm border-none focus:outline-none focus:ring-0">
              <option value="deadline">Sort by Deadline</option>
              <option value="priority">Sort by Priority</option>
              <option value="type">Sort by Type</option>
            </select>
            <button onClick={toggleSortDirection} className="ml-2 text-indigo-300 hover:text-white">
              {sortDirection === 'asc' ? <ArrowUpIcon className="h-4 w-4" /> : <ArrowDownIcon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
      {/* Filter tabs - Status filters */}
      <div className="flex flex-wrap mb-4 border-b border-indigo-500/20">
        <button onClick={() => setStatusFilter('all')} className={`px-4 py-2 text-sm font-medium ${statusFilter === 'all' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
          All Tasks
        </button>
        <button onClick={() => setStatusFilter('one-off')} className={`px-4 py-2 text-sm font-medium ${statusFilter === 'one-off' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
          One-off
        </button>
        <button onClick={() => setStatusFilter('ongoing')} className={`px-4 py-2 text-sm font-medium ${statusFilter === 'ongoing' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
          Ongoing
        </button>
        <button onClick={() => setStatusFilter('blocked')} className={`px-4 py-2 text-sm font-medium ${statusFilter === 'blocked' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
          Blocked
        </button>
        <button onClick={() => setStatusFilter('completed')} className={`px-4 py-2 text-sm font-medium ${statusFilter === 'completed' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
          Completed
        </button>
      </div>
      {/* Category filters */}
      <div className="flex flex-wrap mb-6 space-x-2">
        <span className="text-indigo-300 text-sm flex items-center px-2">
          Categories:
        </span>
        <button onClick={() => setCategoryFilter('all')} className={`px-3 py-1 text-xs font-medium rounded-full ${categoryFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-indigo-800/40 text-indigo-300 hover:text-white'}`}>
          All
        </button>
        <button onClick={() => setCategoryFilter('tax')} className={`px-3 py-1 text-xs font-medium rounded-full ${categoryFilter === 'tax' ? 'bg-green-900 text-white' : 'bg-green-900/30 text-green-300 hover:bg-green-900/50'}`}>
          Tax
        </button>
        <button onClick={() => setCategoryFilter('financial')} className={`px-3 py-1 text-xs font-medium rounded-full ${categoryFilter === 'financial' ? 'bg-blue-900 text-white' : 'bg-blue-900/30 text-blue-300 hover:bg-blue-900/50'}`}>
          Finance
        </button>
        <button onClick={() => setCategoryFilter('company')} className={`px-3 py-1 text-xs font-medium rounded-full ${categoryFilter === 'company' ? 'bg-purple-900 text-white' : 'bg-purple-900/30 text-purple-300 hover:bg-purple-900/50'}`}>
          Company
        </button>
        <button onClick={() => setCategoryFilter('legal')} className={`px-3 py-1 text-xs font-medium rounded-full ${categoryFilter === 'legal' ? 'bg-yellow-900 text-white' : 'bg-yellow-900/30 text-yellow-300 hover:bg-yellow-900/50'}`}>
          Legal Agreements
        </button>
        <button onClick={() => setCategoryFilter('shipments')} className={`px-3 py-1 text-xs font-medium rounded-full ${categoryFilter === 'shipments' ? 'bg-orange-900 text-white' : 'bg-orange-900/30 text-orange-300 hover:bg-orange-900/50'}`}>
          Shipments
        </button>
        <button onClick={() => setCategoryFilter('kyc')} className={`px-3 py-1 text-xs font-medium rounded-full ${categoryFilter === 'kyc' ? 'bg-red-900 text-white' : 'bg-red-900/30 text-red-300 hover:bg-red-900/50'}`}>
          KYC
        </button>
      </div>
      {/* Task count */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium text-white">
          {categoryFilter !== 'all' && <span className="capitalize">{categoryFilter} </span>}
          {statusFilter === 'all' ? 'Tasks' : statusFilter === 'one-off' ? 'One-off Tasks' : statusFilter === 'ongoing' ? 'Ongoing Tasks' : statusFilter === 'blocked' ? 'Blocked Tasks' : 'Completed Tasks'}
          <span className="ml-2 text-indigo-300 text-sm">
            ({filteredTasks.length})
          </span>
        </h2>
        {/* Quick add button for the current category */}
        {categoryFilter !== 'all' && <button onClick={() => {
        setInitialCategory(categoryFilter as Task['category']);
        setShowTaskModal(true);
      }} className="px-3 py-1.5 bg-indigo-800/60 text-white rounded-lg hover:bg-indigo-700/60 text-sm flex items-center">
            <PlusIcon className="h-4 w-4 mr-1" />
            Add{' '}
            {categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)}{' '}
            Task
          </button>}
      </div>
      {/* Task list */}
      {filteredTasks.length === 0 ? <div className="bg-indigo-800/40 backdrop-blur-md rounded-xl border border-indigo-500/20 p-8 text-center">
          <p className="text-indigo-300">
            No tasks found. Create a new task to get started.
          </p>
          <button onClick={() => setShowTaskModal(true)} className="mt-4 px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 inline-flex items-center">
            <PlusIcon className="h-5 w-5 mr-2" />
            Create Task
          </button>
        </div> : <TodoList tasks={filteredTasks} viewMode={viewMode} onStatusChange={handleStatusChange} onDelete={handleDeleteTask} />}
      {/* Task creation modal */}
      {showTaskModal && <TaskModal initialCategory={initialCategory} onClose={() => {
      setShowTaskModal(false);
      setInitialCategory(undefined);
    }} onSave={handleAddTask} />}
    </div>;
}