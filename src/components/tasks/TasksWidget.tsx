import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckSquareIcon, PlusIcon, ArrowRightIcon, ClockIcon, AlertTriangleIcon, CheckCircleIcon } from 'lucide-react';
interface TasksWidgetProps {
  category: 'tax' | 'financial' | 'company' | 'legal' | 'shipments' | 'kyc';
  limit?: number;
}
export function TasksWidget({
  category,
  limit = 3
}: TasksWidgetProps) {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Here you would fetch tasks for the specific category
    // This is a placeholder - replace with actual API call
    setLoading(true);
    const fetchTasks = async () => {
      // Simulate API call
      const mockTasks = [{
        id: '1',
        title: `${category.charAt(0).toUpperCase() + category.slice(1)} task example`,
        deadline: new Date(Date.now() + 86400000 * 5),
        status: 'pending',
        priority: 'high'
      }, {
        id: '2',
        title: `Another ${category} related task`,
        deadline: new Date(Date.now() + 86400000 * 2),
        status: 'in-progress',
        priority: 'medium'
      }];
      setTimeout(() => {
        setTasks(mockTasks);
        setLoading(false);
      }, 500);
    };
    fetchTasks();
  }, [category]);
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="h-4 w-4 text-green-400" />;
      case 'in-progress':
        return <ClockIcon className="h-4 w-4 text-blue-400" />;
      case 'blocked':
        return <AlertTriangleIcon className="h-4 w-4 text-[#EA3A70]" />;
      default:
        return <ClockIcon className="h-4 w-4 text-yellow-400" />;
    }
  };
  const getCategoryColor = () => {
    switch (category) {
      case 'tax':
        return 'bg-green-900/30 text-green-300';
      case 'financial':
        return 'bg-blue-900/30 text-blue-300';
      case 'company':
        return 'bg-purple-900/30 text-purple-300';
      case 'legal':
        return 'bg-yellow-900/30 text-yellow-300';
      case 'shipments':
        return 'bg-orange-900/30 text-orange-300';
      case 'kyc':
        return 'bg-red-900/30 text-red-300';
      default:
        return 'bg-indigo-900/30 text-indigo-300';
    }
  };
  return <div className="bg-indigo-800/40 backdrop-blur-md rounded-xl border border-indigo-500/20 p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <CheckSquareIcon className="h-5 w-5 text-indigo-300 mr-2" />
          <h3 className="text-lg font-medium text-white">Related Tasks</h3>
        </div>
        <Link to={`/tasks?category=${category}`} className="text-indigo-300 hover:text-white text-sm flex items-center">
          View All
          <ArrowRightIcon className="h-4 w-4 ml-1" />
        </Link>
      </div>
      {loading ? <div className="py-4 text-center text-indigo-300">Loading tasks...</div> : tasks.length === 0 ? <div className="py-4 text-center text-indigo-300">No tasks found</div> : <div className="space-y-2 mb-3">
          {tasks.slice(0, limit).map(task => <div key={task.id} className="bg-indigo-900/30 rounded-lg p-3 flex items-start">
              {getStatusIcon(task.status)}
              <div className="ml-3 flex-1">
                <div className="text-white text-sm font-medium">
                  {task.title}
                </div>
                <div className="flex items-center mt-1 text-xs">
                  <span className={`px-2 py-0.5 rounded-full ${getCategoryColor()}`}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                  <span className="text-indigo-300 ml-2">
                    Due: {task.deadline.toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>)}
        </div>}
      <Link to={`/tasks?category=${category}&new=true`} className="w-full px-3 py-2 bg-indigo-900/50 hover:bg-indigo-800/50 text-white rounded-lg text-sm flex items-center justify-center">
        <PlusIcon className="h-4 w-4 mr-1" />
        Add {category.charAt(0).toUpperCase() + category.slice(1)} Task
      </Link>
    </div>;
}